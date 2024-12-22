import Image from 'next/image'
import Link from 'next/link'

// This would typically come from an API or database
const getSimilarListings = (currentPropertyId: string) => {
  // Simulated similar listings data
  return [
    { id: '2', title: 'Modern Apartment', price: '$250,000', image: '/images/I modern house.jpg' },
    { id: '3', title: 'Cozy Townhouse', price: '$350,000', image: '/images/I modern house.jpg' },
    { id: '4', title: 'Suburban Family Home', price: '$450,000', image: '/images/I modern house.jpg' },
  ]
}

export default function SimilarListings({ currentPropertyId }: { currentPropertyId: string }) {
  const similarListings = getSimilarListings(currentPropertyId)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Similar Listings</h2>
      <div className="space-y-4">
        {similarListings.map((listing) => (
          <Link key={listing.id} href={`/listing/${listing.id}`} className="block">
            <div className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-md transition-colors">
              <Image
                src={listing.image}
                alt={listing.title}
                width={80}
                height={60}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold">{listing.title}</h3>
                <p className="text-blue-500">{listing.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

