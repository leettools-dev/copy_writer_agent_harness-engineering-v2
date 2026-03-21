# Research Notes

## Source: b2venture - The Evolution of the LLM Toolstack
- URL: https://www.b2venture.vc/stories/the-evolution-of-the-llm-toolstack---thoughts-on-capturing-value-in-the-genai-tech-stack-as-a-startup
- Why this source matters: Structured VC perspective that proposes a three-stage taxonomy for the LLM toolstack and highlights candidate categories and examples. Useful for shaping high-level market stages and wedge thinking.
- Reliability tier: weak-secondary (VC blog, opinionated)
- Date accessed: 2026-03-21

### Evidence extracted
- Claim: LLM toolstack is at "best-of-breed" stage (stage 2) with fragmentation and opportunity to move to end-to-end solutions.
  - Support: Article argument and category listing; cites examples of vendors and categories
  - Intended section(s): Market map, Current state, Breakpoint analysis
  - Confidence: medium

### Open questions
- What empirical traction signals (funding, customers, adoption) support the "stage 2" claim?
- Which vendors listed have measurable traction and which are marketing examples only?

### Draft implications
- Use the three-stage taxonomy as a candidate market map but triangulate with adoption/traction data from other sources.


## Source: OpenAI - evals (GitHub)
- URL: https://github.com/openai/evals
- Why this source matters: Primary-source technical framework for evaluation; useful to model the evaluation and benchmarking tooling category, methodology, and adoption.
- Reliability tier: primary
- Date accessed: 2026-03-21

### Evidence extracted
- Claim: OpenAI offers a structured, maintained evals framework for LLM assessment.
  - Support: repo README, docs, examples
  - Intended section(s): Provider landscape (evals), Appendix (methodology), Technical bottlenecks (evaluation)
  - Confidence: high

### Open questions
- How widely adopted is OpenAI evals vs alternatives (e.g., EleutherAI harness, LM-Eval)? Need GH stars, forks, and citations.

### Draft implications
- Use OpenAI evals as canonical example of eval tooling; capture repo-level signals (stars, forks) for traction evidence.


## Source: Langfuse (OSS observability)
- URL: https://langfuse.com/ and https://github.com/langfuse/langfuse
- Why this source matters: Concrete open-source product covering observability, evals, prompt management for LLMs. Helps illustrate observability category and production deployment considerations.
- Reliability tier: strong-secondary (company + OSS repo)
- Date accessed: 2026-03-21

### Evidence extracted
- Claim: Langfuse provides tracing, evals, prompt management, integrates with LangChain and OpenTelemetry; has blog posts about scaling and infrastructure.
  - Support: blog posts, GitHub repo, docs
  - Intended section(s): Provider landscape (observability), Technical bottlenecks (tracing, observability), Appendix (provider table)
  - Confidence: medium-high

### Open questions
- Traction metrics (customers, GitHub activity, funding) vs competitors.

### Draft implications
- Use Langfuse as a concrete case study for LLM observability and note gaps such as standardized trace schemas and cross-vendor telemetry.


## Next research tasks (priority)
1. Expand candidate list of exemplar market-mapping reports and vendor analyses (e.g., a16z essays, Menlo/VC pieces, State of AI report) using leet_websearch.
2. Gather traction signals for central providers: OpenAI, Langfuse, Fiddler, LlamaIndex, LangChain, Weights & Biases, Humanloop, etc.
3. Retrieve GitHub metrics (stars, forks, updated_at) for major OSS projects: openai/evals, langfuse/langfuse, EleutherAI/lm-evaluation-harness, LlamaIndex, LangChain.
4. Create document manifest and outline based on a normalized selected example.

