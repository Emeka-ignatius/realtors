'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const properties = [
  { id: 1, image: '/images/I modern house.jpg', title: 'Modern Apartment', price: '$250,000' },
  { id: 2, image: '/images/I modern house (2).jpg', title: 'Cozy House', price: '$350,000' },
  { id: 3, image: '/images/I modern house (1).jpg', title: 'Luxury Villa', price: '$1,200,000' },
]

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length)
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {properties.map((property, index) => (
        <div
          key={property.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={property.image}
            alt={property.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <h3 className="text-3xl font-bold text-white">{property.title}</h3>
            <p className="text-xl text-white">{property.price}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

