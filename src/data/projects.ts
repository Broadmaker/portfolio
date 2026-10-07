import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'dtr-tool',
    title: 'DTR Tool — CSC Form 48 Generator',
    description:
      'Privacy-first CSC Form 48 Daily Time Record generator — biometric Excel is processed entirely in the browser with no database or uploads, producing clean, print-ready PDFs for Philippine government employees.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'XLSX', 'PWA'],
    liveUrl: 'https://dtr-tool.pages.dev/',
    repoUrl: 'https://github.com/Broadmaker/dtr-tool',
    featured: true,
  },
  {
    id: 'shs-gret',
    title: 'SHS GRET — Evaluation Tool',
    description:
      'Evaluation Tool for the Government Recognition of Private Basic Education Institutions offering the Senior High School (SHS) Program — digitizes the DepEd GRET workflow for streamlined evaluation and reporting.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    liveUrl: 'https://shs-gret.pages.dev/',
    repoUrl: 'https://github.com/Broadmaker/shs-gret',
    featured: true,
  },
  {
    id: 'deped-qms',
    title: 'DepEd Training QMS',
    description:
      'A training quality management system for the Department of Education — tracks training programs, participant records, evaluations, and generates compliance reports. Built on Cloudflare Workers with D1 for the database layer.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers', 'Cloudflare D1'],
    liveUrl: 'https://deped-training-qms.sanigkram24.workers.dev/',
    featured: true,
  },
  {
    id: 'exam-portal',
    title: 'Exam Portal',
    description:
      'An online examination system with timed assessments, auto-grading, and real-time result tracking — built with Vite on Cloudflare Workers with D1 for the database layer. Progressive Web App with offline support.',
    tags: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers', 'Cloudflare D1'],
    liveUrl: 'https://exam-system-4h2.pages.dev/',
    featured: true,
  },
  {
    id: 'pulse',
    title: 'Pulse',
    description:
      'An uptime and performance monitor for small teams, with configurable alerts and a status page that updates in real time.',
    tags: ['TypeScript', 'Express', 'WebSockets', 'Docker'],
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
    repoUrl: 'https://github.com/',
    featured: false,
  },
]
