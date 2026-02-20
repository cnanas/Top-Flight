import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Top Flight Boost refund policy — 30-day money-back guarantee details.',
}

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand-600 py-16">
        <div className="section-container">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Legal
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white">Refund Policy</h1>
          <p className="text-white/60 mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <h2 className="font-inter text-xl font-bold text-brand-600 mb-2">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We stand behind our products. If you&apos;re not satisfied for any reason,
                contact us within 30 days of your purchase for a full refund.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Eligibility</h2>
              <p className="text-slate-600 leading-relaxed">To be eligible for a refund:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Your request must be made within 30 days of the purchase date</li>
                <li>You must have purchased directly from topflightboost.com</li>
                <li>Items purchased through third-party retailers must be returned to the retailer</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">How to Request a Refund</h2>
              <ol className="list-decimal list-inside text-slate-600 space-y-3 ml-4">
                <li>
                  Email us at{' '}
                  <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                    hello@topflightboost.com
                  </a>{' '}
                  with your order number and reason for the return
                </li>
                <li>Our team will respond within 24 hours with return instructions</li>
                <li>Once your return is received and inspected, we will process your refund</li>
                <li>Refunds are issued to the original payment method within 5–10 business days</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Non-Refundable Items</h2>
              <p className="text-slate-600 leading-relaxed">The following are non-refundable:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Items returned after 30 days from purchase</li>
                <li>Items that are damaged due to customer misuse</li>
                <li>Gift cards</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Damaged or Defective Items</h2>
              <p className="text-slate-600 leading-relaxed">
                If you received a damaged or defective item, please contact us immediately at{' '}
                <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                  hello@topflightboost.com
                </a>{' '}
                with photos of the damage. We will replace the item at no charge.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Questions?</h2>
              <p className="text-slate-600 leading-relaxed">
                Visit our{' '}
                <Link href="/contact" className="text-brand-500 hover:underline">
                  FAQ page
                </Link>{' '}
                or email{' '}
                <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                  hello@topflightboost.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
