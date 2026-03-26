package agenteditorcommons.impl;

import static java.util.Objects.requireNonNull;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mendix.core.Core;
import com.mendix.extensibility.CustomBlobDocumentInfo;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixIdentifier;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import agentcommons.actions.Agent_Call_WithoutHistory;
import agenteditorcommons.impl.MxLogger;

/**
 * A development servlet registered at /dev/agentEditor that handles agent test requests.
 *
 * Register it at app startup with:
 *   Core.addDevelopmentServlet("agentEditor", new AgentEditorServlet());
 *
 * POST /dev/agentEditor
 * Body: { "DocumentId": "<uuid>", "Variables": { "key": "value", ... } }
 * Response: JSON with the agent response or an error message.
 */
public class AgentEditorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private static final MxLogger LOGGER = new MxLogger(AgentEditorServlet.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private static final Pattern VARIABLE_PATTERN = Pattern.compile("\\{\\{([^}\\s{]+)\\}\\}");

    private static final String ENTITY_REQUEST = "GenAICommons.Request";
    private static final String ENTITY_MESSAGE = "GenAICommons.Message";
    private static final String ENTITY_MODEL_SPAN = "GenAICommons.ModelSpan";
    private static final String ENTITY_KNOWLEDGE_BASE_SPAN = "GenAICommons.KnowledgeBaseSpan";
    private static final String ENTITY_MCP_SPAN = "GenAICommons.MCPSpan";

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        try (PrintWriter out = resp.getWriter()) {
            JsonNode requestJson = parseRequestBody(req);

            CustomBlobDocumentInfo agentCustomDocument = findAgentDocument(requestJson);

            String agentContent = agentCustomDocument.content();
            if (agentContent == null || agentContent.isEmpty()) {
                throw new IllegalStateException(
                        "Agent " + agentCustomDocument.qualifiedDocumentName() + " content is empty");
            }

            JsonNode agentJson = OBJECT_MAPPER.readTree(agentContent);

            Map<String, String> variables = parseVariables(requestJson);
            String systemPrompt = replaceVariables(getTextOrEmpty(agentJson, "systemPrompt"), variables);
            String userPrompt = replaceVariables(getTextOrEmpty(agentJson, "userPrompt"), variables);

            IContext context = Core.createSystemContext();
            IMendixObject agentMendixObject = findAgentObject(context, agentCustomDocument);
            IMendixObject request = buildRequest(context, systemPrompt, userPrompt);
            IMendixObject response = callAgent(context, agentMendixObject, request);

            if (response == null) {
                throw new IllegalStateException("Agent " + agentCustomDocument.qualifiedDocumentName() + " call returned no response");
            }

            LOGGER.debug("Agent " + agentCustomDocument.qualifiedDocumentName() + " call completed successfully");

            Map<String, Object> responseMap = buildResponseMap(context, response);
            responseMap.put("tools", getToolSpans(context, request));
            resp.setStatus(HttpServletResponse.SC_OK);
            out.write(OBJECT_MAPPER.writeValueAsString(responseMap));

        } catch (Exception e) {
            writeErrorResponse(resp, e);
        }
    }

    private JsonNode parseRequestBody(HttpServletRequest req) throws IOException {
        String body = req.getReader().lines().collect(Collectors.joining());
        JsonNode requestJson = OBJECT_MAPPER.readTree(body);
        LOGGER.debug("Received request: " + requestJson.toString());
        return requestJson;
    }

    private CustomBlobDocumentInfo findAgentDocument(JsonNode requestJson) {
        String documentId = getTextOrNull(requestJson, "documentId");
        requireNonNull(documentId, "Missing required field: documentId");

        UUID documentUUID = UUID.fromString(documentId);
        CustomBlobDocumentInfo customBlobDocument = Core.extensibility().getCustomDocumentById(documentUUID);
        requireNonNull(customBlobDocument, "Agent document not found for ID: " + documentId);

        return customBlobDocument;
    }

    private Map<String, String> parseVariables(JsonNode requestJson) throws IOException {
        JsonNode variablesNode = requestJson.get("variables");

        if (variablesNode == null || variablesNode.isNull()) {
            return Map.of();
        } else if (variablesNode.isTextual()) {
            return OBJECT_MAPPER.readValue(variablesNode.asText(),
                    OBJECT_MAPPER.getTypeFactory().constructMapType(Map.class, String.class, String.class));
        } else {
            return OBJECT_MAPPER.convertValue(variablesNode,
                    OBJECT_MAPPER.getTypeFactory().constructMapType(Map.class, String.class, String.class));
        }
    }

    private IMendixObject findAgentObject(IContext context, CustomBlobDocumentInfo agentCustomDocument) {
        List<IMendixObject> results = Core.createXPathQuery("//AgentCommons.Agent[ModelDocumentID=$documentID]")
                .setVariable("documentID", agentCustomDocument.documentID().toString())
                .setAmount(1)
                .execute(context);

        if (results.isEmpty() || results.get(0) == null) {
            throw new IllegalStateException(
                    "Agent " + agentCustomDocument.qualifiedDocumentName()
                            + " object does not exist in the database. Make sure the agent has been imported first.");
        }

        return results.get(0);
    }

    private IMendixObject buildRequest(IContext context, String systemPrompt, String userPrompt) {
        IMendixObject request = Core.instantiate(context, ENTITY_REQUEST);
        request.setValue(context, "SystemPrompt", systemPrompt);

        IMendixObject userMessage = Core.instantiate(context, ENTITY_MESSAGE);
        userMessage.setValue(context, "Role", "user");
        userMessage.setValue(context, "Content", userPrompt);

        List<IMendixIdentifier> messageIds = new ArrayList<>();
        messageIds.add(userMessage.getId());
        request.setValue(context, "GenAICommons.Request_Message", messageIds);

        return request;
    }

    private IMendixObject callAgent(IContext context, IMendixObject agentMendixObject, IMendixObject request) {
        return Core.userActionCall("AgentCommons." + Agent_Call_WithoutHistory.class.getSimpleName())
                .withParams(agentMendixObject, null, request, null)
                .execute(context);
    }

    private Map<String, Object> buildResponseMap(IContext context, IMendixObject response) {
        Map<String, Object> responseMap = new HashMap<>();
        String responseText = (String) response.getValue(context, "ResponseText");
        responseMap.put("responseText", responseText != null ? responseText : "");
        responseMap.put("requestTokens", response.getValue(context, "RequestTokens"));
        responseMap.put("responseTokens", response.getValue(context, "ResponseTokens"));
        responseMap.put("totalTokens", response.getValue(context, "TotalTokens"));
        responseMap.put("durationMilliseconds", response.getValue(context, "DurationMilliseconds"));
        responseMap.put("stopReason", response.getValue(context, "StopReason"));
        responseMap.put("receivedAt", Instant.now().toEpochMilli());
        return responseMap;
    }

    /**
     * Retrieves the Trace associated with the Request, navigates to Spans,
     * and returns a list of tool span data: { toolName, durationMilliseconds }.
     */
    private List<Map<String, Object>> getToolSpans(IContext context, IMendixObject request) {
        List<Map<String, Object>> toolSpans = new ArrayList<>();
        try {
            List<IMendixObject> traces = Core.retrieveByPath(context, request, "GenAICommons.Request_Trace");
            if (traces.isEmpty()) {
                return toolSpans;
            }

            IMendixObject trace = traces.get(0);

            List<IMendixObject> spans = Core.retrieveByPath(context, trace, "GenAICommons.Span_Trace");

            for (IMendixObject span : spans) {
                String spanType = span.getType();
                // Skip ModelSpan — only include ToolSpan and its subtypes (KnowledgeBaseSpan, MCPSpan)
                if (ENTITY_MODEL_SPAN.equals(spanType)) {
                    continue;
                }

                Map<String, Object> toolSpan = new HashMap<>();
                String displayName = (String) span.getValue(context, "DisplayName");
                toolSpan.put("displayName", displayName != null ? displayName : "");
                String displayDescription = (String) span.getValue(context, "DisplayDescription");
                toolSpan.put("displayDescription", displayDescription != null ? displayDescription : "");
                String toolName = (String) span.getValue(context, "ToolName");
                toolSpan.put("toolName", toolName != null ? toolName : "");
                String toolDescription = (String) span.getValue(context, "ToolDescription");
                toolSpan.put("toolDescription", toolDescription != null ? toolDescription : "");
                toolSpan.put("durationMilliseconds", span.getValue(context, "DurationMilliseconds"));

                if (ENTITY_KNOWLEDGE_BASE_SPAN.equals(spanType)) {
                    String kbDisplayName = (String) span.getValue(context, "KBDisplayName");
                    toolSpan.put("kbDisplayName", kbDisplayName != null ? kbDisplayName : "");
                } else if (ENTITY_MCP_SPAN.equals(spanType)) {
                    String serverName = (String) span.getValue(context, "ServerName");
                    toolSpan.put("serverName", serverName != null ? serverName : "");
                }

                toolSpans.add(toolSpan);
            }
        } catch (Exception e) {
            LOGGER.error("Error retrieving tool spans: " + e.getMessage());
        }
        return toolSpans;
    }

    private void writeErrorResponse(HttpServletResponse resp, Exception e) throws IOException {
        LOGGER.error("Test action failed. " + e.getMessage());
        resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);

        try (PrintWriter out = resp.getWriter()) {
            out.write(OBJECT_MAPPER.writeValueAsString(
                    Map.of("status", "error", "message", "Test action failed. Check the runtime logs for details.")));
        }
    }

    private static String getTextOrNull(JsonNode node, String fieldName) {
        JsonNode field = node.get(fieldName);
        return (field != null && !field.isNull()) ? field.asText() : null;
    }

    private static String getTextOrEmpty(JsonNode node, String fieldName) {
        JsonNode field = node.get(fieldName);
        return (field != null && !field.isNull()) ? field.asText() : "";
    }

    private static String replaceVariables(String template, Map<String, String> variables) {
        if (template == null || template.isEmpty() || variables.isEmpty()) {
            return template;
        }
        Matcher matcher = VARIABLE_PATTERN.matcher(template);
        StringBuilder result = new StringBuilder();
        while (matcher.find()) {
            String variableName = matcher.group(1);
            String replacement = variables.getOrDefault(variableName, matcher.group(0));
            matcher.appendReplacement(result, Matcher.quoteReplacement(replacement));
        }
        matcher.appendTail(result);
        return result.toString();
    }
}
