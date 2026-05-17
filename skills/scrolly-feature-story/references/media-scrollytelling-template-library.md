# Media Scrollytelling Template Library

Use this reference when borrowing ideas from public scrollytelling projects, open-source starters, and media production systems. This file is about what to absorb, not what to copy.

## Legal and Design Boundary

Do:

- Study public structure, workflow, and interaction patterns.
- Rebuild original implementations using the project's own design system.
- Cite or name third-party projects in internal notes when helpful.
- Respect open-source licenses if code is actually reused.

Do not:

- Download SaaS templates from Shorthand, Vev, or similar platforms and bundle them as skill assets.
- Copy proprietary visual styles, CSS, component code, or sample assets.
- Treat third-party examples as a theme pack.

## Reference Families

### No-code / low-code storytelling platforms

Examples:

- Shorthand.
- Vev.
- Foleon.
- Ceros.
- PandaSuite.

Absorb:

- Two-layer template system: full-page templates plus reusable section modules.
- Visual editor mental model: choose story type, then assemble modules.
- Publishing workflow: preview, responsive checks, brand settings, export/embed.
- Advanced interaction categories: horizontal scroll, pinned sections, overlays, rich media, interactive hotspots.
- Enterprise content types: digital reports, white papers, annual reports, internal magazines, brand stories.

Use in this skill as:

- Product design inspiration.
- Template taxonomy.
- Module taxonomy.
- Quality bar for responsive preview and brand controls.

Do not use as:

- Downloaded source templates.
- Bundled CSS/JS/components.
- Copied visual themes.
- A dependency for final publishing unless the user explicitly chooses that platform.

Best application:

```text
Turn platform observations into original page templates, module definitions, and design gates.
```

### The Pudding-style editorial starter

Absorb:

- Editorial production workflow.
- Content/data/assets separation.
- Lightweight CMS thinking, often with Docs/Sheets-like sources.
- Clear build and preview process.
- Story-specific components with shared publishing conventions.

Use in this skill as:

- `editorial-production-workflow.md`
- `assets/starters/astro-editorial/`
- `assets/starters/svelte-editorial/`

Best for:

- Media teams producing many stories.
- Projects where editorial and frontend need a repeatable handoff.

Local application:

- Use as the reference model for `astro-editorial` and `svelte-editorial` starters.
- Separate story data, section data, assets, and reusable components.
- Build examples that can be previewed locally and published statically.

### Polygraph / The Pudding six-library comparison

Absorb:

- Same scrollytelling pattern implemented with multiple libraries.
- Practical technology comparison, not visual template copying.
- Standard sticky graphic + step text baseline.
- The difference between simple trigger, progress, and full story frameworks.

Use in this skill as:

- Framework and scroll-engine selection benchmark.
- A diagnostic reference when deciding between `IntersectionObserver`, Scrollama, GSAP, or framework-native state.
- A starter test case for the `sticky-scrolly` module.

Best for:

- Teaching the skill how to choose the smallest reliable scroll engine.
- Building a local "engine comparison" example later.

Do not:

- Ship all six libraries in generated projects.
- Keep deprecated libraries as defaults.
- Copy the demo page as a final template.

Default conclusion:

```text
Use Scrollama or IntersectionObserver for most media scrollytelling.
Use GSAP ScrollTrigger only when timeline choreography is the story.
Treat older libraries as historical/diagnostic references.
```

### Stitch Fix hello-scrollytelling pattern

Absorb:

- Bare-bones scrollytelling structure.
- SVG/data-visualization-friendly architecture.
- Minimal code surface for custom visuals.

Use in this skill as:

- Reference for `data-dossier`, `sticky-scrolly`, and `process-flow`.
- A model for lean demos that are easier to understand than full frameworks.

Best for:

- Data stories with one central SVG/diagram.
- Explaining capability matrices, workflows, and chart annotations.

Do not:

- Use its visual style as a media template.
- Treat it as a complete editorial production workflow.

### ONS / ABC-style Svelte scrolly components

Absorb:

- Scroller / Step / Panel / StickyGraphic component model.
- Section-level composition.
- Rich media blocks.
- Scroll state as component props or store state.

Use in this skill as:

- `section-module-library.md`
- `scroll-state-model.md`
- Svelte starter guidance.

Best for:

- Complex story pages with many scroll states.
- Teams comfortable with component-driven frontend work.

Local application:

- Create a future `svelte-editorial` starter only when the project needs many linked scrolly states.
- Translate component concepts into framework-neutral module contracts first.
- Keep Astro as the default official publishing stack unless Svelte's state model is justified.

### Scrollama-style scroll engine

Absorb:

- Enter / exit / progress callbacks.
- Offset selection.
- Resize recalculation.
- Sticky graphic plus step text.
- Mobile fallback patterns.

Use in this skill as:

- Scroll engine selection rules.
- A reference model for implementing `sticky-scrolly`.

Best for:

- Classic scrollytelling.
- Data or diagram step highlights.

Local application:

- Default advanced scroll engine for sticky graphics.
- Use with CSS `position: sticky`, not old fixed-position hacks.
- Require mobile offset testing and reduced-motion fallback.

### MapLibre storymap pattern

Absorb:

- Chapter-driven map cameras.
- Location steps.
- Layer visibility and region highlight.
- Route and point narrative.

Use in this skill as:

- `map-story-patterns.md`
- `assets/modules/map-story/`

Best for:

- Local media.
- Urban governance.
- Cultural tourism.
- Disaster, environment, transit, or regional service stories.

Local application:

- Use for `city-service-atlas`, `map-story`, and local media coverage maps.
- Start with static SVG maps for product manuals.
- Upgrade to MapLibre only when real geography, zoom, layers, or routes matter.

### ai2html and designer graphic workflow

Absorb:

- Designer-led information graphics.
- Illustrator/Figma as source of complex visual layouts.
- Frontend as responsive wrapper and scroll controller.
- Multiple artboards for breakpoints.

Use in this skill as:

- `designer-graphic-workflow.md`
- `graphic-spread` module guidance.

Best for:

- High-design investigative features.
- Complex explanatory diagrams.
- Stories where AI-generated layout is not enough.

Local application:

- Use when design quality depends on custom art direction.
- Define placeholders that ask for final designer graphics rather than pretending generic blocks are finished.
- Keep real text in HTML when possible.

### React overlay scrollytelling templates

Absorb:

- JSON/content-driven story configuration.
- Full-screen media with floating or translucent text panels.
- Simple image/video state changes tied to scroll steps.

Use in this skill as:

- Reference for app-like React/Next implementations.
- A module pattern for `media-chapter` and overlay scrolly.

Best for:

- Image-led features.
- Portfolio/campaign stories.
- Teams already using React.

Avoid:

- Defaulting to overlay text on every page.
- Low-contrast text boxes over busy imagery.

### GSAP / ScrollTrigger pattern

Absorb:

- Timeline-based choreography.
- Pinning and scrubbed animation.
- MatchMedia responsive animation contexts.

Use in this skill as:

- Optional advanced motion path in `animation-rules.md`.
- Framework/engine selection in `framework-selection.md`.

Best for:

- Highly directed visual storytelling.
- Complex motion where simple observers are insufficient.

### 3D scroll templates

Absorb:

- Scroll-bound camera or model state.
- Product disassembly / assembly storytelling.
- Scene progress mapped to narrative steps.

Use in this skill as:

- Optional advanced branch for object-centered stories.
- Inspiration for future `3d-product-story` module.

Best for:

- Physical products.
- Architecture or exhibition stories.
- Technical objects where 3D clarifies structure.

Avoid:

- Using 3D for media product manuals unless it has real explanatory value.
- Heavy 3D assets that harm performance or mobile readability.

Default for this project:

```text
Do not use 3D for Wenzhou News product manual.
Use editorial dossiers, maps, diagrams, and case evidence instead.
```

### Inspiration galleries

Examples:

- The Pudding.
- Awwwards scrollytelling examples.

Absorb:

- Pattern recognition.
- Section rhythm.
- Visual quality bar.
- Interaction ideas.

Use in this skill as:

- Moodboard and critique source.
- Not as downloadable templates.

Best practice:

```text
Describe the observed pattern in words, then rebuild it with original layout, original assets, and the project's own design system.
```

## How to Translate External Inspiration

Use this conversion:

```text
External inspiration -> Abstract pattern -> Skill reference -> Original module implementation
```

Example:

```text
Shorthand chapter template
-> full-screen media chapter with short editorial text
-> section-module-library: immersive-hero / media-chapter
-> original Astro component and original CSS tokens
```

## Evaluation Questions

Before absorbing an external pattern, ask:

- What editorial problem does this pattern solve?
- Is the value in workflow, component structure, interaction, or visual style?
- Can we rebuild it with original code and original design?
- Does it fit media organizations in China and Chinese long-form content?
- Does it improve production reliability, or only add spectacle?

If the answer is mostly visual imitation, do not absorb it.

## Application Matrix

| Resource type | Apply as | Put in skill | Put in generated project |
| --- | --- | --- | --- |
| Vev / Shorthand / Foleon / Ceros / PandaSuite | Product and template-system reference | References only | No, unless user explicitly uses the platform |
| The Pudding starter | Production workflow and starter architecture | References + future starter | Yes, as original implementation |
| Polygraph six-library demo | Scroll-engine benchmark | References | Only simplified original pattern |
| Stitch Fix hello-scrollytelling | Minimal SVG/data scrolly pattern | References + future module | Yes, if license permits and code is rewritten or attributed |
| ONS / ABC Svelte components | Component model | References + future Svelte starter | Yes, for Svelte projects with license review |
| Scrollama | Scroll engine | Framework/scroll rules | Yes, when advanced sticky/progress is needed |
| MapLibre storymap | Map narrative model | Map-story reference/module | Yes, when geography matters |
| ai2html workflow | Designer handoff | Designer workflow reference | Yes, as project-specific exported graphics |
| React overlay templates | React implementation reference | Framework/module reference | Yes, only for React projects |
| Needle 3D template | 3D story reference | Advanced reference | Rarely, only object-centered stories |

## Immediate Use In This Skill

For version 2.0, prioritize:

1. Convert platform observations into page/module template taxonomy.
2. Use Scrollama and the Polygraph comparison to refine `scroll-state-model.md` and `framework-selection.md`.
3. Build `assets/modules/sticky-scrolly/` from an original IntersectionObserver/Scrollama-compatible contract.
4. Build `assets/modules/product-dossier/`, `case-clipping-wall/`, and `data-dossier/` for media product manuals.
5. Keep Svelte, React overlay, MapLibre, and 3D as optional branches selected by project need.
