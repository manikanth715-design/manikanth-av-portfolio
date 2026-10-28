import type { ExpertiseGroup } from '../data/resume'
import { spotlight } from '../hooks/useSpotlight'

export function ExpertiseCard({ group }: { group: ExpertiseGroup }) {
  return (
    <article className="card card-hover spotlight group flex h-full flex-col overflow-hidden" onMouseMove={spotlight}>
      {/* Rack-unit style header with screw heads and status LED */}
      <div className="flex items-center justify-between border-b border-line bg-white/[0.015] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-2 w-2 rounded-full border border-line bg-ink-950" />
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{group.code}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/70 transition-colors group-hover:bg-accent" />
          <span aria-hidden="true" className="h-2 w-2 rounded-full border border-line bg-ink-950" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>
        <ul className="mt-6 space-y-0">
          {group.items.map((item) => (
            <li key={item} className="flex items-start gap-3 border-t border-line/60 py-2.5 text-[0.9rem] text-fg/90">
              <span aria-hidden="true" className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent/70 transition-all duration-300 group-hover:w-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
