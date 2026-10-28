import { expertise, oemGroups, spaces } from '../data/resume'
import { ExpertiseCard } from './ExpertiseCard'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Expertise() {
  return (
    <Section id="expertise" labelledBy="expertise-title" >
      <SectionHeading
        id="expertise-title"
        index="02"
        eyebrow="Technical expertise"
        title="Engineering depth across design, presales and documentation."
        lead="Three disciplines that work together on every opportunity — system architecture, commercial and compliance rigour, and drawings that carry a design into execution."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {expertise.map((group, i) => (
          <Reveal key={group.id} delay={i * 90} className="h-full">
            <ExpertiseCard group={group} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="eyebrow !text-muted">Spaces designed for</h3>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {spaces.map((s) => (
            <li key={s} className="tag !text-[0.85rem] !text-fg/90">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-20">
        <Marquee items={oemGroups.flatMap((g) => g.brands)} />
      </Reveal>

      <Reveal className="mt-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h3 className="eyebrow !text-muted">AV technology &amp; OEM exposure</h3>
          <p className="max-w-md text-xs leading-relaxed text-subtle">
            Hands-on coordination, product evaluation and solution-design exposure through presales engagements. Not an
            indication of formal partnership.
          </p>
        </div>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {oemGroups.map((g, i) => (
            <div
              key={g.category}
              className={`bg-ink-800/60 p-6 transition-colors duration-300 hover:bg-ink-700/60 ${i > 0 ? 'border-t border-line sm:border-t-0' : ''} ${
                i % 2 === 1 ? 'sm:border-l' : ''
              } ${i > 1 ? 'sm:border-t lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l' : ''} border-line`}
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">0{i + 1}</p>
              <h4 className="mt-3 text-sm font-semibold text-fg">{g.category}</h4>
              <ul className="mt-4 space-y-1.5">
                {g.brands.map((b) => (
                  <li key={b} className="text-lg font-medium tracking-tight text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
