package mcpserver.impl;

import io.modelcontextprotocol.json.McpJsonMapper;
import io.modelcontextprotocol.json.TypeRef;
import com.mendix.core.CoreException;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;

import javax.servlet.AsyncContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.concurrent.atomic.AtomicBoolean;
import reactor.core.publisher.Mono;

import io.modelcontextprotocol.spec.*;

import mcpserver.proxies.McpServer;


/**
 * SSE (Server-Sent Events) transport handler for MCP protocol.
 * Implements the SSE_2024_11_05 protocol version.
 */
public class SseTransportHandler implements McpTransportHandler {
    
    private static final MxLogger LOGGER = new MxLogger(SseTransportHandler.class);
    private static final McpJsonMapper MAPPER = McpJsonMapper.getDefault();
    
    public static final String UTF_8 = "UTF-8";
    public static final String APPLICATION_JSON = "application/json";
    public static final String FAILED_TO_SEND_ERROR_RESPONSE = "Failed to send error response: {}";
    public static final String DEFAULT_SSE_ENDPOINT = "/sse";
    public static final String MESSAGE_EVENT_TYPE = "message";
    public static final String ENDPOINT_EVENT_TYPE = "endpoint";
    public static final String DEFAULT_BASE_URL = "";
    
    private final String baseUrl;
    private final String messageEndpoint;
    private final String sseEndpoint;
    private final McpServer mcpServer;
    private final McpSessionManager sessionManager = McpSessionManager.getInstance();
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    
    /**
     * Creates a new SSE transport handler.
     * SSE uses two endpoints: /sse for GET (connection) and /messages for POST (messages).
     * @param mcpServer The MCP server configuration
     * @param basePath The base path (e.g., "mcp-server")
     */
    public SseTransportHandler(McpServer mcpServer, String basePath) {
        this(mcpServer, DEFAULT_BASE_URL, basePath);
    }
    
    /**
     * Creates a new SSE transport handler with a custom base URL.
     * @param mcpServer The MCP server configuration
     * @param baseUrl The base URL for the server transport
     * @param basePath The base path (e.g., "mcp-server")
     */
    public SseTransportHandler(McpServer mcpServer, String baseUrl, String basePath) {
        this.mcpServer = mcpServer;
        this.baseUrl = baseUrl;
        this.sseEndpoint = "/" + basePath + "/sse";
        this.messageEndpoint = "/" + basePath + "/messages";
    }
    
    @Override
    public boolean canHandlePath(String path) {
        // SSE handles both the SSE endpoint (GET) and the messages endpoint (POST)
        boolean canHandle = path.endsWith("sse") || path.endsWith("messages");
        if(!canHandle) {
        	LOGGER.debug("SSE canHandlePath - Path: " + path + ", CanHandle: " + canHandle);
        }
        return canHandle;
    }
    
    @Override
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        sessionManager.setSessionFactory(sessionFactory);
    }
    
    @Override
    public void handleHead(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        setSSEResponseHeaders(httpResponse);
    }
    
    @Override
    public void handleGet(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletRequest httpRequest = request.getHttpServletRequest();
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        
        // Authenticate if microflow was set; get sessionId for logged in user
        String sessionId = getSessionId(httpRequest, mcpServer);
        if (sessionId == null || sessionId.isEmpty()) {
            httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "User is not authorized to use the MCP Server.");
            return;
        }
        
        if (isClosing.get()) {
            httpResponse.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }
        
        setSSEResponseHeaders(httpResponse);
        
        // Start processing the request
        AsyncContext asyncContext = httpRequest.startAsync();
        asyncContext.setTimeout(15 * 60 * 1000);
        
        PrintWriter writer = httpResponse.getWriter();
        
        // Create a new session transport
        SseSessionTransport sessionTransport = new SseSessionTransport(sessionId, asyncContext, writer);
        
        // Create a new session
        sessionManager.createSession(sessionId, sessionTransport);
        
        // Send initial endpoint event
        try {
            String endpointUrl = this.baseUrl + this.messageEndpoint + "?sessionId=" + sessionId;
            LOGGER.debug("Sending SSE endpoint event with URL: " + endpointUrl);
            sendEvent(writer, ENDPOINT_EVENT_TYPE, endpointUrl);
            LOGGER.debug("SSE connection established successfully for session: " + sessionId);
     
        } catch (IOException e) {
            LOGGER.error("Failed to send SSE endpoint event: " + e.getMessage(), e);
            asyncContext.complete();
            throw e;
        }
    }
    
    @Override
    public void handlePost(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        HttpServletRequest httpRequest = request.getHttpServletRequest();
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        
        if (isClosing.get()) {
            httpResponse.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }
        
        // POST is only valid for the messages endpoint in SSE
        if (!path.endsWith("messages")) {
            httpResponse.sendError(HttpServletResponse.SC_NOT_FOUND, "POST only allowed on messages endpoint");
            return;
        }
        
        // Get the session ID from the request parameter, otherwise re-authenticate
        String sessionId = getSessionId(httpRequest, mcpServer);
        
        if (sessionId == null) {
            httpResponse.setContentType(APPLICATION_JSON);
            httpResponse.setCharacterEncoding(UTF_8);
            httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String jsonError = MAPPER.writeValueAsString(new McpError("Session ID missing in message endpoint"));
            PrintWriter writer = httpResponse.getWriter();
            writer.write(jsonError);
            writer.flush();
            httpResponse.flushBuffer();
            return;
        }
        
        // Get the session from the sessions map
        McpServerSession session = sessionManager.getSession(sessionId);
        
        if (session == null) {
            httpResponse.setContentType(APPLICATION_JSON);
            httpResponse.setCharacterEncoding(UTF_8);
            httpResponse.setStatus(HttpServletResponse.SC_NOT_FOUND);
            String jsonError = MAPPER.writeValueAsString(new McpError("Session not found: " + sessionId));
            PrintWriter writer = httpResponse.getWriter();
            writer.write(jsonError);
            writer.flush();
            httpResponse.flushBuffer();
            return;
        }
        
        try {
            BufferedReader reader = httpRequest.getReader();
            StringBuilder body = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                body.append(line);
            }
            
            String bodyString = body.toString();
            McpSchema.JSONRPCMessage message = McpSchema.deserializeJsonRpcMessage(MAPPER, bodyString);
            
            // Set response headers beofre processing - the actual MCP response will be sent via SSE
            httpResponse.setStatus(HttpServletResponse.SC_ACCEPTED);
            httpResponse.setContentType(APPLICATION_JSON);
            httpResponse.setCharacterEncoding(UTF_8);
            httpResponse.setHeader("Access-Control-Allow-Origin", "*");
            httpResponse.setHeader("Content-Length", "2");
            
            httpResponse.getOutputStream().write("{}".getBytes(UTF_8));
            httpResponse.getOutputStream().flush();
            httpResponse.flushBuffer();
            
            // Process the message through the session's handle method
            // The response will be sent via the SSE channel by the SDK
            session.handle(message).block(); // Block for Servlet compatibility
        } catch (Exception e) {
            LOGGER.error("Error processing message: " + e.getMessage());
            try {
                McpError mcpError = new McpError(e.getMessage());
                httpResponse.setContentType(APPLICATION_JSON);
                httpResponse.setCharacterEncoding(UTF_8);
                httpResponse.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                String jsonError = MAPPER.writeValueAsString(mcpError);
                PrintWriter writer = httpResponse.getWriter();
                writer.write(jsonError);
                writer.flush();
                httpResponse.flushBuffer(); // Commit the response
            } catch (IOException ex) {
                LOGGER.error(FAILED_TO_SEND_ERROR_RESPONSE, ex);
                httpResponse.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error processing message");
            }
        }
    }
    
    @Override
    public void handleDelete(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        // DELETE is not used in SSE transport - sessions are closed via connection close
        HttpServletResponse httpResponse = response.getHttpServletResponse();
        httpResponse.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "DELETE not supported in SSE transport");
    }
    
    @Override
    public void closeGracefully() throws Exception {
        isClosing.set(true);
        LOGGER.debug("Initiating graceful shutdown of SSE transport");
    }
    
    private void setSSEResponseHeaders(HttpServletResponse response) {
        response.setContentType("text/event-stream");
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Connection", "keep-alive");
        response.setHeader("Access-Control-Allow-Origin", "*");
    }
    
    private void sendEvent(PrintWriter writer, String eventType, String data) throws IOException {
        writer.write("event: " + eventType + "\n");
        writer.write("data: " + data + "\n\n");
        writer.flush();
        
        if (writer.checkError()) {
            throw new IOException("Client disconnected");
        }
    }
    
    protected String getSessionId(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException {
        // SSE only uses parameter for session ID (no header like Streamable HTTP)
        return sessionManager.getOrCreateSessionId(httpServletRequest, mcpServer, null, "sessionId");
    }
    
    /**
     * Implementation of McpServerTransport for SSE sessions.
     */
    private class SseSessionTransport implements McpServerTransport {
        
        private final String sessionId;
        private final AsyncContext asyncContext;
        private final PrintWriter writer;
        
        SseSessionTransport(String sessionId, AsyncContext asyncContext, PrintWriter writer) {
            this.sessionId = sessionId;
            this.asyncContext = asyncContext;
            this.writer = writer;
            LOGGER.debug(String.format("SSE session transport %s initialized", sessionId));
        }
        
        @Override
        public Mono<Void> sendMessage(McpSchema.JSONRPCMessage message) {
            return Mono.fromRunnable(() -> {
                try {
                    String jsonText = MAPPER.writeValueAsString(message);
                    sendEvent(writer, MESSAGE_EVENT_TYPE, jsonText);
                    LOGGER.debug(String.format("Message sent to SSE session %s", sessionId));
                } catch (Exception e) {
                    LOGGER.error(String.format("Failed to send message to SSE session %s: %s", sessionId, e.getMessage()));
                    sessionManager.closeSession(sessionId);
                    asyncContext.complete();
                }
            });
        }
        
        @Override
        public <T> T unmarshalFrom(Object data, TypeRef<T> typeRef) {
            return MAPPER.convertValue(data, typeRef);
        }
        
        @Override
        public Mono<Void> closeGracefully() {
            return Mono.fromRunnable(() -> {
                LOGGER.debug(String.format("Closing SSE session transport: %s", sessionId));
                try {
                    sessionManager.closeSession(sessionId);
                    asyncContext.complete();
                    LOGGER.debug(String.format("Successfully completed async context for SSE session %s", sessionId));
                } catch (Exception e) {
                    LOGGER.warn(String.format("Failed to complete async context for SSE session %s: %s", sessionId, e.getMessage()));
                }
            });
        }
        
        @Override
        public void close() {
            try {
                sessionManager.closeSession(sessionId);
                asyncContext.complete();
                LOGGER.debug(String.format("Successfully completed async context for SSE session %s", sessionId));
            } catch (Exception e) {
                LOGGER.warn(String.format("Failed to complete async context for SSE session %s: %s", sessionId, e.getMessage()));
            }
        }
    }
}
