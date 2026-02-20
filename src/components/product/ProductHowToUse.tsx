'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'

export default function ProductHowToUse() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container max-w-2xl mx-auto text-center">
        <SectionHeading
          eyebrow="Usage"
          title="Suggested "
          titleHighlight="Use"
          centered
          className="mb-6"
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-card border border-slate-100"
        >
          <p className="text-slate-700 leading-relaxed mb-4">
            Take one shot daily or as needed. Best taken with food.
          </p>
          <p className="text-sm text-slate-500">
            Do not exceed recommended daily amount.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
