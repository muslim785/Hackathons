module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics Textbook',
      items: [
        {
          type: 'category',
          label: 'Module 1 – The Robotic Nervous System (ROS 2)',
          items: [
            'modules/ros2-textbook/chapter-1-foundations',
            'modules/ros2-textbook/chapter-2-communication',
            'modules/ros2-textbook/chapter-3-python-integration',
            'modules/ros2-textbook/chapter-4-urdf-structure',
          ],
        },
        {
          type: 'category',
          label: 'Module 2 – The Digital Twin (Gazebo & Unity)',
          items: [
            'module-2/intro',
            'module-2/chapter-1',
            'module-2/chapter-2',
            'module-2/chapter-3',
            'module-2/chapter-4',
            'module-2/transition-to-module-3',
          ],
        },
        {
          type: 'category',
          label: 'Module 3 – The AI-Robot Brain (NVIDIA Isaac)',
          items: [
            'module-3/intro',
            'module-3/chapter-1',
            'module-3/chapter-2',
            'module-3/chapter-3',
            'module-3/chapter-4',
            'module-3/glossary',
            'module-3/knowledge-check-template',
            'module-3/cross-references',
            'module-3/content-standards',
            'module-3/transition-from-module-2',
            'module-3/rag-structure',
          ],
        },
        {
          type: 'category',
          label: 'Module 4 – Vision-Language-Action (VLA)',
          items: [
            'module-4-vla/index',
            'module-4-vla/chapter-1-vla-foundations',
            'module-4-vla/chapter-2-voice-action',
            'module-4-vla/chapter-3-cognitive-planning',
            'module-4-vla/chapter-4-autonomous-humanoid',
          ],
        },
      ],
    },
  ],
};