'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { buttonVariants } from '@/lib/variants'
import { cn } from '@/lib/utils'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/20">
        <AlertCircle className="h-8 w-8 text-brand-500" />
      </div>
      <h1 className="font-inter text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-slate-500 mb-8 max-w-md leading-relaxed">
        We hit a bump. Don&apos;t worry — it&apos;s not your fault. Try again or head back home.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={reset}
          className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
        >
          Try Again
        </button>
        <Link href="/" className={cn(buttonVariants({ variant: 'outline-brand', size: 'lg' }))}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
