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

export type Metric = { value: string; label: string };

export const site = {
  name: 'Soundarya Ravoori',
  initials: 'SR',
  title: 'Soundarya Ravoori | Product Management & Operations',
  description:
    'MBA-qualified Product and Operations Manager with experience across product delivery, operational planning, supplier coordination and manufacturing technology.',
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

/* ── Home ─────────────────────────────────────────────────────────────────── */
export const hero = {
  positioning: ['Product Management', 'Operations', 'Project Delivery', 'Manufacturing Technology'],
  headline: 'I turn product plans and operational priorities into delivered results.',
  intro:
    'MBA-qualified Product and Operations Manager with experience across product delivery, operational planning, supplier coordination and manufacturing technology. I’ve managed concurrent product workstreams, coordinated cross-functional teams and worked with SAP and MES environments.',
  targetRoles: ['Product Manager', 'Operations Manager', 'Project Manager', 'Manufacturing Technology'],
  qualifications: 'MBA, Project Management · B.Tech, Computer Science Engineering',
  current: 'Product Manager / Operations Manager, Mollington Banastre',
  // Headline figures shown in the hero card. Only use verified numbers.
  highlights: [
    { value: '4', label: 'Concurrent software products delivered on schedule' },
    { value: '30%', label: 'Reduction in cross-team blockers' },
    { value: '40', label: 'Team members across four concurrent workstreams' },
    { value: '50+', label: 'Appointments a month with zero scheduling errors' },
  ] as Metric[],
  // Optional: add a portrait at public/images/profile.jpg and set this to 'images/profile.jpg'.
  photo: '',
};

/* ── About ────────────────────────────────────────────────────────────────── */
export const about = {
  title: 'Product, operations and project delivery.',
  paragraphs: [
    'I work where planning meets execution: turning roadmaps, priorities and operational plans into coordinated delivery across teams.',
    'My background combines a B.Tech in Computer Science Engineering with an MBA in Project Management, applied across software product delivery, operations and purchasing, and project coordination.',
  ],
  facts: [
    { label: 'Product', value: 'Roadmaps, priorities, milestones, dependencies and cross-functional handovers' },
    { label: 'Operations', value: 'SAP purchasing, supplier coordination, invoice verification and SOP compliance' },
    { label: 'Project delivery', value: 'Concurrent workstreams, requirements, risk logs and issue tracking' },
  ],
};

/* ── Experience ───────────────────────────────────────────────────────────── */
export type Role = {
  title: string;
  organisation: string;
  period: string;
  status?: string; // optional highlight, e.g. "Current"
  metrics?: Metric[]; // optional
  points?: string[]; // optional
  tags?: string[]; // optional
};

export const experience: Role[] = [
  {
    title: 'Product Manager / Operations Manager',
    organisation: 'Mollington Banastre, UK',
    period: 'March 2026 – Present',
    status: 'Current',
    points: [
      'Manage purchasing in SAP.',
      'Coordinate suppliers and follow-ups.',
      'Verify invoices against purchase orders and delivery notes.',
      'Coordinate daily operational coverage for 10 team members.',
      'Maintain SOP compliance and corrective-action documentation.',
      'Resolve operational issues.',
    ],
    tags: ['SAP', 'Purchasing', 'Supplier Coordination', 'Purchase Orders', 'Invoice Verification', 'Operations', 'Compliance'],
  },
  {
    title: 'Product Manager',
    organisation: 'Station-S',
    period: 'March 2025 – January 2026',
    metrics: [
      { value: '4', label: 'Concurrent software products delivered on schedule' },
      { value: '30%', label: 'Reduction in cross-team blockers' },
      { value: '20', label: 'Team members in delivery' },
    ],
    points: [
      'Managed roadmaps, priorities, milestones, dependencies and cross-functional handovers.',
      'Coordinated design, development and strategy teams.',
    ],
    tags: ['Product roadmaps', 'Delivery', 'Jira', 'Asana', 'Notion'],
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
      'Oversaw production and manufacturing activities.',
      'Monitored production status using MES.',
      'Tracked production in SAP.',
    ],
    tags: ['Production oversight', 'Manufacturing', 'MES', 'SAP'],
  },
];

/* ── Selected work ────────────────────────────────────────────────────────── */
export type Project = {
  title: string;
  category: string;
  context?: string; // optional
  role?: string; // optional
  actions?: string[]; // optional
  results?: Metric[]; // optional: verified results only
  tags?: string[]; // optional
};

export const projects: Project[] = [
  {
    title: 'Product Delivery & Roadmap Coordination',
    category: 'Product · Station-S',
    context: 'Four concurrent software products.',
    role: 'Product Manager coordinating design, development and strategy.',
    actions: [
      'Structured workstreams.',
      'Managed priorities and dependencies.',
      'Maintained roadmaps and monitored milestones.',
      'Escalated delivery risks.',
      'Coordinated cross-functional handovers.',
    ],
    results: [
      { value: '4', label: 'Products delivered on schedule' },
      { value: '30%', label: 'Fewer cross-team blockers' },
      { value: '20', label: 'Team members in delivery' },
    ],
    tags: ['Jira', 'Asana', 'Notion'],
  },
  {
    title: 'Supplier & Operational Coordination',
    category: 'Operations · Mollington Banastre',
    context: 'Operational purchasing and supplier coordination.',
    actions: [
      'SAP purchasing.',
      'Supplier follow-ups.',
      'Purchase-order coordination.',
      'Invoice verification.',
      'Operational compliance.',
      'Issue escalation.',
    ],
    tags: ['SAP', 'Purchasing', 'Supplier Management', 'Compliance', 'Operations'],
  },
];

/* ── Manufacturing technology ─────────────────────────────────────────────── */
export const manufacturing = {
  intro:
    'MES connects planning with shop-floor execution, production visibility, quality and traceability. This is how my experience applies.',
  bridges: [
    { from: 'Cross-functional coordination', to: 'Aligning IT, operations and production teams' },
    { from: 'Product roadmaps and delivery tracking', to: 'MES implementations, enhancements and rollout planning' },
    { from: 'Supplier operations, purchase orders and compliance', to: 'Manufacturing supply and operational controls' },
    { from: 'SAP and MES production exposure', to: 'Manufacturing technology environments' },
  ],
  systems: [
    { name: 'MES', where: 'Production status monitoring at Tesco' },
    { name: 'SAP', where: 'Production tracking at Tesco; purchasing at Mollington Banastre' },
  ],
};

/* ── Skills & tools ───────────────────────────────────────────────────────── */
export const skills = [
  {
    group: 'Product & delivery',
    items: [
      'Product roadmaps',
      'Requirements gathering',
      'Prioritisation',
      'Milestone tracking',
      'Dependency tracking',
      'Risk & issue management',
      'Stakeholder coordination',
      'Release coordination',
    ],
  },
  {
    group: 'Operations',
    items: [
      'Supplier coordination',
      'Purchase orders',
      'Invoice verification',
      'Operational planning',
      'Staff scheduling',
      'SOP compliance',
      'Escalation management',
    ],
  },
  {
    group: 'Manufacturing technology',
    items: ['SAP purchasing', 'SAP production oversight', 'MES', 'Production monitoring', 'Manufacturing operations'],
  },
];

export const tools: { name: string; use?: string }[] = [
  { name: 'Jira', use: 'Roadmaps and delivery tracking' },
  { name: 'Asana', use: 'Roadmaps and task coordination' },
  { name: 'Notion', use: 'Roadmaps and documentation' },
  { name: 'SAP', use: 'Purchasing and production tracking' },
  { name: 'Sage', use: 'Financial and administrative records' },
  { name: 'Microsoft 365' },
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
  text: 'Open to conversations with recruiters and hiring teams.',
  // Add your details here when ready; the cards appear automatically. Examples:
  //   { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  //   { label: 'LinkedIn', value: 'linkedin.com/in/your-name', href: 'https://www.linkedin.com/in/your-name' },
  //   { label: 'Location', value: 'City, Country' },
  channels: [] as { label: string; value: string; href?: string }[],
  // Optional: put your CV at public/Soundarya-Ravoori-CV.pdf and set this to
  // 'Soundarya-Ravoori-CV.pdf' to show a Download CV button.
  resume: '',
};
