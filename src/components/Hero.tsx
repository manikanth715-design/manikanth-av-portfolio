import { ArrowRight, Download, MapPin } from 'lucide-react'
import { keyFacts, profile } from '../data/resume'
import { renders } from '../data/renders'
import { useParallax } from '../hooks/useParallax'
import { CountUp } from './CountUp'
import { Waveform } from './Waveform'

const chain = ['Sources', 'Switching', 'Processing', 'Display']

function SignalChip() {
  return (
    <div
      aria-hidden="true"
      className="rise hidden w-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md lg:block"
      style={{ animationDelay: '1100ms' }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70">
          <span className="led-blink h-1.5 w-1.5 rounded-full bg-accent" />
          Signal path
        </span>
        <span className="font-mono text-[0.6rem] text-white/40">Ref. architecture</span>
      </div>
      <div className="px-1 py-2">
        <Waveform height={56} />
      </div>
      <div className="grid grid-cols-4 border-t border-white/10">
        {chain.map((stage, i) => (
          <div
            key={stage}
            className={`px-2 py-2.5 text-center font-mono text-[0.55rem] uppercase tracking-[0.1em] ${
              i < chain.length - 1 ? 'border-r border-white/10' : ''
            } ${i === 2 ? 'text-accent' : 'text-white/55'}`}
          >
            {stage}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  const parallax = useParallax<HTMLDivElement>(0.07)
  const [lead, rest] = profile.headline.split(' & ')

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black">
      {/* Full-bleed render with parallax */}
      <div className="absolute inset-0 -z-10">
        <div ref={parallax} className="absolute -inset-y-[8%] inset-x-0 will-change-transform">
          <img
            src={renders.boardroom}
            alt=""
            fetchPriority="high"
            className="hero-zoom h-full w-full object-cover object-[62%_50%] opacity-0"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_30%,rgba(0,0,0,0.45)_62%,rgba(0,0,0,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,transparent_22%,transparent_60%,#000_100%)]" />
        <div className="absolute inset-0 bg-black/70 md:hidden" />
        <div aria-hidden="true" className="pixel-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(90deg,black,transparent_55%)]" />
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center pt-32 pb-12">
        <div className="max-w-3xl">
          <p className="rise eyebrow flex items-center gap-3" style={{ animationDelay: '200ms' }}>
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            {profile.title}
          </p>

          <h1 id="hero-title" className="mt-7 text-[3rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[5.6rem]">
            <span className="line-mask">
              <span className="line-up" style={{ animationDelay: '300ms' }}>
                {profile.name}
              </span>
            </span>
            <span className="line-mask mt-4 text-[0.42em] font-medium leading-[1.15] tracking-[-0.02em] text-white/70">
              <span className="line-up" style={{ animationDelay: '480ms' }}>
                {lead} <span className="text-accent">&amp;</span> {rest}
              </span>
            </span>
          </h1>

          <p className="rise mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg" style={{ animationDelay: '700ms' }}>
            {profile.intro}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '850ms' }}>
            <a href="#expertise" className="btn btn-primary">
              Explore My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-ghost !bg-black/40 backdrop-blur">
                <Download size={16} aria-hidden="true" className="text-accent" />
                Download Resume
              </a>
            )}
            <a href="#contact" className="px-3 py-2 text-sm font-semibold text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">
              Contact Me
            </a>
          </div>

          <p className="rise mt-10 flex items-center gap-2 text-sm text-white/50" style={{ animationDelay: '1000ms' }}>
            <MapPin size={15} aria-hidden="true" className="text-accent" />
            {profile.location}
          </p>
        </div>

        <div className="absolute bottom-12 right-8 xl:right-[max(2rem,calc((100vw-76rem)/2+2rem))]">
          <SignalChip />
        </div>
      </div>

      <div className="container-x relative pb-8">
        <dl className="rise grid grid-cols-2 border-t border-white/10 md:grid-cols-4" style={{ animationDelay: '1200ms' }}>
          {keyFacts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col py-6 pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-0' : ''} ${i < 2 ? 'border-b border-white/10 md:border-b-0' : ''}`}
            >
              <dt className="order-2 mt-1.5 text-[0.8rem] leading-snug text-white/55">{fact.label}</dt>
              <dd className="order-1 text-4xl font-semibold tracking-tight text-white">
                <CountUp value={fact.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
