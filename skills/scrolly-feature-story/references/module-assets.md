# Module Assets

Use this reference when reusing bundled section modules from `assets/modules/`.

## Available Modules

### product-dossier

Path:

```text
assets/modules/product-dossier/
```

Use for:

- Media products.
- Services.
- Capability catalogs.
- Client-facing manuals.

Files:

- `ProductDossier.astro`
- `product-dossier.css`
- `example-data.ts`
- `module.md`

### case-clipping-wall

Path:

```text
assets/modules/case-clipping-wall/
```

Use for:

- Cases as proof.
- Campaign portfolios.
- Client examples.
- Project archives.

Files:

- `CaseClippingWall.astro`
- `case-clipping-wall.css`
- `case-filters.js`
- `example-data.ts`
- `module.md`

### data-dossier

Path:

```text
assets/modules/data-dossier/
```

Use for:

- Metrics.
- Monitoring.
- Reports.
- Evidence boards.
- Data products.

Files:

- `DataDossier.astro`
- `data-dossier.css`
- `example-data.ts`
- `module.md`

## Reuse Rules

- Copy only modules selected in the section module map.
- Preserve real content and remove starter example data before publishing.
- Merge CSS variables with the project's visual style.
- Shared helper classes such as `.sf-module-eyebrow` and `.sf-module-tags` may appear in multiple module CSS files; merge them once in production stylesheets.
- Keep all module content readable without JavaScript.
- Use JavaScript only for interaction that improves comprehension.

## Wenzhou News Priority

For Wenzhou News product manuals, prioritize:

```text
product-dossier
case-clipping-wall
data-dossier
```

These three modules address the biggest design gap: products need dossier structure, cases need proof-wall treatment, and data/AI services need a distinct evidence grammar.
