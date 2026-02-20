import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const SHOP_LINKS = [
  { label: 'Shop All', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Contact', href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Refund Policy', href: '/refunds' },
  { label: 'Shipping Info', href: '/shipping' },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter/X' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo/Top_Flight_Logo.png"
                alt="Top Flight Boost"
                width={320}
                height={80}
                className="h-20 w-auto mb-4 md:h-24"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              Premium kava-based liquid shots for focus, calm energy, and mental clarity.
              Feel great all day — naturally.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/70 hover:border-white hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {currentYear} Top Flight Boost. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right max-w-md">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
