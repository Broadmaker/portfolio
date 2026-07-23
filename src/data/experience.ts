import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    company: 'Northgate Labs',
    period: '2023 — Present',
    description:
      'Leading frontend architecture for a B2B analytics platform used by 400+ teams.',
    highlights: [
      'Rebuilt the core dashboard in React and TypeScript, cutting load time by 42%',
      'Introduced a shared component library adopted across three product teams',
      'Mentored two junior engineers through their first year',
    ],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer',
    company: 'Fieldstone',
    period: '2021 — 2023',
    description:
      'Owned the customer-facing web app for an early-stage logistics startup.',
    highlights: [
      'Shipped the v1 web app from scratch alongside a team of three',
      'Built a design system in Tailwind CSS still in use today',
      'Reduced production bugs by 30% by introducing end-to-end testing',
    ],
  },
  {
    id: 'exp-3',
    role: 'Junior Developer',
    company: 'Studio Forty',
    period: '2019 — 2021',
    description: 'Built marketing sites and internal tools for agency clients.',
    highlights: [
      'Delivered 20+ client websites on time and within scope',
      'Introduced component-driven development to the team’s workflow',
    ],
  },
]
