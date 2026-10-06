import { useState } from "react";

const linkedin = "https://www.linkedin.com/in/utsav-singh-985b64246";
const github = "https://github.com/utsav220";
const email = "utsavsingh2201@gmail.com";
const recruiterEmail = `mailto:${email}?subject=${encodeURIComponent("SDET / QA Automation opportunity")}&body=${encodeURIComponent("Hi Utsav,\n\nI’d like to connect with you about an opportunity. Please let me know a convenient time to talk.\n\nBest,\n")}`;
const resumeUrl = `${import.meta.env.BASE_URL}Utsav_Singh.pdf`;
const nav = ["About", "Expertise", "Projects", "Skills", "Resume", "Contact"];
const skills = {
  "Test automation": ["API testing", "Backend testing", "Regression", "Functional", "Integration", "End-to-end", "Data-driven testing", "Automation frameworks"],
  "Performance engineering": ["Locust", "QPS / RPS", "Load & stress testing", "Latency analysis", "P95 / P99", "Throughput", "Token-based testing"],
  "Observability": ["Splunk", "New Relic", "Grafana", "Prometheus", "Log analysis", "Alerting", "Incident analysis", "Production debugging"],
  "CI/CD & engineering": ["Jenkins", "Git", "GitHub", "CI/CD pipelines", "Automated regression", "Release validation"],
  "Programming & systems": ["Java", "Python", "SQL", "REST APIs", "JSON", "Elasticsearch", "Redis", "Kubernetes", "Docker"],
};
const projects = [
  { n: "01", title: "API & backend automation", desc: "Build confidence in service behavior with request and response validation, integration coverage, negative paths, and regression checks.", tags: ["Java", "Python", "REST APIs", "JSON", "CI/CD"], art: "api" },
  { n: "02", title: "Selenium + Java UI automation", desc: "Automate browser workflows and regression scenarios with Selenium WebDriver and Java. Organize tests for reuse, readable checks, and dependable execution across common user journeys.", tags: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Regression"], art: "selenium" },
  { n: "03", title: "Performance testing with Locust", desc: "Model realistic traffic with configurable users, spawn rates, parameterized payloads, and think time. Read throughput, error rates, and tail latency together.", tags: ["Locust", "QPS / RPS", "P95 / P99", "Load testing"], art: "load" },
  { n: "04", title: "Production observability", desc: "Correlate logs and metrics to investigate latency increases, HTTP failures, timeouts, dependency issues, and performance degradation.", tags: ["Splunk", "New Relic", "Grafana", "Prometheus"], art: "observe" },
  { n: "05", title: "Search & distributed systems quality", desc: "Quality engineering for search and intent flows across APIs and distributed services, with attention to regression, dependency behavior, and production signals.", tags: ["Elasticsearch", "Redis", "APIs", "Distributed services"], art: "search" },
];
const approach = [
  ["01", "Automate", "Turn repetitive validation into reliable automated coverage."],
  ["02", "Measure", "Use latency, throughput, error rates, and observability data to understand system behavior."],
  ["03", "Investigate", "Trace failures through logs, dependencies, and request flows to identify root causes."],
  ["04", "Improve", "Convert production learnings into stronger tests, monitoring, and release confidence."],
];
const flow = ["Test failure", "Reproduce", "Check logs", "Analyze metrics", "Find dependency", "Root cause", "Fix & validate", "Prevent regression"];
const techTools = [
  ["Se", "Selenium", "#54bd54"], ["Py", "Python", "#ffd343"], ["Lo", "Locust", "#42c99a"], ["Je", "Jenkins", "#d66a4a"],
  ["Sp", "Splunk", "#e5edf5"], ["NR", "New Relic", "#16c7a0"], ["Gr", "Grafana", "#ff8b32"], ["Pr", "Prometheus", "#e64d45"],
  ["K8", "Kubernetes", "#4389ed"], ["Gi", "Git", "#f05032"], ["Ja", "Java", "#ee6258"], ["SQL", "SQL", "#6db6ff"],
  ["RA", "REST Assured", "#67c587"], ["Pw", "Playwright", "#8cdd88"], ["TG", "TestNG", "#ba8aff"], ["Mv", "Maven", "#dd6d56"],
  ["ES", "Elasticsearch", "#52c9c0"], ["Re", "Redis", "#e94b4b"], ["Dk", "Docker", "#2496ed"], ["GH", "GitHub", "#d9e3f2"],
  ["JS", "JSON / REST APIs", "#f4d64e"], ["CI", "CI/CD", "#76adff"], ["Pr", "Performance testing", "#7fc7ff"], ["Obs", "Observability", "#c3a1ff"],
];

function TechTicker() {
  const [paused, setPaused] = useState(false);
  return <section className={`tech-ticker${paused ? " is-paused" : ""}`} aria-label="Technology stack">
    <div className="ticker-heading"><span><i /> TECHNOLOGY STACK</span><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Play tools" : "Pause tools"}<b>{paused ? "▶" : "Ⅱ"}</b></button></div>
    <div className="ticker-window"><div className="ticker-track">{[0, 1].map((copy) => <div className="ticker-group" key={copy} aria-hidden={copy === 1}>{techTools.map(([mark, label, color], i) => <span className="tool-pill" key={`${copy}-${label}-${i}`}><i style={{ "--brand": color }}>{mark}</i>{label}</span>)}</div>)}</div></div>
  </section>;
}

function Icon({ name }) {
  if (name === "arrow") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M4.2 7.2H1.5V18h2.7V7.2ZM2.9 5.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM18.5 11.8c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.7 1-3.1 1.7V7.2H8.5V18h2.7v-5.4c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V18h2.7l.8-6.2Z" /></svg>;
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 .8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.4v-1.6c-2.5.5-3-.6-3.2-1.1-.1-.3-.6-1.1-1-1.3-.3-.2-.7-.7 0-.7.6 0 1.1.6 1.3.9.8 1.3 2.1.9 2.9.7.1-.6.4-1 .7-1.2-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.2-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.5 5 .4.3.8 1 .8 2v3.1c0 .2.2.5.6.4A9.2 9.2 0 0 0 10 .8Z" /></svg>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="wordmark" href="#home">US<span>.</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}<span>{open ? "−" : "+"}</span></button><nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">{nav.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setOpen(false)}>{item}</a>)}<a className="nav-linkedin" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a></nav></header>;
}

function Portrait() {
  return <div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}utsav-singh-cutout.png`} alt="Portrait of Utsav Singh" onError={(e) => { e.currentTarget.style.display = "none"; }} /><div className="portrait-fallback"><span>US</span><small>SOFTWARE QUALITY ENGINEERING</small></div></div>;
}

function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <section className="hero section-wrap" id="home"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> HELLO, I’M · SDET</p><h1>Utsav<br /><em>Singh</em></h1><p className="hero-role">SDET <i>/</i> QA <i>/</i> Performance Testing <i>/</i><br className="role-break" /> Observability &amp; Monitoring</p><p className="hero-intro">Building reliable, high-performance software through automation, performance testing, and data-driven quality engineering.</p><div className="hero-actions"><a className="button button-primary" href="#projects"><span aria-hidden="true">➤</span> View my work <Icon name="arrow" /></a><a className="button button-text" href={resumeUrl} target="_blank" rel="noreferrer">View resume <span>↗</span></a></div><div className="hero-social"><a href={linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href={github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a><a href={`mailto:${email}`}>✉ Email</a></div></div><div className="hero-visual"><div className="visual-grid" aria-hidden="true" /><svg className="signal-wave" viewBox="0 0 900 620" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="signalStroke" x1="0" x2="1"><stop offset="0" stopColor="#4aa5ff" stopOpacity="0"/><stop offset=".45" stopColor="#8bd0ff" stopOpacity=".8"/><stop offset="1" stopColor="#1885ff" stopOpacity="0"/></linearGradient></defs><path d="M-50 395 C100 260 180 525 325 385 S540 245 690 355 825 430 960 300"/><path d="M-50 425 C90 290 205 550 345 415 S555 275 705 385 835 455 960 330"/><path d="M-50 455 C90 320 220 575 365 445 S575 305 725 415 850 485 960 360"/><path d="M-50 485 C90 350 235 600 385 475 S595 335 745 445 865 515 960 390"/><circle cx="335" cy="383" r="4"/><circle cx="698" cy="356" r="4"/><circle cx="537" cy="320" r="3"/></svg><div className="hero-disc" /><Portrait /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="float-card float-performance"><span className="float-icon">▥</span><b>Performance</b><small>Testing</small></div><div className="float-card float-automation"><span className="float-icon">⚙</span><b>Automation</b></div><div className="float-card float-monitoring"><span className="float-icon">⌕</span><b>Monitoring</b><small>&amp; analytics</small></div><div className="float-card float-devops"><span className="float-icon">◌</span><b>DevOps</b><small>&amp; CI/CD</small></div><div className="hero-caption"><span>QUALITY IS A SYSTEM</span><span>NOT A FINAL CHECK.</span></div><div className="hero-coordinate">LOW-LATENCY / SIGNAL FLOW</div></div><a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a><div className="hero-index">PORTFOLIO&nbsp; / &nbsp;2026</div></section>

    <section className="capability-strip section-wrap" aria-label="Core capabilities">{[["⌘", "Test automation", "API, UI & end-to-end"], ["▥", "Performance testing", "Locust, QPS & scalability"], ["⌕", "Monitoring & debugging", "Splunk, New Relic, Grafana"], ["◌", "CI/CD & DevOps", "Jenkins, Kubernetes, Git"]].map(([icon, title, body]) => <article className="capability-card" key={title}><span className="capability-icon">{icon}</span><h2>{title}</h2><p>{body}</p></article>)}</section>
    <TechTicker />

    <section className="about section-wrap section-pad" id="about"><div className="section-label"><span>01</span> / ABOUT</div><div className="about-layout"><h2>Quality lives<br />in the <em>details.</em></h2><div className="about-copy"><p className="lead-copy">I work across the software quality lifecycle—from test automation and API validation to performance, observability, incident analysis, and release confidence.</p><p>I enjoy going beyond test execution: investigating why systems fail, analyzing logs and latency, identifying bottlenecks, and working with engineering teams to improve reliability. For me, a failure is a starting point for evidence-led debugging.</p><div className="about-facts"><div><span>FOCUS</span><b>Automation · Backend · Reliability</b></div><div><span>APPROACH</span><b>Measure, investigate, improve</b></div></div></div></div></section>

    <section className="experience section-wrap section-pad" id="experience"><div className="section-label"><span>02</span> / AREAS OF EXPERTISE</div><div className="experience-heading"><h2>Engineering across<br /><em>the lifecycle.</em></h2><p>Areas of work</p></div><div className="timeline">{[["Automation & regression", "Develop and maintain regression coverage; investigate intermittent failures and distinguish application issues from infrastructure, dependency, data, or test issues."], ["Performance engineering", "Design and execute QPS/RPS tests with Locust. Review average and tail latency, throughput, error rates, and timeout behavior."], ["Production monitoring", "Use logs, metrics, and request-level analysis to investigate production behavior, alerts, and incidents."], ["Backend & distributed systems", "Test REST services and distributed search flows; investigate HTTP errors, service latency, and dependency failures."]].map(([title, body], i) => <article className="timeline-item" key={title}><span className="timeline-no">0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div><span className="timeline-mark">↗</span></article>)}</div></section>

    <section className="projects section-wrap section-pad" id="projects"><div className="section-label"><span>03</span> / SELECTED WORK</div><div className="projects-heading"><div><h2>Systems thinking.<br /><em>Practical quality.</em></h2></div><p>Representative work areas<br />and engineering interests</p></div><div className="project-grid">{projects.map((p) => <article className="project-card" key={p.n}><div className={`project-art ${p.art}`} aria-hidden="true"><span className="art-label">{p.art === "api" ? "REQUEST → RESPONSE" : p.art === "selenium" ? "BROWSER / JAVA TESTS" : p.art === "load" ? "TRAFFIC / LATENCY" : p.art === "observe" ? "SIGNAL / TRACE" : "QUERY / PIPELINE"}</span><div className="art-graphic"><i /><i /><i /><i /><i /></div><span className="art-code">{p.n} — SYSTEM MAP</span></div><div className="project-copy"><div className="project-topline"><span>{p.n}</span><span>QUALITY ENGINEERING</span></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tag-list">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

    <section className="approach section-wrap section-pad"><div className="section-label"><span>04</span> / METHOD</div><div className="approach-heading"><h2>How I approach<br /><em>quality.</em></h2><p>A continuous loop from meaningful coverage to better production signals.</p></div><div className="approach-grid">{approach.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="flow-wrap"><p className="flow-title">FROM FAILURE TO ROOT CAUSE</p><div className="flow">{flow.map((step, i) => <div className="flow-step" key={step}><span>{String(i + 1).padStart(2, "0")}</span><b>{step}</b>{i < flow.length - 1 && <i>→</i>}</div>)}</div></div></section>

    <section className="skills section-wrap section-pad" id="skills"><div className="section-label"><span>05</span> / TOOLKIT</div><div className="skills-heading"><h2>Tools for the<br /><em>whole picture.</em></h2><p>Technology organized around the problems it helps solve.</p></div><div className="skills-layout">{Object.entries(skills).map(([category, items], i) => <article className="skill-group" key={category}><div className="skill-group-head"><span>0{i + 1}</span><h3>{category}</h3></div><div className="skill-tags">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

    <section className="learning section-wrap"><div><div className="section-label"><span>06</span> / CONTINUOUS LEARNING</div><h2>Always sharpening<br /><em>the craft.</em></h2></div><div className="learning-content"><p>Ongoing areas of study</p><div className="learning-tags">{["Advanced Java", "Python automation", "Performance engineering", "Query optimization", "Distributed systems", "Kubernetes", "Observability", "System reliability"].map((x) => <span key={x}>{x}</span>)}</div></div></section>

    <section className="resume-band section-wrap" id="resume"><div className="resume-mark">US<span>.</span></div><div><p className="eyebrow">TAKE THE NEXT STEP</p><h2>Want the detailed version?</h2><p>View my resume, technical skills, and experience.</p></div><a className="button button-light" href={resumeUrl} target="_blank" rel="noreferrer">View resume <Icon name="arrow" /></a></section>

    <section className="contact section-wrap section-pad" id="contact"><div className="section-label"><span>07</span> / CONTACT</div><div className="contact-layout"><div><p className="eyebrow">FOR RECRUITERS &amp; ENGINEERING TEAMS</p><h2>Let’s talk about<br /><em>quality.</em></h2></div><div className="contact-copy"><p>I’m open to conversations about SDET, QA Automation, Performance Engineering, and Quality Engineer roles. Email me the role details and a few times that work for you.</p><a className="recruiter-cta" href={recruiterEmail}>✉ <span>Email Utsav</span><strong>{email}</strong><Icon name="arrow" /></a><p className="contact-hint">Your email app opens with a ready-to-edit subject and message.</p><a className="contact-link" href={linkedin} target="_blank" rel="noreferrer"><span><Icon name="linkedin" /> Connect on LinkedIn</span><Icon name="arrow" /></a><a className="contact-link" href={github} target="_blank" rel="noreferrer"><span><Icon name="github" /> View my GitHub</span><Icon name="arrow" /></a></div></div></section>
  </main><footer className="footer section-wrap"><a className="wordmark" href="#home">US<span>.</span></a><span>Utsav Singh · SDET &amp; Quality Engineering</span><a href="#home">BACK TO TOP ↑</a></footer></>;
}

export default App;
