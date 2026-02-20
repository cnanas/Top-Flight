import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/lib/variants'
import { cn } from '@/lib/utils'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Top Flight Boost was built for people who demand more from their day. Learn our story and what drives our obsession with premium kava shots.',
}

const VALUES = [
  {
    title: 'Obsessed With Quality',
    description:
      'We source only noble-grade kava root and pair it with ingredients that have proven science behind them. No shortcuts. No compromise.',
  },
  {
    title: 'Transparency First',
    description:
      'Every ingredient is listed. Every dose is disclosed. We believe you deserve to know exactly what you&apos;re putting in your body.',
  },
  {
    title: 'Built for the Culture',
    description:
      'Top Flight was made for creators, athletes, entrepreneurs, and anyone living life at full speed. We&apos;re not a supplement brand — we&apos;re a lifestyle.',
  },
  {
    title: 'Science-Backed Calm',
    description:
      'Kava has centuries of traditional use. Our formulas bridge ancient wisdom with modern supplementation science for results you can feel.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex items-center justify-center py-32 overflow-hidden bg-slate-900 pt-48">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/top-flight-beach.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="section-container relative z-10 text-center">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Our Story
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight mb-6">
            Built for Those Who{' '}
            <span className="text-gold-300">Fly High</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75 leading-relaxed">
            Top Flight Boost was born from a simple question: why do energy products have to come
            with anxiety, jitters, and a crash? We set out to build something better.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="Calm Energy. "
                titleHighlight="Real Results."
                subtitle="We believe the best version of you doesn't run on anxiety — it runs on clarity. That's why every Top Flight product is designed to elevate without the edge."
              />
              <p className="text-slate-600 leading-relaxed">
                Starting with noble-grade kava root — used for centuries in Pacific Island
                cultures — we combined ancient wisdom with modern nutrition science. The result
                is a 2 fl oz liquid shot that delivers up to 8 hours of focused, calm energy.
                No jitters. No crash. Just Top Flight.
              </p>
              <Link
                href="/products"
                className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
              >
                Shop the Formula
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full min-h-[280px] max-w-md mx-auto lg:max-w-none lg:min-h-[400px] overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
              <Image
                src="/images/top-flight-beach.png"
                alt="Top Flight Kava at the beach — calm energy, real results"
                fill
                sizes="(max-width: 1024px) 448px, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="section-container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core "
            titleHighlight="Values"
            subtitle="These aren't buzzwords — they're the principles we make every product decision by."
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 shadow-card"
              >
                <h3 className="font-inter font-semibold text-slate-900 text-lg">{value.title}</h3>
                <p
                  className="text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: value.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
