import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wholesale Inquiries',
  description:
    'Interested in carrying Top Flight Boost? Submit a wholesale inquiry and our team will get back to you.',
}

export default function WholesaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
