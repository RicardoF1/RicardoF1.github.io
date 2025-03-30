// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

//new
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), react(), tailwind(), sitemap()],
    site: template.website_url,
    base: template.base,
});
