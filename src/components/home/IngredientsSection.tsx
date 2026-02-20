'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const INGREDIENTS = [
  {
    title: 'Your Gateway to Zen-like Focus',
    name: 'Phenibut',
    pronunciation: 'FEE-nuh-but',
    description:
      "Phenibut's calming effects create a focused, stress-free mind that's ready to conquer challenges.",
  },
  {
    title: 'Serenity Meets Laser Focus',
    name: 'L-Theanine',
    pronunciation: 'el-THEE-uh-neen',
    description:
      'L-Theanine within the Top Flight formula provides a calm within the laser focus.',
  },
  {
    title: 'Relaxation & Social Ease',
    name: 'Piper Methysticum (Kava)',
    pronunciation: null,
    description:
      'Traditionally used in the South Pacific, kava is valued for its calming properties and ability to promote relaxation without sedation. In Top Flight, it helps encourage a smooth, grounded feeling—supporting confidence, composure, and a relaxed mindset.',
  },
  {
    title: 'Mood Elevation & Presence',
    name: 'Sceletium Tortuosum (Kanna)',
    pronunciation: null,
    description:
      "Kanna is a botanical traditionally used to support mood and emotional balance. It's known for promoting a positive outlook and mental ease, helping you feel more present, uplifted, and engaged throughout the day.",
  },
]

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="section-padding bg-white scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          eyebrow="The Science"
          title="Behind Kava at Its "
          titleHighlight="Finest"
          subtitle="Top Flight is designed to support a calm, focused state of mind with smooth, balanced energy. Its thoughtfully selected blend works together to help take the edge off stress, promote mental clarity, and maintain a steady sense of momentum throughout the day."
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
              <p className="font-inter text-sm font-semibold uppercase tracking-wider text-brand-500">
                {ingredient.title}
              </p>
              <h3 className="font-inter font-bold text-slate-900 text-lg">
                {ingredient.name}
                {ingredient.pronunciation && (
                  <span className="ml-2 font-normal text-slate-500 text-base">
                    [{ingredient.pronunciation}]
                  </span>
                )}
              </h3>
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
