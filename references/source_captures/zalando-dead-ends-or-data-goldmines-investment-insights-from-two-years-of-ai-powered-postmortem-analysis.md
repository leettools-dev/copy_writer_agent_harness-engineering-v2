<!-- generated-by: copy_writer_agent.runtime_sync -->
# Zalando — "Dead Ends or Data Goldmines? Investment Insights from Two Years of AI-Powered Postmortem Analysis"

- URL: https://engineering.zalando.com/posts/2025/09/dead-ends-or-data-goldmines-ai-powered-postmortem-analysis.html
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Independent engineering blog describing using LLMs to analyze thousands of postmortems; provides concrete pipeline architecture, human-in-the-loop curation practices, hallucination/attribution failure modes, and examples of operational gains.
- Reliability tier: strong-secondary (company engineering blog)
- Date accessed: 2026-04-02

## Evidence extracted
- TL;DR: Zalando processed thousands of postmortems with a staged LLM pipeline (summarization, classification, analysis, pattern detection) and found AI effective at surfacing recurring issues while requiring human curation to reduce hallucination and surface-attribution errors.
- Key engineering points: multi-stage map-reduce style pipeline, human curation percentages (initially 100% then reduced to 10–20% sampling), measured per-document processing targets (≈30s per postmortem with modern models), and specific mitigation patterns for hallucination and attribution error.
- Intended sections: Customer JTBD (platform teams, PMs, support), Technical bottlenecks (evaluation fidelity, hallucination), Appendix (case study)

## Draft implications
- Independent corroboration that postmortem/observability use cases for LLMs are real and operationally valuable; supports JTBD claims for platform teams and PMs and strengthens the case that observability/eval tooling reduces MTTR when coupled with human curation.
- ---
- Last updated: 2026-04-02T21:40:00+00:00
