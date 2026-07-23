import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeToggle } from './ThemeToggle'
import { Container } from '@/components/ui/Container'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollPosition(16)
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-line dark:border-line-dark'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="font-mono text-sm font-medium text-ink dark:text-ink-dark tracking-tight"
          >
            {profile.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
            <span className="text-accent dark:text-accent-light">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-ink dark:text-ink-dark'
                      : 'text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-4 right-4 -bottom-px h-px bg-accent dark:bg-accent-light"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-line dark:border-line-dark bg-bg dark:bg-bg-dark"
          >
            <Container className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="py-3 text-base font-medium text-ink dark:text-ink-dark border-b border-line dark:border-line-dark last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
