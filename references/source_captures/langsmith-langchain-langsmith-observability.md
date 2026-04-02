<!-- generated-by: copy_writer_agent.runtime_sync -->
# LangSmith (LangChain - LangSmith Observability)

- URL: https://www.langchain.com/langsmith/observability
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: LangSmith is LangChain's observability and eval platform. It is a central example of a framework-integrated commercial observability product with self-host/BYOC options and explicit enterprise features and customers.
- Reliability tier: primary (vendor documentation)
- Date accessed: 2026-04-02

## Evidence extracted
- Product claims: native tracing for popular agent frameworks and OpenTelemetry; SDKs for Python/TypeScript/Go/Java; message threading for multi-turn chat; session tracing and replay; monitoring dashboards that track token usage, latency (P50/P99), error rates, cost tracking, and online evals.
- Enterprise features: self-host/BYOC and Kubernetes deployment options for Enterprise plans; data residency controls; integrations with PagerDuty/webhooks; explicit enterprise customer logos shown on site (Cloudflare, Lyft, LinkedIn, Klarna, Coinbase, Vanguard-related customers listed elsewhere).
- Pricing/packaging: free tier for dev and paid plans scaling with trace volume; enterprise pricing via contact-sales and documented enterprise options.
- Integration claims: framework-agnostic tracing (works with LangChain, LlamaIndex, OpenAI SDKs), OpenTelemetry support, and instructions for sending data to/from LangSmith.
- Docs evidence: Observability and OTel docs, self-hosting docs (kubernetes), FAQs stating no added latency and data ownership guarantees.
- Intended sections: Provider landscape (observability), Customer JTBD (platform teams, PMs, support), Technical bottlenecks (trace schema and integration), Appendix (vendor capture)

## Open questions
- Exact enterprise customer list and independent adoption metrics; traction beyond vendor-reported logos.
- Relative adoption vs other observability vendors (Langfuse, internal tools).

## Draft implications
- LangSmith validates market demand for integrated observability + eval features and the viability of providing managed + self-host options for enterprise buyers. Any newcomer focused on observability or eval SDKs must interoperate with LangSmith and LangChain hooks to be competitive.
- ---
