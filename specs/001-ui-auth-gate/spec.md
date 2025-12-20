# Feature Specification: UI Upgrade and Authentication Gate

**Feature Branch**: `001-ui-auth-gate`
**Created**: 2025-12-19
**Status**: Draft
**Input**: User description: " /sp.specify

Project: Physical AI & Humanoid Robotics Textbook
Scope: Global UI Upgrade (Header, Hero, Footer, Chat Entry, Auth UI)

Objective:
Upgrade the visual design and interaction layer of the application to a modern,
futuristic, AI-native UI inspired by the provided reference image, without altering
existing content, routing, or backend logic.

Target users:
- Learners and readers of the AI-native textbook
- Developers and AI practitioners
- Authenticated and unauthenticated users

Design intent:
The UI must communicate:
- Advanced AI / Robotics aesthetics
- Premium, modern, calm, technical feel
- Trust, clarity, and approachability
- "AI-native" identity

Global design language:
- Dark theme with subtle gradients
- Soft glow and radial lighting effects
- Large, bold hero typography
- Rounded buttons, cards, and panels
- Minimal borders, soft shadows
- Smooth, non-distracting animations

------------------------------------------------
Components to upgrade
------------------------------------------------

Header:
- Dark translucent header bar
- Left: Project / Book title
- Navigation links styled minimally
- Right side:
  - Search input
  - "Sign In" button
  - Primary "Sign Up" button
- Add downloaded AI/robotics logo
- Hover and focus animations on all interactive elements

Hero Section:
- Two-column layout
  - Left: Book cover or robotic illustration in glowing card
  - Right:
    - Badge / pill (e.g. "AI-Native Book Series")
    - Large headline
    - Subtitle text
    - Feature chips (Open Source, Co-Learning, Spec-Driven)
    - Primary CTA: "Start Reading"
- Use gradients, glow effects, and subtle motion
- Add entrance animations (fade, slide, scale)

Chat Board Entry:
- Floating chat launcher (bottom corner)
- Chat icon + short label text
- On click:
  - Opens chat board UI
- Only launcher UI is required here (not full backend logic)
- Smooth open/close animation

Login / Authentication UI:
- Integrate authentication service for authentication
- Add login and signup UI states
- Include all required authentication frontend dependencies
- No backend API configuration required yet
- Clean, modern auth UI consistent with site theme

Footer:
- Dark, modern footer
- Project branding / logo
- Minimal navigation links
- Copyright / legal text
- Subtle hover animations

Animations:
- Add tasteful animations across all pages
- Use web-standard animation libraries or CSS animations
- Animations must:
  - Be smooth
  - Be lightweight
  - Not interfere with reading or performance

------------------------------------------------
Constraints
------------------------------------------------
- UI changes ONLY
- Do NOT delete or refactor existing logic
- Do NOT change routing or data flow
- Do NOT add backend services
- Use existing project stack where possible

------------------------------------------------
Success criteria
------------------------------------------------
- UI visually matches reference image style
- Hero, header, footer feel modern and premium
- Chat launcher is visible and interactive
- Authentication UI is present and functional AUTHENTICATION GATE BEHAVIOR

Trigger:
- User clicks "Start Reading" / "Read the Book" button

Behavior:
- Check authentication state using frontend authentication state
- If user is NOT authenticated:
  - Display login / signup UI
  - Prevent navigation to book content
- If user IS authenticated:
  - Allow navigation to reading experience

Login UI:
- Use prebuilt authentication components
- Match site dark theme styling
- Modal or dedicated auth page is acceptable
- UI must feel integrated, not external

Post-login flow:
- After successful login or signup:
  - Automatically redirect user to the book reading page
  - No manual second click required

Constraints:
- Frontend-only logic
- No backend access control changes
- No API keys added yet (handled later by project owner)

Success criteria:
- Unauthenticated users cannot read content
- Login experience is smooth and visually consistent
- Auth flow feels intentional, not disruptive

Failure conditions:
- Redirect loops
- Login required AFTER content is shown
- Authentication UI feeling visually detached from the site"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Book Content with Authentication Gate (Priority: P1)

A learner visits the textbook website and clicks the "Start Reading" button. If they are not authenticated, they are presented with a login/signup UI that matches the dark theme styling. After successful authentication, they are automatically redirected to the book reading page without requiring a second click. If they are already authenticated, they can access the content directly.

**Why this priority**: This is the core functionality that ensures only authenticated users can access the book content while providing a seamless experience for existing users.

**Independent Test**: Can be fully tested by attempting to access book content as an unauthenticated user and verifying the authentication gate is triggered, then completing the authentication flow and verifying automatic redirect to content.

**Acceptance Scenarios**:

1. **Given** user is not authenticated, **When** user clicks "Start Reading", **Then** login UI is displayed in a modal/dedicated page with dark theme styling
2. **Given** user is not authenticated, **When** user completes login/signup flow, **Then** user is automatically redirected to book reading page
3. **Given** user is already authenticated, **When** user clicks "Start Reading", **Then** user is immediately taken to book content without authentication UI

---

### User Story 2 - Experience Modern UI Design (Priority: P1)

A learner visits the textbook website and experiences a modern, futuristic UI with dark theme, subtle gradients, soft glow effects, rounded elements, and smooth animations. The header, hero section, footer, and chat launcher all follow the new design language, creating a premium, AI-native feel that communicates trust and approachability.

**Why this priority**: This creates the visual identity and user experience that differentiates the platform and provides the premium feel required by the design intent.

**Independent Test**: Can be fully tested by visiting all pages and verifying the new design elements are present and consistent with the dark theme, gradients, glow effects, and animations.

**Acceptance Scenarios**:

1. **Given** user visits the website, **When** user views the header, **Then** header displays dark translucent bar with project title, minimal navigation, search input, and auth buttons with hover animations
2. **Given** user visits the homepage, **When** user views the hero section, **Then** hero displays two-column layout with book/robotic illustration in glowing card on left and badge, headline, subtitle, feature chips, and CTA on right with entrance animations
3. **Given** user scrolls through pages, **When** user views footer, **Then** footer displays dark modern design with project branding, minimal links, and copyright text with subtle hover animations

---

### User Story 3 - Access Interactive Chat Feature (Priority: P2)

A learner browsing the textbook notices a floating chat launcher in the bottom corner of the page. When clicked, the chat board UI opens with smooth animation, allowing users to interact with the chat functionality without interfering with their reading experience.

**Why this priority**: This provides an additional channel for user engagement and support while maintaining the reading experience.

**Independent Test**: Can be fully tested by clicking the floating chat launcher and verifying the chat board UI opens with smooth animation and functions properly.

**Acceptance Scenarios**:

1. **Given** user is browsing the textbook, **When** user sees floating chat launcher, **Then** launcher displays chat icon with short label text in bottom corner
2. **Given** chat launcher is visible, **When** user clicks launcher, **Then** chat board UI opens with smooth animation
3. **Given** chat board UI is open, **When** user closes chat, **Then** UI closes with smooth animation and doesn't interfere with reading experience

---

### Edge Cases

- What happens when a user's authentication token expires while they're reading?
- How does the system handle failed authentication attempts?
- What occurs if the authentication service is temporarily unavailable?
- How does the UI behave when JavaScript is disabled?
- What happens when users navigate directly to book content URLs without clicking "Start Reading"?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST check authentication state when user clicks "Start Reading" or "Read the Book" button using frontend authentication state
- **FR-002**: System MUST display login/signup UI when user is NOT authenticated and attempts to access book content
- **FR-003**: System MUST allow navigation to reading experience when user IS authenticated
- **FR-004**: System MUST automatically redirect user to book reading page after successful login/signup without requiring manual navigation
- **FR-005**: System MUST prevent redirect loops during authentication flow
- **FR-006**: System MUST ensure authentication UI matches site's dark theme styling
- **FR-007**: System MUST implement dark translucent header bar with project title on left, minimal navigation links, and search input, "Sign In" and "Sign Up" buttons on right
- **FR-008**: System MUST implement two-column hero section layout with book/robotic illustration in glowing card on left and badge, headline, subtitle, feature chips, and primary CTA on right
- **FR-009**: System MUST implement floating chat launcher in bottom corner that opens chat board UI with smooth animation on click
- **FR-010**: System MUST implement dark, modern footer with project branding, minimal navigation links, and copyright text
- **FR-011**: System MUST add tasteful animations across all pages using web-standard animation libraries or CSS animations that are smooth, lightweight, and don't interfere with reading or performance
- **FR-012**: System MUST ensure authentication UI feels integrated and not external to the site design
- **FR-013**: System MUST NOT alter existing content, routing, or backend logic during UI upgrade
- **FR-014**: System MUST NOT add backend services as part of this feature

### Key Entities

- **Authenticated User**: Represents a user who has successfully completed the authentication process, with access to book content
- **Unauthenticated User**: Represents a user who has not completed authentication, restricted from accessing book content until authentication is completed
- **UI Components**: Visual elements including header, hero section, footer, chat launcher, and authentication UI that follow the new design language

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Unauthenticated users cannot access book content directly without completing authentication flow
- **SC-002**: Users complete the authentication flow and are redirected to book content in under 30 seconds
- **SC-003**: 95% of users report that the login experience feels smooth and visually consistent with the site theme
- **SC-004**: The UI visually matches the reference image style with dark theme, subtle gradients, soft glow effects, large bold typography, rounded elements, minimal borders, and soft shadows
- **SC-005**: The chat launcher is visible and interactive on all pages with smooth open/close animations
- **SC-006**: The authentication UI appears integrated with the site design and not as an external element
- **SC-007**: All UI components (header, hero, footer) follow the modern, futuristic, AI-native design language and communicate premium, technical feel
- **SC-008**: Animations are smooth, lightweight, and do not interfere with reading performance or user experience
- **SC-009**: There are no redirect loops during the authentication flow
- **SC-010**: Users do not experience the login requirement after content has already been shown