'use server'

import { shopifyFetch } from './client'
import {
  GET_PRODUCT_BY_HANDLE,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_COLLECTION,
  GET_FEATURED_PRODUCTS,
  GET_PRODUCTS_SEARCH,
} from './queries/product'
import { GET_CART } from './queries/cart'
import {
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINE,
  REMOVE_FROM_CART,
} from './mutations/cart'
import type { Product, Cart, Collection } from './types'
import { normalizeCart } from '../utils'

// ── Product Actions ──────────────────────────────────────────

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: Product | null }>(
    GET_PRODUCT_BY_HANDLE,
    { handle }
  )
  return data.product
}

export async function getAllProducts(first = 20): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: { node: Product }[] } }>(
    GET_ALL_PRODUCTS,
    { first }
  )
  return data.products.edges.map((e) => e.node)
}

export async function getProductsByCollection(
  handle: string,
  first = 20
): Promise<{ collection: Collection | null }> {
  const data = await shopifyFetch<{ collection: Collection | null }>(
    GET_PRODUCTS_BY_COLLECTION,
    { handle, first }
  )
  return data
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: { node: Product }[] } }>(
    GET_FEATURED_PRODUCTS
  )
  return data.products.edges.map((e) => e.node)
}

export async function searchProducts(query: string, first = 10): Promise<Product[]> {
  if (!query || query.trim().length === 0) return []
  const data = await shopifyFetch<{ products: { edges: { node: Product }[] } }>(
    GET_PRODUCTS_SEARCH,
    { first, query: query.trim() }
  )
  return data.products.edges.map((e) => e.node)
}

// ── Cart Actions ─────────────────────────────────────────────

export async function createCart(lines?: { merchandiseId: string; quantity: number }[]) {
  const data = await shopifyFetch<{ cartCreate: { cart: Cart } }>(CREATE_CART, {
    lines: lines ?? [],
  })
  return normalizeCart(data.cartCreate.cart)
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
) {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>(ADD_TO_CART, {
    cartId,
    lines,
  })
  return normalizeCart(data.cartLinesAdd.cart)
}

export async function updateCartLine(
  cartId: string,
  lines: { id: string; quantity: number }[]
) {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: Cart } }>(
    UPDATE_CART_LINE,
    { cartId, lines }
  )
  return normalizeCart(data.cartLinesUpdate.cart)
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>(
    REMOVE_FROM_CART,
    { cartId, lineIds }
  )
  return normalizeCart(data.cartLinesRemove.cart)
}

export async function getCart(cartId: string) {
  const data = await shopifyFetch<{ cart: Cart | null }>(GET_CART, { cartId })
  if (!data.cart) return null
  return normalizeCart(data.cart)
}
