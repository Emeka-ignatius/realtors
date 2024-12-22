import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    image: '/images/I modern house.jpg',
    quote: 'I found my dream home thanks to this platform. The process was smooth and efficient!',
  },
  {
    name: 'Jane Smith',
    role: 'Real Estate Investor',
    image: '/images/I modern house.jpg',
    quote: 'The market insights provided here have been invaluable for my investment decisions.',
  },
  {
    name: 'Mike Johnson',
    role: 'First-time Buyer',
    image: '/images/I modern house.jpg',
    quote: 'As a first-time buyer, I appreciated the guidance and resources available on this site.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

