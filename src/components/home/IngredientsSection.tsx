'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const INGREDIENTS = [
  {
    name: 'Premium Botanical Blend',
    dose: 'Proprietary',
    description:
      'Carefully sourced plant extracts for calm energy, sharper focus, and balanced mood.',
  },
  {
    name: 'Vitamin B Complex',
    dose: 'B3, B6, B12',
    description:
      'Supports energy metabolism and healthy brain function.',
  },
  {
    name: 'Magnesium Glycinate',
    dose: 'As magnesium glycinate',
    description:
      'Supports muscle and nervous system balance.',
  },
  {
    name: 'L-Theanine',
    dose: 'Functional blend',
    description:
      'Promotes relaxed alertness and complements the botanical blend.',
  },
]

export default function IngredientsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="What's Inside"
          title="Purpose-Driven "
          titleHighlight="Ingredients"
          subtitle="Every ingredient in Top Flight serves a purpose. No fillers. No shortcuts."
          centered
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {INGREDIENTS.map((ingredient, i) => (
            <motion.div
              key={ingredient.name}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-inter font-bold text-slate-900 text-lg">{ingredient.name}</h3>
                <span className="flex-shrink-0 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-0.5 text-xs font-semibold text-brand-500">
                  {ingredient.dose}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{ingredient.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </section>
  )
}
