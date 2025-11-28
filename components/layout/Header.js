import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            FashionStore
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-purple-600 font-medium">Home</Link>
            <Link href="/admin" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 font-medium">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
