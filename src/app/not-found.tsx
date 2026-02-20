import Link from 'next/link'
import { buttonVariants } from '@/lib/variants'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="font-inter text-sm font-bold uppercase tracking-widest text-brand-500 mb-4">
        404
      </p>
      <h1 className="font-inter text-5xl font-extrabold tracking-tight text-slate-900 mb-4 sm:text-6xl">
        Page Not Found
      </h1>
      <p className="text-slate-500 mb-10 max-w-md leading-relaxed text-lg">
        This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/" className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}>
          Back to Home
        </Link>
        <Link
          href="/products"
          className={cn(buttonVariants({ variant: 'outline-brand', size: 'lg' }))}
        >
          Shop Products
        </Link>
      </div>
    </div>
  )
}
