package mcpclient.impl;

import io.modelcontextprotocol.client.McpSyncClient;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class McpClientRegistry {
	
	private static final MxLogger LOGGER = new mcpclient.impl.MxLogger(McpClientRegistry.class);

    private final static Map<Long, McpSyncClient> clientInstances = new ConcurrentHashMap<>();

    public static McpSyncClient getClient(Long id) {
    	LOGGER.debug("Getting client with id: " + id);
        return clientInstances.get(id);
    }

    public static void putClient(Long id, McpSyncClient client) {
    	LOGGER.debug("Putting client with id: " + id);
        clientInstances.put(id, client);
    }
    
    public static void closeClient(Long id, McpSyncClient client) {
    	LOGGER.debug("Removing client with id: " + id);
        clientInstances.remove(id, client);
    }
}
