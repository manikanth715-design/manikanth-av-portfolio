import { competencies, summary } from '../data/resume'
import { spotlight } from '../hooks/useSpotlight'
import { RenderImage } from './RenderImage'
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
            From requirement to rack layout. <span className="text-muted">AV design that holds up from presales through delivery.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal className="space-y-6 text-[1.02rem] leading-[1.85] text-muted">
          {summary.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-xl leading-[1.65] text-fg' : ''}>
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120} className="relative">
          <RenderImage
            name="rack"
            alt="Illustrative render of an AV equipment rack with processors, amplifiers and network switches"
            className="aspect-[4/5] max-h-[34rem] w-full rounded-2xl border border-line"
          />
          <div className="absolute -bottom-5 left-4 right-4 flex flex-wrap gap-2">
            {['DSP', 'Amplification', 'Control', 'AV-over-IP'].map((t) => (
              <span key={t} className="tag !border-white/10 !bg-black/80 !text-[0.72rem] !text-white/80 backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <div className="card spotlight overflow-hidden" onMouseMove={spotlight}>
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">Core competencies</h3>
            <span className="font-mono text-[0.7rem] text-subtle">{competencies.length}</span>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((c) => (
              <li
                key={c}
                className="group flex items-start gap-3 border-b border-line/70 px-6 py-5 text-[0.93rem] leading-snug text-fg/90 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <span aria-hidden="true" className="mt-[0.5rem] h-px w-3 shrink-0 bg-accent/60 transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
