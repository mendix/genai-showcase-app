package myfirstmodule.handlers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.AsyncContext;
import com.mendix.core.Core;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import genaicommons.impl.MxLogger;

/**
 * Handles asynchronous streaming responses from OpenAI API
 * Processes chunks and delegates callbacks to Mendix microflows
 */
public class OpenAIStreamHandler extends RequestHandler {

    private static final MxLogger LOGGER = new MxLogger(OpenAIStreamHandler.class);
    
    @Override
    protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String s) throws Exception {
        try {
            LOGGER.info("OpenAIStreamHandler: Request handler started");
            
            // Parse JSON request body
            String jsonInput = new String(req.getInputStream().readAllBytes());
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                JsonNode jsonRequest = objectMapper.readTree(jsonInput);
                LOGGER.info("jsonRequest: "+ jsonRequest.toString());
                // Extract fields from JSON
                String requestJSON = jsonRequest.get("request").asText();
                String deployedModelUUID = jsonRequest.get("deployedModelUUID").asText();               


                LOGGER.debug("OpenAIStreamHandler: Received request with DeployedModel: " + deployedModelUUID);

                // Create system context
                IContext ctx = Core.createSystemContext();
                
                // Retrieve deployed model from database using UUID
                List<IMendixObject> results = Core.createXPathQuery("//OpenAIConnector.OpenAIDeployedModel[Model=$value]")
                        .setVariable("value", deployedModelUUID)
                        .execute(ctx);
                
                if (results.isEmpty()) {
                    LOGGER.error("OpenAIStreamHandler: Deployed model not found for UUID: " + deployedModelUUID);
                    resp.getHttpServletResponse().setStatus(404);
                    resp.getOutputStream().write("Deployed model not found".getBytes());
                    return;
                }
                
                openaiconnector.proxies.OpenAIDeployedModel mxDeployedModel = openaiconnector.proxies.OpenAIDeployedModel.initialize(ctx, results.get(0));
                LOGGER.info("OpenAIStreamHandler: Successfully retrieved deployed model: " + mxDeployedModel.getModel());
                
                // Construct GenAICommons.Request object from JSON
                genaicommons.proxies.Request mxRequest = myfirstmodule.proxies.microflows.Microflows.request_GetFromJson(ctx, requestJSON);
                LOGGER.debug("OpenAIStreamHandler: Successfully parsed request from JSON");
                
                // Set up async context with timeout
                AsyncContext asyncCtx = req.getHttpServletRequest().startAsync();
                asyncCtx.setTimeout(15 * 60 * 1000); // 15 minutes

                // Configure response for Server-Sent Events
                resp.setContentType("text/event-stream");
                resp.getHttpServletResponse().setStatus(200);

                // Generate unique request ID for streaming
                String requestId = UUID.randomUUID().toString();
                ResponseConnectionController.getInstance().addStreamingResponseWriter(requestId,
                        new ResponseConnectionController.StreamingResponseWriter(resp.getOutputStream()));

                LOGGER.debug("OpenAIStreamHandler: Streaming connection established with RequestID: " + requestId);

                // Prepare parameters for microflow execution
                Map<String, Object> params = new HashMap<String, Object>();
                params.put("Request", mxRequest);
                params.put("OpenAIDeployedModel", mxDeployedModel);
                params.put("RequestID", requestId);
                
                // Execute OpenAI streaming microflow asynchronously
                LOGGER.info("OpenAIStreamHandler: Starting async execution of OpenAI_ChatCompletions_Stream microflow");
                Core.executeAsync(ctx, "MyFirstModule.OpenAI_ChatCompletions_Stream", true, params);

                // Keep connection alive
                Thread.sleep(15 * 60 * 1000);
                } catch(Exception e){
                    LOGGER.error("Failed to parse JSON input: " + e.getMessage());
            }

            
            
        } catch (Exception e) {
            LOGGER.error("OpenAIStreamHandler: Error processing streaming request: " + e.getMessage(), e);
            try {
                resp.getHttpServletResponse().setStatus(500);
                resp.getOutputStream().write(("Error: " + e.getMessage()).getBytes());
            } catch (Exception writeError) {
                LOGGER.error("OpenAIStreamHandler: Failed to write error response: " + writeError.getMessage(), writeError);
            }
            throw e;
        }
    }
}