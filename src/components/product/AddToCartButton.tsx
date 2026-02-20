'use client'

import { useState } from 'react'
import { ShoppingCart, Check, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { cn } from '@/lib/utils'

interface AddToCartButtonProps {
  variantId: string
  availableForSale: boolean
  className?: string
  size?: 'md' | 'lg' | 'xl'
  tier?: 'standard' | 'premium'
}

export default function AddToCartButton({
  variantId,
  availableForSale,
  className,
  size = 'lg',
  tier = 'standard',
}: AddToCartButtonProps) {
  const { addItem, isLoading } = useCartStore()
  const [added, setAdded] = useState(false)
  const isGold = tier === 'premium'

  const sizeClasses = {
    md: 'h-11 px-6 text-sm',
    lg: 'h-13 px-8 text-base',
    xl: 'h-16 px-12 text-lg',
  }

  const handleAddToCart = async () => {
    if (!availableForSale || isLoading || added) return

    await addItem(variantId, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  if (!availableForSale) {
    return (
      <button
        disabled
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-full font-semibold cursor-not-allowed',
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
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={cn(
        'flex w-full items-center justify-center gap-2 rounded-full font-semibold',
        'transition-all duration-300',
        added
          ? 'bg-green-500 text-white shadow-none'
          : isGold
            ? 'bg-gold-400 text-dark-950 hover:bg-gold-500 shadow-gold hover:shadow-gold-lg'
            : 'bg-brand-500 text-white hover:bg-brand-600 shadow-brand hover:shadow-brand-lg',
        'disabled:opacity-70 disabled:cursor-not-allowed',
        sizeClasses[size],
        className
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
            Added to Cart!
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
  )
}
