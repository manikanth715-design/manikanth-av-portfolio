type MarqueeProps = { items: string[] }

/** Continuously scrolling row of names; pauses on hover. */
export function Marquee({ items }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className="marquee relative overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <ul className="marquee-track flex w-max items-center" aria-label="OEM platforms">
        {row.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-10 px-5 text-2xl font-semibold tracking-tight text-white/35 transition-colors hover:text-white md:text-3xl"
          >
            {item}
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent/60" />
          </li>
        ))}
      </ul>
    </div>
  )
}
