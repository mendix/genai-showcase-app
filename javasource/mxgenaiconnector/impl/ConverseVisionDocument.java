package mxgenaiconnector.impl;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Base64;

import org.apache.commons.io.IOUtils;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import genaicommons.proxies.ENUM_ContentType;
import genaicommons.proxies.ENUM_FileType;


public class ConverseVisionDocument{
	
	private static final MxLogger LOGGER = new MxLogger(ConverseVisionDocument.class);
	private static final ObjectMapper MAPPER = new ObjectMapper();
	
	//Loop over FileCollection and map to Converse format
	public static void mapFileCollection(JsonNode messagesNode, int iteratorMessage) throws Exception {
		JsonNode messageNode = messagesNode.get(iteratorMessage);
		JsonNode fileCollectionNode = messageNode.path("fileCollection");
		if(fileCollectionNode != null && fileCollectionNode.size() != 0) {
			for (int iteratorFile = 0; iteratorFile < fileCollectionNode.size(); iteratorFile++){
				JsonNode fileContent = fileCollectionNode.get(iteratorFile);
				
				if (fileContent.path("filetype").isNull()) {
					LOGGER.warn("FileContent was passed without a file type specified.");
					continue;
				}
				//Mapping of values that apply to both Image and Document chat
				ArrayNode contentArrayNode = ((ArrayNode) messageNode.path("content"));
				ObjectNode contentNode = MAPPER.createObjectNode();
				setFormat(contentNode,fileContent);
				ObjectNode sourceNode = MAPPER.createObjectNode();
				setSourceBytes(sourceNode, fileContent);
				contentNode.set("source", sourceNode);
				ObjectNode contentWrapper = MAPPER.createObjectNode();
				
				//Specific mapping for each and setting the wrapper node
				if (fileContent.path("fileType").asText().equals(ENUM_FileType.image.toString()))	{
					contentWrapper.set("image", contentNode);
				}
				else if(fileContent.path("fileType").asText().equals(ENUM_FileType.document.toString())){
					setDocumentName(fileContent, contentNode, iteratorMessage, iteratorFile);	
					contentWrapper.set("document", contentNode);
				}
				contentArrayNode.add(contentWrapper);
			}		
		}
		//FileCollection node is no longer needed after mapping
		if(fileCollectionNode != null) {
			((ObjectNode)messageNode).remove("fileCollection");
		}
	}
	
	//Only applicable for DocumentChat. Either use the TextContent attribute or a static value
	private static void setDocumentName(JsonNode fileContent, ObjectNode documentNode, int iteratorMessage, int iteratorFile) {
		String documentName;
		if(fileContent.path("textContent").asText().isBlank()) {
			documentName = String.format("%s-%s-%s", "Document_", iteratorMessage, "_", iteratorFile);
		}
		else {
			documentName = fileContent.path("textContent").asText();	
		}
		documentNode.put("name", documentName);
	}
	
	//Sets the Format for URI and Base64 images/documents.
	private static void setFormat(ObjectNode contentNode, JsonNode fileContent) {
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
			LOGGER.warn("The attached FileContent or URI does not contain a file extension, so it can not be used for Chat Completions.");
		}
		contentNode.put("format",extension);
	}
	
	//Set bytes of SourceNode based on ContentType
	private static void setSourceBytes(ObjectNode sourceNode, JsonNode fileContent) throws IOException{
		String bytes = "";
		if (fileContent.path("contentType") != null && fileContent.path("contentType").asText().equals(ENUM_ContentType.Base64.toString())) {
			bytes = fileContent.path("fileContent").asText();
		}
		else if (fileContent.path("contentType") != null && fileContent.path("contentType").asText().equals(ENUM_ContentType.Url.toString())){
			bytes = getImageBytesFromURI(fileContent.path("fileContent").asText());
		}
		sourceNode.put("bytes", bytes);
	}
	
	//Convert URI to base64 bytes
	private static String getImageBytesFromURI(String uriInput) throws IOException {
		URL url = new URL(uriInput); 
		try (InputStream is = url.openStream ()) {
		  return Base64.getEncoder().encodeToString(IOUtils.toByteArray(is));
		}
	}
	
}