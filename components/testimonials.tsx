'use client'

import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'The best dental experience I\'ve had! Dr. Sarah was so professional and made me feel comfortable. My teeth whitening results are amazing!',
      rating: 5,
      image: '/patient-testimonial.jpg',
    },
    {
      name: 'Raj Patel',
      text: 'Excellent clinic with state-of-the-art equipment. My root canal treatment was painless thanks to the expert care. Highly recommended!',
      rating: 5,
      image: '/patient-testimonial.jpg',
    },
    {
      name: 'Anjali Gupta',
      text: 'Got dental implants done and the results are incredible. The staff is friendly and the clinic is very hygienic. Worth every penny!',
      rating: 5,
      image: '/patient-testimonial.jpg',
    },
    {
      name: 'Arjun Singh',
      text: 'My orthodontic treatment was smooth and well-planned. Dr. Chen explained everything clearly and the results exceeded my expectations.',
      rating: 5,
      image: '/patient-testimonial.jpg',
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied patients who have transformed their smiles with Dental Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-secondary shadow-md hover:shadow-lg transition-all duration-300 p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-accent/30" />
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
