'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Card 1 */}
          <div className="rounded-xl bg-secondary p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
              <Phone className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
            <a
              href="tel:+919916556514"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 99165 56514
            </a>
          </div>

          {/* Contact Card 2 */}
          <div className="rounded-xl bg-secondary p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
              <Mail className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
            <a
              href="mailto:Sneha.mis@gmail.com "
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sneha.mis@gmail.com
            </a>
          </div>

          {/* Contact Card 3 */}
          <div className="rounded-xl bg-secondary p-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
              <MapPin className="h-7 w-7 text-primary-foreground" />
            </div>

            <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>

            <div className="flex justify-center">
              <p className="text-muted-foreground text-sm text-left max-w-[250px]">
                Survey, No 25/1A4, 3rd Floor, SGR-2<br />
                Janatha Colony, Chikkabellandur<br />
                Bengaluru, Karnataka 560035
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-16">
          <iframe
            src="https://www.google.com/maps?q=Dental+Pro+Advance+Clinic+Bangalore&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          />
        </div>

        {/* Hours & Social */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hours */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Clinic Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="font-semibold text-primary">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-semibold text-primary">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-semibold text-primary">Closed</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-secondary">
                <span className="text-muted-foreground">Emergency</span>
                <span className="font-semibold text-accent">+91 99165 56514</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Follow Us</h3>
            <p className="text-muted-foreground mb-6">
              Connect with us on social media for dental tips, before & after showcases, and special offers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
