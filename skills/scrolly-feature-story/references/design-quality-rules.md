# Design Quality Rules

Use these rules before designing the page. The goal is to create a specific, credible visual system, not a generic AI webpage.

## Context First

Identify:

- Target audience.
- Communication goal.
- Brand tone.
- Primary visual direction.
- Template family.
- Visual asset strategy.
- Content density.
- Publishing context.

If the user gives no context, infer conservatively from the content and state the assumed direction in the implementation notes.

## Design Gate

Before producing code, write a concise design brief:

```text
Audience:
Goal:
Template family:
Primary visual direction:
Tone:
Visual metaphor:
Asset plan:
Layout motifs:
Forbidden motifs:
```

If this brief sounds generic, revise it before implementation.

## Visual Directions

### Editorial

Use for news-style features, narrative reports, city stories, and longform reading.

Traits:

- Strong typographic hierarchy.
- Generous whitespace.
- Pull quotes and captions.
- Image/text rhythm.
- Minimal chrome.

### Institutional

Use for public sector, city media, state-owned enterprises, and civic services.

Traits:

- Calm authority.
- Stable grid.
- Muted but not dull palette.
- Clear hierarchy.
- Minimal decorative effects.

### Data Story

Use for metrics, monitoring, dashboards, comparisons, timelines, and reports.

Traits:

- Annotated charts.
- Focused highlights.
- Structured labels.
- Low-noise backgrounds.

### Product Manual

Use for service catalogs, capability systems, and sales enablement.

Traits:

- Scannable sections.
- Clear grouping.
- Product cards only where helpful.
- Strong overview/detail relationship.

Risk:

- Can easily become a pile of repeated cards.
- Needs a stronger template family such as Newsroom Product Bureau, Service Field Guide, or Data Dossier.

### Campaign Story

Use for activities, competitions, cultural events, and calls to action.

Traits:

- More vivid opening.
- Faster rhythm.
- Strong CTA.
- Carefully constrained energy.

## Typography

Require:

- CJK-first font stack.
- Distinct display, body, and metadata roles.
- Fluid but bounded type sizes.
- Line lengths appropriate to reading.
- A title treatment that belongs to the selected template family.

Avoid:

- Inter/Roboto/system-only default as the only design decision.
- Monospace as a lazy technology signal.
- Overlarge headings inside cards or compact panels.
- Negative letter spacing.

For Chinese scrollytelling:

- Use deliberate line breaks for hero headlines.
- Avoid letting long Chinese phrases overflow on mobile.
- Prefer strong weight contrast over decorative fonts when brand fonts are unavailable.
- Use metadata rails, section numbers, and captions to create editorial texture.

## Color

Require:

- Define background, surface, text, muted text, accent, border.
- Keep contrast readable.
- Tint neutrals toward the brand direction.
- Use color to separate narrative layers, not to decorate every card.

Avoid:

- Pure black or pure white as broad surfaces.
- Purple-blue gradients as default technology style.
- Gradient text for importance.
- Gray text on saturated backgrounds.
- One-note palettes where everything is one hue family.

For institutional/media work:

- Prefer restrained civic colors with one editorial accent.
- Avoid “tech blue” unless there is a specific data or system reason.
- Make deep sections rare and purposeful.

## Space and Layout

Require:

- Use varied section rhythm.
- Build clear reading paths.
- Use stable dimensions for repeated UI.
- Use asymmetry intentionally.
- Define at least three section types before coding.

Avoid:

- Same padding on every section.
- Cards for everything.
- Cards inside cards.
- Same-size card grids repeated throughout.
- Centering all text.

Useful section types:

- Opening canvas.
- Editorial manifesto.
- Sticky capability index.
- Product dossier band.
- Case clipping wall.
- Service package sheet.
- Closing statement.

If a page uses only hero, text block, and card grid, it is not sufficiently designed.

## Visual Detail

Use decorative elements only when they reinforce the narrative or brand. Prefer real subject images, diagrams, data marks, maps, product screenshots, or meaningful typographic devices.

Avoid generic icons above headings.

## Template Application Checklist

The chosen template family must influence:

- Hero composition.
- Navigation behavior.
- Section rhythm.
- Asset style.
- Card shape and density.
- Case presentation.
- Data or diagram treatment.
- Closing gesture.

If only colors and fonts changed, the template has not been applied.

## Placeholder Quality

Placeholders must communicate replacement intent.

Require:

- Named subject, such as “舆情监测大屏占位图,” not “image placeholder.”
- Matching final aspect ratio.
- Visual style consistent with the page.
- `alt` text describing the intended asset.

Avoid:

- Gray rectangles.
- Random decorative gradients.
- Fake screenshots with fake data.
- Visuals that conflict with the chosen template family.

## Anti-Slop Test

Revise if the page feels like:

- A generic SaaS landing page.
- A dark neon AI demo.
- A Markdown document with CSS.
- A pile of cards.
- A template that could fit any company by changing the logo.

Also revise if:

- The page has no memorable visual metaphor.
- The first viewport does not signal the specific organization/topic.
- Product sections all have the same rhythm.
- Cases look like generic portfolio cards.
- Placeholder art has no replacement direction.

## 温州新闻网 Design Notes

The current best-fit direction should not be merely “Institutional + Editorial.” Make it more specific:

```text
Template family: Newsroom Product Bureau
Secondary influence: Civic Editorial Atlas
Data sections: Data Dossier
Tone: confident, civic, editorial, operational
Visual metaphor: a newsroom turning scattered assignments into a city service product system
```

Recommended improvements:

- Replace generic beige grid with a stronger newsroom/product dossier motif.
- Treat product cards as “产品档案” with fields and evidence, not normal cards.
- Treat cases as “案例剪报” or “项目证据卡,” not portfolio tiles.
- Use map/service-node visuals only when they explain city coverage or collaboration.
- Give AI and data sections distinct visual grammar rather than the same product-band layout.
