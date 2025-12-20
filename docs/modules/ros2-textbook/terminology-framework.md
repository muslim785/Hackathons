# Cross-Chapter Terminology Consistency Framework

## Purpose
This framework ensures consistent use of technical terminology across all chapters in the ROS 2 textbook module, improving comprehension and enabling effective RAG system operation.

## Core Terminology Definitions

### ROS 2 Fundamentals
- **Node**: A process that performs computation in ROS 2. Nodes are organized into packages to form a ROS system.
- **Topic**: An asynchronous, many-to-many communication mechanism in ROS 2. Multiple nodes can publish to or subscribe to the same topic.
- **Service**: A synchronous, request-response communication pattern in ROS 2 between two nodes.
- **Action**: A goal-oriented communication pattern that provides feedback during execution and can be canceled.
- **Middleware**: Software that connects different parts of an application or different applications together, enabling communication and data management.

### Physical AI Concepts
- **Physical AI**: Artificial intelligence that operates in and interacts with the physical world through embodied systems.
- **Embodied Intelligence**: Intelligence that emerges from the interaction between an agent and its physical environment.
- **Middleware Nervous System**: The communication infrastructure that connects AI software to physical robotic hardware, enabling coordinated behavior.

### Humanoid-Specific Terms
- **URDF**: Unified Robot Description Format, an XML format for representing a robot model including links, joints, and other properties.
- **Link**: A rigid component of a robot in URDF, representing a physical part like a body segment or limb.
- **Joint**: A connection between two links in URDF that allows relative motion between them.
- **Frame**: A coordinate system attached to a specific point on a robot, used for spatial relationships.

## Terminology Usage Rules

### 1. First Use Rule
- Define each technical term when first used in a chapter
- Use the exact definition provided in this framework
- Include the definition in bold with the term in italics: "*Definition*"

### 2. Consistency Rule
- Use the same term for the same concept throughout all chapters
- Do not use synonyms for technical terms
- If a term has multiple meanings in different contexts, clarify the specific meaning

### 3. Context Rule
- Maintain the same meaning for terms across different contexts
- If context affects meaning, explicitly state the specific meaning
- Create sub-definitions for context-dependent terms

### 4. Abbreviation Rule
- Define abbreviations when first used in each chapter
- Use abbreviations consistently after first definition
- Spell out abbreviations in headers and important definitions

## Review Process

### Before Publishing Each Chapter
1. Verify all technical terms match definitions in this framework
2. Check that terms are defined when first used
3. Ensure consistent usage throughout the chapter
4. Confirm that terminology aligns with previous chapters

### Cross-Chapter Verification
1. Compare new terminology with existing chapters
2. Update this framework if new terms are introduced
3. Resolve any conflicts between chapters
4. Maintain backward compatibility when possible

## Change Management

### Adding New Terms
1. Define the term clearly and unambiguously
2. Verify it doesn't conflict with existing terms
3. Add to this framework before using in content
4. Update all relevant chapters if needed

### Updating Existing Terms
1. Document the reason for the change
2. Update this framework first
3. Update all chapters that use the term
4. Review impact on RAG system indexing