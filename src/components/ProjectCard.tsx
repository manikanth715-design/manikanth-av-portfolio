import { ArrowUpRight } from 'lucide-react'
import type { ProjectType } from '../data/resume'
import { spotlight } from '../hooks/useSpotlight'
import { RenderImage } from './RenderImage'

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <article className="card spotlight group flex h-full flex-col overflow-hidden transition-colors duration-500 hover:border-accent/40" onMouseMove={spotlight}>
      <div className="relative overflow-hidden">
        <RenderImage
          name={project.image}
          alt={`Illustrative render: ${project.title}`}
          caption={false}
          className="aspect-[16/10]"
          imgClassName="brightness-90 group-hover:scale-[1.06] group-hover:brightness-110"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(13,14,17,0.95))]" />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.sectors.map((s) => (
            <li key={s} className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/80 backdrop-blur">
              {s}
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-accent text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">{project.scope}</p>
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md border border-line px-2 py-1 text-[0.72rem] text-fg/75 transition-colors group-hover:border-white/15">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
