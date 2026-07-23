import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#0A0A0B',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          dark: '#131316',
        },
        ink: {
          DEFAULT: '#111113',
          dark: '#F5F5F7',
        },
        muted: {
          DEFAULT: '#6B7280',
          dark: '#9CA3AF',
        },
        line: {
          DEFAULT: '#E9E9EC',
          dark: '#232326',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          soft: '#EFF4FF',
          softDark: 'rgba(59,130,246,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
