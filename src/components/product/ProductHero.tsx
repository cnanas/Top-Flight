'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product, ProductVariant } from '@/lib/shopify/types'
import { formatPrice, isOnSale, discountPercent, flattenEdges } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import AddToCartButton from './AddToCartButton'
import { fadeIn, fadeInUp } from '@/lib/motion'
import { ShieldCheck, Zap, Clock } from 'lucide-react'

interface ProductHeroProps {
  product: Product
  initialVariantId?: string
}

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Fast Shipping' },
  { icon: Zap, label: 'Premium Quality' },
]

const GOLD_VALUE_LINE = 'Our strongest, longest-lasting formula.'

export default function ProductHero({ product, initialVariantId }: ProductHeroProps) {
  const images = flattenEdges(product.images.edges)
  const variants = flattenEdges(product.variants.edges)
  const getInitialVariant = () => {
    if (initialVariantId) {
      const found = variants.find((v) => v.id === initialVariantId)
      if (found) return found
    }
    return variants[0]
  }

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(getInitialVariant())
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    const next = initialVariantId
      ? variants.find((v) => v.id === initialVariantId)
      : variants[0]
    if (next) setSelectedVariant(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialVariantId, product.id])

  const mainImage =
    selectedVariant?.image ??
    (images[selectedImageIndex] ?? product.featuredImage ?? null)

  const onSale = isOnSale(selectedVariant)
  const discount = discountPercent(
    selectedVariant.price.amount,
    selectedVariant.compareAtPrice?.amount ?? null
  )
  const isGold = product.tags.some((t) => ['gold', 'premium'].includes(t.toLowerCase()))

  return (
    <section className="section-container py-12 lg:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

        {/* Image Gallery */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-dark-800">
            {mainImage ? (
              <Image
                src={mainImage.url}
                alt={mainImage.altText ?? product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="h-full w-full bg-dark-800" />
            )}
            {onSale && discount && (
              <div className="absolute top-4 left-4">
                <Badge variant={isGold ? 'gold' : 'brand'}>{discount}% OFF</Badge>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedImageIndex(i)
                  }}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    selectedImageIndex === i
                      ? isGold
                        ? 'border-gold-400 shadow-gold'
                        : 'border-brand-500 shadow-brand'
                      : 'border-dark-700 hover:border-dark-600'
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.altText ?? `Product image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Purchase Panel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <div>
            {isGold && (
              <div className="mb-3">
                <Badge variant="gold" size="sm" className="text-xs font-bold">
                  Premium
                </Badge>
              </div>
            )}
            <p
              className={`font-inter text-sm font-semibold uppercase tracking-widest mb-2 ${
                isGold ? 'text-gold-400' : 'text-brand-500'
              }`}
            >
              {isGold ? 'The Gold Formula' : 'Premium Kava Shot'}
            </p>
            <h1 className={`font-playfair text-4xl font-bold text-dark-950 sm:text-5xl leading-tight ${isGold ? 'mb-2' : 'mb-4'}`}>
              {product.title}
            </h1>
            <p className="text-slate-600 font-medium mb-2">
              Sustained Energy. Focused Mind. Balanced Drive.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Premium botanical formula designed for calm energy, sharper focus, and balanced mood — with no jitters and no crash.
            </p>
            {isGold && (
              <p className="text-slate-600 font-medium mb-4">{GOLD_VALUE_LINE}</p>
            )}

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-dark-950">
                {formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
              </span>
              {selectedVariant.compareAtPrice && (
                <span className="text-lg text-slate-400 line-through">
                  {formatPrice(
                    selectedVariant.compareAtPrice.amount,
                    selectedVariant.compareAtPrice.currencyCode
                  )}
                </span>
              )}
            </div>
          </div>

          {variants.length > 1 && (
            <div className="space-y-3">
              <p className="text-sm font-semibold text-dark-950">
                {product.options.find((o) => o.values.length > 1)?.name ?? 'Quantity'}
              </p>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
                {variants.map((variant) => {
                  const variantImage = variant.image ?? product.featuredImage
                  const optionLabel =
                    variant.selectedOptions.find((o) => o.value !== 'Default Title')?.value ??
                    variant.title
                  const isSelected = selectedVariant?.id === variant.id
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      disabled={!variant.availableForSale}
                      className={`relative flex flex-shrink-0 flex-col items-center gap-2 rounded-2xl border-2 p-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[100px] ${
                        isSelected
                          ? isGold
                            ? 'border-gold-400 bg-gold-400/5 shadow-gold'
                            : 'border-brand-500 bg-brand-500/5 shadow-brand'
                          : 'border-slate-200 hover:border-slate-400 bg-white'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                      aria-pressed={isSelected}
                      aria-label={`Select ${optionLabel}`}
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-slate-100">
                        {variantImage ? (
                          <Image
                            src={variantImage.url}
                            alt={variantImage.altText ?? optionLabel}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="h-full w-full bg-slate-200 flex items-center justify-center text-xs text-slate-500">
                            No image
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs font-semibold text-center line-clamp-2 ${
                          isSelected
                            ? isGold
                              ? 'text-gold-600'
                              : 'text-brand-600'
                            : 'text-slate-700'
                        }`}
                      >
                        {optionLabel}
                      </span>
                      {!variant.availableForSale && (
                        <span className="text-[10px] font-medium text-red-600">Sold out</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <AddToCartButton
            variantId={selectedVariant.id}
            availableForSale={selectedVariant.availableForSale}
            size="xl"
            tier={isGold ? 'premium' : 'standard'}
          />

          <div className="flex items-center gap-6 border-t border-slate-200 pt-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <Icon size={20} className={isGold ? 'text-gold-500' : 'text-brand-500'} />
                <span className="text-xs text-slate-500 font-medium">{label}</span>
              </div>
            ))}
          </div>

          {product.descriptionHtml && (
            <div
              className="text-sm leading-relaxed text-slate-600 prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
