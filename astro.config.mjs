import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://catalyst.github.io',
  base: '/catalyst.github.io',
  output: 'static',
  integrations: [react()],
});
