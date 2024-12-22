import { Check } from 'lucide-react';

export default function PropertyAmenities({ 
  amenities }: { amenities?: string[] }) {
  if (!Array.isArray(amenities) || amenities.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
        <p>No amenities available for this property.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
      <ul className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 mr-2 text-green-500" />
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
