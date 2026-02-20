'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/motion'

const TESTIMONIALS = [
  {
    name: 'Marcus T.',
    location: 'Atlanta, GA',
    rating: 5,
    text: "Clean energy, no jitters, and real lasting focus.",
    tag: 'Verified Purchase',
    tier: 'standard',
  },
  {
    name: 'Jasmine R.',
    location: 'Houston, TX',
    rating: 5,
    text: "Perfect balance — calm and productive all day.",
    tag: 'Gold Formula',
    tier: 'premium',
  },
  {
    name: 'DeShawn M.',
    location: 'Chicago, IL',
    rating: 5,
    text: "No crash, just smooth drive.",
    tag: 'Verified Purchase',
    tier: 'standard',
  },
  {
    name: 'Aaliyah K.',
    location: 'Miami, FL',
    rating: 5,
    text: "The calm focus is unlike anything I've experienced. Works in 15 minutes and lasts all day.",
    tag: 'Gold Formula',
    tier: 'premium',
  },
  {
    name: 'Chris W.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: "Perfect pre-workout alternative. Keeps me dialed in without the crash after.",
    tag: 'Verified Purchase',
    tier: 'standard',
  },
  {
    name: 'Tiffany B.',
    location: 'Dallas, TX',
    rating: 5,
    text: "Top Flight Gold keeps me sharp and calm even in the most stressful moments. Game changer.",
    tag: 'Gold Formula',
    tier: 'premium',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Social Proof"
          title="Why Customers Choose "
          titleHighlight="Top Flight"
          subtitle="Clean energy, no jitters, and real lasting focus. Here's what our community says."
          centered
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={review.name}
              variants={fadeInUp}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-card"
            >
              <div className="flex items-start justify-between gap-2">
                <StarRating count={review.rating} />
                <span
                  className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${
                    review.tier === 'premium'
                      ? 'bg-gold-400/10 border-gold-400/30 text-gold-600'
                      : 'bg-brand-500/10 border-brand-500/20 text-brand-500'
                  }`}
                >
                  {review.tag}
                </span>
              </div>

              <p className="flex-1 text-sm text-slate-600 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-inter font-bold text-slate-900 text-sm">{review.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-[5px] border border-slate-200 bg-white px-6 py-3 shadow-card">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 out of 5</span>
            <span className="text-sm text-slate-400">· 2,400+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
