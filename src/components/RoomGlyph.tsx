import type { ProjectType } from '../data/resume'

// Minimal line drawings of AV spaces. Purely decorative.

const S = { fill: 'none', stroke: '#A4A9B3', strokeOpacity: 0.55, strokeWidth: 1.2 } as const
const A = { fill: 'none', stroke: '#00D1C1', strokeWidth: 1.4 } as const

function Boardroom() {
  return (
    <>
      <rect x="70" y="18" width="60" height="34" rx="2" {...A} />
      <circle cx="100" cy="14" r="2" fill="#00D1C1" />
      <ellipse cx="100" cy="92" rx="56" ry="14" {...S} />
      {[52, 76, 100, 124, 148].map((x) => (
        <circle key={x} cx={x} cy="72" r="4" {...S} />
      ))}
      {[52, 76, 100, 124, 148].map((x) => (
        <circle key={`b${x}`} cx={x} cy="112" r="4" {...S} />
      ))}
      <path d="M100 52 V78" {...A} className="signal-path" />
      <circle cx="100" cy="88" r="3" {...A} />
    </>
  )
}

function Auditorium() {
  return (
    <>
      <rect x="40" y="16" width="120" height="30" rx="2" {...A} />
      <rect x="26" y="20" width="8" height="18" rx="1" {...S} />
      <rect x="166" y="20" width="8" height="18" rx="1" {...S} />
      {[64, 80, 96, 112].map((y, i) => (
        <path key={y} d={`M${34 - i * 6} ${y} Q100 ${y + 10} ${166 + i * 6} ${y}`} {...S} />
      ))}
      <path d="M30 38 Q60 70 100 60" {...A} className="signal-path" strokeOpacity="0.7" />
    </>
  )
}

function Classroom() {
  return (
    <>
      <rect x="56" y="16" width="88" height="40" rx="2" {...A} />
      <path d="M100 56 V64" {...S} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}${c}`} x={48 + c * 28} y={74 + r * 16} width="20" height="8" rx="1.5" {...S} />
        )),
      )}
      <circle cx="30" cy="30" r="5" {...S} />
      <path d="M35 30 H56" {...A} className="signal-path" />
    </>
  )
}

function Videowall() {
  return (
    <>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}${c}`}
            x={40 + c * 30.5}
            y={14 + r * 22}
            width="29"
            height="20.5"
            {...(r === 1 && (c === 1 || c === 2) ? A : S)}
          />
        )),
      )}
      <path d="M100 82 V100" {...S} />
      <rect x="78" y="100" width="44" height="14" rx="2" {...S} />
      <path d="M100 82 V100" {...A} className="signal-path" />
    </>
  )
}

function Control() {
  return (
    <>
      <path d="M30 20 L170 20 L160 60 L40 60 Z" {...S} />
      {[0, 1, 2, 3].map((c) => (
        <path key={c} d={`M${48 + c * 28} 26 L${76 + c * 28} 26 L${74 + c * 28} 54 L${50 + c * 28} 54 Z`} {...(c === 1 ? A : S)} />
      ))}
      <path d="M36 100 Q100 76 164 100" {...S} />
      {[60, 86, 114, 140].map((x) => (
        <rect key={x} x={x - 8} y="96" width="16" height="6" rx="1" {...S} />
      ))}
      <path d="M100 60 V88" {...A} className="signal-path" />
    </>
  )
}

function Experience() {
  return (
    <>
      <path d="M24 100 L24 30 Q100 6 176 30 L176 100" {...S} />
      <path d="M44 92 L44 40 Q100 22 156 40 L156 92" {...A} />
      <circle cx="100" cy="98" r="10" {...S} />
      <circle cx="100" cy="98" r="3" fill="#00D1C1" />
      <path d="M100 88 V58" {...A} className="signal-path" />
    </>
  )
}

const glyphs: Record<ProjectType['glyph'], () => React.JSX.Element> = {
  boardroom: Boardroom,
  auditorium: Auditorium,
  classroom: Classroom,
  videowall: Videowall,
  control: Control,
  experience: Experience,
}

export function RoomGlyph({ type }: { type: ProjectType['glyph'] }) {
  const Glyph = glyphs[type]
  return (
    <svg aria-hidden="true" viewBox="0 0 200 128" className="h-full w-full">
      <Glyph />
    </svg>
  )
}
