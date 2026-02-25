

package mxgenaiconnector.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import genaicommons.proxies.ENUM_MessageRole;

import genaicommons.proxies.Request;



public class ConverseFunctionCalling{
	
	private static final ObjectMapper MAPPER = new ObjectMapper();	
	
	//........Handle ToolCall and ToolResult........
	
	//All Messages of type Tool need to be mapped to a ToolResult ContentBlock as role "user"
	public static void mapToolResult(ArrayNode messageList, int i,IContext context, Request request) throws JsonMappingException, JsonProcessingException, CoreException {
		JsonNode toolMessageRoot = messageList.get(i);
		if (toolMessageRoot != null && toolMessageRoot.isObject()) {
			// Map any toolCalls on this message into Converse toolUse blocks
			setAssistantToolUse((ObjectNode) toolMessageRoot);
		}
		
		if(isToolMessage(toolMessageRoot)) {
			//Add new User Message that will contain the ToolResult
			
			//Get the assistant message right before the tool messages and populate it with the original json from the response
			ObjectNode assistantTextMessage = (ObjectNode) messageList.get(i-1);
			if(assistantTextMessage != null) {
				setAssistantToolUse(assistantTextMessage);
			}
					
			//Add Content of toolResult to Content for all subsequent tool messages
			ObjectNode newUserMessage = MAPPER.createObjectNode();
			ArrayNode newContent = MAPPER.createArrayNode();
			
			for (int j = i; j < messageList.size(); j++) {
				JsonNode toolMessage = messageList.get(j);
				if(!isToolMessage(toolMessage)) {
					//Only map the directly subsequent tools
					break;
				}
				newContent.add(getToolResultBlock(toolMessage));
				//"tool" message no longer needed; decrease j because we removed the previous message
				messageList.remove(j);
				j--;
			}
			
			newUserMessage.set("content", newContent);
			newUserMessage.put("role", ENUM_MessageRole.user.toString());
			
			if(i > messageList.size()) {
				messageList.add(newUserMessage);
			}
			else {
				messageList.insert(i, newUserMessage);
			}
		}
	}

	//Transform a GenAICommons "tool" message to a Converse "ToolResultBlock"
	private static ObjectNode getToolResultBlock(JsonNode toolMessage) {
		ObjectNode result = MAPPER.createObjectNode();
		result.put("result", toolMessage.path("content").get(0).path("text").asText());
		ObjectNode contentItem = MAPPER.createObjectNode();
        contentItem.set("json", result);
        
        ArrayNode contentArray = MAPPER.createArrayNode();
        contentArray.add(contentItem);
        
        ObjectNode toolResult = MAPPER.createObjectNode();
        toolResult.put("toolUseId", toolMessage.path("toolCallId").asText());
        toolResult.set("content", contentArray);
        
        ObjectNode toolResultWrapper = MAPPER.createObjectNode();
        toolResultWrapper.set("toolResult", toolResult);
		
		return toolResultWrapper;
	}
	
	//The "tool" role is only applicable for tool results that haven't been mapped yet to Converse nodes. 
	private static boolean isToolMessage(JsonNode messageNode) {
		return (!(messageNode.path("role").isNull()) && messageNode.path("role").asText().equals(ENUM_MessageRole.tool.toString()));
	}
	
	//Map toolCalls on a message into Converse toolUse blocks inside the message content.
	private static void setAssistantToolUse(ObjectNode messageNode) throws JsonMappingException, JsonProcessingException {
		if (messageNode == null) {
			return;
		}
		JsonNode toolCallsNode = messageNode.path("toolCalls");
		if (!toolCallsNode.isArray() || toolCallsNode.isEmpty()) {
			return;
		}
		ArrayNode contentArray = messageNode.has("content") && messageNode.get("content").isArray()
				? (ArrayNode) messageNode.get("content")
				: MAPPER.createArrayNode();
		
		for (JsonNode toolCall : toolCallsNode) {
			ObjectNode toolUseNode = MAPPER.createObjectNode();
			String toolUseId = toolCall.has("toolUseId") ? toolCall.path("toolUseId").asText() : "";
			if (toolUseId.isBlank()) {
				toolUseId = toolCall.has("toolCallId") ? toolCall.path("toolCallId").asText() : "";
			}
			if (toolUseId.isBlank()) {
				toolUseId = messageNode.has("toolCallId") ? messageNode.path("toolCallId").asText() : "";
			}
			if (!toolUseId.isBlank()) {
				toolUseNode.put("toolUseId", toolUseId);
			}
			if (toolCall.has("name")) {
				toolUseNode.put("name", toolCall.path("name").asText());
			}
			JsonNode inputNode = toolCall.get("input");
			if (inputNode != null && !inputNode.isNull()) {
				JsonNode inputToUse = inputNode;
				if (inputNode.isTextual()) {
					String inputText = inputNode.asText();
					try {
						inputToUse = MAPPER.readTree(inputText);
					} catch (Exception e) {
						ObjectNode wrappedInput = MAPPER.createObjectNode();
						wrappedInput.put("value", inputText);
						inputToUse = wrappedInput;
					}
				}
				toolUseNode.set("input", inputToUse);
			}
			ObjectNode toolUseWrapper = MAPPER.createObjectNode();
			toolUseWrapper.set("toolUse", toolUseNode);
			contentArray.add(toolUseWrapper);
		}
		removeEmptyTextBlocks(contentArray);
		messageNode.set("content", contentArray);
		messageNode.remove("toolCalls");
		messageNode.remove("toolCallId");
	}

	private static void removeEmptyTextBlocks(ArrayNode contentArray) {
		for (int i = 0; i < contentArray.size(); i++) {
			JsonNode contentNode = contentArray.get(i);
			// Remove empty objects
			if (contentNode != null && contentNode.isObject() && contentNode.isEmpty()) {
				contentArray.remove(i);
				i--;
				continue;
			}
			// Remove blocks with empty text
			if (contentNode != null && contentNode.has("text")) {
				JsonNode textNode = contentNode.get("text");
				if (textNode != null && textNode.isTextual() && textNode.asText().isBlank()) {
					contentArray.remove(i);
					i--;
				}
			}
		}
	}
}