package synthiaconnector.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import synthiaconnector.genaicommons_impl.FunctionMappingImpl;

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

            // Add properties node to root
            inputSchemaNode.set("properties", propertiesNode);

            // Create the required array
            inputSchemaNode.putArray("required").add(parameterName);
            
            //Add a "json" wrapper around the inputSchema
            ObjectNode jsonNode = MAPPER.createObjectNode();
            jsonNode.set("json", inputSchemaNode);
            
            //Set the whole InputSchema as new node to toolNode
            toolNode.set("inputSchema",jsonNode);
	}
}