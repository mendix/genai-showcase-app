package genaicommons.impl;

import java.util.Map;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IDataType;

import genaicommons.proxies.DeployedModel;
import genaicommons.proxies.Request;
import genaicommons.proxies.Response;

public class DeployedModelImpl {
	
	public static void validateChatCompletionsMicroflow(String chatCompletionsMicroflow) {
		if (chatCompletionsMicroflow == null || chatCompletionsMicroflow.isBlank()) {
			throw new IllegalArgumentException("ChatCompletionsMicroflow is required.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(chatCompletionsMicroflow);
		if (inputParameters == null || inputParameters.entrySet().isEmpty() || inputParameters.size() != 2) {
			throw new IllegalArgumentException("ChatCompletionsMicroflow " + chatCompletionsMicroflow + " should only have one input parameter of type " + Request.getType() + " and one input parameter of type " + DeployedModel.getType() + ".");
		}
		
		boolean requestFound = false;
		boolean deployedModelFound = false;

		// Iterate through the values in the inputParameters map
		for (IDataType value : inputParameters.values()) {
		    if (Core.getMetaObject(value.getObjectType()).isSubClassOf(Request.getType())) {
		    	requestFound = true;
		    } else if (Core.getMetaObject(value.getObjectType()).isSubClassOf(DeployedModel.getType())) {
		    	deployedModelFound = true;
		    }
		}
		
		if(!requestFound || !deployedModelFound) {
			throw new IllegalArgumentException("ChatCompletionsMicroflow " + chatCompletionsMicroflow + " should only have one input parameter of type " + Request.getType() + " and one input parameter of type " + DeployedModel.getType() + ".");
		}
		
		if(Core.getReturnType(chatCompletionsMicroflow) == null || !Core.getMetaObject(Core.getReturnType(chatCompletionsMicroflow).getObjectType()).isSubClassOf(Response.getType())) {
			throw new IllegalArgumentException("ChatCompletionsMicroflow " + chatCompletionsMicroflow + " should have a return value of type " + Response.getType() + ".");		
		}
	}
	
}