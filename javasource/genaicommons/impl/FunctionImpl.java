package genaicommons.impl;

import static java.util.Objects.requireNonNull;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;

import genaicommons.proxies.Function;
import genaicommons.proxies.Request;
import genaicommons.proxies.Tool;
import genaicommons.proxies.ToolCollection;

public class FunctionImpl {
	
	public static void validateFunctionInput(String functionMicroflow, String toolName) throws Exception {
		requireNonNull(functionMicroflow, "Function Microflow is required.");
		requireNonNull(toolName, "Tool Name is required.");
		validateFunctionMicroflow(functionMicroflow);
	}
	
	public static Function createFunction(IContext context, String functionMicroflow, String functionName, String functionDescription, ToolCollection toolCollection) throws CoreException {
		Function function = new Function(context);
		function.setMicroflow(functionMicroflow);
		function.setName(functionName);	
		function.setDescription(functionDescription); //Optional parameter
		List<Tool> ToolList = toolCollection.getToolCollection_Tool();
		ToolList.add(function);
		toolCollection.setToolCollection_Tool(ToolList); 
		return function;
	}
	

	public static void validateFunctionMicroflow(String functionMicroflow) throws Exception {
		Set<String> microflowNames = Core.getMicroflowNames();
		if(!microflowNames.contains(functionMicroflow)) {
			throw new IllegalArgumentException("Function Microflow with name " + functionMicroflow + " does not exist.");
		}
		
		Map<String, IDataType> inputParametersForModel = FunctionMappingImpl.getInputParameterForModel(functionMicroflow);
		if (inputParametersForModel != null && inputParametersForModel.size() > 1) {
			throw new IllegalArgumentException("Function Microflow " + functionMicroflow + " can only have an input parameter of type String and/or a Request and/or Tool object.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(functionMicroflow);
		for(IDataType value : inputParameters.values()) {
			validateFunctionInputParameter(value, functionMicroflow);
		}
		

		if(Core.getReturnType(functionMicroflow) == null || IDataType.DataTypeEnum.String.equals(Core.getReturnType(functionMicroflow).getType()) == false) {
			throw new IllegalArgumentException("Function Microflow " + functionMicroflow + " should have a String return value.");		
		}
	}
	
	private static void validateFunctionInputParameter(IDataType value, String functionMicroflow){
		if (IDataType.DataTypeEnum.String.equals(value.getType())){
			return;
		}
		
		String objectType = value.getObjectType();
		if (objectType == null ||
				(!Core.getMetaObject(objectType).isSubClassOf(Request.getType()) &&
				!Core.getMetaObject(objectType).isSubClassOf(Tool.getType()))) {
		    		throw new IllegalArgumentException("Function Microflow " + functionMicroflow + " can only have an input parameter of type String and/or a Request and/or Tool object.");				
		}
	}
}

	
