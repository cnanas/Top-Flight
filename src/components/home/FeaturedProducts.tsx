import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/lib/shopify/types'
import SectionHeading from '@/components/ui/SectionHeading'
import ProductGrid from '@/components/product/ProductGrid'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <SectionHeading
            eyebrow="Our Products"
            title="Find Your Perfect "
            titleHighlight="Boost"
            subtitle="Pick the option that fits your routine. Two formulas. One mission."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-semibold transition-colors flex-shrink-0"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <ProductGrid products={products} columns={3} />
      </div>
    </section>
  )
}
