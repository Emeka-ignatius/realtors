'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PropertyGallery({ images }: { images: string[] }) {
  const [currentIndexImage, setCurrentIndexImage] = useState(images[0])

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  // }

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  // }

  return (
    <div className="w-full mb-8">
      {/* Main Image */}
      <div className="relative w-full h-[60vh] mb-4 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={currentIndexImage}
          alt="Main Property Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Subimages */}
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
              image === currentIndexImage ? 'border-primary' : 'border-gray-300'
            }`}
            onClick={() => setCurrentIndexImage(image)}
          >
            <Image
              src={image}
              alt={`Subimage ${index + 1}`}
              width={96}
              height={96}
              objectFit="cover"
            />
          </button>
        ))}
      </div>    
     </div>
  )
}

