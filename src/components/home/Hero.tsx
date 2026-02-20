'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero_Image_beach.png"
          alt="Top Flight Boost — feel great all day"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/20" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container pt-24 pb-20"
      >
        <div>
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              Premium Kava — 1,800mg Proprietary Blend
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-inter text-6xl font-extrabold tracking-tight leading-none text-white sm:text-7xl lg:text-8xl mb-6"
          >
            Elevate Your Energy.{' '}
            <span className="text-gold-300">Stay In Control.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
          >
            Premium botanical performance shots designed for smooth focus, steady drive, and balanced mood — without the crash.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-600 hover:bg-brand-50 transition-all duration-300 shadow-lg"
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-14 flex items-center gap-4 sm:gap-8">
            <div className="text-center min-w-0">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white whitespace-nowrap">1,800mg</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium">Kava per bottle</p>
            </div>
            <div className="h-10 w-px bg-white/20 shrink-0" />
            <div className="text-center min-w-0">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white whitespace-nowrap">8 hrs</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium">Lasting effects</p>
            </div>
            <div className="h-10 w-px bg-white/20 shrink-0" />
            <div className="text-center min-w-0">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white whitespace-nowrap">2 fl oz</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium">Easy shot format</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
