package mcpserver.impl;

import io.modelcontextprotocol.json.McpJsonMapper;
import io.modelcontextprotocol.json.TypeRef;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.systemwideinterfaces.core.ISession;
import com.mendix.systemwideinterfaces.core.IUser;

import javax.servlet.AsyncContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import io.modelcontextprotocol.spec.*;

import mcpserver.proxies.McpServer;
import system.proxies.HttpHeader;
import system.proxies.HttpRequest;
import system.proxies.User;

public class McpServerRequestHandler extends RequestHandler implements McpServerTransportProvider {
    
	private static final MxLogger LOGGER = new mcpserver.impl.MxLogger(McpServerRequestHandler.class);
	
	/** Shared JSON mapper instance for MCP message serialization/deserialization */
	private static final McpJsonMapper MAPPER = McpJsonMapper.getDefault();

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

    /** Base URL for the server transport */
    private final String baseUrl;

    /** The endpoint path for handling client messages */
    private final String messageEndpoint;

    /** The endpoint path for handling SSE connections */
    private final String sseEndpoint;
    
    /** The Mendix MCPServer object */
    private final McpServer mcpServer;
    
    /** Manager of MCP sessions */
    private final McpSessionManager sessionManager = McpSessionManager.getInstance();

    /** Flag indicating if the transport is in the process of shutting down */
    private final AtomicBoolean isClosing = new AtomicBoolean(false);
    
    /** stores the session across the application
    private static final ThreadLocal<String> sessionHolder = new ThreadLocal<>();

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with a custom SSE
     * endpoint.
     * @param messageEndpoint The endpoint path where clients will send their messages
     * @param sseEndpoint The endpoint path where clients will establish SSE connections
     */
    public McpServerRequestHandler(mcpserver.proxies.McpServer mcpServer, String messageEndpoint,
                                                 String sseEndpoint) {
        this(mcpServer, DEFAULT_BASE_URL, messageEndpoint, sseEndpoint);
    }

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with a custom SSE
     * endpoint.
     * @param baseUrl The base URL for the server transport
     * @param messageEndpoint The endpoint path where clients will send their messages
     * @param sseEndpoint The endpoint path where clients will establish SSE connections
     */
    public McpServerRequestHandler(mcpserver.proxies.McpServer mcpServer, String baseUrl, String messageEndpoint,
                                                 String sseEndpoint) {
        this.baseUrl = baseUrl;
        this.messageEndpoint = messageEndpoint;
        this.sseEndpoint = sseEndpoint;
        this.mcpServer = mcpServer;
    }

    /**
     * Creates a new HttpServletSseServerTransportProvider instance with the default SSE
     * endpoint.
     * @param messageEndpoint The endpoint path where clients will send their messages
     */
    public McpServerRequestHandler(String messageEndpoint, mcpserver.proxies.McpServer mcpServer, IContext iContext) {
        this(mcpServer, messageEndpoint, DEFAULT_SSE_ENDPOINT);
    }

    @Override
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
    	sessionManager.setSessionFactory(sessionFactory);
    }

    @Override
    public void processRequest(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws Exception {
        // generate a RequestID that can be used for logging, because Mendix doesn't log on thread level
        String requestId = UUID.randomUUID().toString();
        HttpServletRequest req = iMxRuntimeRequest.getHttpServletRequest();
        req.setAttribute("MCP_REQUEST_ID", requestId);

        LOGGER.trace("[RequestID: " + requestId
                + "] " + req.getMethod()
                + " " + req.getRequestURI());

        switch (req.getMethod()) {
            case "HEAD":
                doHead(iMxRuntimeRequest, iMxRuntimeResponse, s);
                break;

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
        LOGGER.debug("[RequestID: " + requestId
                + "] " + req.getMethod()
                + " " + req.getRequestURI()
                + " " + iMxRuntimeResponse.getHttpServletResponse().getStatus());
    }

    protected void doHead(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws Exception {
        // HttpServletRequest request = iMxRuntimeRequest.getHttpServletRequest();
        HttpServletResponse response = iMxRuntimeResponse.getHttpServletResponse();

        // don't check headers for a session, not validate session.
        // Langflow doesn't send auth headers when validating the url.
        setSSEResponseHeaders(response);
    }

    protected void doGet(IMxRuntimeRequest iMxRuntimeRequest, IMxRuntimeResponse iMxRuntimeResponse, String s) throws Exception {
        HttpServletRequest request = iMxRuntimeRequest.getHttpServletRequest();
        HttpServletResponse response = iMxRuntimeResponse.getHttpServletResponse();

        //Authenticate if microflow was set; get sessionId by logged in user
        String sessionId = getSessionId(iMxRuntimeRequest.getHttpServletRequest(), mcpServer);
        if(sessionId == null || sessionId.isEmpty()) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "User is not authorized to use the MCP Server.");
            return;
        }

        String requestURI = request.getRequestURI();
        if (!requestURI.endsWith(sseEndpoint)) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        if (isClosing.get()) {
            response.sendError(HttpServletResponse.SC_SERVICE_UNAVAILABLE, "Server is shutting down");
            return;
        }

        setSSEResponseHeaders(response);

        // Start processing the request
        AsyncContext asyncContext = request.startAsync();
        asyncContext.setTimeout(15 * 60 * 1000);

        PrintWriter writer = response.getWriter();

        // Create a new session transport
        HttpServletMcpSessionTransport sessionTransport = new HttpServletMcpSessionTransport(sessionId, asyncContext,
                writer);

        // Create a new session
        sessionManager.createSession(sessionId, sessionTransport);

        // Send initial endpoint event
        this.sendEvent(writer, ENDPOINT_EVENT_TYPE, this.baseUrl + this.messageEndpoint + "?sessionId=" + sessionId);

    }

    private void setSSEResponseHeaders(HttpServletResponse response) {
        response.setContentType("text/event-stream");
        response.setCharacterEncoding(UTF_8);
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Connection", "keep-alive");
        response.setHeader("Access-Control-Allow-Origin", "*");
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

        // Get the session ID from the request parameter, otherwise re-authenticate
        String sessionId = getSessionId(request, mcpServer);
        if (sessionId == null) {
            response.setContentType(APPLICATION_JSON);
            response.setCharacterEncoding(UTF_8);
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String jsonError = MAPPER.writeValueAsString(new McpError("Session ID missing in message endpoint"));
            PrintWriter writer = response.getWriter();
            writer.write(jsonError);
            writer.flush();
            return;
        }

        // Get the session from the sessions map
        McpServerSession session = sessionManager.getSession(sessionId);
        if (session == null) {
            response.setContentType(APPLICATION_JSON);
            response.setCharacterEncoding(UTF_8);
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            String jsonError = MAPPER.writeValueAsString(new McpError("Session not found: " + sessionId));
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

            McpSchema.JSONRPCMessage message = McpSchema.deserializeJsonRpcMessage(MAPPER, body.toString());
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
                String jsonError = MAPPER.writeValueAsString(mcpError);
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
    
    /**
     * Returns sessionID for either an authenticated (logged-in) user,
     * a random-generated ID, or from the request
     * @param httpServletRequest
     * @param mcpServer
     * @return
     * @throws CoreException
     */
    protected String getSessionId(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException {
    	//Passed as part of the request
    	String sessionIdRequest = httpServletRequest.getParameter("sessionId");
    	if(sessionIdRequest != null && sessionManager.getSession(sessionIdRequest) != null) {
    		ISession session = Core.getSessionById(UUID.fromString(sessionIdRequest));
    		if(session != null) {
    			session.keepAlive();
    		}
    		return sessionIdRequest;
    	}
    	
    	//No sessionId passed and no authentication microflow enabled
	   	if(mcpServer.getAuthenticationMicroflow() == null || mcpServer.getAuthenticationMicroflow().isEmpty())
		{
	   		return UUID.randomUUID().toString();
		}
		//No sessionId; new session is created if user is authorized
	   	ISession iSession = createSessionForUser(httpServletRequest, mcpServer);
		if (iSession != null) {
			return iSession.getId().toString();
		}
		return null;    	
    }
    
    /**
     * Executes the provided authentication microflow to get the user and initializes a session
 	* 
     * @param httpServletRequest
     * @param mcpServer
     * @return ISession
     * @throws CoreException
     */  
    protected ISession createSessionForUser(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException { 
    	IContext systemContext = Core.createSystemContext();
    	Map<String, Object> microflowArgs = mapInputParametersAuthentication(mcpServer, createHttpRequestMx(httpServletRequest, systemContext));
    	IMendixObject userIMx = Core.microflowCall(mcpServer.getAuthenticationMicroflow())
				.withParams(microflowArgs)
				.execute(systemContext);
    	if(userIMx == null) {
    		return null;
    	}

    	IUser iUser = Core.getUser(systemContext, User.initialize(systemContext, userIMx).getName());
    	if(!iUser.isActive() || iUser.isBlocked()){
    		return null;
    	}
    	return  Core.initializeSession(iUser, null);
    }
    
    /**
     * HttpRequest is created based on the HttpServletRequest that is passed to authentication microflow
     * @param httpServletRequest
     * @return HttpRequest
     */
    protected HttpRequest createHttpRequestMx(HttpServletRequest httpServletRequest, IContext iContext) {  	
    	HttpRequest httpRequestMx = new HttpRequest(iContext);
    	
    	Collections.list(httpServletRequest.getHeaderNames())
        .forEach(headerName -> {
            String headerValue = httpServletRequest.getHeader(headerName);
            setHttpHeader(httpRequestMx, headerName, headerValue);
        });
    	
    	return httpRequestMx;
    }
    
    /**
     * Creates HttpHeaders for a given HttpRequest
     * @param httpRequestMx
     * @param key
     * @param value
     */
    protected void setHttpHeader(HttpRequest httpRequestMx, String key, String value) {
    	system.proxies.HttpHeader httpHeader = new HttpHeader(httpRequestMx.getContext());
    	httpHeader.setKey(key);
    	httpHeader.setValue(value);
    	httpHeader.setHttpHeaders(httpRequestMx);
    }
    /**
     * Gets the input parameters of the authentication microflow and fills in the (optional) objects
     * to be used as input for the microflow
     * @param mcpServer
     * @param httpRequest
     * @return String Map
     */
    protected Map<String, Object> mapInputParametersAuthentication(McpServer mcpServer, HttpRequest httpRequest) {
		Map<String, Object> inputParameters = new java.util.HashMap<>();
		Map<String, IDataType> parametersAndTypes = Core.getInputParameters(mcpServer.getAuthenticationMicroflow());
		parametersAndTypes.forEach((t, u) -> {
			if(Core.getMetaObject(u.getObjectType()).isSubClassOf(mcpserver.proxies.McpServer.getType())) {
				inputParameters.put(t, mcpServer.getMendixObject());
			} else if(Core.getMetaObject(u.getObjectType()).isSubClassOf(HttpRequest.getType())) {
				inputParameters.put(t, httpRequest.getMendixObject());
			}
		}
		);
		return inputParameters;
	}

    @Override
    public Mono<Void> notifyClients(String method, Object params) {
        if (!sessionManager.hasSessions()) {
            LOGGER.debug("No active sessions for broadcast");
            return Mono.empty();
        }

        return Flux.fromIterable(sessionManager.getAllSessions())
                .flatMap(session -> session.sendNotification(method, params)
                        .doOnError(err -> LOGGER.error("Failed to send message to session " + session.getId() + ": " + err.getMessage())))
                .onErrorComplete()
                .then();
    }

    @Override
    public Mono<Void> closeGracefully() {
        isClosing.set(true);
        LOGGER.debug("Initiating graceful shutdown with " + sessionManager.getNumberOfSessions() + " active sessions");

        return Flux.fromIterable(sessionManager.getAllSessions()).flatMap(McpServerSession::closeGracefully).then();
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
                    String jsonText = MAPPER.writeValueAsString(message);
                    sendEvent(writer, MESSAGE_EVENT_TYPE, jsonText);
                    LOGGER.debug(String.format("Message sent to session %s", sessionId));
                }
                catch (Exception e) {
                    LOGGER.error(String.format("Failed to send message to session %s: %s", sessionId, e.getMessage()));
                    sessionManager.closeSession(sessionId);
                    asyncContext.complete();
                }
            });
        }

        /**
         * Converts data from one type to another using the McpJsonMapper utility class.
         * @param data The source data object to convert
         * @param typeRef The target type reference
         * @return The converted object of type T
         * @param <T> The target type
         */
        @Override
        public <T> T unmarshalFrom(Object data, TypeRef<T> typeRef) {
            return MAPPER.convertValue(data, typeRef);
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
                	sessionManager.closeSession(sessionId);
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
            	sessionManager.closeSession(sessionId);
                asyncContext.complete();
                LOGGER.debug(String.format("Successfully completed async context for session %s", sessionId));
            }
            catch (Exception e) {
                LOGGER.warn(String.format("Failed to complete async context for session %s: %s", sessionId, e.getMessage()));
            }
        }
    }

}
