import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { useAuth } from '@clerk/clerk-react';
import AuthModal from './AuthModal';

/**
 * HeroSection component with two-column layout, glow effects, and advanced robot-like animations
 */
const HeroSection = () => {
  // Safely use Clerk's useAuth hook
  let isSignedIn = false;
  let authError = null;

  try {
    const auth = useAuth();
    isSignedIn = auth.isSignedIn;
  } catch (error) {
    authError = error;
    // If ClerkProvider is not available, we assume user is not signed in
    console.warn('ClerkProvider not available in HeroSection, assuming not signed in');
  }

  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authMode, setAuthMode] = React.useState('login');

  const handleStartReading = () => {
    if (authError) {
      // Even if there's an auth error, still show the auth modal
      // The modal will show the professional placeholder
      setShowAuthModal(true);
    } else if (!isSignedIn) {
      setAuthMode('login');
      setShowAuthModal(true);
    } else {
      // Navigate to the first chapter
      window.location.href = '/docs/modules/ros2-textbook/chapter-1-foundations';
    }
  };

  const handleAuthSuccess = () => {
    // After successful auth, redirect to content
    setTimeout(() => {
      window.location.href = '/docs/modules/ros2-textbook/chapter-1-foundations';
    }, 1000);
  };

  // Robot-like motion variants
  const robotVariants = {
    idle: {
      y: [0, -2, 0],
      rotate: [0, 0.5, -0.5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    hover: {
      y: [0, -5, 0],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const entryVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={clsx('hero', 'hero--primary', 'padding-vert--xl')}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          {/* Left Column: Robot illustration with advanced animations */}
          <div className="col col--6">
            <motion.div
              className="ai-card robotic-border"
              initial="hidden"
              animate="visible"
              variants={entryVariants}
              whileHover="hover"
              style={{
                position: 'relative',
                padding: '2rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <motion.div
                className="hero-illustration"
                variants={robotVariants}
                style={{
                  display: 'inline-block',
                  perspective: '1000px',
                  perspectiveOrigin: 'center center'
                }}
              >
                <motion.div
                  className="hero-image-placeholder gradient-text"
                  style={{
                    fontSize: '10rem',
                    lineHeight: '1',
                    margin: '0.5rem 0 1rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                    rotateY: [0, 8, -8, 0],
                    rotateX: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  🤖
                </motion.div>
                <motion.h3
                  className="hero-subtitle"
                  style={{
                    color: 'var(--ifm-text-color)',
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: '600'
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  AI & Robotics
                </motion.h3>
              </motion.div>

              {/* Robotic circuit board pattern overlay */}
              <div className="robotic-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
                `,
                borderRadius: 'var(--ifm-card-border-radius)',
                pointerEvents: 'none',
                zIndex: 1
              }}></div>
            </motion.div>
          </div>

          {/* Right Column: Content with staggered animations */}
          <div className="col col--6">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={entryVariants}
            >
              <motion.div variants={staggerChildren}>
                <div className="text--left">
                  <motion.div
                    className="badge badge--primary badge--lg margin-bottom--md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    style={{ fontSize: '1rem', fontWeight: '600' }}
                  >
                    📘 Physical AI & Humanoid Robotics
                  </motion.div>

                  <motion.h1
                    className="hero__title gradient-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{
                      fontSize: '3rem',
                      fontWeight: '800',
                      lineHeight: '1.2',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Physical AI &<br />Humanoid Robotics
                  </motion.h1>

                  <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      color: 'var(--ifm-secondary-text-color)',
                      marginBottom: '2rem'
                    }}
                  >
                    Master embodied intelligence governed by physical laws.
                    Learn practical applications in humanoid robotics and AI systems
                    with cutting-edge research and hands-on projects.
                  </motion.p>

                  {/* Feature Chips with individual animations */}
                  <motion.div
                    className="margin-vert--lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ marginBottom: '2.5rem' }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <motion.span
                        className="badge badge--secondary"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 12px rgba(106, 228, 250, 0.6)'
                        }}
                        style={{
                          fontSize: '0.9rem',
                          padding: '0.5rem 1rem',
                          fontWeight: '500'
                        }}
                      >
                        🚀 Open Source
                      </motion.span>
                      <motion.span
                        className="badge badge--secondary"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 12px rgba(100, 255, 218, 0.6)'
                        }}
                        style={{
                          fontSize: '0.9rem',
                          padding: '0.5rem 1rem',
                          fontWeight: '500'
                        }}
                      >
                        👥 Co-Learning
                      </motion.span>
                      <motion.span
                        className="badge badge--secondary"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 12px rgba(100, 255, 218, 0.6)'
                        }}
                        style={{
                          fontSize: '0.9rem',
                          padding: '0.5rem 1rem',
                          fontWeight: '500'
                        }}
                      >
                        📋 Spec-Driven
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* CTA Buttons with enhanced robot-like animations */}
                  <motion.div
                    className="margin-vert--lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.button
                      className="button button--primary button--lg"
                      onClick={handleStartReading}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(100, 255, 218, 0.7)',
                        y: -3
                      }}
                      whileTap={{
                        scale: 0.98,
                        y: 0
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 15px rgba(100, 255, 218, 0.5)',
                          '0 0 30px rgba(100, 255, 218, 0.7)',
                          '0 0 15px rgba(100, 255, 218, 0.5)'
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        padding: '1rem 2rem',
                        borderRadius: '12px'
                      }}
                    >
                      <span style={{ marginRight: '0.75rem' }}></span> Start Reading
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </section>
  );
};

export default HeroSection;