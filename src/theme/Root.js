import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import ChatLauncher from '../components/ChatLauncher';

// Create a wrapper component that will be used to wrap the entire app
const Root = ({ children }) => {
  // Use your frontend API key from your Clerk Dashboard
  // Access the environment variable safely, ensuring it works in all environments
  // In Docusaurus, environment variables are made available differently
  const PUBLISHABLE_KEY = typeof process !== 'undefined'
    ? (process.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || global?.process?.env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
    : undefined;

  if (!PUBLISHABLE_KEY) {
    console.warn('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing in environment variables');
    // If no key is available, render children without ClerkProvider to avoid crash
    return (
      <>
        {children}
        <ChatLauncher />
      </>
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
      <ChatLauncher />
    </ClerkProvider>
  );
};

export default Root;