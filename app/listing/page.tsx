import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Square } from 'lucide-react'

// This would typically come from an API or database
const getListings = () => {
  return [
    {
      id: '1',
      title: 'Modern Apartment in City Center',
      price: '$250,000',
      image: '/images/I modern house.jpg',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      location: 'Lagos, Nigeria',
    },
    {
      id: '2',
      title: 'Spacious Family Home with Garden',
      price: '$450,000',
      image: '/images/I modern house.jpg',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      location: 'Abuja, Nigeria',
    },
    {
      id: '3',
      title: 'Luxury Penthouse with Ocean View',
      price: '$1,200,000',
      image: '/images/I modern house.jpg',
      bedrooms: 3,
      bathrooms: 3,
      area: '3,000 sq ft',
      location: 'Lagos, Nigeria',
    },
    {
      id: '4',
      title: 'Cozy Studio in Trendy Neighborhood',
      price: '$150,000',
      image: '/images/I modern house.jpg',
      bedrooms: 1,
      bathrooms: 1,
      area: '500 sq ft',
      location: 'Port Harcourt, Nigeria',
    },
    {
      id: '5',
      title: 'Renovated Townhouse with Rooftop Terrace',
      price: '$350,000',
      image: '/images/I modern house.jpg',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      location: 'Ibadan, Nigeria',
    },
    {
      id: '6',
      title: 'Contemporary Villa with Pool',
      price: '$850,000',
      image: '/images/I modern house.jpg',
      bedrooms: 5,
      bathrooms: 4,
      area: '4,000 sq ft',
      location: 'Abuja, Nigeria',
    },
  ]
}

export default function ListingsPage() {
  const listings = getListings()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <Link href={`/listing/${listing.id}`} key={listing.id} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{listing.title}</h2>
                <p className="text-gray-600">{listing.location}</p>
                <p className="text-2xl font-bold text-primary">{listing.price}</p>
                <div className="flex justify-between text-primary">
                  <span className="flex items-center">
                    <Bed className="w-4 h-4 mr-1 " />
                    {listing.bedrooms} beds
                  </span>
                  <span className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {listing.bathrooms} baths
                  </span>
                  <span className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {listing.area}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

