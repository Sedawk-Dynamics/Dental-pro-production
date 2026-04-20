'use client'

import { CheckCircle, Users, Zap, Shield } from 'lucide-react'

export function WhyUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified dentists with specialized training and extensive experience.',
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'State-of-the-art dental equipment for precise and efficient treatments.',
    },
    {
      icon: Shield,
      title: 'Pain-Free Care',
      description: 'Latest anesthesia and gentle techniques for comfortable dental procedures.',
    },
    {
      icon: CheckCircle,
      title: 'Hygienic Environment',
      description: 'Modern clinic with strict sterilization and safety protocols.',
    },
  ]

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Why Choose Dental Pro?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are committed to providing exceptional dental care with the highest standards of professionalism and patient comfort. Your smile is our priority.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
              <a href="#contact">Schedule Consultation</a>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-75"></div>
            <img
              src="/chair.jpeg"
              alt="Modern dental clinic"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
