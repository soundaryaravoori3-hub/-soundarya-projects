/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Content rule for this site: only verified facts from your resume. Do not
 *  add achievements, employers, dates, metrics, qualifications or technical
 *  skills that you cannot stand behind in an interview.
 *
 *  Fields marked "optional" can be left out. The site hides them cleanly.
 */

export type Metric = { value: string; label: string; source?: string };

export const site = {
  name: 'Soundarya Ravoori',
  initials: 'SR',
  title: 'Soundarya Ravoori | Product Management, Operations & Project Delivery',
  description:
    'MBA-qualified professional with experience across product delivery, project coordination and operations. Currently IT / MES Assistant Manager at Kryon Technology.',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* ── Current role (used in the hero card, About and Experience) ───────────── */
export const currentRole = {
  title: 'IT / MES Assistant Manager',
  organisation: 'Kryon Technology',
};

/* ── Home ─────────────────────────────────────────────────────────────────── */
export const hero = {
  positioning: ['Product Management', 'Operations', 'Project Delivery'],
  headline: 'I turn product plans and operational priorities into delivered results.',
  intro:
    'MBA-qualified professional with experience across product delivery, project coordination and operations. Currently IT / MES Assistant Manager at Kryon Technology, working across SAP, MES and manufacturing technology.',
  targetRoles: ['Product Manager', 'Operations Manager', 'Project Manager'],
  qualifications: 'B.Tech, Computer Science Engineering · MBA, Project Management',
  // Career highlights from previous roles. Each shows its source employer.
  highlights: [
    { value: '4', label: 'Concurrent software products delivered on schedule', source: 'Station-S' },
    { value: '30%', label: 'Reduction in cross-team blockers', source: 'Station-S' },
    { value: '50+', label: 'Appointments a month with zero scheduling errors', source: 'Sannie Medical' },
  ] as Metric[],
  // Optional: add a portrait at public/images/profile.jpg and set this to 'images/profile.jpg'.
  photo: '',
};

/* ── About ────────────────────────────────────────────────────────────────── */
export const about = {
  title: 'Technical foundation, delivery experience.',
  paragraphs: [
    'I combine a B.Tech in Computer Science Engineering with an MBA in Project Management.',
    'My experience spans product management, project coordination and operations, and my current role is in IT and MES for manufacturing technology.',
  ],
  facts: [
    { label: 'Product', value: 'Roadmaps, priorities, milestones, dependencies and cross-functional handovers' },
    { label: 'Project delivery', value: 'Concurrent workstreams, requirements, risk logs and issue tracking' },
    { label: 'Operations', value: 'Production oversight, appointment scheduling and administrative records' },
  ],
};

/* ── Experience ───────────────────────────────────────────────────────────── */
export type Role = {
  title: string;
  organisation: string;
  period?: string; // optional: add only a verified date range
  status?: string; // optional highlight, e.g. "Current"
  summary?: string; // optional
  metrics?: Metric[]; // optional
  points?: string[]; // optional
  tags?: string[]; // optional
  link?: { label: string; href: string }; // optional
};

export const experience: Role[] = [
  {
    ...currentRole,
    status: 'Current',
    summary: 'Current IT / MES role, working across SAP, MES and manufacturing technology.',
    points: ['Builds on earlier MES and SAP production experience at Tesco.'],
    tags: ['IT', 'MES', 'SAP', 'Manufacturing technology'],
  },
  {
    title: 'Product Manager',
    organisation: 'Station-S',
    period: 'March 2025 – January 2026',
    points: [
      'Managed roadmaps, priorities, milestones, dependencies and cross-functional handovers across concurrent software products.',
      'Coordinated design, development and strategy teams.',
    ],
    tags: ['Product roadmaps', 'Jira', 'Asana', 'Notion'],
    link: { label: 'Results in the case study', href: '#projects' },
  },
  {
    title: 'Project Coordinator',
    organisation: 'Sannie Medical, Wrexham, UK',
    period: 'September 2022 – March 2025',
    metrics: [
      { value: '50+', label: 'Patient appointments coordinated a month' },
      { value: '0', label: 'Scheduling errors' },
      { value: '4', label: 'Concurrent workstreams' },
      { value: '40', label: 'Team members' },
    ],
    points: [
      'Gathered staff requirements and supported software rollout coordination.',
      'Maintained risk logs, issue trackers, follow-ups and meeting minutes.',
      'Maintained financial and administrative records using Sage.',
    ],
    tags: ['Project coordination', 'Requirements', 'Risk & issue management', 'Sage'],
  },
  {
    title: 'Assistant Manager',
    organisation: 'Tesco',
    period: 'February 2021 – September 2022',
    points: [
      'Production oversight across manufacturing activities.',
      'Production status monitoring in MES.',
      'Production tracking in SAP.',
    ],
    tags: ['Production oversight', 'Manufacturing', 'MES', 'SAP'],
  },
];

/* ── Selected work ────────────────────────────────────────────────────────── */
export type Project = {
  title: string;
  category: string;
  challenge?: string; // optional
  actions?: string[]; // optional
  results?: Metric[]; // optional: verified results only
  tools?: string[]; // optional
};

export const projects: Project[] = [
  {
    title: 'Product Delivery & Roadmap Coordination',
    category: 'Product Management · Station-S',
    challenge:
      'Keep four software products moving at the same time, with design, development and strategy teams depending on each other.',
    actions: [
      'Structured workstreams.',
      'Managed priorities and dependencies across products.',
      'Maintained roadmaps and monitored milestones.',
      'Escalated delivery risks.',
      'Coordinated cross-functional handovers.',
    ],
    results: [
      { value: '4', label: 'Products delivered on schedule' },
      { value: '30%', label: 'Fewer cross-team blockers' },
      { value: '20', label: 'Team members in delivery' },
    ],
    tools: ['Jira', 'Asana', 'Notion'],
  },
];

/* ── Manufacturing technology ─────────────────────────────────────────────── */
export const manufacturing = {
  lead: 'IT / MES is my current role, building on earlier SAP and MES production experience at Tesco.',
  path: [
    { step: 'Computer Science', detail: 'B.Tech, Computer Science Engineering' },
    { step: 'Product, project & operations', detail: 'Station-S, Sannie Medical and Tesco' },
    { step: 'IT / MES', detail: 'IT / MES Assistant Manager, Kryon Technology', current: true },
  ],
  systems: [
    { name: 'SAP & MES', where: 'Current IT / MES role' },
    { name: 'MES', where: 'Production status monitoring, Tesco' },
    { name: 'SAP', where: 'Production tracking, Tesco' },
  ],
  bridges: [
    { from: 'Cross-functional coordination', to: 'Aligning IT, operations and production teams' },
    { from: 'Roadmaps and milestone tracking', to: 'Planning system enhancements and rollouts' },
    { from: 'Software rollout coordination and issue tracking', to: 'Supporting system changes on the shop floor' },
  ],
};

/* ── Skills & tools ───────────────────────────────────────────────────────── */
// Every skill must trace to Kryon Technology, Station-S, Sannie Medical or Tesco.
export const skills = [
  {
    group: 'Product & delivery',
    source: 'Station-S',
    items: [
      'Product roadmaps',
      'Prioritisation',
      'Milestone tracking',
      'Dependency management',
      'Cross-functional coordination',
      'Cross-functional handovers',
      'Delivery risk escalation',
    ],
  },
  {
    group: 'Project coordination & operations',
    source: 'Sannie Medical · Tesco',
    items: [
      'Requirements gathering',
      'Risk & issue tracking',
      'Workstream coordination',
      'Software rollout coordination',
      'Appointment scheduling',
      'Financial & administrative records',
      'Production oversight',
    ],
  },
  {
    group: 'Manufacturing & systems',
    source: 'Kryon Technology · Tesco',
    items: ['SAP', 'MES', 'Production status monitoring', 'Production tracking'],
  },
];

export const tools: { name: string; use: string; source: string }[] = [
  { name: 'Jira', use: 'Roadmaps and delivery tracking', source: 'Station-S' },
  { name: 'Asana', use: 'Roadmaps and task coordination', source: 'Station-S' },
  { name: 'Notion', use: 'Roadmaps and documentation', source: 'Station-S' },
  { name: 'Sage', use: 'Financial and administrative records', source: 'Sannie Medical' },
];

/* ── Education ────────────────────────────────────────────────────────────── */
export const education = [
  { degree: 'MBA in Project Management', institution: 'Wrexham University', country: 'United Kingdom' },
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'R.M.K. College of Engineering and Technology',
    country: 'India',
  },
];

/* ── Contact ──────────────────────────────────────────────────────────────── */
export const contact = {
  heading: "Let's talk.",
  text: 'Open to conversations with recruiters and hiring teams about Product Manager, Operations Manager and Project Manager roles.',
  // Add your details here when ready; the cards appear automatically. Examples:
  //   { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  //   { label: 'LinkedIn', value: 'linkedin.com/in/your-name', href: 'https://www.linkedin.com/in/your-name' },
  //   { label: 'Location', value: 'City, Country' },
  channels: [] as { label: string; value: string; href?: string }[],
  // Optional: put your CV at public/Soundarya-Ravoori-CV.pdf and set this to
  // 'Soundarya-Ravoori-CV.pdf' to show a Download CV button.
  resume: '',
};
