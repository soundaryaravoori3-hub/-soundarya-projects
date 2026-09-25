// @ts-check
import { defineConfig } from 'astro/config';

// The portfolio is a GitHub user site, served from the root of
// https://soundaryaravoori3-hub.github.io/ (repository
// soundaryaravoori3-hub.github.io). The base is fixed at "/" so asset URLs
// never depend on the repository name at build time.
export default defineConfig({
  site: 'https://soundaryaravoori3-hub.github.io',
  base: '/',
});
