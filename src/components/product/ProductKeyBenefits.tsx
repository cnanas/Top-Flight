'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, Smile, Leaf } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const BENEFITS = [
  {
    icon: Zap,
    title: 'Sustained energy',
    description: 'Supports sustained energy with smooth onset.',
  },
  {
    icon: Brain,
    title: 'Mental clarity',
    description: 'Promotes mental clarity and concentration.',
  },
  {
    icon: Smile,
    title: 'Balanced mood',
    description: 'Encourages balanced mood and motivation.',
  },
  {
    icon: Leaf,
    title: 'Clean formula',
    description: 'Crafted without artificial stimulants.',
  },
]

export default function ProductKeyBenefits() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Benefits"
          title="Designed for Real World "
          titleHighlight="Performance"
          subtitle="Our formula supports how you work, create, and perform."
          centered
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card border border-slate-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <h3 className="font-inter font-semibold text-dark-950">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
