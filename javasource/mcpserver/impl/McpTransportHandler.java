package mcpserver.impl;

import io.modelcontextprotocol.json.McpJsonMapper;
import io.modelcontextprotocol.json.TypeRef;
import com.mendix.core.CoreException;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
import reactor.core.publisher.Mono;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.modelcontextprotocol.spec.*;
import mcpserver.proxies.McpServer;

/**
 * Streamable HTTP transport handler for MCP protocol.
 * Implements the Streamable HTTP protocol version (2025-03-26) for bidirectional communication.
 * Uses a single /mcp endpoint for all operations (POST and DELETE).
 * Session identification via Mcp-Session-Id header.
 */
public class McpTransportHandler {
    
    private static final MxLogger LOGGER = new MxLogger(McpTransportHandler.class);
    // Custom ObjectMapper configured to ignore unknown properties for forward compatibility
    // Required until SDK PR #725 is merged
    private static final ObjectMapper LENIENT_MAPPER = createLenientMapper();
    // Keep default mapper for serialization operations
    private static final McpJsonMapper MAPPER = McpJsonMapper.getDefault();
    
    public static final String UTF_8 = "UTF-8";
    public static final String APPLICATION_JSON = "application/json";
    public static final String TEXT_EVENT_STREAM = "text/event-stream";
    public static final String SESSION_HEADER = "Mcp-Session-Id";  // Streamable HTTP uses Mcp-Session-Id
    
    /**
     * Mix-in interface to override Jackson annotations and ignore unknown properties.
     * This is used to make SDK classes forward-compatible with newer protocol versions.
     * Once PR #725 is merged into the SDK, this workaround can be removed.
     * @see <a href="https://github.com/modelcontextprotocol/java-sdk/pull/725">SDK PR #725</a>
     */
    @JsonIgnoreProperties(ignoreUnknown = true)
    private interface IgnoreUnknownPropertiesMixin {}
    
    /**
     * Creates an ObjectMapper that ignores unknown properties.
     * This ensures forward compatibility when clients use newer protocol versions
     * with capabilities/fields that this server version doesn't recognize.
     * 
     * This is a workaround for SDK issue #724 where the Elicitation and Sampling
     * classes don't ignore unknown properties, causing deserialization to fail when
     * clients (like VS Code) use protocol version 2025-11-25.
     */
    private static ObjectMapper createLenientMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        // Disable failing on unknown properties - critical for forward compatibility
        objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        objectMapper.disable(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES);
        
        // Add mix-in annotations to override SDK class annotations
        // These two classes are the ones fixed in SDK PR #725
        objectMapper.addMixIn(McpSchema.ClientCapabilities.Sampling.class, IgnoreUnknownPropertiesMixin.class);
        objectMapper.addMixIn(McpSchema.ClientCapabilities.Elicitation.class, IgnoreUnknownPropertiesMixin.class);
        // Also add for parent classes to ensure mix-ins propagate
        objectMapper.addMixIn(McpSchema.ClientCapabilities.class, IgnoreUnknownPropertiesMixin.class);
        objectMapper.addMixIn(McpSchema.InitializeRequest.class, IgnoreUnknownPropertiesMixin.class);
        objectMapper.addMixIn(McpSchema.JSONRPCRequest.class, IgnoreUnknownPropertiesMixin.class);
        
        return objectMapper;
    }
    
    private final McpServer mcpServer;
    private final McpSessionManager sessionManager;
    private McpServerSession.Factory sessionFactory;
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    private final Map<String, StreamableHttpSessionTransport> transports = new java.util.concurrent.ConcurrentHashMap<>();
    
    /**
     * Creates a new Streamable HTTP transport handler.
     * Streamable HTTP uses a single /mcp endpoint for all POST operations.
     * @param mcpServer The MCP server configuration (must not be null)
     * @param sessionManager The session manager instance for this MCP server
     * @throws IllegalArgumentException if mcpServer or sessionManager is null
     */
    public McpTransportHandler(McpServer mcpServer, McpSessionManager sessionManager) {
        if (mcpServer == null) {
            throw new IllegalArgumentException("mcpServer cannot be null");
        }
        if (sessionManager == null) {
            throw new IllegalArgumentException("sessionManager cannot be null");
        }
        this.mcpServer = mcpServer;
        this.sessionManager = sessionManager;
        LOGGER.debug("McpTransportHandler created with SessionManager: " + System.identityHashCode(sessionManager));
    }
    
    public boolean canHandlePath(String path) {
        return path.endsWith("mcp");
    }
    
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        this.sessionFactory = sessionFactory;
        // Also register with session manager for session persistence
        sessionManager.setSessionFactory(sessionFactory);
    }
    
    public void handleHead(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        setStreamableHttpResponseHeaders(httpResponse);
        httpResponse.setStatus(HttpServletResponse.SC_OK);
    }
    
    public void handleGet(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        httpResponse.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, 
                              "Streamable HTTP only supports POST and DELETE on /mcp endpoint");
    }
    
    public void handlePost(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletRequest httpRequest = request.getHttpServletRequest();
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        
        // Check if server is shutting down
        if (isClosing.get()) {
            httpResponse.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }
        
        // Validate endpoint path
        if (!path.endsWith("mcp")) {
            httpResponse.sendError(HttpServletResponse.SC_NOT_FOUND, "Streamable HTTP only accepts POST on /mcp");
            return;
        }
        
        // Get session ID from header, or generate a new one
        String sessionId = httpRequest.getHeader(SESSION_HEADER);
        if (sessionId == null || sessionId.isEmpty()) {
            sessionId = java.util.UUID.randomUUID().toString();
            LOGGER.debug("No session ID provided, generated new: " + sessionId);
        }
        
        McpServerSession session;
        StreamableHttpSessionTransport sessionTransport;
        
        try {
            // Get or create session and transport (atomic operation)
            synchronized (transports) {
                session = sessionManager.getSession(sessionId);
                
                if (session == null) {
                    // New MCP session - authenticate and create Mendix session if authentication is configured
                    String mendixSessionId = getSessionId(httpRequest, mcpServer);
                    
                    // Create new session with transport atomically
                    sessionTransport = new StreamableHttpSessionTransport(sessionId, httpResponse);
                    transports.put(sessionId, sessionTransport);
                    try {
                        sessionManager.createSession(sessionId, sessionTransport);
                        session = sessionManager.getSession(sessionId);
                        httpResponse.setHeader(SESSION_HEADER, sessionId);
                        
                        // Associate the Mendix session with this MCP session (for authenticated user context)
                        if (mendixSessionId != null) {
                            sessionManager.setMendixSessionForMcpSession(sessionId, mendixSessionId);
                        }
                        
                        LOGGER.debug("Created new session: " + sessionId);
                    } catch (Exception e) {
                        transports.remove(sessionId);
                        // Clean up the Mendix session if we created one but failed to create MCP session
                        if (mendixSessionId != null) {
                            sessionManager.logoutMendixSession(mendixSessionId);
                        }
                        LOGGER.error("Failed to create session: " + sessionId, e);
                        sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                                     "Failed to create session: " + e.getMessage());
                        return;
                    }
                } else {
                    // Existing MCP session - validate credentials if authentication is configured
                    if (sessionManager.isAuthenticationRequired(mcpServer)) {
                        // Always validate credentials on every request for security
                        String authenticatedUsername = sessionManager.authenticateAndGetUsername(httpRequest, mcpServer);
                        
                        if (authenticatedUsername == null) {
                            // Authentication failed - reject request
                            LOGGER.debug("Authentication failed for session: " + sessionId);
                            sendJsonError(httpResponse, HttpServletResponse.SC_UNAUTHORIZED, 
                                         "Authentication failed");
                            return;
                        }
                        
                        // Check if the authenticated user matches the session owner
                        String existingMendixSessionId = sessionManager.getMendixSessionIdForMcpSession(sessionId);
                        String sessionOwnerUsername = sessionManager.getUsernameForMendixSession(existingMendixSessionId);
                        
                        if (sessionOwnerUsername != null && !sessionOwnerUsername.equals(authenticatedUsername)) {
                            // Different user's credentials provided for this session - reject with generic error
                            LOGGER.warn("Session " + sessionId + " belongs to user '" + sessionOwnerUsername + 
                                       "' but credentials provided are for user '" + authenticatedUsername + "'");
                            sendJsonError(httpResponse, HttpServletResponse.SC_UNAUTHORIZED, 
                                         "Authentication failed");
                            return;
                        }
                        
                        LOGGER.debug("Credentials validated for existing session: " + sessionId + ", user: " + authenticatedUsername);
                    }
                    
                    // Credentials valid (or no auth required) - reuse existing session
                    sessionTransport = transports.get(sessionId);
                    if (sessionTransport == null) {
                        LOGGER.error("Transport not found for session: " + sessionId);
                        sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, 
                                     "Internal error: transport not found for session");
                        return;
                    }
                    LOGGER.debug("Using existing session: " + sessionId);
                }
            }
            
            // Read and process the message
            String bodyString = readRequestBody(httpRequest);
            LOGGER.debug("Received request body: " + bodyString);
            
            // Deserialize using lenient mapper to handle unknown fields in newer protocol versions
            McpSchema.JSONRPCMessage message = deserializeJsonRpcMessage(bodyString);
            
            // Log message type
            String messageType = message.getClass().getSimpleName();
            LOGGER.debug("Processing message type: " + messageType);
            
            // Extract request ID and register this request with its response object
            Object requestId = null;
            if (message instanceof McpSchema.JSONRPCRequest) {
                requestId = ((McpSchema.JSONRPCRequest) message).id();
                sessionTransport.registerRequest(requestId, httpResponse);
            }
            
            try {
                // Check if this is a request for an unsupported optional method
                // Return empty success response immediately so clients can continue
                if (message instanceof McpSchema.JSONRPCRequest) {
                    McpSchema.JSONRPCRequest jsonRpcRequest = (McpSchema.JSONRPCRequest) message;
                    String method = jsonRpcRequest.method();
                    
                    if (isUnsupportedOptionalMethod(method)) {
                        LOGGER.debug("Unsupported optional method: " + method + ", returning empty success response");
                        McpSchema.JSONRPCResponse emptyResponse = new McpSchema.JSONRPCResponse(
                            McpSchema.JSONRPC_VERSION,
                            jsonRpcRequest.id(),
                            java.util.Collections.emptyMap(),
                            null
                        );
                        sessionTransport.sendMessage(emptyResponse).block();
                        LOGGER.debug("Message handled successfully");
                        return;
                    }
                }
                
                // Handle supported methods through the SDK
                LOGGER.debug("Calling session.handle() for message");
                try {
                    session.handle(message)
                        .timeout(java.time.Duration.ofSeconds(30))
                        .block();
                } catch (Exception handleEx) {
                    LOGGER.warn("session.handle() failed or timed out: " + handleEx.getMessage());
                    // If no response was sent and this is a request, send an error
                    if (message instanceof McpSchema.JSONRPCRequest && !sessionTransport.wasMessageSent(requestId)) {
                        McpSchema.JSONRPCRequest jsonRpcRequest = (McpSchema.JSONRPCRequest) message;
                        McpSchema.JSONRPCResponse errorResponse = new McpSchema.JSONRPCResponse(
                            McpSchema.JSONRPC_VERSION,
                            jsonRpcRequest.id(),
                            null,
                            new McpSchema.JSONRPCResponse.JSONRPCError(-32603, "Internal error: " + handleEx.getMessage(), null)
                        );
                        sessionTransport.sendMessage(errorResponse).block();
                    }
                }
                
                LOGGER.debug("Message handled successfully for request: " + requestId);
                
            } finally {
                // Unregister request after completion
                if (requestId != null) {
                    sessionTransport.unregisterRequest(requestId);
                }
            }
            
        } catch (Exception e) {
            LOGGER.error("Error processing MCP message: " + e.getMessage(), e);
            if (!httpResponse.isCommitted()) {
                sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
            }
        }
    }
    
    public void handleDelete(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletRequest httpRequest = request.getHttpServletRequest();
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        
        if (!path.endsWith("mcp")) {
            LOGGER.warn("DELETE rejected - path does not end with 'mcp': " + path);
            httpResponse.sendError(HttpServletResponse.SC_NOT_FOUND, "DELETE only accepted on /mcp");
            return;
        }
        
        // Get session ID from Mcp-Session-Id header
        String sessionId = httpRequest.getHeader(SESSION_HEADER);
        LOGGER.debug("DELETE - Session ID from header: " + sessionId);
        
        if (sessionId == null || sessionId.isEmpty()) {
            LOGGER.warn("DELETE rejected - no session ID provided");
            httpResponse.sendError(HttpServletResponse.SC_BAD_REQUEST, "Mcp-Session-Id header required for DELETE");
            return;
        }
        
        // Close the session
        McpServerSession session = sessionManager.getSession(sessionId);
        LOGGER.debug("DELETE - Session for id: " + sessionId + " found: " + (session != null));
        
        if (session != null) {
            try {
                LOGGER.debug("Closing session gracefully: " + sessionId);
                session.closeGracefully().block();
                sessionManager.closeSession(sessionId);
                transports.remove(sessionId);
                
                // 204 No Content must not have a body - just set status
                httpResponse.setStatus(HttpServletResponse.SC_NO_CONTENT);
                
                LOGGER.debug("Session closed successfully: " + sessionId);
            } catch (Exception e) {
                LOGGER.error("Error closing session: " + sessionId, e);
                httpResponse.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                                      "Error closing session: " + e.getMessage());
            }
        } else {
            // Session not found - return 204 anyway (idempotent delete)
            LOGGER.debug("DELETE - session not found, returning 204 anyway: " + sessionId);
            httpResponse.setStatus(HttpServletResponse.SC_NO_CONTENT);
        }
    }
    
    /**
     * Gracefully closes the transport handler and all active sessions.
     * Sets closing flag to reject new requests and closes all sessions with timeout.
     */
    public void closeGracefully() throws Exception {
        isClosing.set(true);
        LOGGER.debug("Closing transport handler gracefully, " + transports.size() + " active sessions");
        
        // Close all active sessions with a timeout
        for (String sessionId : transports.keySet()) {
            try {
                LOGGER.debug("Closing session during shutdown: " + sessionId);
                sessionManager.closeSession(sessionId);
            } catch (Exception e) {
                LOGGER.warn("Failed to close session " + sessionId + " during shutdown: " + e.getMessage());
                // Continue closing other sessions
            }
        }
        transports.clear();
        LOGGER.info("Transport handler closed");
    }
    
    /**
     * Supported MCP methods that this server handles.
     * Any request method not in this list will receive an empty success response.
     */
    private static final java.util.Set<String> SUPPORTED_METHODS = java.util.Set.of(
        "initialize",
        "ping",
        "tools/list",
        "tools/call",
        "prompts/list",
        "prompts/get"
    );
    
    /**
     * Check if a method is an unsupported optional method.
     * Unsupported methods get an empty success response so clients can continue.
     */
    private boolean isUnsupportedOptionalMethod(String method) {
        return !SUPPORTED_METHODS.contains(method);
    }
    
    /**
     * Deserialize JSON-RPC message using lenient ObjectMapper.
     * This custom implementation handles unknown properties in newer protocol versions
     * by stripping out fields that the SDK doesn't recognize.
     */
    private McpSchema.JSONRPCMessage deserializeJsonRpcMessage(String json) throws IOException {
        try {
            // Parse JSON into a mutable tree
            JsonNode rootNode = LENIENT_MAPPER.readTree(json);
            
            // Strip unknown fields from capabilities if this is an initialize request
            if (rootNode.has("method") && "initialize".equals(rootNode.get("method").asText())) {
                JsonNode paramsNode = rootNode.get("params");
                if (paramsNode != null && paramsNode.has("capabilities")) {
                    JsonNode capabilitiesNode = paramsNode.get("capabilities");
                    if (capabilitiesNode.isObject()) {
                        // Remove unknown fields from elicitation
                        JsonNode elicitationNode = capabilitiesNode.get("elicitation");
                        if (elicitationNode != null && elicitationNode.isObject()) {
                            ((com.fasterxml.jackson.databind.node.ObjectNode) elicitationNode).remove("form");
                            ((com.fasterxml.jackson.databind.node.ObjectNode) elicitationNode).remove("url");
                        }
                        
                        // Remove unknown fields from sampling
                        JsonNode samplingNode = capabilitiesNode.get("sampling");
                        if (samplingNode != null && samplingNode.isObject()) {
                            ((com.fasterxml.jackson.databind.node.ObjectNode) samplingNode).remove("tools");
                        }
                        
                        // Remove entire tasks capability (not supported yet)
                        ((com.fasterxml.jackson.databind.node.ObjectNode) capabilitiesNode).remove("tasks");
                    }
                }
                
                // Convert cleaned tree back to JSON string
                json = LENIENT_MAPPER.writeValueAsString(rootNode);
            }
            
            // Now deserialize with the default SDK mapper
            return McpSchema.deserializeJsonRpcMessage(MAPPER, json);
            
        } catch (Exception e) {
            LOGGER.error("Failed to deserialize JSON-RPC message: " + e.getMessage(), e);
            throw new IOException("Failed to deserialize JSON-RPC message", e);
        }
    }
    
    /**
     * Helper method to read the request body as a string.
     * Uses char buffer to preserve newlines (readLine() strips them).
     * Note: BufferedReader is owned by servlet container and should not be closed here.
     */
    private String readRequestBody(HttpServletRequest request) throws IOException {
        StringBuilder body = new StringBuilder();
        BufferedReader reader = request.getReader();
        char[] buffer = new char[8192];
        int charsRead;
        
        while ((charsRead = reader.read(buffer)) != -1) {
            body.append(buffer, 0, charsRead);
        }
        
        String result = body.toString();
        if (result.isEmpty()) {
            throw new IOException("Request body is empty");
        }
        
        return result;
    }
    
    /**
     * Helper method to send a JSON error response.
     * Only sends the error message, not internal details like stack traces.
     */
    private void sendJsonError(HttpServletResponse response, int statusCode, String message) throws IOException {
        if (!response.isCommitted()) {
            response.setStatus(statusCode);
            setStreamableHttpResponseHeaders(response);
            // Create a simple JSON error response without exposing internal details
            String jsonError = "{\"error\":{\"code\":" + statusCode + ",\"message\":\"" + message + "\"}}";
            response.getOutputStream().write(jsonError.getBytes(UTF_8));
            response.getOutputStream().flush();
            response.flushBuffer(); // Commit the response
        }
    }
    
    private void setStreamableHttpResponseHeaders(HttpServletResponse response) {
        response.setContentType(APPLICATION_JSON);
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache");
    }
    
    /**
     * Set response headers for SSE (Server-Sent Events) format.
     * VS Code and some other MCP clients expect SSE format for Streamable HTTP transport.
     */
    private void setSSEResponseHeaders(HttpServletResponse response) {
        response.setContentType(TEXT_EVENT_STREAM);
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache, no-transform");
        response.setHeader("Connection", "keep-alive");
    }
    
    protected String getSessionId(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException {
        // Authenticate user and get Mendix session ID (if authentication is configured)
        return sessionManager.authenticateAndCreateMendixSession(httpServletRequest, mcpServer);
    }
    
    /**
     * Implementation of McpServerTransport for Streamable HTTP sessions.
     * Uses synchronous HTTP request/response for bidirectional communication.
     * Supports concurrent requests by tracking responses per JSON-RPC request ID.
     * Cleanup is handled by the finally block in handlePost() after each request.
     */
    private class StreamableHttpSessionTransport implements McpServerTransport {
        
        private final String sessionId;
        // Map of JSON-RPC request ID to pending response info
        private final Map<Object, PendingRequest> pendingRequests = new java.util.concurrent.ConcurrentHashMap<>();
        
        /**
         * Holds information about a pending request awaiting a response.
         */
        private static class PendingRequest {
            final HttpServletResponse response;
            volatile boolean messageSent = false;
            
            PendingRequest(HttpServletResponse response) {
                this.response = response;
            }
        }
        
        StreamableHttpSessionTransport(String sessionId, HttpServletResponse response) {
            this.sessionId = sessionId;
            // Initial response is not associated with any request ID yet
        }
        
        /**
         * Register a pending request with its response object.
         * @param requestId The JSON-RPC request ID
         * @param response The HTTP response object for this request
         */
        public void registerRequest(Object requestId, HttpServletResponse response) {
            if (requestId != null) {
                pendingRequests.put(requestId, new PendingRequest(response));
                LOGGER.debug("Registered pending request: " + requestId + " for session: " + sessionId);
            }
        }
        
        /**
         * Unregister a completed request.
         * @param requestId The JSON-RPC request ID
         */
        public void unregisterRequest(Object requestId) {
            if (requestId != null) {
                pendingRequests.remove(requestId);
                LOGGER.debug("Unregistered request: " + requestId + " for session: " + sessionId);
            }
        }
        
        /**
         * Check if a message was sent for a specific request.
         * @param requestId The JSON-RPC request ID
         */
        public boolean wasMessageSent(Object requestId) {
            PendingRequest pending = pendingRequests.get(requestId);
            return pending != null && pending.messageSent;
        }
        
        @Override
        public Mono<Void> sendMessage(McpSchema.JSONRPCMessage message) {
            return Mono.fromRunnable(() -> {
                // Drop notifications - Streamable HTTP clients cannot receive server-initiated notifications
                if (message instanceof McpSchema.JSONRPCNotification) {
                    LOGGER.debug("Dropping notification for session: " + sessionId + 
                               " - method: " + ((McpSchema.JSONRPCNotification) message).method());
                    return;
                }
                
                // Extract the request ID from the response to find the correct pending request
                Object requestId = null;
                if (message instanceof McpSchema.JSONRPCResponse) {
                    requestId = ((McpSchema.JSONRPCResponse) message).id();
                }
                
                if (requestId == null) {
                    LOGGER.warn("Cannot send message without request ID for session: " + sessionId);
                    return;
                }
                
                PendingRequest pending = pendingRequests.get(requestId);
                if (pending == null) {
                    LOGGER.warn("No pending request found for ID: " + requestId + " in session: " + sessionId);
                    return;
                }
                
                synchronized (pending) {
                    // If already sent for this request, skip (idempotent)
                    if (pending.messageSent) {
                        LOGGER.debug("Message already sent for request: " + requestId + ", skipping duplicate");
                        return;
                    }
                    
                    String messageType = message.getClass().getSimpleName();
                    LOGGER.debug("Sending response for request: " + requestId + ", session: " + sessionId + ", type: " + messageType);
                    sendMessageNow(message, pending.response);
                    pending.messageSent = true;
                    LOGGER.debug("Response sent successfully for request: " + requestId);
                }
            });
        }
        
        private void sendMessageNow(McpSchema.JSONRPCMessage message, HttpServletResponse targetResponse) {
            if (targetResponse == null) {
                LOGGER.warn("Cannot send message, response is null for session: " + sessionId);
                return;
            }
            
            try {
                if (targetResponse.isCommitted()) {
                    LOGGER.warn("Cannot send message, response already committed for session: " + sessionId);
                    return;
                }
                
                targetResponse.setStatus(HttpServletResponse.SC_OK);
                // Use SSE format for VS Code and other clients that expect text/event-stream
                setSSEResponseHeaders(targetResponse);
                
                String jsonText = MAPPER.writeValueAsString(message);
                // SSE format: each event is prefixed with "data: " and terminated with double newline
                String sseEvent = "data: " + jsonText + "\n\n";
                targetResponse.getOutputStream().write(sseEvent.getBytes(UTF_8));
                targetResponse.getOutputStream().flush();
                targetResponse.flushBuffer();
                
                LOGGER.debug("Message sent (SSE format) for session: " + sessionId);
                
            } catch (Exception e) {
                LOGGER.error("Failed to send message for session " + sessionId + ": " + e.getMessage(), e);
            }
        }
        
        @Override
        public <T> T unmarshalFrom(Object data, TypeRef<T> typeRef) {
            return MAPPER.convertValue(data, typeRef);
        }
        
        @Override
        public Mono<Void> closeGracefully() {
            return Mono.fromRunnable(() -> {
                LOGGER.debug("Gracefully closing transport for session: " + sessionId);
                transports.remove(sessionId);
                sessionManager.closeSession(sessionId);
            });
        }
        
        @Override
        public void close() {
            LOGGER.debug("Closing transport for session: " + sessionId);
            transports.remove(sessionId);
            sessionManager.closeSession(sessionId);
        }
    }
}
