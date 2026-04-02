<!-- generated-by: copy_writer_agent.runtime_sync -->
# Pinecone (Vendor case study)

- URL: https://www.pinecone.io/customers/vanguard/
- Source role: supporting_source
- Linked sections: Not mapped yet
- Why this source matters: Pinecone is a leading managed vector database that demonstrates enterprise deployment patterns, security controls (AWS PrivateLink / dedicated clusters), and measurable retrieval improvements in production RAG use cases.
- Reliability tier: primary (vendor-published case study)
- Date accessed: 2026-04-02

## Evidence extracted
- Use case: Vanguard built an internal RAG-powered Agent Assist for customer support to reduce call times and improve retrieval accuracy. (Support: Pinecone Vanguard case study (vendor-published).)
- Metrics claimed: ~12% improvement in retrieval accuracy (hybrid dense+sparse) vs dense-only retrieval; faster call times and reduced operational overhead reported by Vanguard.
- Enterprise features cited: hybrid search (dense + BM25 sparse), real-time updates, AWS PrivateLink support, dedicated clusters / BYOC capabilities, metadata filtering for compliance, flexible distance metrics, and advanced metadata filtering to differentiate live vs stale documents.
- Deployment details: dedicated AWS account and cluster for Vanguard; metadata strategy to mark documents as "live" or "stale" and offload stale documents to long-term storage (DynamoDB) for regulatory compliance.
- Intended sections: Provider landscape (vector DB), Customer JTBD (platform teams, compliance), Appendix (case studies)

## Open questions
- Independent verification of the 12% accuracy uplift; broader adoption metrics for Pinecone enterprise customers beyond case studies.

## Draft implications
- The Vanguard case study validates that enterprise customers require BYOC/dedicated deployments and advanced metadata filtering to meet compliance needs — this supports the earlier persona claim that platform/compliance teams have high WTP for enterprise-grade features.
- Vector DB vendors' willingness to provide dedicated infrastructure and security controls suggests a path for newcomers to partner or integrate rather than reimplement vector storage when targeting platform teams.
- ---
