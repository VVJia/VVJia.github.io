# Content guide

The homepage and publication archive are driven by src/data/site.ts. Update the profile, research interests, news, education, internships, awards, and publication metadata there.

To publish a writing post, add a Markdown file under src/content/writing/:

~~~md
---
title: "A clear title"
description: "A one-sentence summary for the listing and RSS."
pubDate: 2026-09-06
category: Research Notes
lang: en
tags: [medical-ai]
draft: false
---

Write the post here.
~~~

Set draft: true while working. Drafts are excluded from the website, RSS feed, and sitemap.
