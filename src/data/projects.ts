import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'deped-qms',
    title: 'DepEd Training QMS',
    description:
      'A training quality management system for the Department of Education — tracks training programs, participant records, evaluations, and generates compliance reports. Built on Cloudflare Workers with D1 for the database layer.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers', 'Cloudflare D1'],
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://deped-training-qms.sanigkram24.workers.dev/',
    featured: true,
  },
  {
    id: 'northwind',
    title: 'Northwind Studio',
    description:
      'A headless CMS-powered marketing site for a design studio, with a custom page builder and sub-second page loads via static generation.',
    tags: ['Next.js', 'Sanity', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 'pulse',
    title: 'Pulse',
    description:
      'An uptime and performance monitor for small teams, with configurable alerts and a status page that updates in real time.',
    tags: ['TypeScript', 'Express', 'WebSockets', 'Docker'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 'compass',
    title: 'Compass',
    description:
      'A lightweight project-planning tool with keyboard-first navigation, inspired by the workflow of writers and small dev teams.',
    tags: ['React', 'Zustand', 'Vite'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    repoUrl: 'https://github.com/',
    featured: false,
  },
]
