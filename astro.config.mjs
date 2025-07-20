
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nftkpl.github.io',
  base: '/site',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
