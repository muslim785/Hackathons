# Data Model: UI Upgrade and Authentication Gate

**Feature**: UI Upgrade and Authentication Gate
**Created**: 2025-12-19

## Entity: User Authentication State

**Description**: Represents the authentication status of a user interacting with the system

**Fields**:
- `isAuthenticated` (boolean): Whether the user is currently authenticated
- `userId` (string, optional): Unique identifier for authenticated user
- `sessionId` (string, optional): Current session identifier
- `authToken` (string, optional): Authentication token (if applicable)
- `authStatus` (enum): Current authentication status ['unauthenticated', 'authenticated', 'checking']

**Validation Rules**:
- `isAuthenticated` must be a boolean value
- `authStatus` must be one of the allowed values
- When `isAuthenticated` is true, `userId` should be present

## Entity: UI Component State

**Description**: Represents the state of various UI components that need to be managed

**Fields**:
- `headerState` (object): State of the header component
  - `isSearchOpen` (boolean): Whether search is expanded
  - `activeNav` (string): Currently active navigation item
- `chatState` (object): State of the chat launcher component
  - `isOpen` (boolean): Whether chat panel is open
  - `isVisible` (boolean): Whether chat launcher is visible
- `authModalState` (object): State of authentication modal
  - `isOpen` (boolean): Whether auth modal is open
  - `mode` (enum): Current mode ['login', 'signup', 'closed']

## Entity: Visual Design Properties

**Description**: Properties that define the visual appearance of UI components

**Fields**:
- `theme` (object): Theme properties
  - `primaryColor` (string): Primary theme color
  - `backgroundColor` (string): Background color
  - `textColor` (string): Text color
  - `darkMode` (boolean): Whether dark theme is active
- `animation` (object): Animation properties
  - `duration` (number): Animation duration in ms
  - `easing` (string): Animation easing function
  - `enabled` (boolean): Whether animations are enabled

## Entity: Navigation State

**Description**: Represents the navigation state for handling redirects after authentication

**Fields**:
- `currentPath` (string): Current URL path
- `intendedDestination` (string): Path user intended to reach
- `redirectAfterAuth` (string): Path to redirect to after successful authentication
- `navigationHistory` (array): Array of previous paths

## Relationships

- `User Authentication State` influences the rendering of `UI Component State`
- `User Authentication State` affects `Navigation State` behavior
- `Visual Design Properties` applied to all UI components
- `Navigation State` may trigger `UI Component State` changes (e.g., showing auth modal)

## State Transitions

### Authentication State Transitions
1. `unauthenticated` → `checking`: When auth state is being determined
2. `checking` → `authenticated`: After successful authentication
3. `checking` → `unauthenticated`: After failed authentication or no valid token
4. `authenticated` → `unauthenticated`: After logout or token expiration

### Chat State Transitions
1. `isVisible: true, isOpen: false` → `isOpen: true`: When chat launcher is clicked
2. `isOpen: true` → `isOpen: false`: When chat is closed
3. `isVisible: true` → `isVisible: false`: When chat should be hidden (optional)

### Navigation State Transitions
1. User clicks "Start Reading" → Store `intendedDestination`, check auth
2. Auth check: `unauthenticated` → Show auth modal
3. Successful auth → Redirect to `intendedDestination`
4. Failed auth → Remain on current page with error feedback