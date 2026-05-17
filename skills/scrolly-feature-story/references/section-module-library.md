# Section Module Library

Use this reference after choosing a page template. Section modules are reusable building blocks for expressing specific content types. They should be composed by the main skill, not used as isolated mini-pages.

## Module Selection Protocol

For each section, decide:

```text
Section message:
Recommended module:
Why this module fits:
Desktop layout:
Mobile layout:
Motion:
Assets:
Fallback without JavaScript:
```

Do not use a module just because it looks impressive. Use it when the interaction clarifies a relationship, sequence, comparison, evidence trail, or spatial context.

## Core Modules

### immersive-hero

Purpose:

- Establish subject, tone, institution, and narrative promise.

Best for:

- Opening a feature.
- Major chapter transitions.
- Final statements.

Desktop:

- Full-viewport or near-full-viewport composition.
- Dominant image, map, editorial layout, or typographic scene.
- Minimal but strong copy.

Mobile:

- Reduce height if content would be hidden.
- Keep headline readable without relying on background contrast alone.

Motion:

- Gentle reveal, scroll progress, or subtle layer shift.
- No motion should be required for understanding.

Avoid:

- Generic gradient wallpaper.
- Decorative blurred stock-like image.
- Long paragraph blocks in the hero.

### sticky-scrolly

Purpose:

- Connect scroll steps to a persistent visual state.

Best for:

- Maps.
- Diagrams.
- Product systems.
- Workflows.
- Data annotations.

Desktop:

- Sticky visual on one side.
- Step text on the other.
- Active step updates visual highlights or labels.

Mobile:

- Convert to normal reading flow.
- Place relevant visual near each step.
- Avoid long pinning.

Motion:

- `IntersectionObserver` or Scrollama for step state.
- CSS transitions for highlights.

Avoid:

- Long sticky sequences with weak step differences.
- Important content that appears only through animation.

### capability-index

Purpose:

- Show the whole capability system before drilling into products or services.

Best for:

- Media service systems.
- Product manuals.
- Department capability maps.

Desktop:

- Matrix, indexed board, or segmented map.
- Groups reveal or highlight as the user scrolls.

Mobile:

- Compact accordion or vertical index.
- Keep category summaries visible.

Motion:

- Highlight active group.
- Avoid reflow-heavy animations.

Avoid:

- Turning the capability system into repeated icon cards.

### product-dossier

Purpose:

- Present products or services as credible, evidence-backed dossiers.

Best for:

- Product/service manuals.
- Media capability packaging.
- Client-facing product catalogs.

Desktop:

- Archive-like cards, dossier sheets, or product bands.
- Each item should show problem, service, evidence, and suitable scenario.

Mobile:

- Vertical cards with stable title, tags, and outcome.
- Avoid hover-only details.

Motion:

- Reveal by group.
- Optional active product highlight.

Avoid:

- Equal-size cards for products with different importance.
- Empty decorative icons.

### case-clipping-wall

Purpose:

- Turn cases into proof, not just portfolio decoration.

Best for:

- Project examples.
- Client cases.
- Media campaign evidence.
- Before/after public communication results.

Desktop:

- Clipping wall, evidence board, archive grid, or editorial spread.
- Use category labels and concise value statements.

Mobile:

- Vertical case list or grouped sections.
- Filters must remain usable by keyboard and touch.

Motion:

- Filter transitions and small reveal effects.
- No hidden hover-only evidence.

Avoid:

- Generic image cards without proof.
- Fake metrics or invented evidence.

### data-dossier

Purpose:

- Explain a claim through structured evidence.

Best for:

- Monitoring.
- Reports.
- Trends.
- Dashboards.
- Data products.

Desktop:

- Annotated chart, report sheet, dashboard excerpt, or evidence tabs.
- Narrative text should point to specific marks.

Mobile:

- Use simplified charts, stacked evidence, or static image snapshots.
- Keep labels readable.

Motion:

- Highlight one metric, period, or evidence group at a time.
- Avoid chart switching unless the change carries meaning.

Avoid:

- Fake dashboards.
- Decorative sparklines.
- Using metrics as ornament.

### map-story

Purpose:

- Explain spatial relationships, regional services, routes, or place-based evidence.

Best for:

- City service atlas.
- County/city collaboration.
- Location-based reports.
- Cultural tourism, emergency, environment, and transportation stories.

Desktop:

- Sticky map with step-linked locations or regions.
- Use meaningful labels and geographic hierarchy.

Mobile:

- Static map excerpts paired with steps, or a simplified interactive map.
- Do not require precise hover.

Motion:

- Camera movement, region highlight, path reveal, or point activation.

Avoid:

- Map decoration with no real geography.
- Too many points without story order.

### timeline

Purpose:

- Show chronological development, program schedules, event recaps, or milestone logic.

Best for:

- Annual reports.
- Event recaps.
- Policy changes.
- Project process stories.

Desktop:

- Horizontal or vertical rail with chapter anchors.
- Major moments have visual or evidence support.

Mobile:

- Vertical sequence.
- Avoid cramped horizontal scroll unless intentional.

Motion:

- Active marker highlight.
- Optional progress line.

Avoid:

- Listing every date with equal weight.

### metric-board

Purpose:

- Present numbers as evidence with context.

Best for:

- Impact reports.
- Event results.
- Product proof.
- Performance summaries.

Desktop:

- Group metrics by claim.
- Pair each number with source/context.

Mobile:

- Two-column or single-column metrics depending on density.

Motion:

- Count-up only when restrained and nonessential.

Avoid:

- Numbers without source or meaning.
- Huge metrics used as decoration.

### process-flow

Purpose:

- Explain how a service, workflow, or collaboration model works.

Best for:

- Service delivery.
- AI workflow.
- Editorial operations.
- Client cooperation paths.

Desktop:

- Step diagram, swimlane, or assembly model.

Mobile:

- Numbered vertical flow.
- Keep inputs and outputs visible.

Motion:

- Sequential reveal or active step highlight.

Avoid:

- Overly complex diagrams that cannot fit mobile.

### quote-spread

Purpose:

- Add voice, authority, testimony, or editorial emphasis.

Best for:

- Expert comment.
- Client testimony.
- Editorial thesis.
- Institutional statements.

Desktop:

- Large quote with attribution and contextual note.

Mobile:

- Keep quote length controlled.

Motion:

- Minimal reveal.

Avoid:

- Anonymous decorative quotes.

### comparison

Purpose:

- Clarify before/after, option A/B, old/new workflow, or different audience paths.

Best for:

- Transformation stories.
- Product value.
- Policy explanation.

Desktop:

- Split screen, paired panels, or aligned rows.

Mobile:

- Stack with clear labels.

Motion:

- Step-linked emphasis.

Avoid:

- Comparisons where both sides are vague.

### cta-close

Purpose:

- End the story with a clear action or next step.

Best for:

- Product manuals.
- Campaign pages.
- Service cooperation.
- Reports with resources.

Desktop:

- Strong final statement plus concise action links.

Mobile:

- Make contact/action elements easy to tap.

Motion:

- Simple reveal only.

Avoid:

- Multiple competing CTAs.
- Ending with a generic contact card.

## Composition Rule

A strong page usually combines:

```text
1 opening module
1 system/context module
2-4 evidence/detail modules
1 proof module
1 close module
```

If the page repeats the same module more than twice in a row, revise the rhythm.

