'use client'

import { useEffect } from 'react'
import { X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import { slideInFromRight, overlayVariants } from '@/lib/motion'

export default function CartSidebar() {
  const { cart, isOpen, closeCart, totalQuantity } = useCartStore()
  const isEmpty = !cart || cart.lines.length === 0

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeCart}
            className="overlay"
            aria-hidden="true"
          />

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="fixed right-0 top-0 bottom-0 z-50 flex w-full flex-col bg-white shadow-2xl sm:w-[420px]"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-500" />
                <h2 className="font-inter text-lg font-bold text-slate-900">Your Cart</h2>
                {totalQuantity > 0 && (
                  <span className="rounded-full bg-brand-500/10 px-2 py-0.5 text-xs font-semibold text-brand-500 border border-brand-500/20">
                    {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-2 scrollbar-hide">
              {isEmpty ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <ShoppingBag size={28} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Your cart is empty</p>
                    <p className="text-sm text-slate-500">Add Top Flight to your routine.</p>
                  </div>
                  <Link
                    href="/products"
                    onClick={closeCart}
                    className="mt-2 inline-flex items-center justify-center rounded-[5px] bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cart.lines.map((line) => (
                    <CartItem key={line.id} line={line} />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {!isEmpty && cart && (
              <div className="border-t border-slate-100 px-6 py-5">
                <CartSummary cart={cart} />
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
