'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function ContactAgent({ agent }: { agent: any }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle sending the message to the agent
    console.log('Message sent:', message)
    setMessage('')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Agent</h2>
      <div className="flex items-center mb-4">
        <Image
          src= '/images/I modern house (1).jpg'
          alt=''
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">Agent Tom</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-1" />
            <span>1234567890</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-1" />
            <span>test@gmail.com</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          className="w-full p-2 border rounded-md mb-4"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

