// The one list of pages. The web addresses, the sidebars, the title links and
// the Next/Previous buttons all come from here, and the build fails if this
// list and the files in guides/ disagree. Each section's pages live in its own
// file in workshops/.

import { howItWorks } from './workshops/how-it-works'
import { aiAsMaterial } from './workshops/ai-as-material'
import { aiAsTool } from './workshops/ai-as-tool'
import { sharingPrototypes } from './workshops/sharing-prototypes'
import { toolkit } from './workshops/toolkit'
import { presenting } from './workshops/presenting'
import { site } from './workshops/site'
import type { Guide, Workshop } from './workshops/types'

export type { Guide, Workshop } from './workshops/types'

/** The introductory sequence, in order, then the shared pages. */
export const workshops: Workshop[] = [howItWorks, aiAsMaterial, aiAsTool, sharingPrototypes, toolkit, presenting, site]

export const guides: Guide[] = workshops.flatMap((w) => w.guides)

export function guideBySlug(slug: string): Guide {
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) throw new Error(`No guide with the address "/${slug}".`)
  return guide
}
