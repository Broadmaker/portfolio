import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'

const categoryLabels: Record<string, string> = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  tool: 'Tools & Infrastructure',
  design: 'Design',
}

export function Skills() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] ? [...acc[skill.category], skill] : [skill]
    return acc
  }, {})

  return (
    <section id="skills" className="section-pad bg-surface/50 dark:bg-surface-dark/50">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working set, not an exhaustive list — the things I use often enough to have opinions about."
        />

        <div className="mt-14 space-y-10">
          {Object.entries(grouped).map(([category, items], groupIndex) => (
            <div key={category}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: (groupIndex * 4 + i) * 0.02 }}
                  >
                    <Badge>{skill.name}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
