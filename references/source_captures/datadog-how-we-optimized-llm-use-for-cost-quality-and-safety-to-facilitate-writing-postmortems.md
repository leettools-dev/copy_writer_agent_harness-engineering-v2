<!-- generated-by: copy_writer_agent.runtime_sync -->
# Datadog — "How we optimized LLM use for cost, quality, and safety to facilitate writing postmortems"

- URL: https://www.datadoghq.com/blog/engineering/llms-for-postmortems/
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: An engineering blog describing a production project that used LLMs for incident postmortem drafting and incident summaries; provides concrete engineering lessons on instrumentation, hybrid model strategies, evaluation methods, and trust/privacy controls that inform observability and eval JTBD.
- Reliability tier: strong-secondary (vendor engineering blog from a major observability vendor)
- Date accessed: 2026-04-02

## Evidence extracted
- Implementation notes: Datadog combined structured incident metadata (Incident Management app) with unstructured Slack discussion, scrubbed secrets, and fed data to an ensemble of LLMs to produce draft postmortems and incident summaries. They invested >100 engineering hours iterating on instruction structure and templates. (Support: Datadog engineering blog (detailed implementation and experimentation notes).)
- Evaluation & instrumentation: used qualitative user surveys to compare AI vs human drafts; experimented with ROUGE/BLEU-like metrics but found them limited; emphasized hybrid model selection per section (cheaper models for simple sections, GPT-4 for complex sections) and parallelized generation to improve latency at cost of duplication.
- Intended sections: Customer JTBD (platform teams, PMs, support), Technical bottlenecks (non-determinism, evaluation metrics), Appendix (postmortem case study)

## Open questions
- Independent corroboration of claimed engineering hours and ROI; whether similar instrumentation patterns generalize to non-Datadog stacks.

## Draft implications
- Operationalizing LLM features requires significant engineering investment in input structuring, instruction engineering, secret scrubbing, and evaluation pipelines — validating the JTBD claim that platform teams and support need robust observability and eval hooks.
- ---
