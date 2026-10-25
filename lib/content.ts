export type Project = {
  index: string;
  name: string;
  eyebrow: string;
  summary: string;
  problem: string;
  approach: string;
  contribution: string;
  status: string;
  accent: "mint" | "amber" | "blue" | "rose";
  tags: string[];
  repo?: string;
  demo?: string;
  visual: "satellite" | "execution" | "whatsapp" | "research";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "SatQuery AI",
    eyebrow: "Flagship project · geospatial intelligence",
    summary:
      "An evidence-first vision-language assistant for asking natural-language questions of satellite and remote-sensing imagery.",
    problem:
      "Satellite data is rich, but the path from a question to a trustworthy visual answer is still too technical and fragmented.",
    approach:
      "SatQuery AI combines agentic orchestration, VLM workflows, grounding, and visible evidence so answers stay connected to the imagery that supports them.",
    contribution:
      "Designed the product direction around explainable interaction, observable execution, and practical remote-sensing workflows.",
    status: "Active build · Smart India Hackathon 2026",
    accent: "mint",
    tags: ["AI agents", "VLMs", "GroundingDINO", "Computer vision"],
    repo: "https://github.com/nihas14m-star/satquery-ai",
    visual: "satellite",
  },
  {
    index: "02",
    name: "EVOX",
    eyebrow: "Agentic systems · execution interface",
    summary:
      "An AI-native workspace where agents reason, interact with tools, and execute tasks through a structured interface.",
    problem:
      "Chat is a poor control surface for multi-step work: intent, tool calls, progress, and outcomes disappear into a transcript.",
    approach:
      "Evox treats agent work as an execution system — with explicit steps, tool boundaries, status, and a place for the human to stay oriented.",
    contribution:
      "Explored the interaction model for moving from conversational prompts to observable, editable execution flows.",
    status: "Concept in progress · details editable",
    accent: "amber",
    tags: ["Agentic AI", "Tool execution", "Workflows", "AI-native UI"],
    visual: "execution",
  },
  {
    index: "03",
    name: "ECHO AI",
    eyebrow: "Local-first · browser assistant",
    summary:
      "A local-first WhatsApp AI assistant for understanding chats and drafting replies without taking control away from the user.",
    problem:
      "Useful context is buried in chat history, but automation should not quietly send messages on a person's behalf.",
    approach:
      "A Chrome Manifest V3 extension uses the Side Panel API, IndexedDB, and chrome.storage.local to keep context close to the browser while leaving the final Send action in WhatsApp's native UI.",
    contribution:
      "Defined the human-in-the-loop boundary: AI can analyze and draft, but the user remains in control of sending.",
    status: "Prototype · details editable",
    accent: "blue",
    tags: ["Chrome MV3", "Side Panel API", "IndexedDB", "Local-first"],
    visual: "whatsapp",
  },
  {
    index: "04",
    name: "REP OPILOT",
    eyebrow: "Developer tooling · repository intelligence",
    summary:
      "A developer tool for discovering, comparing, and researching GitHub repositories with an AI-assisted workflow.",
    problem:
      "Finding a useful repository is easy; understanding whether it is relevant, healthy, and worth extending takes much longer.",
    approach:
      "Rep Opilot brings GitHub Search API results and structured AI-assisted analysis into one focused research loop.",
    contribution:
      "Worked on the product idea around turning repository discovery into a repeatable decision-making tool.",
    status: "Concept · details editable",
    accent: "rose",
    tags: ["GitHub Search API", "Node.js", "NVIDIA Nemotron", "Research"],
    visual: "research",
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: ["Python", "Machine Learning", "Computer Vision", "VLMs", "LLMs", "AI Agents"],
  },
  {
    title: "AI tooling",
    items: ["OpenAI", "Gemini", "NVIDIA Nemotron", "GroundingDINO", "OpenRouter"],
  },
  {
    title: "Development",
    items: ["JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  {
    title: "Developer tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Data / storage",
    items: ["SQL", "IndexedDB"],
  },
];

export const openSource = [
  {
    name: "n8n",
    type: "Established open-source project",
    description:
      "Fixed an issue where Execute Workflow Trigger validation failed when the workflow input schema was empty — a focused contribution across validation logic and testing.",
    href: "https://github.com/n8n-io/n8n/pull/40833",
    marker: "01",
  },
  {
    name: "OmniRush",
    type: "Desktop AI tooling",
    description:
      "Contributions to the OmniRush desktop coding-agent project. The repository is public; specific contribution details remain intentionally editable until the relevant PR links are added.",
    href: "https://github.com/nihas14m-star/omnirush-gui",
    marker: "02",
  },
];

export const experiences = [
  {
    company: "Unified Mentor Pvt. Ltd.",
    role: "AI / Data internship experience",
    period: "Details editable",
    description: "Relevant internship experience. Add dates, scope, and shipped outcomes when ready.",
  },
  {
    company: "Neoskillz",
    role: "Internship program participation",
    period: "Details editable",
    description: "Internship program participation. Add the most useful project or learning context when ready.",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2026",
    detail: "Participating / nominated with Team ASTRONEX 1",
    marker: "01",
  },
  {
    title: "IIFT Strategos 2026",
    detail: "Article Writing Competition · Rank 30 / 2040 applicants",
    marker: "02",
  },
  {
    title: "Open-source contributions",
    detail: "Contributions to n8n and OmniRush",
    marker: "03",
  },
];

export const links = {
  github: "https://github.com/nihas14m-star",
  linkedin: "#contact",
  resume: "#contact",
};
