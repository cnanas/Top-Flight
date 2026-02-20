'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react'
import { buttonVariants } from '@/lib/variants'
import { cn } from '@/lib/utils'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Fast Shipping' },
  { icon: ShieldCheck, label: '30-Day Guarantee' },
  { icon: RotateCcw, label: 'Risk-Free Trial' },
]

export default function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden bg-brand-600">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 opacity-80" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.10) 0%, transparent 50%)',
        }}
      />

      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4"
          >
            Guarantee
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inter text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight mb-4"
          >
            Try It{' '}
            <span className="text-gold-300">Risk-Free</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 mb-10 leading-relaxed"
          >
            30-Day Satisfaction Guarantee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-[5px] bg-white px-8 py-4 text-lg font-bold text-brand-600 hover:bg-brand-50 transition-all duration-300 shadow-lg"
            >
              Shop Top Flight
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products#gold"
              className={cn(buttonVariants({ variant: 'outline-white', size: 'lg' }))}
            >
              Explore Gold Formula
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/80">
                <Icon className="h-4 w-4 text-gold-300" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
