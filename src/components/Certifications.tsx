import { BadgeCheck, GraduationCap } from 'lucide-react'
import { certifications, education } from '../data/resume'
import { spotlight } from '../hooks/useSpotlight'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Certifications() {
  return (
    <Section id="certifications" labelledBy="certifications-title">
      <SectionHeading
        id="certifications-title"
        index="06"
        eyebrow="Certifications & learning"
        title="OEM training that keeps designs current."
        lead="Formal product and technical training from leading AV manufacturers, alongside an engineering degree."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <Reveal key={c.issuer} delay={i * 70} className="h-full">
            <article className="card card-hover spotlight group flex h-full flex-col p-6" onMouseMove={spotlight}>
              <BadgeCheck size={20} aria-hidden="true" className="text-accent transition-transform duration-500 group-hover:rotate-[360deg]" />
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{c.issuer}</h3>
              <p className="mt-1.5 text-sm text-muted">{c.name}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-4 text-sm text-subtle">Plus additional OEM product trainings.</p>
      </Reveal>

      <Reveal className="mt-14">
        <article className="card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-ink-900 text-accent">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow !text-muted">Education</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1 text-[0.95rem] text-muted">
              {education.institution} — {education.location}
            </p>
          </div>
          <p className="font-mono text-2xl text-fg/80">{education.year}</p>
        </article>
      </Reveal>
    </Section>
  )
}
