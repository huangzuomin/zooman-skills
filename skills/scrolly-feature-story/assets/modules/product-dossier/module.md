# Product Dossier Module

Use this module for media product manuals, service catalogs, and capability systems. It presents products as dossiers with problem, service, evidence, scenario, and tags.

## Good For

- Media products and services.
- Capability packaging.
- Client-facing service manuals.
- Productized newsroom offerings.

## Avoid

- Identical cards for every item when products have different importance.
- Decorative icons without evidence.
- Invented metrics, fake clients, or placeholder proof.

## Data Contract

```ts
{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  products: Array<{
    name: string;
    type?: string;
    importance?: "featured" | "standard";
    summary: string;
    problem?: string;
    service?: string;
    evidence?: string;
    bestFor?: string;
    tags?: string[];
  }>;
}
```

## Implementation Notes

- Copy `ProductDossier.astro` into the project's components folder.
- Copy `product-dossier.css` or merge its `.sf-product-*` rules into the project's global stylesheet.
- Keep CSS custom properties aligned with the selected visual style.
- Use real case or asset evidence before final publishing.

