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
    private McpServerSession.Factory sessionFactory;
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    private final Map<String, StreamableHttpSessionTransport> transports = new java.util.concurrent.ConcurrentHashMap<>();
    
    /**
     * Creates a new Streamable HTTP transport handler.
     * Streamable HTTP uses a single /mcp endpoint for all POST operations.
     * @param mcpServer The MCP server configuration (must not be null)
     * @throws IllegalArgumentException if mcpServer is null
     */
    public McpTransportHandler(McpServer mcpServer) {
        if (mcpServer == null) {
            throw new IllegalArgumentException("mcpServer cannot be null");
        }
        this.mcpServer = mcpServer;
    }
    
    public boolean canHandlePath(String path) {
        return path.endsWith("mcp");
    }
    
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        this.sessionFactory = sessionFactory;
        // Also register with session manager for session persistence
        McpSessionManager.getInstance().setSessionFactory(sessionFactory);
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
        
        // Authenticate and get/create Mendix session (if authentication is configured)
        String mendixSessionId = getSessionId(httpRequest, mcpServer);
        
        McpSessionManager sessionManager = McpSessionManager.getInstance();
        McpServerSession session;
        StreamableHttpSessionTransport sessionTransport;
        
        try {
            // Get or create session and transport (atomic operation)
            synchronized (transports) {
                session = sessionManager.getSession(sessionId);
                
                if (session == null) {
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
                        LOGGER.error("Failed to create session: " + sessionId, e);
                        sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                                     "Failed to create session: " + e.getMessage());
                        return;
                    }
                } else {
                    // Get existing transport
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
            
            // Set the response object for this request
            sessionTransport.setResponse(httpResponse);
            
            // Read and process the message
            String bodyString = readRequestBody(httpRequest);
            LOGGER.debug("Received request body: " + bodyString);
            
            // Deserialize using lenient mapper to handle unknown fields in newer protocol versions
            McpSchema.JSONRPCMessage message = deserializeJsonRpcMessage(bodyString);
            
            // Log message type
            String messageType = message.getClass().getSimpleName();
            LOGGER.debug("Processing message type: " + messageType);
            
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
                if (message instanceof McpSchema.JSONRPCRequest && !sessionTransport.wasMessageSent()) {
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
            
            LOGGER.debug("Message handled successfully, messageSent=" + sessionTransport.wasMessageSent());
            
        } catch (Exception e) {
            LOGGER.error("Error processing MCP message: " + e.getMessage(), e);
            if (!httpResponse.isCommitted()) {
                sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
            }
        } finally {
            // Clear response after request completes but keep session alive
            StreamableHttpSessionTransport transport = transports.get(sessionId);
            if (transport != null) {
                transport.clearResponse();
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
        McpSessionManager sessionManager = McpSessionManager.getInstance();
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
        McpSessionManager sessionManager = McpSessionManager.getInstance();
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
     * Helper method to send a JSON error response
     */
    private void sendJsonError(HttpServletResponse response, int statusCode, String message) throws IOException {
        if (!response.isCommitted()) {
            response.setStatus(statusCode);
            setStreamableHttpResponseHeaders(response);
            String jsonError = MAPPER.writeValueAsString(new McpError(message));
            response.getOutputStream().write(jsonError.getBytes(UTF_8));
            response.getOutputStream().flush();
            response.flushBuffer(); // Commit the response
        }
    }
    
    private void setStreamableHttpResponseHeaders(HttpServletResponse response) {
        response.setContentType(APPLICATION_JSON);
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Mcp-Session-Id");
        response.setHeader("Access-Control-Expose-Headers", "Mcp-Session-Id");
    }
    
    protected String getSessionId(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException {
        // Authenticate user and get Mendix session ID (if authentication is configured)
        return McpSessionManager.getInstance().authenticateAndCreateMendixSession(httpServletRequest, mcpServer);
    }
    
    /**
     * Implementation of McpServerTransport for Streamable HTTP sessions.
     * Uses synchronous HTTP request/response for bidirectional communication.
     */
    private class StreamableHttpSessionTransport implements McpServerTransport {
        
        private final String sessionId;
        private final Object lock = new Object();
        private volatile HttpServletResponse response;
        private volatile boolean messageSent = false;
        
        StreamableHttpSessionTransport(String sessionId, HttpServletResponse response) {
            this.sessionId = sessionId;
            this.response = response;
        }
        
        /**
         * Set the response object for this request.
         * @param newResponse The response object for this request
         */
        public void setResponse(HttpServletResponse newResponse) {
            synchronized (lock) {
                this.response = newResponse;
                this.messageSent = false; // Reset flag for new request
            }
        }
        
        /**
         * Clear the response object after request completes.
         */
        public void clearResponse() {
            synchronized (lock) {
                this.response = null;
                this.messageSent = false;
            }
        }
        
        /**
         * Check if a message was sent for this request.
         * Used to detect when no response was sent for a request method.
         */
        public boolean wasMessageSent() {
            synchronized (lock) {
                return messageSent;
            }
        }
        
        @Override
        public Mono<Void> sendMessage(McpSchema.JSONRPCMessage message) {
            // Make sendMessage idempotent - if already sent, just return
            return Mono.fromRunnable(() -> {
                synchronized (lock) {
                    // Drop notifications - Streamable HTTP clients cannot receive server-initiated notifications
                    if (message instanceof McpSchema.JSONRPCNotification) {
                        LOGGER.debug("Dropping notification for session: " + sessionId + 
                                   " - method: " + ((McpSchema.JSONRPCNotification) message).method());
                        return;
                    }
                    
                    // If already sent for this request, skip
                    if (messageSent) {
                        LOGGER.debug("Message already sent for this request, skipping duplicate send for session: " + sessionId);
                        return;
                    }
                    
                    String messageType = message.getClass().getSimpleName();
                    LOGGER.debug("Sending response message for session: " + sessionId + ", type: " + messageType);
                    sendMessageNow(message);
                    messageSent = true;
                    LOGGER.debug("Response sent successfully for session: " + sessionId);
                }
            });
        }
        
        private void sendMessageNow(McpSchema.JSONRPCMessage message) {
            HttpServletResponse currentResponse;
            
            // Get response reference under lock
            synchronized (lock) {
                currentResponse = this.response;
                if (currentResponse == null) {
                    LOGGER.warn("Cannot send message, response is null for session: " + sessionId);
                    return;
                }
            }
            
            // Send response outside lock to avoid holding lock during I/O
            try {
                synchronized (lock) {
                    if (currentResponse.isCommitted()) {
                        LOGGER.warn("Cannot send message, response already committed for session: " + sessionId);
                        return;
                    }
                }
                
                currentResponse.setStatus(HttpServletResponse.SC_OK);
                setStreamableHttpResponseHeaders(currentResponse);
                
                String jsonText = MAPPER.writeValueAsString(message);
                currentResponse.getOutputStream().write(jsonText.getBytes(UTF_8));
                currentResponse.getOutputStream().flush();
                currentResponse.flushBuffer();
                
                LOGGER.debug("Message sent for session: " + sessionId);
                
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
                McpSessionManager.getInstance().closeSession(sessionId);
            });
        }
        
        @Override
        public void close() {
            LOGGER.debug("Closing transport for session: " + sessionId);
            transports.remove(sessionId);
            McpSessionManager.getInstance().closeSession(sessionId);
        }
    }
}
