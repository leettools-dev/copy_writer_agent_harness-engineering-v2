Appendix: sources and comparison matrices

This appendix collects primary-source links, short notes, and the provider/company table used to support claims in the report. Use these links when populating persona rows, provider comparison matrices, and case-study extracts.

# Source list (primary captures)
- LangChain (GitHub & LangSmith product)
  - Repo: https://github.com/langchain-ai/langchain
  - Observability: https://www.langchain.com/langsmith/observability
  - Note: OSS leader for agent frameworks; LangSmith commercial observability/eval product.

- LlamaIndex (GitHub / LlamaParse)
  - Repo: https://github.com/run-llama/llama_index
  - Note: OSS RAG/document agent framework; has hosted features (LlamaParse).

- Langfuse (OSS + Cloud)
  - Repo: https://github.com/langfuse/langfuse
  - Site: https://langfuse.com
  - Note: Open-source observability/tracing for LLM workloads; cloud offering + SDKs.

- OpenAI Evals
  - Repo & docs: https://github.com/openai/evals
  - Docs: https://platform.openai.com/docs/guides/evals
  - Note: Canonical eval framework with private evals, CI examples, and registry patterns.

- Promptfoo
  - Repo: https://github.com/promptfoo/promptfoo
  - Note: Lightweight, developer-friendly eval/test tooling used in many engineering flows.

- Pinecone (vector database; enterprise case study)
  - Case study (Vanguard): https://www.pinecone.io/customers/vanguard/
  - Site: https://pinecone.io
  - Note: Demonstrates BYOC/dedicated cluster enterprise patterns and metadata filtering for compliance.

- Chroma DB
  - Site / repo: https://www.trychroma.com
  - Note: Popular open-source/commercial vector store used in many RAG stacks.

- Weaviate
  - Site: https://weaviate.io
  - Note: Vector DB with hybrid search and enterprise features.

- Milvus
  - Site / repo: https://milvus.io
  - Note: Open-source vector database with cloud offerings and enterprise support.

- W&B (Weights & Biases)
  - Site: https://wandb.ai/
  - Note: Experiment tracking and reproducibility tooling used by applied researchers.

- Additional vendor/OSS captures mentioned in the notes
  - Chroma, Promptfoo, Weaviate, Milvus, W&B (see research_notes.md for per-source entries)

# Provider / company quick table
| Company | Product(s) | Category | Source URL | Short evidence / traction notes |
|---|---:|---|---|---|
| LangChain | LangChain (OSS), LangSmith | Agent framework; observability/evals | https://github.com/langchain-ai/langchain, https://www.langchain.com/langsmith/observability | ~130k GH stars (langchain); LangSmith product shows enterprise features (self-host, BYOC). |
| LlamaIndex | LlamaIndex (OSS), LlamaParse | RAG/document agents | https://github.com/run-llama/llama_index | ~47.8k GH stars; commercial cloud parsing/agent features in LlamaParse. |
| Langfuse | Langfuse (OSS), Langfuse Cloud | Observability / tracing | https://github.com/langfuse/langfuse, https://langfuse.com | ~23.5k GH stars; focused on trace schema and integrations. |
| OpenAI | Evals; platform APIs | Eval framework; model provider | https://github.com/openai/evals, https://platform.openai.com | Evals repo ~18k stars; integrated to OpenAI platform. |
| Pinecone | Vector DB | Vector database (managed) | https://pinecone.io, https://www.pinecone.io/customers/vanguard/ | Enterprise case studies (Vanguard) showing BYOC/dedicated deployments and compliance work. |
| Promptfoo | Promptfoo | Developer eval tooling | https://github.com/promptfoo/promptfoo | Lightweight eval tooling used in CI. |
| Chroma | Chroma DB | Vector store | https://www.trychroma.com | Widely used OSS/commercial vector-store. |
| Weaviate | Weaviate | Vector store | https://weaviate.io | Enterprise features and hybrid search. |
| Milvus | Milvus | Vector store | https://milvus.io | Open-source with cloud options. |
| W&B | Weights & Biases | Experiment tracking | https://wandb.ai | Standard for experiment tracking/reproducibility in ML. |

# Persona & evidence cross-reference (where to find supporting links)
- AI app engineers: LangChain repo (https://github.com/langchain-ai/langchain); LlamaIndex (https://github.com/run-llama/llama_index); observability products LangSmith & Langfuse (links above).
- Platform / infra engineers: Langfuse site (https://langfuse.com); LangSmith observability (https://www.langchain.com/langsmith/observability); Pinecone Vanguard case study (https://www.pinecone.io/customers/vanguard/).
- Product Managers: OpenAI Evals (https://github.com/openai/evals); Promptfoo (https://github.com/promptfoo/promptfoo).
- Evaluation / QA: OpenAI Evals (https://github.com/openai/evals); Promptfoo (https://github.com/promptfoo/promptfoo).
- Security / Compliance: Pinecone case study; Langfuse / LangSmith enterprise docs (links above).
- Applied researchers: W&B (https://wandb.ai); OpenAI Evals (https://github.com/openai/evals).
- Support / Ops: Langfuse / LangSmith session replay docs (links above).

# Appendix next steps (to complete before marking JTBD section DONE)
1) Add 2–3 independent engineering blogposts or postmortems demonstrating observability/eval tooling preventing incidents or reducing MTTR. Suggested searches: "Langfuse case study", "LangSmith case study", "RAG production postmortem", "LLM incident postmortem".
2) Populate provider comparison matrix with GH metrics, funding/traction signals, pricing notes, and enterprise features (use research_notes.md rows as the primary source).
3) Add access dates for every URL above and short excerpted quotes where used in the main sections.

Last updated: 2026-04-02T14:30:00+00:00
