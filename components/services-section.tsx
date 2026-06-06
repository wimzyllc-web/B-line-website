"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Globe, Palette, Camera, Printer, Sparkles } from "lucide-react"

const services = [
  {
    title: "Custom Web Design",
    description: "Clean, modern, and highly functional websites built to capture your vibe and turn visitors into customers.",
    icon: Globe,
  },
  {
    title: "Identity & Logo Creation",
    description: "Memorable, timeless logos and cohesive brand marks that tell your story at a glance.",
    icon: Palette,
  },
  {
    title: "Commercial Photography",
    description: "High-quality, authentic imagery of your space, products, and team to elevate your digital presence.",
    icon: Camera,
  },
  {
    title: "Print & Marketing Materials",
    description: "Tangible touchpoints that leave an impression, from premium business cards to curated packaging and promotional assets.",
    icon: Printer,
  },
  {
    title: "Full-Scale Brand Consultation",
    description: "A holistic look at your business's visual footprint to align your messaging, aesthetics, and marketing materials.",
    icon: Sparkles,
  },
]

export function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    containScroll: "trimSnaps"
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                What We Do
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Services
            </h2>
          </div>
          
          {/* Desktop navigation arrows */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Staggered offset grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group"
              style={{ 
                transform: index % 2 === 1 ? 'translateY(40px)' : 'translateY(0)',
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
                {/* Inner glow border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-ivy/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-ivy/20 text-ivy transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="mb-4 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal swipeable carousel with peek effect */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="min-w-0 flex-[0_0_85%] pl-4 first:pl-0"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ivy/20 text-ivy">
                      <service.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="mb-3 font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile navigation dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className="h-2 w-2 rounded-full bg-border transition-all duration-300 hover:bg-accent"
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
