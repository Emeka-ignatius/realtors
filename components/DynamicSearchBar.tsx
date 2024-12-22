'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function DynamicSearchBar() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your NLP service and search functionality
    console.log('Searching for:', query)
  }

  return (
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full p-4 pr-12 text-lg border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Looking for a cozy 2-bedroom apartment in Lagos? Let's find it together!"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <Search className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </form>
  )
}

