'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What Is Top Flight Kava Shot and How Does It Work?',
    defaultOpen: true,
    answer: (
      <p>
        Top Flight is a kava‑based supplement formulated to promote relaxation, support mood balance and deliver a smooth, long‑lasting calming effect. Each shot combines Phenibut (4‑Amino‑3‑Phenylbutanoic Acid), L‑Theanine, Piper Methysticum (Kava), and Sceletium Tortuosum (Kanna). These ingredients work together to support calmness, reduce mental tension and help you maintain a clear, balanced state of mind. Purified water, natural flavors and citric acid ensure a pleasant taste without unnecessary additives.
      </p>
    ),
  },
  {
    question: 'What ingredients are in Top Flight, and how do they contribute to its effects?',
    defaultOpen: true,
    answer: (
      <p>
        Detailed overview of all our ingredients can be found{' '}
        <Link href="/#ingredients" className="text-brand-500 hover:text-brand-600 underline font-medium">
          here
        </Link>
      </p>
    ),
  },
  {
    question: 'How to Take Top Flight',
    defaultOpen: false,
    answer: (
      <>
        <p>
          In additional to following all directions on the packaging and as follows, it&apos;s best to cycle on and off all cognitive, mood and enhancing supplements. We suggest at most 5 days on, 2 days off.
        </p>
        <p>
          <strong>DIRECTIONS:</strong> For relaxation on your schedule, shake well and drink <strong>½ bottle (1 fl oz)</strong> on an empty stomach <strong>30 minutes before you need calm</strong>. Do not exceed <strong>2 bottles in a 24‑hour period</strong> or more than <strong>1 bottle every 6 hours</strong>.
        </p>
        <p>
          <strong>WARNINGS: Do not exceed- 2 BOTTLES in 24 hours, or more than one bottle every 6 hours.</strong>
        </p>
        <p>
          <strong>Do not take if you are under 18 years of age, nursing, pregnant or under medical care. Contains caffeine equivalent to about one cup of premium coffee and is not for those sensitive to caffeine. Alcohol may intensify effects. USE WITH CAUTION.</strong>
        </p>
        <p>
          <em><strong>*This product and these statements have not been evaluated by the FDA, and is not intended to treat, cure, or prevent disease.</strong></em>
        </p>
      </>
    ),
  },
  {
    question: 'What Makes Top Flight Different?',
    defaultOpen: false,
    answer: (
      <p>
        Unlike caffeinated products that mask fatigue, <strong>Top Flight Kava Shots</strong> use a balanced blend of ingredients to genuinely support relaxation and mood. You can enjoy calm without jitters, crashes or mental fog. Its convenient liquid format fits in a pocket or bag, making it easy to take anywhere. Whether you need to unwind after a hectic day or stay centered during stressful moments, <strong>Top Flight</strong> helps you rise above the turbulence and land smoothly.
      </p>
    ),
  },
]

export default function ProductFAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-2xl mx-auto">
        <h2 className="font-inter text-2xl font-bold text-dark-950 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              open={item.defaultOpen}
              className="group rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-4 font-semibold text-slate-900 hover:bg-slate-100/50 transition-colors [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown size={18} className="text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 space-y-3 [&_p]:mb-0 [&_p:last-child]:mb-0">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
