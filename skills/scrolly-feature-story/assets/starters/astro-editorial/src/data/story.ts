export const storyMeta = {
  title: "Editorial Scrollytelling Starter",
  description: "A production-oriented Astro starter for media-grade scrollytelling pages.",
  eyebrow: "Media Story System",
  dek: "Replace this starter data with the project's real editorial outline, modules, assets, and calls to action.",
  organization: "Newsroom / Media Organization"
};

export const navItems = [
  { href: "#positioning", label: "Positioning" },
  { href: "#system", label: "System" },
  { href: "#products", label: "Products" },
  { href: "#cases", label: "Cases" },
  { href: "#data", label: "Data" },
  { href: "#map", label: "Map" },
  { href: "#contact", label: "Contact" }
];

export const heroStats = [
  { value: "01", label: "Page template" },
  { value: "07", label: "Section modules" },
  { value: "A11y", label: "Reduced motion ready" }
];

export const positioning = {
  eyebrow: "Narrative Position",
  title: "A media-native story structure, not a generic landing page.",
  body:
    "Use this section to establish why the story matters, who it serves, and what editorial promise guides the scroll experience.",
  points: [
    "State the audience and publishing context.",
    "Name the page template and visual style.",
    "Explain what the reader will understand by the end."
  ]
};

export const scrollySteps = [
  {
    id: "content",
    kicker: "Step 01",
    title: "Structure the content",
    body: "Convert raw copy into sections, claims, evidence, entities, and asset needs."
  },
  {
    id: "template",
    kicker: "Step 02",
    title: "Choose the template system",
    body: "Select a page-level template first, then assign section modules to each narrative beat."
  },
  {
    id: "delivery",
    kicker: "Step 03",
    title: "Build for publishing",
    body: "Use Astro for official static media pages unless complex state requires Svelte, React, MapLibre, or GSAP."
  }
];

export const products = [
  {
    name: "Product Dossier",
    type: "Module",
    summary: "Use this card style for services, products, capabilities, and editorial offerings.",
    bestFor: "Product manuals and capability catalogs",
    evidence: "Problem, service, proof, scenario"
  },
  {
    name: "Case Clipping",
    type: "Module",
    summary: "Turn project examples into proof with labels, context, and concise outcomes.",
    bestFor: "Case libraries and campaign portfolios",
    evidence: "Client, project, outcome, media evidence"
  },
  {
    name: "Data Dossier",
    type: "Module",
    summary: "Explain a claim through structured metrics, annotations, and source notes.",
    bestFor: "Reports, monitoring, public opinion, impact",
    evidence: "Metric, claim, source, interpretation"
  }
];

export const cases = [
  {
    label: "Featured Case",
    title: "Replace with a real editorial or client case",
    body: "Use a short value statement. Avoid vague praise and fake metrics.",
    tags: ["Case", "Evidence"]
  },
  {
    label: "Archive Note",
    title: "Group cases by scenario or service type",
    body: "The wall should help readers see patterns, not just browse cards.",
    tags: ["Taxonomy", "Proof"]
  },
  {
    label: "Field Record",
    title: "Add image, screenshot, quote, or result evidence",
    body: "Each case should show why the service model works.",
    tags: ["Media", "Outcome"]
  }
];

export const metrics = [
  { value: "3", label: "Primary claims", note: "Keep data tied to a narrative claim." },
  { value: "5", label: "Evidence types", note: "Charts, tables, screenshots, quotes, maps." },
  { value: "1", label: "Source note", note: "Every metric needs context or source." }
];

export const mapPoints = [
  { name: "Core newsroom", detail: "Editorial command and publishing desk." },
  { name: "Service node", detail: "Regional or audience-facing service point." },
  { name: "Case location", detail: "A project example tied to place." }
];

export const cta = {
  eyebrow: "Publishing Handoff",
  title: "Replace this ending with a clear next action.",
  body:
    "For official projects, include contact, cooperation path, resource download, or editorial follow-up. Avoid ending with a generic decorative card.",
  actions: [
    { href: "mailto:example@example.com", label: "Contact editorial team" },
    { href: "#system", label: "Review modules" }
  ]
};

