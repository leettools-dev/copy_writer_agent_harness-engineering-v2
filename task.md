Here is a strong research-agent prompt you can hand off directly, followed by acceptance criteria and operating guidance.

You can use it as-is or adapt the scope.

---

## Deep research prompt: LLM harness engineering market and breakpoint analysis

You are a senior research analyst and product strategist. Your task is to conduct deep research on the **LLM harness engineering** landscape and produce a decision-useful report for a startup founder.

### Objective

We want to understand the market around **harness engineering for LLM systems**:

* what “harness engineering” means in practice
* the main providers and their products
* how the market is segmented
* the current state of the space
* what users actually need and pay for
* what the technical and commercial bottlenecks are
* where a credible **breakpoint / wedge / entry point** exists for a new entrant
* why that opportunity exists now

The final goal is **not** just to summarize companies. The goal is to identify:

1. the most important product categories and buyer needs
2. where incumbents are strong vs weak
3. what is still unsolved
4. what a newcomer could build that has a realistic chance to win
5. the reasoning and evidence behind that conclusion

---

## Important definition

For this research, interpret **LLM harness engineering** broadly as the tooling, infrastructure, abstractions, and operating systems used to build, run, evaluate, debug, and improve LLM-based applications and agents in production.

This may include, but is not limited to:

* agent frameworks
* orchestration runtimes
* workflow engines
* prompt/version/config management
* eval and benchmarking systems
* observability and tracing
* guardrails and policy enforcement
* tool calling / function calling infrastructure
* memory and context management
* retrieval and RAG orchestration
* simulation and testing harnesses
* multi-agent coordination
* deployment/runtime sandboxes
* human-in-the-loop review systems
* cost/performance optimization layers
* reliability, fallback, and routing systems
* enterprise governance and audit layers

Do **not** assume the term has one canonical industry meaning. Part of the research is to clarify how adjacent markets overlap and where boundaries are fuzzy.

---

## Core questions to answer

### 1. Market definition and taxonomy

* What is the best working definition of “LLM harness engineering”?
* What adjacent terms are used in industry instead?
* What major product categories exist in this space?
* Which categories are infrastructure, developer tooling, platform tooling, or enterprise operations tooling?
* Where is the market still fragmented?

### 2. Main providers and product landscape

Identify the main providers and organize them by category.

For each relevant provider, capture:

* company name
* product names
* category
* target users
* core value proposition
* key differentiators
* pricing or monetization model if known
* level of maturity / traction signals
* notable customers, ecosystem adoption, or open-source traction
* key strengths
* obvious limitations or gaps

Include both:

* major commercial vendors
* important open-source projects

Do not over-index only on famous names. Include the most practically important players.

### 3. Current state of the market

* What is the market structure today?
* Which layers are crowded?
* Which layers are still immature?
* Which products are becoming commodity?
* Which capabilities remain painful for real teams?
* What has changed in the last 12–18 months?
* Where are buyers still stitching multiple tools together?

### 4. Customer jobs-to-be-done

Identify the main user personas and their real jobs-to-be-done, such as:

* AI application engineers
* agent platform teams
* infra/platform engineers
* PMs for LLM products
* enterprise security/compliance buyers
* applied researchers
* evaluation teams
* operations / support / QA teams

For each persona:

* what problem are they really trying to solve?
* what do they use today?
* what are their biggest frustrations?
* what buying criteria matter most?
* what would make them switch?

### 5. Technical bottlenecks

Analyze the hardest technical problems in harness engineering today, such as:

* reproducibility
* evaluation fidelity
* debugging non-deterministic systems
* agent reliability
* latency/cost tradeoffs
* state and memory handling
* tool use correctness
* workflow composition
* long-running task orchestration
* human oversight
* deployment/runtime isolation
* security/governance
* cross-model portability
* failure recovery
* benchmarking real-world business outcomes

Separate:

* solved well enough
* partially solved
* still fundamentally hard

### 6. Commercial bottlenecks and moat analysis

* Where do current providers have defensibility?
* Where is there weak moat?
* What layers are likely to collapse into model providers, cloud providers, or app frameworks?
* Where does open source commoditize the market?
* What kinds of products are hard to sell despite technical merit?
* What kinds of products are sticky because they sit in operational workflows?

### 7. Breakpoint analysis for a newcomer

This is the most important section.

Identify the most promising entry points for a new company. For each possible wedge:

* define the wedge clearly
* describe the target buyer
* explain the urgent pain
* explain why existing products do not solve it well
* explain why now is the right time
* describe the technical feasibility
* describe the GTM plausibility
* assess defensibility over time
* state the risks and counterarguments

Then rank the top 3 opportunities.

The conclusion must answer:

* **What is the most credible breakpoint for a newcomer?**
* **Why this one instead of others?**
* **What evidence supports the claim?**

### 8. Strategic recommendations

Provide specific recommendations for a hypothetical new entrant:

* what product to build first
* what not to build first
* whether to start open source, commercial, or hybrid
* whether to sell to developers, platform teams, or enterprise buyers first
* what integration ecosystem is most important
* what metric would show early product-market fit
* what the first 3–5 roadmap milestones should be

---

## Research method requirements

You must do real research and cite sources for factual claims.

### Source requirements

Use a mix of:

* official company/product websites
* technical documentation
* pricing pages
* product blogs / launch posts
* GitHub repositories
* conference talks / engineering blogs
* reputable analysis articles
* interviews / podcasts if useful
* benchmark or eval papers where relevant

Prefer primary sources when possible.

### Evidence requirements

For every major conclusion:

* cite evidence
* distinguish fact from inference
* clearly label speculative reasoning
* do not make unsupported claims

### Comparison requirements

Where possible, compare products across:

* abstraction level
* deployment model
* developer experience
* observability
* eval support
* enterprise readiness
* openness/extensibility
* pricing
* adoption signals
* likely durability

---

## Output format

Produce the result in the following structure:

### 1. Executive summary

A concise but substantive summary of:

* market definition
* current state
* top providers
* biggest gaps
* top 3 newcomer opportunities
* recommended wedge

### 2. Market map

A structured taxonomy of the space with categories and subcategories.

### 3. Provider landscape

A detailed provider-by-provider analysis organized by category.

### 4. Customer and JTBD analysis

User personas, pains, workflows, and unmet needs.

### 5. Technical bottlenecks

What is solved vs unsolved.

### 6. Commercial landscape and moat analysis

Where value accrues and where it erodes.

### 7. Breakpoint analysis

Top opportunity areas for a newcomer, ranked and argued.

### 8. Strategic recommendation

Your recommended wedge, product direction, and rationale.

### 9. Appendix

* source list
* company table
* comparison matrix
* terminology notes

---

## Required quality bar

Your work should be:

* analytical, not just descriptive
* evidence-based
* skeptical of marketing claims
* useful for startup strategy
* explicit about uncertainty
* organized enough that a founder could use it to make product decisions

Do not stop at “here are the companies.”
Do not give shallow summaries.
Do not just repeat vendor positioning.

We care most about:

* what is actually happening in the market
* what is hard and still unsolved
* what wedge could work for a new entrant
* why that wedge is credible

---

## Acceptance criteria

Your output will be accepted only if all of the following are true:

1. **Clear definition**

   * You provide a working definition of “LLM harness engineering.”
   * You distinguish it from adjacent categories.

2. **Comprehensive landscape**

   * You identify the major providers and important open-source projects.
   * You organize them into a useful taxonomy rather than a flat list.

3. **Evidence-backed**

   * Major factual claims have citations.
   * Conclusions are tied to specific evidence.
   * Speculation is labeled as speculation.

4. **Current-state analysis**

   * You explain the current market situation, not just historical background.
   * You identify which layers are crowded, immature, or commoditizing.

5. **User-centric analysis**

   * You identify real buyer personas and jobs-to-be-done.
   * You explain what hurts in current workflows.

6. **Technical depth**

   * You analyze real technical bottlenecks in harness engineering.
   * You separate solved, partially solved, and unsolved problems.

7. **Commercial reasoning**

   * You analyze defensibility, monetization, and market structure.
   * You identify where incumbents are vulnerable.

8. **Breakpoint insight**

   * You propose concrete newcomer wedges.
   * You rank them.
   * You explain why the top wedge is the most credible.

9. **Actionability**

   * You provide recommendations that a startup team could act on.
   * The recommendation includes what to build first and why.

10. **No fluff**

* The report is not generic.
* It does not read like a vendor directory.
* It contains original synthesis and reasoning.

---

## Additional guidance for the agent

* Be careful with terminology. Different companies may describe similar layers with different names.
* Avoid being trapped by vendor marketing language.
* Look for repeated pain points across multiple sources; those often indicate real market gaps.
* Pay special attention to where teams still need to build custom glue code, internal tooling, or ad hoc evaluation systems.
* Give extra weight to operational pain in real production environments, not just demo quality.
* Where possible, identify whether a category is likely to be absorbed by model providers or cloud platforms.
* Highlight places where newcomers can win through sharper focus, better abstraction, superior workflow integration, or better economics.
* Prefer a smaller but sharper conclusion over a broad but vague conclusion.

---

## Optional extension

If time allows, add a final section:

### “What a strong 2-person startup could plausibly ship in 6 months”

Include:

* MVP scope
* ideal target customer
* key integrations
* minimum differentiation
* why this is feasible for a small team

---
