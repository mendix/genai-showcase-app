---
name: agenteditor
description: Guide for all tasks related to GenAI agents in Studio Pro, including creating, configuring, deploying, troubleshooting, and integrating agents. Use whenever a request mentions agents, AI agents, assistants, models, knowledge bases, MCP services, agent workflows, or agent integration. This document describes current features and limitations what users and development agents can do with the functionalities.
---

# Agent Editor Workflow Guide

Quick reference for using Agent Editor in Studio Pro 11.12.0+ to define, test, and deploy GenAI agents.

_See [GLOSSARY](references/GLOSSARY.md) for detailed term definitions and technical details._

## Document Types

Agent Editor provides four document types (add via Add other menu at module level):

- **Model**: Links to Mendix Cloud GenAI text generation resource
- **Agent**: Defines prompts, tools, knowledge bases, and settings
- **Knowledge Base**: Configures RAG (retrieval-augmented generation)
- **Consumed MCP Service**: Connects to external MCP tool servers

## Configuration Workflow

### 1. Define Model (Required)

- Create Model document
- Set necessary constants: provider Mendix Cloud GenAI needs a resource key; provider Azure (AI Foundry) needs a Project endpoint and an API key.
- Click "List Models" to validate

### 2. Define Agent (Required)

- Create Agent document, select Model
- Write System prompt (use `{{placeholders}}` for dynamic values)
- Select Context entity if using placeholders
- Optional: Configure model settings (max tokens, temperature, TopP)

### 3. Add Tools (Optional)

- **Microflow tools**: Select microflow returning String, add Name/Description
- **MCP tools**: Create Consumed MCP Service first, configure endpoint/credentials
- Use Active checkbox to enable/disable during testing

### 4. Add Knowledge Bases (Optional)

- Create Knowledge Base document
- Link to agent, select collection
- Add Name/Description for LLM to understand when to use it
- Configure Max results and Min similarity threshold

### 5. Test

- Switch to Playground mode (top right switcher)
- Requires: app running locally, no errors, after-startup configured
- Click Test button, review Console logs
- Iterate: edit in Build mode → restart app → test in Playground

### 6. Integrate

**For Microflows:**

- Use **"Call Agent without History"** for task agents (single call)
- Use **"Call Agent with History"** for chat agents (multiple messages)
- Pass context object when using placeholders

**For Conversational UI:**

- Use **"New Chat for Agent"** to create a ChatContext for the selected Agent
- Pass chat context to conversational UI snippets or pages
- Enables multi-turn conversations with history

### 7. Deploy

- Agent documents deploy with app model
- Override constants per environment (keys, endpoints)

## Prompts and Placeholders

### System Prompt (Required)

Defines agent behavior, personality, and capabilities.

### User Prompt (Optional)

Template for task-style execution with placeholders.

### Placeholders

Use `{{attributeName}}` syntax - must match Context entity attribute names exactly.

**Example:**

```
System: "You are a {{role}} assistant for {{companyName}}."
Context Entity: ServiceContext with attributes: role, companyName
```

## Agent Modes

Switch between modes in top right corner of Agent Editor:

**Build Mode**: Configure prompts, tools, knowledge bases, settings

**Playground Mode**: Test interactively

- Requires running app
- Test one shot task agents or multi-turn chat agents
- See real-time tool calls and responses

## Common Patterns

**Task Agent**: System + User prompts, optional multiple tools and KBs
**Chat Agent**: System prompt only, optional multiple tools and KBs

## Troubleshooting Quick Reference

| Issue                                                   | Solution                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Playground not available                                | Start app locally                                                            |
| Test button disabled                                    | Deploy app locally after changes; ensure agent documents synchronized        |
| Test results in error                                   | Check Console pane for details; verify model config and after-startup logic  |
| App does not start locally                              | Set encryption key; verify all constants have valid values                   |
| Agent documents not visible in Agent Commons runtime UI | Verify ASU_AgentEditor is configured as after-startup microflow; restart app |
| MCP tools cannot be listed                              | Verify endpoint constant, protocol version, credentials microflow            |
| MCP tools fail at runtime                               | Check Console pane; verify endpoint reachable; check /agenteditor logs       |
| No KB collections listed                                | Verify Knowledge base key constant and connectivity                          |
| Extension not loaded after install                      | Restart Studio Pro; check View > Extensions to confirm loaded                |
| Consistency check timeout error                         | Sync app directory (F4) or make small change to any agent document           |

## First-Time Setup

After installing Agent Editor from Marketplace:

1. Add `/agenteditor` to `.gitignore` (not excluded automatically)
2. Set 32-character encryption key (App > Settings > Configuration)
3. Set `ASU_AgentEditor` as after-startup microflow (App > Settings > Runtime)
4. Install all required dependencies
   - View compatible versions: Extensions menu > Agent Editor > Compatibility
   - Opens module dependency overview showing required modules and compatible versions
6. Create constants for keys or endpoints required fo

## Module Usage Rules

**CRITICAL: Agent Editor Commons is Read-Only**

### What You CAN Do

- **Reuse logic from the USE_ME folder**: Copy patterns, reference examples, and use template agents from the USE_ME folder
- **Call the documented toolbox actions**: Use "Call Agent without History" and "Call Agent with History" actions in your microflows
- **Use the documented domain model entities**: Work with `Response`, `Request`, and other GenAI Commons entities


### What You CANNOT Do

- **Modify Agent Editor Commons logic**: Do NOT change any microflows, pages, or logic within the Agent Editor Commons module
- **Use private folder logic**: Do NOT call or reference any microflows, entities, or logic from private folders
- **Extend the module directly**: Do NOT add custom logic to the Agent Editor Commons module
- **Create Agent documents**: In the current version you cannot create your own agents using the Agent Editor extension

### Extension Pattern

If you need to extend or customize Agent Editor functionality:

1. Create a separate module in your app (e.g., `MyCustomAgents`)
2. Import or reference only the documented toolbox actions and domain model from Agent Editor Commons
3. Implement your custom logic in your own module
4. Use agents and microflows from the USE_ME folder as templates, but implement them in your module

This separation ensures:

- Your customizations survive module updates
- Module upgrades don't break your custom logic
- Clear separation between platform code and application code
- Compliance with Mendix module development best practices

## Limitations

- Only providers Mendix Cloud GenAI and Azure (AI Foundry) are currently supported (more providers planned)
- Mac support limited
- MCP whole-server only (no individual tool selection yet)
- Tool Choice "Tool" only for microflows currently

## Reference Links

Access helpful resources via **Extensions menu > Agent Editor > Onboarding** in Studio Pro.

- [Agent Editor Docs](https://docs.mendix.com/agents/genai-for-mx/agent-editor/)
- [Detailed Glossary](references/GLOSSARY.md)
