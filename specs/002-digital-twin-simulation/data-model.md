# Data Model: Digital Twin Simulation Module

**Feature**: 002-digital-twin-simulation
**Created**: 2025-12-18

## Core Entities

### Digital Twin
- **Definition**: Virtual representation of physical robot
- **Purpose**: Testing and validation of AI systems in simulated environments
- **Relationships**: Connected to physical robot, simulation environment
- **Attributes**:
  - Virtual representation
  - Behavioral modeling
  - System validation capabilities

### Physics Simulation
- **Components**: Gravity, collisions, rigid body dynamics
- **Purpose**: Computational modeling of physical phenomena
- **Relationships**: Connects robot model to environment
- **Attributes**:
  - Gravity simulation
  - Collision detection
  - Rigid body dynamics
  - Environmental interaction

### Simulation Engine (Gazebo)
- **Role**: Physics-based simulation in ROS 2
- **Capabilities**: Gravity, collision detection, dynamics
- **Relationships**: Works with URDF models
- **Attributes**:
  - Physics simulation
  - Environment modeling
  - Realistic dynamics
  - ROS 2 integration

### Visualization Engine (Unity)
- **Role**: High-fidelity visualization and interaction
- **Capabilities**: Visual realism, human-robot interaction
- **Relationships**: Complements physics simulation
- **Attributes**:
  - High-fidelity graphics
  - Visual realism
  - Human-robot interaction
  - Complementary to physics engines

### Simulated Sensors
- **Types**: LiDAR, depth/RGB cameras, IMUs
- **Purpose**: Generate synthetic sensor data
- **Relationships**: Feed into perception pipelines
- **Attributes**:
  - LiDAR simulation
  - Camera simulation (depth/RGB)
  - IMU simulation
  - Noise modeling
  - Synthetic data generation

## Relationships

- **Digital Twin** contains **Physics Simulation** and **Visualization Engine**
- **Physics Simulation** connects **Simulation Engine** to **Environment**
- **Simulated Sensors** are part of **Digital Twin** and feed **Perception Pipelines**
- **Simulation Engine** and **Visualization Engine** work together to provide complete simulation experience

## State Transitions

### Simulation State
- **Idle**: Simulation environment loaded, no physics active
- **Running**: Physics simulation active, real-time interaction
- **Paused**: Physics paused, can adjust parameters
- **Stopped**: Simulation ended, results available

### Learning Progression
- **Conceptual Understanding**: Learner understands basic concepts
- **Tool Awareness**: Learner knows when to use each tool
- **Integration Understanding**: Learner understands how tools work together
- **Application Ready**: Learner prepared for perception modules