import type { ProjectType } from '../data/resume'
import { RoomGlyph } from './RoomGlyph'

export function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="pixel-grid relative aspect-[200/128] border-b border-line bg-ink-900/70 p-6">
        <span className="absolute left-4 top-3.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-subtle">
          Type {String(index + 1).padStart(2, '0')}
        </span>
        <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">
          <RoomGlyph type={project.glyph} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
          {project.sectors.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">{project.scope}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md border border-line px-2 py-1 text-[0.72rem] text-fg/80">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
