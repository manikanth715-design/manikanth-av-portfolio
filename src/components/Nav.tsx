import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data/nav'
import { profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = [
  'home',
  'about',
  'expertise',
  'experience',
  'projects',
  'design',
  'certifications',
  'value',
  'contact',
]

// Sections without their own nav item highlight the nearest preceding one.
const navFor: Record<string, string> = { design: 'projects', value: 'certifications' }

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const active = navFor[activeSection] ?? activeSection

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line/70 bg-ink-950/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-ink-800 focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-ink-800 font-mono text-[0.7rem] font-medium text-accent transition-colors group-hover:border-accent/60"
          >
            MY
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={`relative rounded-full px-3 py-2 text-[0.86rem] transition-colors ${
                  active === item.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="btn btn-ghost hidden !px-4 !py-2 text-[0.84rem] sm:inline-flex"
            >
              <Download size={15} aria-hidden="true" className="text-accent" />
              Resume
            </a>
          )}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fade-in h-[calc(100dvh-4rem)] bg-ink-950 overflow-y-auto border-t border-line/70 lg:hidden">
          <ul className="container-x flex flex-col py-6">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'location' : undefined}
                  className={`flex items-baseline gap-4 border-b border-line/60 py-4 text-2xl font-semibold tracking-tight ${
                    active === item.id ? 'text-fg' : 'text-muted'
                  }`}
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {profile.resumeUrl && (
            <div className="container-x pb-10">
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-primary w-full">
                <Download size={16} aria-hidden="true" />
                Download Resume (PDF)
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
