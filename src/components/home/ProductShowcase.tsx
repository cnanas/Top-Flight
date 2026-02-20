'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/images/product_family_image.png"
              alt="Top Flight Kava shots and display box — premium kava at its finest"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/images/top-flight-shots.png"
              alt="Top Flight Kava display box in a tropical setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
