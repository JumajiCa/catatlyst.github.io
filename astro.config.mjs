import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/catalyst_website',
  output: 'static',
  integrations: [react()],
});
