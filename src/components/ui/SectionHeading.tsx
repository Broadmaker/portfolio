import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink dark:text-ink-dark">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-muted dark:text-muted-dark text-base md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
