# Chapter 3: Cognitive Planning with LLMs - The Mind Behind the Robot

## Learning Objectives

By the end of this chapter, you should be able to:
- Explain how LLMs function as planners rather than controllers
- Understand the process of translating natural language into task plans
- Describe how goals decompose into ROS 2 actions
- Identify failure handling and re-planning strategies
- Recognize the limits of LLM reasoning in physical systems

## Introduction

In Vision-Language-Action (VLA) systems, Large Language Models (LLMs) serve a crucial cognitive function as planners rather than direct controllers. This chapter explores cognitive planning, where LLMs process high-level goals and intentions, translating them into executable action sequences that respect physical constraints and safety requirements.

## LLMs as Planners, Not Controllers

The fundamental principle in VLA systems is that **LLMs perform cognition and planning; ROS 2 performs execution. Never blur this line.** This separation of concerns maintains system reliability while leveraging LLMs for high-level reasoning and planning.

### The Planning Role

As planners, LLMs in VLA systems perform several key functions:

- **Goal interpretation**: Understanding high-level user intentions expressed in natural language
- **Task decomposition**: Breaking complex goals into sequences of executable actions
- **Constraint awareness**: Considering physical, safety, and environmental constraints
- **Resource allocation**: Planning efficient use of robot capabilities
- **Failure anticipation**: Identifying potential failure points and planning alternatives

### Why Not Direct Control?

Direct LLM-to-actuator control (treating LLMs as controllers) would be problematic for several reasons:

- **Reliability**: LLMs can generate inconsistent or unsafe commands
- **Real-time requirements**: LLMs are not optimized for real-time control
- **Safety**: Direct control bypasses safety validation and constraint checking
- **Precision**: LLMs are not precise enough for low-level motor control

### The Cognitive Planner Architecture

A **Cognitive Planner** is an LLM-based component that translates high-level goals into executable action sequences considering physical constraints. The cognitive planner operates at the intersection of language understanding and action execution, serving as a bridge between human intentions and robot behaviors.

## Translating Natural Language into Task Plans

The process of translating natural language commands into executable task plans involves several stages that transform high-level intentions into specific actions.

### Language Understanding and Goal Parsing

The first stage involves parsing the natural language command to identify:

- **Intent**: What the user wants to accomplish
- **Entities**: Objects, locations, and other entities involved
- **Constraints**: Safety, timing, or other constraints on the task
- **Context**: Environmental or situational context that affects the plan

### Task Structure Analysis

Once the command is understood, the cognitive planner analyzes the task structure:

- **Sequential dependencies**: Actions that must occur in specific order
- **Parallelizable components**: Actions that can occur simultaneously
- **Resource requirements**: What robot capabilities are needed
- **Success criteria**: How to determine when the task is complete

### Plan Generation Process

The cognitive planner generates a task plan by:

1. **Identifying the goal state**: What the environment should look like after task completion
2. **Analyzing the current state**: Understanding the starting conditions
3. **Planning the transformation**: Determining the sequence of actions needed to move from current to goal state
4. **Validating constraints**: Ensuring the plan respects physical and safety constraints
5. **Optimizing the sequence**: Arranging actions for efficiency and reliability

## Decomposing Goals into ROS 2 Actions

The cognitive planner must decompose high-level goals into sequences of ROS 2 actions that can be executed by the robot. This decomposition process is crucial for bridging the gap between high-level intentions and low-level execution.

### Action Primitives

ROS 2 provides a set of action primitives that the cognitive planner can compose into complex behaviors:

- **Navigation actions**: Moving the robot to specific locations
- **Manipulation actions**: Grasping, moving, or manipulating objects
- **Perception actions**: Detecting, recognizing, or tracking objects
- **Communication actions**: Providing feedback or requesting information

### Hierarchical Decomposition

The decomposition process typically follows a hierarchical approach:

1. **High-level tasks**: Complex behaviors like "serve drinks at a party"
2. **Mid-level capabilities**: Sequences like "fetch object and deliver it"
3. **Low-level actions**: Individual ROS 2 action calls

### Example Decomposition

Consider the command "Go to the kitchen and bring me a glass of water":

- **High-level goal**: Bring user a glass of water
- **Decomposed plan**:
  1. Navigate to kitchen
  2. Locate glass
  3. Grasp glass
  4. Navigate to water source
  5. Fill glass with water
  6. Navigate to user
  7. Present glass to user

Each of these steps would be implemented as specific ROS 2 actions.

## Failure Handling and Re-planning

Physical systems inevitably encounter failures, and cognitive planners must be designed to handle these gracefully. Failure handling and re-planning are essential capabilities for reliable VLA systems.

### Failure Detection

The cognitive planner must be able to detect various types of failures:

- **Action failures**: Individual actions that don't complete successfully
- **Constraint violations**: Actions that violate safety or physical constraints
- **Environmental changes**: Unexpected changes that invalidate the plan
- **Goal impossibility**: Situations where the goal cannot be achieved

### Re-planning Strategies

When failures occur, the cognitive planner can employ several re-planning strategies:

- **Local repair**: Modifying only the failed action or nearby actions
- **Global re-plan**: Generating a completely new plan from the current state
- **Goal relaxation**: Modifying the goal to make it achievable
- **Alternative methods**: Using different approaches to achieve the same goal

### Robust Planning

To minimize failures, cognitive planners can incorporate:

- **Contingency planning**: Preparing alternative actions for likely failure modes
- **Uncertainty modeling**: Accounting for uncertainty in action outcomes
- **Risk assessment**: Evaluating the likelihood and consequences of different approaches

## Limits of LLM Reasoning in Physical Systems

While LLMs are powerful tools for cognitive planning, they have significant limitations when applied to physical systems that must be understood and accommodated.

### Physical Reality Limitations

LLMs trained on text data may not fully understand physical reality:

- **Physics ignorance**: LLMs may generate plans that violate basic physics
- **Scale confusion**: Difficulty understanding relative sizes and distances
- **Material properties**: Limited understanding of material strengths, weights, fragility

### Temporal and Causal Limitations

LLMs may struggle with temporal and causal reasoning:

- **Time estimation**: Difficulty estimating how long actions will take
- **Causal chains**: Not fully understanding how actions affect the environment over time
- **Concurrent effects**: Challenges with understanding simultaneous effects of multiple actions

### Embodied Reasoning Challenges

LLMs lack embodied experience:

- **Perspective taking**: Difficulty understanding how the world looks from the robot's sensors
- **Embodied knowledge**: Missing physical intuition that comes from embodied experience
- **Action affordances**: Limited understanding of what actions are possible with specific robot configurations

## Cognitive Planning Best Practices

Effective cognitive planning in VLA systems follows several best practices:

### Validation and Verification

- Always validate plans against physical constraints before execution
- Use simulation to test plans when possible
- Implement safety checks at multiple levels

### Human-in-the-Loop

- Provide clear feedback about plan generation and execution
- Allow humans to intervene when plans seem inappropriate
- Use human feedback to improve planning over time

### Incremental Planning

- Plan in stages rather than attempting to plan complete sequences
- Re-plan regularly based on new information
- Use hierarchical planning to manage complexity

## Key Takeaways

- LLMs function as cognitive planners, not direct controllers
- The planning process transforms natural language into ROS 2 action sequences
- Failure handling and re-planning are essential for robust operation
- LLMs have limitations when reasoning about physical systems
- Proper validation ensures safe and effective plan execution

## Further Reading/References

- [Terminology Reference](./terminology.md) - Key terms used in this module
- [Chapter 2: Voice-to-Action Pipelines](./chapter-2-voice-action) - Background on intent mapping
- [Module 1: ROS 2 Foundations](/docs/modules/ros2-textbook/chapter-1-foundations) - Background on ROS 2 actions