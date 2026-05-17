# Map Story Patterns

Use this reference for location-based scrollytelling: city services, county collaboration, routes, districts, public events, environment, emergency response, transportation, tourism, and regional media networks.

## When to Use a Map

Use a map when the story depends on:

- Where things happen.
- How regions relate.
- How services cover an area.
- How a route or event unfolds.
- How local differences matter.

Do not use a map when:

- Locations are decorative.
- All points carry the same meaning.
- The reader does not need geographic context.
- A simple list or matrix is clearer.

## Pattern Types

### Regional Atlas

Best for:

- City/county service coverage.
- District-level capability maps.
- Local media network stories.

Structure:

```text
Overview map -> Region groups -> Selected nodes -> Service meaning -> Case proof
```

Visuals:

- Region outlines.
- Labels.
- Service routes.
- Coverage zones.

### Location Chapters

Best for:

- Place-by-place stories.
- Field reporting.
- Culture and tourism.
- Environmental or disaster reports.

Structure:

```text
Chapter step -> Map camera / region highlight -> Photo/evidence -> Short explanation
```

Visuals:

- Active point.
- Camera movement.
- Image or evidence panel.

### Route Narrative

Best for:

- Journeys.
- Event routes.
- Logistics.
- Flood/emergency/traffic stories.

Structure:

```text
Start -> Segment highlights -> Turning points -> Final outcome
```

Visuals:

- Route line.
- Progress along path.
- Segment labels.

### Layer Reveal

Best for:

- Comparing infrastructure, population, risk, media coverage, public services, or data layers.

Structure:

```text
Base geography -> Layer 1 -> Layer 2 -> Combined insight -> Implication
```

Visuals:

- Layer toggles.
- Opacity transitions.
- Legend.

## Implementation Choices

### Static SVG Map

Use when:

- Geography is simple.
- Official basemap licensing is uncertain.
- The map is mostly symbolic or diagrammatic.
- Performance and portability matter.

Good for:

- Product manuals.
- City service diagrams.
- Simple county maps.

### MapLibre

Use when:

- Real map pan/zoom is meaningful.
- There are many points or layers.
- A route, basemap, or geospatial data matters.

Requires:

- Map style.
- GeoJSON.
- Attribution.
- Mobile touch behavior.
- Fallback plan.

### Image Map

Use when:

- A designer provides final map artwork.
- The map is a fixed infographic.

Requires:

- Responsive image handling.
- Alternative text.
- Optional annotations in HTML.

## Mobile Rules

On mobile:

- Prefer map snapshots with nearby text.
- Keep labels large enough.
- Avoid hover.
- Provide list equivalents for map points.
- Do not trap scroll inside a map unless the user explicitly interacts with it.

## Wenzhou News Use

For Wenzhou News:

```text
Pattern: Regional Atlas
Map type: Static SVG or designed map placeholder
Purpose: Explain city/county service coverage and media service reach
Module: map-story
Avoid: Random decorative points without county/service meaning
```

Useful content:

- Wenzhou city/county nodes.
- Service categories by region.
- Example cases tied to locations.
- Cooperation coverage.

