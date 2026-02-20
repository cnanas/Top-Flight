'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const STEPS = [
  {
    step: '01',
    title: 'Shake & Open',
    description: 'Each 2 fl oz shot comes ready to drink. No mixing. No measuring. No mess.',
  },
  {
    step: '02',
    title: 'Take Your Shot',
    description:
      'Down the bottle in seconds. The fast-acting liquid formula begins absorbing immediately.',
  },
  {
    step: '03',
    title: 'Feel the Smooth Lift',
    description:
      'Within minutes, experience calm focus and elevated mood. Designed for steady performance — not spikes and crashes.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-slate-50 scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple. Fast. "
          titleHighlight="Effective."
          subtitle="Designed for steady performance — not spikes and crashes."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 relative"
        >
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/30 to-brand-500/0" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 shadow-brand">
                <span className="font-inter text-xl font-extrabold text-white">{step.step}</span>
              </div>
              <h3 className="font-inter text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
