Customer and JTBD analysis

Purpose
- Identify the key personas that operate, build, and buy LLM harness tooling; surface their concrete jobs‑to‑be‑done (JTBD), the tools they currently stitch together, their main frustrations, and the buying criteria that determine whether a new product will be adopted.

Why this matters
- Breakpoint analysis depends on matching a focused wedge to a persona with urgent pain and willingness to pay. This section turns vendor‑centric categories into human jobs that a founder can target and tests those jobs against primary‑source evidence.

Approach and evidence
- Primary evidence used below is drawn from vendor/product docs, OSS repos, case studies, and product pages (LangChain, LlamaIndex, Langfuse, LangSmith, OpenAI Evals, Promptfoo, Pinecone, Chroma, Weaviate, Milvus, W&B). See /workspace/references/research_notes.md for source‑by‑source captures and links (accessed 2026-03-21 / 2026-04-02).
- When a claim is an inference (e.g., willingness‑to‑pay, procurement cadence), it is explicitly labeled "inference" and flagged for interview validation.

Executive synthesis (one sentence)
- Internal platform/infra teams represent the clearest enterprise procurement path (highest WTP) for audit, policy, routing and billing primitives; developer‑facing engineers and PMs are the fastest route to adoption and define the minimum DX an entrant must support.

Persona-level JTBD analysis (evidence-backed, with buying criteria and switch triggers)

For each persona we list: primary JTBD; typical tools they stitch together; concrete pains (with evidence pointers); buying criteria; common switch triggers; implication for an entrant.

1) AI application engineers / ML engineers
- Primary JTBD: Build reliable, repeatable LLM features (RAG, classification, multi‑step agents), ship to production, and iterate quickly.
- Typical stack: LangChain or LlamaIndex-based application code; vector DBs (Pinecone, Chroma, Milvus); model APIs (OpenAI, Anthropic); infra (K8s/serverless); ad‑hoc logging/CI.
- Concrete pains & evidence:
  - Churn and brittle integrations in developer frameworks: LangChain and LlamaIndex repo issues and PR patterns show heavy integration activity and frequent API surface changes (see research captures for LangChain and LlamaIndex).
    - Source: https://github.com/langchain-ai/langchain, https://github.com/run-llama/llama_index (research_notes.md)
  - Low-fidelity visibility into model decisions, context, and token/cost breakdowns: motivated the emergence of LangSmith and Langfuse observability products.
    - Source: https://www.langchain.com/langsmith/observability, https://langfuse.com
  - Difficulty reproducing nondeterministic failures and tracking prompt/config changes: community issues and OpenAI Evals usage patterns indicate teams struggle to turn model outputs into repeatable tests.
    - Source: https://github.com/openai/evals
- Buying criteria: minimal integration effort, first‑class LangChain/LlamaIndex SDK hooks or callbacks, low latency/overhead, clear developer UX (docs, examples, tests).
- Switch triggers (inference, OSS-driven): repeated production incidents; on‑call pain; platform standardization.
- Implication for entrant: prioritize excellent DX and first‑class framework integrations; PLG channels (OSS SDKs, free hosted tiers) speed adoption.

2) Platform / infra engineers (internal LLM platform teams) — PRIORITY TARGET
- Primary JTBD: Provide multi‑tenant routing, deployment, monitoring, policy enforcement, cost allocation and chargeback for LLM workloads used by product teams.
- Typical stack: internal model gateway, OpenTelemetry/Langfuse-style traces, CI/CD pipelines, policy engines, billing/chargeback systems.
- Concrete pains & evidence:
  - Governance, auditability and data residency requirements: enterprise pages and self-hosting options on LangSmith and Langfuse highlight these needs.
    - Source: LangSmith docs (https://www.langchain.com/langsmith/observability), Langfuse (https://langfuse.com)
  - Absence of a standardized LLM trace/event schema and need to stitch traces to billing/observability stacks.
    - Source: Langfuse and LangSmith product pages (research_notes.md)
  - Cost routing across multiple model vendors / local models and the need for policy-based routing for cost/perf tradeoffs.
    - Evidence: platform case studies and vendor positioning (Pinecone case studies illustrate enterprise BYOC patterns and dedicated infra requirements).
    - Source: Pinecone Vanguard case study (research_notes.md)
- Buying criteria: enterprise features (on‑prem/BYOC, VPC, SSO/IAM, RBAC), SLAs, measurable cost controls, integrations with existing monitoring and billing systems.
- Switch triggers (evidence + inference): security/regulatory audit, a costly incident, or executive mandate to centralize LLM provisioning.
- Implication for entrant: bundle trace schema, policy enforcement primitives, and chargeback integrations with turnkey LangChain/LlamaIndex and vector‑store adapters. This justifies higher ACV but requires enterprise readiness and longer sales cycles.

3) Product Managers for LLM features
- Primary JTBD: Define success metrics for LLM features, prioritize model/prompt changes, and demonstrate product impact to stakeholders.
- Typical tools: eval tooling (OpenAI Evals, Promptfoo), product analytics, A/B experimentation platforms.
- Concrete pains & evidence:
  - Hard to translate eval outputs into product KPIs and non‑engineer friendly reports; existing eval tools are engineer‑centric.
    - Source: OpenAI Evals (https://github.com/openai/evals), Promptfoo (https://github.com/promptfoo/promptfoo)
- Buying criteria: clear ROI linkage to product metrics, shareable dashboards, and the ability to map model changes to user outcomes.
- Switch triggers (inference): when PMs can demonstrate controlled lift or when compliance/reporting requires stronger eval artifacts.
- Implication for entrant: build translation layers from eval artifacts to product KPIs and a lightweight reporting UX for PMs.

4) Evaluation / QA teams
- Primary JTBD: Run regression tests for model/prompt changes, maintain private eval registries, and ensure no regressions in critical behavior.
- Typical tools: OpenAI Evals, Promptfoo, custom CI, dataset registries.
- Concrete pains & evidence:
  - Flaky tests, brittle datasets, and friction integrating evals into CI and audit trails.
    - Source: OpenAI Evals README and examples (https://github.com/openai/evals)
- Buying criteria: repeatability, CI/CD integration, private registries, and traceability for audits.
- Switch triggers: failed audits or regressions in production.
- Implication for entrant: Eval‑as‑Platform with CI integration, private registries, and audit logs is a strong cross‑cutting wedge.

5) Security / Compliance / Legal teams
- Primary JTBD: Enforce policies, prevent data leakage, ensure auditable LLM use and regulatory compliance.
- Typical tools: policy engines, DLP integrations, observability/audit logs, SSO/IAM, on‑prem/VPC options.
- Concrete pains & evidence:
  - Missing per‑call enforcement and limited data residency/retention controls in many hosted offerings; enterprise pages emphasize self‑host and dedicated deployments.
    - Source: Pinecone enterprise pages; Langfuse and LangSmith enterprise descriptions (research_notes.md)
- Buying criteria: provable data controls, deployments that meet corporate compliance, audit trails, and support for legal discovery.
- Switch triggers: regulatory investigations, data incidents, or contractual requirements from enterprise customers.
- Implication for entrant: early investment in audit logs, RBAC, tenancy isolation, and compliance controls increases go‑to‑market friction but materially raises defensibility in regulated verticals.

6) Applied researchers / data scientists
- Primary JTBD: Run controlled experiments to improve prompts/models, compare models, and analyze failure modes.
- Typical tools: notebooks, W&B experiment tracking, eval frameworks.
- Concrete pains & evidence:
  - Reproducibility, dataset/versioning, and cost for large comparison experiments are recurring problems.
    - Source: W&B (https://wandb.ai/), OpenAI Evals (research_notes.md)
- Buying criteria: flexibility, reproducibility, and integration with custom metrics.
- Switch triggers: research leadership mandates or a need to scale experiments.
- Implication for entrant: OSS‑friendly tooling with experiment-tracking integrations helps adoption but is harder to monetize directly.

7) Customer support / operations teams
- Primary JTBD: Triage user-facing LLM failures, review conversation history, and correct or escalate outputs.
- Typical tools: support ticketing systems + observability session logs + annotation UIs.
- Concrete pains & evidence:
  - Poor playback/annotation tooling and difficulty linking a complaint to the exact model call, prompt, and context.
    - Source: Langfuse and LangSmith session features (research_notes.md)
- Buying criteria: fast playback, easy annotation, and links to support workflows (Zendesk, etc.).
- Switch triggers: frequent customer escalations tied to LLM outputs or SLA penalties.
- Implication for entrant: embeddable session‑replay and annotation tools that integrate with ticketing systems can speed day‑to‑day ops but usually have lower direct WTP.

Compact persona table (evidence + inference columns)

| Persona | Primary JTBD | Typical tools | Key evidence (examples) | Buying criteria | Switch triggers | Likely WTP |
|---|---|---|---|---|---|---|
| AI app engineers | Ship reliable LLM features | LangChain, LlamaIndex, vector DBs | LangChain repo; LlamaIndex repo; LangSmith observability pages | DX, low friction SDKs, latency | Recurring incidents; platform mandates (inference) | Medium (inference) |
| Platform / infra engineers | Operate multi-team LLM platforms | Langfuse/OpenTelemetry, CI, gateways | Langfuse docs; LangSmith docs; OpenAI Evals | Enterprise features, SLAs, integration | Security incident or exec mandate | High (evidence + inference) |
| Product Managers | Measure product impact | OpenAI Evals, Promptfoo, analytics | OpenAI Evals; Promptfoo | ROI mapping to KPIs, dashboards | Need to report impact to stakeholders | Medium (inference) |
| Evaluation / QA teams | Run regression tests | Evals, Promptfoo, CI | OpenAI Evals; Promptfoo | Repeatability, CI integration | Failed regressions/audits | High (regulated) |
| Security / Compliance | Enforce policy & audits | DLP + observability + policy engines | Pinecone enterprise; Langfuse | Data controls, auditability | Regulatory or contractual demands | High (inference) |
| Applied researchers | Run experiments & compare models | Notebooks, W&B, Evals | W&B; OpenAI Evals | Flexibility, reproducibility | Need to scale experiments | Low–Medium (inference) |
| Support / Ops | Triage failures | Support tooling + session logs | Langfuse; LangSmith | Playback, annotation, links to tickets | Frequent escalations | Low–Medium (inference) |

Which JTBD show the strongest willingness‑to‑pay (WTP)?
- High WTP (evidence + inference): Platform/infra teams; Security/Compliance; Evaluation/QA in regulated domains. Rationale: enterprise product pages and case studies emphasize RBAC, on‑prem/VPC, SLAs and audit features which align with procurement workflows (examples: Pinecone, Langfuse, LangSmith).
  - Sources (examples): LangSmith observability docs; Langfuse product pages; Pinecone Vanguard case study (see /workspace/references/research_notes.md)
- Medium WTP (inference): AI application engineers and PMs — will pay for clear productivity gains and reduced MTTI/MTTR. Evidence of commercial pathways: LangChain -> LangSmith and LlamaIndex cloud products.
- Lower/indirect WTP (evidence + inference): Applied researchers and support teams — typically OSS-first or internally provisioned unless product maps to measurable ROI.

Strategic implications (actionable)
- Prioritize platform teams for an enterprise‑first wedge where the product bundles trace schema, policy enforcement, and billing primitives — this matches the clearest procurement path and highest WTP (evidence: Pinecone case study; Langfuse and LangSmith positioning).
- Maintain a developer‑first DX layer (LangChain/LlamaIndex integrations) as the primary distribution mechanism; developers seed adoption and create evangelists inside platform teams (evidence: OSS traction of LangChain/LlamaIndex).
- Consider Eval‑as‑Platform as a near-term cross-cutting wedge that maps to PMs and QA with clear product metrics and an easy path to enterprise features (evidence: OpenAI Evals, Promptfoo).

Evidence gaps and next steps (must complete before marking section DONE)
1) Interview plan (priority): conduct 6–10 20–30 minute interviews across personas (2 platform engineers, 2 app engineers, 2 PMs, 1 compliance lead, 1 QA lead, 1 support lead). Core questions: procurement cadence; concrete recent incidents; integration effort to add telemetry; what metric would justify purchase. Status: recommended.
2) Case studies (priority): add 2–3 independent engineering blogposts/postmortems where observability/eval tooling materially reduced incidents or time‑to‑resolution; capture short extracts and URLs in appendix.
3) Effort sizing (medium): run an integration spike measuring engineer‑hours to add trace+eval hooks into a representative LangChain + LlamaIndex project; publish results and steps in appendix.
4) Appendix population (high): populate /workspace/document/sections/09-appendix.md with per‑row source links, access dates, and short notes for the persona table and provider comparison matrix.

Section status: DRAFT — this file now consolidates public‑source evidence, explicit citations, and a prioritized research plan. Mark as DONE only after interview validation, 2–3 case studies are added, and the appendix is populated with source links.

Last edited: 2026-04-02T13:20:00+00:00
