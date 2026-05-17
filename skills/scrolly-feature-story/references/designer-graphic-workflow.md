# Designer Graphic Workflow

Use this reference when a project needs stronger art direction than generated layout alone can provide, especially for media-grade visual stories, complex diagrams, maps, and investigative features.

## When to Use Designer Graphics

Use this workflow when:

- A section needs a distinctive editorial visual.
- The story depends on a complex map, chart, or diagram.
- Placeholder visuals look too generic.
- The team has a designer or brand assets.
- The page needs a signature opener or key spread.

Do not use it for:

- Simple cards.
- Ordinary text sections.
- Basic icons.
- Effects that could be clearer in HTML/CSS.

## Source Tools

Possible sources:

- Figma.
- Illustrator.
- Photoshop.
- ai2html-style exported HTML.
- SVG from design tools.
- Raster images exported per breakpoint.

## Recommended Asset Model

For each designed graphic, define:

```text
Graphic name:
Purpose:
Source file:
Desktop asset:
Mobile asset:
Alt text:
Caption:
Interactive states:
Replacement notes:
```

## Integration Patterns

### Static Hero Artwork

Use for:

- Strong first screen.
- Editorial opener.
- Brand story signal.

Implementation:

- Responsive image or SVG.
- HTML text remains real text when possible.
- Ensure contrast and mobile cropping.

### Graphic Spread

Use for:

- Complex explainer.
- System diagram.
- Illustrated map.

Implementation:

- Designed image/SVG as base.
- HTML annotations layered if needed.
- Provide mobile artboard.

### Scroll-Controlled Graphic

Use for:

- Multi-state diagram.
- Annotated chart.
- Map or product system build-up.

Implementation:

- Export graphic layers or states.
- Use scroll state to activate layers.
- Keep a static fallback.

### ai2html-like Responsive Graphic

Use for:

- Newsroom-style graphics with precise type and layout.
- Designer-controlled typography.

Implementation:

- Multiple breakpoint exports.
- Wrapped inside a semantic section.
- Captions and source notes in HTML.

## Rules

Require:

- Real HTML headings and body text where possible.
- Meaningful alt text.
- Captions and source notes for data graphics.
- Mobile-specific artboards when desktop graphics cannot shrink.
- File sizes controlled.

Avoid:

- Burying all important text inside an image.
- Using a giant raster image for the whole page.
- Unlabeled decorative diagrams.
- Exporting tiny text that cannot be read on mobile.

## Placeholder Guidance

If final graphics are not available, create placeholders that state:

- Intended subject.
- Intended composition.
- Required aspect ratio.
- What the designer should replace.

Example:

```text
Placeholder: Wenzhou county service atlas
Composition: city outline with county nodes and service coverage labels
Aspect ratio: 16:10 desktop, 4:5 mobile
Replacement: final designed SVG map or approved local map artwork
```

