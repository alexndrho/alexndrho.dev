import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { remarkReadingTime } from "./markdown-utils.mjs";


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
