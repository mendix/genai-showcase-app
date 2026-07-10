---
name: genaicommons
description: Invoke LLMs programmatically using the GenAI Commons module for text generation, image generation, embeddings, and knowledge base operations. Use when building custom GenAI logic without Agents or when advanced configuration is needed.
---

# GenAI Commons Module Guide

Reference for programmatic GenAI operations in Mendix applications.

## Overview

GenAI Commons is a foundational Mendix marketplace module providing:

- **LLM invocation**: Request preparation and response processing for chat completions
- **Image generation**: Create images from text prompts
- **Embeddings**: Generate vector representations of text
- **Knowledge base operations**: Chunk management and retrieval for RAG

**When to use GenAI Commons directly**:
- Building custom GenAI logic without using Agents
- Advanced configuration (stop sequences, metadata, custom options)
- Creating your own connector based on GenAI Commons principles

**When Agents handle it internally**:
- Agent Commons and Agent Editor operations manage Request/Response automatically
- Tools and knowledge bases are applied without manual configuration
- Use Agents unless you need programmatic control

## Connector Integration

GenAI Commons works through connector modules (OpenAI, Amazon Bedrock, Mendix Cloud GenAI, etc.). Connectors:
- Create specializations of DeployedModel entity
- Set the Microflow attribute via dependency injection
- Execute operations when GenAI Commons actions are called

This allows switching connectors without changing application logic.

## Use Case 1: LLM Invocation

**When to use**: Building custom chat or text generation flows without Agents, or when you need control over request construction and response handling.

### Key Operations

**Request_Create**: Starting point for building an LLM request; associates the Request with a `DeployedModel`.

**Request_AddMessage**: Add messages chronologically to build conversation history (user, assistant, system, or tool roles).

**Request_AddStopSequence**: Advanced — halt generation at specified text patterns. Useful for structured output like JSON or XML.

**ChatCompletions_WithHistory**: Executes the LLM call for a fully-built Request, routing to the configured connector.

**ChatCompletions_WithoutHistory**: Single-turn convenience action — takes a message string and optional system prompt, no Request setup needed. Ideal for one-shot task calls.

### Response Processing

After calling ChatCompletions, the returned `GenAICommons.Response` object contains:
- `ResponseText` attribute — the generated text content
- `StopReason` attribute — why generation ended (e.g. `EndTurn`, `MaxTokens`, `ToolUse`)
- `TotalTokens`, `InputTokens`, `OutputTokens` attributes — token counts for cost tracking

### Advanced Configuration

**Stop Sequences**: Control generation boundaries by specifying text patterns that halt generation.

**File Attachments**: Add FileCollection to messages for vision and document analysis with capable models.

**Settings**: Configure Temperature, MaxTokens, TopP on Request for generation control.

## Use Case 2: Image Generation

**When to use**: Generating images from text prompts programmatically. Requires an image generation model in DeployedModel.

### Key Operations

**ImageOptions_Create**: Configure image generation parameters like width, height, quality, and style before generation.

**ImageGenerations**: Generates images from text prompt using configured options. Returns Response with generated images accessible via associations.

### Image Retrieval

Use Response_GetSingleResponseImage for single image or Response_GetResponseImageList for multiple images.

## Use Case 3: Embeddings and Knowledge Bases

**When to use**: RAG implementations, semantic search, or custom knowledge base operations. Requires an embeddings model and a deployed knowledge base.

### Embeddings Operations

**Embeddings_String**: Embeds a single text string. Returns an `EmbeddingsResponse` containing a ChunkCollection with one chunk plus its vector. Use for query embeddings or single-text operations.

**Embeddings_ChunkCollection**: Generates vector embeddings for text chunks. Input chunks via ChunkCollection, returns chunks with populated vectors.

**When to use**: Before inserting text into knowledge bases, or for custom similarity calculations.

### Knowledge Base Chunk Management

**ChunkCollection_AddKnowledgeBaseChunk**: Creates individual text chunks for knowledge base operations.

**MetadataCollection_CreateAndAddMetadata**: Adds key-value metadata to a chunk for filtered retrieval. Use for multi-tenant scenarios, source tracking, or filtering.

**When to use metadata**: When you need to filter retrieval results beyond semantic similarity.

### Knowledge Base Operations

**Request_AddKnowledgeBaseRetrieval_ConsumedKnowledgeBase**: Semantic search returning most relevant chunks based on query. Use MaxResults and MinSimilarity to control result quality. Optional metadata filtering for advanced scenarios. This will call the connector's retrieval microflow to get relevant chunks.

Other knowledge base operations for inserting, updating, and deleting chunks are provided by individual connectors. See the `mxgenaiconnector` skill for Mendix Cloud GenAI knowledge base operations.

## Common Patterns

### Pattern 1: Basic LLM Call
1. Retrieve `GenAICommons.DeployedModel` from the database (created by the connector during setup — see the connector skill, e.g. `mxgenaiconnector`, for details)
2. Call `ChatCompletions_WithoutHistory` with the model, user message string, and optional system prompt
3. Read `ResponseText` from the returned Response


### Pattern 2: Conversation with History
1. Call `Request_Create` with `DeployedModel` to create a new Request
2. Call `Request_AddMessage` for each past message in chronological order (use role `User` or `Assistant`)
3. Call `Request_AddMessage` for the current user message
4. Call `ChatCompletions_WithHistory` with the Request
5. Read `ResponseText` from the returned Response; persist the assistant message for the next turn

### Pattern 3: Image Generation
1. Create ImageOptions with desired settings (optional)
2. Call ImageGenerations with model, prompt, and options
3. Retrieve image from Response

### Pattern 4: Embeddings Generation
1. Create ChunkCollection and populate with text chunks
2. Call Embeddings_ChunkCollection to generate vectors
3. Use chunks with embeddings for KB insertion or custom similarity

### Pattern 5: Knowledge Base RAG
1. Call `Request_Create` with `DeployedModel`
2. Call `Request_AddKnowledgeBaseRetrieval_ConsumedKnowledgeBase` to configure semantic retrieval on the Request (connector performs the retrieval at call time)
3. Call `ChatCompletions_WithHistory` — the connector retrieves relevant chunks and grounds the response automatically
4. Read `ResponseText` from the returned Response


## Module Dependencies

- **CommunityCommons** - Utility functions
- **Connector module** (Mendix Cloud GenAI, OpenAI, Bedrock, etc.) - One is needed for LLM, image, and embeddings operations. Each connector provides its own DeployedModel specialization and execution implementations.

## Integration Notes

### With Agent Commons
Agents use GenAI Commons internally for Request/Response handling. When using Agents, GenAI Commons operations are called automatically with tools and knowledge bases applied.

### With Conversational UI
Conversational UI uses GenAI Commons for ChatCompletions. `Request_CreateFromChatContext` creates the Request, ChatCompletions is called in the action microflow, and `ChatContext_UpdateAssistantResponse` processes the Response.

### Connector Specializations
Each connector creates specialization of DeployedModel with connector-specific attributes. The Microflow attribute points to connector's implementation, enabling dependency injection pattern for swapping connectors.

## Reference Links

- [GenAI Commons on Mendix Marketplace](https://marketplace.mendix.com/link/component/239448)
- [GenAI Commons Documentation](https://docs.mendix.com/appstore/modules/genai/)
