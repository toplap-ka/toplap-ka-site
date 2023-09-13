import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: "../code-collection",
  base: "/code-collection/",
  integrations: [tailwind()],
});
