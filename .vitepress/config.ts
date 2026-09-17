import { readdirSync, readFileSync } from 'node:fs'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { markDark, markLight } from './brand'
import { guideBySlug, guides, workshops } from './guides'
import { promptCopyButtons, titleLinks } from './markdown'

const item = (slug: string, text = guideBySlug(slug).name): DefaultTheme.SidebarItem => ({
  text,
  link: `/${slug}`,
})

// Each section shows its own sidebar; the shared pages' sidebar is the fallback.
const sidebar: DefaultTheme.SidebarMulti = Object.fromEntries(
  workshops.filter((w) => !w.href).map((w) => [w.id ? `/${w.id}/` : '/', w.sidebar(item)]),
)

const sequence = workshops.filter((w) => w.number !== null)

/** Where a guide's file is served from: its slug, with section start pages as index files. */
const servedAs = (slug: string) => (slug === '' || slug.endsWith('/') ? `${slug}index.md` : `${slug}.md`)

checkGuides()

export default defineConfig({
  title: 'A Rough Idea Workshops',
  description: 'Workshops on designing and prototyping with AI, from how language models work to publishing your own prototypes.',
  lang: 'en-US',
  srcDir: 'guides',
  cleanUrls: true,
  // Short addresses for slides and links; the files keep their authored names.
  rewrites: Object.fromEntries(guides.map((g) => [g.file, servedAs(g.slug)])),
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: markLight }]],
  markdown: {
    config(md) {
      md.use(titleLinks).use(promptCopyButtons)
    },
  },
  transformPageData(page) {
    const guide = guides.find((g) => g.file === page.filePath)
    if (!guide) return
    const nav = (slug: string | null) =>
      slug === null ? false : { text: guideBySlug(slug).name, link: `/${slug}` }
    page.frontmatter.prev = nav(guide.prev)
    page.frontmatter.next = nav(guide.next)
  },
  themeConfig: {
    logo: { light: markLight, dark: markDark, alt: 'A Rough Idea' },
    nav: [
      {
        text: 'Workshops',
        items: sequence.map((w) => ({ text: `${w.number}. ${w.name}`, link: w.href ?? `/${w.id}/` })),
      },
      { text: 'Practice', link: '/practice/' },
      { text: 'Glossary', link: '/glossary' },
    ],
    sidebar,
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous', next: 'Next' },
  },
})

/** Stops the build when guides.ts, the guide files and the sidebars disagree. */
function checkGuides() {
  const dir = new URL('../guides/', import.meta.url)
  const files = (readdirSync(dir, { recursive: true }) as string[])
    .map((f) => f.replaceAll('\\', '/'))
    .filter((f) => f.endsWith('.md'))
    .sort()
  const listed = guides.map((g) => g.file).sort()
  if (files.join() !== listed.join()) {
    const extra = files.filter((f) => !listed.includes(f))
    const missing = listed.filter((f) => !files.includes(f))
    throw new Error(`guides/ and .vitepress/guides.ts disagree. Not listed: ${extra.join(', ') || 'none'}. Missing files: ${missing.join(', ') || 'none'}.`)
  }

  const read = (file: string) => readFileSync(new URL(file, dir), 'utf8')
  const titles = new Set<string>()
  for (const g of guides) {
    const heading = read(g.file).split(/\r?\n/, 1)[0]
    if (heading !== `# ${g.title}`) {
      throw new Error(`guides/${g.file} starts with "${heading}", but .vitepress/guides.ts expects "# ${g.title}".`)
    }
    if (titles.has(g.title)) throw new Error(`Two pages are titled "${g.title}". Titles must be unique.`)
    titles.add(g.title)
    for (const target of [g.prev, g.next]) if (target !== null) guideBySlug(target)
  }

  // Every page is in a sidebar, and every sidebar link is a page.
  const links = (items: DefaultTheme.SidebarItem[]): string[] =>
    items.flatMap((i) => [...(i.link ? [i.link] : []), ...links(i.items ?? [])])
  // Links to other websites, like the Prototyping Toolkit, aren't pages here.
  const inSidebars = new Set(
    Object.values(sidebar)
      .flatMap((s) => links(s as DefaultTheme.SidebarItem[]))
      .filter((l) => !/^https?:/.test(l)),
  )
  const expected = new Set(guides.map((g) => `/${g.slug}`))
  const unlisted = [...expected].filter((l) => !inSidebars.has(l))
  const unknown = [...inSidebars].filter((l) => !expected.has(l))
  if (unlisted.length || unknown.length) {
    throw new Error(`Sidebars and guides disagree. Not in a sidebar: ${unlisted.join(', ') || 'none'}. Not a guide: ${unknown.join(', ') || 'none'}.`)
  }

  // In each workshop, every prompt in the TLDR appears word for word in a
  // detailed guide of the same workshop, so the two routes can't drift apart.
  for (const w of workshops) {
    const tldr = w.guides.find((g) => g.slug === `${w.id}/tldr`)
    if (!tldr) continue
    const start = `${w.id}/`
    const others = w.guides.filter((g) => g !== tldr && g.slug !== start).map((g) => read(g.file))
    for (const [, prompt] of read(tldr.file).matchAll(/^\s*> (.+)$/gm)) {
      if (!others.some((text) => text.includes(prompt))) {
        throw new Error(`The ${w.name} TLDR prompt "${prompt.slice(0, 60)}…" isn't in any of its detailed guides.`)
      }
    }
  }
}
