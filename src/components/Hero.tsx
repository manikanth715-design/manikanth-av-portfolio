import { ArrowRight, Download, MapPin } from 'lucide-react'
import { keyFacts, profile } from '../data/resume'
import { Spectrum } from './Spectrum'
import { Waveform } from './Waveform'

const chain = ['Sources', 'Switching', 'Processing', 'Display']

function SignalConsole() {
  return (
    <div aria-hidden="true" className="card overflow-hidden !rounded-2xl">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <span className="led-blink h-1.5 w-1.5 rounded-full bg-accent" />
          Signal monitor
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-line" />
          ))}
        </div>
      </div>

      <div className="pixel-grid relative px-2 py-6">
        <Waveform height={130} />
      </div>

      <div className="border-t border-line px-5 pb-5 pt-4">
        <div className="mb-3 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.14em] text-subtle">
          <span>20 Hz</span>
          <span>Spectrum</span>
          <span>20 kHz</span>
        </div>
        <Spectrum />
      </div>

      <div className="grid grid-cols-4 border-t border-line">
        {chain.map((stage, i) => (
          <div
            key={stage}
            className={`relative px-3 py-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.12em] ${
              i < chain.length - 1 ? 'border-r border-line' : ''
            } ${i === 2 ? 'text-accent' : 'text-muted'}`}
          >
            <span className="mb-2 block text-[0.55rem] text-subtle">0{i + 1}</span>
            {stage}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-10">
      <div aria-hidden="true" className="line-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_70%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: 'radial-gradient(circle, #00D1C1, transparent 65%)' }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="rise eyebrow flex flex-wrap items-center gap-x-3 gap-y-2" style={{ animationDelay: '80ms' }}>
            <span>{profile.title}</span>
          </p>

          <h1
            id="hero-title"
            className="rise mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.6rem]"
            style={{ animationDelay: '160ms' }}
          >
            {profile.name}
            <span className="mt-3 block text-[0.52em] font-medium leading-[1.15] tracking-[-0.02em] text-muted">
              {profile.headline.split(' & ')[0]} <span className="text-accent">&amp;</span>{' '}
              {profile.headline.split(' & ')[1]}
            </span>
          </h1>

          <p className="rise mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg" style={{ animationDelay: '260ms' }}>
            {profile.intro}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '360ms' }}>
            <a href="#expertise" className="btn btn-primary">
              Explore My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-ghost">
                <Download size={16} aria-hidden="true" className="text-accent" />
                Download Resume
              </a>
            )}
            <a href="#contact" className="px-3 py-2 text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-fg hover:underline">
              Contact Me
            </a>
          </div>

          <p className="rise mt-9 flex items-center gap-2 text-sm text-subtle" style={{ animationDelay: '440ms' }}>
            <MapPin size={15} aria-hidden="true" className="text-accent" />
            {profile.location}
          </p>
        </div>

        <div className="rise" style={{ animationDelay: '300ms' }}>
          <SignalConsole />
        </div>

        <dl className="rise grid grid-cols-2 border-t border-line/70 md:grid-cols-4 lg:col-span-2" style={{ animationDelay: '520ms' }}>
          {keyFacts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col py-6 pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-0' : ''} ${i < 2 ? 'border-b border-line/70 md:border-b-0' : ''}`}
            >
              <dt className="order-2 mt-1 text-[0.8rem] leading-snug text-muted">{fact.label}</dt>
              <dd className="order-1 font-mono text-3xl font-medium tracking-tight text-fg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

    </section>
  )
}
