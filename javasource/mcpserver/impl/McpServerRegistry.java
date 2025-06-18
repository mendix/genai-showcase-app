package mcpserver.impl;

import com.mendix.core.Core;
import io.modelcontextprotocol.server.McpSyncServer;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class McpServerRegistry {

    private static final Map<Long, McpSyncServer> serverInstances = new ConcurrentHashMap<>();

    public static McpSyncServer getServerInstance(Long id) {
        Core.getLogger("MCP").info("Getting server with id: " + id);

        return serverInstances.get(id);
    }

    public static void putServerInstance(Long id, McpSyncServer server) {
        Core.getLogger("MCP").info("Put server with id: " + id);

        serverInstances.put(id, server);
    }

}
