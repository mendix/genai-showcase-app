---
name: conversationalui
description: Build chat pages and logic for ConversationalUI and LLM interactions. Monitor LLM token consumption or trace/observe agent interactions.
---

# Conversational UI Module Guide

Reference for building GenAI-powered chat interfaces in Mendix applications, token consumption monitoring, and agent traceability.

## Overview

Conversational UI is a Mendix marketplace module that provides:

- **Pre-built chat pages**: Full-screen, sidebar, and popup layouts
- **Chat snippets**: Message displays, history management, and token monitoring
- **Action microflow pattern**: Standard flow for processing user messages with LLMs
- **ChatContext entity**: Manages conversation state and configuration

## Pre-built Pages

All take a `ChatContext` parameter.

- **ConversationalUI_FullScreenChat**: Centered, responsive full-page chat. Add to navigation or open as a page.
- **ConversationalUI_Sidebar**: Right-side, full-height chat for side-by-side experiences.
- **ConversationalUI_PopUp**: Floating bottom-right window; add to layouts for persistent chat across pages.

## Key Snippets

Use on your own pages to embed chats.

- **Snippet_ChatContext_ConversationalUI**: Message history display, left-aligned layout.
- **Snippet_ChatContext_ConversationalUI_Bubbles**: Bubble-style chat (user right, assistant left).
- **Snippet_ChatContext_HistorySideBar**: Multi-conversation history management showing past chats.
- **Snippet_TokenMonitor**: Token consumption visualization for cost monitoring. Requires `UsageMonitoring` role.
- **Snippet_ChatContext_AdvancedSettings**: Temperature and parameter controls for users to adjust LLM behavior.

## Action Microflow Pattern

Action microflows execute when users click "Send" and must follow this structure:

### Requirements

1. **Single parameter**: ChatContext
2. **Return type**: Boolean (Success)
3. **Steps**:
   - Create Request from ChatContext using `Request_CreateFromChatContext` action
   - Call LLM using Chat Completions with history or Call Agent with History
   - Update ChatContext with response using `ChatContext_UpdateAssistantResponse` action afterwards
   - Return false on failure — Conversational UI displays an error message in the chat interface automatically

### Typical Flow

1. User types message and clicks Send
2. Conversational UI calls your action microflow with ChatContext
3. Your microflow processes the request with LLM
4. Response is displayed in chat interface
5. Conversation history is preserved automatically

## USE_ME Actions

### ChatContext_UpdateAssistantResponse

`ConversationalUI > USE_ME > ChatContext_UpdateAssistantResponse`

**When to use**: In an action microflow, after a Chat Completions call, to persist the assistant message to conversation history. Returns Boolean (success).

**Gotchas:**
- Stores tool messages when `SaveToolCallHistory` on Request is enabled (default if preproccessing is used)

### ChatContext_Create_SetActionMicroflow

`ConversationalUI > USE_ME > ChatContext_Create_SetActionMicroflow`

**When to use**: Start a fresh conversation with a new configuration. Returns a `ConversationalUI.ChatContext`.

**Gotchas:**
- Takes the name of the action microflow that runs on Send — that microflow must accept a ChatContext and return Boolean
- Creates a new `ProviderConfig` under the hood

### ChatContext_Create_SetProviderConfig

`ConversationalUI > USE_ME > ChatContext_Create_SetProviderConfig`

**When to use**: Create another conversation that reuses an existing configuration (same model, action microflow, and system prompt). Returns a `ConversationalUI.ChatContext`.

**Gotchas:**
- `ProviderConfig` is created automatically by `ChatContext_Create_SetActionMicroflow`. Retrieve it via the `ChatContext_ProviderConfig_Active` association on an existing ChatContext, or query it directly.

### Request_CreateFromChatContext

`ConversationalUI > USE_ME > Request_CreateFromChatContext`

**When to use**: At the start of an action microflow, to convert the ChatContext into a ready-to-send `GenAICommons.Request` (history, current message, system prompt, and settings). Required before calling Chat Completions.

## Common Patterns

### Pattern 1: Create Chat with Model

1. Retrieve `GenAICommons.DeployedModel` from the database (created by the connector during setup — see the connector skill, e.g. `mxgenaiconnector`, for how DeployedModel objects are created)
2. Call `ConversationalUI > USE_ME > ChatContext_Create_SetActionMicroflow` with the model, action microflow name (e.g. `'MyModule.ACT_Chat'`), and system prompt
3. Open a chat page passing the returned `ConversationalUI.ChatContext`

### Pattern 2: Action Microflow Implementation

Example microflow can be copied from Conversational UI module and modified for your needs.

1. Accept ChatContext parameter
2. Call `Request_CreateFromChatContext` to get Request
3. Call Chat Completions with Request
4. Call `ChatContext_UpdateAssistantResponse` with ChatContext and Response
5. Return true on success, false on failure

### Pattern 3: Reuse Configuration

1. Create the first chat with `ChatContext_Create_SetActionMicroflow` — this creates the `ProviderConfig`
2. Retrieve that `ProviderConfig` (via `ChatContext_ProviderConfig_Active` or a query)
3. Call `ChatContext_Create_SetProviderConfig` for each additional conversation — all share the same model and behavior

## ChatContext Entity

Represents a single conversation with:

- **ProviderConfig association**: Links to model, action microflow, and settings
- **Message collection**: Conversation history
- **Ownership**: Only creator can access (unless user has _addOn_ReadAll role)
- **Optional attributes**: Extend via extension entities

**Key associations**:
- `ChatContext_ProviderConfig_Active`: Currently active configuration
- `ChatContext_Message`: Message history
- `ProviderConfig_DeployedModel`: Links config to LLM model

## Integration with Agents

Use `ChatContext_Create_ForAgent` from Agent Commons to create ChatContext from Agent entity. This automatically:
- Extracts system prompt from agent
- Configures DeployedModel
- Sets up action microflow for agent invocation
- Enables agent tools and knowledge bases

## Configuration Constants

**EnableMarkdownViewer**: Toggle Markdown rendering in messages (default: true)

**StoreUsageMetrics**: Set to `true` to enable token consumption tracking. Required for the Token Monitor snippet to display data.

**StoreTraces**: Set to `true` to enable agent traceability and interaction logging. Required for TraceMonitoring role features.

## Module Roles

**User**: Required for chat interaction. Can only access own conversations.

**_addOn_ReadAll**: Access all chat data across users. For admin purposes.

**UsageMonitoring**: View and export token consumption data.

**TraceMonitoring**: Access traceability and debugging information.

## Module Dependencies

- **GenAICommons**  Base LLM operations
- **AgentCommons** - Agent integration for trace filtering
- **Atlas Core** - Styling framework
- **DataWidgets** (2.22.0+) - UI components
- **NanoflowCommons** - Utility functions
- **WebActions** - Client-side actions

## Human-in-the-Loop

When tools require user approval, conversation automatically pauses and displays approval UI. User can:
- Approve tool execution
- Reject tool execution
- View tool details before deciding

Configure tool approval in tool settings by setting `UserAccessApproval` setting.

## Styling Customization

Override SCSS variables for custom appearance:
- `$chat-width`, `$pop-up-chat-width`, `$pop-up-chat-height`
- `$chat-bubble-user-background`, `$chat-bubble-assistant-background`
- `$chat-header-color`

Target CSS classes:
- `.chat-container`, `.message-container`, `.send-btn`
- `.message--user`, `.message--assistant`

## Reference Links

- [Conversational UI Documentation](https://docs.mendix.com/agents/genai-for-mx/conversational-ui/)
- [Conversational UI on Mendix Marketplace](https://marketplace.mendix.com/link/component/239450)
- [GenAI Commons on Mendix Marketplace](https://marketplace.mendix.com/link/component/239448)
