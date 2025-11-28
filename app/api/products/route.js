import { prisma } from '@/lib/database'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })
    
    // Convert imagePath to full URL
    const productsWithImageUrl = products.map(product => ({
      ...product,
      imageUrl: product.imagePath // For compatibility with existing components
    }))
    
    return NextResponse.json(productsWithImageUrl)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const { name, description, price, imagePath, category, inventory } = await request.json()
    
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        imagePath, // Now storing file path instead of URL
        category,
        inventory: parseInt(inventory)
      }
    })
    
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
