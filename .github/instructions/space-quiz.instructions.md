---
applyTo: "**/*.html,**/*.js,**/*.md"
---

# Space Quiz development instructions

## Mission
Keep the project as a lightweight single-page quiz experience focused on clarity, polish, and reliability.

## Rules
- Prefer a single-file HTML/CSS/JS implementation unless a task explicitly demands more structure.
- Keep quiz logic deterministic and easy to reason about.
- Preserve the space-themed UI: centered card, soft gradients, crisp sans-serif typography, and a calm control-panel look.
- Respect `prefers-color-scheme` and `prefers-reduced-motion` in all visual changes.
- Maintain keyboard-first interactions: visible focus, semantic controls, and no mouse-only paths.
- All interactive elements should be reachable and operable via Tab, Space, and Enter.
- Ensure feedback is explicit for correct and incorrect states.

## Styling expectations
- Use CSS variables for theme tokens.
- Favor small targeted style changes over broad rewrites.
- Keep animations subtle and accessible.
- Do not introduce frameworks or build tooling for minor visual tweaks.

## Behavior expectations
- Maintain 10 questions, progress tracking, score tracking, result state, and replay flow.
- Keep answer validation deterministic and easy to test.
- Use accessible labels and aria feedback where useful.
- If score or state changes, ensure the UI updates immediately and clearly.

## Quality bar
- No console-only assumptions: work in-browser.
- Avoid hidden interactions or non-semantic controls.
- Keep the app responsive but compact and centered.
- Favor usability and clarity over decorative complexity.
