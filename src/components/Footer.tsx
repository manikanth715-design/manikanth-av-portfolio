import { ArrowUp } from 'lucide-react'
import { profile } from '../data/resume'
import { navItems } from '../data/nav'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-x">
        <div className="flex items-center justify-between gap-4 border-t border-line/60 py-6 text-xs text-subtle">
        <p>
          © {year} {profile.name}. Personal portfolio.
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
          Back to top <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
