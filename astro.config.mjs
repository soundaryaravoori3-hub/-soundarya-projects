// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// For Netlify / Vercel / a custom domain, leave BASE_PATH unset.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
});
