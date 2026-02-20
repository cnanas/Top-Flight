'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const COUNTRY_CODES = [
  { value: '+1', label: 'United States', flag: '🇺🇸' },
  { value: '+1', label: 'Canada', flag: '🇨🇦' },
  { value: '+44', label: 'United Kingdom', flag: '🇬🇧' },
  { value: '+61', label: 'Australia', flag: '🇦🇺' },
  { value: '+49', label: 'Germany', flag: '🇩🇪' },
  { value: '+33', label: 'France', flag: '🇫🇷' },
  { value: '+81', label: 'Japan', flag: '🇯🇵' },
  { value: '+52', label: 'Mexico', flag: '🇲🇽' },
  { value: 'other', label: 'Other', flag: '🌐' },
]

const WHERE_SELLING_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: 'retail', label: 'Retail store' },
  { value: 'online', label: 'Online store' },
  { value: 'both', label: 'Both retail and online' },
  { value: 'other', label: 'Other' },
]

const QUANTITY_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: '50-100', label: '50 - 100 units/month' },
  { value: '100-500', label: '100 - 500 units/month' },
  { value: '500-1000', label: '500 - 1,000 units/month' },
  { value: '1000+', label: '1,000+ units/month' },
]

const PRODUCT_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: 'boost', label: 'Top Flight Boost' },
  { value: 'gold', label: 'Top Flight Gold' },
  { value: 'both', label: 'Both products' },
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors'

export default function WholesalePage() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    whereSelling: '',
    quantity: '',
    product: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: `${form.countryCode} ${form.phone}`.trim(),
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Something went wrong')
      }
      setStatus('success')
      setForm({
        fullName: '',
        companyName: '',
        email: '',
        countryCode: '+1',
        phone: '',
        whereSelling: '',
        quantity: '',
        product: '',
      })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="section-container text-center">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-brand-500 mb-2">
            Partner With Us
          </p>
          <h1 className="font-inter text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Wholesale Inquiries
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto mt-4 leading-relaxed">
            Interested in carrying Top Flight Boost? Fill out the form below and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center space-y-4 shadow-card">
              <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="font-inter text-2xl font-bold text-slate-900">Request Received</h2>
              <p className="text-slate-500">
                Thanks for your interest. We&apos;ll be in touch within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-900">
                  Full Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-900">
                  Company Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={form.companyName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                  Email <span className="text-red-500">(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
                <p className="text-xs text-slate-500">Please add your work email.</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900">
                  Phone number <span className="text-red-500">(required)</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className={cn(inputClass, 'w-32 flex-shrink-0')}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={`${c.value}-${c.label}`} value={c.value}>
                        {c.flag} {c.value}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="whereSelling" className="block text-sm font-medium text-slate-900">
                  Where are you selling? <span className="text-red-500">(required)</span>
                </label>
                <select
                  id="whereSelling"
                  name="whereSelling"
                  required
                  value={form.whereSelling}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {WHERE_SELLING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium text-slate-900">
                  Anticipated Quantity <span className="text-red-500">(required)</span>
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  required
                  value={form.quantity}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {QUANTITY_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="product" className="block text-sm font-medium text-slate-900">
                  Which Product are you interested in? <span className="text-red-500">(required)</span>
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  value={form.product}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {PRODUCT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-lg bg-slate-100 border border-slate-200 p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600">
                  Please avoid sharing sensitive data such as passwords or credit card info in this form. This is not a secure login or billing page to share that data.
                </p>
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
                  'w-full rounded-[5px] bg-brand-500 px-6 py-4 text-base font-semibold text-white',
                  'hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
                  'disabled:opacity-60 transition-colors'
                )}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
