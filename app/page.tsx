import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed storefront background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/storefront-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  )
}
