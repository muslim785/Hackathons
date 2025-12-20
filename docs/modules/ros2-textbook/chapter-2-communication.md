# Chapter 2: ROS 2 Communication Model

## Learning Objectives
- Understand the fundamental ROS 2 communication patterns: nodes, topics, services, and actions
- Explain the differences between asynchronous (topics) and synchronous (services, actions) communication
- Describe how execution graphs organize ROS 2 components
- Apply appropriate communication patterns to humanoid robot sensor and actuator scenarios

## Introduction
In this chapter, we'll explore the core communication mechanisms that make ROS 2 powerful for robotics applications. You'll learn how different components of a robot system communicate with each other through nodes, topics, services, and actions. Understanding these patterns is essential for designing effective robotic systems, particularly for humanoid robots with complex sensorimotor requirements.

## Main Content

### Nodes and Execution Graphs

In ROS 2, a **node** is a process that performs computation. Nodes are the fundamental building blocks of a ROS 2 system. Each node typically handles a specific task, such as sensor data processing, control algorithm execution, or user interface management.

Nodes organize into an **execution graph**, which represents the structure and communication flow of your robotic system. This graph shows:
- Which nodes exist in your system
- How nodes communicate with each other
- The flow of data between components
- Dependencies between different system components

The execution graph is dynamic - nodes can be added, removed, or reconfigured while the system runs, providing flexibility for different robot configurations and operational modes.

### Topics: Asynchronous Communication

**Topics** provide asynchronous, many-to-many communication in ROS 2. They follow a publish-subscribe pattern where:
- Publishers send messages to a topic without knowing who will receive them
- Subscribers receive messages from a topic without knowing who sent them
- Multiple publishers can send to the same topic
- Multiple subscribers can receive from the same topic

Topics are ideal for:
- Sensor data distribution (e.g., camera images, laser scans)
- Continuous state updates (e.g., robot position, joint angles)
- Event notifications (e.g., button presses, obstacle detection)

The asynchronous nature means publishers and subscribers don't need to run simultaneously - messages are queued until subscribers are available.

### Services: Synchronous Communication

**Services** provide synchronous, request-response communication between two nodes. This pattern involves:
- A client node sends a request to a service
- A server node processes the request and sends a response back
- The client waits for the response before continuing

Services are appropriate for:
- Operations with a clear beginning and end
- Requesting specific computations (e.g., path planning, image processing)
- Configuration changes that require confirmation
- Any operation where the client needs to know the result before proceeding

### Actions: Synchronous with Feedback

**Actions** are goal-oriented communications that provide feedback during execution and can be canceled. They combine features of both topics and services:
- A client sends a goal to an action server
- The server provides feedback about progress during execution
- The client can cancel the goal before completion
- The server returns a result when the goal completes

Actions are perfect for:
- Long-running operations (e.g., navigation to a distant location)
- Tasks where progress monitoring is important (e.g., arm trajectory execution)
- Operations that might need interruption (e.g., emergency stops)

### Communication Pattern Selection

Choosing the right communication pattern depends on your specific use case:

- **Use Topics** when you need:
  - Continuous data flow
  - Multiple subscribers to the same information
  - Decoupled timing between publishers and subscribers
  - Example: Publishing camera images for multiple vision algorithms

- **Use Services** when you need:
  - A specific response to a request
  - Confirmation that an operation completed
  - Synchronous behavior
  - Example: Requesting a map from a mapping service

- **Use Actions** when you need:
  - Long-running operations with progress feedback
  - Ability to cancel operations
  - Asynchronous behavior with result guarantees
  - Example: Moving a robot arm to a specific position with progress updates

## Key Concepts

### Node
A **node** is a process that performs computation in ROS 2. Nodes are organized into packages to form a ROS system. Each node typically handles a specific task or function.

### Topic
A **topic** is an asynchronous, many-to-many communication mechanism in ROS 2. Multiple nodes can publish to or subscribe to the same topic without direct knowledge of each other.

### Service
A **service** is a synchronous, request-response communication pattern in ROS 2 between two nodes. The client waits for a response from the service server.

### Action
An **action** is a goal-oriented communication pattern that provides feedback during execution and can be canceled. It's ideal for long-running operations.

### Execution Graph
The **execution graph** represents the structure and communication flow of a ROS 2 system, showing how nodes connect and communicate with each other.

## Humanoid-Specific Examples

Consider a humanoid robot performing a reaching task:

**Topics** for continuous monitoring:
- Joint position sensors publish to `/joint_states` for multiple controllers to monitor
- IMU data publishes to `/imu/data` for balance and orientation systems
- Camera images publish to `/camera/image_raw` for vision processing nodes

**Services** for discrete operations:
- A trajectory planner service accepts requests to compute joint trajectories
- A configuration service allows updating robot parameters with confirmation
- A calibration service performs sensor calibration and reports results

**Actions** for goal-oriented tasks:
- An arm controller action accepts reaching goals and provides progress feedback
- A walking controller action manages complex locomotion with interrupt capability
- A grasping action executes manipulation tasks with force feedback

## Summary

This chapter covered the core communication patterns in ROS 2:
- Nodes as the fundamental computational units
- Topics for asynchronous, many-to-many communication
- Services for synchronous request-response interactions
- Actions for goal-oriented operations with feedback

You now understand when to use each communication pattern and how they enable complex robotic behaviors in humanoid systems.

## Next Steps

The next chapter will explore how Python-based AI agents connect to ROS 2 systems using the rclpy client library, bridging your AI development skills with robotic systems.
- Continue to [Chapter 3: Python AI Agents and rclpy](./chapter-3-python-integration)
- Return to [Chapter 1: Physical AI and ROS 2 Foundations](./chapter-1-foundations)

## Further Reading
- ROS 2 Documentation: Nodes and Topics
- ROS 2 Documentation: Services and Actions
- "Effective Robotics Programming with ROS" by Anil Mahtani