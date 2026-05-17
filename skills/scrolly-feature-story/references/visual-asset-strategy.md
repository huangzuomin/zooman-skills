# Visual Asset Strategy

Use this reference whenever the page needs images, diagrams, maps, screenshots, or placeholders. Scrollytelling design depends on meaningful visuals. Placeholders must communicate art direction, not merely fill boxes.

## Asset Planning Protocol

Before building the page, create an asset plan:

```text
Hero asset:
Chapter assets:
Data/diagram assets:
Case assets:
Product screenshots:
Placeholder style:
Replacement notes:
Performance strategy:
```

## Placeholder Requirements

Every placeholder must:

- Represent the intended future asset type.
- Use the same aspect ratio expected in production.
- Include meaningful `alt` text.
- Avoid generic gray boxes.
- Avoid misleading fake screenshots or fake data.
- Be visually aligned with the selected template family.

Good placeholders:

- Map-style SVG for city service atlas.
- Dossier page mock for product manual.
- Annotated chart skeleton for data sections.
- News clipping layout for cases.
- Device frame for platform operations.

Bad placeholders:

- Random abstract gradients.
- Generic image icons.
- Decorative blobs.
- Fake dashboards with meaningless metrics.
- Stock-like dark blurred backgrounds.

## Asset Families

### City / Civic Assets

Use for Civic Editorial Atlas:

- City map outlines.
- District/county markers.
- Public-service scene placeholders.
- Infrastructure silhouettes.
- Editorial captions.

### Newsroom / Media Assets

Use for Newsroom Product Bureau:

- Assignment board.
- News page screenshots.
- Article clipping layouts.
- Editorial desk stills.
- Content calendar / publishing workflow diagrams.

### Product / Service Assets

Use for Service Field Guide:

- Product dossier sheets.
- Service blueprint diagrams.
- Package comparison sheets.
- Customer scenario cards.

### Data Assets

Use for Data Dossier:

- Annotated chart skeletons.
- Monitoring dashboard screenshots.
- Alert cards.
- Report page spreads.
- Timeline diagrams.

## Performance Rules

- First-screen image: use explicit width/height and high priority.
- Non-critical images: use `loading="lazy"`.
- SVG placeholders are acceptable for early production prototypes.
- Replace large raster images with WebP/AVIF before launch.
- Keep stable aspect ratios to prevent layout shift.

## 温州新闻网 Asset Plan

Recommended assets:

- Hero: 温州城市地图/新闻网络/服务节点 composite.
- 重构 section: newsroom assignment board or productization diagram.
- 七大板块: capability index board.
- 内容传播: article/page spread or editorial desk.
- 新媒体运营: phone + publishing workflow screenshot.
- 活动直播: event stage/live interface.
- 数字内容:专题/H5/page spread.
- 舆情数据: annotated monitoring dashboard.
- 技术开发: system architecture / admin interface.
- AI: agent workflow / knowledge base diagram.
- 县域融媒: county collaboration map.
- 案例库: clipping-style case cards.

If real assets are unavailable, use SVG placeholders that clearly signal these future replacements.

