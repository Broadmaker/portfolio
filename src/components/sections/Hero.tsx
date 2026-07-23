import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

/**
 * Signature moment: a quiet dot-grid canvas that drifts toward the cursor,
 * standing in for the "structure + precision" feel of the rest of the page.
 */
function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let animationFrame: number
    const spacing = 28
    let dots: { x: number; y: number }[] = []

    const isDark = () => document.documentElement.classList.contains('dark')

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      dots = []
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          dots.push({ x, y })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const dotColor = isDark() ? '59,130,246' : '37,99,235'
      dots.forEach((dot) => {
        const dx = mouse.current.x - dot.x
        const dy = mouse.current.y - dot.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const radius = 160
        const proximity = Math.max(0, 1 - dist / radius)
        const baseOpacity = isDark() ? 0.14 : 0.1
        const opacity = baseOpacity + proximity * 0.55
        const size = 1.1 + proximity * 1.6
        const offset = proximity * 3

        ctx.beginPath()
        ctx.fillStyle = `rgba(${dotColor}, ${opacity})`
        ctx.arc(
          dot.x - (dist ? (dx / dist) * offset : 0),
          dot.y - (dist ? (dy / dist) * offset : 0),
          size,
          0,
          Math.PI * 2
        )
        ctx.fill()
      })
      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      }}
      onMouseLeave={() => {
        mouse.current = { x: -9999, y: -9999 }
      }}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <DotGrid />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark bg-surface/60 dark:bg-surface-dark/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted dark:text-muted-dark">
              {profile.availability}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-ink dark:text-ink-dark max-w-4xl leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-muted dark:text-muted-dark">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted dark:text-muted-dark leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href="#projects"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in touch
            </Button>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted dark:text-muted-dark"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  )
}
