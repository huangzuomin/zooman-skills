# Content Schema

Use this schema as an intermediate model when converting source content into a scrollytelling page.

```js
const story = {
  meta: {
    title: "",
    subtitle: "",
    audience: "",
    goal: "",
    visualDirection: "",
    tone: ""
  },
  designSystem: {
    fonts: {
      display: "",
      body: "",
      meta: ""
    },
    colors: {
      background: "",
      surface: "",
      text: "",
      muted: "",
      accent: "",
      border: ""
    },
    spacing: {},
    motion: {}
  },
  sections: [
    {
      id: "",
      title: "",
      role: "hero | problem | positioning | proof | product | case | package | cta",
      coreMessage: "",
      layout: "sticky-graphic | full-bleed | split | card-grid | data-step | editorial-text",
      background: {
        type: "image | video | color | gradient | none",
        source: "",
        treatment: ""
      },
      content: [
        {
          type: "heading | paragraph | quote | list | card | table | chart | case | package | cta",
          value: "",
          items: []
        }
      ],
      motion: {
        level: "none | reveal | narrative | advanced",
        description: ""
      },
      mobileFallback: ""
    }
  ]
};
```

## Section Roles

- `hero`: Establish theme, tone, and promise.
- `problem`: Explain why the subject matters.
- `positioning`: State the central thesis or identity.
- `product`: Explain capabilities, offerings, or modules.
- `proof`: Show data, quotes, or evidence.
- `case`: Show examples and outcomes.
- `package`: Combine offerings into user-facing solutions.
- `cta`: Close with a clear next step or final statement.

## Layout Selection

- Use `full-bleed` for strong openings or chapter breaks.
- Use `editorial-text` for context and interpretation.
- Use `sticky-graphic` for systems, maps, charts, and step-by-step explanation.
- Use `card-grid` only for repeated items that benefit from scanning.
- Use `data-step` for annotated charts or progressive data explanation.
- Use `split` only for real comparison or parallel narratives.

## Content Rules

- Preserve real names, numbers, cases, and claims.
- Do not invent proof.
- Split long paragraphs when needed for rhythm.
- Keep section headings concrete.
- Prefer one core message per section.

