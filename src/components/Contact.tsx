import { ArrowUpRight, Download, Link2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { isArtifactBuild, profile } from '../data/resume'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

const fieldClass =
  'w-full rounded-xl border border-line bg-ink-950/70 px-4 py-3 text-[0.95rem] text-fg placeholder:text-subtle transition-colors focus:border-accent/70 focus:outline-none'

/**
 * No backend is configured, so the form composes an email in the visitor's
 * mail client via a mailto: link.
 */
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'copied' | 'copy-failed'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const org = String(data.get('organisation') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = `AV enquiry from ${name}${org ? ` (${org})` : ''}`
    const body = `${message}\n\n— ${name}${org ? `\n${org}` : ''}`
    if (isArtifactBuild) {
      // mailto: is unreliable inside the claude.ai page frame, so copy the message instead.
      navigator.clipboard
        ?.writeText(`To: ${profile.email}\nSubject: ${subject}\n\n${body}`)
        .then(() => setStatus('copied'))
        .catch(() => setStatus('copy-failed'))
      return
    }
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Name</span>
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">
            Organisation <span className="text-subtle">(optional)</span>
          </span>
          <input name="organisation" autoComplete="organization" className={fieldClass} placeholder="Company" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell me about the space, the project stage and what you need."
        />
      </label>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-subtle" aria-live="polite">
          {status === 'sent'
            ? 'Your email app should now open with the message ready to send.'
            : status === 'copied'
              ? `Message copied. Paste it into an email to ${profile.email}.`
              : status === 'copy-failed'
                ? `Couldn't copy automatically. Please email ${profile.email} directly.`
                : isArtifactBuild
                  ? `Copies your message so you can send it to ${profile.email}.`
                  : 'Opens your email app with the message pre-filled.'}
        </p>
        <button type="submit" className="btn btn-primary shrink-0">
          <Send size={15} aria-hidden="true" />
          {isArtifactBuild ? 'Copy message' : 'Compose email'}
        </button>
      </div>
    </form>
  )
}

export function Contact() {
  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone ? [{ icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref }] : []),
    ...(profile.linkedin ? [{ icon: Link2, label: 'LinkedIn', value: 'View profile', href: profile.linkedin }] : []),
  ]

  return (
    <Section id="contact" labelledBy="contact-title">
      <div aria-hidden="true" className="pixel-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]" />
      <div className="relative">
        <SectionHeading
          id="contact-title"
          index="08"
          eyebrow="Contact"
          title={
            <>
              Planning an AV space? <span className="text-muted">Let&rsquo;s talk about the design.</span>
            </>
          }
          lead="Open to conversations with enterprise clients, consultants, OEMs and integrators about AV presales and solution design."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="flex flex-col gap-5">
            <ul className="card divide-y divide-line/70">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-4 p-5 transition-colors hover:bg-ink-700/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-ink-900 text-accent">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">{label}</span>
                      <span className="mt-0.5 block truncate text-[0.98rem] text-fg">{value}</span>
                    </span>
                    <ArrowUpRight size={16} aria-hidden="true" className="text-subtle transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-ink-900 text-accent">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">Location</span>
                  <span className="mt-0.5 block text-[0.98rem] text-fg">{profile.location}</span>
                </span>
              </li>
            </ul>

            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="card card-hover group flex items-center justify-between gap-4 p-5"
              >
                <span>
                  <span className="block text-[0.98rem] font-semibold">Download resume</span>
                  <span className="mt-0.5 block text-sm text-muted">PDF · {profile.name}</span>
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ink-950 transition-transform group-hover:translate-y-0.5">
                  <Download size={17} aria-hidden="true" />
                </span>
              </a>
            )}
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
