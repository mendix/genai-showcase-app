package mxgenaiconnector.impl;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import mxgenaiconnector.proxies.RequestExtension;
import mxgenaiconnector.genaicommons_impl.FunctionMappingImpl;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.Request;


public class ConverseFunctionCalling{
	
	private static final ObjectMapper MAPPER = new ObjectMapper();
	
	//........Add ToolConfig to Request........
	
	//Creates toolConfig node
	public static void addToolConfig(ObjectNode rootNode) {
		if(rootNode == null || (rootNode.path("toolConfig").asText().isBlank() && rootNode.path("toolConfig").path("tools").size() == 0)) {
			//If there is no ToolCollection (toolConfig), this needs to be removed
			rootNode.remove("toolConfig");
			return;
		}
		
		ArrayNode toolsNode = (ArrayNode) rootNode.path("toolConfig").path("tools");
		for (int i = 0; i < toolsNode.size(); i++) {
			JsonNode toolNode = toolsNode.get(i);
			String microflow = toolNode.path("microflow").asText();
			if (microflow.isBlank() == false) {
				ObjectNode toolNodeObject = (ObjectNode) toolNode;
				setInputSchemaForToolNode(microflow,toolNodeObject);
				
				//Add toolSpec node around tool
				ObjectNode toolSpecNode = MAPPER.createObjectNode();
				toolSpecNode.set("toolSpec",toolNode);
				//Existing node is replaced by new toolSpec node.
				toolsNode.set(i,toolSpecNode);
				
				//Remove functionMicrofow node which is not part of the Converse request
				((ObjectNode) toolNode).remove("microflow");
			}
		}
	}
	
	//This will create the input schema JSON needed for specifying the input of a tool
	private static void setInputSchemaForToolNode(String microflow, ObjectNode toolNode) {
		
		// Create the root object node
        ObjectNode inputSchemaNode = MAPPER.createObjectNode();
        inputSchemaNode.put("type", "object");

        // Create the properties node (if input parameter is available)
        String parameterName = FunctionMappingImpl.getFirstInputParamName(microflow);
		if(parameterName != null && parameterName.isBlank() == false) {
			ObjectNode propertiesNode = MAPPER.createObjectNode();
	        ObjectNode fieldNode = MAPPER.createObjectNode();
	        fieldNode.put("type", "string");
	        propertiesNode.set(parameterName, fieldNode);
	        inputSchemaNode.set("properties", propertiesNode);
	        inputSchemaNode.putArray("required").add(parameterName);
		}
        
        //Add a "json" wrapper around the inputSchema
        ObjectNode jsonNode = MAPPER.createObjectNode();
        jsonNode.set("json", inputSchemaNode);
        
        //Set the whole InputSchema as new node to toolNode
        toolNode.set("inputSchema",jsonNode);
	}
	
	
	//........Handle ToolCall and ToolResult........
	
	//All Messages of type Tool need to be mapped to a ToolResult ContentBlock as role "user"
	public static void mapToolResult(ArrayNode messageList, int i,IContext context, Request request) throws JsonMappingException, JsonProcessingException, CoreException {
		JsonNode toolMessageRoot = messageList.get(i);
		
		if(isToolMessage(toolMessageRoot)) {
			//Add new User Message that will contain the ToolResult
			
			//Get the assistant message right before the tool messages and populate it with the original json from the response
			ObjectNode assistantTextMessage = (ObjectNode) messageList.get(i-1);
			if(assistantTextMessage != null) {
				setAssistantToolUse(assistantTextMessage, getRequestExtension(context,request,toolMessageRoot));
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
	
	//The exact Response from Converse needs to be added as an assistant message. This is stored in the requestExtension right after a call.
	private static void setAssistantToolUse(ObjectNode messageNode,RequestExtension requestExtension) throws JsonMappingException, JsonProcessingException {
		ObjectNode toolUseMessageRoot = (ObjectNode) MAPPER.readTree(requestExtension.getToolUseContent());
		JsonNode contentNode = toolUseMessageRoot.path("output").path("message").path("content");
		messageNode.set("content", contentNode);
	}
	
	
	//Contains information from previous responses that are added to the Request
	private static RequestExtension getRequestExtension(IContext context, Request request, JsonNode toolMessage) throws CoreException, JsonMappingException, JsonProcessingException {
		List<IMendixObject> requestExtensionList = Core.retrieveByPath(context, request.getMendixObject(), 
				RequestExtension.MemberNames.RequestExtension_Request.toString());
		
		String toolCallId = toolMessage.path("toolCallId").toString();
		//Iterate over all RequestExtension objects and return the object that contains the toolUseId from the current toolMessage
		for (IMendixObject requestExtensionMxObject : requestExtensionList) {
			RequestExtension requestExtension = RequestExtension.initialize(context,requestExtensionMxObject);
			JsonNode rootNode = MAPPER.readTree(requestExtension.getToolUseContent());
			ArrayNode contentList = (ArrayNode) rootNode.path("output").path("message").path("content");
			//There can be multiple "toolUseBlocks" inside of the content array.
			for(JsonNode content : contentList) {
				if(toolCallId.equals(content.path("toolUse").path("toolUseId").toString())) {
					return requestExtension;
				}
			}
		}
		return null;
	}
	
	
}