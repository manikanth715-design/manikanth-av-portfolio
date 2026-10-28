import { renders, type RenderKey } from '../data/renders'
import { useParallax } from '../hooks/useParallax'
import { Reveal } from './Reveal'

type ImageBandProps = {
  name: RenderKey
  eyebrow: string
  title: string
  items: string[]
}

/** Full-bleed cinematic image with parallax and an overlaid statement. */
export function ImageBand({ name, eyebrow, title, items }: ImageBandProps) {
  const parallax = useParallax<HTMLDivElement>(0.12)
  return (
    <section aria-label={eyebrow} className="relative isolate h-[78svh] min-h-[30rem] overflow-hidden bg-black">
      <div ref={parallax} className="absolute -inset-y-[14%] inset-x-0 -z-10 will-change-transform">
        <img src={renders[name]} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.15)_28%,rgba(0,0,0,0.25)_60%,#000_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,transparent_60%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/4 overflow-hidden opacity-60">
        <div className="scan-line h-full w-full bg-[linear-gradient(180deg,transparent,rgba(0,209,193,0.06),transparent)]" />
      </div>

      <div className="container-x flex h-full flex-col justify-end pb-16 md:pb-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden="true" className="rule-draw h-px w-10 bg-accent" />
            {eyebrow}
          </p>
          <p className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-balance md:text-5xl">
            <span className="line-mask">
              <span>{title}</span>
            </span>
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {items.map((t) => (
              <li key={t} className="tag !border-white/15 !bg-black/50 !text-white/80 backdrop-blur">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <span className="absolute bottom-4 right-4 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/40">
        Illustrative render
      </span>
    </section>
  )
}
