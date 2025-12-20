import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';

/**
 * A modern button component with glow effects and animations
 * @param {string} variant - 'primary', 'secondary', or 'ghost'
 * @param {string} size - 'sm', 'md', or 'lg'
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Whether button is disabled
 * @param {object} props - Additional props
 */
const ModernButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const baseClasses = 'button interactive-element';
  const variantClasses = {
    primary: 'button--primary glow-button',
    secondary: 'button--secondary',
    ghost: 'button--ghost ai-card',
  };
  const sizeClasses = {
    sm: 'button--sm',
    md: 'button--md',
    lg: 'button--lg',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
    {
      'button--disabled': disabled,
    }
  );

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ModernButton;