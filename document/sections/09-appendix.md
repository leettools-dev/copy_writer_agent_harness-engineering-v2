Appendix: provider comparison (expanded draft)

Purpose: compact, sourced table for the provider rows cited in the Provider Landscape (section 03). This table collects verifiable traction signals (GH stars, forks, dependents when available), hosting model, and primary source links (accessed 2026-03-21). Gaps are explicitly called out below and prioritized for a short follow-up pass.

Notes on method: all GH metrics are taken from the repository front pages (stars, forks, dependents) and vendor pages were used for hosting/pricing/funding claims. Access date for all links below: 2026-03-21.

| Provider | Category | GH stars | Forks | Used-by / dependents | Funding / notable rounds | Hosting model | Primary source(s) (accessed 2026-03-21) |
|---|---|---:|---:|---:|---|---|---|
| LangChain | Agent framework / developer platform | 130k | 21.5k | Used-by 278k (dependents) | Series B announced Oct 20, 2025 (LangChain blog) | OSS (LangChain) + LangSmith (hosted observability/evals) | https://github.com/langchain-ai/langchain (2026-03-21); https://www.langchain.com/langsmith (2026-03-21) |
| LlamaIndex | RAG / document-agent framework | 47.8k | 7.1k | (network dependents page) | Series A announced Mar 4, 2025 (company blog) | OSS + LlamaParse / LlamaCloud (hosted document-agent) | https://github.com/run-llama/llama_index (2026-03-21); https://llamaindex.ai/ (2026-03-21) |
| Langfuse | Observability / LLM traces & evals | 23.5k | 2.4k | (select dependents list shown on repo) | Seed $4M (Nov 7, 2023) — company blog | Self-host (open-source) + Langfuse Cloud (managed) | https://github.com/langfuse/langfuse (2026-03-21); https://langfuse.com (2026-03-21) |
| OpenAI Evals | Eval framework & registry | 18k | 2.9k | N/A (registry-style project) | Platform-integrated product (OpenAI) — not VC-funded standalone | OpenAI-hosted + OSS runner | https://github.com/openai/evals (2026-03-21); https://platform.openai.com/docs/guides/evals (2026-03-21) |
| Chroma | Vector DB / embeddings infra | 26.7k | 2.1k | N/A | OSS-first; Chroma Cloud (hosted) — company pages | OSS + Chroma Cloud | https://github.com/chroma-core/chroma (2026-03-21); https://trychroma.com/ (2026-03-21) |
| Milvus | Vector DB (enterprise / OSS) | 43.4k | 3.9k | N/A | OSS project (LF AI & Data) + Zilliz / Zilliz Cloud managed offering | OSS + Zilliz Cloud managed | https://github.com/milvus-io/milvus (2026-03-21); https://milvus.io/ (2026-03-21) |
| Weaviate | Vector DB with agent features | N/A (vendor site primary) | N/A | N/A | Managed cloud + dedicated cloud (enterprise modules) | Weaviate Cloud (shared/dedicated) + self-host | https://weaviate.io/ (2026-03-21) |
| Pinecone | Managed vector DB (SaaS) | N/A (not GH-focused) | N/A | N/A | Multiple funding rounds historically; enterprise case studies (Gong, Vanguard) | Managed SaaS (serverless) + BYOC preview | https://www.pinecone.io/ (2026-03-21) |
| Promptfoo | Eval / prompt testing & red-teaming | 17.8k | 1.5k | Used-by ~317 (dependents) | OSS; March 2026 update: joined/partnered with OpenAI (see README/blog) | OSS CLI + CI integrations (private/local evals) | https://github.com/promptfoo/promptfoo (2026-03-21); https://www.promptfoo.dev/ (2026-03-21) |
| Weights & Biases (W&B) | Model experiment tracking / observability | N/A (vendor pages) | N/A | N/A | Mature SaaS with enterprise contracts; press/partnerships need capture | Hosted SaaS + enterprise | https://wandb.ai/ (capture pending — research gap) |


Priority notes and research gaps (next pass):
- Gather "used-by" (dependents) counts where the GitHub network dependents page gives an accurate signal (e.g., LangChain, Promptfoo). For vendor pages that are not GH-centric (Pinecone, Weaviate, W&B), capture press links and customer case study pages (exact URLs + dates).
- Capture precise funding links and amounts for Pinecone and W&B (press/Crunchbase/press releases). LangChain / LlamaIndex funding links already referenced in main research notes but should be copied into the appendix CSV for easy reference.
- Add ~10–12 additional vendors to reach top-20 coverage (examples: Flowise/Langflow, HuggingFace/Inference, Anthropic platform features, Replicate, Ollama, OpenSearch/Elasticsearch RAG adapters, Dify/Quivr/Quiver, Autogen/DeepAgents, Flowise) — each row must have at least one primary-source link.

Table portability: I will produce a CSV-ready version of the table (columns: provider,category,gh_stars,forks,dependents,funding,hosting,primary_sources) in the next pass if you want me to. I will only populate cells where primary sources exist and will explicitly mark missing cells as "N/A (research gap)".

How this appendix supports section completion:
- The Provider Landscape (section 03) cites multiple vendors by category. The appendix must contain primary-source links for each vendor and traction signals so readers can verify claims and the report can satisfy the evidence requirement. Filling the top-20 providers with sourced cells is the final high-leverage step to convert the Provider Landscape from "done" (narrative) to defensible (source-backed).

Suggested next action (approved by default unless you tell me not to):
- Run focused webfetches to fill the remaining cells for: Pinecone (funding + case studies), Weaviate (customer logos/case studies), W&B (press/M&A links), plus 8–10 additional vendors to reach a top-20 appendix table. Produce both a Markdown appendix (this file) and a CSV under /workspace/data/public/provider_table.csv. This will complete the appendix and allow marking it Done.

Research provenance: all links above were accessed programmatically from public pages on 2026-03-21. If you want me to proceed, I'll fetch the precise press links and produce the CSV output next.
