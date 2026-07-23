import { motion } from 'framer-motion'
import type { ExperienceItem } from '@/types'

export function TimelineItem({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative flex gap-5 md:gap-8"
    >
      <div className="flex flex-col items-center">
        {item.logo ? (
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark shadow-md">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="h-14 w-14 object-contain"
            />
          </div>
        ) : (
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent dark:bg-accent-light ring-4 ring-accent-soft dark:ring-accent-softDark" />
        )}
        {!isLast && <span className="w-px flex-1 bg-line dark:bg-line-dark" />}
      </div>

      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent dark:text-accent-light">
          {item.period}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink dark:text-ink-dark">
          {item.role} <span className="text-muted dark:text-muted-dark font-normal">· {item.company}</span>
        </h3>
        <p className="mt-2 text-sm md:text-base text-muted dark:text-muted-dark leading-relaxed">
          {item.description}
        </p>
        <ul className="mt-3 space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-muted-dark">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted dark:bg-muted-dark" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
