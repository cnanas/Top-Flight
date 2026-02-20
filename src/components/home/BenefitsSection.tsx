'use client'

import { motion } from 'framer-motion'
import { Brain, Smile, Zap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const BENEFITS = [
  {
    icon: Zap,
    title: 'Smooth Lift',
    description:
      'Supports sustained energy without overstimulation.',
  },
  {
    icon: Brain,
    title: 'Clear Focus',
    description:
      'Promotes sharper thinking and mental clarity.',
  },
  {
    icon: Smile,
    title: 'Balanced Mood',
    description:
      'Encourages steady motivation and composure.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-slate-50/50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Top Flight"
          title="Not Just Energy — "
          titleHighlight="Controlled Performance"
          subtitle="Designed for smooth focus, steady drive, and balanced mood — without the crash."
          centered
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow border border-slate-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10">
                  <Icon size={24} className="text-brand-500" />
                </div>
                <h3 className="font-inter text-lg font-semibold text-dark-950">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
