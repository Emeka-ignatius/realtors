'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
        <p className="text-center mb-8">Subscribe to our newsletter for the latest property news and exclusive offers.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
          />
          <button type="submit" className="bg-secondary text-blue-900 px-6 py-2 rounded-r-md font-semibold hover:bg-yellow-400 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

