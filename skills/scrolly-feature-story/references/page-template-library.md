# Page Template Library

Use this reference before section design. A page template defines the full narrative shape of a scrollytelling project. It is the "director" layer above individual modules.

## Selection Protocol

Before implementation, choose:

```text
Primary page template:
Secondary page template:
Audience:
Publishing context:
Narrative arc:
Core modules:
Visual style:
Framework recommendation:
Mobile recomposition:
```

Use one primary template and at most two secondary influences. If more than three templates seem necessary, the story likely needs a clearer editorial focus.

## Templates

### media-product-manual

Use for media organizations packaging editorial, platform, data, event, commerce, and AI capabilities into a service/product manual.

Best for:

- Newsroom product and service manuals.
- Media group transformation stories.
- Client-facing capability brochures.
- Internal capability systems turned into external offerings.

Narrative structure:

```text
Institution signal -> Strategic positioning -> Capability system -> Product dossiers -> Case evidence -> Service packages -> Cooperation CTA
```

Recommended modules:

- `immersive-hero`
- `capability-index`
- `product-dossier`
- `case-clipping-wall`
- `data-dossier`
- `process-flow`
- `cta-close`

Visual direction:

- Newsroom bureau.
- Editorial dossiers.
- Assignment boards.
- Product archive labels.
- Case clippings.

Avoid:

- SaaS landing page feature grids.
- Startup-style pricing pages unless real commercial packages require them.
- Treating every product as the same card.

Default framework:

- Astro for official static publishing.
- Svelte if the page relies heavily on scrolly component state.

### city-service-atlas

Use for local media, city service, public communication, regional collaboration, county-level service, public-sector or institution-adjacent narratives.

Best for:

- City media service systems.
- Regional/county service maps.
- Public communication platforms.
- Cultural, tourism, emergency, livelihood, or urban governance stories.

Narrative structure:

```text
City context -> Service map -> Regional nodes -> Service paths -> Case proof -> Public value -> CTA
```

Recommended modules:

- `immersive-hero`
- `map-story`
- `sticky-scrolly`
- `metric-board`
- `case-clipping-wall`
- `quote-spread`

Visual direction:

- Civic atlas.
- Map sheets.
- Coordinates and regional labels.
- Field notes.
- Documentary image strips.

Avoid:

- Decorative map dots with no location meaning.
- Generic government portal layouts.
- Dark technology dashboards as the main mood.

Default framework:

- Astro + lightweight map SVG for static pages.
- MapLibre + Astro/Svelte/React for real geographic interaction.

### data-investigation

Use for evidence-heavy reporting, public-opinion monitoring, trend analysis, risk explanation, dashboards, and accountability narratives.

Best for:

- Data journalism.
- Public opinion reports.
- Monitoring products.
- Performance or trend stories.
- Research-backed public communication.

Narrative structure:

```text
Key finding -> Evidence trail -> Method or source -> Annotated data -> Human / institutional impact -> What changes next
```

Recommended modules:

- `data-dossier`
- `sticky-scrolly`
- `metric-board`
- `timeline`
- `comparison`
- `quote-spread`

Visual direction:

- Data dossier.
- Annotated charts.
- Evidence tabs.
- Report pages.
- Low-noise labels.

Avoid:

- Fake dashboards.
- Charts without a claim.
- Over-animated chart switching.

Default framework:

- Svelte for data-driven scrolly graphics.
- Astro with embedded chart components for static reports.

### annual-report

Use for yearly reports, institutional summaries, project reviews, impact reports, and performance storytelling.

Best for:

- Media annual reports.
- Institutional achievements.
- Public service impact summaries.
- Campaign or department yearly reviews.

Narrative structure:

```text
Year thesis -> Milestones -> Capability growth -> Key numbers -> Representative cases -> Future commitments
```

Recommended modules:

- `immersive-hero`
- `timeline`
- `metric-board`
- `case-clipping-wall`
- `quote-spread`
- `cta-close`

Visual direction:

- Institutional report.
- Annual archive.
- Timeline ledger.
- Clean evidence spreads.

Avoid:

- Pure celebratory poster style.
- Metric walls without explanation.
- Too many equal-weight milestones.

Default framework:

- Astro for static publishing and archival stability.

### event-live-recap

Use for activities, conferences, cultural events, sports, live streaming programs, festivals, and campaign recaps.

Best for:

- Event microsites.
- Live broadcast recaps.
- Cultural tourism campaigns.
- Sports and festival stories.
- Participation or registration stories.

Narrative structure:

```text
Event signal -> Live atmosphere -> Schedule / route -> Highlights -> Participation proof -> Results -> Next action
```

Recommended modules:

- `immersive-hero`
- `timeline`
- `media-chapter`
- `metric-board`
- `case-clipping-wall`
- `cta-close`

Visual direction:

- Event stage.
- Live control room.
- Program rundown.
- Photo strips.

Avoid:

- Slow report-like pacing.
- Dense institutional paragraphs in the opening.
- CTA hidden after long explanatory text.

Default framework:

- Astro for official recaps.
- React/Svelte if live or interactive schedules are needed.

### case-dossier

Use when cases are the main proof and the page needs to organize many projects into a credible portfolio.

Best for:

- Client case libraries.
- Media campaign portfolios.
- Product proof pages.
- Department project reviews.

Narrative structure:

```text
Portfolio thesis -> Case taxonomy -> Featured cases -> Pattern extraction -> Service packages -> CTA
```

Recommended modules:

- `case-clipping-wall`
- `product-dossier`
- `filter-bar`
- `comparison`
- `quote-spread`
- `cta-close`

Visual direction:

- Clipping wall.
- Archive cabinet.
- Editorial evidence board.
- Project briefs.

Avoid:

- Generic image cards.
- Hiding case value behind hover-only states.
- Mixing unrelated cases without taxonomy.

Default framework:

- Astro for portfolio pages.
- Svelte/React if filtering and search are substantial.

### policy-explainer

Use for public policy interpretation, civic education, institutional explainers, and public issue explainers.

Best for:

- Policy explainers.
- Public service guidance.
- Issue education.
- Complex process explanation.

Narrative structure:

```text
Why it matters -> What changed -> Who is affected -> How it works -> What to do -> Resources
```

Recommended modules:

- `sticky-scrolly`
- `process-flow`
- `comparison`
- `quote-spread`
- `metric-board`
- `cta-close`

Visual direction:

- Civic explainer.
- Process cards.
- Annotated diagrams.
- Public-service clarity.

Avoid:

- Legal-document density.
- Decorative illustrations that do not clarify the process.
- Ambiguous CTA labels.

Default framework:

- Astro or single HTML, depending on publishing scale.

## Wenzhou News Recommendation

For Wenzhou News product manual projects:

```text
Primary page template: media-product-manual
Secondary page template: city-service-atlas
Data sections: data-investigation as a local pattern
Core modules: immersive-hero, capability-index, product-dossier, case-clipping-wall, data-dossier, map-story, cta-close
Visual style: newsroom-bureau + civic-atlas
Framework: Astro for official static publishing
```

The page should feel like a local media organization's product archive and city service atlas, not a generic enterprise landing page.

