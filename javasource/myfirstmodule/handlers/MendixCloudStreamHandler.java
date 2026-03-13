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
public class MendixCloudStreamHandler extends RequestHandler {

    private static final MxLogger LOGGER = new MxLogger(MendixCloudStreamHandler.class);
    
    @Override
    protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String s) throws Exception {
        try {
            LOGGER.info("MendixCloudStreamHandler: Request handler started");
            // Parse JSON request body
            String jsonInput = new String(req.getInputStream().readAllBytes());
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                JsonNode jsonRequest = objectMapper.readTree(jsonInput);
                LOGGER.info("jsonRequest: "+ jsonRequest.toString());
                // Extract fields from JSON
                String requestJSON = jsonRequest.get("request").asText();
                String deployedModel = jsonRequest.get("deployedModel").asText();               


                LOGGER.debug("MendixCloudStreamHandler: Received request with DeployedModel: " + deployedModel);

                // Create system context
                IContext ctx = Core.createSystemContext();
                
                // Retrieve deployed model from database using UUID
                List<IMendixObject> results = Core.createXPathQuery("//MxGenAIConnector.MxCloudDeployedModel[Model=$value]")
                        .setVariable("value", deployedModel)
                        .execute(ctx);
                
                if (results.isEmpty()) {
                    LOGGER.error("MendixCloudStreamHandler: Deployed model not found for: " + deployedModel);
                    resp.getHttpServletResponse().setStatus(404);
                    resp.getOutputStream().write("Deployed model not found".getBytes());
                    return;
                }
                
                mxgenaiconnector.proxies.MxCloudDeployedModel mxDeployedModel = mxgenaiconnector.proxies.MxCloudDeployedModel.initialize(ctx, results.get(0));
                LOGGER.info("MendixCloudStreamHandler: Successfully retrieved deployed model: " + mxDeployedModel.getModel());
                
                // Construct GenAICommons.Request object from JSON
                genaicommons.proxies.Request mxRequest = myfirstmodule.proxies.microflows.Microflows.request_GetFromJson(ctx, requestJSON);
                LOGGER.debug("MendixCloudStreamHandler: Successfully parsed request from JSON");
                
                // Set up async context with timeout -> not async anymore
                //AsyncContext asyncCtx = req.getHttpServletRequest().startAsync();
                //asyncCtx.setTimeout(15 * 60 * 1000); // 15 minutes

                // Configure response for Server-Sent Events
                resp.setContentType("text/event-stream");
                resp.getHttpServletResponse().setStatus(200);

                // Generate unique request ID for streaming
                String requestId = UUID.randomUUID().toString();
                ResponseConnectionController.getInstance().addStreamingResponseWriter(requestId,
                        new ResponseConnectionController.StreamingResponseWriter(resp.getOutputStream()));

                LOGGER.debug("MendixCloudStreamHandler: Streaming connection established with RequestID: " + requestId);

                // Prepare parameters for microflow execution
                //Map<String, Object> params = new HashMap<String, Object>();
                //params.put("Request", mxRequest);
                //params.put("MxCloudDeployedModel", mxDeployedModel);
                //params.put("RequestID", requestId);
                
                // Execute OpenAI streaming microflow asynchronously
                LOGGER.info("MendixCloudStreamHandler: Starting async execution of MendixCloud_ChatCompletions_Stream microflow");
                
                // keep track of async call so that the connection can be closed after it is completed. FEEDBACK!
                // "MyFirstModule.MendixCloud_ChatCompletions_Stream"
                //var futureObject = Core.executeAsync(ctx, mxDeployedModel.getMicroflow(), true, params);
                //Call with execute and not async
                //Core.microflowCall(ctx, mxDeployedModel.getMicroflow(), true, params);
                Core.microflowCall("MyFirstModule.MendixCloud_ChatCompletions_Stream")
                .withParam("Request", mxRequest)
                .withParam("MxCloudDeployedModel", mxDeployedModel)
                .withParam("RequestID", requestId)
                .execute(ctx);
               
                } catch(Exception e){
                    LOGGER.error("Failed to parse JSON input: " + e.getMessage());
            }

            
            
        } catch (Exception e) {
            LOGGER.error("MendixCloudStreamHandler: Error processing streaming request: " + e.getMessage(), e);
            try {
                resp.getHttpServletResponse().setStatus(500);
                resp.getOutputStream().write(("Error: " + e.getMessage()).getBytes());
            } catch (Exception writeError) {
                LOGGER.error("MendixCloudStreamHandler: Failed to write error response: " + writeError.getMessage(), writeError);
            }
            throw e;
        }
    }
}