# Working agreements

## Project reference

- GitHub: `tj60647/aroughidea-workshops` (public).
- Vercel: team `aroughidea`, project `aroughidea-workshops`, deployed from the GitHub repository. `main` is production; other branches get preview deployments. The whole project sits behind Vercel sign-in until launch. `.vercel/project.json` is local and ignored.
- Live site (after launch): https://workshops.aroughidea.com.
- A VitePress static site with no runtime dependencies: A Rough Idea Workshops. Pages come only from `guides/`; `instructor/` and top-level files are never built.
- Each workshop has a folder in `guides/` and a definition in `.vitepress/workshops/`: its pages (file, address, short name, exact title, Previous/Next) and its sidebar. The shared pages are `guides/` itself and `.vitepress/workshops/site.ts`. `.vitepress/guides.ts` combines them.
- Workshop 5, the Prototyping Toolkit, is a separate site (`tj60647/prototyping-toolkit`, https://prototypingtoolkit.aroughidea.com). Link to it; never copy its pages here.

## Rules

- Never deploy with Vercel CLI or the Vercel plugin's deploy command. To publish, commit and push to GitHub.
- Keep presentation changes in `.vitepress/`, not in the guide Markdown.
- `instructor/` is public on GitHub, but never add it to the website.
- Pages aren't tied to a school: no institution names, rooms, rosters or term dates. Facilitator material goes in `instructor/`.
- Every blockquote gets a Copy button, so use blockquotes only for prompts to send to an AI tool.

## Checks

- `npm run build` fails on a dead internal link, a page file missing from a workshop definition, a first heading that doesn't match its `title`, two pages with the same title, a page missing from the sidebars, or a TLDR prompt that isn't in one of that workshop's guides.
- After a push, confirm the deployment for that commit reached READY and load the site while signed in to Vercel.
