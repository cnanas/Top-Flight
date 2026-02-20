'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    headline: 'Calm on demand',
    quote:
      'Sarah juggles a demanding job and an active home life. She found quick, reliable calm in Top Flight — her go-to for on-demand relaxation and mood support.',
    cta: 'Shop Shots',
    href: '/products',
    image: '/images/Sarah-story.png',
  },
  {
    headline: 'Work smarter, stay balanced',
    quote:
      'James studies long hours and works part-time. Top Flight helps him maintain mental clarity and a balanced mood so he stays centered and focused.',
    cta: 'Shop Shots',
    href: '/products',
    image: '/images/James-story.jpg',
  },
  {
    headline: 'Balance for the modern parent',
    quote:
      'Ashley is a busy parent who felt overwhelmed. Top Flight Kava Shots offer a balanced approach to calm and sustained mood so she can stay present all day.',
    cta: 'Shop Shots',
    href: '/products',
    image: '/images/Ashley-Story.png',
  },
  {
    headline: 'On-the-go calm',
    quote:
      'Joshua works long, physically demanding shifts. Top Flight gives him a fast-acting, smooth sense of calm that supports mind and body without the crash.',
    cta: 'Shop Shots',
    href: '/products',
    image: '/images/Joshua-story.jpg',
  },
]

export default function StoriesCarousel() {
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]

  const goTo = useCallback((i: number) => {
    setIndex((prev) => {
      let next = i
      if (next < 0) next = SLIDES.length - 1
      if (next >= SLIDES.length) next = 0
      return next
    })
  }, [])

  const goNext = () => goTo(index + 1)
  const goPrev = () => goTo(index - 1)

  return (
    <section className="section-padding bg-slate-50/50">
      <div className="section-container">
        <p className="mb-3 font-inter text-sm font-semibold uppercase tracking-widest text-brand-500">
          Real stories
        </p>
        <h2 className="font-inter text-4xl font-extrabold leading-tight tracking-[-0.02em] text-slate-900 sm:text-5xl">
          How people use Top Flight
        </h2>

        <div className="mt-10 relative">
          {/* Card: flow layout on mobile (no fixed height), row on desktop */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
            <div className="flex flex-col sm:flex-row sm:min-h-[320px]">
              {/* Image: top on mobile, left on desktop */}
              <div className="relative h-52 w-full flex-shrink-0 sm:hidden">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              </div>
              <div className="relative hidden sm:block w-2/5 min-w-[200px] bg-slate-100 flex-shrink-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              {/* Content: in flow on mobile so card grows, centered on desktop */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-8 md:p-10 min-h-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="max-w-xl"
                  >
                    <Quote className="mb-2 h-7 w-7 text-brand-500/40 sm:hidden" strokeWidth={1.5} aria-hidden />
                    <h3 className="font-inter text-lg font-bold text-slate-900 sm:text-2xl">
                      {slide.headline}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed sm:mt-3 sm:text-lg">
                      {slide.quote}
                    </p>
                    <Link
                      href={slide.href}
                      className="mt-4 inline-flex items-center font-semibold text-brand-500 hover:text-brand-600 transition-colors sm:mt-6"
                    >
                      {slide.cta}
                      <ChevronRight className="ml-0.5 h-5 w-5" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all duration-200',
                    i === index
                      ? 'w-8 bg-brand-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
