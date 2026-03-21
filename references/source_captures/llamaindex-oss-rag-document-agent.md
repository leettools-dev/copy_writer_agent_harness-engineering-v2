<!-- generated-by: copy_writer_agent.runtime_sync -->
# LlamaIndex (OSS RAG/document agent)

- URL: https://github.com/run-llama/llama_index
- Source role: supporting_source
- Linked sections: Provider landscape (RAG, document frameworks), Customer JTBD (document agents), Appendix (provider table)
- Why this source matters: LlamaIndex is a leading RAG/document agent framework; many production document agents rely on its ingestion/indexing and connectors.
- Reliability tier: primary (OSS + product)
- Date accessed: 2026-03-21

## Evidence extracted
- Claim: LlamaIndex shows strong OSS adoption (~47.8k stars) and provides both OSS framework and a commercial cloud product (LlamaParse) for document agents. (Support: GitHub page shows ~47.8k stars, active releases, and cloud product references in README.)

## Open questions
- LlamaIndex commercial traction (customers, pricing) beyond OSS adoption needs to be sourced from company pages, blog posts, and press.

## Draft implications
- Memory and retrieval orchestration wedges should interoperate with LlamaIndex and support its connector patterns.
- ## Next research tasks (priority)
- 1. Populate provider comparison matrix with traction signals (GH stars, forks, release cadence), pricing models, and enterprise features.
- 2. Gather funding/customer signals for commercial vendors (Langfuse, Weights & Biases, Fiddler, etc.).
- 3. Interview 2-3 platform engineers building production LLM apps to validate priority pains (observability vs evals vs memory orchestration).
- 4. Collect concrete examples/case studies of production failures and debugging workflows to ground the "debugging & root-cause" pain.
