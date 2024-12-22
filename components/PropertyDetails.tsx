import { Home, Ruler, Bath, BedDouble } from 'lucide-react'

export default function PropertyDetails({ property }: { property: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <BedDouble className="h-5 w-5 mr-2 text-blue-500" />
          <span>{property.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center">
          <Bath className="h-5 w-5 mr-2 text-blue-500" />
          <span>{property.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center">
          <Ruler className="h-5 w-5 mr-2 text-blue-500" />
          <span>{property.area}</span>
        </div>
        <div className="flex items-center">
          <Home className="h-5 w-5 mr-2 text-blue-500" />
          <span>{property.price}</span>
        </div>
      </div>
      <p className="text-gray-600">{property.description}</p>
    </div>
  )
}

