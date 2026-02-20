'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What ingredients are in Top Flight, and how do they contribute to its effects?',
    defaultOpen: true,
    answer: (
      <p>
        For detailed information about our key ingredients and the science of how they function, check out our{' '}
        <Link href="/#ingredients" className="text-brand-500 hover:text-brand-600 underline font-medium">
          Learn page for detail info
        </Link>.
      </p>
    ),
  },
  {
    question: 'How should I take Top Flight for the best results?',
    defaultOpen: false,
    answer: (
      <>
        <p>
          In addition to following all directions on the packaging and as follows, it&apos;s best to cycle on and off all cognitive, mood and enhancing supplements. We suggest at most 5 days on, 2 days off.
        </p>
        <p>
          <strong>DIRECTIONS:</strong> For the Ultimate Focus, Energy, Mood Enhancement <strong>CAPSULES:</strong> take 1–2 capsules on an empty stomach 30 minutes prior to desired effects. <strong>LIQUID SHOTS:</strong> take 1/2 bottle on an empty stomach 30 minutes prior to desired effects.
        </p>
        <p>
          <strong>WARNINGS: Do not exceed 4 CAPSULES in 24 hours -OR- 2 BOTTLES in 24 hours, or more than one bottle every 6 hours.</strong>
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
    question: 'What makes Top Flight different from other mood and relaxation supplements on the market?',
    defaultOpen: false,
    answer: (
      <p>
        We don&apos;t rely on caffeine in the Top Flight formula for a false sense of mental and physical boost. Traditional energy drinks or supplements often rely on only caffeine, yet caffeine has been shown to not provide energy. Caffeine merely blocks the neurological signals from the brain that tell us how tired we are. When the caffeine wears off, our brains &apos;catch up&apos; to how tired we really are and have been all along, aka &apos;The Crash&apos;. When only the body is &apos;revved&apos;, users experience the &apos;jitters&apos;, as the brain is often still working at a snail&apos;s pace. <strong>Since Top Flight is formulated to balance the brain and body, there are no jitters or crash.</strong> In fact, most users report they don&apos;t even notice it wears off, only that they eventually find themselves where they started, not worse, like other caffeine-based products leave them. As we say, &quot;Top Flight is Next Level Focus, <span className="underline">No Crash</span>&quot;.
      </p>
    ),
  },
  {
    question: 'Is Top Flight backed by scientific research?',
    defaultOpen: false,
    answer: (
      <p>
        Each ingredient in Top Flight has been thoroughly researched to assure safe levels in every serving and that they show results for their intended function.
      </p>
    ),
  },
  {
    question: 'Where can I purchase Top Flight and what is the pricing?',
    defaultOpen: false,
    answer: (
      <p>
        MSRP $8. Top Flight is still growing distribution partners. If you are interested please{' '}
        <Link href="/wholesale" className="text-brand-500 hover:text-brand-600 underline font-medium">
          contact us
        </Link>.
      </p>
    ),
  },
  {
    question: 'Can I use Top Flight with other supplements or medications?',
    defaultOpen: false,
    answer: (
      <p>
        The potential list of &apos;other supplements or medications&apos; is vast therefore we&apos;re unable to address each and every one. It&apos;s always recommended to speak with your medical or health practitioner when unsure of how any new product may, or may not, interact with anything currently being taken.
      </p>
    ),
  },
  {
    question: 'What is the return and refund policy for Top Flight?',
    defaultOpen: false,
    answer: (
      <p>
        We will refund any unused or unopened product purchased at retail pricing so long as it is submitted as per our{' '}
        <Link href="/terms" className="text-brand-500 hover:text-brand-600 underline font-medium">
          terms and conditions of sale
        </Link>.
      </p>
    ),
  },
  {
    question: 'Where is the product made?',
    defaultOpen: false,
    answer: (
      <p>
        Top Flight is proudly manufactured in the USA, adhering to the highest quality and safety standards. We source our ingredients from reputable suppliers to ensure premium quality.
      </p>
    ),
  },
  {
    question: 'How quickly will I experience results?',
    defaultOpen: false,
    answer: (
      <p>
        Results may vary from person to person. Some users report an improvement in focus and mood shortly after taking Top Flight while for others the full effects may take an hour for onset. Individual responses can depend on factors like metabolism and diet.
      </p>
    ),
  },
  {
    question: 'Is Top Flight habit-forming?',
    defaultOpen: false,
    answer: (
      <p>
        Top Flight is not habit-forming when used as directed. It contains ingredients that enhance focus and cognition without the addictive qualities often associated with pharmaceuticals. It&apos;s essential to follow the recommended directions and not exceed it to maintain responsible use.
      </p>
    ),
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 bg-brand-600">
        <div className="section-container text-center">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Help Center
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Top Flight — ingredients, usage, and more.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto">
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
                <div className="px-5 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 space-y-3 [&_p]:mb-0 [&_p:last-child]:mb-0 [&_a]:font-medium">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
