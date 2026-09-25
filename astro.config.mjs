// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';

// The portfolio is served from the root of the GitHub user site:
//   https://soundaryaravoori3-hub.github.io/
// The GitHub Pages workflow passes SITE_URL and BASE_PATH from
// actions/configure-pages, so the build always matches wherever the
// repository is published. Without them (local builds, Netlify, Vercel,
// a custom domain) the site builds for the root path "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://soundaryaravoori3-hub.github.io',
  base: process.env.BASE_PATH || '/',
});
