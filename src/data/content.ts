/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Anything written as  [PLACEHOLDER: ...]  is shown on the site as a
 *  highlighted "to complete" marker. Replace the whole bracket, including
 *  "[PLACEHOLDER:" and the closing "]", with your real information.
 *
 *  Run `npm run placeholders` to list every placeholder that is still open.
 *
 *  Content rule for this site: only verified facts. Do not add achievements,
 *  employers, metrics or technical skills that you cannot stand behind in an
 *  interview.
 */

export const site = {
  name: 'Soundarya Ravoori',
  initials: 'SR',
  title: 'Soundarya Ravoori — Product, Project & Operations',
  description:
    'Product, Project and Operations professional with an MBA in Project Management, moving into an IT/MES role at Kryon Technology.',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'MES', href: '#mes' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

/* ── Home ─────────────────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: 'Product · Project · Operations',
  headline: 'I connect teams, plans and suppliers so the work gets delivered.',
  intro:
    'Product, Project and Operations professional with an MBA in Project Management. I am moving into an IT/MES role at Kryon Technology, bringing experience in cross-functional coordination, product roadmapping and supplier operations.',
  targetRoles: [
    'Product Manager',
    'Project Manager',
    'MES / Manufacturing Technology',
    'Operations',
  ],
  // Headline figures. Only use numbers you can verify.
  highlights: [
    { value: '6', label: 'Vendors supported in supplier operations' },
    { value: '20–24', label: 'Invoices processed per week' },
    { value: '3', label: 'Roadmap tools used: Jira, Asana, Notion' },
  ],
  // Add a portrait at public/images/profile.jpg and set this to 'images/profile.jpg'.
  photo: '',
};

/* ── About ────────────────────────────────────────────────────────────────── */
export const about = {
  paragraphs: [
    'I work where planning meets execution. My experience covers cross-functional coordination across design, development and strategy teams, building product roadmaps in Jira, Asana and Notion, and running supplier operations with six vendors: weekly invoicing, purchase orders, compliance and escalations.',
    'My MBA in Project Management gave me a structured way to scope, plan and track work. I am now applying that to manufacturing technology through an IT/MES role at Kryon Technology.',
    '[PLACEHOLDER: Add one or two sentences in your own voice, e.g. what motivates you, how you like to work, or what you want to build next.]',
  ],
  pillars: [
    {
      title: 'Product',
      text: 'Turning direction from design, development and strategy into roadmaps that teams can act on.',
    },
    {
      title: 'Project',
      text: 'Structured planning and coordination, backed by an MBA in Project Management.',
    },
    {
      title: 'Operations',
      text: 'Keeping suppliers, invoices, purchase orders and compliance moving week to week.',
    },
  ],
  facts: [
    { label: 'Education', value: 'MBA, Project Management — [PLACEHOLDER: University], [PLACEHOLDER: Year]' },
    { label: 'Next role', value: 'IT/MES, Kryon Technology — [PLACEHOLDER: Job title]' },
    { label: 'Location', value: '[PLACEHOLDER: City, Country]' },
    { label: 'Languages', value: '[PLACEHOLDER: Languages you speak]' },
  ],
};

/* ── Experience ───────────────────────────────────────────────────────────── */
export type Role = {
  title: string;
  organisation: string;
  period: string;
  status?: string;
  summary?: string;
  points: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    title: '[PLACEHOLDER: Job title] — IT / MES',
    organisation: 'Kryon Technology',
    period: '[PLACEHOLDER: Start month and year] – Present',
    status: 'Incoming role',
    summary: 'Moving into an IT/MES role focused on manufacturing technology.',
    points: [
      '[PLACEHOLDER: Main responsibilities once confirmed]',
      '[PLACEHOLDER: Systems, sites or teams you will support]',
    ],
    tags: ['IT', 'MES'],
  },
  {
    title: '[PLACEHOLDER: Job title, e.g. Product / Project Coordinator]',
    organisation: '[PLACEHOLDER: Employer]',
    period: '[PLACEHOLDER: Start] – [PLACEHOLDER: End]',
    summary: 'Product and project coordination across design, development and strategy.',
    points: [
      'Coordinated work across design, development and strategy teams.',
      'Built and maintained product roadmaps using Jira, Asana and Notion.',
      '[PLACEHOLDER: A verified outcome, e.g. a launch, a delivery milestone, or a process you improved]',
    ],
    tags: ['Product roadmaps', 'Cross-functional', 'Jira', 'Asana', 'Notion'],
  },
  {
    title: '[PLACEHOLDER: Job title, e.g. Supplier Operations]',
    organisation: '[PLACEHOLDER: Employer]',
    period: '[PLACEHOLDER: Start] – [PLACEHOLDER: End]',
    summary: 'Supplier operations for a portfolio of six vendors.',
    points: [
      'Handled supplier operations across 6 vendors.',
      'Processed 20–24 invoices per week.',
      'Managed purchase orders.',
      'Supported supplier compliance.',
      'Handled supplier escalations.',
    ],
    tags: ['Supplier management', 'Invoicing', 'Purchase orders', 'Compliance', 'Escalations'],
  },
  {
    title: 'MBA, Project Management',
    organisation: '[PLACEHOLDER: University]',
    period: '[PLACEHOLDER: Year(s)]',
    summary: 'Postgraduate study in project management.',
    points: ['[PLACEHOLDER: Relevant modules, capstone project or recognitions]'],
    tags: ['Education'],
  },
];

/* ── MES & Manufacturing ──────────────────────────────────────────────────── */
export const mes = {
  intro:
    'Manufacturing Execution Systems (MES) connect business planning to what actually happens on the shop floor. I am moving into this space through an IT/MES role at Kryon Technology.',
  // A short, neutral description of the domain. This describes MES, not your skills.
  domain: [
    { title: 'Plan to floor', text: 'Moving production orders from planning systems to the shop floor.' },
    { title: 'Execution', text: 'Tracking work in progress, materials and equipment as production runs.' },
    { title: 'Quality & traceability', text: 'Recording what was made, how, and with which materials.' },
    { title: 'Visibility', text: 'Giving operations and leadership a live view of performance.' },
  ],
  // How your verified experience carries over. Keep these tied to real work.
  bridges: [
    {
      from: 'Cross-functional coordination across design, development and strategy',
      to: 'Aligning IT, operations and production stakeholders on MES work',
    },
    {
      from: 'Product roadmaps in Jira, Asana and Notion',
      to: 'Planning and tracking MES rollouts, enhancements and requests',
    },
    {
      from: 'Supplier operations: 6 vendors, POs, compliance, escalations',
      to: 'Understanding the supply side and the controls manufacturing depends on',
    },
  ],
  learning: [
    '[PLACEHOLDER: MES platform(s) you are training on or will use at Kryon Technology]',
    '[PLACEHOLDER: Courses or certifications in progress, with provider and date]',
    '[PLACEHOLDER: Manufacturing standards or concepts you are studying]',
  ],
};

/* ── Projects ─────────────────────────────────────────────────────────────── */
export type Project = {
  title: string;
  category: string;
  context: string;
  role: string;
  approach: string[];
  outcome: string;
  tools?: string[];
};

export const projects: Project[] = [
  {
    title: 'Product roadmap planning',
    category: 'Product',
    context: '[PLACEHOLDER: Product or initiative, and the problem it addressed]',
    role: 'Built the product roadmap and coordinated input from design, development and strategy.',
    approach: [
      'Structured roadmap items in Jira, Asana and Notion.',
      '[PLACEHOLDER: How you prioritised, e.g. the framework or cadence you used]',
    ],
    outcome: '[PLACEHOLDER: Verified result, e.g. what shipped or what improved]',
    tools: ['Jira', 'Asana', 'Notion'],
  },
  {
    title: 'Supplier operations',
    category: 'Operations',
    context: 'Ongoing operations for a portfolio of six vendors.',
    role: 'Handled invoicing, purchase orders, compliance and escalations.',
    approach: [
      'Processed 20–24 invoices per week.',
      'Managed purchase orders and supported supplier compliance.',
      'Handled escalations with vendors.',
    ],
    outcome: '[PLACEHOLDER: Verified result, e.g. process improvement or turnaround time]',
  },
  {
    title: '[PLACEHOLDER: Project title]',
    category: '[PLACEHOLDER: Category, e.g. MBA / MES / Project]',
    context: '[PLACEHOLDER: Background and goal]',
    role: '[PLACEHOLDER: Your role]',
    approach: ['[PLACEHOLDER: Key steps you took]'],
    outcome: '[PLACEHOLDER: Verified result]',
  },
];

/* ── Skills ───────────────────────────────────────────────────────────────── */
export const skills = [
  {
    group: 'Product management',
    items: ['Product roadmapping', 'Cross-functional coordination', 'Working with design, development and strategy teams'],
  },
  {
    group: 'Project management',
    items: ['Project planning and coordination (MBA, Project Management)', 'Stakeholder coordination', '[PLACEHOLDER: e.g. a methodology you have used in practice]'],
  },
  {
    group: 'Operations',
    items: ['Supplier management', 'Invoice processing', 'Purchase orders', 'Supplier compliance', 'Escalation management'],
  },
  {
    group: 'MES & manufacturing technology',
    items: ['[PLACEHOLDER: Add MES or manufacturing skills once verified]'],
  },
];

/* ── Tools ────────────────────────────────────────────────────────────────── */
export const tools = [
  { name: 'Jira', use: 'Product roadmaps and work tracking' },
  { name: 'Asana', use: 'Product roadmaps and task coordination' },
  { name: 'Notion', use: 'Product roadmaps and documentation' },
  { name: '[PLACEHOLDER: Tool]', use: '[PLACEHOLDER: How you used it, e.g. ERP, MES or reporting tools]' },
];

/* ── Contact ──────────────────────────────────────────────────────────────── */
export const contact = {
  heading: "Let's talk about product, project, MES and operations work.",
  text: 'I welcome conversations about Product Manager, Project Manager, MES / Manufacturing Technology and Operations opportunities.',
  // For email use 'mailto:you@example.com'; for LinkedIn the full profile URL.
  channels: [
    { label: 'Email', value: '[PLACEHOLDER: Email address]', href: '' },
    { label: 'LinkedIn', value: '[PLACEHOLDER: LinkedIn profile]', href: '' },
    { label: 'Location', value: '[PLACEHOLDER: City, Country]', href: '' },
  ],
  // Put your CV at public/Soundarya-Ravoori-CV.pdf and set this to 'Soundarya-Ravoori-CV.pdf'.
  resume: '',
};
