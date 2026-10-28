import { Landmark, Building } from 'lucide-react'
import { clients, myRole, projectTypes } from '../data/resume'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" className="bg-ink-900/40">
      <SectionHeading
        id="projects-title"
        index="04"
        eyebrow="Projects & industry experience"
        title="Spaces I design for, and the organisations behind them."
        lead="Solution categories from enterprise, government, healthcare, education and BFSI engagements. Project specifics are kept general out of respect for client confidentiality."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectTypes.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 80} className="h-full">
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="card grid gap-6 p-6 md:grid-cols-[14rem_1fr] md:items-center md:p-8">
          <h3 className="text-lg font-semibold tracking-tight">
            My role <span className="text-muted">on each engagement</span>
          </h3>
          <ol className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {myRole.map((r, i) => (
              <li key={r} className="flex items-baseline gap-3 text-[0.9rem] text-fg/90">
                <span className="font-mono text-[0.65rem] text-accent">{String(i + 1).padStart(2, '0')}</span>
                {r}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal className="mt-20">
        <h3 className="eyebrow !text-muted">Selected clients</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtle">
          AV solution design and technical presales support delivered with Four Corners Technology Pvt. Ltd.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="card p-6 md:p-8">
            <h4 className="flex items-center gap-2.5 text-sm font-semibold">
              <Building size={16} aria-hidden="true" className="text-accent" />
              Enterprise &amp; institutional
            </h4>
            <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
              {clients.enterprise.map((c) => (
                <li key={c} className="border-t border-line/60 py-2.5 text-[0.92rem] text-fg/85">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 md:p-8">
            <h4 className="flex items-center gap-2.5 text-sm font-semibold">
              <Landmark size={16} aria-hidden="true" className="text-accent" />
              Central government &amp; defence (AV design)
            </h4>
            <ul className="mt-6">
              {clients.government.map((c) => (
                <li key={c} className="border-t border-line/60 py-2.5 text-[0.92rem] text-fg/85">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
