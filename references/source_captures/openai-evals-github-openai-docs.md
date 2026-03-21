<!-- generated-by: copy_writer_agent.runtime_sync -->
# OpenAI Evals (GitHub + OpenAI docs)

- URL: https://github.com/openai/evals and https://platform.openai.com/docs/guides/evals
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: OpenAI Evals is a canonical eval framework and is integrated into OpenAI's platform — signals the importance of structured evals, registries, and private eval capabilities.
- Reliability tier: primary
- Date accessed: 2026-03-21

## Evidence extracted
- Repo metrics: ~18k stars, ~2.9k forks; detailed README and docs; support for private evals and integration options (Snowflake export, CI usage examples). OpenAI has integrated evals into its dashboard/platform.
- Intended sections: Provider landscape (eval tooling), Technical bottlenecks (evaluation pipelines), Appendix (methodology)

## Open questions
- Relative adoption of OpenAI Evals vs alternative OSS eval frameworks (promptfoo, other community projects).

## Draft implications
- Eval tooling that offers private CI integration, audit logs, and enterprise governance has a clear buyer: platform teams and compliance-oriented enterprises.
- ---
- ## Quick funding & traction signals (initial web findings)
- > Note: these are initial, verifiable signals captured from vendor blogs, press releases, and GitHub front pages. They are starting points for the provider comparison matrix and must be expanded/verified for the appendix.
- Langfuse
- Seed funding: $4M seed round (announced Nov 7, 2023). Source: https://langfuse.com/blog/announcing-our-seed-round
- Pricing & cloud: Langfuse Cloud (managed), self-host docs and pricing: https://langfuse.com/pricing and https://langfuse.com/self-hosting
- Customers: example customers listed in handbook/press (Langfuse handbook / customers page). Source: https://langfuse.com/handbook/chapters/customers
- LlamaIndex
- Series A: $19M Series A announced Mar 4, 2025 (press releases and company blog). Sources: https://www.llamaindex.ai/blog/announcing-our-series-a-and-llamacloud-general-availability and PR Newswire article
- Product: LlamaParse (cloud document agent), customer case pages: https://llamaindex.ai/llamaparse and customer vignettes on the company site
- LangChain
- Series B / growth funding: major round announced Oct 20, 2025 (LangChain blog). LangSmith product commercialization described on LangChain site. Sources: https://blog.langchain.com/series-b/ and https://www.langchain.com/langsmith
- Pinecone
- Funding and momentum: multiple funding rounds, a16z investment mentioned publicly; adoption stories / customers on Pinecone blog. Sources: Pinecone blog and a16z announcement
- Weights & Biases (W&B)
- M&A / acquisition news: CoreWeave to acquire Weights & Biases (press); we also surface W&B enterprise case studies on wandb.ai. Sources: https://coreweave.com/blog/coreweave-completes-acquisition-of-weights-biases and https://wandb.ai/site/customers/
- Promptfoo
- OSS traction: notable GitHub adoption (several thousand stars). GitHub: https://github.com/promptfoo/promptfoo
- Chroma / Milvus / other vector DBs
- Chroma seed/seed press: Chroma seed round pages and research blog. Milvus enterprise adoption pages show customers. Sources: Chroma site, Milvus use-cases pages.
- (These links were collected via quick web searches and will be added to the provider comparison matrix with dates, source-type, and confidence levels.)
- ---
- ## Next research tasks (priority)
- 1. Populate the provider comparison matrix with traction signals (funding, customers, GH stars, forks, used-by, release cadence), pricing model, hosting model, and enterprise features for the top 20 providers. (Priority: high)
- 2. Validate and source commercial traction claims (customers, logos, case studies) from vendor pages, press releases, LinkedIn posts, and TechCrunch / PR wires. (Priority: high)
- 3. Map integration hooks for an observability SDK across LangChain, LlamaIndex, OpenAI SDKs, and top vector DBs — detail required callbacks, wrappers, and likely engineering effort. This informs MVP engineering scope. (Priority: medium)
- 4. Conduct 2–3 interviews with platform/infra engineers running production LLM applications to validate priority of observability vs evals vs memory orchestration. Prepare a short interview script and recruit via network / Twitter / LinkedIn. (Priority: high)
- 5. Collect 2–3 short case studies / post-mortems of production LLM failures and debugging processes (engineering blogs, conference talks). (Priority: high)
- (Notes: all repo metrics and product claims above are sourced from the respective GitHub repository front pages and vendor pages accessed on 2026-03-21; funding/press items cited via vendor blog/PR links found via web search.)
