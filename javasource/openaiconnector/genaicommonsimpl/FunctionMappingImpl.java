package openaiconnector.genaicommonsimpl;

import java.util.HashMap;
import java.util.Map;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IDataType;

public class FunctionMappingImpl {
	// Used in RequestMapping_ManipulateJson
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
			//Ignore Object Input Parameters
			if (objectType == null) {
				inputParametersModified.put(entry.getKey(), entry.getValue());
			}
		}
		return inputParametersModified;
	}
	
}