import Image from 'next/image'
import Link from 'next/link'

const featuredListings = [
  { id: 1, image: '/images/I modern house.jpg', title: 'Modern Apartment', price: '$250,000', location: 'Lagos, Nigeria' },
  { id: 2, image: '/images/I modern house.jpg', title: 'Cozy House', price: '$350,000', location: 'Abuja, Nigeria' },
  { id: 3, image: '/images/I modern house.jpg', title: 'Luxury Villa', price: '$1,200,000', location: 'Port Harcourt, Nigeria' },
]

export default function FeaturedListings() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredListings.map((listing) => (
          <div key={listing.id} className="bg-secondary rounded-lg shadow-md overflow-hidden">
            <Image src={listing.image} alt={listing.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <p className="text- mb-2">{listing.location}</p>
              <p className="text-2xl font-bold text-primary">{listing.price}</p>
              <Link href={`/listing/${listing.id}`} className="mt-4 inline-block bg-primary hover:bg-primary/50 text-white px-4 py-2 rounded transition-colors">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

