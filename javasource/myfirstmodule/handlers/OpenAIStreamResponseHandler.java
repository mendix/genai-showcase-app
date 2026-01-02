package myfirstmodule.handlers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javax.servlet.AsyncContext;
import com.mendix.core.Core;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.systemwideinterfaces.core.IContext;
import genaicommons.impl.MxLogger;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.ENUM_MessageType;
import genaicommons.proxies.Message;
import genaicommons.proxies.Request;

/**
 * Handles asynchronous streaming responses from OpenAI API
 * Processes chunks and delegates callbacks to Mendix microflows
 */
public class OpenAIStreamResponseHandler extends RequestHandler {
	
	private static final ExecutorService EXECUTOR = Executors.newFixedThreadPool(10);
	private static final MxLogger LOGGER = new MxLogger(OpenAIStreamResponseHandler.class);
	
	private IContext context;
	private String requestId;
	private String callbackMicroflow;
	private StringBuilder contentBuffer;
	private volatile boolean isProcessing;
	
	// No-argument constructor for RequestHandler registration
	public OpenAIStreamResponseHandler() {
		this.contentBuffer = new StringBuilder();
		this.isProcessing = false;
	}
	
	// Constructor for direct instantiation with parameters
	public OpenAIStreamResponseHandler(
		IContext context,
		String requestId,
		String callbackMicroflow,
		MxLogger logger
	) {
		this();
		this.context = context;
		this.requestId = requestId;
		this.callbackMicroflow = callbackMicroflow;
	}
	
	@Override
	protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String path) throws Exception {
		LOGGER.info("OpenAI streaming request received");
		
		// Extract user input from request body
		String userInput = new String(req.getInputStream().readAllBytes());
		
		// Create system context for microflow execution
		IContext ctx = Core.createSystemContext();
		
		// Build the request message
		Request mxRequest = new Request(ctx);
		openaiconnector.proxies.OpenAIRequest_Extension openAIRequest = new openaiconnector.proxies.OpenAIRequest_Extension(ctx);
		openAIRequest.setOpenAIRequest_Extension_Request(mxRequest);
		
		Message mxMessage = new Message(ctx);
		mxMessage.setContent(userInput);
		mxMessage.setRole(ENUM_MessageRole.user);
		mxMessage.setMessageType(ENUM_MessageType.Text);
		
		List<Message> mxMessageList = new ArrayList<>();
		mxMessageList.add(mxMessage);
		mxRequest.setRequest_Message(mxMessageList);
		
		// Retrieve an OpenAIDeployedModel from the database with OutputModality 'Text'
		List<openaiconnector.proxies.OpenAIDeployedModel> deployedModels = 
			Core.retrieveXPathQuery(ctx, "//" + openaiconnector.proxies.OpenAIDeployedModel.entityName + "[OutputModality='Text']")
				.stream()
				.map(obj -> openaiconnector.proxies.OpenAIDeployedModel.initialize(ctx, obj))
				.collect(java.util.stream.Collectors.toList());
		
		if (deployedModels.isEmpty()) {
			LOGGER.error("No OpenAIDeployedModel with OutputModality 'Text' found in database");
			throw new Exception("No OpenAIDeployedModel with text output configured");
		}
		
		openaiconnector.proxies.OpenAIDeployedModel mxDeployedModel = deployedModels.get(0);
		LOGGER.info("Using OpenAI model: " + mxDeployedModel.getModel());
		
		// Enable streaming in the request
		mxRequest.setStream(true);
		
		LOGGER.info("User input: " + userInput);
		
		// Set up async context for streaming response
		AsyncContext asyncCtx = req.getHttpServletRequest().startAsync();
		asyncCtx.setTimeout(15 * 60 * 1000); // 15 minutes timeout
		
		resp.setContentType("text/event-stream");
		resp.getHttpServletResponse().setStatus(200);
		
		// Generate unique request ID for tracking
		String generatedRequestId = UUID.randomUUID().toString();
		
		// Call the OpenAI microflow asynchronously with streaming enabled
		// The microflow should handle writing to the response stream
		Map<String, Object> params = new HashMap<>();
		params.put("OpenAIRequest_Extension", openAIRequest);
		params.put("OpenAIDeployedModel", mxDeployedModel);
		params.put("RequestID", generatedRequestId);
		params.put("OutputStream", resp.getOutputStream()); // Pass the output stream
		
		Core.executeAsync(ctx, "OpenAIConnector.ChatCompletions_WithHistory_Execute", true, params);
		
		LOGGER.info("OpenAI streaming request initiated with ID: " + generatedRequestId);
	}
	
	/**
	 * Processes a content chunk from the stream
	 * Executes the callback microflow asynchronously
	 */
	public void onContentChunk(String chunk) {
		if (chunk == null || chunk.isBlank()) {
			return;
		}
		
		contentBuffer.append(chunk);
		
		// Execute callback asynchronously to avoid blocking the stream
		CompletableFuture.runAsync(() -> {
			try {
				Core.microflowCall(callbackMicroflow)
					.withParam("RequestId", requestId)
					.withParam("Content", chunk)
					.execute(context);
			} catch (Exception e) {
				LOGGER.error("Error executing callback microflow: " + e.getMessage(), e);
			}
		}, EXECUTOR);
	}
	
	/**
	 * Called when the stream completes successfully
	 */
	public void onStreamComplete() {
		try {
			LOGGER.info("Stream completed for request: " + requestId);
			Core.microflowCall(callbackMicroflow)
				.withParam("RequestId", requestId)
				.withParam("Content", "[STREAM_COMPLETE]")
				.execute(context);
		} catch (Exception e) {
			LOGGER.error("Error notifying stream completion: " + e.getMessage(), e);
		}
	}
	
	/**
	 * Called when an error occurs during streaming
	 */
	public void onStreamError(Throwable error) {
		try {
			LOGGER.error("Stream error for request " + requestId + ": " + error.getMessage(), error);
			Core.microflowCall(callbackMicroflow)
				.withParam("RequestId", requestId)
				.withParam("Content", "[STREAM_ERROR] " + error.getMessage())
				.execute(context);
		} catch (Exception e) {
			LOGGER.error("Error notifying stream error: " + e.getMessage(), e);
		}
	}
	
	/**
	 * Returns the accumulated content buffer
	 */
	public String getAccumulatedContent() {
		return contentBuffer.toString();
	}
	
	/**
	 * Resets the content buffer
	 */
	public void resetBuffer() {
		contentBuffer.setLength(0);
	}
	
	/**
	 * Checks if currently processing
	 */
	public boolean isProcessing() {
		return isProcessing;
	}
	
	/**
	 * Sets processing state
	 */
	protected void setProcessing(boolean processing) {
		this.isProcessing = processing;
	}
}