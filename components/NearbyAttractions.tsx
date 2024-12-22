import { MapPin } from 'lucide-react';

export default function NearbyAttractions({ 
  attractions 
}:  {attractions?: {name: string; distance: string}[] }) {
  if (!Array.isArray(attractions) || attractions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nearby Attractions</h2>
        <p>No attractions available nearby.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Nearby Attractions</h2>
      <ul className="space-y-4">
        {attractions.map((attraction, index) => (
          <li key={index} className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-red-500" />
            <span>{attraction.name}</span>
            <span className="ml-auto text-gray-500">{attraction.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
