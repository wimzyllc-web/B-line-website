"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 md:py-0">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl md:h-[600px] md:w-[600px]" />
        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-ivy/10 blur-3xl md:h-[500px] md:w-[500px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-20">
        {/* Left side - Typography */}
        <div className="flex flex-1 flex-col justify-center pt-8 md:pt-0">
          <div className="mb-6 inline-flex items-baseline gap-3">
            <span className="h-px w-8 self-center bg-accent" />
            <span className="font-[family-name:var(--font-script)] text-4xl leading-none text-accent sm:text-5xl">
              B-Line
            </span>
            <span className="text-base font-medium uppercase tracking-[0.3em] text-accent sm:text-lg">
              Branding
            </span>
          </div>
          
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">The Direct</span>
            <span className="block">Route to a</span>
            <span className="block text-accent">Beautiful</span>
            <span className="block">Brand.</span>
          </h1>
          
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            B-Line Branding helps small businesses cut through the noise. We combine a sharp eye for design with strategic execution to build brands that get noticed and remembered.
          </p>
          
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0 md:text-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right side - Logo */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="animate-float relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]">
            <Image
              src="/images/logo.jpeg"
              alt="B-Line Branding Logo - Elegant bee design with gold lettering"
              fill
              className="rounded-2xl object-contain shadow-2xl shadow-accent/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
