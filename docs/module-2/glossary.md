# Module 2: Terminology Glossary

## Core Concepts

**Digital Twin**: A virtual representation of a physical robot that enables testing and validation of AI systems in simulated environments before real-world deployment.

**Sim-to-Real Gap**: The differences between robot behavior in simulation and in the real world, arising from modeling imperfections, sensor noise differences, environmental factors, and actuator dynamics.

**Physical AI**: Artificial intelligence systems that interact with the physical world through robotic embodiment, governed by physical laws.

**Physics Simulation**: Computational modeling of physical phenomena including gravity, collisions, and dynamics to create realistic robot-environment interactions.

## Simulation Concepts

**Rigid Body**: An object that maintains its shape and size regardless of external forces, used as a fundamental element in physics simulation.

**Collision Detection**: The computational process of determining when two or more objects come into contact with each other in a simulation.

**Dynamics**: The branch of physics concerned with the motion of objects under the action of forces, including acceleration, velocity, and position changes.

**Determinism**: The property of a simulation where the same initial conditions and inputs will always produce identical results.

**Real-time Factor**: The ratio of simulation time to real time, where 1.0 represents real-time simulation.

## Sensor Concepts

**LiDAR**: Light Detection and Ranging - a sensing method that measures distance by illuminating a target with laser light and measuring the reflection.

**IMU**: Inertial Measurement Unit - a device that measures and reports a body's specific force, angular rate, and sometimes the magnetic field surrounding the body.

**Depth Camera**: A camera that captures distance information for each pixel in addition to color information, creating 3D point clouds.

**Sensor Fusion**: The process of combining data from multiple sensors to create a more accurate and complete picture of the environment.

**Sensor Noise**: Random variations in sensor measurements that affect the accuracy of the data.

## Tools and Platforms

**Gazebo**: A physics-based simulation engine commonly used in ROS 2 ecosystems for robotics simulation, specializing in accurate physics modeling.

**Unity**: A 3D development platform used for high-fidelity visualization and human-robot interaction simulation, specializing in visual rendering.

**Visual Realism**: Focus on appearance and rendering quality, important for perception system training and human interfaces.

**Physical Realism**: Focus on accurate physics simulation, critical for control algorithm development and realistic robot behavior.

**ROS 2 Integration**: The ability to interface with Robot Operating System 2 for communication between simulation and robotic systems.