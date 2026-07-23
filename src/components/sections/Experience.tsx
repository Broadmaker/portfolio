import { experience } from '@/data/experience'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TimelineItem } from '@/components/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface/50 dark:bg-surface-dark/50">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="mt-14 max-w-2xl">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}
