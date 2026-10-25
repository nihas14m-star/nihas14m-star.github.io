"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  ExternalLink,
  GitBranch,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { achievements, experiences, links, openSource, projects, skillGroups, type Project } from "../lib/content";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Open source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ExternalAnchor({ href, children, className = "button button-quiet" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

function SystemVisual() {
  return (
    <div className="hero-visual" aria-label="A visual map of an AI system moving from input to evidence to execution">
      <div className="system-panel">
        <div className="system-chrome">
          <span>signal / 001</span>
          <span>system online</span>
        </div>
        <div className="system-map">
          <svg viewBox="0 0 540 320" role="img" aria-label="Connected system nodes for input, reasoning, tools, and output">
            <defs>
              <linearGradient id="signal-line" x1="0" x2="1">
                <stop offset="0" stopColor="#c7f36b" stopOpacity="0.2" />
                <stop offset="0.5" stopColor="#c7f36b" stopOpacity="0.95" />
                <stop offset="1" stopColor="#c7f36b" stopOpacity="0.15" />
              </linearGradient>
              <filter id="soft-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M82 230 C150 230 155 100 248 100 S355 240 438 115" fill="none" stroke="url(#signal-line)" strokeWidth="1.2" strokeDasharray="5 7" />
            <path d="M82 230 C185 260 230 235 280 175 S378 75 438 115" fill="none" stroke="#758071" strokeOpacity="0.45" strokeWidth="1" />
            <path d="M82 230 L248 100 L438 115" fill="none" stroke="#b2bea4" strokeOpacity="0.18" strokeWidth="1" />
            <g className="node">
              <circle cx="82" cy="230" r="23" fill="#111510" stroke="#c7f36b" strokeOpacity="0.7" />
              <circle cx="82" cy="230" r="4" fill="#c7f36b" filter="url(#soft-glow)" />
              <text x="82" y="274" fill="#a7ada1" fontSize="10" textAnchor="middle" fontFamily="monospace">INPUT</text>
            </g>
            <g className="node">
              <circle cx="248" cy="100" r="30" fill="#111510" stroke="#c7f36b" strokeOpacity="0.75" />
              <circle cx="248" cy="100" r="6" fill="#c7f36b" filter="url(#soft-glow)" />
              <text x="248" y="55" fill="#a7ada1" fontSize="10" textAnchor="middle" fontFamily="monospace">REASON</text>
            </g>
            <g className="node">
              <circle cx="280" cy="175" r="17" fill="#101313" stroke="#6e8e9e" strokeOpacity="0.8" />
              <circle cx="280" cy="175" r="3.5" fill="#98c9dc" />
              <text x="280" y="209" fill="#6d746c" fontSize="9" textAnchor="middle" fontFamily="monospace">TOOLS</text>
            </g>
            <g className="node">
              <circle cx="438" cy="115" r="28" fill="#111510" stroke="#c7f36b" strokeOpacity="0.7" />
              <circle cx="438" cy="115" r="5" fill="#c7f36b" filter="url(#soft-glow)" />
              <text x="438" y="70" fill="#a7ada1" fontSize="10" textAnchor="middle" fontFamily="monospace">EVIDENCE</text>
            </g>
            <text x="22" y="25" fill="#6d746c" fontSize="9" fontFamily="monospace">OBSERVABLE EXECUTION / 04 NODES</text>
          </svg>
          <div className="system-legend">
            <span className="legend-item"><i className="legend-dot" /> live signal</span>
            <span>human in the loop</span>
          </div>
        </div>
      </div>
      <div className="hero-note">
        <strong>BUILD / THINK / SHIP</strong>
        <span>Interfaces for intelligence that stay legible under pressure.</span>
      </div>
    </div>
  );
}

function SatelliteVisual() {
  return (
    <div className="flagship-visual" aria-hidden="true">
      <div className="satellite-grid" />
      <div className="satellite-orbit" />
      <div className="satellite-pin">VLM</div>
      <div className="satellite-query">
        <strong>QUERY / 01</strong>
        Which fields changed between passes?
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousActiveElement?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <div className="project-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <button className="dialog-close" ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close project details">
          <X size={17} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <div className="eyebrow">{project.eyebrow}</div>
        <h2 className="dialog-title" id="project-dialog-title">{project.name}</h2>
        <p className="dialog-lede">{project.summary}</p>
        <div className="project-tags">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <div className="dialog-grid">
          <div className="dialog-block">
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="dialog-block">
            <h3>How it works</h3>
            <p>{project.approach}</p>
          </div>
          <div className="dialog-block">
            <h3>My contribution</h3>
            <p>{project.contribution}</p>
          </div>
          <div className="dialog-block">
            <h3>Status</h3>
            <p>{project.status}</p>
          </div>
        </div>
        <div className="dialog-footer">
          {project.repo ? <ExternalAnchor href={project.repo}>View repository</ExternalAnchor> : <span className="micro-label">Repository link to add</span>}
          {project.demo ? <ExternalAnchor href={project.demo}>Open demo</ExternalAnchor> : <span className="micro-label">Demo link to add</span>}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Nihas home">
            <span className="wordmark-mark">N</span>
            <span>Nihas</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <button className="menu-button" type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? <X size={18} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={18} strokeWidth={1.8} aria-hidden="true" />}
          </button>
        </div>
        <div className="mobile-nav" id="mobile-navigation" data-open={mobileOpen}>
          <div className="container mobile-nav-inner">
            <nav className="mobile-nav-list" aria-label="Mobile navigation">
              {navItems.map((item) => <a className="mobile-nav-link" href={item.href} key={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>)}
            </nav>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="status-dot" /> AI systems / developer tools / useful software</div>
              <h1 className="hero-title" id="hero-title">Nihas</h1>
              <p className="hero-subtitle">AI/ML Engineer &amp; Builder</p>
              <p className="hero-description">I build AI systems, intelligent agents, and developer tools that make complex work feel clearer, more observable, and more human.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>
                <a className="text-link" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" /></a>
                <a className="text-link" href={links.linkedin}>LinkedIn <span className="micro-label">add URL</span></a>
                <a className="text-link" href={links.resume}>Resume <span className="micro-label">add PDF</span></a>
              </div>
            </div>
            <SystemVisual />
          </div>
          <div className="scroll-cue">Scroll to explore</div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Selected work</div>
              <div>
                <h2 className="section-title" id="work-title">Projects are the product.</h2>
                <p className="section-intro">A small set of systems I am actively shaping — each one an exercise in making intelligence useful, legible, and worth returning to.</p>
              </div>
            </div>

            <article className="flagship">
              <div className="flagship-copy">
                <div className="eyebrow">01 / flagship project</div>
                <h3 className="flagship-title">SatQuery AI</h3>
                <p className="flagship-summary">An AI-powered satellite intelligence system designed around natural-language interaction with satellite imagery and geospatial information.</p>
                <div className="project-tags">
                  {projects[0].tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <div className="flagship-meta">
                  <div className="meta-block"><small>Focus</small><span>Evidence-first VLM workflows</span></div>
                  <div className="meta-block"><small>Status</small><span>Active build · SIH 2026</span></div>
                </div>
                <button className="button button-primary" type="button" onClick={() => setSelectedProject(projects[0])} style={{ marginTop: "2rem" }}>Explore case study <MoveUpRight size={14} strokeWidth={1.8} aria-hidden="true" /></button>
              </div>
              <SatelliteVisual />
            </article>

            <div className="project-list" aria-label="Other selected projects">
              {projects.slice(1).map((project) => (
                <button className="project-row" type="button" key={project.name} onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.name}`}>
                  <span className="project-index">{project.index}</span>
                  <div>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-eyebrow">{project.eyebrow}</p>
                  </div>
                  <div>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  </div>
                  <span className="project-open" aria-hidden="true"><ChevronRight size={16} strokeWidth={1.6} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="working-title">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Working principles</div>
              <div>
                <h2 className="section-title" id="working-title">Useful beats impressive.</h2>
                <p className="section-intro">The common thread across the work is not a particular model. It is the design of systems people can understand, steer, and trust.</p>
              </div>
            </div>
            <div className="insight-grid">
              <article className="insight-card"><div className="insight-card-header"><span className="insight-mark">01</span><Circle size={14} color="#c7f36b" strokeWidth={1.5} /></div><h3 className="insight-title">Make the invisible visible.</h3><p className="insight-description">Expose the path from input to reasoning to outcome, especially when agents and tools are involved.</p></article>
              <article className="insight-card"><div className="insight-card-header"><span className="insight-mark">02</span><Check size={15} color="#98c9dc" strokeWidth={1.6} /></div><h3 className="insight-title">Keep the human in control.</h3><p className="insight-description">Automation should remove friction without removing agency. The best next step is often an informed choice.</p></article>
              <article className="insight-card"><div className="insight-card-header"><span className="insight-mark">03</span><ArrowDownRight size={15} color="#e8b86d" strokeWidth={1.6} /></div><h3 className="insight-title">Build for the real workflow.</h3><p className="insight-description">Start with the job to be done, then shape the model, interface, and infrastructure around it.</p></article>
              <article className="insight-card"><div className="insight-card-header"><span className="insight-mark">04</span><MoveUpRight size={15} color="#e997a2" strokeWidth={1.6} /></div><h3 className="insight-title">Ship the small loop.</h3><p className="insight-description">A focused, usable slice teaches more than a wide surface area with no point of view.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="open-source" aria-labelledby="open-source-title">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Open source</div>
              <div><h2 className="section-title" id="open-source-title">Work in public.</h2><p className="section-intro">Personal projects show taste. Contributions to established codebases show how I work when the constraints are real.</p></div>
            </div>
            <div className="open-source-layout">
              <div className="side-note"><span className="micro-label">Contribution log</span><p>Focused fixes, careful validation, and the patience to understand an existing system before changing it.</p><a className="text-link" href={links.github} target="_blank" rel="noreferrer">Browse GitHub <ExternalLink size={14} strokeWidth={1.7} aria-hidden="true" /></a></div>
              <div className="timeline-list">
                {openSource.map((item) => <a className="timeline-item" href={item.href} target="_blank" rel="noreferrer" key={item.name}><span className="timeline-marker">{item.marker}</span><div><h3 className="timeline-title">{item.name}</h3><p className="timeline-type">{item.type}</p></div><p className="timeline-copy">{item.description}</p><span className="timeline-arrow"><ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" /></span></a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading"><div className="section-kicker">Experience</div><div><h2 className="section-title" id="experience-title">Still in motion.</h2><p className="section-intro">Early experience, treated as a record of what I have been close to — not a list of claims that need inflating.</p></div></div>
            <div className="experience-list">
              {experiences.map((item) => <article className="experience-item" key={item.company}><div><h3 className="experience-company">{item.company}</h3><p className="experience-role">{item.role}</p></div><p className="experience-copy">{item.description}</p><p className="experience-period">{item.period}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section skills-section" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading"><div className="section-kicker">The toolkit</div><div><h2 className="section-title" id="skills-title">Enough surface area to build.</h2><p className="section-intro">A deliberately short list of technologies that appear in the work — not a wall of every tool I have ever opened.</p></div></div>
            <div className="skills-layout"><div className="side-note"><span className="micro-label">How I choose tools</span><p>The stack should serve the product. I care more about a clear boundary between components than collecting technologies.</p></div><div className="skills-list">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-items">{group.items.map((skill) => <span className="skill-item" key={skill}>{skill}</span>)}</div></div>)}</div></div>
          </div>
        </section>

        <section className="section" aria-labelledby="achievements-title">
          <div className="container">
            <div className="section-heading"><div className="section-kicker">Selected signals</div><div><h2 className="section-title" id="achievements-title">Proof, with context.</h2><p className="section-intro">A few milestones that matter because of the work behind them, not because they can be turned into badges.</p></div></div>
            <div className="timeline-list">{achievements.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-marker">{item.marker}</span><div><h3 className="timeline-title">{item.title}</h3></div><p className="timeline-copy">{item.detail}</p><span className="timeline-arrow"><Check size={15} strokeWidth={1.7} aria-hidden="true" /></span></div>)}</div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="section-heading"><div className="section-kicker">About</div><div><h2 className="section-title" id="about-title">The person behind the systems.</h2></div></div>
            <div className="about-layout"><p className="about-statement">I am interested in the space where <em>intelligence becomes usable.</em></p><div className="about-copy"><p>I am building toward a career in AI/ML engineering by making systems that connect models to real work: satellite analysis, agentic execution, browser-native assistance, and developer research.</p><p>I am learning in public — by shipping small products, reading the constraints inside mature codebases, and paying attention to the interface between a model&apos;s capability and a person&apos;s attention.</p><div className="about-principles"><div className="principle"><strong>Curious</strong><span>Ask better questions</span></div><div className="principle"><strong>Practical</strong><span>Ship the useful loop</span></div><div className="principle"><strong>Precise</strong><span>Make the details count</span></div></div></div></div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container"><div className="contact-panel"><div className="contact-layout"><h2 className="contact-title" id="contact-title">Let&apos;s make something useful.</h2><div><p className="contact-copy">If you are building an AI product, a developer tool, or a team that cares about how software feels to use, I would like to hear what you are working on.</p><div className="contact-links"><a className="button button-primary" href="mailto:add-your-email@example.com">Start a conversation <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" /></a><a className="button button-quiet" href={links.github} target="_blank" rel="noreferrer"><GitBranch size={14} strokeWidth={1.8} aria-hidden="true" /> GitHub</a><a className="button button-quiet" href={links.linkedin}>LinkedIn <span className="micro-label">add URL</span></a></div></div></div></div></div>
        </section>
      </main>

      <footer className="container footer"><p>© {new Date().getFullYear()} Nihas. Built with intention.</p><div className="footer-links"><a href="#top">Back to top</a><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></div></footer>

      {selectedProject ? <ProjectDialog project={selectedProject} onClose={closeProject} /> : null}
    </div>
  );
}
