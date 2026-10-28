import { useEffect, useRef } from 'react'

/**
 * Translates the element vertically as its parent scrolls through the
 * viewport. `strength` is the maximum shift as a fraction of the parent's
 * height, so the element needs at least that much bleed on each side.
 */
export function useParallax<T extends HTMLElement>(strength = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.parentElement!.getBoundingClientRect()
      // -1 when the section is entering from below, 1 when leaving at the top
      const t = (window.innerHeight / 2 - (r.top + r.height / 2)) / (window.innerHeight / 2 + r.height / 2)
      const offset = Math.max(-1, Math.min(1, t)) * r.height * strength
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])

  return ref
}
