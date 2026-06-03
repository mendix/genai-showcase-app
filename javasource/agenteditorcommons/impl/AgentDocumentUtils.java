package agenteditorcommons.impl;

import static java.util.Objects.requireNonNull;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import com.mendix.core.Core;
import com.mendix.extensibility.CustomBlobDocumentInfo;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

import agenteditorcommons.proxies.ModelDocument;

public class AgentDocumentUtils {

    private static final MxLogger LOGGER = new MxLogger(AgentDocumentUtils.class);

    private AgentDocumentUtils() {}

    public static void importModelDocumentsOfType(String documentTypeID, IContext context) {
        List<CustomBlobDocumentInfo> customBlobDocumentList = Core.extensibility()
                .getCustomDocumentsOfType(documentTypeID);
        String documentFriendlyName = documentTypeID.substring(documentTypeID.lastIndexOf('.') + 1);
        LOGGER.info(customBlobDocumentList.size() + " " + documentFriendlyName
                + "s document(s) found in the Mendix Model.");

        List<ModelDocument> modelDocuments = new ArrayList<>();
        for (CustomBlobDocumentInfo customBlobDocument : customBlobDocumentList) {
            modelDocuments.add(getModelDocument(customBlobDocument, context));
        }

        boolean isSuccess = false;

        switch (documentTypeID) {
        case "agenteditor.model":
            isSuccess = agenteditorcommons.proxies.microflows.Microflows
                .deployedModel_CreateUpdate_List(context, modelDocuments);
            break;

        case "agenteditor.consumedMCPService":
            isSuccess = agenteditorcommons.proxies.microflows.Microflows
                .consumedMCPService_CreateUpdate_List(context, modelDocuments);
            break;

        case "agenteditor.knowledgebase":
            isSuccess = agenteditorcommons.proxies.microflows.Microflows
                    .knowledgeBase_CreateUpdate_List(context, modelDocuments);
            break;

        case "agenteditor.agent":
            isSuccess = agenteditorcommons.proxies.microflows.Microflows
                .agent_CreateUpdate_List(context, modelDocuments);
            break;

        default:
            throw new IllegalArgumentException("Unknown document type: " + documentTypeID);
        }

        if (!isSuccess) {
            throw new IllegalArgumentException(
                    "Creating/Updating " + documentFriendlyName + " documents failed due to bad input.");
        }
    }

    private static ModelDocument getModelDocument(CustomBlobDocumentInfo customBlobDocumentInfo, IContext context) {
        String qualifiedName = customBlobDocumentInfo.qualifiedDocumentName();
        LOGGER.debug("Importing model with qualified name '" + qualifiedName + "'.");

        String modelDocumentContent = customBlobDocumentInfo.content();

        String documentID = customBlobDocumentInfo.documentID().toString();
        LOGGER.debug(qualifiedName + " - documentID: " + documentID);

        ModelDocument modelDocument = new ModelDocument(context);
        modelDocument.setDocumentID(context, documentID);
        modelDocument.setContent(context, modelDocumentContent);
        modelDocument.setQualifiedName(context, qualifiedName);
        return modelDocument;
    }

	public static IMendixObject getAgentObjectFromDocument(String agentName, IContext context) {
		
		CustomBlobDocumentInfo agentDocument = Core.extensibility().getCustomDocumentByFullName(agentName);
		requireNonNull(agentDocument, "Agent document with name " + agentName + " not found.");
		
		List<IMendixObject> results = Core.createXPathQuery("//AgentCommons.Agent[ModelDocumentID=$documentID]")
	            .setVariable("documentID", agentDocument.documentID().toString())
	            .setAmount(1)
	            .execute(context);
		
		if (results.isEmpty() || results.get(0) == null) {
		    throw new NoSuchElementException("Agent object with name " + agentName + " does not exist.");
		}			
		
		return results.get(0);
	}

	public static void importAllModelDocuments(IContext context) {
		AgentDocumentUtils.importModelDocumentsOfType("agenteditor.model", context);
		AgentDocumentUtils.importModelDocumentsOfType("agenteditor.consumedMCPService", context);
		AgentDocumentUtils.importModelDocumentsOfType("agenteditor.knowledgebase", context);
		AgentDocumentUtils.importModelDocumentsOfType("agenteditor.agent", context);
		
	}
}