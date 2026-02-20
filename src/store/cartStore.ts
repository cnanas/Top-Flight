import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { NormalizedCart } from '@/lib/shopify/types'
import {
  createCart,
  addToCart,
  updateCartLine,
  removeFromCart,
  getCart,
} from '@/lib/shopify/actions'

interface CartStore {
  cart: NormalizedCart | null
  cartId: string | null
  isOpen: boolean
  isLoading: boolean
  error: string | null
  totalQuantity: number

  openCart: () => void
  closeCart: () => void
  initCart: () => Promise<void>
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  checkout: () => void
  clearError: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: null,
      cartId: null,
      isOpen: false,
      isLoading: false,
      error: null,
      totalQuantity: 0,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearError: () => set({ error: null }),

      initCart: async () => {
        const { cartId } = get()
        if (!cartId) return

        try {
          const cart = await getCart(cartId)
          if (cart) {
            set({ cart, totalQuantity: cart.totalQuantity })
          } else {
            set({ cart: null, cartId: null, totalQuantity: 0 })
          }
        } catch {
          set({ cart: null, cartId: null, totalQuantity: 0 })
        }
      },

      addItem: async (merchandiseId: string, quantity = 1) => {
        set({ isLoading: true, error: null })
        try {
          const { cartId } = get()
          let updatedCart: NormalizedCart

          if (!cartId) {
            updatedCart = await createCart([{ merchandiseId, quantity }])
            set({ cartId: updatedCart.id })
          } else {
            updatedCart = await addToCart(cartId, [{ merchandiseId, quantity }])
          }

          set({
            cart: updatedCart,
            totalQuantity: updatedCart.totalQuantity,
            isLoading: false,
            isOpen: true,
          })
        } catch {
          set({
            isLoading: false,
            error: 'Failed to add item to cart. Please try again.',
          })
        }
      },

      updateItem: async (lineId: string, quantity: number) => {
        const { cartId, cart } = get()
        if (!cartId || !cart) return

        const optimisticLines = cart.lines.map((line) =>
          line.id === lineId ? { ...line, quantity } : line
        )
        set({
          cart: { ...cart, lines: optimisticLines },
          totalQuantity: optimisticLines.reduce((acc, l) => acc + l.quantity, 0),
        })

        try {
          const updatedCart = await updateCartLine(cartId, [{ id: lineId, quantity }])
          set({ cart: updatedCart, totalQuantity: updatedCart.totalQuantity })
        } catch {
          set({ cart, totalQuantity: cart.totalQuantity, error: 'Failed to update quantity.' })
        }
      },

      removeItem: async (lineId: string) => {
        const { cartId, cart } = get()
        if (!cartId || !cart) return

        const optimisticLines = cart.lines.filter((line) => line.id !== lineId)
        set({
          cart: { ...cart, lines: optimisticLines },
          totalQuantity: optimisticLines.reduce((acc, l) => acc + l.quantity, 0),
        })

        try {
          const updatedCart = await removeFromCart(cartId, [lineId])
          set({ cart: updatedCart, totalQuantity: updatedCart.totalQuantity })
        } catch {
          set({ cart, totalQuantity: cart.totalQuantity, error: 'Failed to remove item.' })
        }
      },

      checkout: () => {
        const { cart } = get()
        if (!cart?.checkoutUrl) return
        window.location.href = cart.checkoutUrl
      },
    }),
    {
      name: 'top-flight-cart',
      partialize: (state) => ({ cartId: state.cartId }),
    }
  )
)
