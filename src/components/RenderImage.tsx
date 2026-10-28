import { useEffect, useRef, useState } from 'react'
import { renders, type RenderKey } from '../data/renders'

type RenderImageProps = {
  name: RenderKey
  alt: string
  className?: string
  imgClassName?: string
  caption?: boolean
  eager?: boolean
}

/** Render image with a wipe-in reveal and an "illustrative" caption. */
export function RenderImage({ name, alt, className = '', imgClassName = '', caption = true, eager = false }: RenderImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [visible])

  return (
    <div ref={ref} className={`img-reveal relative overflow-hidden ${visible ? 'is-visible' : ''} ${className}`}>
      <img
        src={renders[name]}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {caption && (
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm">
          Illustrative render
        </span>
      )}
    </div>
  )
}
