import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Top Flight Boost privacy policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-brand-600 py-16">
        <div className="section-container">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Legal
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                We collect information you provide directly to us, including when you create an
                account, place an order, or contact us. This includes: name, email address,
                shipping address, billing information, and any messages you send us.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We also automatically collect certain information when you visit our website,
                including IP address, browser type, pages visited, and referring URLs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and products</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">3. Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell your personal information. We share information only with trusted
                service providers who assist in operating our website, processing payments (via
                Shopify Payments), and shipping orders. All partners are bound by confidentiality
                agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">4. Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website
                and hold certain information. You can instruct your browser to refuse all cookies
                or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information. All payment data is processed by Shopify and is subject to
                their PCI-DSS compliance standards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">6. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal
                data, including the right to access, correct, or delete your data. To exercise
                these rights, contact us at{' '}
                <a href="mailto:hello@topflightboost.com" className="text-brand-500 hover:underline">
                  hello@topflightboost.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-inter text-2xl font-bold text-slate-900">7. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this Privacy Policy, email us at{' '}
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
