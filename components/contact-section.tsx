import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="bg-card/90 px-4 py-24 backdrop-blur-sm md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Get In Touch
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ready to make a bee-line
            <br />
            <span className="text-accent">for better branding?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Let&apos;s collaborate to give your small business the visual identity it deserves.
          </p>
        </div>

        {/* Contact info - centered */}
        <div className="mx-auto max-w-md">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-foreground">
              Reach out directly
            </h3>
            
            <a
              href="tel:385-269-9258"
              className="group flex items-center gap-4 text-lg text-foreground/80 transition-colors hover:text-accent"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <span>385-269-9258</span>
            </a>
            
            <a
              href="mailto:blinebranding@proton.me"
              className="group flex items-center gap-4 text-lg text-foreground/80 transition-colors hover:text-accent"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <span>blinebranding@proton.me</span>
            </a>

            <p className="mt-4 text-sm text-muted-foreground">
              We typically respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/logo.jpeg"
                alt="B-Line Branding"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-semibold tracking-wide text-accent">B-Line Branding</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} B-Line Branding. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
