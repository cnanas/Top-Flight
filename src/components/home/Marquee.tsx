'use client'

const MARQUEE_ITEMS = [
  'Smooth Energy',
  'No Jitters',
  'Premium Kava',
  'Top Flight',
  'Calm Focus',
  'All Day',
]

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-8 whitespace-nowrap">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-8">
          <span className="font-inter text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
            {item}
          </span>
          <span className="text-white/30" aria-hidden>
            •
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-900 py-3" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-8 py-1">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  )
}
