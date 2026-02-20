'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Product, ProductVariant } from '@/lib/shopify/types'
import { formatPrice, isOnSale, discountPercent, flattenEdges } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import AddToCartButton from '@/components/product/AddToCartButton'
import { fadeInUp } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const variants = flattenEdges(product.variants.edges)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(variants[0] ?? null)
  const activeVariant = selectedVariant ?? variants[0] ?? null

  const onSale = activeVariant ? isOnSale(activeVariant) : false
  const discountPct = activeVariant
    ? discountPercent(activeVariant.price.amount, activeVariant.compareAtPrice?.amount ?? null)
    : null

  const isGold = product.tags.some((t) => ['gold', 'premium'].includes(t.toLowerCase()))

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      className={`group relative flex flex-col rounded-2xl bg-white overflow-hidden border shadow-card transition-all duration-300 hover:shadow-card-hover ${
        isGold
          ? 'border-gold-400/30 hover:border-gold-400/60 hover:shadow-gold'
          : 'border-slate-200 hover:border-brand-500/40 hover:shadow-brand'
      }`}
    >
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        <Badge variant={isGold ? 'gold' : 'brand'} size="sm">
          {isGold ? 'Top Flight Gold ★' : 'Top Flight Boost'}
        </Badge>
        {onSale && discountPct && (
          <Badge variant="dark" size="sm">
            {discountPct}% OFF
          </Badge>
        )}
      </div>

      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-slate-50">
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText ?? product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-slate-400 text-sm">No image</span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link href={`/products/${product.handle}`}>
          <h3 className="font-inter text-base font-bold text-slate-900 hover:text-brand-500 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {variants.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {variants.map((v) => {
              const optionLabel =
                v.selectedOptions.find((o) => o.value !== 'Default Title')?.value ?? v.title
              const isSelected = activeVariant?.id === v.id
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedVariant(v)
                  }}
                  disabled={!v.availableForSale}
                  className={cn(
                    'rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors',
                    isSelected
                      ? isGold
                        ? 'bg-gold-400/20 text-gold-700 border border-gold-400/50'
                        : 'bg-brand-500/10 text-brand-600 border border-brand-500/40'
                      : 'bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                >
                  {optionLabel}
                </button>
              )
            })}
          </div>
        )}

        <div className="flex items-baseline gap-2">
          <span className={`text-lg font-extrabold ${isGold ? 'text-gold-600' : 'text-brand-500'}`}>
            {formatPrice(
              activeVariant?.price.amount ?? product.priceRange.minVariantPrice.amount,
              activeVariant?.price.currencyCode ?? product.priceRange.minVariantPrice.currencyCode
            )}
          </span>
          {onSale && activeVariant?.compareAtPrice && (
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(
                activeVariant.compareAtPrice.amount,
                activeVariant.compareAtPrice.currencyCode
              )}
            </span>
          )}
        </div>

        {activeVariant && (
          <div className="mt-auto">
            <AddToCartButton
              variantId={activeVariant.id}
              availableForSale={activeVariant.availableForSale}
              size="md"
              tier={isGold ? 'premium' : 'standard'}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
