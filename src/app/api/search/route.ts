import { NextRequest, NextResponse } from 'next/server'
import { searchProducts } from '@/lib/shopify/actions'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') ?? ''
  const trimmed = q.trim()
  if (trimmed.length === 0) {
    return NextResponse.json({ products: [] })
  }
  try {
    const products = await searchProducts(trimmed, 8)
    return NextResponse.json({ products })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ products: [] }, { status: 200 })
  }
}
