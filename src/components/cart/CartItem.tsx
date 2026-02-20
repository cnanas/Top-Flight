'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CartLine } from '@/lib/shopify/types'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'

interface CartItemProps {
  line: CartLine
}

export default function CartItem({ line }: CartItemProps) {
  const { updateItem, removeItem } = useCartStore()
  const { merchandise, quantity, cost } = line
  const product = merchandise.product

  const handleDecrease = () => {
    if (quantity <= 1) {
      removeItem(line.id)
    } else {
      updateItem(line.id, quantity - 1)
    }
  }

  const handleIncrease = () => {
    updateItem(line.id, quantity + 1)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4 py-4 border-b border-slate-100 last:border-0"
    >
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="h-full w-full bg-slate-100 flex items-center justify-center">
            <span className="text-xs text-slate-400">No image</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight line-clamp-2">
              {product.title}
            </p>
            {merchandise.selectedOptions.some((opt) => opt.value !== 'Default Title') && (
              <p className="text-xs text-slate-500 mt-0.5">
                {merchandise.selectedOptions.map((opt) => opt.value).join(' / ')}
              </p>
            )}
          </div>
          <button
            onClick={() => removeItem(line.id)}
            className="text-slate-400 hover:text-red-500 transition-colors flex-shrink-0 p-0.5"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white">
            <button
              onClick={handleDecrease}
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="w-6 text-center text-sm font-semibold text-slate-900">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>

          <p className="text-sm font-bold text-brand-500">
            {formatPrice(cost.totalAmount.amount, cost.totalAmount.currencyCode)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
