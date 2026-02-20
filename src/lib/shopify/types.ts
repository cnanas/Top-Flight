export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface Money {
  amount: string
  currencyCode: string
}

export interface ProductVariant {
  id: string
  title: string
  availableForSale: boolean
  price: Money
  compareAtPrice: Money | null
  selectedOptions: {
    name: string
    value: string
  }[]
  image: ShopifyImage | null
}

export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  featuredImage: ShopifyImage | null
  images: {
    edges: { node: ShopifyImage }[]
  }
  priceRange: {
    minVariantPrice: Money
    maxVariantPrice: Money
  }
  variants: {
    edges: { node: ProductVariant }[]
  }
  options: {
    name: string
    values: string[]
  }[]
  tags: string[]
  metafields?: {
    key: string
    value: string
    namespace: string
  }[]
}

export interface Collection {
  id: string
  handle: string
  title: string
  description: string
  image: ShopifyImage | null
  products: {
    edges: { node: Product }[]
  }
}

export interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: Money
    product: {
      id: string
      title: string
      handle: string
      featuredImage: ShopifyImage | null
    }
    selectedOptions: {
      name: string
      value: string
    }[]
  }
  cost: {
    totalAmount: Money
    subtotalAmount: Money
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  lines: {
    edges: { node: CartLine }[]
  }
  cost: {
    subtotalAmount: Money
    totalAmount: Money
    totalTaxAmount: Money | null
  }
  discountCodes: {
    applicable: boolean
    code: string
  }[]
}

export interface NormalizedCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  lines: CartLine[]
  cost: Cart['cost']
}
