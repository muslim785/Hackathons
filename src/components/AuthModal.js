import React, { useEffect } from 'react';
import { useAuth, SignIn, SignUp } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AuthModal component that displays login/signup UI
 * @param {boolean} isOpen - Whether the modal is open
 * @param {function} onClose - Function to close the modal
 * @param {string} mode - 'login' or 'signup' mode
 * @param {function} onAuthSuccess - Function to call after successful authentication
 */
const AuthModal = ({ isOpen, onClose, mode = 'login', onAuthSuccess }) => {
  // Safely use Clerk's useAuth hook
  let isSignedIn = false;

  try {
    const auth = useAuth();
    isSignedIn = auth.isSignedIn;
  } catch (error) {
    // If ClerkProvider is not available, we assume user is not signed in
    console.warn('ClerkProvider not available in AuthModal, assuming not signed in');
    // We don't prevent functionality, just assume not signed in
  }

  // Close the modal when user becomes signed in
  useEffect(() => {
    if (isSignedIn && isOpen) {
      // Add a small delay to allow for UI transition before closing
      const timer = setTimeout(() => {
        if (onAuthSuccess) {
          onAuthSuccess();
        }
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isOpen, onClose, onAuthSuccess]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="auth-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="auth-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="auth-modal-header">
              <h2 className="auth-modal-title">
                {mode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <button
                className="auth-modal-close-button"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="auth-modal-body">
              {mode === 'login' ? (
                <SignIn
                  afterSignIn={onAuthSuccess}
                  appearance={{
                    variables: {
                      colorPrimary: '#66fad7ff',
                      fontSize: '16px',
                    },
                    elements: {
                      card: 'auth-signin-card',
                      headerTitle: 'auth-signin-title',
                      headerSubtitle: 'auth-signin-subtitle',
                      socialButtons: 'auth-social-buttons',
                      socialButtonsIconButton: 'auth-social-button',
                      formButtonPrimary: 'button button--primary auth-button',
                      footerActionText: 'auth-footer-text',
                      footerActionLink: 'auth-footer-link',
                    }
                  }}
                />
              ) : (
                <SignUp
                  afterSignUp={onAuthSuccess}
                  appearance={{
                    variables: {
                      colorPrimary: '#1c95a5ff',
                      fontSize: '16px',
                    },
                    elements: {
                      card: 'auth-signup-card',
                      headerTitle: 'auth-signup-title',
                      headerSubtitle: 'auth-signup-subtitle',
                      socialButtons: 'auth-social-buttons',
                      socialButtonsIconButton: 'auth-social-button',
                      formButtonPrimary: 'button button--primary auth-button',
                      footerActionText: 'auth-footer-text',
                      footerActionLink: 'auth-footer-link',
                    }
                  }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
