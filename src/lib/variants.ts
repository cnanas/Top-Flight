import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-inter font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-brand hover:shadow-brand-lg focus-visible:ring-brand-500',
        'outline-brand':
          'border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white focus-visible:ring-brand-500',
        premium:
          'bg-gold-400 text-dark-950 hover:bg-gold-500 active:bg-gold-600 shadow-gold hover:shadow-gold-lg focus-visible:ring-gold-400',
        'outline-gold':
          'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-950 focus-visible:ring-gold-400',
        white:
          'bg-white text-dark-950 hover:bg-slate-100 border border-white/20 focus-visible:ring-white',
        'outline-white':
          'border-2 border-white/60 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white',
        ghost:
          'text-slate-200 hover:bg-dark-800 hover:text-white focus-visible:ring-slate-400',
        dark:
          'bg-dark-800 text-white hover:bg-dark-700 focus-visible:ring-dark-700',
      },
      size: {
        sm:   'h-8 px-4 text-sm',
        md:   'h-11 px-6 text-base',
        lg:   'h-13 px-8 text-lg',
        xl:   'h-16 px-12 text-xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const badgeVariants = cva(
  'inline-flex items-center rounded-full font-inter font-medium',
  {
    variants: {
      variant: {
        brand:   'bg-brand-500/15 text-brand-500 border border-brand-500/30',
        gold:    'bg-gold-400/15 text-gold-400 border border-gold-400/30',
        dark:    'bg-dark-800 text-slate-200 border border-dark-700',
        success: 'bg-green-100 text-green-800',
        error:   'bg-red-100 text-red-700',
        outline: 'border border-slate-200 text-slate-600',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'brand',
      size: 'md',
    },
  }
)
