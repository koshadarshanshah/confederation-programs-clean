// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * Astro configuration for Confederation College Programs site
 * 
 * This config sets up:
 * - Vite as the build tool
 * - Tailwind CSS integration via Vite plugin
 * - Static site generation (default mode)
 * - Reduced minification for readable output
 * 
 * @see https://astro.build/config
 */
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Reduce minification to keep code more readable
      minify: 'esbuild',
      target: 'es2020'
    }
  },
});
