'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function VirtualTour({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // In a real implementation, you would initialize and play the virtual tour here
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Virtual Tour</h2>
      {isPlaying ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={url} allowFullScreen className="w-full h-full"></iframe>
        </div>
      ) : (
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
          >
            <Play className="h-16 w-16 text-white" />
          </button>
        </div>
      )}
    </div>
  )
}

