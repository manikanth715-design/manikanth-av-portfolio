import { competencies, summary } from '../data/resume'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow="Professional overview"
        title={
          <>
            From requirement to rack layout —{' '}
            <span className="text-muted">AV design that holds up from presales through delivery.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal className="space-y-6 text-[1.02rem] leading-[1.8] text-muted">
          {summary.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lg leading-[1.7] text-fg' : ''}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">Core competencies</h3>
              <span className="font-mono text-[0.7rem] text-subtle">{competencies.length} modules</span>
            </div>
            <ul className="grid sm:grid-cols-2">
              {competencies.map((c, i) => (
                <li
                  key={c}
                  className="group flex items-start gap-3 border-b border-line/60 px-5 py-4 text-[0.92rem] leading-snug text-fg/90 transition-colors hover:bg-ink-700/50 sm:odd:border-r"
                >
                  <span className="mt-[0.2rem] font-mono text-[0.65rem] text-subtle transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
