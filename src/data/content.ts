/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the website.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Content rule for this site: only verified facts. Do not add achievements,
 *  employers, dates, metrics, qualifications or technical skills that you
 *  cannot stand behind in an interview.
 *
 *  Fields marked "optional" can be left out. The site hides them cleanly, so
 *  add them only once you have the real information (see README).
 */

export const site = {
  name: 'Soundarya Ravoori',
  initials: 'SR',
  title: 'Soundarya Ravoori | Product, Project, MES & Operations',
  description:
    'Product Management, Project Management, MES & Manufacturing Technology and Operations. MBA in Project Management, moving into an IT/MES role at Kryon Technology.',
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
  positioning: [
    'Product Management',
    'Project Management',
    'MES & Manufacturing Technology',
    'Operations',
  ],
  headline: 'I connect teams, plans and suppliers so the work gets delivered.',
  intro:
    'MBA in Project Management with experience in product roadmapping, cross-functional coordination and supplier operations. I am now moving into an IT/MES role at Kryon Technology.',
  targetRoles: [
    'Product Manager',
    'Project Manager',
    'MES / Manufacturing Technology',
    'Operations',
  ],
  // Headline figures. Only use numbers you can verify.
  highlights: [
    { value: '6', label: 'Vendors managed in supplier operations' },
    { value: '20–24', label: 'Invoices processed every week' },
    { value: '3', label: 'Roadmap tools: Jira, Asana, Notion' },
  ],
  // Optional: add a portrait at public/images/profile.jpg and set this to 'images/profile.jpg'.
  photo: '',
};

/* ── About ────────────────────────────────────────────────────────────────── */
export const about = {
  paragraphs: [
    'I work where planning meets execution. My experience covers cross-functional coordination across design, development and strategy teams, building product roadmaps in Jira, Asana and Notion, and managing supplier operations across six vendors: weekly invoicing, purchase orders, compliance and supplier escalations.',
    'My MBA in Project Management gave me a structured way to scope, plan and track work. I am now moving into manufacturing technology through an IT/MES role at Kryon Technology.',
  ],
  pillars: [
    {
      title: 'Product',
      text: 'Turning input from design, development and strategy into roadmaps that teams can act on.',
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
    { label: 'Focus', value: 'Product Management · Project Management · MES & Manufacturing Technology · Operations' },
    { label: 'Education', value: 'MBA, Project Management' },
    { label: 'Next role', value: 'IT/MES, Kryon Technology' },
  ],
};

/* ── Experience ───────────────────────────────────────────────────────────── */
export type Role = {
  label: string; // short tag shown beside the card, e.g. "Operations"
  title: string;
  organisation?: string; // optional
  period?: string; // optional, e.g. "Jan 2023 – Dec 2024"
  status?: string; // optional highlight, e.g. "Incoming role"
  summary?: string; // optional
  points?: string[]; // optional
  tags?: string[]; // optional
};

export const experience: Role[] = [
  {
    label: 'MES & Manufacturing',
    title: 'IT / MES role',
    organisation: 'Kryon Technology',
    status: 'Incoming role',
    summary: 'Moving into an IT/MES role focused on manufacturing technology.',
    tags: ['IT', 'MES', 'Manufacturing technology'],
  },
  {
    label: 'Product & Project',
    title: 'Product & Project Coordination',
    summary: 'Product and project coordination across design, development and strategy.',
    points: [
      'Coordinated work across design, development and strategy teams.',
      'Built and maintained product roadmaps using Jira, Asana and Notion.',
    ],
    tags: ['Product roadmaps', 'Cross-functional', 'Jira', 'Asana', 'Notion'],
  },
  {
    label: 'Operations',
    title: 'Supplier Operations',
    summary: 'Supplier operations for a portfolio of six vendors.',
    points: [
      'Managed supplier operations across 6 vendors.',
      'Processed 20–24 invoices every week.',
      'Managed purchase orders.',
      'Handled supplier compliance.',
      'Managed supplier escalations.',
    ],
    tags: ['Supplier management', 'Invoicing', 'Purchase orders', 'Compliance', 'Escalations'],
  },
  {
    label: 'Education',
    title: 'MBA, Project Management',
    summary: 'Postgraduate qualification in project management.',
    tags: ['Education'],
  },
];

/* ── MES & Manufacturing ──────────────────────────────────────────────────── */
export const mes = {
  intro:
    'MES & Manufacturing Technology is the area I am moving into and developing experience in, starting with an IT/MES role at Kryon Technology. Manufacturing Execution Systems (MES) connect business planning to what happens on the shop floor.',
  // A short, neutral description of the domain. This describes MES, not your skills.
  domain: [
    { title: 'Plan to floor', text: 'Moving production orders from planning systems to the shop floor.' },
    { title: 'Execution', text: 'Tracking work in progress, materials and equipment as production runs.' },
    { title: 'Quality & traceability', text: 'Recording what was made, how, and with which materials.' },
    { title: 'Visibility', text: 'Giving operations and leadership a live view of performance.' },
  ],
  // How your verified experience is relevant. Keep these tied to real work.
  bridges: [
    {
      from: 'Cross-functional coordination across design, development and strategy',
      to: 'MES work depends on aligning IT, operations and production teams',
    },
    {
      from: 'Product roadmaps in Jira, Asana and Notion',
      to: 'MES rollouts and enhancements need clear planning and tracking',
    },
    {
      from: 'Supplier operations: 6 vendors, POs, compliance, escalations',
      to: 'Manufacturing relies on well-run supply, controls and issue handling',
    },
  ],
  currentFocus:
    'I am developing my MES and manufacturing technology experience through my move into an IT/MES role at Kryon Technology, building on my background in product, project and operations work.',
};

/* ── Projects ─────────────────────────────────────────────────────────────── */
export type Project = {
  title: string;
  category: string;
  context?: string; // optional
  role?: string; // optional
  approach?: string[]; // optional
  outcome?: string; // optional: add only a verified result
  tools?: string[]; // optional
};

export const projects: Project[] = [
  {
    title: 'Product roadmap planning',
    category: 'Product',
    context: 'Roadmap planning with design, development and strategy teams.',
    role: 'Built product roadmaps and coordinated input from design, development and strategy.',
    approach: ['Structured and tracked roadmap items in Jira, Asana and Notion.'],
    tools: ['Jira', 'Asana', 'Notion'],
  },
  {
    title: 'Supplier operations',
    category: 'Operations',
    context: 'Ongoing operations for a portfolio of six vendors.',
    role: 'Managed invoicing, purchase orders, compliance and supplier escalations.',
    approach: [
      'Processed 20–24 invoices every week.',
      'Managed purchase orders and supplier compliance.',
      'Handled escalations with vendors.',
    ],
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
    items: ['Project planning and coordination (MBA, Project Management)', 'Stakeholder coordination'],
  },
  {
    group: 'Operations',
    items: ['Supplier management', 'Invoice processing', 'Purchase orders', 'Supplier compliance', 'Escalation management'],
  },
];

/* ── Tools ────────────────────────────────────────────────────────────────── */
export const tools = [
  { name: 'Jira', use: 'Product roadmaps and work tracking' },
  { name: 'Asana', use: 'Product roadmaps and task coordination' },
  { name: 'Notion', use: 'Product roadmaps and documentation' },
];

/* ── Contact ──────────────────────────────────────────────────────────────── */
export const contact = {
  heading: "Let's talk about product, project, MES and operations work.",
  text: 'I welcome conversations about Product Manager, Project Manager, MES / Manufacturing Technology and Operations opportunities.',
  // Add your details here when ready; the cards appear automatically. Examples:
  //   { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  //   { label: 'LinkedIn', value: 'linkedin.com/in/your-name', href: 'https://www.linkedin.com/in/your-name' },
  //   { label: 'Location', value: 'City, Country' },
  channels: [] as { label: string; value: string; href?: string }[],
  // Optional: put your CV at public/Soundarya-Ravoori-CV.pdf and set this to
  // 'Soundarya-Ravoori-CV.pdf' to show a Download CV button.
  resume: '',
};
