# GitHub Copilot customizations for Space Quiz

This folder contains workspace-specific guidance for working on the quiz app.

## Included customizations
- `copilot-instructions.md` — project-wide guidance for the repo
- `instructions/space-quiz.instructions.md` — scoped rules for HTML/CSS/JS changes
- `prompts/quiz-review.prompt.md` — quality review prompt
- `prompts/quiz-polish.prompt.md` — design polish prompt
- `prompts/quiz-smoke-test.prompt.md` — browser-check prompt
- `agents/quiz-qa.agent.md` — QA-focused agent
- `agents/quiz-designer.agent.md` — design-focused agent

## How to use them
Open Copilot Chat and invoke one of the prompts or agents above for narrow, repeatable tasks.

## Testing
Use the project smoke test command when validating UI changes:

`npx playwright test smoke.spec.js --browser=firefox --workers=1 --reporter=line`
