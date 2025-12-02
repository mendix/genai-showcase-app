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

import io.modelcontextprotocol.spec.*;
import mcpserver.proxies.McpServer;

/**
 * Streamable HTTP transport handler for MCP protocol.
 * Implements the Streamable HTTP protocol version (2025-03-26) for bidirectional communication.
 * Uses a single /mcp endpoint for all operations (POST and DELETE).
 * Session identification via Mcp-Session-Id header.
 */
public class StreamableHttpTransportHandler implements McpTransportHandler {
    
    private static final MxLogger LOGGER = new MxLogger(StreamableHttpTransportHandler.class);
    private static final McpJsonMapper MAPPER = McpJsonMapper.getDefault();
    
    public static final String UTF_8 = "UTF-8";
    public static final String APPLICATION_JSON = "application/json";
    public static final String SESSION_HEADER = "Mcp-Session-Id";  // Streamable HTTP uses Mcp-Session-Id
    
    private final McpServer mcpServer;
    private final McpSessionManager sessionManager = McpSessionManager.getInstance();
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    private final Map<String, StreamableHttpSessionTransport> transports = new java.util.concurrent.ConcurrentHashMap<>();
    
    /**
     * Creates a new Streamable HTTP transport handler.
     * Streamable HTTP uses a single /mcp endpoint for all POST operations.
     * @param mcpServer The MCP server configuration
     * @param basePath The base path (e.g., "mcp-server")
     */
    public StreamableHttpTransportHandler(McpServer mcpServer, String basePath) {
        this.mcpServer = mcpServer;
    }
    
    @Override
    public boolean canHandlePath(String path) {
        return path.endsWith("mcp");
    }
    
    @Override
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        sessionManager.setSessionFactory(sessionFactory);
    }
    
    @Override
    public void handleHead(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        setStreamableHttpResponseHeaders(httpResponse);
    }
    
    @Override
    public void handleGet(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        httpResponse.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, 
                              "Streamable HTTP only supports POST and DELETE on /mcp endpoint");
    }
    
    @Override
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
        
        // Authenticate and get/create session
        String sessionId = getSessionId(httpRequest, mcpServer);
        if (sessionId == null) {
            sendJsonError(httpResponse, HttpServletResponse.SC_UNAUTHORIZED, "Authentication failed");
            return;
        }
        
        // Get or create session and transport (atomic operation)
        McpServerSession session;
        StreamableHttpSessionTransport sessionTransport;
        
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
            }
        }
        
        try {
            // Set the response object for this request
            sessionTransport.setResponse(httpResponse);
            
            // Read and parse the incoming JSON-RPC message
            String bodyString = readRequestBody(httpRequest);
            LOGGER.info("Received request body for session " + sessionId + ", length: " + 
                       (bodyString != null ? bodyString.length() : 0) + " chars");
            
            McpSchema.JSONRPCMessage message = McpSchema.deserializeJsonRpcMessage(MAPPER, bodyString);
            
            // Log message details for debugging
            if (LOGGER.isDebugEnabled()) {
                String messageType = "unknown";
                String methodName = null;
                Object messageId = null;
                
                if (message instanceof McpSchema.JSONRPCRequest) {
                    messageType = "request";
                    methodName = ((McpSchema.JSONRPCRequest) message).method();
                    messageId = ((McpSchema.JSONRPCRequest) message).id();
                } else if (message instanceof McpSchema.JSONRPCNotification) {
                    messageType = "notification";
                    methodName = ((McpSchema.JSONRPCNotification) message).method();
                } else if (message instanceof McpSchema.JSONRPCResponse) {
                    messageType = "response";
                    messageId = ((McpSchema.JSONRPCResponse) message).id();
                }
                
                LOGGER.debug("Processing message for session " + sessionId + ": type=" + messageType + 
                           (methodName != null ? ", method=" + methodName : "") +
                           (messageId != null ? ", id=" + messageId : ""));
            }
            
            // Process all messages through SDK
            session.handle(message).block();
            
        } catch (Exception e) {
            LOGGER.error("Error processing MCP message: " + e.getMessage(), e);
            if (!httpResponse.isCommitted()) {
                sendJsonError(httpResponse, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
            }
        } finally {
            // Clear response after request completes
            sessionTransport.clearResponse();
        }
    }
    
    @Override
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
        LOGGER.info("DELETE - Session ID from header: " + sessionId);
        
        if (sessionId == null || sessionId.isEmpty()) {
            LOGGER.warn("DELETE rejected - no session ID provided");
            httpResponse.sendError(HttpServletResponse.SC_BAD_REQUEST, "Mcp-Session-Id header required for DELETE");
            return;
        }
        
        // Close the session
        McpServerSession session = sessionManager.getSession(sessionId);
        LOGGER.info("DELETE - Session for id: " + sessionId +" found: " + (session != null));
        
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
            LOGGER.warn("DELETE failed - session not found: " + sessionId);
            httpResponse.sendError(HttpServletResponse.SC_NOT_FOUND, "Session not found: " + sessionId);
        }
    }
    
    @Override
    public void closeGracefully() throws Exception {
        isClosing.set(true);
    }
    
    /**
     * Helper method to read the request body as a string.
     * Note: BufferedReader is owned by servlet container and should not be closed here.
     */
    private String readRequestBody(HttpServletRequest request) throws IOException {
        StringBuilder body = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            body.append(line);
        }
        return body.toString();
    }
    
    /**
     * Helper method to send a JSON error response with proper CORS headers.
     */
    private void sendJsonError(HttpServletResponse response, int statusCode, String message) throws IOException {
        setStreamableHttpResponseHeaders(response);
        response.setStatus(statusCode);
        String jsonError = MAPPER.writeValueAsString(new McpError(message));
        response.getOutputStream().write(jsonError.getBytes(UTF_8));
        response.getOutputStream().flush();
        response.flushBuffer(); // Commit the response
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
        return sessionManager.getOrCreateSessionId(httpServletRequest, mcpServer, SESSION_HEADER, "sessionId");
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
                    
                    LOGGER.debug("Sending response message for session: " + sessionId);
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
                
                setStreamableHttpResponseHeaders(currentResponse);
                currentResponse.setStatus(HttpServletResponse.SC_OK);
                
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
            return Mono.fromRunnable(() -> sessionManager.closeSession(sessionId));
        }
        
        @Override
        public void close() {
            sessionManager.closeSession(sessionId);
        }
    }
}
