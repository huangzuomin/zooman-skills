# Data Dossier Module

Use this module for evidence-heavy sections, monitoring products, reports, dashboards, public opinion, and impact summaries.

## Good For

- Public opinion monitoring.
- Data reports.
- Impact evidence.
- Trend explanation.
- Dashboard excerpts.

## Avoid

- Fake metrics.
- Decorative charts.
- Numbers without source or interpretation.
- Over-animated dashboards.

## Data Contract

```ts
{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  sourceNote?: string;
  metrics: Array<{
    value: string;
    label: string;
    note: string;
  }>;
  evidence?: Array<{
    kicker: string;
    title: string;
    body: string;
  }>;
}
```

## Implementation Notes

- Copy `DataDossier.astro` into the project.
- Copy `data-dossier.css` into the project stylesheet.
- Pair with real charts, screenshots, tables, or report excerpts for final publishing.
- Keep the section readable without animation.

