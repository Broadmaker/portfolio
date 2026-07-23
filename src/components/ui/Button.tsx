import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none active:scale-[0.98]'
  const variants = {
    primary:
      'bg-ink text-white dark:bg-white dark:text-ink hover:bg-accent dark:hover:bg-accent-light dark:hover:text-white',
    secondary:
      'border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:text-accent-light',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
