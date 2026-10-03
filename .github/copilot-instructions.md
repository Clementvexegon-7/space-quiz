# Space Quiz project instructions

## Project shape
- This workspace is a small static web app built from a single file: `index.html`.
- Keep changes lightweight and dependency-free unless a new requirement explicitly needs otherwise.
- Prefer a single-file HTML/CSS/JS structure for UI and behavior.

## Core conventions
- Preserve the space-themed visual direction: centered layout, polished panel card, soft gradients, and readable sans-serif typography.
- Respect `prefers-color-scheme` and `prefers-reduced-motion` in all styling updates.
- Maintain accessible interaction patterns:
  - focus-visible outlines for keyboard users
  - semantic buttons for answers and actions
  - visible feedback for correct/incorrect answers
  - no mouse-only interactions
- Keep light and dark themes visually consistent.

## Editing guidance
- Prefer updating `index.html` for app logic, styles, and content.
- If a visual tweak is needed, prefer CSS variables and small focused changes instead of introducing new frameworks or build tooling.
- Keep the quiz logic simple and deterministic: 10 questions, score tracking, progress bar, results screen, and replay flow.
- Preserve the current quiz flow unless the task says otherwise.

## Testing
- Validate browser behavior with the smoke test in the workspace:
  - `npx playwright test smoke.spec.js --browser=firefox --workers=1 --reporter=line`
- The smoke test should cover keyboard navigation, answer selection, score updates, incorrect/correct feedback, and the results screen.
- Do not add heavy tooling or packages unless the task requires it.

## Anti-patterns to avoid
- Do not introduce a framework or server just for a small static quiz.
- Do not remove keyboard accessibility or theme support while polishing visuals.
- Do not overcomplicate the codebase with multiple files for a simple one-page app.
- Do not duplicate documentation when a concise instruction file is enough.

## Typical tasks
- UI polish and layout tuning
- interactive answer validation and feedback animation
- accessibility improvements and reduced-motion support
- results-state messaging and replay flow
- quick smoke-test verification
