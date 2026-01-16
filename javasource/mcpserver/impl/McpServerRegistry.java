package mcpserver.impl;

import io.modelcontextprotocol.server.McpSyncServer;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class McpServerRegistry {

    private static final Map<Long, McpSyncServer> serverInstances = new ConcurrentHashMap<>();
    
    // Store session managers for each server instance
    private static final Map<Long, McpSessionManager> sessionManagers = new ConcurrentHashMap<>();
    
	private static final MxLogger LOGGER = new mcpserver.impl.MxLogger(McpServerRegistry.class);

    public static McpSyncServer getServerInstance(Long id) {
    	LOGGER.debug("Getting server with id: " + id);

        return serverInstances.get(id);
    }

    public static void putServerInstance(Long id, McpSyncServer server) {
    	LOGGER.debug("Put server with id: " + id);

        serverInstances.put(id, server);
    }
    
    /**
     * Stores a session manager for a specific server instance.
     * @param id The server instance ID
     * @param sessionManager The session manager instance
     */
    public static void putSessionManager(Long id, McpSessionManager sessionManager) {
        LOGGER.debug("Put session manager with id: " + id);
        sessionManagers.put(id, sessionManager);
    }
    
    /**
     * Retrieves the session manager for a specific server instance.
     * @param id The server instance ID
     * @return The session manager instance, or null if not found
     */
    public static McpSessionManager getSessionManager(Long id) {
        LOGGER.debug("Getting session manager with id: " + id);
        return sessionManagers.get(id);
    }
    
    /**
     * Removes a server instance and its session manager from the registry.
     * @param id The server instance ID to remove
     */
    public static void removeServerInstance(Long id) {
        LOGGER.debug("Remove server with id: " + id);
        serverInstances.remove(id);
        sessionManagers.remove(id);
    }

}
