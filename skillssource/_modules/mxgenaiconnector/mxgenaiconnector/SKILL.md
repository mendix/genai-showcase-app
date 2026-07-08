---
name: mxgenaiconnector
description: Integrate with Mendix Cloud GenAI Resources hosted by Mendix using the Mendix Cloud GenAI Connector for text generation, embeddings, and knowledge base operations. Use when setting up a connector, retrieving a DeployedModel, or working with Mendix-managed knowledge bases.
---

# Mendix Cloud GenAI Connector Guide

Reference for Mendix-hosted GenAI operations in Mendix applications.

## Overview

Mendix Cloud GenAI Connector provides drag-and-drop GenAI integration via Mendix-hosted resources:

- **Text generation**: Chat completions with function calling, vision, and document analysis
- **Embeddings**: Vector generation for semantic operations
- **Knowledge bases**: Managed storage and retrieval for RAG patterns

**When to use this connector**:
- Building apps with Mendix Cloud GenAI resource packs
- Mendix-hosted infrastructure preferred over direct API access
- Simplified key management via Mendix Cloud GenAI Portal

**Key differences from other connectors**:
- Mendix-hosted service (no direct OpenAI/Bedrock API keys)
- Billing through Mendix
- Managed knowledge base service included
- Configuration keys from genai.home.mendix.com

## Configuration Setup

### Initial Configuration

1. Generate configuration keys at **genai.home.mendix.com**
2. Set **EncryptionKey** constant (32-character random string) in Studio Pro
3. Add **MxGenAIConnector.Administrator** role to admin users
4. Import keys via Configuration_Overview page or Configuration_RegisterByString microflow
5. Test connectivity using Test Key button

### DeployedModel Access

`MxGenAIConnector.DeployedModel` objects (a specialization of `GenAICommons.DeployedModel`) are created automatically when importing keys. Retrieve them from the database using XPath on `MxGenAIConnector.DeployedModel` — filter by `ModelType` attribute if you need a specific type (e.g. text generation vs. embeddings). Pass the retrieved object to GenAI Commons operations or select in Agent builder pages (Agent Commons). A single key provides access to all enabled models on the resource.

## Text Generation

**When to use**: Chat completions, conversational AI, function calling, vision analysis, or document processing.

### Capabilities

**Chat Completions**: Standard text generation with conversation history via GenAI Commons ChatCompletions operations.

**Function Calling**: LLMs autonomously decide when to invoke predefined microflows. Microflows run in current user context without entity access enforcement—use $currentUser in XPath for security.

**Vision Support**: Process up to 20 images per request (max 3.75 MB each, up to 8000×8000 pixels). Attach via FileCollection.

**Document Chat**: Analyze up to 5 documents per request (max 4.5 MB each, ~100 pages typical). Supported formats: PDF, CSV, DOC, DOCX, XLS, XLSX, HTML, TXT, MD.

### Integration with GenAI Commons

Text generation uses GenAI Commons ChatCompletions_WithHistory and ChatCompletions_WithoutHistory operations. DeployedModel from this connector routes execution to Mendix Cloud GenAI service.

## Embeddings

**When to use**: Generating vector representations of text for semantic search, clustering, classification, or knowledge base operations.

### Key Operations

Embeddings operations are provided by GenAI Commons, not this connector. Use a `DeployedModel` of type embeddings from this connector with:

- `GenAICommons > USE_ME > Embeddings_String` — embed a single text string (query embeddings / single-text operations)
- `GenAICommons > USE_ME > Embeddings_ChunkCollection` — batch-embed multiple chunks in one call (more efficient for bulk operations)

See the `genaicommons` skill for embeddings details.

## Knowledge Base Operations

**When to use**: RAG implementations with Mendix-managed vector storage. Knowledge bases support collections, metadata filtering, and semantic retrieval.

### DeployedKnowledgeBase

`MxGenAIConnector.DeployedKnowledgeBase` represents a configured Mendix Cloud GenAI knowledge base resource. Created automatically when importing keys. Retrieve from the database using XPath on `MxGenAIConnector.DeployedKnowledgeBase`. Pass together with a collection name string to knowledge base operations.

### Insertion Operations

**ChunkCollection_Embed_Insert**: `MxGenAIConnector > USE_ME > ChunkCollection_Embed_Insert` — Add chunks to an existing collection. Embeddings generated automatically.

**ChunkCollection_Embed_RepopulateCollection**: `MxGenAIConnector > USE_ME > ChunkCollection_Embed_RepopulateCollection` — Clear a collection and insert fresh chunks. Use for full data refresh.

**ChunkCollection_Embed_Replace**: `MxGenAIConnector > USE_ME > ChunkCollection_Embed_Replace` — Replace specific chunks by identifier. Use for incremental updates.

**Chunk Requirements**:
- Maximum 2048 characters per chunk
- Recommended ~1500 characters with overlap for longer texts
- Chunks available for retrieval within 60-120 seconds after insertion

### Retrieval Operations

**KnowledgeBaseChunkList_Retrieve**: `MxGenAIConnector > USE_ME > KnowledgeBaseChunkList_Retrieve` — Access chunks with optional pagination and metadata filtering. Use for browsing or filtered access.

**KnowledgeBaseChunkList_Retrieve_SetAssociation**: `MxGenAIConnector > USE_ME > KnowledgeBaseChunkList_Retrieve_SetAssociation` — Link returned chunks to Mendix objects for relationship tracking.

**KnowledgeBaseChunkList_Embed_RetrieveNearestNeighbors**: `MxGenAIConnector > USE_ME > KnowledgeBaseChunkList_Embed_RetrieveNearestNeighbors` — Semantic search via cosine similarity. Query is embedded automatically and matched against stored chunks; tune result quality with max results and min similarity.

**Metadata Filtering**: Add `GenAICommons.MetadataCollection` key-value pairs to chunks via `GenAICommons > USE_ME > MetadataCollection_CreateAndAddMetadata` for fine-grained separation (tenant isolation, source tracking, date filtering).

### Collections

Organize chunks into logical groupings within a knowledge base resource. Pass the collection name as a `String` parameter to each knowledge base operation. Each collection maintains a separate vector index.

## RAG Pattern with Tools

Add knowledge bases as internal tools using `GenAICommons > USE_ME > Request_AddKnowledgeBaseRetrieval_ConsumedKnowledgeBase`. The LLM autonomously decides when to invoke retrieval based on conversation context. Use with Agents or programmatic tool configuration.

## Configuration Management

### Configuration Overview Page

Add **Configuration_Overview** to navigation.

### Configuration Snippet

Use **Snippet_Configuration** for embedding configuration UI into custom pages.

### Configuration Actions

**Configuration_RegisterByString**: Import keys programmatically via microflow.

## Model Access

Single configuration key provides access to all enabled model versions on the resource. No key rotation needed when new versions are added—models become available automatically.

## Security Considerations

### Function Calling Security

Function microflows run in current user context **without enforcing entity access rules**. Always use $currentUser in XPath queries to enforce proper data access. Implement user confirmation for sensitive actions (emails, purchases, data modifications).

### Encryption

EncryptionKey constant must be set for secure credential storage. Use 32-character random string.

## Technical Requirements

### Dependencies

- **GenAICommons** - Base operations
- **Encryption** - Secure storage
- **CommunityCommons** - Utility functions

### Studio Pro Version

Requires **Studio Pro 11.12+** (Agents Kit 2 compatible).

## Common Patterns

### Pattern 1: Text Generation with Vision

1. Retrieve `MxGenAIConnector.DeployedModel` from the database
2. Create `GenAICommons.FileCollection` and add images via `GenAICommons > USE_ME > FileCollection_AddFile`
3. Call `GenAICommons > USE_ME > ChatCompletions_WithoutHistory` with the model, user message, optional system prompt, and the FileCollection
4. Read `ResponseText` from the returned `GenAICommons.Response`

### Pattern 2: Knowledge Base Insertion

1. Retrieve `MxGenAIConnector.DeployedKnowledgeBase` from the database
2. Create `GenAICommons.ChunkCollection` and add chunks via `GenAICommons > USE_ME > ChunkCollection_AddKnowledgeBaseChunk`
3. Optionally add metadata to chunks via `GenAICommons > USE_ME > MetadataCollection_CreateAndAddMetadata`
4. Call `MxGenAIConnector > USE_ME > ChunkCollection_Embed_Insert` with the DeployedKnowledgeBase, collection name, and ChunkCollection
5. Chunks are available for retrieval within 60-120 seconds

## Integration with Agent Commons

Mendix Cloud GenAI models work seamlessly with Agent Commons and Agent Editor. Configure DeployedModel on Agent Version or use in ChatContext for Conversational UI action microflows.

## Reference Links

- [Mendix Cloud GenAI Connector on Marketplace](https://marketplace.mendix.com/link/component/239449)
- [Mendix Cloud GenAI Portal](https://genai.home.mendix.com/)
- [Mendix Cloud GenAI Documentation](https://docs.mendix.com/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/)
