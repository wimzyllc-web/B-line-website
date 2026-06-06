export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      {/* Oversized watermark "B" */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span 
          className="font-[family-name:var(--font-playfair)] text-[40rem] font-bold leading-none text-accent/[0.03] sm:text-[50rem] md:text-[60rem]"
          style={{ transform: 'translateX(-10%) translateY(-5%)' }}
        >
          B
        </span>
      </div>
      
      {/* Decorative geometric line */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2">
        <div className="absolute left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-ivy/30 to-ivy/10" />
        <div className="absolute right-0 h-px w-1/4 bg-gradient-to-l from-transparent via-ivy/30 to-ivy/10" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-12 bg-accent" />
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Philosophy
          </span>
          <span className="h-px w-12 bg-accent" />
        </div>
        
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Our Approach
        </h2>
        
        <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl md:leading-relaxed">
          We believe small businesses deserve world-class design without the corporate runaround. From day one, we take the straightest path to uncovering your business&apos;s unique identity and bringing it to life visually.
        </p>
        
        {/* Decorative accent elements */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          <div className="h-1 w-8 rounded-full bg-ivy/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
