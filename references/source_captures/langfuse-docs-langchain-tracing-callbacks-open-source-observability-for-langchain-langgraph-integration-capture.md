<!-- generated-by: copy_writer_agent.runtime_sync -->
# Langfuse docs — "LangChain Tracing & Callbacks — Open Source Observability for LangChain & LangGraph" (integration capture)

- URL: https://langfuse.com/integrations/frameworks/langchain
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Authoritative integration guide showing concrete, copy-paste steps to instrument LangChain applications using Langfuse. Useful to size integration friction and estimate time-to-first-trace.
- Reliability tier: primary (vendor docs)
- Date accessed: 2026-04-02

## Evidence extracted
- Quickstart steps (actionable):
- 1. pip install langfuse langchain langchain_openai langgraph  (or npm install @langfuse/core @langfuse/langchain for JS)
- 2. Set environment variables: LANGFUSE_SECRET_KEY, LANGFUSE_PUBLIC_KEY, LANGFUSE_BASE_URL, OPENAI_API_KEY
- 3. Initialize client: langfuse = get_client(); handler = CallbackHandler(); then pass handler via chain.invoke(..., config={"callbacks":[handler]})
- 4. Optional: use context managers / propagate_attributes to set session_id/user_id/tags and group traces.
- 5. For serverless, ensure callbacks are not backgrounded or use awaitAllCallbacks or set LANGCHAIN_CALLBACKS_BACKGROUND="false".
- 6. Self-host: Langfuse supports self-hosting; docs include Kubernetes deployment guides and OTEL integration notes.
- Examples: code snippets for Python and JS showing how to pass CallbackHandler into agent invocation and how to set trace attributes. Public example trace links exist in the docs for demonstration.
- Observability features: token/cost tracking, span grouping for retrieval/LLM calls, scoring traces, scoring outside context with trace IDs, queuing & flushing APIs, OTEL span processor for JS/Node.
- Intended sections: Customer JTBD (developer DX, platform teams), Technical bottlenecks (trace schema, integration ergonomics), Appendix (integration-spike artifacts)

## Open questions
- Precise friction when adding to a non-trivial LangChain app (multi-retriever/agent graph) — to be validated by an integration spike.

## Draft implications
- The documented quickstart implies a low friction path to first-trace (single developer can instrument a simple chain and see traces in <2 hours). This validates the planned integration-spike as a high‑leverage next step and reduces the risk that instrumentation itself is a gating problem for adoption.
- ---
