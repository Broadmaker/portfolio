export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'design'
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  logo?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'twitter'
}
