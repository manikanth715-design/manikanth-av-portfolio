import { valueProps } from '../data/resume'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Waveform } from './Waveform'

export function ValueProposition() {
  return (
    <Section id="value" labelledBy="value-title" className="overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-subtle">07</span>
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            How I contribute
          </p>
          <h2 id="value-title" className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight md:text-[2.75rem]">
            The bridge between what a client needs and what gets built.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Presales is where good AV projects are won — or quietly compromised. I bring engineering discipline to that
            stage so the proposal, the BOQ and the drawings all describe the same system.
          </p>
          <div className="mt-10 opacity-70">
            <Waveform height={70} />
          </div>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {valueProps.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 2) * 80} className="group bg-black p-6 transition-colors duration-500 hover:bg-ink-800 md:p-7">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">{v.title}</h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">{v.body}</p>
              <span aria-hidden="true" className="mt-6 block h-px w-8 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}
