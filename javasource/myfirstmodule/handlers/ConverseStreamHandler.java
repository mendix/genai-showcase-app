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

import amazonbedrockconnector.impl.MxLogger;

import javax.servlet.AsyncContext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class ConverseStreamHandler extends RequestHandler  {



    @Override
    protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String s) throws Exception {
    	
    	final amazonbedrockconnector.impl.MxLogger LOGGER = new MxLogger(ConverseStreamHandler.class);
    	
        String userInput = new String(req.getInputStream().readAllBytes());

        IContext ctx = Core.createSystemContext();
        Credentials creds = awsauthentication.proxies.microflows.Microflows.getCredentials(ctx, true, ENUM_Region.eu_central_1);
        LOGGER.info("StreamHandler 1");
        
        genaicommons.proxies.Request mxRequest = new genaicommons.proxies.Request(ctx);
        amazonbedrockconnector.proxies.ChatCompletionsRequest_Extension mxChatCompletionsRequest_Extension =new amazonbedrockconnector.proxies.ChatCompletionsRequest_Extension(ctx);
        mxChatCompletionsRequest_Extension.setChatCompletionsRequest_Extension_Request(mxRequest);
        genaicommons.proxies.Message mxMessage = new genaicommons.proxies.Message(ctx);
        mxMessage.setContent(userInput);
        mxMessage.setRole(ENUM_MessageRole.user);
        mxMessage.setMessageType(ENUM_MessageType.Text);
        List<genaicommons.proxies.Message> mxMessageList = new ArrayList<genaicommons.proxies.Message>();
        mxMessageList.add(mxMessage);
        mxRequest.setRequest_Message(mxMessageList);
        amazonbedrockconnector.proxies.BedrockDeployedModel mxDeployedModel = new amazonbedrockconnector.proxies.BedrockDeployedModel(ctx);
        mxDeployedModel.setModel("eu.anthropic.claude-sonnet-4-20250514-v1:0");
        
        LOGGER.info("Content " + mxMessage.getContent());
        LOGGER.info("Role " + mxMessage.getRole().name());
        
        for (genaicommons.proxies.Message msg : mxRequest.getRequest_Message()) {
        	LOGGER.info("Content " + msg.getContent());
            LOGGER.info("Role " + msg.getRole().name());
        }
        
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
//      Core.executeAsync(Core.createSystemContext(), "MyFirstModule.ConverseStream", true, params);
//        amazonbedrockconnector.proxies.microflows.Microflows.invokeModelWithResponseStream(ctx, awsRequest, creds, ENUM_Region.eu_central_1,
//            "MyFirstModule.StreamCallback", requestId);


        Thread.sleep(15 * 60 * 1000);

    }
}
