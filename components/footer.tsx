'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-secondary bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Dental Pro Logo"
                width={150}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium dental care for a confident smile. Expert dentists with state-of-the-art technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Teeth Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Braces & Aligners
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Root Canal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#dentists" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+919916556514"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 99165 56514
              </a>
              <a
                href="mailto:Sneha.mis@gmail.com "
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Sneha.mis@gmail.com 
              </a>
              <p className="text-sm text-muted-foreground">
                Survey, No 25/1A4, 3rd Floor, SGR-2<br />
                Janatha Colony, Chikkabellandur<br />
                Bengaluru, Karnataka 560035
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2026 Dental Pro. All rights reserved.
            </p>
            <span className="hidden sm:inline">•</span>
            <p>
              Design & Developed by <a href="https://webel.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold transition-colors">Webel.io</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
