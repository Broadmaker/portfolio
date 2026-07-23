interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200'
  const variants = {
    default:
      'bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark border border-line dark:border-line-dark hover:border-accent/50 hover:text-accent dark:hover:text-accent-light',
    outline: 'border border-accent/30 text-accent dark:text-accent-light bg-accent-soft dark:bg-accent-softDark',
  }
  return <span className={`${base} ${variants[variant]}`}>{children}</span>
}
