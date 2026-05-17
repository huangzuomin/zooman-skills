# Case Clipping Wall Module

Use this module when cases are proof, not decoration. It presents project examples as editorial clippings with category, year, summary, evidence, and tags.

## Good For

- Media campaign portfolios.
- Client case libraries.
- Product proof sections.
- Event, data, county, and service examples.

## Avoid

- Generic image-card grids.
- Cases with no scenario or outcome.
- Hover-only proof.
- Fake results or invented clients.

## Data Contract

```ts
{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  filters?: Array<{ label: string; value: string }>;
  cases: Array<{
    label?: string;
    type?: string;
    year?: string;
    title: string;
    summary: string;
    evidence?: string;
    tags?: string[];
  }>;
}
```

## Implementation Notes

- Copy `CaseClippingWall.astro` into the project.
- Copy `case-clipping-wall.css` into the project stylesheet.
- Copy `case-filters.js` only if filters are used.
- Keep all cases visible if JavaScript fails.

