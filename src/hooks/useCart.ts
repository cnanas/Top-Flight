'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export function useCart() {
  const store = useCartStore()

  useEffect(() => {
    store.initCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    cart: store.cart,
    isOpen: store.isOpen,
    isLoading: store.isLoading,
    error: store.error,
    totalQuantity: store.totalQuantity,
    openCart: store.openCart,
    closeCart: store.closeCart,
    addItem: store.addItem,
    updateItem: store.updateItem,
    removeItem: store.removeItem,
    checkout: store.checkout,
    clearError: store.clearError,
    isEmpty: !store.cart || store.cart.lines.length === 0,
  }
}
