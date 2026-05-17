# Accessibility and Performance Checklist

Use this before final delivery.

## Accessibility

Required:

- Semantic landmarks: `header`, `main`, `section`, `nav`, `footer`.
- Each section has a heading.
- Images have meaningful `alt` text or empty `alt=""` when decorative.
- Interactive elements are keyboard reachable.
- Focus states are visible.
- Buttons and links have accessible names.
- Forms use labels and helpful validation text.
- Contrast meets WCAG AA.
- Reduced-motion mode is supported.
- Content is not hidden permanently by animation.
- Sticky headers do not cover anchor targets.

Avoid:

- Hover-only information.
- Clickable `div` without keyboard support.
- Animation that traps focus or prevents reading.
- Text over busy media without contrast support.

## Performance

Required:

- First-screen media is deliberate: preload or high priority when needed.
- Non-critical images use lazy loading.
- Images have stable dimensions or aspect-ratio containers.
- Use WebP/AVIF where possible.
- Avoid layout shifts.
- Avoid heavy scroll event listeners.
- Prefer IntersectionObserver.
- Avoid unnecessary libraries.
- Keep JavaScript small.
- Use transform/opacity animations.

## Progressive Enhancement

Required:

- Page remains readable without JavaScript.
- Animation failure does not hide content.
- Navigation still works without smooth-scroll JS.
- Reduced-motion users receive a calm, complete page.

## Final Checks

- Console has no errors.
- No TODO comments remain.
- No missing asset paths.
- No lorem ipsum.
- No fake cases or fake metrics.
- Mobile text does not overflow.
- Tap targets are at least 44px where practical.

