// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * Astro configuration optimized for 100% SEO & PageSpeed Performance
 */
export default defineConfig({
  site: 'https://sman1nusantara.sch.id',
  output: 'static',
  compressHTML: true,

  integrations: [
    svelte(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },

  // Markdown syntax highlighting
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },

  // Image optimization (Astro built-in, works with static output)
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});

