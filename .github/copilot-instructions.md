<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions — Physical AI & Humanoid Robotics Textbook

Purpose: help an AI coding agent become productive quickly in this repository by pointing to the project's structure, conventions, and concrete commands.

- **Run / Build**: the live site lives under `website/` (Docusaurus). Use Node >= 20.
  - Dev server (PowerShell):
    ```powershell
    cd website; npm install; npm run start
    ```
  - Build production site:
    ```powershell
    cd website; npm run build
    ```
  - Type-check only:
    ```powershell
    cd website; npm run typecheck
    ```

- **Where to edit docs & UI**:
  - Content pages: `website/docs/` (organized into module folders like `module1-ros`, `module2-digital-twin`, etc.). Many folders include `_category_.json` to control sidebar categories.
  - Website components: `website/src/components/` (e.g. `PersonalizationHook.tsx`, `HomepageFeatures/index.tsx`).
  - Theme CSS: `website/src/css/custom.css` and `website/src/pages/index.module.css`.
  - Static assets: `website/static/img/`.

- **Key config and authoritative files**:
  - `website/docusaurus.config.ts` — Docusaurus site config (note: several GitHub links are placeholders and `future.v4` is enabled).
  - `website/sidebars.ts` — docs sidebar config.
  - `website/package.json` — npm scripts used above (start/build/typecheck).
  - `specs/` — spec-driven source material: `spec.md`, `data-model.md`, `plan.md`, `tasks.md`. Treat these as authoritative for learning goals and structure.
  - `history/prompts/` — previous agent prompts and iterations; useful for understanding prompt conventions and prior design decisions.

- **Repository patterns & conventions** (do not assume defaults):
  - The site is Docusaurus-based, TypeScript-enabled (tsc used for `typecheck`). Avoid editing client-only code inside `docusaurus.config.ts` (runs in Node).
  - Several links in config are placeholders; changes to content should not assume those external URLs are correct.
  - Docs are organized by module (prefixes like `module1-ros`); new modules should follow the same folder + `_category_.json` pattern.
  - Localization: `website/docusaurus.config.ts` includes locales `['en','ur']`. Avoid hardcoding language strings and be mindful of RTL/locale formatting.

- **What to look for when changing content**:
  - If you add docs, update `website/sidebars.ts` (sidebars are explicit) and maintain `_category_.json` metadata for categories.
  - If you add frontend components, place them under `website/src/components/` and import them from `website/src/pages` or docs MDX as appropriate.
  - For styling, prefer `website/src/css/custom.css` or module CSS next to the page.

- **Testing & CI**:
  - There are no unit test scripts in `package.json` — only `typecheck`. Assume manual verification of the site by running `npm run start` unless a test target is added.

- **Integration points / external deps**:
  - Docusaurus (v3.x) and React 19 are primary runtime dependencies.
  - Specs reference ROS, Gazebo, Unity, NVIDIA Isaac workflows conceptually in `specs/` but repository doesn't include those runtimes; don't attempt to run robotics stacks locally unless the user provides environment instructions.

- **Examples to reference in edits**:
  - Add a module page: copy the pattern from `website/docs/module1-ros/1-introduction-to-ros.md` and add a corresponding `_category_.json` in the new folder.
  - Add a UI feature: see `website/src/components/HomepageFeatures/index.tsx` for layout and `styles.module.css` usage.

If anything here is unclear or you want more detail (CI steps, preferred commit message style, or how to publish), tell me which area to expand and I will iterate.
