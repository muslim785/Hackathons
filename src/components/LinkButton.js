import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';

/**
 * A modern button component that acts as a link with glow effects and animations
 * @param {string} variant - 'primary', 'secondary', or 'ghost'
 * @param {string} size - 'sm', 'md', or 'lg'
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {string} to - Link destination
 * @param {string} href - Alternative href attribute
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Whether button is disabled
 * @param {object} props - Additional props
 */
const LinkButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  href,
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

  // If disabled, return a span instead of a link
  if (disabled) {
    return (
      <span className={`${classes} button--disabled`}>
        {children}
      </span>
    );
  }

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      href={to || href}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default LinkButton;