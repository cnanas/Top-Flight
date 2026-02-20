import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Top Flight Boost terms of service — your rights and responsibilities when using our site.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand-600 py-16">
        <div className="section-container">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Legal
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white">Terms of Service</h1>
          <p className="text-white/60 mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using topflightboost.com, you accept and agree to be bound by
                these Terms of Service. If you do not agree, please do not use our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">2. Products and Orders</h2>
              <p className="text-slate-600 leading-relaxed">
                All products are subject to availability. We reserve the right to discontinue any
                product at any time. Prices are subject to change without notice. We reserve the
                right to refuse or cancel any order at our discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">3. Age Requirement</h2>
              <p className="text-slate-600 leading-relaxed">
                You must be at least 18 years of age to purchase from Top Flight Boost. By
                placing an order, you confirm that you meet this age requirement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">4. Health Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                These statements have not been evaluated by the Food and Drug Administration.
                Our products are not intended to diagnose, treat, cure, or prevent any disease.
                Consult your healthcare provider before using any dietary supplement, especially
                if you are pregnant, nursing, or have a medical condition.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">5. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the
                property of Top Flight Boost and is protected by applicable copyright and trademark
                laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Top Flight Boost shall not be liable for any indirect, incidental, or consequential
                damages arising from the use of our products or website. Our liability is limited
                to the purchase price of the product in question.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">7. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These terms are governed by the laws of the United States. Any disputes shall be
                resolved through binding arbitration in accordance with applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">8. Contact</h2>
              <p className="text-slate-600 leading-relaxed">
                Questions about these Terms?{' '}
                <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                  hello@topflightboost.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
