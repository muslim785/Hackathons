---
description: "Task list for UI Upgrade and Authentication Gate feature"
---

# Tasks: UI Upgrade and Authentication Gate

**Input**: Design documents from `/specs/001-ui-auth-gate/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: No explicit testing requirements in the specification - tests are not included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus project**: `src/`, `docs/`, `static/` at repository root
- **Custom components**: `src/components/`
- **Theme overrides**: `src/theme/`
- **CSS/SCSS**: `src/css/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan
- [X] T002 Initialize Docusaurus project with authentication dependencies
- [X] T003 [P] Install authentication service dependencies (Clerk or similar)
- [X] T004 [P] Install animation library dependencies (framer-motion or similar)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Configure authentication context/wrapper for Docusaurus application
- [X] T006 [P] Set up dark theme CSS variables and styling framework
- [X] T007 [P] Create base component structure for custom UI elements
- [X] T008 Configure environment variables for authentication service
- [X] T009 Create shared utility functions for authentication state checking

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Access Book Content with Authentication Gate (Priority: P1) 🎯 MVP

**Goal**: Implement authentication gate that checks user state when clicking "Start Reading" button and redirects appropriately after authentication.

**Independent Test**: Can be fully tested by attempting to access book content as an unauthenticated user and verifying the authentication gate is triggered, then completing the authentication flow and verifying automatic redirect to content.

### Implementation for User Story 1

- [X] T010 [P] [US1] Create authentication guard component in src/components/AuthGuard.js
- [X] T011 [US1] Implement "Start Reading" button with authentication check in relevant pages
- [X] T012 [P] [US1] Create authentication modal/component in src/components/AuthModal.js
- [X] T013 [US1] Implement redirect logic after successful authentication to intended destination
- [X] T014 [US1] Add authentication state checking functionality using frontend auth state
- [X] T015 [US1] Implement unauthenticated flow: display login/signup UI and prevent navigation to book content
- [X] T016 [US1] Implement authenticated flow: allow navigation to reading experience
- [X] T017 [US1] Test post-login redirect functionality to ensure automatic navigation to book content

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Experience Modern UI Design (Priority: P1)

**Goal**: Implement modern, futuristic UI with dark theme, subtle gradients, soft glow effects, rounded elements, and smooth animations for header, hero section, footer, and chat launcher.

**Independent Test**: Can be fully tested by visiting all pages and verifying the new design elements are present and consistent with the dark theme, gradients, glow effects, and animations.

### Implementation for User Story 2

- [X] T018 [P] [US2] Create custom header component with dark translucent styling in src/theme/Header/index.js
- [X] T019 [P] [US2] Create hero section component with two-column layout in src/components/HeroSection.js
- [X] T020 [P] [US2] Create custom footer component with dark theme in src/theme/Footer/index.js
- [X] T021 [US2] Add project title and navigation links to header with minimal styling
- [X] T022 [US2] Add search input, "Sign In", and "Sign Up" buttons to header
- [X] T023 [US2] Implement left column of hero with book/robotic illustration in glowing card
- [X] T024 [US2] Implement right column of hero with badge, headline, subtitle, feature chips, and CTA
- [X] T025 [US2] Add gradients, glow effects, and subtle motion to hero section
- [X] T026 [US2] Add entrance animations (fade, slide, scale) to hero section
- [X] T027 [US2] Add hover and focus animations to header interactive elements
- [X] T028 [US2] Add subtle hover animations to footer elements
- [X] T029 [US2] Add AI/robotics logo to header
- [X] T030 [US2] Ensure responsive behavior is preserved across all components

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Interactive Chat Feature (Priority: P2)

**Goal**: Implement floating chat launcher in the bottom corner of the page that opens chat board UI with smooth animation.

**Independent Test**: Can be fully tested by clicking the floating chat launcher and verifying the chat board UI opens with smooth animation and functions properly.

### Implementation for User Story 3

- [X] T031 [P] [US3] Create floating chat launcher component in src/components/ChatLauncher.js
- [X] T032 [US3] Position chat launcher in bottom corner with fixed positioning
- [X] T033 [US3] Add chat icon and short label text to launcher
- [X] T034 [US3] Implement smooth open/close animation for chat board UI
- [X] T035 [US3] Create chat board UI component that opens when launcher is clicked
- [X] T036 [US3] Ensure chat launcher is non-intrusive and doesn't interfere with reading experience
- [X] T037 [US3] Test chat launcher visibility and functionality across different pages

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T038 [P] Update docusaurus.config.js to integrate new theme components
- [X] T039 [P] Add comprehensive CSS styling to match dark theme requirements
- [X] T040 Add animations to enhance user experience across all pages
- [X] T041 [P] Ensure all UI components follow modern, futuristic, AI-native design language
- [X] T042 Verify animations are smooth, lightweight, and don't interfere with reading or performance
- [X] T043 Test on different browsers and devices for responsive behavior
- [X] T044 [P] Update any existing pages to use new theme components
- [X] T045 Run quickstart.md validation to ensure all requirements are met

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 2

```bash
# Launch all UI components for User Story 2 together:
Task: "Create custom header component with dark translucent styling in src/theme/Header/index.js"
Task: "Create hero section component with two-column layout in src/components/HeroSection.js"
Task: "Create custom footer component with dark theme in src/theme/Footer/index.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence