import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

// This would typically come from an API or database
const getNeighborhoods = () => {
  return [
    { id: 'ikoyi', name: 'Ikoyi', image: '/images/ikoyi.jpg', description: 'Luxurious residential area' },
    { id: 'victoria-island', name: 'Victoria Island', image: '/images/victoria-island.jpg', description: 'Business and entertainment hub' },
    { id: 'lekki', name: 'Lekki', image: '/images/lekki.jpg', description: 'Rapidly developing area with beautiful beaches' },
    { id: 'yaba', name: 'Yaba', image: '/images/yaba.jpg', description: 'Tech hub with a vibrant atmosphere' },
    { id: 'ikeja', name: 'Ikeja', image: '/images/ikeja.jpg', description: 'Capital of Lagos State with diverse attractions' },
    { id: 'surulere', name: 'Surulere', image: '/images/surulere.jpg', description: 'Residential area known for sports and entertainment' },
  ]
}

export default function NeighborhoodsPage() {
  const neighborhoods = getNeighborhoods()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Neighborhoods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoods.map((neighborhood) => (
          <Link href={`/neighborhoods/${neighborhood.id}`} key={neighborhood.id} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{neighborhood.name}</h2>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <div className="flex items-center text-primary">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Explore {neighborhood.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

