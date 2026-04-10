import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { Dentists } from '@/components/dentists'
import { Testimonials } from '@/components/testimonials'
import { Appointment } from '@/components/appointment'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { MessageCircle } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Dentists />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      {/* ✅ WhatsApp Floating Button */}
<div className="fixed bottom-5 right-5 z-50 group">
  <a
    href="https://wa.me/919916556514?text=Hello%20I%20want%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-all duration-300 animate-bounce"
  >
    <MessageCircle size={28} />
  </a>

  {/* Tooltip */}
  <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
    Chat with us
  </span>
</div>
    </main>
  )
}
