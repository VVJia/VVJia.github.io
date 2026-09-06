# Jia Wei (Javy) · Academic Homepage

This repository contains the Astro version of Jia Wei's academic homepage, deployed to https://vvjia.github.io/.

The site is a static, editorial-style academic profile with an English homepage, a publication archive, an optional bilingual writing section, RSS, sitemap, and cached Google Scholar statistics.

## Content

- src/data/site.ts contains the profile, research interests, news, experience, awards, and publication metadata.
- src/content/writing/ contains Markdown notes and essays. See docs/content-guide.md for the frontmatter format.
- src/data/scholar.json is the latest successful Google Scholar snapshot. If an update fails, the previous snapshot remains in place.
- public/images/ contains the portrait, publication figures, and project demo assets.

## Local development

The project uses Node.js and pnpm.

Run the development server with pnpm install followed by pnpm dev.

Build the static output with pnpm build. The build is written to dist/. The Deploy Astro site workflow publishes it to GitHub Pages whenever main changes.

## Google Scholar updates

The profile ID jLLrtFQAAAAJ is configured as the default source for the Scholar sync. The optional repository secret GOOGLE_SCHOLAR_ID can override it if the profile changes. The Update Google Scholar stats workflow runs daily at 08:00 UTC and can also be started manually. It commits only successful snapshots to src/data/scholar.json; a blocked or failed Scholar request does not clear existing numbers.

The older Jekyll template files remain in the repository history as a rollback reference. They are not used by the Astro build.

