package mcpserver.impl;

import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import io.modelcontextprotocol.spec.McpServerSession;
import io.modelcontextprotocol.spec.McpServerTransportProvider;
import reactor.core.publisher.Mono;

import mcpserver.proxies.McpServer;

/**
 * Main request handler for MCP servers that delegates to transport handlers.
 * Uses Streamable HTTP transport for all MCP communication.
 */
public class McpServerRequestHandler extends RequestHandler implements McpServerTransportProvider {
    
    private static final MxLogger LOGGER = new MxLogger(McpServerRequestHandler.class);
    
    private final McpServer mcpServer;
    private final McpSessionManager sessionManager;
    private final McpTransportHandler transportHandler;
    
    /**
     * Creates a new MCP server request handler.
     * Uses Streamable HTTP transport with /mcp endpoint.
     * @param mcpServer The MCP server configuration (must not be null)
     * @param basePath The base path for the server (e.g., "mcp-server") - currently unused
     * @throws IllegalArgumentException if mcpServer is null
     */
    public McpServerRequestHandler(McpServer mcpServer, String basePath) {
        if (mcpServer == null) {
            throw new IllegalArgumentException("mcpServer cannot be null");
        }
        this.mcpServer = mcpServer;
        this.sessionManager = new McpSessionManager();
        this.transportHandler = createTransportHandler(mcpServer, sessionManager);
        LOGGER.debug("MCP server request handler created for path: " + basePath);
    }
    
    /**
     * Creates the transport handler for Streamable HTTP.
     * Uses /mcp endpoint for all MCP operations.
     * @param mcpServer The MCP server configuration
     * @param sessionManager The session manager instance
     * @return The Streamable HTTP transport handler
     */
    private McpTransportHandler createTransportHandler(McpServer mcpServer, McpSessionManager sessionManager) {
        return new McpTransportHandler(mcpServer, sessionManager);
    }
    
    /**
     * Returns the session manager for this request handler.
     * @return The session manager instance
     */
    public McpSessionManager getSessionManager() {
        return this.sessionManager;
    }
    
    @Override
    public void setSessionFactory(McpServerSession.Factory sessionFactory) {
        transportHandler.setSessionFactory(sessionFactory);
    }
    
    @Override
    public void processRequest(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception {
        String method = request.getHttpServletRequest().getMethod();
        
        LOGGER.debug("Processing request - Method: " + method + ", Path: " + path);
        
        try {
            if (!transportHandler.canHandlePath(path)) {
                LOGGER.warn("Transport handler cannot handle path: " + path);
                response.getHttpServletResponse().sendError(404, "Endpoint not found");
                return;
            }
            
            switch (method) {
                case "OPTIONS":
                    transportHandler.handleHead(request, response, path);
                    break;
                    
                case "HEAD":
                    transportHandler.handleHead(request, response, path);
                    break;
                    
                case "GET":
                    transportHandler.handleGet(request, response, path);
                    break;
                    
                case "POST":
                    transportHandler.handlePost(request, response, path);
                    break;
                    
                case "DELETE":
                    transportHandler.handleDelete(request, response, path);
                    break;
                    
                default:
                    response.getHttpServletResponse().sendError(405, "Method not supported");
            }
            
        } catch (Exception e) {
            LOGGER.error("Error processing " + method + " request to " + path + ": " + e.getMessage(), e);
            // Send error response if not already committed
            if (!response.getHttpServletResponse().isCommitted()) {
                try {
                    response.getHttpServletResponse().sendError(500, "Internal server error");
                } catch (Exception responseEx) {
                    LOGGER.warn("Failed to send error response: " + responseEx.getMessage());
                }
            }
            throw e;
        }
    }
    
    /**
     * Server-to-client notifications are not supported with Streamable HTTP transport.
     * Streamable HTTP is request-response based without persistent connections,
     * so the server cannot push unsolicited messages to clients.
     * This method is a no-op and returns immediately.
     */
    @Override
    public Mono<Void> notifyClients(String method, Object params) {
        return Mono.empty();
    }
    
    @Override
    public Mono<Void> closeGracefully() {
        LOGGER.info("Closing MCP server request handler gracefully");
        
        try {
            transportHandler.closeGracefully();
        } catch (Exception e) {
            LOGGER.error("Error during transport handler shutdown: " + e.getMessage(), e);
        }
        
        // Close all sessions in the session manager
        return reactor.core.publisher.Flux.fromIterable(sessionManager.getAllSessions())
                .flatMap(session -> session.closeGracefully()
                        .timeout(java.time.Duration.ofSeconds(5))
                        .onErrorResume(err -> {
                            LOGGER.warn("Failed to close session " + session.getId() + ": " + err.getMessage());
                            return Mono.empty();
                        }))
                .then()
                .doOnTerminate(() -> LOGGER.info("All sessions closed"));
    }
}
