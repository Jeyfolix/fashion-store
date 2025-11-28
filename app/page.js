import Header from '@/components/layout/Header'
import ProductCard from '@/components/products/ProductCard'
import ServiceCard from '@/components/services/ServiceCard'

async function getProducts() {
  try {
    // Use relative URL instead of absolute localhost
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/products`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`)
    }
    
    const products = await res.json()
    console.log('Fetched products:', products) // Debug log
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

async function getServices() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/services`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.status}`)
    }
    
    return await res.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export default async function Home() {
  const [products, services] = await Promise.all([
    getProducts(),
    getServices()
  ])

  console.log('Rendering with products:', products.length) // Debug log

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Fashion Store</h1>
          <p className="text-xl mb-8">Clothes, Shoes, Beauty Items & Salon Services</p>
          <div className="flex justify-center space-x-4">
            <a href="#products" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </a>
            <a href="#services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Book Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Products</h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-4">No products available yet.</p>
              <p className="text-gray-400 text-sm">Add products from the admin panel to see them here.</p>
              <p className="text-gray-400 text-sm mt-2">Debug: Found {products.length} products</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Salon Services</h2>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-lg">No services available yet.</p>
              <p className="text-gray-400 text-sm">Add services from the admin panel to see them here.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
