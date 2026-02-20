'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp } from '@/lib/motion'

const TOP_FLIGHT = ['Smooth', 'Balanced', 'Sustained']
const TRADITIONAL = ['Spikes', 'Jitters', 'Crash']

export default function ProductComparison() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Compare"
          title="Top Flight vs. Traditional "
          titleHighlight="Energy Products"
          centered
          className="mb-12"
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl bg-white p-6 shadow-card border-2 border-brand-500/20">
            <h3 className="font-inter font-bold text-brand-600 text-lg mb-4">Top Flight</h3>
            <ul className="space-y-3">
              {TOP_FLIGHT.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <Check size={18} className="text-brand-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card border border-slate-200">
            <h3 className="font-inter font-bold text-slate-500 text-lg mb-4">Traditional Energy Products</h3>
            <ul className="space-y-3">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-500">
                  <X size={18} className="text-slate-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
