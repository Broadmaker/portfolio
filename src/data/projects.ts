import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'dtr-tool',
    title: 'DTR Tool — CSC Form 48 Generator',
    description:
      'Privacy-first CSC Form 48 Daily Time Record generator — biometric Excel is processed entirely in the browser with no database or uploads, producing clean, print-ready PDFs for Philippine government employees.',
    tags: ['React', 'TypeScript', 'Vite', 'PWA', 'Client-side Processing'],
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://dtr-tool.pages.dev/',
    featured: true,
  },
  {
    id: 'shs-gret',
    title: 'SHS GRET — Evaluation Tool',
    description:
      'DepEd Senior High School evaluation tool that streamlines grading and retention workflows — automates GRET computations and generates reports for SHS assessment.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Pages'],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://shs-gret.pages.dev/',
    featured: true,
  },
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
    id: 'exam-portal',
    title: 'Exam Portal',
    description:
      'An online examination system with timed assessments, auto-grading, and real-time result tracking — built with Vite on Cloudflare Workers with D1 for the database layer. Progressive Web App with offline support.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers', 'Cloudflare D1'],
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://exam-system-4h2.pages.dev/',
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
