import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  labelledBy: string
  children: ReactNode
  className?: string
}

export function Section({ id, labelledBy, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative border-t border-white/[0.04] py-24 md:py-36 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}
