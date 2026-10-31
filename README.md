# Milind's website

A static Astro site. No client-side JavaScript, CMS, database, or accounts.

## Run locally

Use Node 22.12 or later. Run `npm ci`, then `npm run dev`.
Run `npm run build` to produce the static site in `dist/`.

## Publish an essay

Create `src/pages/writing/your-title.md`:

```markdown
---
layout: ../../layouts/Essay.astro
title: Your title
description: A short description for search and sharing.
---

Your essay goes here. Ordinary Markdown, links, and images work.
```

It appears at `/writing/your-title/` and is automatically listed on the homepage.
The list follows filename order. Set `draft: true` to hide an unfinished essay
from the list; files under pages still get a public URL, so keep private drafts
outside `src/pages` and the repository.

For external writing, add a title, URL, and source to `src/data/links.json`.
Edit the bio and interests in `src/pages/index.astro`.

## Deployment

`vercel.json` selects Astro and the `dist` output directory. The existing Vercel
project is connected to `Milind220/milind.xyz`; pushes to `main` publish
automatically to https://milinds.xyz.

The previous implementation and sample content remain available in Git history;
old sample MDX files under `content/` are not published by the new site.
