package genaicommons.impl;

import static java.util.Objects.requireNonNull;

import java.util.List;
import java.math.BigDecimal;

import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;


import genaicommons.proxies.Connection;
import genaicommons.proxies.KnowledgeBaseRetrieval;
import genaicommons.proxies.Tool;
import genaicommons.proxies.ToolCollection;
import genaicommons.proxies.MetadataCollection;

public class KnowledgeBaseRetrievalImpl {
	
	public static void validateInput(String microflow, String toolName) throws Exception{
		requireNonNull(toolName, "Tool Name is required.");
		if(!microflow.isBlank()) {
			FunctionImpl.validateFunctionMicroflow(microflow);
		}
	}
	
	public static KnowledgeBaseRetrieval createKnowledgeBaseRetrieval(IContext context, String microflow, String name, ToolCollection toolCollection, Connection connection) throws CoreException {
		KnowledgeBaseRetrieval knowledgeBaseRetrieval = new KnowledgeBaseRetrieval(context);
		knowledgeBaseRetrieval.setMicroflow(microflow);
		knowledgeBaseRetrieval.setName(name);	
		knowledgeBaseRetrieval.setKnowledgeBaseRetrieval_Connection(connection);
		List<Tool> ToolList = toolCollection.getToolCollection_Tool();
		ToolList.add(knowledgeBaseRetrieval);
		toolCollection.setToolCollection_Tool(ToolList); 
		return knowledgeBaseRetrieval;
	}
	
	public static void addOptionalParameters(KnowledgeBaseRetrieval knowledgeBaseRetrieval, String description, MetadataCollection metadataCollection, BigDecimal minimumSimilarity, Long MaxNumberOfResults) {
		knowledgeBaseRetrieval.setDescription(description);
		knowledgeBaseRetrieval.setKnowledgeBaseRetrieval_MetadataCollection(metadataCollection);
		knowledgeBaseRetrieval.setMinimumSimilarity(minimumSimilarity);
		knowledgeBaseRetrieval.setMaxNumberOfResults(MaxNumberOfResults.intValue());
	}
	
	
}
