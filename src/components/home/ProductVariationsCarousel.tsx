'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/shopify/types'
import { formatPrice, flattenEdges } from '@/lib/utils'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

interface ProductVariationsCarouselProps {
  product: Product
  eyebrow?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
}

export default function ProductVariationsCarousel({
  product,
  eyebrow = 'Choose Your Format',
  title = 'Product ',
  titleHighlight = 'Variations',
  subtitle = 'Pick the option that fits your routine. Click any card to go to the product page.',
}: ProductVariationsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const variants = flattenEdges(product.variants.edges)
  const isGold = product.tags.some((t) => ['gold', 'premium'].includes(t.toLowerCase()))

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const width = scrollRef.current.clientWidth
    scrollRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' })
  }

  if (variants.length === 0) return null

  return (
    <section className="section-padding bg-dark-950">
      <div className="section-container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleHighlight={titleHighlight}
          subtitle={subtitle}
          centered
          light
          className="mb-10"
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-2 rounded-full bg-dark-800 p-2 text-white shadow-lg hover:bg-dark-700 transition-colors hidden sm:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 rounded-full bg-dark-800 p-2 text-white shadow-lg hover:bg-dark-700 transition-colors hidden sm:block"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {variants.map((variant) => {
              const variantImage = variant.image ?? product.featuredImage
              const optionLabel =
                variant.selectedOptions.find((o) => o.value !== 'Default Title')?.value ??
                variant.title
              const productUrl = `/products/${product.handle}?variant=${encodeURIComponent(variant.id)}`

              return (
                <Link
                  key={variant.id}
                  href={productUrl}
                  className={cn(
                    'flex flex-shrink-0 flex-col rounded-2xl border-2 transition-all overflow-hidden',
                    'w-[280px] sm:w-[300px]',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950',
                    isGold
                      ? 'border-dark-700 bg-dark-800 hover:border-gold-400/50 hover:shadow-gold focus:ring-gold-400'
                      : 'border-dark-700 bg-dark-800 hover:border-brand-500/50 hover:shadow-brand focus:ring-brand-500'
                  )}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="relative aspect-square bg-dark-700">
                    {variantImage ? (
                      <Image
                        src={variantImage.url}
                        alt={variantImage.altText ?? optionLabel}
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="font-inter font-semibold text-white">{optionLabel}</span>
                    <span
                      className={cn(
                        'text-lg font-bold',
                        isGold ? 'text-gold-400' : 'text-brand-500'
                      )}
                    >
                      {formatPrice(variant.price.amount, variant.price.currencyCode)}
                    </span>
                    {!variant.availableForSale && (
                      <span className="text-xs text-red-400 font-medium">Sold out</span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
