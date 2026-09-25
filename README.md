# Soundarya Ravoori — Portfolio

A professional portfolio for **Soundarya Ravoori**, a Product, Project and Operations professional with an MBA in Project Management, moving into an IT/MES role at Kryon Technology.

It is a single-page site with these sections: **Home, About, Experience, MES & Manufacturing, Projects, Skills, Tools and Contact**. The colours are navy, sky blue and white with a subtle yellow accent, and the layout works on phones as well as desktops.

---

## Tech stack

| Part | Choice | Why |
| --- | --- | --- |
| Framework | [Astro](https://astro.build) | Builds plain static HTML that is fast, free to host and good for search engines. |
| Styling | One CSS file (`src/styles/global.css`) | No framework to learn. All colours are set once at the top. |
| Content | One file (`src/data/content.ts`) | Update the whole site without touching any layout code. |
| JavaScript | About 50 lines | Only for the mobile menu, highlighting the current section and scroll animations. |

---

## Run it locally

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install        # first time only
npm run dev        # start a live preview at http://localhost:4321
```

The page reloads automatically when you save a file.

Other commands:

```bash
npm run build          # build the finished site into dist/
npm run preview        # preview the built site
npm run check          # type-check the project
```

---

## Edit your content

**Almost everything you will want to change is in `src/data/content.ts`.** The file is split into sections (Home, About, Experience, and so on) that match the website.

### Adding information later

The site only shows information that has been verified. Details that aren't known yet (employers, dates, university, contact details, CV, MES training) are left out rather than shown as gaps.

Many fields in `content.ts` are marked **optional**. Add one and it appears on the site automatically. Leave it out and it's hidden cleanly. For example, to add an employer and dates to a role:

```ts
{
  label: 'Operations',
  title: 'Supplier Operations',
  organisation: 'Company name',     // optional
  period: 'Jan 2023 – Dec 2024',    // optional
  ...
}
```

> **Content rule:** the site only contains facts you provided. Please keep it that way: add only achievements, employers, dates, metrics, qualifications and technical skills you can talk about in an interview.

### Common edits

| I want to… | Where |
| --- | --- |
| Change the headline or intro | `hero` in `content.ts` |
| Change the three headline figures | `hero.highlights` |
| Add a job, employer or dates | Add or edit an entry in the `experience` list (newest first) |
| Add a project | Add an entry to the `projects` list; copy an existing one as a template |
| Add a skill or tool | `skills` or `tools` |
| Add my email / LinkedIn / location | Add entries to `contact.channels` (examples are in the comments). The contact cards appear automatically |
| Add a photo | Save it as `public/images/profile.jpg`, then set `hero.photo` to `'images/profile.jpg'` |
| Add a downloadable CV | Save it as `public/Soundarya-Ravoori-CV.pdf`, then set `contact.resume` to `'Soundarya-Ravoori-CV.pdf'`. The Download CV button only shows once this is set |
| Add MES training or certifications | Add them to the `mes` section only once they are real (course name, provider, date) |
| Change colours or fonts | The `:root` block at the top of `src/styles/global.css` |
| Rename a section heading | The matching file in `src/components/` (e.g. `Experience.astro`) |

### Project structure

```
├── public/                  Files copied as-is (favicon, photo, CV)
├── src/
│   ├── data/content.ts      ← all text on the site
│   ├── components/          One file per section, plus small helpers
│   ├── layouts/Base.astro   Page shell, <head> tags, menu script
│   ├── pages/index.astro    Puts the sections in order
│   └── styles/global.css    Colours, fonts and layout
├── .github/workflows/deploy.yml   GitHub Pages deployment
└── astro.config.mjs
```

---

## Deploy

The site builds to static files in `dist/`, so you can host it almost anywhere for free.

### Option 1: GitHub Pages (already set up)

1. Merge this work into the `main` branch.
2. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Each push to `main` then builds and publishes the site. You can also run it by hand from the **Actions** tab (**Deploy portfolio to GitHub Pages → Run workflow**).

The site will be at `https://<your-github-username>.github.io/<repository-name>/`. The workflow sets the correct base path automatically.

### Option 2: Netlify or Vercel

1. Import the repository in [Netlify](https://app.netlify.com) or [Vercel](https://vercel.com).
2. Build command: `npm run build`. Output directory: `dist`.
3. Don't set `BASE_PATH`. The site is served from the root.

### Custom domain

Add the domain in your host's settings (GitHub Pages: **Settings → Pages → Custom domain**). If you use GitHub Pages with a custom domain, the site is served from the root, so the base path is handled for you.

---

## Before you share it: checklist

- [ ] Contact details added to `contact.channels` (the Contact section has no email or LinkedIn until you do)
- [ ] Email and LinkedIn links work
- [ ] Job titles and dates match your CV and LinkedIn
- [ ] Photo and CV added (optional)
- [ ] Checked on your phone
