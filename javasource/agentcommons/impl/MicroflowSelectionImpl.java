package agentcommons.impl;

import java.util.List;

import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;

import agentcommons.proxies.Agent;
import agentcommons.proxies.Microflow;
import agentcommons.proxies.Module;
import agentcommons.proxies.Version;
import genaicommons.proxies.DeployedModel;

public class MicroflowSelectionImpl {
	
	public static void getCreateModuleAddToList(IContext ctx, String moduleName, List<Module> uniqueModuleList) {
		Module moduleInList = uniqueModuleList.stream()
				.filter(o -> o.getModuleName().equals(moduleName))
				.findFirst()
				.orElse(null);
		
		if(moduleInList != null) {
			return;
		}
		
		Module module = new Module(ctx);
		module.setModuleName(moduleName);
		uniqueModuleList.add(module);
	}
	
	public static Microflow createMicroflow(IContext ctx ,String fullName) {
		Microflow microflow = new Microflow(ctx);
		microflow.setFullName(fullName);
		microflow.setMicroflowName(fullName.substring(fullName.indexOf('.') + 1));
		return microflow;
	}
	
}