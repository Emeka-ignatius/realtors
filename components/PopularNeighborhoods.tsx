import Image from 'next/image'
import Link from 'next/link'

const neighborhoods = [
  { id: 'ikoyi', name: 'Ikoyi', image: '/images/ikoyi.jpg', description: 'Luxurious residential area' },
  { id: 'victoria-island', name: 'Victoria Island', image: '/images/victoria-island.jpg', description: 'Business and entertainment hub' },
  { id: 'lekki', name: 'Lekki', image: '/images/lekki.jpg', description: 'Rapidly developing area with beautiful beaches' },
  { id: 'yaba', name: 'Yaba', image: '/images/yaba.jpg', description: 'Tech hub with a vibrant atmosphere' },
]

export default function PopularNeighborhoods() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Neighborhoods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{neighborhood.name}</h3>
                <p className="text-gray-600">{neighborhood.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/neighborhoods" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
          Explore All Neighborhoods
        </Link>
      </div>
    </section>
  )
}

