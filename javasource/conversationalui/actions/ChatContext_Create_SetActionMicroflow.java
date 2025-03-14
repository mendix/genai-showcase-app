// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package conversationalui.actions;

import static java.util.Objects.requireNonNull;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import conversationalui.impl.ChatContextImpl;
import conversationalui.impl.MxLogger;
import conversationalui.impl.ProviderConfigImpl;
import conversationalui.proxies.ProviderConfig;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * Creates a new chat context with a provider config that is associated to the passed deployed model. Additionally, the system prompt and the action microflow of the new provider config are set.
 */
public class ChatContext_Create_SetActionMicroflow extends CustomJavaAction<IMendixObject>
{
	private IMendixObject __DeployedModel;
	private genaicommons.proxies.DeployedModel DeployedModel;
	private java.lang.String ActionMicroflow;
	private java.lang.String SystemPrompt;
	private java.lang.String ProviderName;

	public ChatContext_Create_SetActionMicroflow(IContext context, IMendixObject DeployedModel, java.lang.String ActionMicroflow, java.lang.String SystemPrompt, java.lang.String ProviderName)
	{
		super(context);
		this.__DeployedModel = DeployedModel;
		this.ActionMicroflow = ActionMicroflow;
		this.SystemPrompt = SystemPrompt;
		this.ProviderName = ProviderName;
	}

	@java.lang.Override
	public IMendixObject executeAction() throws Exception
	{
		this.DeployedModel = this.__DeployedModel == null ? null : genaicommons.proxies.DeployedModel.initialize(getContext(), __DeployedModel);

		// BEGIN USER CODE
		
		try {
		    requireNonNull(ActionMicroflow, "ActionMicroflow is required.");
		    requireNonNull(DeployedModel, "DeployedModel is required.");
		    
		    ProviderConfigImpl.validateActionMicroflow(ActionMicroflow);

		    ProviderConfig providerConfig = ProviderConfigImpl.createAndSetProviderConfigSpecialization(getContext(), null, ActionMicroflow, ProviderName, DeployedModel, SystemPrompt);

		    return ChatContextImpl.createAndSetChatContext(getContext(), providerConfig).getMendixObject();

		} catch (Exception e) {
		    LOGGER.error(e);
		    return null;
		}
		
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "ChatContext_Create_SetActionMicroflow";
	}

	// BEGIN EXTRA CODE
	
	private static final MxLogger LOGGER = new MxLogger(ChatContext_Create_SetActionMicroflow.class);
	
	// END EXTRA CODE
}
