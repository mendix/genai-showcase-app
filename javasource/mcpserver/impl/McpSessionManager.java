package mcpserver.impl;

import java.util.Collections;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.systemwideinterfaces.core.ISession;
import com.mendix.systemwideinterfaces.core.IUser;

import io.modelcontextprotocol.server.McpSyncServerExchange;
import io.modelcontextprotocol.spec.McpServerSession;
import io.modelcontextprotocol.spec.McpServerTransport;
import mcpserver.proxies.McpServer;
import system.proxies.HttpHeader;
import system.proxies.HttpRequest;
import system.proxies.User;

public class McpSessionManager 
{
	private static final MxLogger LOGGER = new mcpserver.impl.MxLogger(McpSessionManager.class);
	
	private static McpSessionManager instance;
	
	public static synchronized McpSessionManager getInstance()
	{
		if(instance == null)
		{
			instance = new McpSessionManager();
		}
		
		return instance;
	}
	
	/** Map of active client sessions, keyed by session ID */
    private final Map<String, McpServerSession> sessions;
    
    private final Map<String, String> internalToExternalSessionMap;
    
    /** Session factory for creating new sessions */
    private McpServerSession.Factory sessionFactory;
    
	private McpSessionManager()	{
		sessions = new ConcurrentHashMap<>();
		internalToExternalSessionMap = new ConcurrentHashMap<>();
	}
	
	public void setSessionFactory(McpServerSession.Factory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public void createSession(String sessionId, McpServerTransport sessionTransport) throws Exception {
		if(sessionFactory == null)
			throw new Exception("Trying to create a session while sessionFactory is not initialized");
		
		McpServerSession session = sessionFactory.create(sessionTransport);
        sessions.put(sessionId, session);
        internalToExternalSessionMap.put(session.getId(), sessionId);
	}
	
	public McpServerSession getSession(String sessionId) {
		return sessions.get(sessionId);
	}
	
	public boolean hasSessions() {
		return !sessions.isEmpty();
	}
	
	public int getNumberOfSessions() {
		return sessions.values().size();
	}
	
	public Iterable<McpServerSession> getAllSessions() {
		return sessions.values();
	}
	
	public ISession getMxRuntimeSession(McpSyncServerExchange exchange) throws Exception {
		LOGGER.info(exchange.sessionId());
		if(!internalToExternalSessionMap.containsKey(exchange.sessionId())) {
			throw new Exception("Could not find session");
		}
		
		String sessionId = internalToExternalSessionMap.get(exchange.sessionId());
		return getMxRuntimeSessionForSessionId(sessionId);
	}
	
	/**
	 * Returns a context object for the tool microflow. If no user session can be found, a system session is returned.
	 * @param exchange 
	 * @return Context object
	 * @throws Exception 
	 */
	public static IContext getContextFromSession(McpSyncServerExchange exchange) throws Exception {
		ISession session = McpSessionManager.getInstance().getMxRuntimeSession(exchange);
		if (session != null) {
			return session.createContext();
			
		} else {
			return Core.createSystemContext();
		}
	}
	
	private ISession getMxRuntimeSessionForSessionId(String sessionId) {
		return Core.getSessionById(UUID.fromString(sessionId));
	}
	
	public void closeSession(String sessionId) {
		McpServerSession session = sessions.get(sessionId);
		
		if(session != null) {
			session.closeGracefully();
			sessions.remove(sessionId);
			
			ISession mxRuntimeSession = getMxRuntimeSessionForSessionId(sessionId);
	    	
			if (mxRuntimeSession != null) {
	    		LOGGER.debug("Close user session.");
	    		Core.logout(mxRuntimeSession);
	    	}
		}
		else {
			LOGGER.debug(String.format("Closing session with id %s, but no session was found", sessionId));
		}
	}
	
	/**
	 * Validates and retrieves an existing session ID, keeping the Mendix session alive.
	 * Returns null if session is invalid.
	 */
	public String validateAndKeepAlive(String sessionId) {
		if (sessionId == null || sessionId.isEmpty()) {
			return null;
		}
		
		if (getSession(sessionId) != null) {
			// Try to keep the Mendix session alive if it exists
			try {
				ISession session = Core.getSessionById(UUID.fromString(sessionId));
				if (session != null) {
					session.keepAlive();
				} else {
					LOGGER.debug("Mendix session not found for sessionId - will use system context as fallback for tool execution");
				}
			} catch (IllegalArgumentException | CoreException e) {
				LOGGER.debug("Error keeping Mendix session alive: " + e.getMessage() + " - will use system context as fallback");
			}
			return sessionId;
		}
		
		return null;
	}
	
	/**
	 * Gets context for MCP tool execution. Returns user context if available, otherwise system context as fallback.
	 */
	public IContext getContextForExecution(String sessionId) {
		ISession session = getMxRuntimeSessionForSessionId(sessionId);
		if (session != null) {
			LOGGER.debug("Using user session context for tool execution");
			return session.createContext();
		} else {
			LOGGER.warn("Mendix session not found for sessionId: " + sessionId + " - using system context as fallback");
			return Core.createSystemContext();
		}
	}
	
	/**
	 * Gets or creates a session ID from HTTP request.
	 * Checks headers and parameters for existing sessions, or authenticates user if configured.
	 */
	public String getOrCreateSessionId(HttpServletRequest httpServletRequest, McpServer mcpServer,
	                                     String headerName, String parameterName) throws CoreException {
		// Check for existing session ID in header
		if (headerName != null) {
			String sessionIdHeader = httpServletRequest.getHeader(headerName);
			String validated = validateAndKeepAlive(sessionIdHeader);
			if (validated != null) {
				return validated;
			}
		}
		
		// Check for session ID in request parameter
		if (parameterName != null) {
			String sessionIdRequest = httpServletRequest.getParameter(parameterName);
			String validated = validateAndKeepAlive(sessionIdRequest);
			if (validated != null) {
				return validated;
			}
		}
		
		// No sessionId and no authentication microflow - generate new session ID
		String authMicroflow = mcpServer.getAuthenticationMicroflow();
		if (authMicroflow == null || authMicroflow.isEmpty()) {
			return UUID.randomUUID().toString();
		}
		
		// Create new session via authentication microflow
		ISession iSession = createSessionForUser(httpServletRequest, mcpServer);
		return iSession != null ? iSession.getId().toString() : null;
	}
	
	/**
	 * Creates a Mendix session for a user via authentication microflow.
	 */
	private ISession createSessionForUser(HttpServletRequest httpServletRequest, McpServer mcpServer) throws CoreException {
		IContext systemContext = Core.createSystemContext();
		Map<String, Object> microflowArgs = mapInputParametersAuthentication(mcpServer,
		     createHttpRequestMx(httpServletRequest, systemContext));
		
		IMendixObject userIMx = Core.microflowCall(mcpServer.getAuthenticationMicroflow())
		        .withParams(microflowArgs)
		        .execute(systemContext);
		
		if (userIMx == null) {
			return null;
		}
		
		User user = User.initialize(systemContext, userIMx);
		IUser iUser = Core.getUser(systemContext, user.getName());
		
		if (!iUser.isActive() || iUser.isBlocked()) {
			return null;
		}
		
		return Core.initializeSession(iUser, null);
	}
	
	/**
	 * Creates a Mendix HttpRequest object from servlet request.
	 */
	private HttpRequest createHttpRequestMx(HttpServletRequest httpServletRequest, IContext iContext) {
		HttpRequest httpRequestMx = new HttpRequest(iContext);
		
		Collections.list(httpServletRequest.getHeaderNames())
		        .forEach(headerName -> {
		            String headerValue = httpServletRequest.getHeader(headerName);
		            setHttpHeader(httpRequestMx, headerName, headerValue);
		        });
		
		return httpRequestMx;
	}
	
	/**
	 * Sets an HTTP header in the Mendix HttpRequest object.
	 */
	private void setHttpHeader(HttpRequest httpRequestMx, String key, String value) {
		system.proxies.HttpHeader httpHeader = new HttpHeader(httpRequestMx.getContext());
		httpHeader.setKey(key);
		httpHeader.setValue(value);
		httpHeader.setHttpHeaders(httpRequestMx);
	}
	
	/**
	 * Maps input parameters for authentication microflow.
	 */
	private Map<String, Object> mapInputParametersAuthentication(McpServer mcpServer, HttpRequest httpRequest) {
		Map<String, Object> inputParameters = new java.util.HashMap<>();
		Map<String, IDataType> parametersAndTypes = Core.getInputParameters(mcpServer.getAuthenticationMicroflow());
		parametersAndTypes.forEach((t, u) -> {
			if (Core.getMetaObject(u.getObjectType()).isSubClassOf(mcpserver.proxies.McpServer.getType())) {
				inputParameters.put(t, mcpServer.getMendixObject());
			} else if (Core.getMetaObject(u.getObjectType()).isSubClassOf(HttpRequest.getType())) {
				inputParameters.put(t, httpRequest.getMendixObject());
			}
		});
		return inputParameters;
	}
}
