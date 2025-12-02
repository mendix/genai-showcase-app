package mcpserver.impl;

import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import io.modelcontextprotocol.spec.McpServerSession;

/**
 * Interface for MCP transport handlers.
 * Implementations provide protocol-specific handling for SSE or Streamable HTTP.
 */
public interface McpTransportHandler {
    
    /**
     * Checks if this transport handler can handle the given path.
     * SSE handles both /sse (GET) and /messages (POST) endpoints.
     * Streamable HTTP handles only /mcp (POST) endpoint.
     * @param path The request path to check
     * @return true if this handler can process the path, false otherwise
     */
    boolean canHandlePath(String path);
    
    /**
     * Sets the session factory used to create MCP server sessions.
     * @param sessionFactory The factory for creating sessions
     */
    void setSessionFactory(McpServerSession.Factory sessionFactory);
    
    /**
     * Handles HTTP HEAD requests for transport validation.
     * @param request The HTTP request
     * @param response The HTTP response
     * @param path The request path
     * @throws Exception If an error occurs during processing
     */
    void handleHead(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception;
    
    /**
     * Handles HTTP GET requests (typically for establishing connections).
     * @param request The HTTP request
     * @param response The HTTP response
     * @param path The request path
     * @throws Exception If an error occurs during processing
     */
    void handleGet(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception;
    
    /**
     * Handles HTTP POST requests (for sending messages).
     * @param request The HTTP request
     * @param response The HTTP response
     * @param path The request path
     * @throws Exception If an error occurs during processing
     */
    void handlePost(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception;
    
    /**
     * Handles HTTP DELETE requests (for session termination in Streamable HTTP).
     * @param request The HTTP request
     * @param response The HTTP response
     * @param path The request path
     * @throws Exception If an error occurs during processing
     */
    void handleDelete(IMxRuntimeRequest request, IMxRuntimeResponse response, String path) throws Exception;
    
    /**
     * Initiates a graceful shutdown of the transport.
     * @throws Exception If an error occurs during shutdown
     */
    void closeGracefully() throws Exception;
}
