# AGENTS.md — Story 2040 

## Mission
Build and maintain a premium long-form story landing page for a 2040 speculative-fiction project. The page is the visual frame around the writing; the writing remains the primary product.

## Stack
- Next.js App Router
- TypeScript
- React
- Motion (`motion/react`)
- `next/font` for typography
- Plain CSS in `src/app/globals.css`

## Working rules
1. Preserve the single-page editorial reading experience unless explicitly asked to add routes.
2. Treat `src/content/story.ts` as the content source of truth for the temporary manuscript block.
3. Do not introduce a UI component library, heavy animation framework, or unnecessary dependency without a clear reason.
4. Maintain excellent keyboard navigation, visible focus states, semantic headings, and reduced-motion support.
5. Prefer subtle, high-frame-rate effects. No distracting particle storms, autoplay video, or scroll-jacking.
6. Keep the visual system premium, Japanese-minimalist, restrained, cinematic, and highly legible.
7. Before changing architecture, inspect the current implementation and preserve working behavior.
8. Run `npm run lint` and `npm run build` before considering an implementation complete.
9. When a dev server is started, use browser verification and check for console/runtime errors.
10. Do not rewrite the manuscript for stylistic reasons unless the task explicitly concerns the story copy.
11. Contributions are welcome: please fork the repository, create a sub-branch, and submit your revisions to 2040.md via pull request.
