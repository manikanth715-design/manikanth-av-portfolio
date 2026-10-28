// Decorative frequency-spectrum bars. Heights and timings are deterministic so
// the render is stable between reloads.

const BARS = 40

export function Spectrum({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-16 items-end gap-[3px] ${className}`}>
      {Array.from({ length: BARS }, (_, i) => {
        const base = 0.25 + 0.75 * Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11))
        const hot = i > 6 && i < 18
        return (
          <span
            key={i}
            className="eq-bar flex-1 rounded-[1px]"
            style={{
              height: `${Math.round(base * 100)}%`,
              animationDelay: `${(i * 137) % 1900}ms`,
              animationDuration: `${1.8 + ((i * 53) % 10) / 10}s`,
              background: hot ? 'rgba(0,209,193,0.85)' : 'rgba(164,169,179,0.28)',
            }}
          />
        )
      })}
    </div>
  )
}
