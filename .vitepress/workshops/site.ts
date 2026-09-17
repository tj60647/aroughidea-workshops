import type { Workshop } from './types'

// Pages shared by every workshop. They live in the root of guides/, and their
// sidebar is the one every page outside a workshop shows.
export const site: Workshop = {
  id: '',
  number: null,
  name: 'Workshops',
  title: 'A Rough Idea Workshops',
  summary: 'The home page and the pages every workshop uses.',
  guides: [
    { file: 'index.md', slug: '', name: 'Home', title: 'A Rough Idea Workshops', prev: null, next: null },
    { file: 'practice/index.md', slug: 'practice/', name: 'Practice', title: 'Practice Across the Workshops', prev: null, next: 'practice/journal' },
    { file: 'practice/journal.md', slug: 'practice/journal', name: 'Process Journal', title: 'Keeping a Process Journal', prev: 'practice/', next: 'practice/design-artifacts' },
    { file: 'practice/design-artifacts.md', slug: 'practice/design-artifacts', name: 'Design Artifacts', title: 'Documenting an AI Design', prev: 'practice/journal', next: 'practice/evaluations' },
    { file: 'practice/evaluations.md', slug: 'practice/evaluations', name: 'Evaluations', title: 'Testing Your AI Prototype', prev: 'practice/design-artifacts', next: null },
    { file: 'glossary.md', slug: 'glossary', name: 'Glossary', title: 'Glossary', prev: null, next: null },
    { file: 'going-further.md', slug: 'going-further', name: 'Going Further', title: 'Going Further', prev: null, next: null },
    { file: 'later.md', slug: 'later', name: 'Later Workshops', title: 'Later Workshops', prev: null, next: null },
  ],
  sidebar: (item) => [
    item(''),
    {
      text: 'The Introductory Sequence',
      items: [
        item('how-it-works/', '1. How It Actually Works'),
        item('ai-as-material/', '2. AI as a Material'),
        item('ai-as-tool/', '3. AI as a Tool'),
        item('sharing-prototypes/', '4. Sharing AI Prototypes'),
        { text: '5. Prototyping Toolkit', link: 'https://prototypingtoolkit.aroughidea.com/' },
        item('presenting/', '6. Presenting Your Work'),
      ],
    },
    {
      text: 'Across the Workshops',
      items: [
        item('practice/', 'Practice'),
        item('practice/journal'),
        item('practice/design-artifacts'),
        item('practice/evaluations'),
        item('glossary'),
      ],
    },
    { text: 'After the Sequence', items: [item('going-further'), item('later')] },
  ],
}
