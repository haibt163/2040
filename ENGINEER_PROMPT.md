# Engineering Prompt — 2040 Story Landing Page

## Role

Act as the lead frontend engineer and digital art director for a premium long-form fiction landing page titled **2040**.

The page is inspired by the editorial restraint of the GPU World 2040 writing-contest site: clear hierarchy, direct premise, strong typography, and a reading experience that lets the prose carry the weight. Do **not** clone the reference site. Translate its restraint into an original, more cinematic visual system. The reference premise is a thought experiment about a future where frontier-level AI becomes broadly available; use only the general inspiration, not its copy, branding, or layout verbatim.

## Primary objective

Create one outstanding single-page landing page whose main job is to make a reader want to enter a long-form story.

The first content block is a temporary manuscript of roughly **4,000–5,000 words**. Treat it as a replaceable manuscript source. Do not add pagination, chapter pages, CMS infrastructure, forms, analytics, comments, or other product surfaces yet.

## Tech stack

Use:

- Next.js App Router
- TypeScript
- React
- Motion (`motion/react`) for pointer/scroll animation
- `next/font/google` for typography
- Plain CSS for the visual system

Do not add a component library or animation framework unless an explicit new requirement makes it necessary.

## Visual direction

Think: **Japanese editorial minimalism + near-future cinema + literary magazine + generative systems interface**.

The page should feel expensive without looking flashy.

### Palette

- Near-black ink: `#0a0b0d`
- Warm paper: `#ebe8df`
- Secondary paper: `#d6d2c8`
- Muted neutral text: around `#98948b`
- Hairline borders: low-opacity warm white
- One tiny electric accent such as acid-lime `#c7ff52`

Use the accent sparingly. It should feel like a status light, not a brand color covering the page.

Avoid generic purple/blue AI gradients, glassmorphism, over-rounded SaaS cards, and dense dashboard styling.

### Typography

Use a premium Japanese type family that is also highly legible in English Latin text.

Preferred pairing:

- **Noto Sans JP** for utility copy, navigation, metadata, labels, and interface details.
- **Noto Serif JP** for the literary title, large editorial statements, and body prose.

Use generous tracking for tiny labels and compact tracking for the giant `2040` numeral. The reading text must remain highly comfortable at desktop and mobile widths.

The Japanese microcopy should be sparse and purposeful. It is an atmospheric design language, not a translation exercise.

Suggested microcopy:

- `未来の記録`
- `長編フィクション`
- `未来は、まだ白紙。`

## Layout system

### 1. Fixed micro-navigation

A very small fixed top bar:

- left: `四〇` / `2040 / STORY`
- right: subtle location/time metadata
- uppercase utility typography
- pointer-events should not block the hero

Keep it visually quiet.

### 2. Hero

The hero should occupy approximately one viewport height.

Composition:

- huge `2040` as the visual anchor
- small manuscript label above it
- one-line hairline rule
- story title + one-sentence dek beneath
- a simple `READ THE STORY ↓` affordance
- page index such as `01 — 03`

Do not overload the hero with buttons or paragraphs.

### 3. Pointer parallax

Create an atmospheric, GPU-friendly mouse/pointer parallax field behind the typography.

Use Motion to respond to pointer movement with spring physics. Use multiple layers with different movement amplitudes so depth is visible without becoming obvious.

Suggested layers:

- faint technical grid
- two extremely soft blurred light fields
- two thin crosshair/registration marks
- optional tiny markers or glyphs

Do not use dozens of DOM nodes or particle engines.

The animation must:

- stay subtle
- never move essential text unexpectedly
- not cause horizontal overflow
- work without JavaScript when possible for the static visual baseline
- respect `prefers-reduced-motion: reduce`

### 4. Premise section

Switch to warm paper.

This is an editorial breathing space before the story.

Use:

- a tiny `01 / PREMISE` label
- one giant serif statement
- one short supporting paragraph

The section should feel like an exhibition wall label or the opening spread of a Japanese design annual.

### 5. Main story

Return to near-black.

Desktop:

- narrow metadata rail on the left
- generous story column on the right

The metadata rail may contain:

- `02 / STORY`
- reading time
- `~4,000–5,000 words`

Make the reading column about 680–760 px wide at desktop. Do not make the prose span the full screen.

Body prose should be serif, spacious, and calm. Paragraph rhythm matters more than decorative dividers.

A restrained drop-cap on the first paragraph is acceptable.

Use scroll-triggered paragraph reveals very gently. The page must still be completely readable if animation is disabled.

### 6. Closing note

Use the second warm-paper tone.

Include a large Japanese closing phrase such as:

`未来は、まだ白紙。`

Then a short note explaining that the manuscript is a living draft and that future revisions should preserve the page as a quiet frame around the writing.

### 7. Footer

Very small metadata footer:

- `2040 / STORY`
- year
- `BACK TO TOP ↑`

## Interaction details

Include:

- reading progress indicator at the top of the viewport
- smooth anchor scrolling where supported
- pointer parallax in the hero
- subtle in-view reveals for prose
- clear hover/focus states on interactive links

Do not use:

- scroll-jacking
- auto-playing audio
- cursor replacement effects
- magnetic buttons that make navigation harder
- giant particle fields
- heavy WebGL
- video backgrounds

## Responsive behavior

Mobile is a first-class design target.

At widths around 800px and below:

- simplify the fixed nav
- let the hero numeral dominate
- stack hero metadata and CTA
- collapse the two-column premise/story layouts to one column
- remove or greatly reduce sticky behavior
- preserve large readable body text and generous line-height

Test at approximately:

- 375px
- 430px
- 768px
- 1440px
- 1920px

## Accessibility

Required:

- semantic `main`, `header`, `section`, `article`, `footer`
- one clear H1
- meaningful H2 for the story
- descriptive link labels
- keyboard focus visibility
- no information conveyed only by motion
- sufficient contrast
- reduced-motion fallback
- no interactive element that requires hover

## Content architecture

Keep manuscript copy in:

`src/content/story.ts`

The page should import and render the story from one content object. This is important because the final story will be rewritten later.

Do not scatter the manuscript across multiple components.

## Engineering quality

Before implementation:

1. Read `AGENTS.md`.
2. Read `.omp/AGENTS.md`.
3. Read `RULES.md`.
4. Inspect the current source tree.
5. State the existing page structure and data flow before making changes.

After implementation:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Start `npm run dev`.
4. Verify `http://localhost:3000` in a browser.
5. Check for console/runtime errors.
6. Check responsive behavior.
7. Report any remaining warnings honestly.

Do not commit Git changes unless the human explicitly asks.

## Final quality bar

The finished result should feel closer to an independent Japanese literary publication, experimental art-direction studio, or premium future-facing magazine than to a startup marketing page.

The key test is simple:

**When the reader starts scrolling, the interface should disappear and the writing should take over.**
