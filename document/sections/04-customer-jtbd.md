Customer and JTBD analysis

Purpose
- Identify the key personas that operate, build, and buy LLM harness tooling; surface their concrete jobs‑to‑be‑done (JTBD), the tools they currently stitch together, their main frustrations, and the buying criteria that determine whether a new product will be adopted.

Why this matters
- Breakpoint analysis depends on matching a focused wedge to a persona with urgent pain and willingness to pay. This section turns vendor‑centric categories into human jobs that a founder can target and tests those jobs against primary‑source evidence.

Approach and evidence
- Primary evidence used below is drawn from vendor/product docs, OSS repos, case studies, and product pages (LangChain, LlamaIndex, Langfuse, OpenAI Evals, Promptfoo, Pinecone, Chroma, Weaviate, Milvus, W&B). See /workspace/references/research_notes.md for per‑source captures and metrics.
- Where claims are inference (WTP, procurement cadence), they are explicitly labeled as "inference" and flagged for interview validation.

Synthesis: personas, JTBD, tools, pains, evidence, confidence, and WTP

For each persona we list: Primary JTBD; Typical tools they stitch together; Concrete pains; Representative primary evidence (URL + access date); Confidence in the claim (high/medium/low); Likely WTP (high/medium/low — labeled inference when not directly evidenced).

1) AI application engineers / ML engineers
- Primary JTBD: Build reliable, repeatable LLM features (RAG, classification, multi‑step agents), ship to production, and iterate quickly.
- Typical stack: LangChain or LlamaIndex-based app code + vector DBs (Pinecone, Chroma, Milvus) + model APIs (OpenAI, Anthropic) + infra (K8s/serverless) + ad‑hoc logging/CI.
- Concrete pains:
  - brittle integrations and breaking SDK changes; fast-moving OSS releases that require maintenance.
  - low-fidelity visibility into why a model returned a result (need for traces/structured events/callbacks).
  - difficulty reproducing non‑deterministic failures and rolling back prompt/config changes.
- Representative evidence:
  - LangChain repo + LangSmith product (adoption + observability): https://github.com/langchain-ai/langchain (accessed 2026-03-21)
  - LlamaIndex repo (RAG/document agent): https://github.com/run-llama/llama_index (accessed 2026-03-21)
- Confidence: high
- Likely WTP: medium (inference: teams will pay for clear productivity and SLA‑ready integrations)

2) Platform / infra engineers (internal LLM platform teams)
- Primary JTBD: Provide multi‑tenant routing, deployment, monitoring, policy enforcement, and chargeback for LLM workloads consumed by product teams.
- Typical stack: internal model gateway, Langfuse/OpenTelemetry traces, CI/CD, policy engines, billing/chargeback systems.
- Concrete pains:
  - governance & audit (RBAC, immutable logs, data residency and retention controls).
  - cost allocation and routing across model vendors/versions.
  - lack of a standardized LLM trace/event schema that integrates with CI and evals.
- Representative evidence:
  - Langfuse product pages and OSS project combining traces + enterprise features: https://langfuse.com (accessed 2026-03-21)
  - OpenAI Evals docs showing CI & private eval support: https://github.com/openai/evals (accessed 2026-03-21)
- Confidence: high
- Likely WTP: high (enterprise procurement signals for audit/SLA features)

3) Product Managers for LLM features
- Primary JTBD: Define success metrics for LLM features, prioritize prompt/model changes, and demonstrate product impact to stakeholders.
- Typical stack: eval tooling (OpenAI Evals, Promptfoo), product analytics, A/B experimentation platforms.
- Concrete pains:
  - translating model/eval outputs into product KPIs and stakeholder-facing reports; lack of non‑engineer UX for eval artifacts.
  - difficulty correlating changes in model/prompt with downstream product metrics (engagement, retention, task completion).
- Representative evidence:
  - OpenAI Evals + Promptfoo docs: https://github.com/openai/evals (accessed 2026-03-21); https://github.com/promptfoo/promptfoo (accessed 2026-03-21)
  - Product-oriented writeups describing the gap between model metrics and product KPIs (see Research Notes captures).
- Confidence: medium-high
- Likely WTP: medium (inference: PMs influence purchases when ROI and stakeholder reporting are demonstrable)

4) Evaluation / QA teams
- Primary JTBD: Run regression tests for model/prompt changes, maintain private eval registries, ensure no regressions in critical behavior.
- Typical stack: OpenAI Evals, Promptfoo, custom CI pipelines and dataset registries.
- Concrete pains:
  - flaky tests, brittle datasets, friction integrating evals into CI and audit trails.
- Representative evidence:
  - OpenAI Evals repo & Promptfoo: https://github.com/openai/evals (accessed 2026-03-21); https://github.com/promptfoo/promptfoo (accessed 2026-03-21)
- Confidence: high
- Likely WTP: high for regulated/mission-critical applications; medium otherwise (inference)

5) Security / Compliance / Legal teams
- Primary JTBD: Enforce policies, prevent data leakage, ensure auditable LLM use and meet regulatory requirements.
- Typical stack: policy engines, DLP integrations, observability/audit logs, SSO/IAM, on‑prem/VPC options.
- Concrete pains:
  - limited per‑call enforcement surface in many hosted offerings; missing data residency/retention controls.
- Representative evidence:
  - Vendor enterprise pages (Pinecone enterprise features) and Langfuse position on audit/VPC/on‑prem: https://www.pinecone.io/ (accessed 2026-04-02); https://langfuse.com (accessed 2026-03-21)
- Confidence: medium-high
- Likely WTP: high in regulated verticals (inference supported by vendor enterprise positioning)

6) Applied researchers / data scientists
- Primary JTBD: Run controlled experiments to improve prompts/models, compare models, and analyze failure modes.
- Typical stack: notebooks, W&B experiment tracking, Evals/prompt testing frameworks.
- Concrete pains:
  - reproducibility, dataset/versioning, and cost when running large comparison experiments.
- Representative evidence:
  - W&B positioning and OpenAI Evals: https://wandb.ai/ (accessed 2026-03-21); https://github.com/openai/evals (accessed 2026-03-21)
- Confidence: medium
- Likely WTP: low-to-medium (OSS-first preference; price sensitive)

7) Customer support / operations teams
- Primary JTBD: Triage user‑facing LLM failures, review conversation history, and correct or escalate outputs.
- Typical stack: support ticketing + observability session logs + annotation UIs.
- Concrete pains:
  - poor playback/annotation tooling and difficulty linking a complaint to the exact model call, prompt, and context.
- Representative evidence:
  - Observability vendors and feature pages that emphasize session replay and trace linking (e.g., Langfuse): https://langfuse.com (accessed 2026-03-21)
- Confidence: medium
- Likely WTP: low-to-medium (teams may adopt via platform or internal tooling budgets)

Compact persona -> JTBD -> tools -> key evidence table (sources + access dates)

| Persona | JTBD | Typical tools (examples) | Key evidence (URL; access date) | Confidence | Likely WTP |
|---|---|---|---|---|---|
| AI application engineers | Ship reliable LLM features | LangChain, LlamaIndex, Pinecone/Chroma/Milvus | https://github.com/langchain-ai/langchain (2026-03-21); https://github.com/run-llama/llama_index (2026-03-21) | high | medium |
| Platform / infra engineers | Operate multi-team LLM platforms | Langfuse/OpenTelemetry, CI/CD, internal gateways | https://langfuse.com (2026-03-21); https://github.com/openai/evals (2026-03-21) | high | high |
| Product Managers | Measure product impact | OpenAI Evals, Promptfoo, analytics | https://github.com/openai/evals (2026-03-21); https://github.com/promptfoo/promptfoo (2026-03-21) | med-high | medium |
| Evaluation / QA teams | Run regression tests | OpenAI Evals, Promptfoo, CI | https://github.com/openai/evals (2026-03-21); https://github.com/promptfoo/promptfoo (2026-03-21) | high | high (regulated) |
| Security / Compliance | Enforce policy & audits | DLP/policy engines + observability logs | https://www.pinecone.io/ (2026-04-02); https://langfuse.com (2026-03-21) | med-high | high |
| Applied researchers / DS | Run experiments & compare models | Notebooks, W&B, OpenAI Evals | https://wandb.ai/ (2026-03-21); https://github.com/openai/evals (2026-03-21) | medium | low-medium |
| Support / Ops | Triage user-facing failures | Support tooling + observability logs | https://langfuse.com (2026-03-21) | medium | low-medium |

Which JTBD show the strongest willingness‑to‑pay (WTP)?
- High WTP (evidence + inference): Platform/infra teams; Security/Compliance; Evaluation/QA in regulated domains. Rationale: vendor enterprise pages emphasize RBAC, on‑prem/VPC, SLAs and audit features which align with procurement workflows (examples: Pinecone enterprise pages; Langfuse). (See research notes in /workspace/references/research_notes.md.)
- Medium WTP (inference): AI application engineers and PMs — will pay for clear productivity gains and reduced MTTI/MTTR. Evidence of commercial pathways: LangChain -> LangSmith and LlamaIndex cloud products (see research notes).
- Lower direct WTP (evidence + inference): Applied researchers and support teams — typically OSS-first or internally provisioned unless product maps to measurable ROI.

Strategic implications for a newcomer (evidence‑driven)
- Enterprise-first wedge: build audit/trace + governance + billing primitives and target platform teams in regulated verticals. Pros: higher ACV and defensibility via compliance. Cons: long sales cycles and heavyweight support. Evidence: vendor enterprise pages and Pinecone case study with Vanguard (see /workspace/references/research_notes.md).
- PLG / developer-first wedge: deep, low‑friction integrations with LangChain/LlamaIndex and outstanding DX (easy SDKs, callbacks, minimal config). Pros: fast adoption via OSS communities. Cons: monetization and enterprise conversion are harder. Evidence: LangChain and LlamaIndex OSS traction (research notes).
- Cross‑cutting wedge — "Eval-as-Platform": private eval registries + CI integrations + audit logs. Serves PMs, QA, and platform teams; can be positioned as enterprise‑ready when paired with audit and RBAC. Evidence: OpenAI Evals + Promptfoo positioning and CI integrations.

Evidence gaps and recommended next steps (actionable)
1. Interview plan (priority): conduct 6–10 short interviews across personas (2 platform engineers, 2 app engineers, 2 PMs, 1 compliance lead, 1 QA lead) to validate WTP, procurement cadence, and integration effort. Status: recommended.
2. Case studies (priority): capture 2–3 engineering blogposts or postmortems where observability/eval tooling materially reduced incidents/time‑to‑detect; add links to appendix.
3. Effort sizing (medium): run a small integration spike that measures engineer‑days to add trace+eval hooks into a representative LangChain + LlamaIndex project and publish the result in appendix.
4. Appendix population (high): populate /workspace/document/sections/09-appendix.md with per‑row source links and access dates for the persona table and provider comparison matrix.

Section status: DRAFT — this draft consolidates public‑source evidence and concrete implications; mark as DONE only after interview validation and 2–3 external case studies are added to the appendix.
