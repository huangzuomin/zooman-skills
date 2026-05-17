# Astro Editorial Starter

Use `assets/starters/astro-editorial/` when a scrollytelling project should become an official static media page rather than a one-file preview.

## When to Use

Use for:

- Media product manuals.
- City service atlases.
- Annual reports.
- Case dossiers.
- Data reports that do not need heavy client-side state.

Do not use for:

- Very quick one-file previews.
- Stories that require extensive real-time app logic.
- Complex multi-state data graphics better suited to Svelte.
- Object-centered 3D stories.

## Starter Structure

```text
package.json
astro.config.mjs
src/
  data/story.ts
  layouts/EditorialLayout.astro
  components/
  pages/index.astro
  scripts/scrolly.js
  styles/global.css
public/placeholders/
```

## Replacement Protocol

When using this starter:

1. Replace `src/data/story.ts` with the project's structured story model.
2. Keep modules that match the selected section map; remove modules that do not serve the story.
3. Replace placeholder SVGs with project-specific assets or intentional placeholders.
4. Adjust CSS tokens to the selected visual style.
5. Run build and inspect desktop/mobile screenshots.

## Included Modules

- `ImmersiveHero`
- `SectionIntro`
- `StickyScrolly`
- `ProductDossierGrid`
- `CaseClippingWall`
- `DataDossier`
- `MapStory`
- `CtaClose`

## Default Stack

```text
Astro static
CSS custom properties
CSS sticky
IntersectionObserver
Reduced-motion support
No-JavaScript readable content
```

Upgrade to Scrollama only when step offsets, progress, or resize behavior are too complex for the included observer script.

