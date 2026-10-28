import { Info } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

type Stage = { label: string; nodes: string[] }
type Diagram = {
  id: string
  tab: string
  title: string
  summary: string
  stages: Stage[]
  notes: string[]
}

// Generic reference architectures — not designs from any client project.
const diagrams: Diagram[] = [
  {
    id: 'video',
    tab: 'Hybrid meeting room',
    title: 'Video conferencing & collaboration',
    summary:
      'Room sources and far-end participants converge on a UC codec or room compute, then out to displays — with audio and control tied in.',
    stages: [
      { label: 'Room sources', nodes: ['Laptop (wired / wireless)', 'PTZ / bar camera', 'Ceiling microphones'] },
      { label: 'Connectivity & switching', nodes: ['Table connectivity box', 'Presentation switcher', 'Wireless presentation'] },
      { label: 'Conferencing & processing', nodes: ['MTR / Zoom Rooms / Cisco codec', 'Audio DSP with AEC', 'Room control processor'] },
      { label: 'Display system', nodes: ['Dual front-of-room displays', 'Touch controller / panel', 'In-room loudspeakers'] },
    ],
    notes: ['Native Microsoft Teams / Zoom Rooms or Cisco platform', 'Echo cancellation at the DSP', 'One-touch join from the panel'],
  },
  {
    id: 'audio',
    tab: 'Audio system',
    title: 'Professional audio signal flow',
    summary: 'Speech pickup is processed in a DSP — gain, EQ, echo cancellation, mixing — then amplified and distributed to zoned loudspeakers.',
    stages: [
      { label: 'Microphones', nodes: ['Ceiling array', 'Wireless handheld / lapel', 'Gooseneck / table'] },
      { label: 'DSP / audio processing', nodes: ['Gain & EQ', 'AEC & noise reduction', 'Auto-mixing & routing'] },
      { label: 'Amplification', nodes: ['Multichannel amplifier', 'Zone-level control'] },
      { label: 'Loudspeakers', nodes: ['Ceiling speakers', 'Wall / column arrays', 'Program & voice-lift zones'] },
    ],
    notes: ['Networked audio between devices', 'DSP-centred signal flow', 'Coverage planned per room zone'],
  },
  {
    id: 'control',
    tab: 'Control system',
    title: 'Control & automation',
    summary: 'A single touch interface drives a control processor that orchestrates displays, audio, sources and room environment over IP, serial and IR.',
    stages: [
      { label: 'User interface', nodes: ['Touch panel', 'Keypad / scheduling panel'] },
      { label: 'Control processor', nodes: ['Control processor', 'Network switch (control VLAN)'] },
      { label: 'Controlled devices', nodes: ['Displays & projectors', 'Audio DSP & levels', 'Lighting, blinds & cameras'] },
    ],
    notes: ['Crestron, Extron or Q-SYS ecosystems', 'IP, RS-232 and IR control', 'Preset scenes for common room modes'],
  },
  {
    id: 'wall',
    tab: 'Video wall / AV-over-IP',
    title: 'Command centre visualisation',
    summary:
      'Multiple feeds are encoded onto the network, routed and composed by a video wall processor, and decoded to a tiled LCD or direct-view LED wall.',
    stages: [
      { label: 'Sources', nodes: ['Operator workstations', 'CCTV / NVR streams', 'Dashboards & media players'] },
      { label: 'AV-over-IP encoding', nodes: ['Encoders', 'Managed AV network switch'] },
      { label: 'Wall processing', nodes: ['Video wall controller', 'Layout & preset management'] },
      { label: 'Display', nodes: ['Tiled LCD video wall', 'Active LED / direct-view LED', 'Operator monitors'] },
    ],
    notes: ['Scalable, network-based distribution', 'Any source to any window', 'Operator presets for incidents and shifts'],
  },
]

function Connector() {
  return (
    <div aria-hidden="true" className="relative flex shrink-0 items-center justify-center md:w-10">
      {/* vertical on mobile, horizontal on desktop */}
      <div className="relative h-8 w-px bg-accent/35 md:h-px md:w-full">
        <span className="pulse-y absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_#00D1C1] md:hidden" />
        <span className="pulse-x absolute top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_#00D1C1] md:block" />
      </div>
      <span className="absolute bottom-0 h-0 w-0 border-x-[4px] border-t-[5px] border-x-transparent border-t-accent/60 md:bottom-auto md:right-0 md:border-y-[4px] md:border-l-[5px] md:border-r-0 md:border-y-transparent md:border-l-accent/60" />
    </div>
  )
}

function FlowDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch" aria-label={`${diagram.title} signal flow`}>
      {diagram.stages.map((stage, i) => (
        <li
          key={stage.label}
          className={`flex flex-col md:flex-row ${i < diagram.stages.length - 1 ? 'md:flex-[1_1_0%]' : 'md:flex-[0.86_1_0%]'}`}
        >
          <div className="fade-in flex-1" style={{ animationDelay: `${i * 70}ms` }}>
            <div className="h-full rounded-xl border border-line bg-ink-950/60 p-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent">
                {String(i + 1).padStart(2, '0')} · {stage.label}
              </p>
              <ul className="mt-3 space-y-2">
                {stage.nodes.map((n) => (
                  <li
                    key={n}
                    className="rounded-lg border border-line/80 bg-ink-800 px-3 py-2.5 text-[0.84rem] leading-snug text-fg/90 transition-colors hover:border-accent/50"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {i < diagram.stages.length - 1 && <Connector />}
        </li>
      ))}
    </ol>
  )
}

export function DesignShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const active = diagrams[activeIdx]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = diagrams.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = activeIdx === last ? 0 : activeIdx + 1
    if (e.key === 'ArrowLeft') next = activeIdx === 0 ? last : activeIdx - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setActiveIdx(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section id="design" labelledBy="design-title">
      <SectionHeading
        id="design-title"
        index="05"
        eyebrow="AV system design showcase"
        title="How integrated AV systems fit together."
        lead="Explore simplified signal flows for the system types I design most often. These are illustrative reference architectures — not designs from any client project."
      />

      <Reveal>
        <div className="card overflow-hidden">
          <div
            role="tablist"
            aria-label="Reference architectures"
            onKeyDown={onKeyDown}
            className="flex gap-1 overflow-x-auto border-b border-line bg-ink-900/60 p-2 [scrollbar-width:none]"
          >
            {diagrams.map((d, i) => (
              <button
                key={d.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                type="button"
                id={`tab-${d.id}`}
                aria-selected={i === activeIdx}
                aria-controls={`panel-${d.id}`}
                tabIndex={i === activeIdx ? 0 : -1}
                onClick={() => setActiveIdx(i)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  i === activeIdx ? 'bg-ink-700 text-fg shadow-[inset_0_-2px_0_#00D1C1]' : 'text-muted hover:text-fg'
                }`}
              >
                {d.tab}
              </button>
            ))}
          </div>

          <div
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            tabIndex={0}
            className="line-grid p-5 md:p-8"
          >
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{active.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{active.summary}</p>
              </div>
              <p className="tag shrink-0 self-start md:self-auto">
                <Info size={13} aria-hidden="true" className="text-accent" />
                Illustrative reference architecture
              </p>
            </div>

            <FlowDiagram diagram={active} />

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6">
              {active.notes.map((n) => (
                <li key={n} className="flex items-center gap-2.5 text-sm text-muted">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
