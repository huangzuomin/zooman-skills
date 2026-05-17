export const caseClippingWallExample = {
  id: "cases",
  eyebrow: "Case Evidence",
  title: "Turn project examples into a proof wall.",
  intro: "Use this module when cases need to show service credibility, scenarios, and outcomes.",
  filters: [
    { label: "Events", value: "event" },
    { label: "Data", value: "data" },
    { label: "County", value: "county" }
  ],
  cases: [
    {
      label: "Event case",
      type: "event",
      year: "2026",
      title: "Replace with real event coverage case",
      summary: "Describe the client, scene, service package, and communication result.",
      evidence: "Use real photos, live page screenshots, audience data, or replay assets.",
      tags: ["Live", "Short video"]
    },
    {
      label: "Data case",
      type: "data",
      year: "2026",
      title: "Replace with real monitoring report case",
      summary: "Explain the issue tracked, decision supported, and report output.",
      evidence: "Use real report excerpts, source notes, or dashboard screenshots.",
      tags: ["Monitoring", "Report"]
    }
  ]
};

