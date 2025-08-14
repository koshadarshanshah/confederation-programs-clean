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
 * - Disabled minification for human-readable output
 * 
 * @see https://astro.build/config
 */
export default defineConfig({
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Disable minification completely for readable output
      minify: false,
      target: 'es2020',
      rollupOptions: {
        output: {
          // Keep function names and formatting
          compact: false,
          indent: '  '
        }
      }
    }
  },
});
