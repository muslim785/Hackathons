<!-- SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
Modified principles: N/A (new constitution)
Added sections: All sections (new constitution)
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/commands/*.md ✅ reviewed
  - README.md ⚠ pending
Follow-up TODOs: None
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### Physical AI as Embodied Intelligence
Physical AI = embodied intelligence governed by physical laws. All implementations must respect the constraints and opportunities provided by physical reality, with algorithms designed to work within real-world physics rather than abstract mathematical spaces.

### Robots as Distributed Systems
Robots are distributed systems, not single programs. Each robotic component must function as an independent service with well-defined interfaces, enabling modular development, testing, and replacement of individual components without affecting the whole system.

### Middleware and Structure Precedence
Middleware and structure come before intelligence. Robotic systems must establish reliable communication, coordination, and data flow mechanisms before implementing intelligent behaviors, ensuring stable foundations for higher-level capabilities.

### Specs as Source of Truth
Specifications are the source of truth, not prose or code. All system behavior, interfaces, and requirements must be formally documented in specifications before implementation, with code serving as the executable manifestation of these specifications.

### First Principles Pedagogy
Teach from first principles to systems. Educational content must ground learners in fundamental concepts before advancing to complex applications, ensuring deep understanding of underlying mechanisms that govern Physical AI and humanoid robotics.

### AI-Native Content Integration
All content must be spec-driven with no undocumented manual steps. Book content and RAG chatbot share the same source, with chatbot answers grounded in retrieved text only to ensure accuracy and consistency.

## Technical Standards

### Tooling Invariants
Documentation systems must use Docusaurus, specifications managed with Spec-Kit Plus, AI authoring with Claude Code, backend implemented in FastAPI, and storage utilizing Neon Postgres with Qdrant vector database. All projects must adhere to these foundational tools to ensure consistency and interoperability.

### RAG System Guarantees
No hallucinated answers are permitted. The RAG system must respect selected-text-only queries and explicitly state "not enough context" when applicable, maintaining trustworthiness and preventing misinformation.

### Reproducible Workflows
All processes must be reproducible from specifications alone, with no hidden dependencies or undocumented manual steps. Every transformation from concept to deployed system must be traceable and repeatable by others.

## Development Workflow

### Content and Code Alignment
Educational content, specifications, code implementations, and intelligent agents must be developed in tight alignment, with changes propagating consistently across all components to maintain system coherence.

### Specification-Driven Implementation
Before any code is written, specifications must define the complete behavioral contract, interfaces, data flows, and expected outcomes. Implementation serves only to realize the specified behavior.

### Integrated Testing Approach
Testing must validate both educational objectives and system functionality, ensuring that learning outcomes align with operational capabilities and that the system behaves as specified.

## Governance

This constitution establishes the fundamental principles governing all aspects of the Physical AI & Humanoid Robotics Textbook project. All team members, contributors, and stakeholders must adhere to these principles in their work. Amendments to this constitution require explicit documentation of the change, justification based on project evolution needs, and approval from project leadership. All development activities, code reviews, and quality assessments must verify compliance with these principles. The pedagogical effectiveness and technical correctness of all content must be validated against these foundational principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18