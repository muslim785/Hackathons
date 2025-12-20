/**
 * Utility functions for authentication state checking
 */

/**
 * Check if user is authenticated
 * @param {Object} auth - The auth object from useAuth hook
 * @returns {boolean} Whether the user is authenticated
 */
export const isAuthenticated = (auth) => {
  return auth && auth.isSignedIn === true;
};

/**
 * Check if authentication state is still loading
 * @param {Object} auth - The auth object from useAuth hook
 * @returns {boolean} Whether the auth state is loading
 */
export const isAuthLoading = (auth) => {
  return auth && auth.isLoaded !== true;
};

/**
 * Get user information if authenticated
 * @param {Object} auth - The auth object from useAuth hook
 * @returns {Object|null} User information or null if not authenticated
 */
export const getUserInfo = (auth) => {
  if (!isAuthenticated(auth)) {
    return null;
  }
  return {
    id: auth.userId,
    email: auth.user?.emailAddresses?.[0]?.emailAddress,
    firstName: auth.user?.firstName,
    lastName: auth.user?.lastName,
    fullName: auth.user?.fullName,
    imageUrl: auth.user?.imageUrl,
  };
};

/**
 * Check if user has a specific role (if using role-based access)
 * @param {Object} auth - The auth object from useAuth hook
 * @param {string} role - The role to check for
 * @returns {boolean} Whether the user has the specified role
 */
export const hasRole = (auth, role) => {
  if (!isAuthenticated(auth)) {
    return false;
  }
  // This is a placeholder - implement based on your role system
  // For Clerk, you might check permissions or roles from the session
  return false;
};

/**
 * Check if user has a specific permission
 * @param {Object} auth - The auth object from useAuth hook
 * @param {string} permission - The permission to check for
 * @returns {boolean} Whether the user has the specified permission
 */
export const hasPermission = (auth, permission) => {
  if (!isAuthenticated(auth)) {
    return false;
  }
  // This is a placeholder - implement based on your permission system
  return false;
};

/**
 * Redirect to login with return URL
 * @param {string} returnUrl - The URL to return to after login
 */
export const redirectToLogin = (returnUrl = null) => {
  const redirectUrl = returnUrl || window.location.pathname + window.location.search;
  window.location.href = `/login?return=${encodeURIComponent(redirectUrl)}`;
};

/**
 * Redirect after successful authentication
 * @param {string} destination - The destination URL after auth
 */
export const redirectToDestination = (destination = '/dashboard') => {
  window.location.href = destination;
};

/**
 * Get the intended destination from location state or default
 * @param {Object} location - The location object from router
 * @param {string} defaultDestination - Default destination if none found
 * @returns {string} The intended destination
 */
export const getIntendedDestination = (location, defaultDestination = '/') => {
  // In a real implementation, you'd get this from router state
  // This is a simplified version
  return location?.state?.from || defaultDestination;
};

/**
 * Check if the user should be redirected after authentication
 * @param {Object} auth - The auth object from useAuth hook
 * @param {Object} location - The location object from router
 * @returns {string|null} The redirect destination or null if no redirect needed
 */
export const getPostAuthRedirect = (auth, location) => {
  if (isAuthenticated(auth)) {
    // If user is authenticated, no redirect needed
    return null;
  }

  // When auth state loads and user is authenticated,
  // we might want to redirect them to where they intended to go
  if (auth?.isLoaded && auth?.isSignedIn) {
    return getIntendedDestination(location, '/');
  }

  return null;
};