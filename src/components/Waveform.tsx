// Seamlessly looping waveform: the path covers two identical periods and the
// group translates by -50%, so the loop has no visible seam.

const PERIOD = 600

function wavePath(height: number, amp: number, harmonics: [number, number][]) {
  const mid = height / 2
  const pts: string[] = []
  for (let x = 0; x <= PERIOD * 2; x += 4) {
    const t = (x / PERIOD) * Math.PI * 2
    const envelope = 0.55 + 0.45 * Math.sin(t)
    const y = harmonics.reduce((sum, [k, a]) => sum + a * Math.sin(k * t), 0)
    pts.push(`${x === 0 ? 'M' : 'L'}${x} ${(mid + y * amp * envelope).toFixed(2)}`)
  }
  return pts.join(' ')
}

type WaveformProps = {
  height?: number
  className?: string
}

export function Waveform({ height = 120, className = '' }: WaveformProps) {
  const primary = wavePath(height, height * 0.32, [
    [6, 0.6],
    [11, 0.3],
    [23, 0.12],
  ])
  const secondary = wavePath(height, height * 0.22, [
    [4, 0.5],
    [9, 0.35],
    [17, 0.15],
  ])

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox={`0 0 ${PERIOD} ${height}`}
      preserveAspectRatio="none"
      width="100%"
      height={height}
    >
      <defs>
        <linearGradient id="wf-fade" x1="0" x2="1">
          <stop offset="0" stopColor="#00D1C1" stopOpacity="0" />
          <stop offset="0.2" stopColor="#00D1C1" stopOpacity="1" />
          <stop offset="0.8" stopColor="#00D1C1" stopOpacity="1" />
          <stop offset="1" stopColor="#00D1C1" stopOpacity="0" />
        </linearGradient>
        <mask id="wf-mask">
          <rect width={PERIOD} height={height} fill="url(#wf-fade)" />
        </mask>
      </defs>
      <line x1="0" x2={PERIOD} y1={height / 2} y2={height / 2} stroke="#292D35" strokeWidth="1" />
      <g mask="url(#wf-mask)">
        <g className="wave-scroll-slow" style={{ transformBox: 'fill-box' }}>
          <path d={secondary} fill="none" stroke="#A4A9B3" strokeOpacity="0.28" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </g>
        <g className="wave-scroll" style={{ transformBox: 'fill-box' }}>
          <path d={primary} fill="none" stroke="#00D1C1" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </g>
      </g>
    </svg>
  )
}
