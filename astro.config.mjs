import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./markdown-utils.mjs";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
