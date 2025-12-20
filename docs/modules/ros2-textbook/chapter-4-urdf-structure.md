# Chapter 4: URDF and Humanoid Structure

## Learning Objectives
- Understand the structure and purpose of URDF (Unified Robot Description Format) files
- Read and interpret links, joints, and frames in humanoid robot descriptions
- Explain how URDF enables understanding of humanoid kinematics
- Prepare for Module 2 (Simulation) by understanding robot structure representation

## Introduction
This chapter introduces URDF (Unified Robot Description Format), the standard way to represent robot structures in ROS. For AI developers working with humanoid robots, understanding URDF is crucial for developing algorithms that properly interact with the robot's physical configuration. URDF files describe the robot's physical structure, including links (rigid parts), joints (connections between parts), and frames (coordinate systems), enabling your AI to understand the robot's kinematic structure.

## Main Content

### URDF Overview

**URDF (Unified Robot Description Format)** is an XML-based format for representing robot models in ROS. It describes:
- Physical structure: links and their properties
- Kinematic structure: joints connecting links
- Visual representation: how the robot appears in simulation and visualization tools
- Collision properties: how the robot interacts with its environment

URDF files are fundamental to ROS operations because they allow:
- Simulation systems to model robot behavior
- Visualization tools to display the robot correctly
- Kinematic libraries to calculate robot movements
- AI algorithms to understand robot capabilities and constraints

### Links: The Rigid Components

In URDF, a **link** represents a rigid component of the robot - a part that doesn't move relative to itself. Each link contains:
- Physical properties: mass, center of mass, and inertia
- Visual properties: how the link appears in visualization
- Collision properties: how the link interacts with the environment

Common link types in humanoid robots include:
- Torso: the main body of the robot
- Limbs: arms and legs
- End effectors: hands and feet
- Sensors: cameras, IMUs, and other sensing equipment

Links form the "bones" of the robot structure and are connected by joints to create the complete kinematic chain.

### Joints: The Connections

**Joints** define how links connect and move relative to each other. Each joint specifies:
- Parent and child links: which links the joint connects
- Joint type: how the links can move relative to each other
- Limits: constraints on the joint's movement
- Origin: the position and orientation of the joint

Joint types in humanoid robots include:
- **Revolute**: Rotational joints with a range of motion (like elbows, knees)
- **Continuous**: Rotational joints without limits (like shoulders, hips)
- **Prismatic**: Linear sliding joints (less common in humanoids)
- **Fixed**: No movement between links (like attaching sensors)

Joints create the kinematic chains that allow humanoid robots to move in complex ways, mimicking human motion patterns.

### Frames: Coordinate Systems

URDF defines **frames** as coordinate systems attached to specific points on the robot. Each link has its own frame, and the relationships between frames determine:
- Where each part of the robot is located relative to others
- How to transform coordinates between different parts of the robot
- How sensors are positioned relative to the robot's body

Frames are crucial for:
- Robot localization: understanding where the robot is in space
- Sensor fusion: combining data from multiple sensors
- Motion planning: calculating how to move the robot
- AI decision making: understanding the spatial relationships of robot parts

### Humanoid Kinematics

**Kinematics** in robotics refers to the study of motion without considering the forces that cause it. In humanoid robots, kinematics involves:
- **Forward kinematics**: Given joint angles, calculate the position of end effectors
- **Inverse kinematics**: Given desired end effector position, calculate required joint angles
- **Kinematic chains**: Sequences of links and joints that connect robot parts

URDF enables kinematic calculations by providing the complete structure of the robot, allowing AI algorithms to:
- Understand how moving one joint affects the position of other parts
- Calculate reachable spaces for robot end effectors
- Plan complex movements that achieve desired goals

### URDF Structure and Interpretation

A typical URDF file contains:

```xml
<robot name="humanoid_robot">
  <!-- Define links with their properties -->
  <link name="base_link">
    <visual>
      <geometry>
        <cylinder length="0.6" radius="0.2"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.6" radius="0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10"/>
      <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
    </inertial>
  </link>

  <!-- Define joints connecting links -->
  <joint name="torso_joint" type="fixed">
    <parent link="base_link"/>
    <child link="torso"/>
    <origin xyz="0 0 0.3" rpy="0 0 0"/>
  </joint>
</robot>
```

When interpreting URDF files, focus on:
- The hierarchical structure of links and joints
- How joint types limit robot movement
- The coordinate frame relationships between parts
- Physical properties that affect robot dynamics

## Key Concepts

### URDF (Unified Robot Description Format)
**URDF** is an XML-based format for representing robot models in ROS. It describes the physical structure, kinematic structure, and visual properties of robots.

### Link
A **link** is a rigid component of a robot in URDF. It represents a part that doesn't move relative to itself and contains physical, visual, and collision properties.

### Joint
A **joint** defines how two links connect and move relative to each other. It specifies parent/child relationships, joint type, and movement constraints.

### Frame
A **frame** is a coordinate system attached to a specific point on the robot. Frames enable spatial reasoning about robot parts and sensor positions.

### Kinematics
**Kinematics** is the study of motion without considering forces. In robotics, it involves understanding how joint movements affect the position of robot parts.

## Humanoid-Specific Examples

Consider a simplified URDF snippet for a humanoid robot's arm:

```xml
<!-- Shoulder link -->
<link name="shoulder">
  <inertial>
    <mass value="2.0"/>
    <origin xyz="0 0 0.1"/>
    <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.015"/>
  </inertial>
  <visual>
    <origin xyz="0 0 0.1"/>
    <geometry>
      <cylinder radius="0.05" length="0.2"/>
    </geometry>
  </visual>
</link>

<!-- Shoulder joint -->
<joint name="shoulder_pitch" type="revolute">
  <parent link="torso"/>
  <child link="shoulder"/>
  <origin xyz="0.1 0.2 0.3"/>
  <axis xyz="0 1 0"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
</joint>

<!-- Upper arm link -->
<link name="upper_arm">
  <inertial>
    <mass value="1.5"/>
    <origin xyz="0 0 0.15"/>
    <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.015"/>
  </inertial>
  <visual>
    <origin xyz="0 0 0.15"/>
    <geometry>
      <cylinder radius="0.04" length="0.3"/>
    </geometry>
  </visual>
</link>

<!-- Elbow joint -->
<joint name="elbow_joint" type="revolute">
  <parent link="shoulder"/>
  <child link="upper_arm"/>
  <origin xyz="0 0 0.2"/>
  <axis xyz="0 1 0"/>
  <limit lower="0" upper="3.14" effort="80" velocity="1"/>
</joint>
```

This example shows:
- How links define the physical parts of the arm
- How joints connect parts and limit their movement
- How the kinematic chain extends from torso to upper arm
- How physical properties are specified for simulation

## Summary

This chapter covered the essential elements of URDF for humanoid robots:
- Links as rigid components of the robot structure
- Joints as connections that define movement possibilities
- Frames as coordinate systems for spatial reasoning
- Kinematics as the study of robot motion

You now understand how to read and interpret URDF files, which is essential for AI algorithms that need to understand robot structure.

## Next Steps

This completes Module 1 – The Robotic Nervous System (ROS 2). You now have a comprehensive understanding of:
- Physical AI and why robots need middleware
- ROS 2 communication patterns and models
- How Python AI agents connect to ROS 2 via rclpy
- How to interpret robot structure through URDF

Module 2 will build on this foundation, focusing on simulation environments where you can test your AI algorithms with virtual humanoid robots.
- Return to [Chapter 3: Python AI Agents and rclpy](./chapter-3-python-integration)

## Further Reading
- ROS URDF Documentation
- "Robotics: Modelling, Planning and Control" by Siciliano
- "A Mathematical Introduction to Robotic Manipulation" by Murray