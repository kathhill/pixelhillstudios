import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelhillstudios.com",
  integrations: [
    astroImageTools,
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
