import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '@/types'

const GRADIENTS = [
  'from-violet-500 via-indigo-500 to-indigo-600',
  'from-blue-500 via-cyan-500 to-teal-600',
  'from-emerald-500 via-teal-500 to-cyan-600',
  'from-orange-500 via-amber-500 to-red-500',
  'from-pink-500 via-rose-500 to-red-500',
  'from-slate-700 via-slate-800 to-slate-900',
]

function getInitials(title: string): string {
  const words = title
    .split(/[\s—–-]+/)
    .filter(Boolean)
    .filter((w) => /[A-Za-z0-9]/.test(w))
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const initials = getInitials(project.title)
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line dark:border-line-dark bg-bg dark:bg-bg-dark transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/30"
    >
      <div
        className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <span className="relative text-5xl font-black tracking-[-0.06em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] select-none transition-transform duration-500 group-hover:scale-110">
          {initials}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink dark:text-ink-dark">{project.title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted dark:text-muted-dark transition-colors duration-200 hover:text-accent dark:hover:text-accent-light hover:bg-surface dark:hover:bg-surface-dark"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted dark:text-muted-dark transition-colors duration-200 hover:text-accent dark:hover:text-accent-light hover:bg-surface dark:hover:bg-surface-dark"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface dark:bg-surface-dark px-2.5 py-1 font-mono text-[11px] text-muted dark:text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
