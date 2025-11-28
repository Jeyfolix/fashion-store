import Link from 'next/link'

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={service.imageUrl} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-blue-600">${service.price}</span>
          <span className="text-sm text-gray-500">{service.duration} mins</span>
        </div>
        <Link 
          href={`/services/${service.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
