LangChain + Langfuse integration spike

Purpose
- Provide a runnable scaffold and explicit runbook to validate "time-to-first-trace", integration friction, and trace completeness when instrumenting a small LangChain agent with Langfuse (or LangSmith).

Goals (measured)
- Time-to-first-trace: target < 120 minutes from a clean environment.
- Trace completeness: retriever call, LLM call, and tool call present with token counts and timestamps.
- Developer effort: <= 6 code edits to working repo (setup + one instrumentation insertion).
- Friction log: capture blockers and categorize severity.

Files
- main.py: sample Python LangChain agent instrumented with Langfuse callback handler.
- requirements.txt: Python deps for the spike.
- RUNBOOK.md: step-by-step commands and measurement checklist (this file).
- sample_trace.json.expected: placeholder describing expected trace JSON fields.

Preconditions
- Python 3.10+ environment with network access (pip install will contact PyPI).
- Access to a Langfuse Cloud API key (LANGFUSE_SECRET_KEY) or LangSmith credentials if preferring LangSmith.
- Optional: access to OpenAI API key (OPENAI_API_KEY) or a local LLM endpoint.

Quickstart (execute)
1. Create and activate a virtualenv: python -m venv .venv && source .venv/bin/activate
2. Install deps: pip install -r requirements.txt
3. Set environment variables (example):
   - export LANGFUSE_SECRET_KEY="<your-key>"
   - export LANGFUSE_BASE_URL="https://cloud.langfuse.com"  # or your self-host URL
   - export OPENAI_API_KEY="<your-openai-key>"
4. Run: python main.py
5. Observe console output and open Langfuse / LangSmith UI to find the trace. Save a JSON export of one example trace to ./sample_trace.json

Measurement and artifacts to capture
- Wall clock: time from starting step 2 to first visible trace in UI.
- Number of code edits made vs expected.
- Screenshot of trace UI showing retriever/LLM/tool spans and token/cost counts.
- Exported sample_trace.json
- Short post-run notes: blockers, config surprises, latency impact observed.

Notes
- If Langfuse Cloud is not accessible, swap in LangSmith by replacing Langfuse client usage with LangSmith SDK and update env vars.
- This repo is a scaffold; to complete the spike run this on a machine with network and API keys.

Runbook complete.