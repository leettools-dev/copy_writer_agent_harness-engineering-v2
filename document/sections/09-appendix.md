Appendix: sources, provider table, and comparison matrix notes

Purpose
- Provide the source list, per-provider source links used in earlier sections, a compact provider table for quick reference, and notes about missing data and next steps for completing a formal comparison CSV.

How to read this appendix
- Rows list the best-available primary sources captured in /workspace/references/research_notes.md and the knowledge manifest. Where repo metrics are quoted, the source is the project's GitHub front page as of the listed access date. Vendor case studies are vendor-published and therefore vendor-curated; treat them as indicative unless independently corroborated.

1) Source list (primary captures)
- LangChain (GitHub + LangSmith): https://github.com/langchain-ai/langchain (accessed 2026-03-21)
- LlamaIndex (GitHub + LlamaParse): https://github.com/run-llama/llama_index (accessed 2026-03-21)
- Langfuse (GitHub + website): https://github.com/langfuse/langfuse; https://langfuse.com (accessed 2026-03-21)
- OpenAI Evals (GitHub + docs): https://github.com/openai/evals; https://platform.openai.com/docs/guides/evals (accessed 2026-03-21)
- Chroma (GitHub + Chroma Cloud): https://github.com/chroma-core/chroma; https://trychroma.com/ (accessed 2026-03-21)
- Pinecone (company site + Vanguard case study): https://www.pinecone.io/; https://www.pinecone.io/customers/vanguard/ (accessed 2026-04-02)
- Weaviate (weaviate.io): https://weaviate.io/ (accessed 2026-03-21)
- Milvus / Zilliz Cloud: https://github.com/milvus-io/milvus; https://milvus.io/ (accessed 2026-03-21)
- Promptfoo (GitHub + docs): https://github.com/promptfoo/promptfoo; https://www.promptfoo.dev/ (accessed 2026-03-21)
- Weights & Biases (W&B): https://wandb.ai/ (accessed 2026-03-21)

2) Compact provider table (fields: company / project | product(s) | category | evidence link(s) | captured metrics / traction)

| Provider | Product(s) | Category | Primary evidence (URL; access date) | Captured traction / notes |
|---|---|---|---|---|
| LangChain | LangChain, LangSmith | Agent framework; observability/evals | https://github.com/langchain-ai/langchain (2026-03-21); https://www.langchain.com/langsmith/observability (2026-04-02) | OSS: ~130k stars (GitHub front page capture). LangSmith: hosted observability + self-host options; pricing page and enterprise options available. |
| LlamaIndex | LlamaIndex, LlamaParse | RAG / document agents | https://github.com/run-llama/llama_index (2026-03-21) | OSS: ~47.8k stars. Offers hosted product (LlamaParse). Commercial traction not fully public. |
| Langfuse | Langfuse OSS + Langfuse Cloud | Observability / tracing | https://github.com/langfuse/langfuse; https://langfuse.com (2026-03-21) | OSS: ~23.5k stars. Offers cloud and self-host options; enterprise features unspecified publicly. |
| OpenAI Evals | OpenAI Evals | Eval framework | https://github.com/openai/evals (2026-03-21); https://platform.openai.com/docs/guides/evals (2026-03-21) | OSS: ~18k stars. Integrated into OpenAI platform; supports private evals & CI hooks. |
| Chroma | Chroma OSS + Chroma Cloud | Vector DB / embedding store | https://github.com/chroma-core/chroma (2026-03-21); https://trychroma.com/ (2026-03-21) | OSS: ~26.7k stars. Hosted Chroma Cloud offering. |
| Pinecone | Pinecone Vector DB | Managed vector DB / enterprise | https://www.pinecone.io/; https://www.pinecone.io/customers/vanguard/ (2026-04-02) | Vendor case study (Vanguard) describing enterprise deployment, security controls, and measurable retrieval accuracy improvements (vendor-reported). |
| Weaviate | Weaviate Cloud / OSS | Vector DB / agents | https://weaviate.io/ (2026-03-21) | Cloud, dedicated and self-host options; partner integrations listed on site. |
| Milvus (Zilliz) | Milvus OSS / Zilliz Cloud | Vector DB | https://github.com/milvus-io/milvus (2026-03-21); https://milvus.io/ | OSS: ~43.4k stars. Managed Zilliz Cloud offering. |
| Promptfoo | Promptfoo (CLI/CI) | Eval & testing | https://github.com/promptfoo/promptfoo (2026-03-21); https://www.promptfoo.dev/ | OSS: ~17.8k stars. Focused on CLI/CI eval workflows; announced collaboration notes in README. |
| Weights & Biases | W&B experiment tracking | Experiment tracking / model ops | https://wandb.ai/ (2026-03-21) | Mature commercial product with enterprise customers; press and partnership signals to be captured for appendix. |

Notes on table construction and data gaps
- Numbers above are copied from captured research notes and GitHub front pages on the listed access dates. Where vendor case studies appear (Pinecone), the metrics are vendor-reported and should be triangulated when possible.
- Missing fields to complete a full comparison CSV: funding amounts, public customer lists (beyond vendor case studies), exact enterprise pricing tiers, GitHub dependents/used-by counts for OSS (some captured in research notes but not systematically), and press/funding signals for hosted products.

3) Suggested next steps to complete appendix -> comparison matrix
- Priority: Automate scraping of the top-20 provider rows into CSV columns: (name, product, category, OSS? yes/no, GitHub stars, forks, dependents, used-by, hosted offering? yes/no, enterprise features cited, notable case studies / customers, funding / press links, official docs URL). Use leet_webfetch/leet_websearch per provider and store results into /workspace/data/private/provider_matrix.csv.
- Short-term manual fills (done): the rows above were populated from /workspace/references/research_notes.md.
- Interviews & case studies: add 6–10 short interview notes and 2–3 engineering postmortems into research_notes.md and cite them here.

4) Citation policy and provenance
- Keep each appendix table row linked to the specific source capture file under /workspace/references/source_captures/ when available. Do not add vendor claims to the main report without the matching capture link.
- Mark vendor-reported case study claims explicitly as "vendor-reported" in the table until independent corroboration is added.

5) Current status
- Appendix file populated with compact provider table and source links drawn from captured research notes. The appendix is not complete; next high-leverage work is an automated provider-metrics scrape and targeted interview plan.

6) Who should do what next
- Research lead (assistant): run the automated provider scrape and populate /workspace/data/private/provider_matrix.csv; then update this appendix with full per-row links.
- Product lead (user): approve interview targets and share any internal case studies that can be redacted and cited.


---
Generated: 2026-04-02 (assistant automated update)
