import { Github, Linkedin, Mail } from 'lucide-react'
import { profile, socials } from '@/data/profile'
import { Container } from '@/components/ui/Container'

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, twitter: Github }

export function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-muted dark:text-muted-dark transition-colors duration-200 hover:text-accent hover:border-accent dark:hover:text-accent-light"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}
