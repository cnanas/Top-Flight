import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllProducts } from '@/lib/shopify/actions'
import ProductGrid from '@/components/product/ProductGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Shop All Products',
  description:
    'Browse all Top Flight Boost kava shots. From our classic formula to premium Gold — find your perfect shot.',
}

export default async function ProductsPage() {
  const products = await getAllProducts(20)

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="relative bg-brand-600 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/product_family_image.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="section-container relative">
          <p className="font-inter text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
            The Lineup
          </p>
          <h1 className="font-inter text-5xl font-extrabold tracking-tight text-white">
            All <span className="text-gold-300">Products</span>
          </h1>
          <p className="text-white/75 mt-4 text-lg max-w-xl">
            Every bottle engineered for focus, calm energy, and all-day performance.
          </p>
        </div>
      </div>
      <div className="section-container py-16">
        <ProductGrid products={products} columns={3} />
      </div>
    </div>
  )
}
