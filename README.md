# A Rough Idea Workshops

A collection of workshops about designing and prototyping with AI, from what a language model actually does to publishing and presenting your own prototypes.

The Prototyping Toolkit (Workshop 5) is its own website, https://prototypingtoolkit.aroughidea.com, maintained in [tj60647/prototyping-toolkit](https://github.com/tj60647/prototyping-toolkit). This site links to it.

## What's here

| Folder | Contents |
|---|---|
| `guides/` | The pages, one folder per workshop. The website is built from this folder only. |
| `.vitepress/workshops/` | One file per workshop: its pages (file, address, short name, title, Previous/Next) and its sidebar. `site.ts` holds the shared pages. |
| `.vitepress/` | The site: `guides.ts` combines the workshops; `config.ts` builds sidebars, navigation and checks; `markdown.ts` and `theme/` add title links, prompt Copy buttons and the A Rough Idea theme. |
| `instructor/` | Plans and facilitator notes. Not on the website. |

## Change a page

1. Edit the file in `guides/`.
2. Commit and push. Vercel builds a preview for a branch and publishes `main`.

To add a page, add its file to the workshop's folder, list it in that workshop's file in `.vitepress/workshops/`, and add it to that workshop's sidebar. `npm run build` stops with a message if anything disagrees.

## Run it locally

```
npm install
npm run dev
```
