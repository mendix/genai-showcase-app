package mcpserver.impl;

import io.modelcontextprotocol.server.McpSyncServer;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class McpServerRegistry {

    private static final Map<Long, McpSyncServer> serverInstances = new ConcurrentHashMap<>();
    
	private static final MxLogger LOGGER = new mcpserver.impl.MxLogger(McpServerRegistry.class);

    public static McpSyncServer getServerInstance(Long id) {
    	LOGGER.debug("Getting server with id: " + id);

        return serverInstances.get(id);
    }

    public static void putServerInstance(Long id, McpSyncServer server) {
    	LOGGER.debug("Put server with id: " + id);

        serverInstances.put(id, server);
    }

}
