import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Technical Assistant II',
    company: 'DepEd Zamboanga Sibugay',
    period: 'January 2026 — Present',
    description:
      'Provide technical support and maintain IT systems for the Department of Education division office.',
    highlights: [
      'Assisted in maintaining and troubleshooting school IT infrastructure',
      'Supported administrative systems and provided end-user technical assistance',
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Department_of_Education_%28DepEd%29.svg',
  },
  {
    id: 'exp-2',
    role: 'Visiting Lecturer',
    company: 'WMSU Ipil Campus',
    period: 'September 2020 — Present',
    description:
      'Teach undergraduate courses in computer science, helping students build a strong foundation in programming and software development.',
    highlights: [
      'Delivered lectures and hands-on labs for core computer science subjects',
      'Guided students through projects and assessments to reinforce practical skills',
    ],
    logo: 'https://wmsu.edu.ph/wp-content/uploads/2024/05/site_logo.png',
  },
]
