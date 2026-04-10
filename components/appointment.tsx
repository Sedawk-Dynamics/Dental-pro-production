'use client'

import React from "react"

import { useState } from 'react'
import { Calendar, Clock, Users } from 'lucide-react'

export function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const data = await res.json()
  
      if (data.success) {
        alert("Appointment request sent successfully!")
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          date: '',
          time: '',
        })
      } else {
        alert("Failed to send request. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong!")
    }
  }

  return (
    <section id="appointment" className="py-20 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule your dental visit at your convenience. Our team looks forward to caring for your smile.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Info */}
            <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Why Book With Us?</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Easy Scheduling</p>
                    <p className="text-sm text-primary-foreground/80">
                      Quick and convenient appointment booking
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Flexible Hours</p>
                    <p className="text-sm text-primary-foreground/80">
                      Appointments available throughout the week
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Expert Care</p>
                    <p className="text-sm text-primary-foreground/80">
                      Experienced dentists ready to help
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 99165 56514"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="braces">Braces & Aligners</option>
                    <option value="rootcanal">Root Canal</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="checkup">General Checkup</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 hover:bg-primary/90 transition-colors duration-200 mt-6"
                >
                  Book Appointment
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We will contact you to confirm your appointment within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
