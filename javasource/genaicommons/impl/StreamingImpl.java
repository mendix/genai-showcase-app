package genaicommons.impl;

import java.io.IOException;
import java.io.OutputStream;

import com.mendix.m2ee.api.IMxRuntimeResponse;
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
	
	public static void pushChunkToUI(IContext ctx, String streamingResponseWriterId, String chunkText) {
		
		if (streamingResponseWriterId != null) {
			genaicommons.proxies.microflows.Microflows.streamCallback(ctx, chunkText, streamingResponseWriterId, false);
		}
	}
	
	public static void clearContentInUI(IContext ctx, String streamingResponseWriterId) throws IOException {

		if (streamingResponseWriterId != null) {
			genaicommons.impl.ResponseConnectionController.getInstance().getStreamingResponseWriter(streamingResponseWriterId).clearContent();
		}
		
	}
	
	public static void throwError(IContext ctx, OutputStream outputStream) throws IOException {
		
		if (outputStream != null) {
			outputStream.write(("throwError: true" ).getBytes());
	    	outputStream.write("\n\n".getBytes());
	        outputStream.flush();
		}
	}
	
	public static void throwError(String streamingResponseWriterId) throws IOException {
		
		if (streamingResponseWriterId != null) {
			genaicommons.impl.ResponseConnectionController.getInstance().getStreamingResponseWriter(streamingResponseWriterId).throwError();
		}
		
	}
	

}
