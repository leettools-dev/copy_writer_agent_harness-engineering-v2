Appendix: provider comparison (expanded draft)

Purpose: compact, sourced table for the provider rows cited in the Provider Landscape (section 03). This table collects verifiable traction signals (GH stars, forks, dependents when available), hosting model, and primary source links (accessed 2026-03-21 and 2026-04-01). Gaps are explicitly called out below and prioritized for a short follow-up pass.

Notes on method: all GH metrics are taken from the repository front pages (stars, forks, dependents) and vendor pages were used for hosting/pricing/funding claims. Access date for all links below: 2026-03-21 except where noted.

A CSV version of the provider table has been added at the absolute path: /workspace/data/public/provider_table.csv. The CSV contains initial, sourced rows for the highest-priority providers and will be extended in the next pass to reach a top-20 coverage.

| Provider | Category | GH stars | Forks | Used-by / dependents | Funding / notable rounds | Hosting model | Primary source(s) (access dates) |
|---|---|---:|---:|---:|---|---|---|
| LangChain | Agent framework / developer platform | 130k | 21.5k | Used-by 278k (dependents) | Series B announced Oct 20, 2025 | OSS (LangChain) + LangSmith (hosted observability/evals) | https://github.com/langchain-ai/langchain (2026-03-21); https://www.langchain.com/langsmith (2026-03-21) |
| LlamaIndex | RAG / document-agent framework | 47.8k | 7.1k | (network dependents page) | Series A announced Mar 4, 2025 | OSS + LlamaParse / LlamaCloud (hosted document-agent) | https://github.com/run-llama/llama_index (2026-03-21); https://llamaindex.ai/ (2026-03-21) |
| Langfuse | Observability / LLM traces & evals | 23.5k | 2.4k | (select dependents list shown on repo) | Seed $4M (Nov 7, 2023) | Self-host (open-source) + Langfuse Cloud (managed) | https://github.com/langfuse/langfuse (2026-03-21); https://langfuse.com (2026-03-21) |
| OpenAI Evals | Eval framework & registry | 18k | 2.9k | N/A (registry-style project) | Platform-integrated (OpenAI) — product docs | OSS runner + OpenAI platform | https://github.com/openai/evals (2026-03-21); https://platform.openai.com/docs/guides/evals (2026-03-21) |
| Chroma | Vector DB / embeddings infra | 26.7k | 2.1k | N/A | OSS-first; Chroma Cloud (hosted) — company pages | OSS + Chroma Cloud | https://github.com/chroma-core/chroma (2026-03-21); https://trychroma.com (2026-03-21) |
| Pinecone | Vector DB / retrieval infra | N/A | N/A | N/A | $100M Series B (Apr 26, 2023) — led by Andreessen Horowitz (a16z) | Managed SaaS (serverless) + BYOC preview | https://www.pinecone.io/blog/series-b/ (2023-04-26) |
| Milvus | Vector DB (enterprise / OSS) | 43.4k | 3.9k | N/A | OSS project (LF AI & Data) + Zilliz / Zilliz Cloud managed offering | OSS + Zilliz Cloud | https://github.com/milvus-io/milvus (2026-03-21); https://milvus.io/ (2026-03-21) |
| Weaviate | Vector DB with agent features | N/A (vendor site primary) | N/A | N/A | Managed cloud + dedicated cloud (enterprise modules) | Weaviate Cloud (shared/dedicated) + self-host | https://weaviate.io/ (2026-03-21) |
| Promptfoo | Eval / prompt testing & red-teaming | 17.8k | 1.5k | Used-by ~317 (dependents) | OSS; March 2026 update: collaboration with OpenAI referenced in README | OSS CLI + CI integrations (private/local evals) | https://github.com/promptfoo/promptfoo (2026-03-21); https://www.promptfoo.dev/ (2026-03-21) |
| Weights & Biases (W&B) | Model experiment tracking / observability | N/A (vendor pages) | N/A | N/A | Acquired by CoreWeave (announced Mar–May 2025) | Hosted SaaS + enterprise | https://www.coreweave.com/blog/coreweave-completes-acquisition-of-weights-biases (2025-05-05); https://wandb.ai/wandb/wb-announcements (2025-03-05)


Priority notes and research gaps (next pass):
- Expand the CSV to include the remaining top-20 providers with at least one primary-source link per provider. The CSV currently includes initial, high-priority providers and will be extended programmatically.
- Capture precise customer logos / case study links for Pinecone, Weaviate, Chroma Cloud, and W&B where available (press pages, case studies, blog posts).
- For OSS-first projects, add dependents/used-by counts where network pages provide reliable signals.
- Add a separate CSV column for "evidence_confidence" to mark the confidence level (high / medium / low) for each cell.

Table portability: A CSV has been written at /workspace/data/public/provider_table.csv and contains the same initial rows. It is intended for export and consumption in the compiled appendix.

How this appendix supports section completion:
- The Provider Landscape (section 03) cites vendors by category; the appendix now includes a CSV-backed table with initial primary-source citations. Completing the appendinx to top-20 coverage will allow the Provider Landscape and Commercial Moat sections to be explicitly evidence-backed.

Suggested immediate next action (executed now):
- Created /workspace/data/public/provider_table.csv with initial rows and primary-source links for Pinecone funding and W&B acquisition (2026-04-01 programmatic fetches).
- Added a conceptual harness-stack SVG at /workspace/document/figures/01-harness-stack.svg to satisfy the validation requirement for illustrations in main sections.

Suggested follow-up actions (I can execute next):
1) Populate the provider CSV to top-20 by running focused webfetches for each candidate vendor and appending rows. (Estimated: 30–45 minutes for scripted fetches and verification.)
2) Capture per-provider integration hooks (LangChain/LlamaIndex/SDK connectors) for the top-6 providers and add an "integration_hooks.md" under /workspace/references/ to guide SDK engineering effort. (Estimated: 1–2 hours.)
3) Run 2 targeted interviews with platform engineers (recruit via OSS channels or LinkedIn) to validate buyer urgency for observability vs evals vs memory management. (Requires manual outreach.)

Research provenance: the Pinecone Series B blog (Apr 26, 2023) and CoreWeave W&B acquisition announcement (May 5, 2025) were fetched programmatically and their URLs included above. The provider CSV at /workspace/data/public/provider_table.csv mirrors the information recorded here.

(End of appendix update)
