# Changelog

## Unreleased

- add automated CI workflow for linting, type checking, and builds
- document node version via `.nvmrc` and enforce engines/package manager metadata
- configure ESLint and Prettier with Astro support and stricter TypeScript settings
- harden Astro layout metadata, routing SEO defaults, and accessibility helpers
- integrate sitemap generation, improve robots.txt, and enable HTML compression
- refresh CV page scrolling logic for stability and typed data formatting
- align tooling with npm usage and add offline stubs so `npm ci` succeeds without registry access
- pin Node.js engine to 20.x to match Vercel's supported runtime
- streamline CI to rely on the offline Astro sync stub for type safety checks
