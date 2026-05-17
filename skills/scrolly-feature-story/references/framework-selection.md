# Framework Selection

Use this reference before implementation. The delivery format should match the project's editorial complexity, publishing needs, team workflow, and maintenance expectations.

## Required Decision

Before creating files, state:

```text
Delivery tier:
Recommended framework:
Why:
Scroll engine:
Animation library:
Data source:
Publishing target:
Fallback strategy:
```

## Delivery Tiers

### single-html-preview

Use for:

- Fast concept previews.
- Internal review.
- Low-complexity stories.
- Situations where the user needs one portable file.

Strengths:

- Fast to generate.
- Easy to open locally.
- No install step.

Limits:

- Harder to maintain.
- Harder to scale modules.
- Less suitable for repeated media production.

Default stack:

- Semantic HTML.
- CSS custom properties.
- Vanilla JavaScript.
- `IntersectionObserver`.

### astro-static

Use for:

- Official media publishing.
- Static pages.
- Product manuals.
- Reports.
- SEO and performance-sensitive stories.
- Projects with structured content but limited app logic.

Strengths:

- Excellent static output.
- Component architecture.
- Easy data files.
- Good performance defaults.
- Simple deployment.

Limits:

- Client-side state needs islands or scripts.
- Very complex scrolly graphics may be easier in Svelte/React.

Default stack:

- Astro components.
- TypeScript data files.
- CSS custom properties.
- Vanilla JS or small islands.
- Optional Scrollama for complex sticky steps.

### svelte-editorial

Use for:

- Heavy scrollytelling components.
- Data-driven scroll states.
- Many linked panels/graphics.
- Teams comfortable with Svelte.

Strengths:

- Compact component state.
- Strong fit for scrolly components.
- Good for editorial interactives.

Limits:

- More framework commitment than Astro.
- Official static publishing may need more build conventions.

Default stack:

- Svelte / SvelteKit.
- Componentized `Scroller`, `Step`, `StickyGraphic`.
- Stores or props for active states.

### react-next-app

Use for:

- Existing React teams.
- App-like interactions.
- CMS/backend integration.
- User accounts, dashboards, or complex product flows.

Strengths:

- Large ecosystem.
- Strong integration patterns.
- Good for productized platforms.

Limits:

- Can be heavier than needed for editorial static pages.
- Requires discipline to avoid generic app UI.

Default stack:

- Next.js or Vite React.
- Component modules.
- GSAP only when needed.

### map-story

Use for:

- Geographic narratives.
- City/county/regional stories.
- Location steps.
- Route or layer storytelling.

Stack choices:

- SVG map in Astro for simple static geographic context.
- MapLibre for real map interaction.
- Svelte/React if map state and panels are complex.

### designer-graphic

Use for:

- Complex information graphics.
- Designer-led art direction.
- ai2html-like workflows.
- Figma/Illustrator-exported layouts.

Stack choices:

- Astro wrapper for publishing.
- Static responsive artboards.
- Scroll controller around graphic states.

## Scroll Engine Selection

Use:

- CSS sticky only: simple sticky composition.
- `IntersectionObserver`: reveal, active sections, simple step state.
- Scrollama: robust step enter/exit/progress behavior.
- GSAP ScrollTrigger: pinned timelines, scrubbed animation, choreographed transitions.
- MapLibre camera state: geographic stories.

Avoid:

- GSAP for basic fades.
- Scroll-triggered motion that hides content.
- Heavy libraries in one-off static pages without need.

## External Reference Mapping

Use public resources as selection evidence:

| Reference | What it teaches | Use when | Default action |
| --- | --- | --- | --- |
| Polygraph / The Pudding six-library comparison | How the same sticky scrolly pattern behaves across libraries | Choosing scroll engine | Prefer Scrollama or native IntersectionObserver |
| Scrollama | Modern lightweight step/progress state with IntersectionObserver | Sticky graphics, active steps, progress | Add dependency only when native observer becomes too brittle |
| Stitch Fix hello-scrollytelling | Minimal data/SVG scrolly structure | One central diagram or SVG | Rebuild as original module with lean JS |
| ONS / ABC Svelte scrolly | Componentized scrolly system | Many linked panels and visuals | Choose Svelte only when state complexity justifies it |
| React overlay templates | JSON-driven media panels over full-screen visuals | React teams, image-led campaigns | Use React/Next only when app context exists |
| MapLibre storymap | Map camera/layer storytelling | Place-based stories | Use static SVG first; upgrade to MapLibre for real geography |
| Needle 3D scrollytelling | Scroll-bound 3D scene states | Object-centered 3D narratives | Avoid unless 3D carries essential meaning |
| Vev/Shorthand/Foleon/Ceros/PandaSuite | Productized template/editor model | Designing skill UX and template taxonomy | Do not bundle platform templates |

## Library Age and Risk

Treat older scroll libraries as historical references unless the user specifically needs compatibility:

- ScrollMagic: mature but heavier and older; use GSAP ScrollTrigger for modern choreographed timelines instead.
- Waypoints / In-View: useful conceptually, but native IntersectionObserver covers most simple triggers.
- Graph-scroll / ScrollStory: useful for historical comparison, rarely a default for new projects.

Default engine ladder:

```text
CSS sticky
-> IntersectionObserver
-> Scrollama
-> GSAP ScrollTrigger
-> framework-specific state or MapLibre camera state
```

## Default Recommendation

For official media scrollytelling pages:

```text
Default: Astro static
Scroll: CSS sticky + IntersectionObserver
Upgrade to Scrollama: when step progress/offset handling becomes important
Upgrade to Svelte: when scrolly state is central across many components
Upgrade to GSAP: when animation choreography is the story
```
