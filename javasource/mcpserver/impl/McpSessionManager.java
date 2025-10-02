package mcpserver.impl;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.ISession;

import io.modelcontextprotocol.server.McpSyncServerExchange;
import io.modelcontextprotocol.spec.McpServerSession;
import io.modelcontextprotocol.spec.McpServerTransport;

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
		return sessions.isEmpty();
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
}
