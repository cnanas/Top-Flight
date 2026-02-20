import { GraphQLClient } from 'graphql-request'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

if (!domain || !accessToken) {
  throw new Error(
    'Missing Shopify environment variables. Check NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN in .env.local'
  )
}

const endpoint = `https://${domain}/api/2025-01/graphql.json`

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': accessToken,
    'Content-Type': 'application/json',
  },
})

export async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    const data = await shopifyClient.request<T>(query, variables)
    return data
  } catch (error) {
    console.error('Shopify API Error:', error)
    throw error
  }
}
