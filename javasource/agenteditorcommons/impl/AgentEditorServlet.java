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
import java.util.stream.Collectors;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mendix.core.Core;
import com.mendix.extensibility.CustomBlobDocumentInfo;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import agentcommons.actions.Agent_Call_WithHistory;
import agentcommons.actions.Agent_Call_WithoutHistory;
import agentcommons.proxies.Agent;
import agentcommons.proxies.ENUM_Agent_UsageType;
import genaicommons.proxies.Request;
import genaicommons.proxies.Response;
import genaicommons.proxies.Span;
import genaicommons.proxies.ToolSpan;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.KnowledgeBaseSpan;
import genaicommons.proxies.MCPSpan;
import genaicommons.proxies.Message;
import genaicommons.proxies.Trace;

/**
 * A development servlet registered at /dev/preview_agent_test that handles agent test requests.
 *
 * Register it at app startup with:
 *   Core.addDevelopmentServlet("preview_agent_test", new AgentEditorServlet()
 *
 * POST /dev/preview_agent_test
 * Body: { "DocumentId": "<uuid>", "Variables": { "key": "value", ... } }
 * Response: JSON with the agent response or an error message.
 */
public class AgentEditorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private static final MxLogger LOGGER = new MxLogger(AgentEditorServlet.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        try (PrintWriter out = resp.getWriter()) {
            JsonNode requestJson = parseRequestBody(req);
            CustomBlobDocumentInfo agentCustomDocument = findAgentDocument(requestJson);       
            IContext context = Core.createSystemContext();
            Agent agent = findAgentObject(context, agentCustomDocument);
            Request request = createRequest(context, requestJson);
            Map<String, String> variables = parseVariables(requestJson);
            IMendixObject contextObject = createContextObject(variables, agent, context);
            Response response = callAgent(context, agent, request, contextObject);

            if (response == null) {
                throw new IllegalStateException("Agent " + agentCustomDocument.qualifiedDocumentName() + " call returned no response.");
            }

            LOGGER.debug("Agent " + agentCustomDocument.qualifiedDocumentName() + " call completed successfully.");

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

    private Agent findAgentObject(IContext context, CustomBlobDocumentInfo agentCustomDocument) {
        List<IMendixObject> results = Core.createXPathQuery("//AgentCommons.Agent[ModelDocumentID=$documentID]")
                .setVariable("documentID", agentCustomDocument.documentID().toString())
                .setAmount(1)
                .execute(context);

        if (results.isEmpty() || results.get(0) == null) {
            throw new IllegalStateException(
                    "Agent " + agentCustomDocument.qualifiedDocumentName()
                            + " object does not exist in the database. Make sure the agent has been imported first.");
        }
        
        return Agent.initialize(context, results.get(0));
    }

    private Response callAgent(IContext context, Agent agent, Request request, IMendixObject optionalContextObject) {
    	IMendixObject responseMxObject = Core.instantiate(context, "GenAICommons.Response");
    	if(agent.getUsageType() == ENUM_Agent_UsageType.Conversational) {
    		responseMxObject  = Core.userActionCall("AgentCommons." + Agent_Call_WithHistory.class.getSimpleName())
					.withParams(agent.getMendixObject(), request.getMendixObject() , optionalContextObject)
					.execute(context);
        } else {
        	responseMxObject = Core.userActionCall("AgentCommons." + Agent_Call_WithoutHistory.class.getSimpleName())
                .withParams(agent.getMendixObject(), optionalContextObject, request.getMendixObject(), null)
                .execute(context);
        }
    	
        if(responseMxObject == null) {
            throw new IllegalStateException("Agent " + agent.get_QualifiedName() + " call did not return a response object.");
        }
        return Response.initialize(context, responseMxObject);
    }

    private Map<String, Object> buildResponseMap(IContext context, Response response) {
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("responseText", nullToEmpty(response.getResponseText()));
        responseMap.put("requestTokens", response.getRequestTokens());
        responseMap.put("responseTokens", response.getResponseTokens());
        responseMap.put("totalTokens", response.getTotalTokens());
        responseMap.put("durationMilliseconds", response.getDurationMilliseconds());
        responseMap.put("stopReason", nullToEmpty(response.getStopReason()));
        responseMap.put("receivedAt", Instant.now().toEpochMilli());
        return responseMap;
    }

    /**
     * Retrieves the Trace associated with the Request, navigates to Spans,
     * and returns a list of tool span data: { toolName, durationMilliseconds }.
     */
    private List<Map<String, Object>> getToolSpans(IContext context, Request request) {
        List<Map<String, Object>> toolSpans = new ArrayList<>();
        try {
            Trace trace = request.getRequest_Trace();
            if (trace == null) {
                return toolSpans;
            }

            List<IMendixObject> spanObjects = Core.retrieveByPath(context, trace.getMendixObject(), "GenAICommons.Span_Trace");

            for (IMendixObject spanObject : spanObjects) {
                Span span = Span.initialize(context, spanObject);
                
                // Skip ModelSpan — only include ToolSpan and its subtypes (KnowledgeBaseSpan, MCPSpan)
                if (!(span instanceof ToolSpan)) {
                    continue;
                }

                ToolSpan toolSpan = (ToolSpan) span;
                
                Map<String, Object> toolSpanData = new HashMap<>();
                toolSpanData.put("displayName", nullToEmpty(toolSpan.getDisplayName(context)));
                toolSpanData.put("displayDescription", nullToEmpty(toolSpan.getDisplayDescription(context)));
                toolSpanData.put("toolName", nullToEmpty(toolSpan.getToolName(context)));
                toolSpanData.put("toolDescription", nullToEmpty(toolSpan.getToolDescription(context)));
                toolSpanData.put("durationMilliseconds", toolSpan.getDurationMilliseconds(context));

                if (span instanceof KnowledgeBaseSpan) {
                    KnowledgeBaseSpan kbSpan = (KnowledgeBaseSpan) span;
                    toolSpanData.put("kbDisplayName", nullToEmpty(kbSpan.getKBDisplayName(context)));
                } else if (span instanceof MCPSpan) {
                    MCPSpan mcpSpan = (MCPSpan) span;
                    toolSpanData.put("serverName", nullToEmpty(mcpSpan.getServerName(context)));
                }

                toolSpans.add(toolSpanData);
            }
        } catch (Exception e) {
            LOGGER.error("Error retrieving tool spans: ", e);
        }
        return toolSpans;
    }

    private static String nullToEmpty(String value) {
        return value != null ? value : "";
    }

    private void writeErrorResponse(HttpServletResponse resp, Exception e) throws IOException {
        LOGGER.error("Test action failed. ", e);
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
    
    private static IMendixObject createContextObject(Map<String, String> variables, Agent agent, IContext context) {
        String contextEntity = agent.getEntity();
        
        if(contextEntity == null || contextEntity.isBlank()) {
            return null;
        }
        
        IMendixObject contextObject = Core.instantiate(context, contextEntity);
        
        variables.forEach((k, v) -> contextObject.setValue(context, k, v));
        return contextObject;
    }
    
    private static Request createRequest(IContext context, JsonNode requestJson) throws IOException {
        Request request = new Request(context);
        JsonNode messagesNode = requestJson.get("messages");
        
        if (messagesNode != null && !messagesNode.isNull()) {
            // Parse the messages string into a JsonNode array
            JsonNode messagesArray;
            if (messagesNode.isTextual()) {
                // If it's a string, parse it
                messagesArray = OBJECT_MAPPER.readTree(messagesNode.asText());
            } else {
                // If it's already a JSON array node
                messagesArray = messagesNode;
            }
            List<Message> messageList = new ArrayList<Message>();
            // Loop over each message in the array
            if (messagesArray.isArray()) {
      
                for (JsonNode messageNode : messagesArray) {
                    Message message = new Message(context);
                    
                    // Extract fields from the JSON
                    String type = getTextOrNull(messageNode, "type");
                    String text = getTextOrNull(messageNode, "text");
                    
                    // Set the message properties
                    ENUM_MessageRole role = "user".equals(type) ? ENUM_MessageRole.user : ENUM_MessageRole.assistant; // Map "type" to "role"
                    message.setRole(role); 
                    message.setContent(text);  // "text" maps to content
                    messageList.add(message);
                    LOGGER.debug("Created message: role=" + type + ", content=" + text);
                }
            }
            request.setRequest_Message(messageList);
        }
        
        return request;
    }
}
