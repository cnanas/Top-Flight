import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Cart, NormalizedCart } from './shopify/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: string, currencyCode: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount))
}

export function normalizeCart(cart: Cart): NormalizedCart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity,
    cost: cart.cost,
    lines: cart.lines.edges.map((edge) => edge.node),
  }
}

export function flattenEdges<T>(edges: { node: T }[]): T[] {
  return edges.map((edge) => edge.node)
}

export function getDefaultVariant(product: { variants: { edges: { node: { id: string } }[] } }) {
  return product.variants.edges[0]?.node
}

export function isOnSale(variant: {
  price: { amount: string }
  compareAtPrice: { amount: string } | null
}): boolean {
  if (!variant.compareAtPrice) return false
  return parseFloat(variant.compareAtPrice.amount) > parseFloat(variant.price.amount)
}

export function discountPercent(
  price: string,
  compareAtPrice: string | null
): number | null {
  if (!compareAtPrice) return null
  const original = parseFloat(compareAtPrice)
  const current = parseFloat(price)
  if (original <= 0) return null
  return Math.round(((original - current) / original) * 100)
}
