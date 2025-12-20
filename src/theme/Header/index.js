import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { useAuth } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

function HeaderWrapper(props) {
  const { pathname } = useLocation();

  // Safely use Clerk's useAuth hook
  let isSignedIn = false;
  let isLoaded = true;
  try {
    const auth = useAuth();
    isSignedIn = auth.isSignedIn;
    isLoaded = auth.isLoaded;
  } catch (error) {
    // If ClerkProvider is not available, we assume user is not signed in
    console.warn('ClerkProvider not available in Header, assuming not signed in');
    isLoaded = true; // Set to true to avoid infinite loading if Clerk is not configured
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation items

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, this would trigger search
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={clsx('navbar', 'navbar--fixed-top', styles.navbar)}>
      <div className="navbar__inner">
        <div className="navbar__items">
          {/* Logo and Brand */}
          <Link className="navbar__brand" to="/" aria-label="Home">
            <motion.div
              className={clsx('navbar__title', 'text--truncate', 'gradient-text')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="navbar-logo" style={{ fontSize: '1.8rem', marginRight: '0.75rem' }}>🤖</span>
              <span style={{ fontWeight: '700' }}>Physical AI</span>
            </motion.div>
          </Link>

          {/* Navigation links - Desktop */}
          <div className="navbar__items">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                className={clsx('navbar__item navbar__link', {
                  'navbar__link--active': pathname === item.to,
                })}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="navbar__items navbar__items--right">
          {/* Search bar */}
          <div className="navbar__item">
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  className={clsx('form-control', styles.navbarSearchInput)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className={clsx('button button--primary', styles.searchButton)}
                  aria-label="Submit search"
                >
                  🔍
                </button>
              </div>
            </form>
          </div>

          {/* Auth buttons */}
          {!isLoaded ? (
            <div className="navbar__item">
              <div className="spinner" style={{ width: '20px', height: '20px' }}></div>
            </div>
          ) : isSignedIn ? (
            <>
              <div className="navbar__item">
                <Link
                  className="button button--secondary button--sm"
                  to="/docs/modules/ros2-textbook/chapter-1-foundations"
                >
                  Dashboard
                </Link>
              </div>
              <div className="navbar__item">
                <Link
                  className="button button--primary button--sm"
                  to="/user/profile"
                >
                  <span style={{ marginRight: '0.5rem' }}>👤</span> Profile
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="navbar__item">
                <Link
                  className="button button--secondary button--sm"
                  to="/signin"
                >
                  <span style={{ marginRight: '0.5rem' }}>🔓</span> Sign In
                </Link>
              </div>
              <div className="navbar__item">
                <Link
                  className="button button--primary button--sm"
                  to="/signup"
                >
                  <span style={{ marginRight: '0.5rem' }}>✍️</span> Sign Up
                </Link>
              </div>
            </>
          )}

          {/* Chat icon */}
          <div className="navbar__item">
            <Link
              className="button button--sm"
              to="/chat"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                minWidth: 'auto'
              }}
              aria-label="Open chat"
            >
              💬
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="navbar__item navbar__item--mobile">
            <button
              className={clsx('navbar__toggle', styles.navbarToggle)}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className={styles.navbarToggleIcon} viewBox="0 0 30 30" aria-hidden="true">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className={clsx('navbar__mobile-items', styles.navbarMobileItems)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item, idx) => (
            <div key={idx} className="navbar__item">
              <Link
                className={clsx('navbar__item', {
                  'navbar__link--active': pathname === item.to,
                })}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}

          {/* Mobile search */}
          <div className="navbar__item" style={{ padding: '0.5rem 1rem' }}>
            <form onSubmit={handleSearch} style={{ display: 'flex' }}>
              <input
                type="text"
                placeholder="Search..."
                className={clsx('form-control', styles.navbarSearchInput)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, marginRight: '0.5rem' }}
                aria-label="Search"
              />
              <button
                type="submit"
                className="button button--primary"
                aria-label="Submit search"
              >
                🔍
              </button>
            </form>
          </div>

          {!isLoaded ? (
            <div className="navbar__item">
              <div className="spinner"></div>
            </div>
          ) : isSignedIn ? (
            <>
              <div className="navbar__item">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  Dashboard
                </Link>
              </div>
              <div className="navbar__item">
                <Link to="/user/profile" onClick={() => setIsMenuOpen(false)}>
                  <span style={{ marginRight: '0.5rem' }}>👤</span> Profile
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="navbar__item">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <span style={{ marginRight: '0.5rem' }}>🔓</span> Sign In
                </Link>
              </div>
              <div className="navbar__item">
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="button button--primary"
                >
                  <span style={{ marginRight: '0.5rem' }}>✍️</span> Sign Up
                </Link>
              </div>
            </>
          )}

          {/* Mobile chat button */}
          <div className="navbar__item">
            <Link
              to="/chat"
              onClick={() => setIsMenuOpen(false)}
              className="button"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem' }}>💬</span> Chat
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default React.memo(HeaderWrapper);