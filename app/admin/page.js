import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/add-product" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Add New Product</h2>
            <p className="text-gray-600">Add clothes, shoes, or beauty products</p>
          </Link>
          
          <Link href="/admin/add-service" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Add New Service</h2>
            <p className="text-gray-600">Add salon or beauty services</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
