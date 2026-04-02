Customer and JTBD analysis

Purpose
- Identify the key personas that operate, build, and buy LLM harness tooling; surface their concrete jobs‑to‑be‑done (JTBD), the tools they currently stitch together, their main frustrations, and the buying criteria that determine whether a new product will be adopted.

Why this matters
- Breakpoint analysis depends on matching a focused wedge to a persona with urgent pain and willingness to pay. This section turns vendor‑centric categories into human jobs that a founder can target and tests those jobs against primary‑source evidence.

Approach and evidence
- Primary evidence used below is drawn from vendor/product docs, OSS repos, case studies, and product pages (LangChain, LlamaIndex, Langfuse, LangSmith, OpenAI Evals, Promptfoo, Pinecone, Chroma, Weaviate, Milvus, W&B). See /workspace/references/research_notes.md for per‑source captures and metrics (accessed 2026-03-21 / 2026-04-02).
- Where claims are inference (WTP, procurement cadence), they are explicitly labeled as "inference" and flagged for interview validation.

Executive synthesis (one sentence)
- Platform and infra teams show the clearest enterprise procurement path and highest willingness to pay for audit/tracing/policy primitives; developer-facing personas drive rapid adoption and integration patterns that define the minimal DX a successful wedge must support.

Persona-level JTBD analysis (evidence-backed, with buying criteria and switch triggers)

For each persona we list: Primary JTBD; Typical tools they stitch together; Concrete pains (with evidence pointers); Buying criteria (what makes them choose a product); Common switch triggers; Implication for an entrant.

1) AI application engineers / ML engineers
- Primary JTBD: Build reliable, repeatable LLM features (RAG, classification, multi‑step agents), ship to production, and iterate quickly.
- Typical stack: LangChain or LlamaIndex-based application code + vector DBs (Pinecone, Chroma, Milvus) + model APIs (OpenAI, Anthropic) + infra (K8s/serverless) + ad‑hoc logging/CI.
- Key pains (evidence): brittle integrations and SDK churn (LangChain, LlamaIndex repos); low-fidelity visibility into model decisions and context (LangSmith, Langfuse docs); difficulty reproducing nondeterministic failures and rolling back prompt/config changes (OpenAI Evals docs and community issues).
  - Sources: https://github.com/langchain-ai/langchain (2026-03-21); https://github.com/run-llama/llama_index (2026-03-21); LangSmith observability docs (2026-04-02).
- Buying criteria: minimal integration effort, batteries‑included SDKs/callbacks for LangChain/LlamaIndex, low latency/overhead, and clear developer UX (APIs, examples, tests).
- Switch triggers (inference but grounded in OSS dynamics): recurring production incidents traced to lack of observability; on‑call pain; a change in procurement when a platform team standardizes tooling.
- Implication for entrant: a developer‑first product must provide first-class LangChain/LlamaIndex hooks, excellent DX, and a low-friction path to capture telemetry without changing app logic. PLG distribution via OSS or low-friction hosted tiers is advisable.

2) Platform / infra engineers (internal LLM platform teams) — PRIORITY TARGET
- Primary JTBD: Provide multi‑tenant routing, deployment, monitoring, policy enforcement, and chargeback for LLM workloads consumed by product teams.
- Typical stack: internal model gateway, Langfuse/OpenTelemetry traces, CI/CD pipelines, policy engines, billing/chargeback systems.
- Key pains (evidence): governance & audit requirements (RBAC, immutable logs, data residency), cost allocation and routing across models/vendors, and absence of a standardized LLM trace/event schema (Langfuse and LangSmith product pages; OpenAI Evals integration examples).
  - Sources: https://langfuse.com (2026-03-21); https://www.langchain.com/langsmith/observability (2026-04-02); https://github.com/openai/evals (2026-03-21).
- Buying criteria: enterprise features (on‑prem/BYOC, VPC, SSO/IAM, RBAC), SLAs, clear data ownership guarantees, integrations with existing monitoring and billing systems.
- Switch triggers (evidence + inference): security/regulatory audits, a high‑cost incident that motivates centralized routing/cost controls, executive mandate to standardize LLM platform primitives.
- Implication for entrant: target platform teams with an integrated bundle (trace schema + policy enforcement + billing primitives) and turnkey integrations (LangChain/LlamaIndex + vector DBs). Higher ACV justifies building enterprise deployment and support, but expect long sales cycles.

3) Product Managers for LLM features
- Primary JTBD: Define success metrics for LLM features, prioritize model/prompt changes, and demonstrate product impact to stakeholders.
- Typical tools: eval tooling (OpenAI Evals, Promptfoo), product analytics, A/B experimentation platforms.
- Key pains (evidence): difficulty translating evaluation outputs into product KPIs and limited non‑engineer UX for eval artifacts (OpenAI Evals, Promptfoo docs and community discussions).
  - Sources: https://github.com/openai/evals (2026-03-21); https://github.com/promptfoo/promptfoo (2026-03-21).
- Buying criteria: clear ROI linkage to product metrics, non‑engineer friendly reports/dashboards, ability to map model changes to user outcomes.
- Switch triggers (inference): when a PM can show measurable lift from controlled experiments or when compliance/regulatory reporting requires stronger eval traces.
- Implication for entrant: provide translation layers from eval artifacts to product KPIs and a lightweight, shareable reporting UX targeted at PMs.

4) Evaluation / QA teams
- Primary JTBD: Run regression tests for model/prompt changes, maintain private eval registries, and ensure no regressions in critical behavior.
- Typical tools: OpenAI Evals, Promptfoo, custom CI, dataset registries.
- Key pains (evidence): flaky tests, brittle datasets, friction integrating evals into CI and audit trails (OpenAI Evals examples and README).
  - Sources: https://github.com/openai/evals (2026-03-21); https://github.com/promptfoo/promptfoo (2026-03-21).
- Buying criteria: repeatability, CI/CD integration, private registries, and traceability for audits.
- Switch triggers: failing audits or regressions in production that require formalized test suites.
- Implication for entrant: a strong wedge is Eval‑as‑Platform that integrates with CI and supports private registries and audit logs.

5) Security / Compliance / Legal teams
- Primary JTBD: Enforce policies, prevent data leakage, ensure auditable LLM use and regulatory compliance.
- Typical tools: policy engines, DLP integrations, observability/audit logs, SSO/IAM, on‑prem/VPC options.
- Key pains (evidence): limited per‑call enforcement in hosted offerings, missing data residency/retention controls (vendor enterprise pages and observability product pages).
  - Sources: Pinecone enterprise pages (2026-04-02); Langfuse enterprise positioning (2026-03-21); LangSmith docs (2026-04-02).
- Buying criteria: provable data controls, deployments that meet corporate compliance, audit trails, and support for legal discovery.
- Switch triggers: regulatory investigations, customer data incidents, or contractual requirements from enterprise customers.
- Implication for entrant: must build enterprise-grade controls early (audit logs, RBAC, tenancy isolation) to sell into regulated verticals; this raises implementation cost but increases defensibility.

6) Applied researchers / data scientists
- Primary JTBD: Run controlled experiments to improve prompts/models, compare models, and analyze failure modes.
- Typical tools: notebooks, W&B experiment tracking, Evals/prompt testing frameworks.
- Key pains (evidence): reproducibility, dataset/versioning, and cost for large comparison experiments (W&B and Evals notes).
  - Sources: https://wandb.ai/ (2026-03-21); https://github.com/openai/evals (2026-03-21).
- Buying criteria: flexibility, ability to reproduce experiments, and low barrier to integrating custom metrics.
- Switch triggers: mandate from research leadership to standardize tooling or a need to scale experiments beyond ad‑hoc notebooks.
- Implication for entrant: OSS-friendly tooling and integrations with experiment tracking will increase adoption, but direct monetization is harder.

7) Customer support / operations teams
- Primary JTBD: Triage user-facing LLM failures, review conversation history, and correct or escalate outputs.
- Typical tools: support ticketing systems + observability session logs + annotation UIs.
- Key pains (evidence): poor playback/annotation tooling and difficulty linking a complaint to the exact model call, prompt, and context (Langfuse/ LangSmith session features).
  - Sources: https://langfuse.com (2026-03-21); https://www.langchain.com/langsmith/observability (2026-04-02).
- Buying criteria: fast playback, easy annotation, and links to support workflows (Zendesk, etc.).
- Switch triggers: frequent customer escalations tied to LLM outputs or SLA penalties.
- Implication for entrant: embedable session-replay and lightweight annotation tools that fit into existing support workflows have adoption potential but lower direct WTP.

Compact persona table (evidence + inference columns)

| Persona | Primary JTBD | Typical tools | Key evidence (examples) | Buying criteria | Switch triggers | Likely WTP |
|---|---|---|---|---|---|---|
| AI app engineers | Ship reliable LLM features | LangChain, LlamaIndex, vector DBs | LangChain repo; LlamaIndex repo (2026-03-21) | DX, low friction SDKs, latency | Recurring incidents; platform mandates (inference) | Medium (inference) |
| Platform / infra engineers | Operate multi-team LLM platforms | Langfuse/OpenTelemetry, CI, gateways | Langfuse docs; LangSmith docs; OpenAI Evals (2026-03-21/04-02) | Enterprise features, SLAs, integration | Security incident or exec mandate | High (evidence + inference) |
| Product Managers | Measure product impact | OpenAI Evals, Promptfoo, analytics | OpenAI Evals; Promptfoo (2026-03-21) | ROI mapping to KPIs, dashboards | Need to report impact to stakeholders | Medium (inference) |
| Evaluation / QA teams | Run regression tests | Evals, Promptfoo, CI | OpenAI Evals; Promptfoo (2026-03-21) | Repeatability, CI integration | Failed regressions/audits | High (regulated) |
| Security / Compliance | Enforce policy & audits | DLP + observability + policy engines | Pinecone enterprise; Langfuse (2026-03-21/04-02) | Data controls, auditability | Regulatory or contractual demands | High (inference) |
| Applied researchers | Run experiments & compare models | Notebooks, W&B, Evals | W&B; OpenAI Evals (2026-03-21) | Flexibility, reproducibility | Need to scale experiments | Low–Medium (inference) |
| Support / Ops | Triage failures | Support tooling + session logs | Langfuse; LangSmith (2026-03-21/04-02) | Playback, annotation, links to tickets | Frequent escalations | Low–Medium (inference) |

Which JTBD show the strongest willingness‑to‑pay (WTP)?
- High WTP (evidence + inference): Platform/infra teams; Security/Compliance; Evaluation/QA in regulated domains. Rationale: enterprise product pages and case studies emphasize RBAC, on‑prem/VPC, SLAs and audit features which align with procurement workflows (examples: Pinecone case study; Langfuse product pages; LangSmith docs).
- Medium WTP (inference): AI application engineers and PMs — will pay for clear productivity gains and reduced MTTI/MTTR. Evidence of commercial pathways: LangChain -> LangSmith and LlamaIndex cloud products.
- Lower/indirect WTP (evidence + inference): Applied researchers and support teams — typically OSS-first or internally provisioned unless product maps to measurable ROI.

Strategic implications (actionable)
- Prioritize platform teams for an enterprise‑first wedge where the product bundles trace schema, policy, and billing primitives — this matches the clearest procurement path and highest WTP (evidence: Pinecone, Langfuse, LangSmith).
- Maintain a developer‑first DX layer and LangChain/LlamaIndex integrations as the primary distribution mechanism; developers seed adoption and create evangelists inside platform teams (evidence: OSS traction of LangChain/LlamaIndex).
- Consider Eval‑as‑Platform as a near-term cross-cutting wedge that maps to PMs and QA with clear product metrics and an easy path to enterprise features (evidence: OpenAI Evals, Promptfoo).

Evidence gaps and next steps (must complete before marking section DONE)
1) Interview plan (priority): conduct 6–10 short interviews across personas (2 platform engineers, 2 app engineers, 2 PMs, 1 compliance lead, 1 QA lead) to validate WTP, procurement cadence, and real integration effort. Status: recommended.
2) Case studies (priority): add 2–3 engineering blogposts or postmortems where observability/eval tooling materially reduced incidents/time‑to‑detect; add links and short extracts to the appendix.
3) Effort sizing (medium): run a small integration spike measuring engineer‑days to add trace+eval hooks into a representative LangChain + LlamaIndex project and publish the result in appendix.
4) Appendix population (high): populate /workspace/document/sections/09-appendix.md with per‑row source links and access dates for the persona table and provider comparison matrix.

Section status: DRAFT — this file consolidates public‑source evidence and actionable implications. Mark as DONE only after interview validation and case studies are added to the appendix.
