# Standard Format for Explaining AI and Robotics Terms

This document defines the standard format for introducing and explaining AI and robotics terms on their first use in Module 4 content.

## Format Structure

### 1. Term Introduction
When introducing a technical term for the first time in a document:

**Format**: `**[TERM]** (definition)`

**Example**: **Embodiment** is the concept that AI systems behave differently when physically situated in the real world, as opposed to disembodied systems.

### 2. Expanded Explanation (when needed)
For complex terms that require more explanation:

**Format**:
- Bold the term first: `**[TERM]**`
- Provide a clear, concise definition
- Include context or examples if necessary
- Explain relevance to VLA systems

**Example**:
**Cognitive Planner** is an LLM-based component that translates high-level goals into executable action sequences considering physical constraints. In VLA systems, the cognitive planner functions as the bridge between high-level language commands and low-level robot actions, ensuring that plans are physically feasible and safe.

### 3. Cross-Reference Format
When referring back to a term in the same document (after first use):
- Use the term normally without special formatting
- If clarification is needed, use: `[TERM] (see above for definition)`

### 4. Acronym Definition
When introducing acronyms:

**Format**: `**[FULL TERM]** (acronym: **[ACRONYM]**, defined as [definition])`

**Example**: **Vision-Language-Action** (acronym: **VLA**, defined as integrated systems connecting vision, language, and action in embodied robots)

## Content Standards

### 1. Accessibility
- Use plain language when possible
- Avoid unnecessary jargon
- Connect technical concepts to familiar ideas

### 2. Context
- Explain why the term is important in VLA systems
- Connect to broader concepts when relevant
- Provide practical implications

### 3. Consistency
- Use the same definition across all documents
- Follow the terminology reference (terminology.md)
- Maintain consistent formatting

## Examples of Proper Usage

### Good Example:
The **embodiment constraint** refers to physical limitations that affect how AI systems behave in real-world environments. Unlike disembodied systems, embodied AI must account for physics, sensor noise, and actuator limitations.

### Better Example:
The **embodiment constraint** (physical limitations that affect how AI systems behave in real-world environments) requires embodied systems to account for physics, sensor noise, and actuator limitations. Unlike disembodied systems that operate in simulation, embodied AI must navigate real-world complexities that fundamentally change system behavior.

## Review Checklist

Before finalizing content, ensure each technical term:
- [ ] Is defined in bold on first use in each document
- [ ] Has a clear, accessible definition
- [ ] Includes context relevant to VLA systems
- [ ] Uses consistent terminology with terminology.md
- [ ] Follows the format standards above