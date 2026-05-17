# Editorial Production Workflow

Use this reference for official media projects and repeatable newsroom production. The skill should support editorial, design, and frontend collaboration rather than generating a one-off artifact with no maintenance path.

## Production Stages

### 1. Intake

Collect:

- Source copy: Markdown, Word, Docs, CMS export, transcript, or brief.
- Structured data: spreadsheets, CSV, tables, metrics, case lists.
- Visual materials: photos, screenshots, maps, charts, videos, logos.
- Publishing constraints: platform, deadline, device priority, accessibility requirements.
- Brand constraints: colors, typefaces, tone, legal notes.

Output:

```text
Content inventory
Asset inventory
Known gaps
Publishing target
```

### 2. Story Modeling

Convert raw content into:

- Narrative arc.
- Sections.
- Claims.
- Evidence.
- Product/service entities.
- Case entities.
- Data entities.
- Asset needs.

Output:

```text
Story outline
Section messages
Entity lists
Required assets
```

### 3. Template and Module Selection

Choose:

- Page template.
- Secondary influences.
- Section modules.
- Visual style.
- Framework.
- Scroll engine.

Output:

```text
Template decision brief
Module map
Framework decision
Asset plan
```

### 4. Prototype

Build:

- First readable page.
- Real content, not lorem ipsum.
- Placeholder images with explicit replacement intent.
- Core responsive layout.
- Basic reduced-motion behavior.

Output:

```text
Preview URL or local file
Screenshots
Known visual/content gaps
```

### 5. Editorial Review

Check:

- Factual accuracy.
- Missing context.
- Title hierarchy.
- Repeated claims.
- Overlong sections.
- Case and metric sourcing.
- CTA wording.

Output:

```text
Revision list
Copy edits
Fact gaps
```

### 6. Design Review

Check:

- Template family is visible.
- Modules do not feel repetitive.
- Visual assets support the story.
- Mobile is recomposed.
- Chinese text does not overflow.
- Typography and spacing are consistent.

Output:

```text
Design corrections
Mobile corrections
Asset replacement list
```

### 7. Technical Verification

Check:

- Build passes.
- No console errors.
- Links and anchors work.
- Keyboard focus is visible.
- Reduced motion is supported.
- Images have alt text.
- Layout shift is controlled.
- Page remains readable without JavaScript.

Output:

```text
Verification notes
Build artifact
Remaining risk
```

### 8. Publishing Handoff

Deliver:

- Source project.
- Built output.
- Asset folder.
- Content/data files.
- Maintenance notes.

Output:

```text
dist/
source/
asset replacement notes
deployment notes
```

## Recommended File Model

For production Astro projects:

```text
src/
  data/
    story.ts
  components/
  layouts/
  pages/
  scripts/
  styles/
public/
  images/
  placeholders/
```

For single-page previews:

```text
index.html
assets/
```

## Editorial Data Model

Prefer structured entities:

```text
Section
Product
Case
Metric
Location
TimelineEvent
Package
Quote
AssetNeed
```

Do not bury reusable facts inside component markup if the project is official or likely to be updated.

## Wenzhou News Workflow

For Wenzhou News product manuals:

1. Extract products, cases, packages, and cooperation model from source copy.
2. Choose `media-product-manual` plus `city-service-atlas`.
3. Build in Astro for official static publishing.
4. Use placeholders that describe newsroom, city service, dashboard, AI workflow, and county-map asset needs.
5. Review whether product, case, data, AI, and county sections have distinct visual grammar.

