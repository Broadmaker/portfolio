import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <SectionHeading eyebrow="About" title="A little about how I work" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="space-y-5"
          >
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed text-muted dark:text-muted-dark"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-sm text-muted dark:text-muted-dark font-mono pt-2">
              {profile.location}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
