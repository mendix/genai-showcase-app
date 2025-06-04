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
	// Used in Function_ExecuteMicroflow
	public static String getFirstInputParamName(String functionMicroflow) {
		Map<String, IDataType> inputParameters = getInputParameterForModel(functionMicroflow);
		if(inputParameters != null && !inputParameters.entrySet().isEmpty()) {
			return inputParameters.entrySet().iterator().next().getKey();
		} else {
			return null;
		}
	}
	
	public static Map<String, IDataType> getInputParameterForModel(String functionMicroflow) {
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
	
	public static List<Message> getToolCallMessages(Request request, IContext context) {
		return Core.retrieveByPath(context, request.getMendixObject(), 
				genaicommons.proxies.Request.MemberNames.Request_Message.toString()).stream()
				.map(msg -> genaicommons.proxies.Message.initialize(context, msg))
				.filter(msg -> msg.getToolCallId() != null && !msg.getToolCallId().isEmpty())
				.collect(Collectors.toList());
	}
}