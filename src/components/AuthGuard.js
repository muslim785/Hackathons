import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * AuthGuard component that checks authentication state and redirects appropriately
 * @param {React.Component} children - The protected content to render
 * @param {string} redirectTo - Path to redirect unauthenticated users to (default: '/login')
 * @param {string} redirectAfterAuth - Path to redirect after successful authentication
 */
const AuthGuard = ({ children, redirectTo = '/login', redirectAfterAuth }) => {
  // Safely use Clerk's useAuth hook
  let isSignedIn = false;
  let isLoaded = true;
  try {
    const auth = useAuth();
    isSignedIn = auth.isSignedIn;
    isLoaded = auth.isLoaded;
  } catch (error) {
    // If ClerkProvider is not available, we assume user is not signed in
    console.warn('ClerkProvider not available in AuthGuard, assuming not signed in');
    isLoaded = true; // Set to true to avoid infinite loading if Clerk is not configured
  }

  const location = useLocation();
  const [intendedDestination, setIntendedDestination] = useState(null);

  useEffect(() => {
    // Store the intended destination when the component mounts
    if (!isSignedIn && isLoaded) {
      setIntendedDestination(redirectAfterAuth || location.pathname + location.search);
    }
  }, [isSignedIn, isLoaded, location, redirectAfterAuth]);

  // While auth state is loading, show a loading indicator
  if (!isLoaded) {
    return (
      <div className="auth-guard-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  // If user is authenticated, render the children
  if (isSignedIn) {
    return children;
  }

  // If user is not authenticated, redirect to login
  return <Navigate to={redirectTo} state={{ from: intendedDestination }} replace />;
};

export default AuthGuard;