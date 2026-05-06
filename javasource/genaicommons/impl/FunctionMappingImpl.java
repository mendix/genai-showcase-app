package genaicommons.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import genaicommons.proxies.Request;
import genaicommons.proxies.Message;

public class FunctionMappingImpl {

	/**
	 * gets input parameters for a function microflow without Mendix objects
	 * @param functionMicroflow
	 * @return Map<String, IDataType> inputParameters
	 */
	public static Map<String, IDataType> getInputParametersForModel(String functionMicroflow) {
		Map<String, IDataType> inputParameters = Core.getInputParameters(functionMicroflow);
		Map<String, IDataType> inputParametersModified = new HashMap<>();
		
		for(Map.Entry<String, IDataType> entry : inputParameters.entrySet()) {
			String objectType = entry.getValue().getObjectType();
			if (objectType == null) {
				inputParametersModified.put(entry.getKey(), entry.getValue());
			}
		}
		return inputParametersModified;
	}
	
	// Get all messages where ToolCallId is set. These messages indicate that a tool has been called
	public static List<Message> getToolCallMessages(Request request, IContext context) {
		return Core.retrieveByPath(context, request.getMendixObject(), 
				genaicommons.proxies.Request.MemberNames.Request_Message.toString()).stream()
				.map(msg -> genaicommons.proxies.Message.initialize(context, msg))
				.filter(msg -> msg.getToolCallId() != null && !msg.getToolCallId().isEmpty())
				.collect(Collectors.toList());
	}
}