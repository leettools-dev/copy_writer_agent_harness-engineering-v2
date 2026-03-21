Provider landscape — initial comparison matrix

This is an initial, evidence-backed provider table to seed the provider comparison matrix. Columns: Provider | Category | OSS stars | Forks | Used-by / dependents | Hosting model | Key differentiator | Primary source

| Provider | Category | OSS stars | Forks | Used-by / dependents | Hosting model | Key differentiator | Primary source |
|---|---:|---:|---:|---:|---|---|---|
| LangChain | Agent framework / orchestration | ~130k | ~21.5k | ~278k dependents | OSS (Python) + LangSmith commercial products | Ubiquitous developer-facing abstractions for agents, large ecosystem of integrations; distribution channel for harness tooling | https://github.com/langchain-ai/langchain |
| LlamaIndex | RAG / document agent framework | ~47.8k | ~7.1k | ~23.7k dependents | OSS + LlamaParse (cloud document-agent product) | Focused on document ingestion, connectors, and document-agent primitives; explicit cloud product (LlamaParse) | https://github.com/run-llama/llama_index |
| Langfuse | Observability / LLM ops platform | ~23.5k | ~2.4k | (projects list / dependents shown on repo) | OSS (self-host) + Langfuse Cloud (hosted SaaS) | Purpose-built tracing, evals, and prompt management with many integrations (LangChain, LlamaIndex, OpenTelemetry) | https://github.com/langfuse/langfuse and https://langfuse.com |
| OpenAI Evals | Evaluation framework & registry | ~18k | ~2.9k | n/a | OSS registry + integrated into OpenAI platform/dashboard | Canonical evaluation harness and public registry; integrated private-eval options and platform support | https://github.com/openai/evals and https://platform.openai.com/docs/guides/evals |

Notes and immediate next actions
- This is a seed table covering the highest-priority OSS projects identified in the executive summary and research notes. It is intentionally compact; next iteration will expand columns (pricing/monetization, enterprise features, funding/traction signals, release cadence).
- Sources: repo front pages and READMEs (links in the table). Star/fork counts taken from GitHub front pages on 2026-03-21.

Planned expansion (next): add commercial vendors and infra projects (Weights & Biases, Weights & Biases model monitoring; Promptfoo; PromptLayer/Promptable; Vector DBs like Pinecone/Chroma/Milvus; observability competitors; cloud vendor offerings), capture funding/customer signals, and produce a sortable CSV for the appendix.

(Section status: initial draft for provider landscape; will move toward 'draft' when full comparison matrix populated.)
