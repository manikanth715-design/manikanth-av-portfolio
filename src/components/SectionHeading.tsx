import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  id?: string
}

export function SectionHeading({ index, eyebrow, title, lead, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-subtle">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-fg md:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
    </Reveal>
  )
}
