'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import SearchModal from './SearchModal'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cartStore'

const NAV_LINKS = [
  { label: 'Shop', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'FAQ', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalQuantity, openCart } = useCartStore()

  // Only use transparent/dark-hero styles on the homepage before scrolling
  const isHomePage = pathname === '/'
  const useTransparent = isHomePage && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          useTransparent
            ? 'bg-white/5 backdrop-blur-md border-b border-white/10'
            : 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
        )}
      >
        <div className="section-container">
          <div className="relative grid min-h-20 grid-cols-3 items-center gap-4 py-3">
            {/* Left: mobile menu + desktop nav */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 transition-colors',
                  useTransparent ? 'text-white hover:text-white/70' : 'text-slate-700 hover:text-brand-500'
                )}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <nav className="hidden lg:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative font-inter text-sm font-semibold transition-colors duration-200',
                      pathname === link.href
                        ? useTransparent ? 'text-white' : 'text-brand-500'
                        : useTransparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={cn('absolute -bottom-1 left-0 right-0 h-0.5 rounded-full', useTransparent ? 'bg-white' : 'bg-brand-500')}
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: logo */}
            <Link href="/" className="flex justify-center">
              <Image
                src="/logo/Top_Flight_Logo.png"
                alt="Top Flight Boost"
                width={160}
                height={40}
                className="h-50 w-auto"
                priority
              />
            </Link>

            {/* Right: search + cart */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={cn(
                  'p-2 transition-colors',
                  useTransparent ? 'text-white hover:text-white/70' : 'text-slate-700 hover:text-brand-500'
                )}
                aria-label="Search products"
              >
                <Search size={22} />
              </button>

              <button
                onClick={openCart}
                className={cn(
                  'relative p-2 transition-colors',
                  useTransparent ? 'text-white hover:text-white/70' : 'text-slate-700 hover:text-brand-500'
                )}
                aria-label={`Open cart, ${totalQuantity} items`}
              >
                <ShoppingCart size={22} />
                {totalQuantity > 0 && (
                  <motion.span
                    key={totalQuantity}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white"
                  >
                    {totalQuantity > 9 ? '9+' : totalQuantity}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="overlay lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white border-r border-slate-100 lg:hidden flex flex-col shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <Image
                  src="/logo/Top_Flight_Logo.png"
                  alt="Top Flight Boost"
                  width={140}
                  height={36}
                  className="h-50 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl font-inter text-base font-semibold transition-colors',
                        pathname === link.href
                          ? 'bg-brand-50 text-brand-500'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-[5px] border-2 border-brand-500 px-6 py-3 font-bold text-brand-500 hover:bg-brand-50 transition-colors"
                >
                  <Search size={20} />
                  Search
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
