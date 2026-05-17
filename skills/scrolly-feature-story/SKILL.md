---
name: scrolly-feature-story
description: Create distinctive, production-grade scrollytelling web pages from Markdown, product manuals, feature stories, data narratives, campaign briefs, or structured content. Use when Codex needs to turn long-form Chinese content, service catalogs, case libraries, reports, or event copy into an immersive single-page scrolling story with strong editorial design, responsive layout, reduced-motion support, and accessible frontend implementation.
---

# Scrolly Feature Story

Use this skill to transform complex content into a polished scrollytelling webpage. The output should feel like a designed editorial/product feature, not a generic landing page, Markdown skin, or animation demo.

## Core Workflow

1. Parse the input content into a narrative outline.
2. Choose a page-level template from `references/page-template-library.md`.
3. Map every section to module templates from `references/section-module-library.md`.
4. Choose a visual style from `references/visual-style-library.md`.
5. Choose delivery tier, frontend framework, and scroll engine with `references/framework-selection.md`.
6. Define a visual asset strategy before layout work begins.
7. Generate accessible, responsive, production-grade HTML/CSS/JS or a framework project.
8. Verify design quality, reduced-motion behavior, mobile readability, and console health.

## 2.0 Decision Gate

Before creating markup or components for any substantial page, state this decision brief:

```text
Primary page template:
Secondary page template:
Section module map:
Primary visual style:
Secondary visual style:
Delivery tier:
Framework:
Scroll engine:
Animation library:
Asset strategy:
External references absorbed:
External references excluded:
Mobile recomposition:
Reduced-motion strategy:
```

Do not skip this gate for official media projects, product manuals, data stories, city stories, annual reports, or campaign features.

## Required Narrative Model

Every page should have a clear progression:

```text
Opening -> Problem / Context -> Positioning -> Evidence / Detail -> Cases / Packages -> Close / CTA
```

Every section must answer:

- What is the one core message?
- Why does this belong in the sequence?
- What visual structure helps the reader understand it?
- What happens on mobile?
- What happens when reduced motion is requested?

## Template System

Use a two-layer template system:

- **Page templates** define the full narrative shape: story arc, section order, visual rhythm, and framework fit.
- **Section modules** define reusable functional blocks: sticky scrolly, product dossier, data dossier, map story, case wall, timeline, metric board, quote spread, and CTA close.

The page template acts as the director. Section modules act as scenes. Do not let independently attractive modules break the page's overall editorial logic.

## Page Template Gate

Pick a page template from `references/page-template-library.md` before writing markup:

- `media-product-manual`: media organization product/service manuals.
- `city-service-atlas`: city, county, public-service, and regional stories.
- `data-investigation`: data journalism, monitoring, reports, and evidence-heavy narratives.
- `annual-report`: yearly reports, results, and institutional summaries.
- `event-live-recap`: event, broadcast, campaign, and live-program recaps.
- `case-dossier`: case libraries and project portfolios.
- `policy-explainer`: policy and public-issue explainers.

For each project, state:

- Why this page template fits.
- Which secondary template, if any, influences the page.
- Which section modules will be used.
- Which motifs are forbidden for this project.
- What real or placeholder visual assets the page needs.

## Module Mapping Gate

Map sections to modules from `references/section-module-library.md` before implementation.

For each section, state:

- Section message.
- Module choice.
- Why the module fits.
- Desktop layout.
- Mobile layout.
- Motion behavior.
- No-JavaScript fallback.

If more than two consecutive sections use the same module, revise the rhythm unless the source content truly requires repetition.

## Visual Style Gate

Choose one primary visual style from `references/visual-style-library.md` and at most one secondary style.

Common styles:

- `newsroom-bureau`
- `civic-atlas`
- `data-dossier`
- `magazine-feature`
- `event-stage`
- `institutional-report`

The visual style must affect typography, spacing, asset treatment, navigation, cards, case presentation, data treatment, and closing gesture. If only colors changed, the style was not applied.

## External Resource Translation

Use external resources as references, not as copied templates.

Commercial or no-code platforms such as Shorthand, Vev, Foleon, Ceros, and PandaSuite:

- Absorb template taxonomy, module taxonomy, editor workflow, brand controls, preview behavior, and publishing expectations.
- Do not download, bundle, copy, or imitate proprietary templates, CSS, components, or visual themes.

Open-source scrollytelling projects:

- Use The Pudding / Polygraph examples to benchmark scroll-engine choices.
- Use Scrollama when sticky/progress step behavior needs more reliability than native observers.
- Use ONS/ABC-style Svelte patterns when a project needs many linked scrolly states.
- Use MapLibre patterns only when geography is meaningful.
- Use 3D templates only when the story is truly object-centered.

Translate every external reference through this path:

```text
External resource -> Abstract pattern -> Skill reference -> Original implementation
```

Respect open-source licenses if code is reused. Prefer original implementations guided by the pattern.

## Framework and Engine Gate

Choose the smallest stack that can deliver the story.

Default ladder:

```text
single HTML preview
-> Astro static production site
-> Svelte editorial story
-> React/Next app-like story
-> MapLibre map story
-> GSAP/3D advanced motion
```

Default for official media publishing:

```text
Astro + semantic components + CSS custom properties + CSS sticky + IntersectionObserver
```

Upgrade only when justified:

- Scrollama: complex sticky steps, progress, custom offsets, or mobile edge cases.
- Svelte: many linked scroll states or data-driven graphics.
- React/Next: existing React team, app-like integration, or backend/CMS needs.
- MapLibre: real geographic layers, camera movement, points, routes, or regions.
- GSAP ScrollTrigger: choreographed pinned timelines or scrubbed motion.
- 3D: object-centered stories where 3D explains structure.

## Hard Design Constraints

Avoid:

- Purple-blue gradient tech wallpaper.
- Glassmorphism card piles.
- Repeated three-column icon cards.
- Hero + features + pricing as a generic structure.
- Decorative particles, glows, or 3D effects with no narrative purpose.
- Huge metric blocks that do not carry real information.
- Centering every section.
- Putting every content unit inside a card.
- Nesting cards inside cards.
- Pure black or pure white as large-area surfaces.
- Placeholder content, lorem ipsum, fake data, or invented cases.
- Decorative placeholders that do not indicate what real asset should replace them.
- Applying an existing template unchanged when the content demands a different rhythm.

Require:

- CJK-first font stack.
- A clear typography hierarchy for display, body, and meta text.
- A restrained, intentional color system.
- A template-specific composition system, not just generic cards.
- Stable layout dimensions that avoid cumulative layout shift.
- Visible focus states for interactive elements.
- `prefers-reduced-motion` support.
- Mobile layouts that are re-composed, not merely shrunk.
- Real section rhythm: not every section gets identical spacing.
- Placeholder images with clear subject intent, dimensions, and replacement notes.

## Implementation Defaults

Use semantic HTML, CSS custom properties, and small vanilla JavaScript by default.

Prefer:

- CSS `position: sticky` for classic sticky-graphic scrollytelling.
- `IntersectionObserver` for reveal and active-step behavior.
- CSS transitions and transforms for simple motion.
- GSAP only for complex pinned timelines, scrubbed sequences, or choreographed transitions.
- `gsap.matchMedia()` if GSAP responsive animation contexts are needed.

Always support reduced motion:

- Disable parallax, long pins, scrubbed timelines, 3D transforms, and scroll-velocity effects.
- Keep all content visible and readable.
- Preserve anchor navigation and basic interactions.

## Reference Loading

Load only the references needed for the request:

- `references/page-template-library.md`: Use when selecting the overall story/page template.
- `references/section-module-library.md`: Use when mapping sections to reusable scrollytelling modules.
- `references/module-assets.md`: Use when copying bundled reusable modules from `assets/modules/`.
- `references/media-scrollytelling-template-library.md`: Use when adapting ideas from media-grade scrollytelling starters, component systems, or engines.
- `references/editorial-production-workflow.md`: Use for official media production, editorial handoff, structured content, and publishing workflow.
- `references/astro-editorial-starter.md`: Use when generating an official Astro static scrollytelling project from the bundled starter.
- `references/framework-selection.md`: Use before choosing single HTML, Astro, Svelte, React/Next, MapLibre, or GSAP.
- `references/scroll-state-model.md`: Use when implementing sticky steps, active navigation, scroll progress, or scroll-driven visual states.
- `references/map-story-patterns.md`: Use for city, county, regional, route, or place-based stories.
- `references/designer-graphic-workflow.md`: Use when the project needs designed graphics, maps, diagrams, ai2html-like assets, or stronger art direction.
- `references/visual-style-library.md`: Use before defining the project's visual language and design tokens.
- `references/template-selection.md`: Use before selecting a design/template direction.
- `references/scrollytelling-patterns.md`: Use when selecting section layout patterns.
- `references/design-quality-rules.md`: Use before designing any visual system.
- `references/visual-asset-strategy.md`: Use when a page needs images, diagrams, maps, screenshots, or placeholders.
- `references/animation-rules.md`: Use when implementing motion, GSAP, or responsive animation.
- `references/accessibility-performance-checklist.md`: Use before final delivery.
- `references/content-schema.md`: Use when building an intermediate story model.

## Output Expectations

Default output is a standalone webpage:

```text
index.html
```

For larger projects, a multi-file output is acceptable:

```text
index.html
style.css
script.js
assets/
```

The final page must:

- Preserve the user's real content and key details.
- Have a visible story progression.
- Include responsive desktop and mobile layouts.
- Include reduced-motion behavior.
- Avoid console errors.
- Avoid TODO placeholders.
- Avoid missing asset paths.
- Include meaningful `alt` text.
- Remain readable if JavaScript fails.

## Final Quality Check

Before finishing, check:

- Does the page have a specific visual point of view?
- Can the design be named as a template family, or is it just generic layout?
- Are placeholders communicating future art direction, or are they decorative filler?
- Would it still make sense without animation?
- Does each animation clarify a relationship, reveal, contrast, or transition?
- Does mobile feel designed, not crushed?
- Can keyboard users reach every interactive control?
- Are first-screen assets handled deliberately?
- Would someone immediately recognize it as generic AI output? If yes, revise.
