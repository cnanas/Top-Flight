import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Top Flight Boost shipping policy — delivery times, costs, and tracking information.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand-600 py-16">
        <div className="section-container">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Legal
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white">Shipping Policy</h1>
          <p className="text-white/60 mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Processing Time</h2>
              <p className="text-slate-600 leading-relaxed">
                Orders are processed within 1–2 business days (Monday through Friday, excluding
                holidays). You will receive a shipping confirmation email with tracking information
                once your order ships.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Shipping Rates &amp; Delivery</h2>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Method</th>
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Estimated Time</th>
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-slate-700">Standard Shipping</td>
                      <td className="px-6 py-4 text-slate-600">5–7 business days</td>
                      <td className="px-6 py-4 text-slate-600">$5.99</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-slate-700">Expedited Shipping</td>
                      <td className="px-6 py-4 text-slate-600">2–3 business days</td>
                      <td className="px-6 py-4 text-slate-600">$12.99</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-slate-700">Overnight Shipping</td>
                      <td className="px-6 py-4 text-slate-600">1 business day</td>
                      <td className="px-6 py-4 text-slate-600">$24.99</td>
                    </tr>
                    <tr className="bg-brand-50">
                      <td className="px-6 py-4 font-medium text-brand-600">Free Shipping</td>
                      <td className="px-6 py-4 text-slate-600">5–7 business days</td>
                      <td className="px-6 py-4 text-brand-600 font-medium">Orders over $40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Order Tracking</h2>
              <p className="text-slate-600 leading-relaxed">
                Once your order ships, you will receive an email with a tracking number. You can
                use this number to track your package on the carrier&apos;s website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">International Shipping</h2>
              <p className="text-slate-600 leading-relaxed">
                We currently ship within the United States only. International shipping is not
                available at this time. Sign up for our newsletter to be notified when
                international shipping launches.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Lost or Stolen Packages</h2>
              <p className="text-slate-600 leading-relaxed">
                Top Flight Boost is not responsible for lost or stolen packages after they have
                been confirmed as delivered. If your tracking information shows delivered but you
                haven&apos;t received your order, please contact us within 48 hours at{' '}
                <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                  hello@topflightboost.com
                </a>{' '}
                and we will work with you to resolve the issue.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">Questions?</h2>
              <p className="text-slate-600 leading-relaxed">
                Visit our{' '}
                <Link href="/contact" className="text-brand-500 hover:underline">
                  Contact page
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
