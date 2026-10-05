export const profile = {
  name: "AD",
  title: "SDET / Automation Test Engineer",
  email: "you@example.com",
  linkedin: "",
  github: "",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export const work = [
  {
    kicker: "Framework",
    title: "Modular Java test platform",
    body: "Page Object UI layer, reusable API specs, shared config, logging, and reporting. TestNG for execution, Maven for builds, Jenkins for CI. Authentication and setup live in one place so suite-wide changes don’t touch every test.",
    points: [
      "BaseTest lifecycle without copying setup",
      "Thread-safe driver handling for parallel runs",
      "Data isolated from test logic (JSON / DataProvider)",
    ],
  },
  {
    kicker: "API",
    title: "REST Assured service coverage",
    body: "Request specifications for base URL, headers, and auth. Assertions on status, business fields, headers, schema, and negative paths. Tokens stay out of source — CI secrets and environment config only.",
    points: [
      "Happy path + contract-style field checks",
      "Error codes and messages for negative cases",
      "DB spot-checks when the backend is the source of truth",
    ],
  },
  {
    kicker: "Stability",
    title: "Less flake, faster diagnosis",
    body: "Explicit waits over sleeps. Stable locators over absolute XPath. Independent data for parallel jobs. Screenshots and logs on failure so Jenkins red builds are explainable, not mystery timeouts.",
    points: [
      "Classify: app / env / data / test",
      "Local pass vs Jenkins fail environment diffs",
      "Stale elements: re-find, don’t sleep",
    ],
  },
  {
    kicker: "Production",
    title: "Observability in the loop",
    body: "Splunk, Grafana, and New Relic for production troubleshooting. Performance and QPS-related checks sit next to functional suites so load and correctness are not separate worlds.",
    points: [
      "Correlate test failure with service logs",
      "Dashboards for latency and error rate",
      "On-call style RCA, not screenshot-only bugs",
    ],
  },
];

export const stack = [
  {
    title: "Language & core",
    body: "Java, OOP, collections, exception handling, coding for SDET rounds",
  },
  {
    title: "UI automation",
    body: "Selenium WebDriver, Playwright, TestNG, Page Object Model, Grid / parallel",
  },
  {
    title: "API & data",
    body: "REST Assured, HTTP methods, auth, SQL joins and validation queries",
  },
  {
    title: "Pipeline",
    body: "Git, Maven, Jenkins parameterized suites, reports published in CI",
  },
  {
    title: "Quality engineering",
    body: "Risk-based testing, test pyramid, flaky-test cost, defect RCA",
  },
  {
    title: "Ops",
    body: "Splunk, Grafana, New Relic, performance / QPS-oriented checks",
  },
];

export const principles = [
  {
    n: "01",
    title: "Automate what hurts",
    body: "Regression and business-critical APIs first. UI where a user journey is high-risk. Not everything belongs in the browser.",
  },
  {
    n: "02",
    title: "Frameworks exist for the next engineer",
    body: "A good suite is one another SDET can extend without reading every utility. Hide waits, auth, and logging behind clear methods.",
  },
  {
    n: "03",
    title: "A red test is a clue",
    body: "I compare Java/browser versions, secrets, data, and network before I “fix” the assertion. Then I prove the root cause with evidence.",
  },
];

export const suiteSteps = [
  { status: "RUN", cls: "run", name: "checkout.queryService", ms: "—" },
  { status: "PASS", cls: "ok", name: "api.search.happyPath", ms: "412ms" },
  { status: "PASS", cls: "ok", name: "api.search.negativeAuth", ms: "188ms" },
  { status: "PASS", cls: "ok", name: "ui.regression.login", ms: "2.1s" },
  { status: "INFO", cls: "info", name: "splunk.correlate.traceId", ms: "ok" },
  { status: "PASS", cls: "ok", name: "perf.qps.smoke", ms: "1.4s" },
];
