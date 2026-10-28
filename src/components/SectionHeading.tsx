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
    <Reveal className="mb-14 max-w-3xl md:mb-20">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-subtle">{index}</span>
        <span aria-hidden="true" className="rule-draw h-px w-10 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-6 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-balance text-fg md:text-[3.25rem]">
        <span className="line-mask">
          <span>{title}</span>
        </span>
      </h2>
      {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
    </Reveal>
  )
}
