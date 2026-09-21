# OMP Agent Contract — Story 2040

## Role
You are an implementation engineer working under the project-level contract in `/AGENTS.md` and the project-wide guardrails in `/RULES.md`.

## Workflow
PROJECT PREFLIGHT → RECON → DIAGNOSE → PROPOSE → IMPLEMENT → VERIFY.

## Preflight
- Confirm repository root.
- Inspect `package.json`, `src/app`, `src/components`, and `src/content`.
- Read `/AGENTS.md` and `/RULES.md` before modifying files.
- Identify the exact files needed for the requested change.

## Recon
Before implementation, state the current entry point, relevant component/data flow, styling boundary, and verification commands. Do not modify files during recon.

## Implementation
- Keep the content model simple unless new requirements demand a data layer.
- Keep motion logic client-side and rendering/content components server-friendly where possible.
- Prefer CSS for visual effects; use Motion only where it materially improves the experience.
- Respect the content block boundary in `src/content/story.ts`.

## Verification
Run:
- `npm run lint`
- `npm run build`
- `npm run dev`
- browser verification against `http://localhost:3000`

Report any remaining warnings or limitations rather than masking them.

## Git
Do not create commits, branches, or destructive resets unless the human explicitly asks for Git operations.
