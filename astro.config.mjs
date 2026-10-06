import { defineConfig } from "astro/config";

// GitHub Pages serves this project under /sitekit-sample-site/; the publish workflow sets
// PAGES_SITE and PAGES_BASE. In development (and in the Vypple editor preview) it runs at /.
export default defineConfig({
	site: process.env.PAGES_SITE || undefined,
	base: process.env.PAGES_BASE || "/",
	trailingSlash: "always",
	server: { host: true },
	vite: { server: { allowedHosts: true } },
});
