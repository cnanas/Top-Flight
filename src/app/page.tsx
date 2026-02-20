import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import StoriesCarousel from '@/components/home/StoriesCarousel'
import BenefitsSection from '@/components/home/BenefitsSection'
import HowItWorks from '@/components/home/HowItWorks'
import IngredientsSection from '@/components/home/IngredientsSection'
import { getFeaturedProducts } from '@/lib/shopify/actions'

export const revalidate = 3600

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts products={featuredProducts} />
      <StoriesCarousel />
      <BenefitsSection />
      <HowItWorks />
      <IngredientsSection />
    </>
  )
}
