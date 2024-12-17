package conversationalui.impl;

import java.util.LinkedList;
import java.util.List;

import com.mendix.systemwideinterfaces.core.IContext;

import conversationalui.proxies.ChatContext;
import conversationalui.proxies.ENUM_ChatContextStatus;
import conversationalui.proxies.ProviderConfig;

public class ChatContextImpl{
	
	public static ChatContext createAndSetChatContext(IContext context, ProviderConfig providerConfig) {
		// Create ChatContext and set attributes and associations
		ChatContext chatContext = new ChatContext(context);
		chatContext.setStatus(ENUM_ChatContextStatus.Ready);
		chatContext.setChatContext_ProviderConfig_Active(providerConfig);

		//Add to ProviderConfigList
		List<ProviderConfig> providerConfigList = new LinkedList<>();
		providerConfigList.add(providerConfig);
		chatContext.setChatContext_ProviderConfig(providerConfigList);
		return chatContext;
	}
	
}