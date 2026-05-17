# Scroll State Model

Use this reference when a page needs scroll-driven changes, sticky graphics, section progress, active navigation, or animated state transitions.

## State Types

### Section Visibility

Use for:

- Reveal effects.
- Active nav.
- Progress indicators.

Implementation:

- `IntersectionObserver`.
- CSS classes such as `is-visible` and `is-active`.

Fallback:

- Content visible by default.

### Step State

Use for:

- Sticky graphic changes.
- Diagram highlights.
- Product/system step narration.

State:

```text
activeStep
previousStep
direction
```

Implementation:

- `IntersectionObserver` for simple enter behavior.
- Scrollama for more robust offsets and progress.

Fallback:

- Show all steps and a static summary visual.

### Progress State

Use for:

- Chart scrub.
- Route reveal.
- Timeline fill.
- Long pinned sequences.

State:

```text
stepProgress: 0..1
sectionProgress: 0..1
```

Implementation:

- Scrollama progress callback.
- GSAP ScrollTrigger scrub when choreography is complex.

Fallback:

- Key states as static snapshots.

### Map Camera State

Use for:

- Chapter-driven map movement.
- Region highlight.
- Route steps.

State:

```text
locationId
center
zoom
pitch
bearing
visibleLayers
highlightedFeature
```

Implementation:

- MapLibre for real maps.
- SVG state for simplified static maps.

Fallback:

- Static map images paired with chapter text.

## Event Model

Core events:

```text
onEnter(step)
onExit(step)
onProgress(step, progress)
onResize()
onReducedMotionChange()
```

All events should be idempotent. Re-entering a step should not duplicate DOM nodes, restart inaccessible animations, or lose focus.

## CSS State Contract

Prefer predictable classes:

```text
.is-visible
.is-active
.is-before
.is-after
.is-pinned
.is-reduced-motion
```

Use data attributes for target mapping:

```html
<section data-section="products">
<article data-step="public-opinion">
<div data-visual-target="public-opinion">
```

## Reduced Motion

When reduced motion is requested:

- Disable parallax.
- Disable scrubbed timelines.
- Disable long pinning if it traps reading flow.
- Keep all content visible.
- Preserve active nav and basic controls.
- Replace transitions with immediate state changes.

## Mobile Rules

On mobile:

- Avoid long sticky sequences.
- Avoid requiring hover.
- Avoid tiny step targets.
- Prefer visual snapshots paired with steps.
- Reduce animation distance and duration.

## Debug Checklist

Check:

- Active nav updates correctly.
- Scrolling up and down both work.
- Resize recalculates sticky/step logic.
- No content remains hidden if JavaScript fails.
- Reduced motion state is tested.
- Mobile does not require desktop pinning behavior.

