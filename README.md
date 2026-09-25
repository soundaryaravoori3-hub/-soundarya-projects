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
npm run placeholders   # list every placeholder you still need to fill in
```

---

## Edit your content

**Almost everything you will want to change is in `src/data/content.ts`.** The file is split into sections (Home, About, Experience, and so on) that match the website.

### Placeholders

Wherever information was missing, the site shows a highlighted yellow marker labelled **TO ADD**. In `content.ts` each one looks like this:

```ts
'[PLACEHOLDER: University]'
```

Replace the whole bracket with your information:

```ts
'University of Example'
```

Run `npm run placeholders` to see which ones are left, with line numbers. **Fill in or remove them all before you share the site.**

> **Content rule:** the site only contains facts you provided. Please keep it that way: add only achievements, employers, metrics and technical skills you can talk about in an interview.

### Common edits

| I want to… | Where |
| --- | --- |
| Change the headline or intro | `hero` in `content.ts` |
| Change the three headline figures | `hero.highlights` |
| Add a job | Add an entry to the `experience` list (newest first) |
| Add a project | Add an entry to the `projects` list; copy an existing one as a template |
| Add a skill or tool | `skills` or `tools` |
| Add my email / LinkedIn | `contact.channels`: set `value` to the text to show, and `href` to `mailto:you@example.com` or the full LinkedIn URL |
| Add a photo | Save it as `public/images/profile.jpg`, then set `hero.photo` to `'images/profile.jpg'` |
| Add a downloadable CV | Save it as `public/Soundarya-Ravoori-CV.pdf`, then set `contact.resume` to `'Soundarya-Ravoori-CV.pdf'` |
| Change colours or fonts | The `:root` block at the top of `src/styles/global.css` |
| Rename a section heading | The matching file in `src/components/` (e.g. `Experience.astro`) |

### Project structure

```
├── public/                  Files copied as-is (favicon, photo, CV)
├── scripts/
│   └── list-placeholders.mjs
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

- [ ] `npm run placeholders` reports **0** placeholders
- [ ] Email and LinkedIn links work
- [ ] Job titles and dates match your CV and LinkedIn
- [ ] Photo and CV added (optional)
- [ ] Checked on your phone
