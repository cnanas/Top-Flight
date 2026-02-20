'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function WholesaleBanner() {
  const pathname = usePathname()
  if (pathname === '/wholesale') return null

  return (
    <section className="bg-brand-600 py-14 sm:py-16">
      <div className="section-container text-center">
        <h2 className="font-inter text-2xl font-bold text-white sm:text-3xl md:text-4xl max-w-2xl mx-auto">
          Join Our Growing Network of Distributors
        </h2>
        <p className="mt-4 text-white/95 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Learn more about wholesale and distribution opportunities for all our focus and mood
          enhancing products. As our partner, you&apos;ll not only benefit from a competitive edge
          in the functional nootropic market, but also play a pivotal role in promoting mental
          well-being everywhere.
        </p>
        <Link
          href="/wholesale"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-brand-600 hover:bg-white/95 transition-colors shadow-lg"
        >
          Request Info
        </Link>
      </div>
    </section>
  )
}
