import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Home, Briefcase, Car, Coffee } from 'lucide-react'

interface Neighborhood {
  id: string
  name: string
  image: string
  description: string
  population: string
  averageHomePrice: string
  topEmployers: string[]
  commute: string
  attractions: string[]
}

// This would typically come from an API or database
const getNeighborhoodById = (id: string): Neighborhood | null => {
  const neighborhoods: Neighborhood[] = [
    {
      id: 'ikoyi',
      name: 'Ikoyi',
      image: '/images/ikoyi.jpg',
      description: 'Ikoyi is an affluent neighborhood that is known for its luxurious residential properties and serene environment. It\'s home to many expatriates and high-profile Nigerians.',
      population: '100,000',
      averageHomePrice: '$500,000',
      topEmployers: ['Banking Institutions', 'Oil Companies', 'Embassies'],
      commute: 'Average 30-minute drive to Victoria Island',
      attractions: ['Ikoyi Golf Club', 'Ikoyi Park', 'High-end Restaurants']
    },
  ]
  return neighborhoods.find(n => n.id === id) || null
}

export default async function NeighborhoodPage({ params }: { params: { id: string } }) {
  const neighborhood = await getNeighborhoodById(params.id)

  if (!neighborhood) {
    return <div className="container mx-auto px-4 py-8">Neighborhood not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{neighborhood.name}</h1>
      <div className="mb-8 relative h-[50vh] rounded-lg overflow-hidden">
        <Image
          src={neighborhood.image}
          alt={neighborhood.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About {neighborhood.name}</h2>
            <p className="text-gray-700 mb-4">{neighborhood.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>Population: {neighborhood.population}</span>
              </div>
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-primary" />
                <span>Avg. Home Price: {neighborhood.averageHomePrice}</span>
              </div>
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-2 text-primary" />
                <span>{neighborhood.commute}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Top Employers</h2>
            <ul className="list-disc list-inside">
              {neighborhood.topEmployers.map((employer, index) => (
                <li key={index} className="mb-2">{employer}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Local Attractions</h2>
            <ul className="list-disc list-inside">
              {neighborhood.attractions.map((attraction, index) => (
                <li key={index} className="mb-2">{attraction}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Explore Properties</h2>
            <p className="mb-4">Interested in living in {neighborhood.name}? Check out available properties in the area.</p>
            <Link href={`/listings?neighborhood=${neighborhood.id}`} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
              View Listings
            </Link>
          </div>
          {/* You can add more sidebar components here, such as a neighborhood map or local news */}
        </div>
      </div>
    </div>
  )
}

