'use client'

import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'Is this a stimulant?',
    answer:
      'Formulated to support energy and focus in a smoother, more balanced way compared to traditional stimulants.',
  },
  {
    question: 'Will I experience a crash?',
    answer:
      'Designed to promote steady performance without abrupt energy drops.',
  },
  {
    question: 'Is it legal?',
    answer:
      'Check your local regulations before purchasing.',
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
              className="group rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-4 font-semibold text-slate-900 hover:bg-slate-100/50 transition-colors [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown size={18} className="text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
