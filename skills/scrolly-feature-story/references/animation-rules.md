# Animation Rules

Motion must support comprehension. Use fewer, more meaningful animations.

## Motion Levels

### Level 1: Basic Reveal

Use for normal text and cards.

- Opacity.
- Small `translateY`.
- Short stagger.
- No scrub.

### Level 2: Narrative Scroll

Use when scroll position should reveal structure.

- Sticky graphic.
- Step activation.
- Chart annotation.
- Section progress.
- Content wipe.

### Level 3: Advanced Transformation

Use only when the transformation is the story.

- Grid reform.
- Object assembly.
- Chart morph.
- Dynamic split screen.
- Text as landscape.

## Technology Selection

Prefer:

- CSS `position: sticky` for pinned visuals.
- `IntersectionObserver` for reveal, active states, and progress markers.
- CSS transitions for simple state changes.
- CSS scroll-driven animations only as progressive enhancement.
- GSAP for complex pinned timelines, scrubbed choreography, or multi-element transformations.

If using GSAP:

- Use `gsap.matchMedia()` for responsive contexts.
- Register only needed plugins.
- Kill or scope animations cleanly.
- Avoid leaving markers enabled in final output.

## Properties

Animate:

- `transform`
- `opacity`
- CSS variables used by transform/opacity/filter sparingly

Avoid animating:

- `width`
- `height`
- `top`
- `left`
- `margin`
- `padding`

## Default Timing

```text
duration: 480ms - 900ms
easing: cubic-bezier(.22, 1, .36, 1) or power3.out
stagger: 60ms - 120ms
distance: 16px - 48px
```

Avoid bounce and elastic easing unless the brand is explicitly playful.

## Reduced Motion

Always implement:

```js
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

When reduced motion is true:

- Disable parallax.
- Disable scrubbed timelines.
- Disable long pinning.
- Disable 3D transforms.
- Avoid scroll velocity effects.
- Render all content normally.

CSS fallback:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Mobile Motion

On mobile:

- Prefer simple reveals.
- Avoid long sticky/pin sections.
- Avoid large parallax distances.
- Avoid scroll hijacking.
- Keep content readable in natural order.

