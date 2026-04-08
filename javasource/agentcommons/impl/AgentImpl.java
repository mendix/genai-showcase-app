package agentcommons.impl;

import com.mendix.core.CoreException;

import agentcommons.proxies.Agent;
import agentcommons.proxies.Version;
import genaicommons.proxies.DeployedModel;

public class AgentImpl {
	
	public static DeployedModel getDeployedModel(Agent agent) throws CoreException {
		Version inUseVersion = agent.getAgent_Version_InUse();
		if(inUseVersion == null) {
			return null;
		} else {
			return inUseVersion.getVersion_DeployedModel();
		}
	}
	
}