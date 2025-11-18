export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-xs uppercase tracking-wider text-slate-500">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>{children}</div>
  )
}

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-10 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Membership designed around your travel rhythm</h3>
            <p className="mt-3 text-slate-300">Speak with our team to tailor access and preferences for your upcoming missions. No obligations—just helpful guidance.</p>
          </div>
          <div className="flex md:justify-end">
            <a href="/contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">Speak to Concierge</a>
          </div>
        </div>
      </div>
    </section>
  )
}
