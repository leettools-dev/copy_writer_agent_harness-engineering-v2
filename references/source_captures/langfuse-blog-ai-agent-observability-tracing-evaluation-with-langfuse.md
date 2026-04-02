<!-- generated-by: copy_writer_agent.runtime_sync -->
# Langfuse blog — "AI Agent Observability, Tracing & Evaluation with Langfuse"

- URL: https://langfuse.com/blog/2024-07-ai-agent-observability-with-langfuse
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Product-facing explanation of agent observability use cases, integrations, and evaluation strategies from the Langfuse team (authoritative for product capabilities and integration patterns).
- Reliability tier: primary (vendor product blog)
- Date accessed: 2026-04-02

## Evidence extracted
- Use cases cited: Customer support, market research, software development; examples of tracing multi-step agent flows and multi-agent setups.
- Integration claims: native integrations / cookbooks for LangGraph, LlamaIndex, OpenAI Agents SDK, Hugging Face smolagents, Pydantic AI, CrewAI, AutoGen, Strands Agents, and no-code builders (Flowise, Langflow, Dify).
- Observability patterns: recommends OpenTelemetry convergence, structured tracing (typed observation data for tool calls, retriever steps, guardrail checks), and trajectory/step-level evaluation strategies (black-box, trajectory, single-step).
- Features: tracing, token & cost tracking, prompt management/versioning, evaluation strategies (model-based, human-in-the-loop, implicit signals), datasets for offline evals, CI integration guidance.
- Intended sections: Provider landscape (observability), Technical bottlenecks (tracing schema), Customer JTBD (platform teams, support, PMs), Appendix (integration examples)

## Open questions
- Public customer list for Langfuse Cloud vs self-host adoption split.

## Draft implications
- Strong evidence that observability vendors target the same persona set (platform teams, PMs, support) and that integration breadth (LangChain, LlamaIndex, OpenTelemetry) is a competitive requirement.
- ---
