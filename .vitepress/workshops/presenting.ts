import type { Workshop } from './types'

export const presenting: Workshop = {
  id: 'presenting',
  number: 6,
  name: 'Presenting Your Work',
  title: 'Presenting Your Prototypes and Process',
  summary: 'Show what you built, how you built it, and what it taught you.',
  guides: [
    {
      file: 'presenting/index.md',
      slug: 'presenting/',
      name: 'Start here',
      title: 'Presenting Your Prototypes and Process',
      prev: null,
      next: 'presenting/case-study-deck',
    },
    {
      file: 'presenting/tldr.md',
      slug: 'presenting/tldr',
      name: 'TLDR',
      title: 'TLDR: Presenting Your Work',
      prev: 'presenting/',
      next: 'presenting/practice',
    },
    {
      file: 'presenting/case-study-deck.md',
      slug: 'presenting/case-study-deck',
      name: 'Case-Study Deck',
      title: 'Building Your Case-Study Deck',
      prev: 'presenting/',
      next: 'presenting/demo-video',
    },
    {
      file: 'presenting/demo-video.md',
      slug: 'presenting/demo-video',
      name: 'Demo Video',
      title: 'Making a Demo Video',
      prev: 'presenting/case-study-deck',
      next: 'presenting/presenting-and-feedback',
    },
    {
      file: 'presenting/presenting-and-feedback.md',
      slug: 'presenting/presenting-and-feedback',
      name: 'Presenting and Feedback',
      title: 'Presenting and Giving Feedback',
      prev: 'presenting/demo-video',
      next: 'presenting/series-in-review',
    },
    {
      file: 'presenting/series-in-review.md',
      slug: 'presenting/series-in-review',
      name: 'Series in Review',
      title: 'The Series in Review',
      prev: 'presenting/presenting-and-feedback',
      next: 'presenting/practice',
    },
    {
      file: 'presenting/practice.md',
      slug: 'presenting/practice',
      name: 'Practice',
      title: 'Practice: Presenting Your Work',
      prev: 'presenting/series-in-review',
      // The last page of the sequence; its "Next" section links out to Going Further.
      next: null,
    },
  ],
  sidebar: (item) => [
    item('presenting/'),
    item('presenting/tldr'),
    {
      text: 'Guides',
      items: [
        item('presenting/case-study-deck'),
        item('presenting/demo-video', 'Demo Video (optional)'),
        item('presenting/presenting-and-feedback'),
        item('presenting/series-in-review'),
      ],
    },
    item('presenting/practice'),
  ],
}
