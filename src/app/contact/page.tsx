'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'
import { buttonVariants } from '@/lib/variants'
import { cn } from '@/lib/utils'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email Us', value: 'hello@topflightboost.com' },
  { icon: MapPin, label: 'Location', value: 'United States' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong')
      }
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-brand-600">
        <div className="section-container text-center">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            Get in Touch
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white mb-4">Contact Us</h1>
          <p className="text-white/75 max-w-xl mx-auto leading-relaxed">
            Have a question about your order, our products, or wholesale opportunities? We&apos;re
            here to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20">
                    <Icon className="h-5 w-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{label}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center space-y-4 shadow-card">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
                    <Mail className="h-7 w-7 text-green-600" />
                  </div>
                  <h2 className="font-inter text-2xl font-bold text-slate-900">Message Sent!</h2>
                  <p className="text-slate-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className={cn(buttonVariants({ variant: 'outline-brand' }))}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-6 shadow-card"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                        Full Name <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                        Email <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-900">
                      Subject <span className="text-brand-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Order Issue">Order Issue</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                      <option value="Returns & Refunds">Returns &amp; Refunds</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                      Message <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={cn(
                      buttonVariants({ variant: 'primary', size: 'lg' }),
                      'w-full disabled:opacity-60'
                    )}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
