package synthiaconnector.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import synthiaconnector.genaicommons_impl.FunctionMappingImpl;
import genaicommons.proxies.ENUM_MessageRole;

public class ConverseFunctionCalling{
	
	private static final MxLogger LOGGER = new MxLogger(ConverseFunctionCalling.class);
	private static final ObjectMapper MAPPER = new ObjectMapper();
	
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
	
	//Message of type Tool need to be mapped to ToolResult ContentBlock
	public static void setToolResult(JsonNode messageNode, ArrayNode messageList, int i) {
		if(isToolMessage(messageNode)) {
			//Add new User Message
			ObjectNode newUserMessage = MAPPER.createObjectNode();
			ArrayNode newContent = MAPPER.createArrayNode();
			//Add Content of toolResult to Content for all tool messages
			for (int j = i; j < messageList.size(); j++) {
				JsonNode toolMessage = messageList.get(j);
				if(isToolMessage(toolMessage)) {
					ObjectNode toolMessageObject = (ObjectNode) toolMessage;
					newContent.add(getToolResultBlock(toolMessage));
					toolMessageObject.put("role","assistant");
					toolMessageObject.remove("toolCallId");
					LOGGER.info(messageList.size());
					//messageList.remove(j);
				}
			}
			//Add content to newUserMessage and message to messageList
			//TBD: Content needs to be array, messageRole needs to be added
			newUserMessage.set("content", newContent);
			newUserMessage.put("role", ENUM_MessageRole.user.toString());
			messageList.add(newUserMessage);			
		}
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
		return !messageNode.path("role").isNull() && messageNode.path("role").asText().equals(ENUM_MessageRole.tool.toString());
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}