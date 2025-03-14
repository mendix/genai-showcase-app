// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package embeddings_clustering.actions;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import com.jujutsu.tsne.SimpleTSne;
import com.jujutsu.tsne.TSne;
import com.jujutsu.tsne.TSneConfig;
import com.jujutsu.tsne.TSneConfiguration;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.webui.CustomJavaAction;
import embeddings_clustering.impl.clusteringUtils;

public class JA_TSNE_2D extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private java.util.List<IMendixObject> __EmbeddingList;
	private java.util.List<embeddings_clustering.proxies.Embedding> EmbeddingList;
	private java.lang.Long Perplexity;
	private java.lang.Long MaxIterations;
	private java.math.BigDecimal Theta;

	public JA_TSNE_2D(IContext context, java.util.List<IMendixObject> EmbeddingList, java.lang.Long Perplexity, java.lang.Long MaxIterations, java.math.BigDecimal Theta)
	{
		super(context);
		this.__EmbeddingList = EmbeddingList;
		this.Perplexity = Perplexity;
		this.MaxIterations = MaxIterations;
		this.Theta = Theta;
	}

	@java.lang.Override
	public java.util.List<IMendixObject> executeAction() throws Exception
	{
		this.EmbeddingList = java.util.Optional.ofNullable(this.__EmbeddingList)
			.orElse(java.util.Collections.emptyList())
			.stream()
			.map(__EmbeddingListElement -> embeddings_clustering.proxies.Embedding.initialize(getContext(), __EmbeddingListElement))
			.collect(java.util.stream.Collectors.toList());

		// BEGIN USER CODE
		double[][] points = clusteringUtils.getEmbeddingsAsDoubles(EmbeddingList, getContext());	
		
		
		//TODO replace by validation 
		int perplexity = this.Perplexity != null ? this.Perplexity.intValue() : 15;
		int maxIterations = this.MaxIterations != null ? this.MaxIterations.intValue() : 2000;
		double theta = this.Theta != null ? this.Theta.doubleValue() : 0.5;
		
		//
		int originalDimensions = points[0].length;
		
		TSneConfiguration config = new TSneConfig(points, 2, originalDimensions, perplexity, maxIterations, true, theta, true, false);
		TSne TSne = new SimpleTSne();
		double[][] TSneOutput = TSne.tsne(config);
		
		List<IMendixObject> coordinatesList = new ArrayList<IMendixObject>();
		for (int i = 0; i < TSneOutput.length; i++) {
			embeddings_clustering.proxies.Coordinates coordinates = new embeddings_clustering.proxies.Coordinates(getContext());
			coordinates.setX(getContext(), BigDecimal.valueOf(TSneOutput[i][0]));
			coordinates.setY(getContext(), BigDecimal.valueOf(TSneOutput[i][1]));
			coordinates.setCluster(getContext(), EmbeddingList.get(i).getCluster());
			coordinates.setText(getContext(), EmbeddingList.get(i).getText());
			coordinatesList.add(coordinates.getMendixObject());
		}
		return coordinatesList;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "JA_TSNE_2D";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
