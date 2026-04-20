'use client'

import { Star } from 'lucide-react'

export function Dentists() {
  const dentists = [
    {
      name: 'Dr. Sneha Mishra',
      specialization: 'Primary Consultant Dentist and Root Canal Specialist',
      description: 'Expert in advanced root canal treatments, restorative dentistry, and comprehensive oral care.',
    },
    {
      name: 'Dr. Suhas',
      specialization: 'OMFS and Oral Surgeon',
      description: 'Specializes in oral and maxillofacial surgery, including tooth extractions, jaw surgeries, and dental implants.',
    },
    {
      name: 'Dr. Jeff',
      specialization: 'Orthodontist and Invisalign Expert',
      description: 'Focused on teeth alignment, braces, and Invisalign treatments to create confident, well-aligned smiles.',
    },
  ]

  return (
    <section id="dentists" className="py-20 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Dentists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of certified dental professionals dedicated to your oral health.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dentists.map((dentist, index) => {
            const initials = dentist.name
              .split(' ')
              .slice(1) // remove "Dr."
              .map((n) => n[0])
              .join('')
              .toUpperCase()

            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >

                {/* Initials Avatar */}
                <div className="relative h-64 flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
                  <div className="text-5xl font-bold tracking-wide">
                    {initials}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {dentist.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-2">
                    {dentist.specialization}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dentist.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* <span className="text-sm font-medium text-muted-foreground">
                      {dentist.experience} Experience
                    </span> */}

                    {/* <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div> */}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}