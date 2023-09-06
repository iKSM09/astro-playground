import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
// import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
    vue(),
    svelte(),
    // solid({
    //   include: ["**/solid/*"],
    // }),
    preact({
      include: ["**/preact/*"],
    }),
    lit(),
  ],
});
