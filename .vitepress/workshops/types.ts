import type { DefaultTheme } from 'vitepress'

export interface Guide {
  /** The file in guides/, including its folder, named as authored. */
  file: string
  /**
   * Web address without the leading slash. A section's start page ends in a
   * slash ('toolkit/'); the site's home page is ''.
   */
  slug: string
  /** Short name, as sidebars and the Previous/Next buttons show it. */
  name: string
  /** The guide's first heading, exactly. Titles are unique across the site. */
  title: string
  /**
   * Slugs for the Previous and Next buttons, or null for none. They follow
   * each guide's own "Next" section rather than the sidebar order.
   */
  prev: string | null
  next: string | null
}

/** Builds one sidebar link from a guide's slug, named after the guide unless text is given. */
export type SidebarItem = (slug: string, text?: string) => DefaultTheme.SidebarItem

/**
 * One section of the site: a workshop, or the shared pages. Each owns a
 * folder in guides/ (the root folder for the shared pages) and its sidebar.
 */
export interface Workshop {
  /** The folder in guides/, which is also the start of every address. '' for the shared pages. */
  id: string
  /** Place in the introductory sequence, or null for pages outside it. */
  number: number | null
  /** Short name, as the navigation bar shows it. */
  name: string
  /** Full title of the workshop. */
  title: string
  /** One sentence for the home page. */
  summary: string
  /** For a workshop that is its own website: its address. It then has no pages or sidebar here. */
  href?: string
  guides: Guide[]
  sidebar: (item: SidebarItem) => DefaultTheme.SidebarItem[]
}
