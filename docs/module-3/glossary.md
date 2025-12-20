---
sidebar_position: 6
---

# Module 3: Terminology Glossary

## Core Concepts

**AI Brain**: An integrated system of perception, mapping, and planning that provides intelligence to embodied robots, implemented using NVIDIA Isaac platform. The AI brain coordinates sensory input, spatial understanding, and decision-making for robot autonomy.

**Physical AI**: Artificial intelligence systems that interact with the physical world through robotic embodiment, governed by physical laws. Physical AI systems must operate under real-world constraints and interact with the environment through sensors and actuators.

**Isaac Platform**: NVIDIA's acceleration platform for perception and autonomy under physical constraints. Provides a complete ecosystem for developing, simulating, and deploying AI-powered robots with hardware acceleration on NVIDIA platforms.

## Simulation Concepts

**Isaac Sim**: NVIDIA's simulation platform for photorealistic AI training and synthetic data generation. Provides high-fidelity physics simulation and photorealistic rendering capabilities that bridge the sim-to-real gap.

**Synthetic Data**: Artificially generated data that mimics real-world observations, used for training AI models. In robotics, this includes sensor data (images, point clouds, etc.) that accurately represents what sensors would observe in real environments.

**Domain Randomization**: A technique that varies visual properties in simulation to improve real-world transfer of AI models. By randomly changing lighting conditions, textures, colors, and other visual properties during training, models become more robust to variations in the real world.

**Photorealistic Simulation**: Simulation that generates data with visual fidelity closely matching real-world conditions. Essential for training perception models that must operate in diverse real-world environments.

## Perception Concepts

**Isaac ROS**: NVIDIA's framework for hardware-accelerated perception and autonomy on ROS-based robots. Optimizes perception and autonomy algorithms to run efficiently on NVIDIA platforms, specifically designed to handle the intensive computational requirements of AI algorithms in robotics.

**VSLAM**: Visual Simultaneous Localization and Mapping - the process of estimating camera pose and reconstructing the environment using visual input. A specialized subset of SLAM focused specifically on camera-based sensing rather than multi-sensor fusion.

**Visual SLAM**: A specialized form of SLAM (Simultaneous Localization and Mapping) that uses visual input for pose estimation and environment reconstruction, focusing specifically on camera-based sensing rather than multi-sensor fusion.

**Sensor Fusion**: The process of combining information from multiple sensors to create a more accurate and robust understanding of the environment. At the system level, this involves temporal synchronization, spatial calibration, and statistical combination of sensor measurements.

**Hardware Acceleration**: The use of specialized hardware (like GPUs and AI cores) to speed up computation-intensive tasks. In robotics, this enables real-time processing of sensor data and execution of AI algorithms that would be too slow on general-purpose processors.

## Navigation Concepts

**Nav2**: ROS 2 navigation framework for path planning, localization, and movement control. Provides a standardized approach to navigation and path planning with components including map server, localizer, planner server, controller, and behavior tree.

**Simultaneous Localization and Mapping (SLAM)**: A computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it.

**Costmap**: A representation of the environment with different cost values assigned to different areas. Higher costs indicate areas that should be avoided or traversed with caution, used by navigation planners to compute safe paths.

**Path Planning**: The computational process of determining a path from a start point to a goal point, considering obstacles and other constraints. Includes both global planning (overall route) and local planning (avoiding immediate obstacles).

**Humanoid Navigation**: Navigation specifically adapted for humanoid robots, accounting for their bipedal nature, balance requirements, and anthropomorphic form factor.

## Technical Terms

**Jetson**: NVIDIA's family of AI computing platforms designed for edge applications, including robotics. Provides GPU and AI computing capabilities in power-efficient packages suitable for mobile robots.

**Perception**: The process by which robots interpret sensory data from their environment, including processing inputs from cameras, LiDAR, IMUs, and other sensors to understand what surrounds the robot.

**Mapping**: The process of creating representations of the environment that the robot can use for navigation and planning. Includes both geometric maps (showing physical obstacles) and semantic maps (understanding the meaning of different locations or objects).

**Planning**: The decision-making processes that determine how the robot should achieve its goals, including path planning, motion planning, and high-level task planning.

**Sim-to-Real**: The process of transferring capabilities learned or trained in simulation to real-world robotic systems. A key challenge in robotics due to differences between simulated and real environments.

**Embodied Intelligence**: Intelligence that exists in physical form and interacts with the physical world through sensors and actuators. Embodied systems must operate under physical constraints and interact with real environments.