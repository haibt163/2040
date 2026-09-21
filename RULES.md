# RULES.md — Story 2040

1. The reader comes before the effect. Motion must support reading, orientation, or atmosphere.
2. The manuscript is the hero asset. Never let decorative UI compete with the story.
3. Keep the visual language minimal: near-black, warm paper, restrained rules, sparse technical markers, generous whitespace.
4. Use high-quality Japanese typefaces with excellent Latin glyphs. Prefer `Noto Sans JP` for utility/body UI and `Noto Serif JP` for literary emphasis.
5. Preserve responsive behavior from narrow phones through large desktop displays.
6. Respect `prefers-reduced-motion` and provide a usable static experience.
7. Avoid gradients that look like generic SaaS marketing. Atmospheric light is acceptable when subtle.
8. Avoid excessive rounded cards, glassmorphism, noisy shadows, and template-like dashboard patterns.
9. Keep the hero animation pointer-driven but gentle; do not make essential information dependent on hover.
10. Keep external assets optional. The first version should work with CSS-generated visuals alone.
11. Accessibility is non-negotiable: semantic HTML, labels for links, focus-visible states, readable contrast, and no motion-only meaning.
12. Do not alter the story text unless the task explicitly requests manuscript changes.
13. Do not add analytics, tracking, forms, or third-party scripts without explicit approval.
14. Dependencies must remain lean and justified.
15. Validate with lint, production build, and a browser smoke test before declaring success.
