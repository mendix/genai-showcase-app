// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package genaicommons.actions;

import static java.util.Objects.requireNonNull;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import com.mendix.webui.CustomJavaAction;
import genaicommons.impl.DeployedModelImpl;
import genaicommons.impl.MxLogger;
import genaicommons.proxies.ENUM_ModelModality;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * Use the microflow Embeddings_Execute_ChunkCollection to execute an embeddings API call with a ChunkCollection containing one or multiple Chunk objects. The resulting embedding vectors returned by the model end up in the EmbeddingVector string attribute of the original Chunks.
 * Inputs:
 * - ChunkCollection: This is a wrapper object for a list of Chunk objects with InputTexts for which an embeddings vector should be generated. Use operations from GenAI commons to create a ChunkCollection and add Chunks or KnowledgeBaseChunks to it.
 * - DeployedModel: The DeployedModel entity replaces the Connection entity. It contains the name of the microflow to be executed for the specified model and other information relevant to connect to a model. The OutputModality needs to be Embeddings.
 * - EmbeddingOptions (optional): This can be used to specify optional attributes like vector dimension. Note that not all models may support all embeddings options attributes.
 * 
 * Output: 
 * This is a response object containing token usage metric and pointing to a ChunkCollection. The ChunkCollection contains the chunk for which an embedding vector was created. Note that the EmbeddingVector gets updated on the original objects. So for further logic, the ChunkCollection used as input for this operation can be reused and is the same as the ChunkCollection to which the EmbeddingsResponse is pointing.
 */
public class Embeddings_ChunkCollection extends CustomJavaAction<IMendixObject>
{
	private IMendixObject __DeployedModel;
	private genaicommons.proxies.DeployedModel DeployedModel;
	private IMendixObject __ChunkCollection;
	private genaicommons.proxies.ChunkCollection ChunkCollection;
	private IMendixObject __EmbeddingsOptions;
	private genaicommons.proxies.EmbeddingsOptions EmbeddingsOptions;

	public Embeddings_ChunkCollection(IContext context, IMendixObject DeployedModel, IMendixObject ChunkCollection, IMendixObject EmbeddingsOptions)
	{
		super(context);
		this.__DeployedModel = DeployedModel;
		this.__ChunkCollection = ChunkCollection;
		this.__EmbeddingsOptions = EmbeddingsOptions;
	}

	@java.lang.Override
	public IMendixObject executeAction() throws Exception
	{
		this.DeployedModel = this.__DeployedModel == null ? null : genaicommons.proxies.DeployedModel.initialize(getContext(), __DeployedModel);

		this.ChunkCollection = this.__ChunkCollection == null ? null : genaicommons.proxies.ChunkCollection.initialize(getContext(), __ChunkCollection);

		this.EmbeddingsOptions = this.__EmbeddingsOptions == null ? null : genaicommons.proxies.EmbeddingsOptions.initialize(getContext(), __EmbeddingsOptions);

		// BEGIN USER CODE
		try {
			validate();
			
			return Core.microflowCall(DeployedModel.getMicroflow())
					.withParams(mapInputParameters())
					.execute(this.getContext());

		} catch (Exception e) {
			LOGGER.error(e);
			return null;
		}
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "Embeddings_ChunkCollection";
	}

	// BEGIN EXTRA CODE
	private static final MxLogger LOGGER = new MxLogger(Embeddings_ChunkCollection.class);
	
	private void validate() {
		requireNonNull(ChunkCollection, "ChunkCollection is required.");
		DeployedModelImpl.validate(DeployedModel, ENUM_ModelModality.Embeddings);
	}
	
	private Map<String, Object> mapInputParameters() {
		Map<String, Object> inputParameters = new java.util.HashMap<>();
		Map<String, IDataType> parametersAndTypes = Core.getInputParameters(DeployedModel.getMicroflow());
		parametersAndTypes.forEach((t, u) -> {
			if(Core.getMetaObject(u.getObjectType()).isSubClassOf(genaicommons.proxies.DeployedModel.getType())) {
				inputParameters.put(t, DeployedModel.getMendixObject());
			} else if(Core.getMetaObject(u.getObjectType()).isSubClassOf(genaicommons.proxies.ChunkCollection.getType())) {
				inputParameters.put(t, ChunkCollection.getMendixObject());
			} else if(EmbeddingsOptions != null && Core.getMetaObject(u.getObjectType()).isSubClassOf(genaicommons.proxies.EmbeddingsOptions.getType())) {
				inputParameters.put(t, EmbeddingsOptions.getMendixObject());
			}
		}
		);
		return inputParameters;
	}
	
	// END EXTRA CODE
}
