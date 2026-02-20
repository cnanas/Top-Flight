'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'

const EXPERIENCES = [
  'Calm but alert.',
  'Motivated but controlled.',
  'Focused without jitters.',
  'Steady productivity without abrupt crashes.',
]

export default function ProductWhatItFeelsLike() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="What Users "
          titleHighlight="Experience"
          centered
          className="mb-10"
        />
        <motion.ul
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl mx-auto"
        >
          {EXPERIENCES.map((line, i) => (
            <li
              key={line}
              className="flex items-center gap-3 rounded-xl bg-slate-50 px-5 py-4 font-medium text-slate-800 border border-slate-100"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 text-sm font-bold">
                {i + 1}
              </span>
              {line}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
