package synthiaconnector.impl;

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

import synthiaconnector.proxies.RequestExtension;
import synthiaconnector.genaicommons_impl.FunctionMappingImpl;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.Request;



public class ConverseFunctionCalling{
	
	private static final MxLogger LOGGER = new MxLogger(ConverseFunctionCalling.class);
	private static final ObjectMapper MAPPER = new ObjectMapper();
	
	//........Add ToolConfig to Request
	
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
			String inputParamName = FunctionMappingImpl.getFirstInputParamName(toolNode.path("functionMicroflow").asText());
			if (inputParamName.isBlank() == false) {
				ObjectNode toolNodeObject = (ObjectNode) toolNode;
				setInputSchemaForToolNode(inputParamName,toolNodeObject);
				
				//Add toolSpec node around tool
				ObjectNode toolSpecNode = MAPPER.createObjectNode();
				toolSpecNode.set("toolSpec",toolNode);
				//Existing node is replaced by new toolSpec node.
				toolsNode.set(i,toolSpecNode);
				
				//Remove functionMicrofow node which is not part of the Converse request
				((ObjectNode) toolNode).remove("functionMicroflow");
			}
		}
	}
	
	//This will create the input schema JSON needed for specifying the input of a tool
	private static void setInputSchemaForToolNode(String parameterName, ObjectNode toolNode) {
            // Create the root object node
            ObjectNode inputSchemaNode = MAPPER.createObjectNode();
            inputSchemaNode.put("type", "object");

            // Create the properties node
            ObjectNode propertiesNode = MAPPER.createObjectNode();
            ObjectNode fieldNode = MAPPER.createObjectNode();
            fieldNode.put("type", "string");
            propertiesNode.set(parameterName, fieldNode);
            inputSchemaNode.set("properties", propertiesNode);
            inputSchemaNode.putArray("required").add(parameterName);
            
            //Add a "json" wrapper around the inputSchema
            ObjectNode jsonNode = MAPPER.createObjectNode();
            jsonNode.set("json", inputSchemaNode);
            
            //Set the whole InputSchema as new node to toolNode
            toolNode.set("inputSchema",jsonNode);
	}
	
	
	//........After a Response was created
	
	//All Message of type Tool needs to be mapped to ToolResult ContentBlock (role: user)
	public static void setToolResult(ArrayNode messageList, int i,IContext context, Request request) throws JsonMappingException, JsonProcessingException, CoreException {
		JsonNode messageNode = messageList.get(i);
		if(isToolMessage(messageNode)) {
			//Add new User Message
			ObjectNode newUserMessage = MAPPER.createObjectNode();
			ArrayNode newContent = MAPPER.createArrayNode();
			RequestExtension requestExtension = getRequestExtension(context,request);
			
			//Get the assistant message right before the tool messages
			JsonNode assistantTextMessage = messageList.get(i-1);
			if(assistantTextMessage != null) {
				LOGGER.info("assistant:" + assistantTextMessage);
				setAssistantToolUse(assistantTextMessage,requestExtension);
				LOGGER.info("assistant afterwards: " + assistantTextMessage);
			}
			
			//Add Content of toolResult to Content for all subsequent tool messages
			for (int j = i; j < messageList.size(); j++) {
				JsonNode toolMessage = messageList.get(j);
				LOGGER.info(j + " " +toolMessage);
				if(!isToolMessage(toolMessage)) {
					//Only map the directly subsequent tools
					break;
				}
				//ObjectNode toolMessageObject = (ObjectNode) toolMessage;
				newContent.add(getToolResultBlock(toolMessage));
				messageList.remove(j);
				LOGGER.info("MessageList afterwards: " + messageList.size() + " "+ messageList);
				//decrease j because we removed the previous message
				j = j - 1;
				//toolMessageObject.put("role","assistant");
				
				//toolMessageObject.remove("toolCallId");
			}
			//Add content to newUserMessage and message to messageList
			newUserMessage.set("content", newContent);
			newUserMessage.put("role", ENUM_MessageRole.user.toString());
			messageList.add(newUserMessage);			
		}
		LOGGER.info("MessageList: "+ messageList);
	}
	
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
	
	//The "tool" role is only applicable for tool results that haven't been mapped yet to Converse nodes
	private static boolean isToolMessage(JsonNode messageNode) {
		LOGGER.info("message role: " +messageNode.path("role").asText() + " equals: " + messageNode.path("role").asText().equals(ENUM_MessageRole.tool.toString()));
		return !(messageNode.path("role").isNull()) && messageNode.path("role").asText().equals(ENUM_MessageRole.tool.toString());
	}
	
	//We need to add the exact Response from Converse as assistant message. This is stored in the requestExtension right after a call.
	private static void setAssistantToolUse(JsonNode messageNode,RequestExtension requestExtension) throws JsonMappingException, JsonProcessingException {
		ObjectNode toolUseMessageRoot = (ObjectNode) MAPPER.readTree(requestExtension.getToolUseContent());
		JsonNode contentNode = toolUseMessageRoot.path("output").path("message").path("content");
		
		((ObjectNode) messageNode).set("content", contentNode);
	}
	
	//Map Assistant Message
	private static void mapAssistantMessage(JsonNode assistantMessage) {
		
		
	}
	
	private static RequestExtension getRequestExtension(IContext context, Request request) throws CoreException {
		/*JsonNode contentArray = rootNode.path("output").path("message").path("content");
		if (contentArray.isArray()) {
			
		}*/
		List<IMendixObject> requestExtensionList = Core.retrieveByPath(context, request.getMendixObject(), 
				RequestExtension.MemberNames.RequestExtension_Request.toString());
		if (requestExtensionList.size() > 0) {
			return RequestExtension.initialize(context, requestExtensionList.get(requestExtensionList.size() - 1));
		}
		else return null;
		
	}
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}