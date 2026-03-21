Appendix: provider comparison (initial draft)

Purpose: compact, sourced table for the provider rows cited in the Provider Landscape (section 03). This is an initial high-priority extract (top providers we researched). Each row includes provenance links and an access date. Gaps are marked and prioritized for next research passes.

| Provider | GH stars | Forks | Used-by / dependents | Funding / notable rounds | Hosting model | Confidence (evidence) | Primary source(s) (accessed 2026-03-21) |
|---|---:|---:|---:|---|---|---|---|
| LangChain | 130k | 21.5k | 278k dependents | Series B announced Oct 20, 2025 (LangChain blog) | OSS + LangSmith hosted product | High | https://github.com/langchain-ai/langchain (2026-03-21)
| LlamaIndex | 47.8k | 7.1k | 23.7k dependents | Series A (Mar 4, 2025) announced on company blog | OSS + LlamaParse cloud | High | https://github.com/run-llama/llama_index (2026-03-21); https://llamaindex.ai/ (2026-03-21)
| Langfuse | 23.5k | 2.4k | N/A (dependents list partial) | Seed round $4M (Nov 7, 2023) — company blog | Self-host + Langfuse Cloud (managed) | Medium-High | https://github.com/langfuse/langfuse (2026-03-21); https://langfuse.com (2026-03-21)
| OpenAI Evals | 18k | 2.9k | N/A | OpenAI platform integration (product feature, not VC-funded product) | OpenAI-hosted platform + OSS runner | High | https://github.com/openai/evals (2026-03-21); https://platform.openai.com/docs/guides/evals (2026-03-21)
| Pinecone | N/A (not GH-focused) | N/A | N/A | Multiple funding rounds; public customer case studies on site | Managed SaaS (serverless & BYOC preview) | Medium | https://www.pinecone.io/ (2026-03-21)
| Chroma | 26.7k | 2.1k | N/A | Seed / product press (see vendor site) | OSS + Chroma Cloud (hosted) | Medium | https://github.com/chroma-core/chroma (2026-03-21); https://trychroma.com/ (2026-03-21)
| Milvus | N/A (see vendor pages) | N/A | N/A | Enterprise adoption pages (vendor site) | Self-host + enterprise deployments | Medium | (vendor pages — research gap to capture exact GH metrics)
| Weaviate | N/A | N/A | N/A | Product pages list integrations and commercial modules | Self-host + managed | Medium | (vendor pages — research gap)
| Promptfoo | several thousand | N/A | N/A | OSS project (focused tooling) | OSS (CLI/CI) | Medium | https://github.com/promptfoo/promptfoo (2026-03-21)
| Weights & Biases (W&B) | N/A | N/A | N/A | Acquisition / M&A/partnership news (press) | Hosted SaaS + enterprise | Medium | https://wandb.ai/ (press signals in research_notes)

Notes and next steps (for the appendix):
- This table is intentionally short and sourced only for items we fetched in this iteration. Next pass: expand to top ~20 providers, populate exact funding amounts/dates, customer lists and case-study links, GH "used-by" dependents counts, release cadence, and pricing URLs.
- Priority data to collect next: public customer logos/case studies, exact funding rounds (amount + date), "used-by" dependents for OSS projects (GitHub network dependents pages), and hosting/pricing links.
- Target file updates: document/sections/09-appendix.md (company table) and a machine-readable copy under references/knowledge_manifest.json linking each source to section(s) it informs.

Research gaps flagged:
- Milvus / Weaviate: capture GH metrics and enterprise case studies.
- Pinecone: capture funding announcement links and specific customers/case studies to cite.
- W&B: capture precise press links for acquisition / M&A and verify enterprise signals.

If you want, I'll continue immediately by running focused webfetches to fill the remaining columns for the top-20 providers and produce a CSV-ready table for the appendix. This is the highest-leverage next step to convert section 03 from DRAFT → DONE once the per-provider evidence cells are populated.
