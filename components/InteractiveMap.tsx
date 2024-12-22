'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Replace with your actual Mapbox access token
mapboxgl.accessToken = 'OiJjbTQxOG4wZnYyNjliMmtxenI3YnB0YWZiIn0.Ma6q4LktFQeToJ-Qgp40sg'

const properties = [
  { id: 1, lat: 6.5244, lng: 3.3792, title: 'Modern Apartment', price: '$250,000' },
  { id: 2, lat: 6.5355, lng: 3.3450, title: 'Cozy House', price: '$350,000' },
  { id: 3, lat: 6.4698, lng: 3.5852, title: 'Luxury Villa', price: '$1,200,000' },
]

export default function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng] = useState(3.3792)
  const [lat] = useState(6.5244)
  const [zoom] = useState(11)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    map.current.on('load', () => {
      properties.forEach((property) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([property.lng, property.lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${property.title}</h3><p>${property.price}</p>`))
          .addTo(map.current!)
      })
    })
  }, [lat, lng, zoom])

  return <div ref={mapContainer} className="w-full h-[50vh]" />
}

