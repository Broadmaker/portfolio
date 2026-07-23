import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '@/types'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line dark:border-line-dark bg-bg dark:bg-bg-dark transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface dark:bg-surface-dark">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
