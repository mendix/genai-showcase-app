package genaicommons.impl;

import static java.util.Objects.requireNonNull;

import java.util.Map;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IDataType;

import genaicommons.proxies.ChunkCollection;
import genaicommons.proxies.DeployedModel;
import genaicommons.proxies.ENUM_ModelModality;
import genaicommons.proxies.EmbeddingsOptions;
import genaicommons.proxies.EmbeddingsResponse;
import genaicommons.proxies.ImageOptions;
import genaicommons.proxies.Request;
import genaicommons.proxies.Response;

public class DeployedModelImpl {
	
	public static void validate(DeployedModel deployedModel, ENUM_ModelModality outputModality) {
		requireNonNull(deployedModel, "DeployedModel is required.");
		
		if (deployedModel.getOutputModality() != outputModality) {
			throw new IllegalArgumentException("The DeployedModel needs to have the " + outputModality.getCaption() + " output modality.");
		}
		
		validateMicroflow(deployedModel.getMicroflow(), outputModality);
	}

	public static void validateMicroflow(String microflow, ENUM_ModelModality outputModality) {
		switch (outputModality)	{
			case Text:
				DeployedModelImpl.validateChatCompletionsMicroflow(microflow);
				break;
			case Embeddings:
				DeployedModelImpl.validateEmbeddingsMicroflow(microflow);
				break;
			case Image:
				DeployedModelImpl.validateImageGenerationsMicroflow(microflow);
			default:
				break;
		}
	}
	
	private static void validateChatCompletionsMicroflow(String chatCompletionsMicroflow) {
		if (chatCompletionsMicroflow == null || chatCompletionsMicroflow.isBlank()) {
			throw new IllegalArgumentException("Chat Completions Microflow is required.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(chatCompletionsMicroflow);
		if (inputParameters == null || inputParameters.entrySet().isEmpty() || inputParameters.size() != 2) {
			throw new IllegalArgumentException("Chat Completions Microflow " + chatCompletionsMicroflow + " does not exist or has the wrong number of input parameters. It should only have one input parameter of type " + Request.getType() + " and one input parameter of type " + DeployedModel.getType() + ".");
		}
		
		boolean requestFound = false;
		boolean deployedModelFound = false;

		// Iterate through the values in the inputParameters map
		for (IDataType value : inputParameters.values()) {
		    if (Core.getMetaObject(value.getObjectType()).isSubClassOf(Request.getType())) {
		    	requestFound = true;
		    } else if (Core.getMetaObject(value.getObjectType()).isSubClassOf(DeployedModel.getType())) {
		    	deployedModelFound = true;
		    }
		}
		
		if(!requestFound || !deployedModelFound) {
			throw new IllegalArgumentException("Chat Completions Microflow " + chatCompletionsMicroflow + " should only have one input parameter of type " + Request.getType() + " and one input parameter of type " + DeployedModel.getType() + ".");
		}
		
		if(Core.getReturnType(chatCompletionsMicroflow) == null || !Core.getMetaObject(Core.getReturnType(chatCompletionsMicroflow).getObjectType()).isSubClassOf(Response.getType())) {
			throw new IllegalArgumentException("Chat Completions Microflow " + chatCompletionsMicroflow + " should have a return value of type " + Response.getType() + ".");		
		}
	}
	
	private static void validateEmbeddingsMicroflow(String embeddingsMicroflow) {
		if (embeddingsMicroflow == null || embeddingsMicroflow.isBlank()) {
			throw new IllegalArgumentException("Embeddings Microflow is required.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(embeddingsMicroflow);
		if (inputParameters == null || inputParameters.entrySet().isEmpty() || (inputParameters.size() < 2 && inputParameters.size() > 3)) {
			throw new IllegalArgumentException("Embeddings Microflow " + embeddingsMicroflow + " does not exist or has the wrong number of input parameters. It should only have one input parameter of type " + ChunkCollection.getType() + " and one input parameter of type " + DeployedModel.getType() + ". Optionally an input parameter of type " + EmbeddingsOptions.getType() + " can be passed.");
		}
		
		boolean chunkCollectionFound = false;
		boolean deployedModelFound = false;

		// Iterate through the values in the inputParameters map
		for (IDataType value : inputParameters.values()) {
		    if (Core.getMetaObject(value.getObjectType()).isSubClassOf(ChunkCollection.getType())) {
		    	chunkCollectionFound = true;
		    } else if (Core.getMetaObject(value.getObjectType()).isSubClassOf(DeployedModel.getType())) {
		    	deployedModelFound = true;
		    }
		}
		
		if(!chunkCollectionFound || !deployedModelFound) {
			throw new IllegalArgumentException("Embeddings Microflow " + embeddingsMicroflow + " has wrong input parameters. It should only have one input parameter of type " + ChunkCollection.getType() + " and one input parameter of type " + DeployedModel.getType() + ". Optionally an input parameter of type " + EmbeddingsOptions.getType() + " can be passed.");		}
		
		if(Core.getReturnType(embeddingsMicroflow) == null || !Core.getMetaObject(Core.getReturnType(embeddingsMicroflow).getObjectType()).isSubClassOf(EmbeddingsResponse.getType())) {
			throw new IllegalArgumentException("Embeddings Microflow " + embeddingsMicroflow + " should have a return value of type " + EmbeddingsResponse.getType() + ".");		
		}
	}
	
	private static void validateImageGenerationsMicroflow(String imageGenerationsMicroflow) {
		if (imageGenerationsMicroflow == null || imageGenerationsMicroflow.isBlank()) {
			throw new IllegalArgumentException("Image Generations Microflow is required.");
		}
		
		Map<String, IDataType> inputParameters = Core.getInputParameters(imageGenerationsMicroflow);
		if (inputParameters == null || inputParameters.entrySet().isEmpty() || (inputParameters.size() < 2 && inputParameters.size() > 3)) {
			throw new IllegalArgumentException("Image Generations Microflow " + imageGenerationsMicroflow + " does not exist or has the wrong number of input parameters. It should only have one String input parameter containing the UserPrompt and one input parameter of type " + DeployedModel.getType() + ". Optionally an input parameter of type " + ImageOptions.getType() + " can be passed.");
		}
		
		boolean userPromptFound = false;
		boolean deployedModelFound = false;

		// Iterate through the values in the inputParameters map
		for (IDataType value : inputParameters.values()) {
		    if (value.getType().equals(IDataType.DataTypeEnum.String)) {
		    	userPromptFound = true;
		    } else if (Core.getMetaObject(value.getObjectType()).isSubClassOf(DeployedModel.getType())) {
		    	deployedModelFound = true;
		    }
		}
		
		if(!userPromptFound || !deployedModelFound) {
			throw new IllegalArgumentException("Image Generations Microflow " + imageGenerationsMicroflow + " has wrong input parameters. It should only have one String input parameter containing the UserPrompt and one input parameter of type " + DeployedModel.getType() + ". Optionally an input parameter of type " + ImageOptions.getType() + " can be passed.");		}
		
		if(Core.getReturnType(imageGenerationsMicroflow) == null || !Core.getMetaObject(Core.getReturnType(imageGenerationsMicroflow).getObjectType()).isSubClassOf(Response.getType())) {
			throw new IllegalArgumentException("Image Generations Microflow " + imageGenerationsMicroflow + " should have a return value of type " + Response.getType() + ".");		
		}
	}
}