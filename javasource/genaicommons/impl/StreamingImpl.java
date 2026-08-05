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
	
	public static void updateResponseText(genaicommons.proxies.Response mxResponse, String chunkText) {
		
		String currentText = mxResponse.getResponseText();
		if (currentText == null) {
			mxResponse.setResponseText(chunkText);
		}
		else {
			mxResponse.setResponseText(currentText + chunkText);
		}
	}
	
	public static void pushChunkToUI(IContext ctx, String streamingResponseWriterId, String chunkText) throws IOException {

		if (streamingResponseWriterId != null) {
			genaicommons.impl.ResponseConnectionController.StreamingResponseWriter writer =
				genaicommons.impl.ResponseConnectionController.getInstance().getStreamingResponseWriter(streamingResponseWriterId);
			if (writer == null) {
				throw new IOException("No StreamingResponseWriter found for id: " + streamingResponseWriterId +
					". This typically means the writer was not registered or has already been removed.");
			}
			writer.write(chunkText.getBytes());
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
