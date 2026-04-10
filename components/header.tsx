'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Dental Pro Logo"
            width={120}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Why Us
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#dentists" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 md:inline-flex gap-2"
            asChild
          >
            <Link href="#appointment">
              <Phone className="h-4 w-4" />
              Book Now
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-secondary bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="#services"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#gallery"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#dentists"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Team
            </Link>
            <Link
              href="#testimonials"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact
            </Link>
            <Button
              className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
              asChild
            >
              <Link href="#appointment">
                <Phone className="h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
