package mcpserver.impl;

/**
 * Simple error record for JSON-RPC error responses.
 * Used when sending error messages to MCP clients.
 */
public record McpError(String error) {
}
