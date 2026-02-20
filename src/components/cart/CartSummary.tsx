'use client'

import { ArrowRight, Loader2, Tag } from 'lucide-react'
import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'
import type { NormalizedCart } from '@/lib/shopify/types'

interface CartSummaryProps {
  cart: NormalizedCart
}

export default function CartSummary({ cart }: CartSummaryProps) {
  const { checkout, isLoading } = useCartStore()
  const [discountCode, setDiscountCode] = useState('')

  const subtotal = cart.cost.subtotalAmount
  const total = cart.cost.totalAmount

  return (
    <div className="border-t border-slate-100 pt-4 space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Discount code"
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:border-brand-500 hover:text-brand-500 transition-colors">
          Apply
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Subtotal</span>
          <span className="text-slate-900 font-semibold">
            {formatPrice(subtotal.amount, subtotal.currencyCode)}
          </span>
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>Shipping &amp; taxes calculated at checkout</span>
        </div>
      </div>

      <div className="flex justify-between border-t border-slate-100 pt-3">
        <span className="font-bold text-slate-900">Total</span>
        <span className="font-extrabold text-brand-500 text-lg">
          {formatPrice(total.amount, total.currencyCode)}
        </span>
      </div>

      <button
        onClick={checkout}
        disabled={isLoading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-4 font-bold text-white hover:bg-brand-600 active:bg-brand-700 transition-all duration-200 shadow-brand hover:shadow-brand-lg disabled:opacity-70 disabled:cursor-not-allowed text-base"
      >
        {isLoading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            Checkout Securely
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        Secure checkout powered by Shopify
      </p>
    </div>
  )
}
