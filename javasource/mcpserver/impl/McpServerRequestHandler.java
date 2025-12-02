package mcpserver.impl;

import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import io.modelcontextprotocol.spec.McpServerSession;
import io.modelcontextprotocol.spec.McpServerTransportProvider;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import mcpserver.proxies.McpServer;

/**
 * Main request handler for MCP servers that delegates to protocol-specific transport handlers.
 * Supports both SSE and Streamable HTTP transports based on the configured protocol version.
 */
public class McpServerRequestHandler extends RequestHandler implements McpServerTransportProvider {
    
    private static final MxLogger LOGGER = new MxLogger(McpServerRequestHandler.class);
    
    private final McpServer mcpServer;
    private final McpTransportHandler transportHandler;
    private final McpSessionManager sessionManager = McpSessionManager.getInstance();
    
    /**
     * Creates a new MCP server request handler.
     * Transport endpoints are defined internally based on protocol version.
     * @param mcpServer The MCP server configuration
     * @param basePath The base path for the server (e.g., "mcp-server")
     */
    public McpServerRequestHandler(McpServer mcpServer, String basePath) {
        this.mcpServer = mcpServer;
        this.transportHandler = createTransportHandler(mcpServer, basePath);
    }
    
    /**
     * Creates the appropriate transport handler based on the protocol version.
     * Each transport defines its own endpoint conventions:
     * - SSE: uses /sse (GET) and /messages (POST)
     * - Streamable HTTP: uses /mcp (POST)
     * @param mcpServer The MCP server configuration
     * @param basePath The base path (e.g., "mcp-server")
     * @return The appropriate transport handler
     */
    private McpTransportHandler createTransportHandler(McpServer mcpServer, String basePath) {
        String protocolVersion = mcpServer.getProtocolVersion() != null ? 
            mcpServer.getProtocolVersion().toString() : "v2024_11_05";
        
        // Determine which transport to use based on protocol version
        if (protocolVersion.contains("v2024")) {
        	return new SseTransportHandler(mcpServer, basePath);
        } else {
        	return new StreamableHttpTransportHandler(mcpServer, basePath);
        }
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
                    // Handle CORS preflight
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
            LOGGER.error("Error processing request: " + e.getMessage(), e);
            throw e;
        }
    }
    
    @Override
    public Mono<Void> notifyClients(String method, Object params) {
        if (!sessionManager.hasSessions()) {
            return Mono.empty();
        }
        
        return Flux.fromIterable(sessionManager.getAllSessions())
                .flatMap(session -> session.sendNotification(method, params)
                        .doOnError(err -> LOGGER.error("Failed to send notification to session: " + err.getMessage())))
                .onErrorComplete()
                .then();
    }
    
    @Override
    public Mono<Void> closeGracefully() {
        try {
            transportHandler.closeGracefully();
        } catch (Exception e) {
            LOGGER.error("Error during transport handler shutdown: " + e.getMessage(), e);
        }
        
        return Flux.fromIterable(sessionManager.getAllSessions())
                .flatMap(McpServerSession::closeGracefully)
                .then();
    }
}
