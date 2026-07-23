import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A few things I've built recently. Each one taught me something I now reach for by default."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
