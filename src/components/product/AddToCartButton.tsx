'use client'

import { useState } from 'react'
import { ShoppingCart, Check, Loader2, Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { cn } from '@/lib/utils'

const MIN_QTY = 1
const MAX_QTY = 10

interface AddToCartButtonProps {
  variantId: string
  availableForSale: boolean
  className?: string
  size?: 'md' | 'lg' | 'xl'
  tier?: 'standard' | 'premium'
  /** Show quantity selector above the button. Default true on product page, set false on cards. */
  showQuantity?: boolean
}

export default function AddToCartButton({
  variantId,
  availableForSale,
  className,
  size = 'lg',
  tier = 'standard',
  showQuantity = true,
}: AddToCartButtonProps) {
  const { addItem, isLoading } = useCartStore()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [addedQuantity, setAddedQuantity] = useState(0)
  const isGold = tier === 'premium'

  const sizeClasses = {
    md: 'h-11 px-6 text-sm',
    lg: 'h-13 px-8 text-base',
    xl: 'h-16 px-12 text-lg',
  }

  const handleAddToCart = async () => {
    if (!availableForSale || isLoading || added) return

    const qty = showQuantity ? quantity : 1
    await addItem(variantId, qty)
    setAddedQuantity(qty)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setAddedQuantity(0)
    }, 2500)
  }

  if (!availableForSale) {
    return (
      <button
        disabled
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-[5px] font-semibold cursor-not-allowed',
          'bg-dark-800 text-slate-500 border border-dark-700',
          sizeClasses[size],
          className
        )}
      >
        Sold Out
      </button>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {showQuantity && (
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-sm font-medium text-slate-600">Quantity</span>
          <div className="flex items-center rounded-[5px] border border-slate-200 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(MIN_QTY, q - 1))}
              disabled={quantity <= MIN_QTY}
              aria-label="Decrease quantity"
              className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="min-w-[2.5rem] text-center font-semibold text-slate-900 tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(MAX_QTY, q + 1))}
              disabled={quantity >= MAX_QTY}
              aria-label="Increase quantity"
              className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-[5px] font-semibold',
          'transition-all duration-300',
          added
            ? 'bg-slate-800 text-white hover:bg-slate-800'
            : isGold
              ? 'bg-gold-400 text-dark-950 hover:bg-gold-500 shadow-gold hover:shadow-gold-lg'
              : 'bg-brand-500 text-white hover:bg-brand-600 shadow-brand hover:shadow-brand-lg',
          'disabled:opacity-70 disabled:cursor-not-allowed',
          sizeClasses[size],
          showQuantity ? undefined : className
        )}
        aria-label="Add to cart"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Loader2 size={18} className="animate-spin" />
            </motion.span>
          ) : added ? (
            <motion.span
              key="added"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Check size={18} />
              {addedQuantity === 1 ? 'Added 1 item' : `Added ${addedQuantity} items`}
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
