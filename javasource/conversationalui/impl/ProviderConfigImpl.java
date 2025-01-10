package conversationalui.impl;

import static java.util.Objects.requireNonNull;

import java.util.Map;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import conversationalui.proxies.ChatContext;
import conversationalui.proxies.ProviderConfig;
import genaicommons.proxies.DeployedModel;

public class ProviderConfigImpl{
	
	public static void validateActionMicroflow(String ActionMicroflow) {
		if (ActionMicroflow == null || ActionMicroflow.isBlank()) {
			throw new IllegalArgumentException("ActionMicroflow is required.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(ActionMicroflow);
		if (inputParameters == null || inputParameters.size() != 1) {
			throw new IllegalArgumentException("ActionMicroflow " + ActionMicroflow + " should only have one input parameter of type " + ChatContext.getType() + ".");
		}
		
		if(Core.getMetaObject(inputParameters.entrySet().iterator().next().getValue().getObjectType()).isSubClassOf(ChatContext.getType()) == false) {
			throw new IllegalArgumentException("ActionMicroflow " + ActionMicroflow + " should have an input parameter of type " + ChatContext.getType()+ " or a specialization thereof.");			
		}

		if(Core.getReturnType(ActionMicroflow) == null || IDataType.DataTypeEnum.Boolean.equals(Core.getReturnType(ActionMicroflow).getType()) == false) {
			throw new IllegalArgumentException("ActionMicroflow " + ActionMicroflow + " should have a Boolean return value.");		
		}
	}
	
	public static void validateSpecialization(IMendixObject ProviderConfigSpecialization) throws Exception {
		requireNonNull(ProviderConfigSpecialization, "ProviderConfig Specialization is required.");
		if (!ProviderConfigSpecialization.isInstanceOf(ProviderConfig.entityName)){
			throw new IllegalArgumentException(ProviderConfig.entityName + " or a specialization of such is required.");
		}		
	}
	
	public static ProviderConfig createAndSetProviderConfigSpecialization(IContext context, String providerConfigSpecialization, String actionMicroflow, String providerName, DeployedModel deployedModel, String systemPrompt) throws Exception {
		ProviderConfig providerConfig = createProviderConfig(context, providerConfigSpecialization);
		providerConfig.setActionMicroflow(actionMicroflow);
		providerConfig.setProviderConfig_DeployedModel(deployedModel);
		if (providerName != null && !providerName.isBlank()) {
			providerConfig.setDisplayName(providerName);
		}
		if (systemPrompt != null && !systemPrompt.isBlank()) {
			providerConfig.setSystemPrompt(systemPrompt);
		}
		return providerConfig;
	}

	private static ProviderConfig createProviderConfig(IContext context, String providerConfigSpecializationString)
			throws Exception {
		if (providerConfigSpecializationString == null || providerConfigSpecializationString.isBlank()) {
			ProviderConfig providerConfig = new ProviderConfig(context);
			return providerConfig;
		}	
		
		// Create an instance of the specialized ProviderConfig object
		IMendixObject providerConfigSpecialization = Core.instantiate(context, providerConfigSpecializationString);
		ProviderConfigImpl.validateSpecialization(providerConfigSpecialization);

		// Use the specialized proxy class to wrap the generic IMendixObject to set attributes
		ProviderConfig providerConfig = ProviderConfig.initialize(context, providerConfigSpecialization);
		return providerConfig;
	}
}