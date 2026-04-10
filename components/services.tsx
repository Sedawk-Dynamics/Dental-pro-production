'use client'

import { Sparkles, Heart, Lock, Zap, Award, Smile } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening to brighten your smile and boost confidence.',
      image: '/image/1.jpg',
    },
    {
      icon: Heart,
      title: 'Dental Implants',
      description: 'Advanced dental implants for missing teeth replacement with natural appearance.',
      image: '/image/2.png',
    },
    {
      icon: Lock,
      title: 'Braces & Aligners',
      description: 'Modern orthodontic solutions for perfect teeth alignment.',
      image: '/image/3.webp',
    },
    {
      icon: Zap,
      title: 'Root Canal',
      description: 'Painless root canal treatment to save damaged teeth.',
      image: '/image/4.jpg',
    },
    {
      icon: Award,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleaning, checkups, and preventive treatments.',
      image: '/image/5.webp',
    },
    {
      icon: Smile,
      title: 'Cosmetic Dentistry',
      description: 'Aesthetic dental treatments for your perfect smile makeover.',
      image: '/before-after-teeth.jpg',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental solutions for all your oral health needs. Expert care with modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-xl overflow-hidden bg-white border border-secondary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-colors">
                    <a href="#contact">Book Appointment</a>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
