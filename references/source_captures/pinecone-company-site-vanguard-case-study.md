<!-- generated-by: copy_writer_agent.runtime_sync -->
# Pinecone (company site & Vanguard case study)

- URL: https://www.pinecone.io/ and https://www.pinecone.io/customers/vanguard/
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Pinecone is a widely used managed vector DB with enterprise customers and explicit compliance/enterprise features; the Vanguard case study provides a concrete example of enterprise adoption with measurable outcomes.
- Reliability tier: strong-secondary (vendor primary source + case study)
- Date accessed: 2026-04-02

## Evidence extracted
- Customer case: "How Vanguard worked with Pinecone to boost customer support with faster calls and 12% more accurate responses" (Pinecone customer case study page).
- Metrics reported: ~12% improvement in retrieval accuracy after switching to hybrid retrieval using Pinecone; reduced call times and operational overhead for Vanguard's customer support during peak periods.
- Deployment & enterprise features: Vanguard used Pinecone serverless in a dedicated AWS account/cluster; Pinecone provided support for AWS PrivateLink and enterprise security controls; metadata filtering used for compliance and marking documents "live" vs "stale".
- Technical approach: hybrid retrieval (dense embeddings + sparse BM25), real-time updates, metadata filtering for compliance, separation of stale docs into long-term storage (DynamoDB).
- Quote: Pinecone worked with Vanguard to create a dedicated AWS account and cluster to meet security/performance requirements.
- Intended sections: Provider landscape (vector DBs), Customer JTBD (platform/infra engineers, compliance), Appendix (case study citations)

## Open questions
- Independent verification of Vanguard's internal metrics (vendor case studies are inherently vendor-curated).
- Additional enterprise case studies for Pinecone (other verticals) to triangulate the generality of the claim.

## Draft implications
- Vendor case study supports the assertion that enterprise buyers prioritize security controls, hybrid retrieval accuracy, and metadata filtering for compliance — reinforcing the Enterprise-first wedge for harness tooling that bundles audit/trace and governance primitives.
- ---
