package genaicommons.impl;

import com.mendix.systemwideinterfaces.core.IContext;

import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.ENUM_MessageType;

public class StreamingImpl {
	
	public static void createResponseMessage(IContext ctx,genaicommons.proxies.Response mxResponse) {
		
		genaicommons.proxies.Message mxMessage = new genaicommons.proxies.Message(ctx);
		mxMessage.setRole(ENUM_MessageRole.assistant);
		mxMessage.setMessageType(ENUM_MessageType.Text);
		mxResponse.setResponse_Message(mxMessage);
	}

}
