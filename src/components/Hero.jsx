export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Background image with art-directed sources */}
      <div className="absolute inset-0">
        <picture>
          {/* Large screens: dusk runway with aircraft silhouette */}
          <source
            media="(min-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1503181092439-d7b31f0b2e69?q=80&w=2400&auto=format&fit=crop"
          />
          {/* Tablets: cabin detail */}
          <source
            media="(min-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop"
          />
          {/* Mobile fallback: wing over clouds */}
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
            alt="A refined private aviation scene: aircraft, runway, and sky at golden hour"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        {/* Luxe gradient and subtle vignette for premium depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.25),rgba(2,6,23,0.85))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] sm:min-h-[72vh] lg:min-h-[78vh] flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Private aviation, refined for the way you move
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200/95">
              Angelini Jets orchestrates seamless aircraft access and thoughtful service for individuals and teams who value time above all.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/membership"
                className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                Explore Membership
              </a>
              <a
                href="/aircraft"
                className="inline-flex items-center rounded-full bg-transparent border border-white/70 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                View Aircraft Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
