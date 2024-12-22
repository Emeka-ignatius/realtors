import ContactAgent from '@/components/ContactAgent';
import MortgageCalculator from '@/components/MortgageCalculator';
import NearbyAttractions from '@/components/NearbyAttractions';
import PropertyAmenities from '@/components/PropertyAmenities';
import PropertyGallery from '@/components/PropertyGallery';
import { Bed, Bath, Square, MapPin, Calendar } from 'lucide-react'
import React from 'react'

interface Property {
  [x: string]: any;
  id: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string;
  price: string;
  image: string[];
  amenities?: string[];
  attractions?: { name: string; distance: string }[];
}

const getListingById = (id: string): Property | null => {
  const listings = [
    {
      id: '1',
      title: 'Modern Apartment in City Center',
      price: '$250,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 2,
      bathrooms: 2,
      attractions: [
        { name: 'Central Park', distance: '1.2 km' },
        { name: 'Museum of Art', distance: '0.8 km' },
        { name: 'City Mall', distance: '0.5 km' },
        { name: 'Main Train Station', distance: '2.0 km' }
      ],
      amenities: ['Wi-Fi', '24/7 Security', 'Elevator Access', 'Parking'],
      area: '1,200 sq ft',
      location: 'Lagos, Nigeria',
    },
    {
      id: '2',
      title: 'Spacious Family Home with Garden',
      price: '$450,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 4,
      bathrooms: 3,
      attractions: [
        { name: 'Zoo and Wildlife Park', distance: '5.0 km' },
        { name: 'Family Recreation Center', distance: '3.2 km' },
        { name: 'Local Farmers Market', distance: '1.8 km' }
      ],
      amenities: ['Private Garden', 'Playground', 'Garage Parking', 'Wi-Fi'],
      area: '2,500 sq ft',
      location: 'Abuja, Nigeria',
    },
    {
      id: '3',
      title: 'Luxury Penthouse with Ocean View',
      price: '$1,200,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 3,
      bathrooms: 3,
      attractions: [
        { name: 'Beachfront', distance: '0.2 km' },
        { name: 'Luxury Spa and Resort', distance: '0.5 km' },
        { name: 'High-End Shopping Center', distance: '1.0 km' }
      ],
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Wi-Fi', 'Home Theater'],
      area: '3,000 sq ft',
      location: 'Lagos, Nigeria',
    },
    {
      id: '4',
      title: 'Cozy Studio in Trendy Neighborhood',
      price: '$150,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 1,
      bathrooms: 1,
      attractions: [
        { name: 'Artisan Cafes', distance: '0.3 km' },
        { name: 'Boutique Shops', distance: '0.5 km' },
        { name: 'Community Park', distance: '1.0 km' }
      ],
      amenities: ['Swimming Pool', 'Gym', 'Wi-Fi', '24/7 Concierge'],
      area: '500 sq ft',
      location: 'Port Harcourt, Nigeria',
    },
    {
      id: '5',
      title: 'Renovated Townhouse with Rooftop Terrace',
      price: '$350,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 3,
      bathrooms: 2,
      attractions: [
        { name: 'Local Art Gallery', distance: '2.0 km' },
        { name: 'Cultural Heritage Museum', distance: '3.5 km' },
        { name: 'Riverside Walkway', distance: '1.2 km' }
      ],
      amenities: ['Rooftop Terrace', 'Gym', 'Parking', 'Wi-Fi', 'Solar Panels'],
      area: '1,800 sq ft',
      location: 'Ibadan, Nigeria',
    },
    {
      id: '6',
      title: 'Contemporary Villa with Pool',
      price: '$850,000',
      image: ['/images/I modern house.jpg', '/images/I modern house (2).jpg'],
      bedrooms: 5,
      bathrooms: 4,
      attractions: [
        { name: 'Private Golf Course', distance: '4.0 km' },
        { name: 'Luxury Shopping District', distance: '2.5 km' },
        { name: 'Exclusive Dining Area', distance: '2.0 km' }
      ],
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Wi-Fi', 'Outdoor Lounge'],
      area: '4,000 sq ft',
      location: 'Abuja, Nigeria',
    },
  ];
  return listings.find((listing) => listing.id === id) || null;
};


export default async function PropertySinglePage({ params }: { params: { id: string } }) {
  const property = await getListingById(params.id);

  if (!property) {
    return <div className='container mx-auto px-4 py-8 text-center'>Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-xl text-primary font-semibold mb-4">{property.price}</p>

    <div className="flex items-center text-primary">
      <MapPin className='h-5 w-5 mr-2'/>
      <span>{property.location}</span>
    </div>


      <PropertyGallery images={property.image}/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-primary" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-primary" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2 text-primary" />
                <span>{property.area}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>Built in {property.yearBuilt}</span>
              </div>
            </div>
            <p className="text-gray-700">{property.description}</p>
          </div>

          <PropertyAmenities amenities={property.amenities} />
          <NearbyAttractions 
  attractions={property.attractions}
/>
        </div>

        <div className="md:col-span-1">
          <ContactAgent agent={property.agent} />
          <MortgageCalculator propertyPrice={parseFloat(property.price.replace('$', '').replace(',', ''))} />
        </div>
      </div>
    </div>
  );
}


