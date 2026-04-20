'use client'

import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Prashant Khare',
      text: "We are consulting Dr. Sneha for our kid's dental treatment and the experience has been exceptional. She patiently listens to every concern, understands the situation deeply and ensures our child feels completely comfortable before any procedure. Her warmth, care, and consistent follow-ups truly reflect her commitment to her patients well-being",
      rating: 5,
    },
    {
      name: 'Tanisha',
      text: 'I had a very good experience with Dr.Sneha. She did pulpectomy for my 8 yr old son and handled everything with so much care and patience, she explained the procedure clearly and made my child feel comfortable and calm throughout the treatment. I am really grateful for her gentle approach and professionalism, highly recommended her for dental treatments.',
      rating: 5,
    },
    {
      name: 'Radhika Pansari',
      text: 'Dr. Sneha is a wonderful doctor. Visited her to get cap filling done for my daughter. The entire process was seamless and the way she handled my daughter was exceptional. Highly recommended for all your dental problems.',
      rating: 5,
    },
    {
      name: 'Arjun Singh',
      text: 'I 100% recommend Dr. Sneha for her excellent dental expertise. She is highly professional, caring, and makes patients feel completely at ease. I have visited her both for myself and my kids. Her ability to connect with patients of all ages, especially kids, makes the whole experience stress-free. Truly a dependable and skilled dentist!',
      rating: 5,
    },
  ]

  const colors = [
    "bg-primary",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
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
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-accent/30" />
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full text-white flex items-center justify-center font-semibold text-lg ${colors[index % colors.length]}`}
                >
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}