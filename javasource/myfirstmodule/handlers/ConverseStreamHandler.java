package myfirstmodule.handlers;


import awsauthentication.proxies.Credentials;
import awsauthentication.proxies.ENUM_Region;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.ENUM_MessageType;
import genaicommons.proxies.FileContent;
import genaicommons.proxies.Message;
import myfirstmodule.actions.ConverseStream;

import com.mendix.core.Core;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import amazonbedrockconnector.impl.MxLogger;

import javax.servlet.AsyncContext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ConverseStreamHandler extends RequestHandler  {



    @Override
    protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String s) throws Exception {
    	
    	//final amazonbedrockconnector.impl.MxLogger LOGGER = new MxLogger(ConverseStreamHandler.class);
    	
    	 // Parse JSON request body
        String jsonInput = new String(req.getInputStream().readAllBytes());
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonRequest = objectMapper.readTree(jsonInput);
        
        // Extract user message from JSON
        String jsonRequestBody = jsonRequest.get("request").asText();
        String deployedModel = jsonRequest.get("deployedModel").asText();

        IContext ctx = Core.createSystemContext();
        Credentials creds = awsauthentication.proxies.microflows.Microflows.getCredentials(ctx, true, ENUM_Region.eu_central_1);

        List<IMendixObject> results = Core.createXPathQuery("//AmazonBedrockConnector.BedrockDeployedModel[Model=$value]")
                .setVariable("value", deployedModel)
                .execute(ctx);
        
        amazonbedrockconnector.proxies.BedrockDeployedModel mxDeployedModel = amazonbedrockconnector.proxies.BedrockDeployedModel.initialize(ctx, results.get(0));
        
        genaicommons.proxies.Request mxRequest = myfirstmodule.proxies.microflows.Microflows.request_GetFromJson(ctx, jsonRequestBody);
        
        AsyncContext asyncCtx = req.getHttpServletRequest().startAsync();
        asyncCtx.setTimeout(15 * 60 * 1000);

        resp.setContentType("text/event-stream");
        resp.getHttpServletResponse().setStatus(200);

        String requestId = UUID.randomUUID().toString();
        ResponseConnectionController.getInstance().addStreamingResponseWriter(requestId,
                new ResponseConnectionController.StreamingResponseWriter(resp.getOutputStream()));

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("Credentials", creds);
        params.put("Request", mxRequest);
        params.put("Region", ENUM_Region.eu_central_1.name());
        params.put("BedrockDeployedModel", mxDeployedModel);
        params.put("RequestID", requestId);
        Core.executeAsync(ctx, "MyFirstModule.ConverseStream", true, params);

        Thread.sleep(15 * 60 * 1000);

    }
}
