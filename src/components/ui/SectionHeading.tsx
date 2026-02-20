import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  const titleParts = titleHighlight ? title.split(titleHighlight) : [title]

  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <p className={cn(
          'mb-3 font-inter text-sm font-semibold uppercase tracking-widest',
          light ? 'text-white/70' : 'text-brand-500'
        )}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-inter text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {titleHighlight ? (
          <>
            {titleParts[0]}
            <span className={light ? 'text-gold-300' : 'text-gradient-brand'}>
              {titleHighlight}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-white/75' : 'text-slate-500',
            centered && 'mx-auto max-w-2xl'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
