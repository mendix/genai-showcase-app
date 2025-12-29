package myfirstmodule.handlers;

import amazonbedrockconnector.proxies.InvokeModelRequest;
import amazonbedrockconnector.proxies.InvokeModelResponse;
import awsauthentication.proxies.Credentials;
import awsauthentication.proxies.ENUM_Region;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mendix.core.Core;
import com.mendix.externalinterface.connector.RequestHandler;
import com.mendix.m2ee.api.IMxRuntimeRequest;
import com.mendix.m2ee.api.IMxRuntimeResponse;
import com.mendix.systemwideinterfaces.core.IContext;

import javax.servlet.AsyncContext;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class StreamingInvokeModelHandler extends RequestHandler  {



    @Override
    protected void processRequest(IMxRuntimeRequest req, IMxRuntimeResponse resp, String s) throws Exception {
        String requestBody = new String(req.getInputStream().readAllBytes());

        IContext ctx = Core.createSystemContext();
        Credentials creds = awsauthentication.proxies.microflows.Microflows.getCredentials(ctx, true, ENUM_Region.eu_central_1);

        InvokeModelRequest awsRequest = new InvokeModelRequest(ctx);
        awsRequest.setModelID("eu.anthropic.claude-sonnet-4-20250514-v1:0");
        awsRequest.setRequestBody("""
                {
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": 512,
                    "temperature": 0.5,
                    "messages": [{
                        "role": "user",
                        "content": "<<requestBody>>"
                    }],
                  "tools": [
                    {
                      "name": "sum",
                      "description": "sum up to numbers a and b, returns a number",
                      "input_schema": {
                        "type": "object",
                        "properties": {
                          "a": {
                            "type": "number",
                            "description": "first input number for sum"
                          },
                          "b": {
                            "type": "number",
                            "description": "second input number for sum"
                          }
                        },
                        "required": [
                          "a",
                          "b"
                        ]
                      }
                    }
                  ]
                }""".replace("<<requestBody>>", requestBody));


        AsyncContext asyncCtx = req.getHttpServletRequest().startAsync();
        asyncCtx.setTimeout(15 * 60 * 1000);

        resp.setContentType("text/event-stream");
        resp.getHttpServletResponse().setStatus(200);

        String requestId = UUID.randomUUID().toString();
        ResponseConnectionController.getInstance().addStreamingResponseWriter(requestId,
                new ResponseConnectionController.StreamingResponseWriter(resp.getOutputStream()));

        Map<String, Object> params = new HashMap<String, Object>();
        params.put("InvokeModelRequest", awsRequest);
        params.put("Credentials", creds);
        params.put("AWS_Region", ENUM_Region.eu_central_1.name());
        params.put("CallbackMicroflow", "MyFirstModule.StreamCallback");
        params.put("RequestId", requestId);
        Core.executeAsync(Core.createSystemContext(), "MyFirstModule.InvokeModelWithResponseStream", true, params);
//        amazonbedrockconnector.proxies.microflows.Microflows.invokeModelWithResponseStream(ctx, awsRequest, creds, ENUM_Region.eu_central_1,
//            "MyFirstModule.StreamCallback", requestId);


        Thread.sleep(15 * 60 * 1000);

    }
}
