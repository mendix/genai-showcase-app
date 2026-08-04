# Agent Editor Glossary

## Terms and Concepts

### Agent Document

A Studio Pro document that defines a GenAI agent, including its prompts, model configuration, tools, and knowledge bases. Agent documents are part of the app model and version-controlled. Agent documents have two modes accessible via a switcher in the top right corner: Build mode (for configuration) and Playground mode (for interactive testing).

### Build Mode

The configuration mode of an Agent document where you define and edit the agent's prompts, tools, knowledge bases, model settings, and other configuration. This is the default view when opening an Agent document. Use Build mode to make structural changes to the agent definition.

### Playground Mode

The interactive testing mode of an Agent document where you can test the agent's behavior in real-time through a chat interface. Accessible via the mode switcher in the top right corner of the Agent document. Contains a Test button for executing test calls. Requires the app to be running locally. Use Playground mode for exploratory testing, prompt refinement, and validating agent behavior before integration.

### Model Document


A Studio Pro document that configures the text generation model (LLM) that agents will use. Links to a Text Generation resource via a constant containing the resource key (Mendix Cloud GenAI) or project endpoint and api key (Azure AI Foundry).  Currently Mendix Cloud GenAI and Azure are supported as model provider. More providers will be added in future releases.

### Knowledge Base Document

A Studio Pro document that configures a connection to a Mendix Cloud GenAI knowledge base for retrieval-augmented generation (RAG). Links to a knowledge base resource via a constant. Currently only Mendix Cloud GenAI is supported as knowledge base provider. More providers will be added in future releases.

### Consumed MCP Service Document

A Studio Pro document that configures a connection to an external Model Context Protocol (MCP) server. MCP servers expose tools that can be called by agents.

### Context Entity

The entity type selected in an Agent document that provides attributes for resolving placeholder values in prompts at runtime. When calling the agent from a microflow, you pass an object of this entity type.

### Placeholder

A variable in a prompt defined using double braces (e.g., `{{customerName}}`). The name inside the braces must match an attribute name on the selected Context entity. Placeholders are replaced with actual values at runtime.

### Tool

A capability that an agent can invoke during execution. Tools can be:

- **Microflow tools**: Mendix microflows that return a String and have only primitives as input parameters (no objects or lists)
- **MCP tools**: Tools exposed by external MCP servers

### Tool Choice

A configuration option that controls how the agent behaves with regard to tool calling:

- **Auto**: Agent decides whether to call tools based on the request
- **None**: Agent never calls tools
- **Any**: Agent must call at least one tool
- **Tool**: Agent must call a specific tool (currently only microflow tools)

### Collection

A named set of documents or chunks within a knowledge base. Collections are used to organize knowledge by domain, topic, or purpose.

### Retrieval Settings

Configuration parameters for knowledge base retrieval:

- **Max results**: Maximum number of chunks to retrieve per query
- **Min similarity**: Cosine similarity threshold (0-1) for filtering results

### Active Checkbox

A toggle in Agent Editor that enables or disables a tool or knowledge base link without deleting its configuration. Useful for comparing behavior during iteration and testing.

### Call Agent Toolbox Actions

Microflow actions provided by Agent Editor Commons:

- **Call Agent without History**: For single-call, task-style execution (task agents)
- **Call Agent with History**: For conversational scenarios with message history (chat agents)

### Response Object

An object of type `GenAICommons.Response` returned by Call Agent actions. Contains the agent's generated text, token usage, and metadata.

### Request Object

An input object for Call Agent actions that can contain:

- Previous messages (required for "with History" variant)
- Request-level settings (temperature, max tokens overrides)
- File attachments for vision/document chat

### ChatContext

An entity from the ConversationalUI module representing a user-agent chat session. Created using the "New Chat for Agent" action.

### After-Startup Microflow

A microflow that runs when the app starts. For Agent Editor, `ASU_AgentEditor` must be configured as the after-startup microflow to import agent documents into the runtime.

### Environment-Specific Constants

Constants whose values can be overridden per deployment environment. Used for model keys, knowledge base keys, and MCP endpoints to support different configurations in development, acceptance, and production.

### Protocol Version

The MCP protocol version used by an external MCP server:

- **v2025_03_26**: Supports streamable HTTP transport (newer)
- **v2024_11_05**: Uses Server-Sent Events (SSE) transport (older)

### Credentials Microflow

An optional microflow configured in a Consumed MCP Service document that returns authentication headers (`System.HttpHeader` objects) for secured MCP endpoints.

### Token Consumption Monitor

A ConversationalUI feature that displays token usage during agent interactions. Automatically integrated with Agent Editor agents.

### Traceability

A ConversationalUI feature that logs and displays agent execution details for debugging and auditing. Automatically integrated with Agent Editor agents.

### Whole-Server Integration

The current approach for MCP tools where all tools from an MCP server are made available to the agent. Individual tool selection is not yet supported.

### Testing

Agents can be tested in Playground mode of an Agent document that executes test calls using the local app runtime. Provides an interactive chat interface for testing agent behavior. Requires: no consistency errors, app running locally, after-startup logic executed, model connectivity verified.

### Model Settings

Configuration parameters for LLM behavior:

- **Maximum tokens**: Maximum length of generated response (provider-specific limits)
- **Temperature**: Randomness (0 = deterministic, higher = more creative)
- **TopP**: Nucleus sampling parameter (alternative to temperature)

### Cosine Similarity

A measure of similarity between two vectors (0 to 1). In knowledge base retrieval, higher values indicate more similar content. The Min similarity setting filters out chunks below the threshold.

## File Paths and Conventions

### USE_ME Folder

A folder within the Agent Editor Commons module containing template agents, example microflows, and reusable logic that is explicitly intended for developers to reference and reuse in their own modules. This is the ONLY logic from Agent Editor Commons that should be used or referenced.

### Private Folder

Contains internal implementation logic for the Agent Editor Commons module. Logic in private folders must NEVER be used, called, or referenced from your own modules. This logic is for internal module use only and may change without notice.

## Common Acronyms

- **LLM**: Large Language Model
- **RAG**: Retrieval-Augmented Generation
- **MCP**: Model Context Protocol
- **GenAI**: Generative Artificial Intelligence
- **UI**: User Interface
- **ASU**: After-Startup microflow prefix (Mendix convention)

## Module References

### Agent Editor

The Studio Pro extension package that provides:

- New document types (Agent, Model, Knowledge Base, Consumed MCP Service)
- Visual editors for configuration
- Test functionality
- Consistency checking

When installing the Agent Editor from Marketplace, Agent Editor Commons is automatically installed with it.

**Module Dependencies:** Agent Editor requires multiple Mendix modules (Administration, Agent Commons, Atlas Core, Community Commons, ConversationalUI, Data Widgets, Encryption, GenAI Commons, MCP Client, Nanoflow Commons, Web Actions, Events Widget, Markdown Viewer Widget). Additionally, based on the provider used for Model documents (Text Generation) and Knowledge base documents (Retrieval), Mendix Cloud GenAI Connector and OpenAI Connector are also needed. To view compatible versions, go to **Extensions menu > Agent Editor > Compatibility** in Studio Pro, which opens a module dependency overview showing required modules and their compatible version ranges.

### Agent Editor Commons

The Marketplace module that provides:

- Runtime logic for agent execution
- Call Agent toolbox actions
- Integration with GenAI Commons
- After-startup import logic (`ASU_AgentEditor`)

### GenAI Commons

Foundational module providing:

- Domain model (`Request`, `Response`, `Message`, etc.)
- Base operations for GenAI integrations
- Common types and enumerations

### Agent Commons

Module providing:

- Agent management UI (view agents, not edit Agent Editor agents)
- Runtime agent configuration (for non-Agent Editor agents)
- Shared agent infrastructure

### ConversationalUI

Module providing:

- Chat UI components (pages, snippets, widgets)
- `ChatContext` entity for chat sessions
- Token consumption monitor
- Traceability features
- "New Chat for Agent" action

### MCP Client

Module for connecting to MCP servers:

- MCP protocol implementation
- Tool calling infrastructure
- Server discovery and validation

### Mendix Cloud GenAI Connector

Module for connecting to Mendix Cloud GenAI:

- Text generation API calls
- Knowledge base retrieval

### OpenAI Connector

Module for connecting to Azure and OpenAI-like GenAI providers:

- Text generation API calls