---
id: phr-plan-003-isaac-ai-brain-20251218-001
title: Isaac AI Brain Module Planning
stage: plan
date: 2025-12-18
surface: command
model: Claude Opus 4.5
feature: 003-isaac-ai-brain
branch: 003-isaac-ai-brain
user: Claude Code
command: /sp.plan
labels: [planning, ai, robotics, nvidia-isaac, textbook, module3]
links:
  spec: specs/003-isaac-ai-brain/spec.md
  plan: specs/003-isaac-ai-brain/plan.md
  research: specs/003-isaac-ai-brain/research.md
  data-model: specs/003-isaac-ai-brain/data-model.md
  quickstart: specs/003-isaac-ai-brain/quickstart.md
  ticket:
  adr:
  pr:
files:
  - path: specs/003-isaac-ai-brain/plan.md
    action: create
    summary: Created implementation plan for Isaac AI Brain module
  - path: specs/003-isaac-ai-brain/research.md
    action: create
    summary: Created research summary with key decisions
  - path: specs/003-isaac-ai-brain/data-model.md
    action: create
    summary: Created data model defining core concepts
  - path: specs/003-isaac-ai-brain/quickstart.md
    action: create
    summary: Created quickstart guide for the module
  - path: specs/003-isaac-ai-brain/contracts/content-structure.yaml
    action: create
    summary: Created content structure contract
tests:

---

## Prompt

/sp.plan

Project: Physical AI & Humanoid Robotics Textbook
Module: Module 3 – The AI-Robot Brain (NVIDIA Isaac™)

Purpose:
Define a fast, safe, and execution-focused plan for authoring Module 3. This module
must clearly explain how perception, navigation, and intelligence are embedded into
robots using NVIDIA Isaac, without drifting into implementation-heavy detail.

Guiding rule:
This module explains *how robots think and perceive*, not *how to install tools*.

Phase 1: Scope lock and alignment
- Reconfirm dependencies on Module 1 (ROS 2) and Module 2 (Simulation)
- Lock terminology: perception, VSLAM, synthetic data, sim-to-real, acceleration
- Confirm exclusions (no VLA, no RL walkthroughs, no hardware bring-up)
- Create Docusaurus sidebar entry and chapter files

Exit condition:
- Clear conceptual boundary with Module 4
- No ambiguity about Isaac's role

Phase 2: Chapter 1 authoring – The AI Brain
- Explain the "AI brain" concept in embodied robots
- Define perception, mapping, and planning roles
- Explain why acceleration is necessary
- Position NVIDIA Isaac in the robotics stack
- Describe sim-to-deployment flow at high level

Validation checks:
- Isaac not treated as magic or black box
- Clear separation between brain, body, and nervous system

Phase 3: Chapter 2 authoring – Isaac Sim & Synthetic Data
- Explain photorealistic simulation purpose
- Describe synthetic data generation
- Explain domain randomization conceptually
- Compare Isaac Sim with Gazebo roles
- Connect simulation data to perception models

Validation checks:
- Simulation framed as training instrument
- No setup guides or training scripts

Phase 4: Chapter 3 authoring – Isaac ROS & Perception
- Explain Isaac ROS purpose
- Describe hardware acceleration on Jetson
- Explain VSLAM conceptually
- Describe sensor fusion at system level
- Explain real-time constraints of edge devices

Validation checks:
- Perception explained as pipeline
- No algorithmic deep dives

Phase 5: Chapter 4 authoring – Navigation & Planning (Nav2)
- Explain why navigation is required
- Describe mapping, localization, planning flow
- Explain Nav2 components conceptually
- Discuss humanoid-specific constraints
- Prepare transition to cognition (Module 4)

Validation checks:
- Navigation tied to physical constraints
- No locomotion or manipulation algorithms

Phase 6: Integration and cleanup
- Ensure consistent terminology
- Remove overlap with Module 2 or Module 4
- Add exp

## Response snapshot

Successfully created the complete implementation plan for Module 3: Isaac AI Brain module. The plan includes:

- Technical context with system architecture and constraints
- Constitution check confirming alignment with project principles
- Gates verification ensuring scope and dependencies are clear
- Phase 0 research tasks with completed findings
- Phase 1 design with data model and API contracts
- Phase 2 implementation plan with chapter-specific tasks
- Phase 3 integration and quality assurance tasks
- Success criteria validation and risk mitigation strategies

Additionally created supporting documents:
- Research summary with key decisions
- Data model defining core concepts
- Quickstart guide for learners
- Content structure contract in YAML format

## Outcome

- ✅ Impact: Complete implementation plan for Isaac AI Brain module
- 🧪 Tests: No automated tests run
- 📁 Files: 5 files created (plan.md, research.md, data-model.md, quickstart.md, content-structure.yaml)
- 🔁 Next prompts: Ready for /sp.tasks to generate task breakdown
- 🧠 Reflection: Plan follows conceptual-first approach and aligns with project constraints

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS - All planning requirements met
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Execute /sp.tasks for implementation tasks