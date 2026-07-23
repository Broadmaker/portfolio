import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleChange = (field: keyof FormState, value: string) => {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) {
      setErrors(validate(next))
    }
  }

  const handleBlur = (field: keyof FormState) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    // Simulated submit — replace with your endpoint or form service.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('success')
    setValues({ name: '', email: '', message: '' })
    setTouched({})
  }

  const fieldClasses = (hasError: boolean) =>
    `w-full rounded-xl border bg-bg dark:bg-bg-dark px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted/60 dark:placeholder:text-muted-dark/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
      hasError
        ? 'border-red-400 dark:border-red-500'
        : 'border-line dark:border-line-dark focus:border-accent dark:focus:border-accent-light'
    }`

  return (
    <section id="contact" className="section-pad">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="Have a project in mind, or just want to say hi? My inbox is open."
            />
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-light transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <div className="mt-8 rounded-xl border border-line dark:border-line-dark bg-surface dark:bg-surface-dark overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line dark:border-line-dark">
                <MapPin className="h-3.5 w-3.5 text-accent dark:text-accent-light" />
                <span className="font-mono text-xs text-muted dark:text-muted-dark">{profile.location}</span>
              </div>
              <div className="overflow-hidden">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=122.55697764735908%2C7.753328273179042%2C122.61697764735908%2C7.813328273179042&layer=mapnik&marker=7.783328273179042%2C122.58697764735908"
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Map of Ipil, Zamboanga Sibugay"
                  className="block transition-transform duration-500 group-hover:scale-105 dark:map-dark"
                />
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink dark:text-ink-dark">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder="Jane Doe"
                className={fieldClasses(!!errors.name)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink dark:text-ink-dark">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="jane@example.com"
                className={fieldClasses(!!errors.email)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink dark:text-ink-dark">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                placeholder="Tell me a bit about your project..."
                className={`${fieldClasses(!!errors.message)} resize-none`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
              {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
              {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent' : 'Send message'}
            </Button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-accent dark:text-accent-light"
              >
                Thanks — your message is on its way. I'll reply within a day or two.
              </motion.p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
