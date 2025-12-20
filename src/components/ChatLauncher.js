import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ChatLauncher component - a floating chat button that opens chat interface
 */
const ChatLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    if (!isOpen) {
      // First open the launcher
      setIsOpen(true);
      // Then after a short delay, show the chat interface
      setTimeout(() => {
        setShowChat(true);
      }, 300);
    } else {
      // Hide the chat interface first
      setShowChat(false);
      // Then close the launcher after the chat disappears
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  return (
    <div className="chat-launcher-container">
      <AnimatePresence>
        {showChat && (
          <motion.div
            className="chat-interface"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="chat-header">
              <h3>AI Assistant</h3>
              <button
                className="chat-close-button"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <div className="chat-messages">
              <div className="chat-message bot-message">
                Hello! I'm your AI assistant for the Physical AI & Humanoid Robotics textbook. How can I help you today?
              </div>
            </div>
            <div className="chat-input-area">
              <input
                type="text"
                className="form-control chat-input"
                placeholder="Ask a question..."
              />
              <button className="button button--primary chat-send-button">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chat-launcher-button ai-card interactive-element"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 1 : 1.2 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: showChat ? 0.3 : 0
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="chat-icon">💬</span>
        {isOpen && <span className="chat-label">Chat</span>}
      </motion.button>
    </div>
  );
};

export default ChatLauncher;