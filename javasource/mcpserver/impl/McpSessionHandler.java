package mcpserver.impl;

public class McpSessionHandler{

	private static final ThreadLocal<String> sessionHolder = new ThreadLocal<>();

	
	/**
	 *  Set the session ID
	 * @param sessionId
	 */
    public static void setSessionId(String sessionId) {
        sessionHolder.set(sessionId);
    }

    /**
     *  Get the session ID
     * @return
     */
    public static String getSessionId() {
        return sessionHolder.get();
    }

    /**
     *  Remove the session ID
     */
    public static void clearSessionId() {
        sessionHolder.remove();
    }
}