import { Award, Building2, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/resume'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeading
        id="experience-title"
        index="03"
        eyebrow="Professional experience"
        title="Owning the presales lifecycle, end to end."
        lead="Client workshops, site surveys, system design, compliant documentation and technical support through commissioning and handover."
      />

      <ol className="relative">
        {experience.map((job) => (
          <li key={job.company} className="relative grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-14">
            {/* Timeline meta column */}
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative border-l border-line pl-6">
                <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(0,209,193,0.15)]" />
                <p className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
                  <Calendar size={13} aria-hidden="true" />
                  <time>{job.start}</time> — <span>{job.end}</span>
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-fg/90">
                  <Building2 size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-muted" />
                  {job.company}
                </p>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                  <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
                  {job.location}
                </p>
                <div className="mt-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-subtle">Sectors</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {job.scope.map((s) => (
                      <li key={s} className="tag !py-1 !text-[0.75rem]">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                {job.groups.map((g, i) => (
                  <Reveal key={g.title} delay={(i % 2) * 90}>
                    <article className="card h-full p-6">
                      <h4 className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                        <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
                        {g.title}
                      </h4>
                      <ul className="mt-5 space-y-3.5">
                        {g.points.map((p) => (
                          <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-fg/85">
                            <span aria-hidden="true" className="mt-[0.7rem] h-px w-2.5 shrink-0 bg-accent/70" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <article className="relative overflow-hidden rounded-2xl border border-accent/25 bg-[linear-gradient(135deg,rgba(0,209,193,0.07),transparent_55%)] p-6 md:p-8">
                  <h4 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
                    <Award size={18} aria-hidden="true" className="text-accent" />
                    Key achievements
                  </h4>
                  <ul className="mt-5 grid gap-x-8 gap-y-4 md:grid-cols-2">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex gap-3 text-[0.92rem] leading-relaxed text-fg/90">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
