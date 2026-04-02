Customer and JTBD analysis

Purpose
- Identify the key personas that operate, build, and buy LLM harness tooling; surface their concrete jobs‑to‑be‑done (JTBD), the tools they currently stitch together, their main frustrations, and buying criteria that determine whether a new product will be adopted.

Why this matters
- Breakpoint analysis depends on matching a focused wedge to a persona with urgent pain and willingness to pay. This section turns vendor‑centric categories into human jobs that a founder can target.

Approach and evidence
- Primary evidence used below is drawn from vendor/product docs and OSS repos (LangChain, LlamaIndex, LangSmith/Langfuse, OpenAI Evals, Promptfoo, Pinecone, Chroma, Weaviate, Milvus, W&B). See references/research_notes.md for per‑source captures and metrics.
- Where claims are inference (WTP, procurement cadence), they are explicitly labeled as "inference" and flagged for interview validation.

Synthesis: top personas, JTBD, tools, pains, evidence and confidence

For each persona we list: Primary JTBD; Typical tools they stitch together; Concrete pains; Representative evidence (links); Confidence in the claim (high/medium/low).

1) AI application engineers / ML engineers
- Primary JTBD: Build reliable, repeatable LLM features (RAG, classification, multi‑step agents), ship to production, and iterate quickly.
- Typical stack: LangChain + LlamaIndex (or equivalent frameworks) + vector DBs (Pinecone, Chroma, Milvus) + model APIs (OpenAI, Anthropic) + deployment infra (K8s, serverless) + ad‑hoc logging / CI.
- Concrete pains:
  - brittle, shifting integrations and breaking SDK changes (evidence: active LangChain/LlamaIndex repos and frequent releases).
  - low-fidelity visibility into why a model returned a result (need for traces/structured events).
  - difficulty reproducing non‑deterministic failures and rolling back prompt/config changes.
- Representative evidence:
  - LangChain repo & LangSmith docs (adoption + observability product): https://github.com/langchain-ai/langchain; https://www.langchain.com/langsmith
  - LlamaIndex repo (RAG/document agent): https://github.com/run-llama/llama_index
- Confidence: high for adoption and integration brittleness; medium for production-vs-prototype split (requires interviews).

2) Platform / infra engineers (internal LLM platform teams)
- Primary JTBD: Provide multi‑tenant routing, deployment, monitoring, policy enforcement and chargeback for LLM workloads used by product teams.
- Typical stack: internal model gateways, Langfuse/OpenTelemetry + observability stack, CI/CD, policy engines, billing/chargeback systems.
- Concrete pains:
  - governance & audit (RBAC, immutable logs, data residency).
  - cost allocation and intelligent routing across model vendors/versions.
  - lack of a standardized LLM trace/event schema and CI integrations for evals.
- Representative evidence:
  - Langfuse (observability + enterprise features): https://langfuse.com
  - OpenAI Evals docs (CI + private evals): https://github.com/openai/evals; https://platform.openai.com/docs/guides/evals
- Confidence: high that these are prioritized platform concerns; inference: WTP is high in regulated enterprises.

3) Product Managers for LLM features
- Primary JTBD: Define success metrics for LLM features, prioritize prompt/model changes, and demonstrate product impact to stakeholders.
- Typical stack: eval tools (OpenAI Evals, Promptfoo), product analytics, A/B experimentation platforms.
- Concrete pains:
  - mapping model/eval outputs to product KPIs and customer‑facing metrics; lacking non‑engineer UX to interpret eval artifacts.
- Representative evidence:
  - OpenAI Evals + Promptfoo docs showing CI and reporting capabilities: https://github.com/openai/evals; https://github.com/promptfoo/promptfoo
- Confidence: medium‑high that PMs need better product‑facing eval UX; WTP: medium (conditional on demonstrated ROI).

4) Evaluation / QA teams
- Primary JTBD: Run regression tests for model/prompt changes, maintain private eval registries, ensure no regressions in critical behavior.
- Typical stack: OpenAI Evals, Promptfoo, custom CI pipelines and dataset registries.
- Concrete pains:
  - flaky tests, brittle datasets, friction integrating evals into CI and audit trails.
- Representative evidence:
  - OpenAI Evals repo & Promptfoo: https://github.com/openai/evals; https://github.com/promptfoo/promptfoo
- Confidence: high for functional need; medium for enterprise penetration (varies by org size).

5) Security / Compliance / Legal teams
- Primary JTBD: Enforce policies, prevent data leakage, ensure auditable LLM use and meet regulatory requirements.
- Typical stack: policy engines, DLP integrations, observability/audit logs, SSO/IAM.
- Concrete pains:
  - limited per‑call enforcement surface and missing data residency/retention controls in hosted offerings.
- Representative evidence:
  - Vendor enterprise pages and Langfuse position on audit/VPC/on‑prem options (examples: Pinecone enterprise pages, Langfuse): https://www.pinecone.io/; https://langfuse.com
- Confidence: medium‑high that compliance drives procurement in regulated verticals; WTP: high but with long procurement cycles (inference).

6) Applied researchers / data scientists
- Primary JTBD: Run controlled experiments to improve prompts/models, compare models, and analyze failure modes.
- Typical stack: notebooks, W&B experiment tracking, Evals/prompt testing frameworks.
- Concrete pains:
  - reproducibility, dataset/versioning, and cost when running large comparison experiments.
- Representative evidence:
  - W&B positioning and popularity of eval frameworks: https://wandb.ai/; https://github.com/openai/evals
- Confidence: medium; this persona often prefers OSS or existing experiment infra and is price‑sensitive.

7) Customer support / operations teams
- Primary JTBD: Triage user‑facing LLM failures, review conversation history, and correct or escalate outputs.
- Typical stack: support ticketing + observability session logs + annotation UIs.
- Concrete pains:
  - poor playback/annotation tooling and difficulty linking a complaint to the exact model call, prompt, and context.
- Representative evidence:
  - observability vendors and docs that emphasize session replay and trace linking (e.g., Langfuse feature pages).
- Confidence: medium.

Compact persona -> JTBD -> tools -> key evidence table

| Persona | Primary JTBD | Typical tools (examples) | Representative evidence | Confidence |
|---|---|---|---|---|
| AI application engineers | Ship reliable LLM features | LangChain, LlamaIndex, Pinecone/Chroma/Milvus | https://github.com/langchain-ai/langchain; https://github.com/run-llama/llama_index | high |
| Platform / infra engineers | Operate multi-team LLM platforms | Langfuse/OpenTelemetry, CI/CD, internal gateways | https://langfuse.com; https://github.com/openai/evals | high |
| Product Managers | Measure product impact | OpenAI Evals, Promptfoo, analytics | https://github.com/openai/evals; https://github.com/promptfoo/promptfoo | med-high |
| Evaluation / QA teams | Run model regression tests | OpenAI Evals, Promptfoo, CI | https://github.com/openai/evals; https://github.com/promptfoo/promptfoo | high |
| Security / Compliance | Enforce policy & audits | DLP/policy engines + observability logs | https://www.pinecone.io/; https://langfuse.com | med-high |
| Applied researchers / DS | Run experiments and compare models | Notebooks, W&B, OpenAI Evals | https://wandb.ai/; https://github.com/openai/evals | medium |
| Support / Ops | Triage user-facing failures | Support tooling + observability logs | vendor docs on session-replay; Langfuse | medium |

Which JTBD show the strongest willingness‑to‑pay (WTP)?
- High WTP: Platform/infra teams; Security/Compliance; Evaluation/QA in regulated domains. Rationale: vendor enterprise pages emphasize RBAC, on‑prem/VPC, SLAs and audit features which align to procurement workflows (see Pinecone enterprise pages, Langfuse). (Evidence: vendor docs.)
- Medium WTP: AI application engineers and PMs — will pay for clear productivity gains (evidence: commercialization moves like LangChain -> LangSmith; LlamaIndex cloud). (Part inference; needs interviews to quantify.)
- Lower direct WTP: Applied researchers and support teams — generally OSS-first or internally provisioned unless a product maps directly to measurable ROI.

Strategic implications for a newcomer
- Enterprise-first wedge: build audit/trace + governance + billing primitives and target platform teams in regulated verticals. Pros: higher ACV and defensibility via compliance. Cons: long sales cycles and heavyweight support.
- PLG / developer-first wedge: deep, low‑friction integrations with LangChain/LlamaIndex and outstanding DX (easy SDKs, callbacks, minimal config). Pros: fast adoption via OSS communities. Cons: monetization and enterprise conversion are harder.
- Cross‑cutting wedge — "Eval-as-Platform": private eval registries + CI integrations + audit logs. Serves PMs, QA, and platform teams; can be positioned as enterprise‑ready when paired with audit and RBAC.

Evidence gaps and recommended next steps (actionable)
1. Interview plan: conduct 6–10 short interviews across personas (2 platform engineers, 2 app engineers, 2 PMs, 1 compliance lead, 1 QA lead) to validate WTP, procurement cadence, and integration effort. (Status: recommended)
2. Case studies: capture 2–3 engineering blogposts or postmortems where observability/eval tooling materially reduced incidents/time‑to‑detect. (Status: to collect)
3. Effort sizing: run a small integration spike that measures engineer‑days to add trace+eval hooks into a representative LangChain + LlamaIndex project; publish the result in the appendix. (Status: recommended)
4. Appendix population: add per‑row source links and access dates for the persona table. (Status: partly done — many links included above; finalize in appendix.)

Section status: DRAFT — substantive and evidence‑backed where public sources exist; requires interview validation and 2–3 case studies before marking as DONE.
