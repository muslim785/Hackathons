# Data Model: Module 1 – The Robotic Nervous System (ROS 2)

## Educational Content Structure

### Chapter Entity
- **name**: String (e.g., "Physical AI and ROS 2 Foundations")
- **number**: Integer (1-4)
- **content**: Markdown text
- **learning_objectives**: Array of strings
- **key_concepts**: Array of strings
- **examples**: Array of humanoid-specific examples
- **relationships**: Links to previous/next chapters

### Module Entity
- **title**: String ("Module 1 – The Robotic Nervous System (ROS 2)")
- **chapters**: Array of Chapter entities
- **target_audience**: String ("AI developers and software engineers new to robotics")
- **prerequisites**: Array of strings
- **success_criteria**: Array of measurable outcomes

### Concept Entity
- **name**: String (e.g., "ROS 2 Node", "Topic Communication", "URDF Structure")
- **definition**: String (clear definition)
- **examples**: Array of practical examples
- **related_concepts**: Array of Concept entities
- **chapter_reference**: Chapter entity

## Validation Rules from Requirements

1. Each chapter must contain concept-first content with minimal code
2. Content must focus on humanoid-specific examples
3. No simulation or perception content should be included
4. Each chapter must prepare learners for the next
5. Content must be RAG-friendly for chatbot integration

## State Transitions

- **Draft** → **Review** → **Approved** → **Published**
- Each chapter follows this lifecycle independently
- Module state depends on all chapters being published