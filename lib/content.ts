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
    eyebrow: "Public repository · remote-sensing analysis",
    summary:
      "An evidence-first vision-language assistant for natural-language analysis of multimodal satellite and remote-sensing imagery.",
    problem:
      "Remote-sensing analysis needs input validation, explicit scientific limitations, and evidence that stays connected to the result.",
    approach:
      "The public README documents local workflows for VQA, grounding, bi-temporal change analysis, optical + SAR analysis, visual evidence, observable execution traces, and exports.",
    contribution:
      "Repository owner. The README identifies the registered team as AstroNex 1, so this portfolio does not claim sole authorship.",
    status: "Public repository · no demo link listed",
    accent: "mint",
    tags: ["Python", "Computer vision", "GroundingDINO", "Playwright"],
    repo: "https://github.com/nihas14m-star/satquery-ai",
    visual: "satellite",
  },
  {
    index: "02",
    name: "CINEVERSE",
    eyebrow: "Public repository · full-stack college project",
    summary:
      "A full-stack movie ticket booking platform built with MySQL, Node.js + Express, React + Vite, and an optional OpenRouter AI layer.",
    problem:
      "A booking platform needs more than CRUD screens: seat holds, database guarantees, checkout, digital tickets, and clear admin workflows all need to agree.",
    approach:
      "The repository documents a MySQL schema, Node/Express REST API, React/Vite frontend, concurrency-aware seat holds, simulated payments, admin routes, and an optional AI layer.",
    contribution:
      "Repository owner. Project details and implementation are documented in the public repository.",
    status: "Public repository · no demo link listed",
    accent: "amber",
    tags: ["JavaScript", "React", "Node.js", "MySQL"],
    repo: "https://github.com/nihas14m-star/movie-ticket-booking-system",
    visual: "execution",
  },
  {
    index: "03",
    name: "divy",
    eyebrow: "Public repository · AI orchestration & evaluation",
    summary:
      "A provider-neutral AI orchestration framework with evidence-based routing, verification, recovery, evaluation, and reproducible benchmarks.",
    problem:
      "AI systems need reliable routing between providers, verifiable outputs, automatic recovery from failures, and benchmarks that reproduce — not just leaderboard scores.",
    approach:
      "The repository implements a modular orchestration layer: provider adapters normalize interfaces, evidence-based routing selects models per task, verification checks outputs against criteria, recovery retries with backoff, and a benchmark harness produces reproducible results.",
    contribution:
      "Repository owner. Designed and built the orchestration core, provider abstraction, verification pipeline, and benchmark infrastructure.",
    status: "Public repository · active development",
    accent: "blue",
    tags: ["Python", "AI Agents", "Orchestration", "Evaluation", "Benchmarks"],
    repo: "https://github.com/nihas14m-star/divy",
    visual: "execution",
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: ["Python", "Computer Vision", "Vision-language models", "AI Agents"],
  },
  {
    title: "AI tooling",
    items: ["GroundingDINO", "NVIDIA Nemotron", "OpenRouter"],
  },
  {
    title: "Development",
    items: ["JavaScript", "TypeScript", "Node.js", "React", "Next.js"],
  },
  {
    title: "Testing / tools",
    items: ["Git", "GitHub", "Playwright", "pytest"],
  },
  {
    title: "Data / storage",
    items: ["MySQL", "SQL", "JSON exports"],
  },
];

export const openSource = [
  {
    name: "n8n · PR #40833",
    type: "Open pull request · not merged",
    description:
      "Proposes allowing Execute Workflow Trigger to accept empty workflow input schemas and adds regression coverage. GitHub currently lists the pull request as open.",
    href: "https://github.com/n8n-io/n8n/pull/40833",
    marker: "01",
  },
  {
    name: "OmniRush · PR #325",
    type: "Open pull request · not merged",
    description:
      "Adds navigation for in-document anchors, relative workspace-file links, and external links in artifact Markdown previews. GitHub currently lists the pull request as open.",
    href: "https://github.com/omnirush-ai/omnirush-gui/pull/325",
    marker: "02",
  },
  {
    name: "OmniRush · PR #326",
    type: "Open pull request · not merged",
    description:
      "Switches surface Markdown code blocks to the existing light/dark Shiki themes and adds regression coverage. GitHub currently lists the pull request as open.",
    href: "https://github.com/omnirush-ai/omnirush-gui/pull/326",
    marker: "03",
  },
  {
    name: "CrewAI · PR #7802",
    type: "Open pull request · not merged",
    description:
      "Replaces PostgreSQL-specific NL2SQL schema introspection with SQLAlchemy reflection and adds SQLite/PostgreSQL regression coverage. GitHub currently lists the pull request as open.",
    href: "https://github.com/crewAIInc/crewAI/pull/7802",
    marker: "04",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2026",
    detail: "The SatQuery AI README identifies AstroNex 1 as the registered team for problem statement SIH26167.",
    marker: "01",
  },
  {
    title: "Public pull requests",
    detail: "Open pull requests in n8n, OmniRush, and CrewAI; no merged pull requests were found in the audit.",
    marker: "02",
  },
];

export const links = {
  github: "https://github.com/nihas14m-star",
  linkedin: "https://www.linkedin.com/in/nihas-mangu-631b66385/",
  email: "mailto:nihas14.m@gmail.com",
};
