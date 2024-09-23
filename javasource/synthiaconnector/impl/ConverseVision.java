package synthiaconnector.impl;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Base64;

import org.apache.commons.io.IOUtils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import genaicommons.proxies.ENUM_ContentType;





public class ConverseVision{
	
	private static final MxLogger LOGGER = new MxLogger(ConverseVision.class);
	
	//Sets the Image Format for URI and Base64 images.
	public static void setImageFormat(ObjectNode imageNode, JsonNode fileContent) {
		String extension = fileContent.path("fileExtension").asText();
		//Get the file extension from the URL
		if (extension.isBlank() && fileContent.path("fileContent") != null) {
			String url = fileContent.path("fileContent").asText();
			int lastDotIndex = url.lastIndexOf('.');
	        if (lastDotIndex != -1) {
	            extension = url.substring(lastDotIndex + 1);
	        }
		}
		// Bedrock accepts "jpeg", not "jpg"
		if (extension.equals("jpg")) {
			extension = "jpeg";
		}
		if(extension.isBlank()) {
			LOGGER.warn("The attached FileContent or URI does not contain a file extension, so it can not be used for Chat Completions with Vision.");
		}
		imageNode.put("format",extension);
	}
	
	//Set bytes of SourceNode based on ContentType
	public static void setImageBytes(ObjectNode sourceNode, JsonNode fileContent) throws URISyntaxException, MalformedURLException, IOException{
		String bytes = "";
		if (fileContent.path("contentType") != null && fileContent.path("contentType").asText().equals(ENUM_ContentType.Base64.toString())) {
			bytes = fileContent.path("fileContent").asText();
		}
		else if (fileContent.path("contenttype") != null && fileContent.path("contentType").asText().equals(ENUM_ContentType.Url.toString())){
			bytes = getImageBytesFromURI(fileContent.path("fileContent").asText());
		}
		sourceNode.put("bytes", bytes);
	}
	
	//Convert URI to base64 bytes
	private static String getImageBytesFromURI(String uriInput) throws URISyntaxException, MalformedURLException, IOException {
		URL url = new URL(uriInput); 
		try (InputStream is = url.openStream ()) {
		  return Base64.getEncoder().encodeToString(IOUtils.toByteArray(is));
		}
	}
}