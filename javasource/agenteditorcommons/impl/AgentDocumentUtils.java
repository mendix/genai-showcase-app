package agenteditorcommons.impl;

import static java.util.Objects.requireNonNull;

import java.util.List;

import com.mendix.core.Core;
import com.mendix.extensibility.CustomBlobDocumentInfo;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class AgentDocumentUtils {
	
	public static IMendixObject getAgentObjectFromDocument(String agentName, IContext context) {
		
		CustomBlobDocumentInfo agentDocument = Core.extensibility().getCustomDocumentByFullName(agentName);
		requireNonNull(agentDocument, "Agent document with name " + agentName + " not found.");
		
		List<IMendixObject> results = Core.createXPathQuery("//AgentCommons.Agent[ModelDocumentID=$documentID]")
	            .setVariable("documentID", agentDocument.documentID().toString())
	            .setAmount(1)
	            .execute(context);
		
		if (results.isEmpty() || results.get(0) == null) {
		    throw new NullPointerException("Agent object with name " + agentName + " does not exist.");
		}			
		
		return results.get(0);
	}
}