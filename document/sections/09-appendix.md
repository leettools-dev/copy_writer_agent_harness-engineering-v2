Appendix: sources and provider comparison (draft)

Purpose: compact provider table and source list to support the main report. This file is a working draft: rows with empty cells are gaps to fill during the next research iteration.

Provider comparison (selected vendors / OSS projects)

| Provider | Category | OSS stars / visible traction | Funding / commercial signal | Hosting model (OSS / Hosted) | Notable customers / evidence | Source(s)
|---|---|---:|---|---|---|---|
| LangChain | Agent framework / orchestration | ~130k stars (GitHub) | Series B / growth funding (Oct 2025) | OSS + LangSmith commercial product | LangSmith product; wide ecosystem integrations | /workspace/references/research_notes.md; /workspace/references/knowledge_manifest.json
| LlamaIndex | RAG / document agent framework | ~47.8k stars (GitHub) | Series A $19M (Mar 4, 2025) | OSS + LlamaParse / LlamaCloud | Document-agent use cases; LlamaParse product pages | /workspace/references/research_notes.md; /workspace/references/knowledge_manifest.json
| Langfuse | Observability & tracing | ~23.5k stars (GitHub) | $4M seed (Nov 7, 2023) | OSS + Langfuse Cloud (hosted) | Self-host docs and customer vignettes on site | /workspace/references/research_notes.md; /workspace/references/knowledge_manifest.json
| OpenAI Evals | Evaluation harness | ~18k stars (GitHub) | N/A (OpenAI product) | OSS + OpenAI platform integration | Integrated into OpenAI docs/platform; CI/export examples | /workspace/references/research_notes.md
| Pinecone | Vector DB / retrieval store | N/A (commercial) | Multiple rounds; a16z investor signals | Hosted commercial vector DB | Adoption stories on Pinecone blog | /workspace/references/research_notes.md
| Chroma | Vector DB / retrieval store | (OSS signal - needs verification) | Seed round(s) reported | OSS + hosted options (vendor docs) | Use-case blog posts | /workspace/references/research_notes.md
| Promptfoo | Eval / prompt testing (OSS) | several thousand stars (GitHub) | N/A (OSS) | OSS | Community adoption for prompt testing | /workspace/references/research_notes.md
| Milvus | Vector DB / retrieval store | N/A (enterprise adoption indicated) | Commercial adoption signals | OSS + commercial ecosystem | Enterprise case pages on Milvus site | /workspace/references/research_notes.md
| Weights & Biases (W&B) | Model experiment tracking / observability | Commercial product (popular) | Acquisition / M&A signals (CoreWeave acquisition) | Hosted commercial | Enterprise customers and case studies on wandb.ai | /workspace/references/research_notes.md

Notes on table and next research tasks
- This table is intentionally compact; it is a working artifact to (a) anchor provider claims in the main sections and (b) show where traction evidence is missing. Do not treat empty fields as inferred facts.
- Immediate next step: verify missing traction numbers and customer claims via vendor pages, GitHub captures, press releases, and TechCrunch/PR wires. Add direct URLs into `references/source_captures/` and update `references/knowledge_manifest.json`.
- Plan to expand this table into a fuller provider comparison matrix (CSV or JSON) with additional columns: "abstraction level", "deployment model", "eval support", "observability features", "enterprise readiness (SSO, compliance)", "pricing model", and "used-by / dependents count".

Source index (primary captures used so far)
- /workspace/references/research_notes.md — source-by-source captures for LangChain, LlamaIndex, Langfuse, OpenAI Evals, Pinecone, Promptfoo, Chroma, Milvus, W&B.
- /workspace/references/selected_example.md — b2venture VC market-framing exemplar used for structural guidance.
- /workspace/references/knowledge_manifest.json — machine-readable manifest of captured sources and traction signals.

How this appendix supports the current report
- Executive summary cites the provider traction signals captured in `research_notes.md`. This appendix provides a minimal, verifiable table that the rest of the document can reference.

(Section status: draft — populate missing cells and expand to full comparison matrix in next iteration.)
