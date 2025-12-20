---
id: 1
title: Update Project Constitution
stage: constitution
date: 2025-12-18
surface: agent
model: claude-opus-4-5-20251101
feature: none
branch: master
user: Claude Code
command: /sp.constitution
labels: [constitution,physical-ai,humanoid-robotics,textbook]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```text
/sp.constitution

Project Family: Physical AI & Humanoid Robotics Textbook

Mission:
Build an AI-native textbook that teaches Physical AI and Humanoid Robotics by unifying
content, specifications, code, and intelligent agents into one reproducible system.

Core principles:
- Physical AI = embodied intelligence governed by physical laws
- Robots are distributed systems, not single programs
- Middleware and structure come before intelligence
- Specs are the source of truth, not prose or code

Pedagogical rules:
- Teach from first principles to systems
- Explain all terminology on first use
- Avoid premature complexity
- Each module prepares the learner for the next

AI-native rules:
- All content must be spec-driven
- No undocumented manual steps
- Book content and RAG chatbot share the same source
- Chatbot answers must be grounded in retrieved text only

Tooling invariants:
- Docs: Docusaurus
- Specs: Spec-Kit Plus
- AI authoring: Claude Code
- Backend: FastAPI
- Storage: Neon Postgres + Qdrant

RAG guarantees:
- No hallucinated answers
- Respect selected-text-only queries
- Say "not enough context" when applicable

Non-goals:
- Black-box explanations
- Vendor marketing
- Irreproducible workflows

Success:
- Learners understand Physical AI as a system
- Chatbot is trustworthy and useful
- Project is reproducible from specs alone
```

## Response snapshot

Updated the project constitution to reflect the Physical AI & Humanoid Robotics Textbook project. Created a comprehensive constitution document with:

Core Principles:
- Physical AI as Embodied Intelligence
- Robots as Distributed Systems
- Middleware and Structure Precedence
- Specs as Source of Truth
- First Principles Pedagogy
- AI-Native Content Integration

Technical Standards:
- Tooling Invariants
- RAG System Guarantees
- Reproducible Workflows

Development Workflow:
- Content and Code Alignment
- Specification-Driven Implementation
- Integrated Testing Approach

The constitution establishes governance rules and versioning (1.0.0) with all principles aligned to the project's mission of creating an AI-native textbook for Physical AI and Humanoid Robotics.

## Outcome

- ✅ Impact: Created foundational constitution document that establishes principles for the Physical AI & Humanoid Robotics Textbook project
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Continue with spec development based on constitution
- 🧠 Reflection: Constitution successfully captures all core principles from user input and organizes them into coherent sections

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin spec development following constitution principles