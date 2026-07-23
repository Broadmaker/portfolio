import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark text-ink dark:text-ink-dark transition-colors duration-200 hover:border-accent hover:text-accent dark:hover:text-accent-light"
    >
      <Sun className="h-4 w-4 scale-100 dark:scale-0 transition-transform duration-300 absolute" />
      <Moon className="h-4 w-4 scale-0 dark:scale-100 transition-transform duration-300 absolute" />
    </button>
  )
}
