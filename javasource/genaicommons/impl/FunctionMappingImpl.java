package genaicommons.impl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IDataType;
import genaicommons.proxies.ENUM_MessageRole;
import genaicommons.proxies.Request;
import genaicommons.proxies.Message;
import genaicommons.proxies.ToolCall;

public class FunctionMappingImpl {

	/**
	 * gets input parameters for a function microflow without Mendix objects
	 * @param functionMicroflow
	 * @return Map<String, IDataType> inputParameters
	 */
	public static Map<String, IDataType> getInputParametersForModel(String functionMicroflow) {
		Map<String, IDataType> inputParameters = Core.getInputParameters(functionMicroflow);
		Map<String, IDataType> inputParametersModified = new HashMap<>();
		
		for(Map.Entry<String, IDataType> entry : inputParameters.entrySet()) {
			String objectType = entry.getValue().getObjectType();
			if (objectType == null) {
				inputParametersModified.put(entry.getKey(), entry.getValue());
			}
		}
		return inputParametersModified;
	}
	
	// Get tool messages belonging to the current agent loop only (i.e. since the last user message)
	public static List<Message> getToolCallMessages(Request request, IContext context) {
		return getCurrentLoopMessages(request, context).stream()
				.filter(msg -> msg.getToolCallId() != null && !msg.getToolCallId().isEmpty())
				.collect(Collectors.toList());
	}

	// Get messages of a specific role belonging to the current agent loop only
	public static List<Message> getCurrentLoopMessagesByRole(Request request, genaicommons.proxies.ENUM_MessageRole role, IContext context) {
		return getCurrentLoopMessages(request, context).stream()
				.filter(msg -> msg.getRole() == role)
				.collect(Collectors.toList());
	}

	// Returns true if a tool with the given name has already been called (and answered) in the current agent loop.
	// Used to decide whether a forced ToolChoice should be dropped to avoid an infinite tool-call loop.
	public static boolean isToolRecall(Request request, String toolName, IContext context) throws CoreException {
		List<Message> toolMessages = getToolCallMessages(request, context);
		if (toolMessages.isEmpty()) {
			return false;
		}

		List<Message> assistantMessages = getCurrentLoopMessagesByRole(request, ENUM_MessageRole.assistant, context);

		Set<String> calledToolCallIds = new HashSet<>();
		for (Message assistantMessage : assistantMessages) {
			List<ToolCall> toolCalls = assistantMessage.getMessage_ToolCall();
			if (toolCalls == null) {
				continue;
			}
			for (ToolCall toolCall : toolCalls) {
				if (toolName.equals(toolCall.getName())) {
					calledToolCallIds.add(toolCall.getToolCallId());
				}
			}
		}

		for (Message toolMessage : toolMessages) {
			if (calledToolCallIds.contains(toolMessage.getToolCallId())) {
				return true;
			}
		}
		return false;
	}

	// Returns all messages since the last user message (the current agent loop)
	private static List<Message> getCurrentLoopMessages(Request request, IContext context) {
		List<Message> allMessages = Core.retrieveByPath(context, request.getMendixObject(),
				genaicommons.proxies.Request.MemberNames.Request_Message.toString()).stream()
				.map(msg -> genaicommons.proxies.Message.initialize(context, msg))
				.collect(Collectors.toList());

		int lastUserMessageIndex = -1;
		for (int i = allMessages.size() - 1; i >= 0; i--) {
			if (allMessages.get(i).getRole() == genaicommons.proxies.ENUM_MessageRole.user) {
				lastUserMessageIndex = i;
				break;
			}
		}

		return allMessages.subList(lastUserMessageIndex + 1, allMessages.size());
	}
}