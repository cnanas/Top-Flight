import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductByHandle, getAllProducts } from '@/lib/shopify/actions'
import ProductHero from '@/components/product/ProductHero'
import ProductKeyBenefits from '@/components/product/ProductKeyBenefits'
import ProductWhatItFeelsLike from '@/components/product/ProductWhatItFeelsLike'
import ProductHowToUse from '@/components/product/ProductHowToUse'
import ProductComparison from '@/components/product/ProductComparison'
import ProductFAQ from '@/components/product/ProductFAQ'
import ProductDisclaimer from '@/components/product/ProductDisclaimer'

export const revalidate = 3600

interface Props {
  params: Promise<{ handle: string }>
  searchParams: Promise<{ variant?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product) return {}

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.featuredImage
        ? [{ url: product.featuredImage.url, alt: product.featuredImage.altText ?? product.title }]
        : [],
    },
  }
}

export async function generateStaticParams() {
  const products = await getAllProducts(50)
  return products.map((p) => ({ handle: p.handle }))
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { handle } = await params
  const { variant } = await searchParams

  const product = await getProductByHandle(handle)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-white pt-20">
      <ProductHero product={product} initialVariantId={variant} />
      <ProductKeyBenefits />
      <ProductWhatItFeelsLike />
      <ProductHowToUse />
      <ProductComparison />
      <ProductFAQ />
      <ProductDisclaimer />
    </div>
  )
}
