---
name: agentcommons
description: Call agents that were defined at runtime using the Agent Commons module. Integrate agents with the ConversationalUI module in chat use cases, or invoke agents in task-based (single-call) use cases. Use when a user wants to connect a runtime-configured agent to a chat page, or call an agent from a microflow.
---

# Agent Commons Module Guide

Quick reference for invoking GenAI agents at runtime in Mendix applications using Agent Commons.

## Overview

Agent Commons is a Mendix marketplace module that provides:

- **Agent invocation actions**: Call agents from microflows with or without conversation history
- **Chat context creation**: Initialize chat sessions for Conversational UI
- **Runtime management UI**: Agent overview snippet for navigation

## Key Differences: Agent Commons vs Agent Editor

| Feature | Agent Commons | Agent Editor |
| --- | --- | --- |
| Definition Method | Runtime in UI | Design-time (Studio Pro documents) |
| Storage | Database entities | Agent documents in app model |
| Primary Actions | `Agent_Call_WithHistory`, `Agent_Call_WithoutHistory`, `ChatContext_Create_ForAgent` | `Agent_CallDocument_WithHistory`, `Agent_CallDocument_WithoutHistory` |

**When to use Agent Commons actions:**
- Invoking agents that were created at runtime
- Building custom agent logic with runtime-configured agents
- Dynamic agent selection based on runtime data

**When to use Agent Editor actions:**
- Invoking agents defined in Studio Pro as Agent documents

## USE_ME Actions

### Agent_Call_WithHistory

`AgentCommons > USE_ME > Agent_Call_WithHistory`

**When to use**: Call a chat/conversational agent where conversation history matters — typically inside a Conversational UI action microflow. Returns a `GenAICommons.Response`.

**Gotchas:**
- The passed `Request` must already contain the message history
- The agent's system prompt and capabilities (tools, knowledge bases) are applied automatically

### Agent_Call_WithoutHistory

`AgentCommons > USE_ME > Agent_Call_WithoutHistory`

**When to use**: Call an agent for single-shot task execution (task agents), no conversation history. Returns a `GenAICommons.Response`.

**Gotchas:**
- The agent must be of `UsageType` `Single_Call`
- The agent's system prompt, user prompt, and capabilities are applied automatically
- Supports vision/document analysis by passing a `FileCollection`

### ChatContext_Create_ForAgent

`AgentCommons > USE_ME > ChatContext_Create_ForAgent`

**When to use**: Wire a runtime agent to a Conversational UI chat page. Returns a `ConversationalUI.ChatContext` ready to pass to Conversational UI snippets or pages.

**Gotchas:**
- The agent's system prompt is extracted and the DeployedModel association is configured automatically
- Takes the name of the action microflow that runs on each user message

## Common Patterns

### Pattern 1: Call a Task Agent

Task agents execute a single operation without conversation history.

1. Retrieve the `AgentCommons.Agent` object from the database
2. Prepare context object (if agent uses prompt variables)
3. Call `AgentCommons > USE_ME > Agent_Call_WithoutHistory` with the agent, context object, and empty for optional parameters
4. Read response text from the returned `GenAICommons.Response` object

### Pattern 2: Call a Chat Agent

Chat agents maintain conversation history across multiple turns. The following pattern is typically used inside a Conversational UI action microflow.

1. Retrieve the `AgentCommons.Agent` object from the database
2. Obtain the existing `GenAICommons.Request` with message history (e.g. via `ConversationalUI > USE_ME > Request_CreateFromChatContext`)
3. Call `AgentCommons > USE_ME > Agent_Call_WithHistory` with the agent, request, and optional context object
4. Call `ConversationalUI > USE_ME > ChatContext_UpdateAssistantResponse` with the ChatContext and returned Response to persist the assistant message

### Pattern 3: Create Chat Context for Conversational UI

Use this pattern to wire a runtime agent to a Conversational UI chat page.

1. Retrieve the `AgentCommons.Agent` object from the database
2. Prepare context object (if agent uses prompt variables)
3. Call `AgentCommons > USE_ME > ChatContext_Create_ForAgent` with the agent, action microflow name (e.g. `'MyModule.ACT_ChatWithAgent'`), context object, and empty for optional model override
4. Open a Conversational UI page passing the returned `ConversationalUI.ChatContext`
5. In the action microflow: call `Request_CreateFromChatContext` to get Request, call `Agent_Call_WithHistory`, then call `ChatContext_UpdateAssistantResponse`


## Runtime Management UI

### Agent Overview Snippet

`AgentCommons > Snippets > Snippet_Agent_Overview`

**When to use**: Add to navigation for a complete runtime UI to manage agents, tools, knowledge bases, and MCP connections (view details, import/export, configure MCP). Useful as an alternative to Agent Editor for runtime-configured agents, and to view Studio Pro agents at runtime.


## Integration with Conversational UI

Agent Commons integrates with Conversational UI module:

- Use `ChatContext_Create_ForAgent` to create chat contexts from agents
- ChatContext manages conversation state automatically
- Conversational UI provides chat interface snippets and pages for user interaction
- Token consumption monitoring is automatic (if StoreUsageMetrics constant is set to true)
- Traceability features are built-in (if StoreTraces constant is set to true)

**Typical flow:**
1. Create ChatContext using `ChatContext_Create_ForAgent`
2. Pass ChatContext to Conversational UI chat widget or page
3. User interacts with chat interface
4. Agent capabilities (tools, knowledge bases) are invoked automatically


## Module Dependencies

Agent Commons requires:

- **Administration** - Required dependency (user management)
- **GenAICommons** - Base domain model and LLM operations
- **ConversationalUI** - For chat context creation and UI components
- **CommunityCommons** - Utility functions
- **MCP Client** - For connecting to external MCP tool servers
- **NanoflowCommons** - Utility functions

## Reference Links

- [Agent Commons on Mendix Marketplace](https://marketplace.mendix.com/link/component/240371)
- [Agent Commons Documentation](https://docs.mendix.com/agents/genai-for-mx/agent-commons/)
- [GenAI Commons on Mendix Marketplace](https://marketplace.mendix.com/link/component/239448)
- [Conversational UI on Mendix Marketplace](https://marketplace.mendix.com/link/component/239450)

