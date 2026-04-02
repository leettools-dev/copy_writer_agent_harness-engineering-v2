<!-- generated-by: copy_writer_agent.runtime_sync -->
# Anthropic — "A postmortem of three recent issues"

- URL: https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Detailed production postmortem from a major model provider showing how infrastructure changes, routing, compiler/precision issues, and deployment variability caused degraded model outputs; strong evidence for the difficulty of detecting, tracing, and reproducing LLM quality regressions in production.
- Reliability tier: primary (vendor engineering postmortem)
- Date accessed: 2026-04-02

## Evidence extracted
- Publication date: Sep 17, 2025.
- Main causes described: (1) context-window routing errors that misrouted requests to wrong server pools; (2) output corruption caused by misconfiguration on TPU servers; (3) an XLA:TPU miscompilation/approximate top-k bug producing incorrect token selection in rare configurations.
- Detection challenges: mixed symptoms across hardware platforms, sticky routing creating disproportionate user impacts, noisy evaluation signals that did not surface the regression early, and privacy controls limiting engineers' ability to inspect problematic user interactions.
- Intended sections: Technical bottlenecks (non-deterministic failures, detection), Customer JTBD (platform teams, PMs, support), Provider landscape (model/provider reliability), Appendix (postmortem capture)

## Draft implications
- Confirms platform teams' need for fine-grained tracing, per-call metadata, and continuous in-production evals to rapidly detect and triage subtle quality regressions.
- ---
