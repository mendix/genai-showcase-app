package mcpserver.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import system.proxies.Session;
import system.proxies.User;

import javax.servlet.AsyncContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
import io.modelcontextprotocol.spec.*;
import mcpserver.proxies.McpServer;

/**
 * Based on https://github.com/modelcontextprotocol/java-sdk/blob/v0.8.1/mcp/src/main/java/io/modelcontextprotocol/server/transport/HttpServletSseServerTransportProvider.java
 */
public class McpServerRequestHandler extends RequestHandler implements McpServerTransportProvider {

    /** Logger instance for Mendix **/
    //private final ILogNode logger = Core.getLogger("MCP");
    
	private static final MxLogger LOGGER = new mcpserver.impl.MxLogger(McpServerRequestHandler.class);

    public static final String UTF_8 = "UTF-8";

    public static final String APPLICATION_JSON = "application/json";

    public static final String FAILED_TO_SEND_ERROR_RESPONSE = "Failed to send error response: {}";

    /** Default endpoint path for SSE connections */
    public static final String DEFAULT_SSE_ENDPOINT = "/sse";

    /** Event type for regular messages */
    public static final String MESSAGE_EVENT_TYPE = "message";

    /** Event type for endpoint information */
    public static final String ENDPOINT_EVENT_TYPE = "endpoint";

    public static final String DEFAULT_BASE_URL = "";

    /** JSON object mapper for serialization/deserialization */
    private final ObjectMapper objectMapper;

    /** Base URL for the server transport */
    private final String baseUrl;

    /** The endpoint path for handling client messages */
    private final String messageEndpoint;

    /** The endpoint path for handling SSE connections */
    private final String sseEndpoint;

    /** Map of active client sessions, keyed by session ID */
    private final Map<String, McpServerSession> sessions = new ConcurrentHashMap<>();

    /** Flag indicating if the transport is in the process of shutting down */
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    /** Session factory for creating new sessions */
    private McpServerSession.Factory sessionFactory;

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with a custom SSE
     * endpoint.
     * @param objectMapper The JSON object mapper to use for message
     * serialization/deserialization
     * @param messageEndpoint The endpoint path where clients will send their messages
     * @param sseEndpoint The endpoint path where clients will establish SSE connections
     */
    public McpServerRequestHandler(ObjectMapper objectMapper, String messageEndpoint,
                                                 String sseEndpoint) {
        this(objectMapper, DEFAULT_BASE_URL, messageEndpoint, sseEndpoint);
    }

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with a custom SSE
     * endpoint.
     * @param objectMapper The JSON object mapper to use for message
     * serialization/deserialization
     * @param baseUrl The base URL for the server transport
     * @param messageEndpoint The endpoint path where clients will send their messages
     * @param sseEndpoint The endpoint path where clients will establish SSE connections
     */
    public McpServerRequestHandler(ObjectMapper objectMapper, String baseUrl, String messageEndpoint,
                                                 String sseEndpoint) {
        this.objectMapper = objectMapper;
        this.baseUrl = baseUrl;
        this.messageEndpoint = messageEndpoint;
        this.sseEndpoint = sseEndpoint;
    }

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with the default SSE
     * endpoint.
     * @param objectMapper The JSON object mapper to use for message
     * serialization/deserialization
     * @param messageEndpoint The endpoint path where clients will send their messages
     */
    public McpServerRequestHandler(ObjectMapper objectMapper, String messageEndpoint) {
        this(objectMapper, messageEndpoint, DEFAULT_SSE_ENDPOINT);
    }

    @Override
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void processRequest(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws Exception {
        LOGGER.info(iMxRuntimeRequest.getHttpServletRequest().getMethod() + " " + iMxRuntimeRequest.getHttpServletRequest().getRequestURI());
        switch (iMxRuntimeRequest.getHttpServletRequest().getMethod()) {
            case "GET":
                doGet(iMxRuntimeRequest, iMxRuntimeResponse, s);
                break;

            case "POST":
                doPost(iMxRuntimeRequest, iMxRuntimeResponse, s);
                break;

            default:
                iMxRuntimeResponse.setStatus(405);
                iMxRuntimeResponse.getWriter().write("Method not supported");
        }
    }

    protected void doGet(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws Exception {
        HttpServletRequest request = iMxRuntimeRequest.getHttpServletRequest();
        HttpServletResponse response = iMxRuntimeResponse.getHttpServletResponse();
        
        //Authenticate, get session by logged in user
        //authenticateUser(request, null);
        
        String requestURI = request.getRequestURI();
        if (!requestURI.endsWith(sseEndpoint)) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        if (isClosing.get()) {
            response.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }

        response.setContentType("text/event-stream");
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Connection", "keep-alive");
        response.setHeader("Access-Control-Allow-Origin", "*");

        String sessionId = UUID.randomUUID().toString();
        AsyncContext asyncContext = request.startAsync();
        asyncContext.setTimeout(15 * 60 * 1000);

        PrintWriter writer = response.getWriter();

        // Create a new session transport
        HttpServletMcpSessionTransport sessionTransport = new HttpServletMcpSessionTransport(sessionId, asyncContext,
                writer);

        // Create a new session using the session factory
        McpServerSession session = sessionFactory.create(sessionTransport);
        this.sessions.put(sessionId, session);

        // Send initial endpoint event
        this.sendEvent(writer, ENDPOINT_EVENT_TYPE, this.baseUrl + this.messageEndpoint + "?sessionId=" + sessionId);

        // Mendix Runtime will close the connection when the request handler
        // finishes as it doesn't take into account the async mode.
        Thread.sleep(15 * 60 * 1000);
    }

    protected void doPost(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws  Exception {
        HttpServletRequest request = iMxRuntimeRequest.getHttpServletRequest();
        HttpServletResponse response = iMxRuntimeResponse.getHttpServletResponse();

        if (isClosing.get()) {
            response.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }

        String requestURI = request.getRequestURI();
        if (!requestURI.endsWith(messageEndpoint)) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        // Get the session ID from the request parameter
        String sessionId = request.getParameter("sessionId");
        if (sessionId == null) {
            response.setContentType(APPLICATION_JSON);
            response.setCharacterEncoding(UTF_8);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String jsonError = objectMapper.writeValueAsString(new McpError("Session ID missing in message endpoint"));
            PrintWriter writer = response.getWriter();
            writer.write(jsonError);
            writer.flush();
            return;
        }

        // Get the session from the sessions map
        McpServerSession session = sessions.get(sessionId);
        if (session == null) {
            response.setContentType(APPLICATION_JSON);
            response.setCharacterEncoding(UTF_8);
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            String jsonError = objectMapper.writeValueAsString(new McpError("Session not found: " + sessionId));
            PrintWriter writer = response.getWriter();
            writer.write(jsonError);
            writer.flush();
            return;
        }

        try {
            BufferedReader reader = request.getReader();
            StringBuilder body = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                body.append(line);
            }

            McpSchema.JSONRPCMessage message = McpSchema.deserializeJsonRpcMessage(objectMapper, body.toString());

            // Process the message through the session's handle method
            session.handle(message).block(); // Block for Servlet compatibility

            response.setStatus(HttpServletResponse.SC_OK);
        }
        catch (Exception e) {
            LOGGER.error("Error processing message: " + e.getMessage());
            try {
                McpError mcpError = new McpError(e.getMessage());
                response.setContentType(APPLICATION_JSON);
                response.setCharacterEncoding(UTF_8);
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                String jsonError = objectMapper.writeValueAsString(mcpError);
                PrintWriter writer = response.getWriter();
                writer.write(jsonError);
                writer.flush();
            }
            catch (IOException ex) {
                LOGGER.error(FAILED_TO_SEND_ERROR_RESPONSE, ex);
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error processing message");
            }
        }

    }
    
    protected Session authenticateUser(HttpServletRequest httpRequest, McpServer mcpServer) {
		
    	
    	return null;    	
    }

    @Override
    public Mono<Void> notifyClients(String method, Object params) {
        if (sessions.isEmpty()) {
            LOGGER.debug("No active sessions for broadcast");
            return Mono.empty();
        }

        return Flux.fromIterable(sessions.values())
                .flatMap(session -> session.sendNotification(method, params)
                        .doOnError(err -> LOGGER.error("Failed to send message to session " + session.getId() + ": " + err.getMessage())))
                .onErrorComplete()
                .then();
    }

    @Override
    public Mono<Void> closeGracefully() {
        isClosing.set(true);
        LOGGER.debug("Initiating graceful shutdown with " + sessions.size() + " active sessions");

        return Flux.fromIterable(sessions.values()).flatMap(McpServerSession::closeGracefully).then();
    }

    /**
     * Sends an SSE event to a client.
     * @param writer The writer to send the event through
     * @param eventType The type of event (message or endpoint)
     * @param data The event data
     * @throws IOException If an error occurs while writing the event
     */
    private void sendEvent(PrintWriter writer, String eventType, String data) throws IOException {
        writer.write("event: " + eventType + "\n");
        writer.write("data: " + data + "\n\n");
        writer.flush();

        if (writer.checkError()) {
            throw new IOException("Client disconnected");
        }
    }

    /**
     * Implementation of McpServerTransport for HttpServlet SSE sessions. This class
     * handles the transport-level communication for a specific client session.
     */
    private class HttpServletMcpSessionTransport implements McpServerTransport {

        private final String sessionId;

        private final AsyncContext asyncContext;

        private final PrintWriter writer;

        /**
         * Creates a new session transport with the specified ID and SSE writer.
         * @param sessionId The unique identifier for this session
         * @param asyncContext The async context for the session
         * @param writer The writer for sending server events to the client
         */
        HttpServletMcpSessionTransport(String sessionId, AsyncContext asyncContext, PrintWriter writer) {
            this.sessionId = sessionId;
            this.asyncContext = asyncContext;
            this.writer = writer;
            LOGGER.debug(String.format("Session transport %s initialized with SSE writer",  sessionId));
        }

        /**
         * Sends a JSON-RPC message to the client through the SSE connection.
         * @param message The JSON-RPC message to send
         * @return A Mono that completes when the message has been sent
         */
        @Override
        public Mono<Void> sendMessage(McpSchema.JSONRPCMessage message) {
            return Mono.fromRunnable(() -> {
                try {
                    String jsonText = objectMapper.writeValueAsString(message);
                    sendEvent(writer, MESSAGE_EVENT_TYPE, jsonText);
                    LOGGER.debug(String.format("Message sent to session %s", sessionId));
                }
                catch (Exception e) {
                    LOGGER.error(String.format("Failed to send message to session %s: %s", sessionId, e.getMessage()));
                    sessions.remove(sessionId);
                    asyncContext.complete();
                }
            });
        }

        /**
         * Converts data from one type to another using the configured ObjectMapper.
         * @param data The source data object to convert
         * @param typeRef The target type reference
         * @return The converted object of type T
         * @param <T> The target type
         */
        @Override
        public <T> T unmarshalFrom(Object data, TypeReference<T> typeRef) {
            return objectMapper.convertValue(data, typeRef);
        }

        /**
         * Initiates a graceful shutdown of the transport.
         * @return A Mono that completes when the shutdown is complete
         */
        @Override
        public Mono<Void> closeGracefully() {
            return Mono.fromRunnable(() -> {
                LOGGER.debug(String.format("Closing session transport: %s", sessionId));
                try {
                    sessions.remove(sessionId);
                    asyncContext.complete();
                    LOGGER.debug(String.format("Successfully completed async context for session %s", sessionId));
                }
                catch (Exception e) {
                    LOGGER.warn(String.format("Failed to complete async context for session %s: %s", sessionId, e.getMessage()));
                }
            });
        }

        /**
         * Closes the transport immediately.
         */
        @Override
        public void close() {
            try {
                sessions.remove(sessionId);
                asyncContext.complete();
                LOGGER.debug(String.format("Successfully completed async context for session %s", sessionId));
            }
            catch (Exception e) {
                LOGGER.warn(String.format("Failed to complete async context for session %s: %s", sessionId, e.getMessage()));
            }
        }
    }


}
