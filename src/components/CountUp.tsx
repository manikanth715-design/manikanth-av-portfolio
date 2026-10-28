import { useEffect, useRef, useState } from 'react'

/** Animates the numeric part of a value like "6+" when it scrolls into view. */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : ''
  const hasMatch = match !== null
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!el || !hasMatch || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      setN(0)
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, hasMatch])

  if (!match) return <span>{value}</span>
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}
