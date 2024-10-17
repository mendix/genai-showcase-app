package amazonbedrockconnector.genaicommons_impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.mendix.systemwideinterfaces.core.IContext;

import amazonbedrockconnector.impl.MxLocation;

import amazonbedrockconnector.proxies.ENUM_AgentStatus;
import amazonbedrockconnector.proxies.ENUM_DataSourceType;
import genaicommons.proxies.ENUM_SourceType;
import genaicommons.proxies.Reference;
import software.amazon.awssdk.services.bedrockagent.model.AgentStatus;
import software.amazon.awssdk.services.bedrockagentruntime.model.Citation;
import software.amazon.awssdk.services.bedrockagentruntime.model.RetrievalResultLocation;
import amazonbedrockconnector.impl.MxLogger;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.MalformedURLException;



public class ReferenceImpl {

	private static final MxLogger LOGGER = new MxLogger(ReferenceImpl.class);
	
	// Create References and Citations from AWS Citations (Retrieve And Generate, Agents)
	public static List<Reference> getMxReferences(List<Citation> awsCitations, IContext ctx) {
		
		List<Reference> mxReferences = new ArrayList<>();
		
		awsCitations.forEach(awsCitation -> {
			genaicommons.proxies.Citation mxCitation = new genaicommons.proxies.Citation(ctx);
			setMxCitation(mxCitation, awsCitation);
			
			List<genaicommons.proxies.Citation> singleCitationList = Arrays.asList(mxCitation);
			if (awsCitation.hasRetrievedReferences()) {
				
				awsCitation.retrievedReferences().forEach(awsReference -> {
					Reference mxReference = new Reference(ctx);
					
					ENUM_DataSourceType mxDataSourceType = MxLocation.getMxDataSourceType(awsReference.location().type());
					String sourceUrl = getSourceUrl(mxDataSourceType, awsReference.location());
					ENUM_SourceType sourceType = getSourceType(mxDataSourceType);
					
					setMxReference(mxReference, awsReference.content().text(), sourceUrl, sourceType, awsReference.location());
					mxReference.setReference_Citation(singleCitationList);
					mxReferences.add(mxReference);
				});
			}
		});
		
		return mxReferences;
	}
	
	public static String getSourceUrl(ENUM_DataSourceType type, RetrievalResultLocation awsLocation) {
		switch (type) {
		case S3: {
			return awsLocation.s3Location().uri();
		}
		case WEB: {
			return awsLocation.webLocation().url();
		}
		// TODO: This needs to be extended with other location types when updating the SDK
		default:
			return null;
		}
	}
	
	public static ENUM_SourceType getSourceType(ENUM_DataSourceType type) {
		switch (type) {
		case S3: {
			return ENUM_SourceType.Url;
		}
		case WEB: {
			return ENUM_SourceType.Url;
		}
		// TODO: This needs to be extended with other location types when updating the SDK
		default:
			return null; // SourceType attribute will be empty for unknown types. In the future, a "Unknown / Unsupported" Enum value might be introduced in GenAI Commons
		}
	}
	
	public static void setMxReference(Reference mxReference, String content, String sourceUrl, ENUM_SourceType sourceType, RetrievalResultLocation awsLocation) {
		mxReference.setContent(content);
		mxReference.setSource(sourceUrl);
		mxReference.setSourceType(sourceType);
		mxReference.setTitle(getReferenceTitle(sourceUrl, awsLocation));
	}
	
	private static void setMxCitation(genaicommons.proxies.Citation mxCitation, Citation awsCitation) {
		mxCitation.setStartIndex(awsCitation.generatedResponsePart().textResponsePart().span().start());
		mxCitation.setEndIndex(awsCitation.generatedResponsePart().textResponsePart().span().end());
		mxCitation.setText(awsCitation.generatedResponsePart().textResponsePart().text());
	}

	public static String getURIForURL(String urlString) {
		try {
			// Create a URL object from the string
			URL url = new URL(urlString);
			// Convert the URL to a URI
			URI uri = url.toURI();
			String uristr = uri.toString();

			return uristr; // Return the URI object
		} catch (MalformedURLException | URISyntaxException e) {
			e.printStackTrace();
			return null; // Return null or handle error appropriately
		}
	}


	private static String getReferenceTitle(String url, RetrievalResultLocation awsLocation) {
		if (url == null || url.isBlank()) {
			return awsLocation.typeAsString();
		}
		else {
			 ENUM_DataSourceType type = MxLocation.getMxDataSourceType(awsLocation.type()); 
			 switch (type) {
				case S3:
					if (url.contains("/")) {
						int last = url.lastIndexOf("/");
						return url.substring(last + 1);
					} else return url;
				case WEB: 
					return getURIForURL(url);
				default: 
					return null;						
			}
		}
	}


	public static ENUM_AgentStatus getAgentStatus(AgentStatus agentStatus) throws java.lang.IllegalStateException {
			switch (agentStatus){
				case CREATING:
				case PREPARING:
				case PREPARED:
				case NOT_PREPARED:
				case FAILED:
				case UPDATING:
				case VERSIONING:
				case DELETING:
					return ENUM_AgentStatus.valueOf(agentStatus.toString());
				default:
					LOGGER.debug("Unknown AgentStatus returned: ", agentStatus.toString());
					return ENUM_AgentStatus.UNKNOWN_TO_SDK_VERSION;
			}
		}
}




