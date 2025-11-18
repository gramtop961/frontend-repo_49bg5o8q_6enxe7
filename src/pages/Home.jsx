import Hero from '../components/Hero'
import { SectionHeading, Card, CTA } from '../components/Sections'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
          <Card>
            <p className="text-sm font-semibold text-slate-500">Membership</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Access without complexity</h3>
            <p className="mt-2 text-slate-600">Choose from three clear tiers with predictable value. No surprises—only precision.</p>
            <a href="/membership" className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:opacity-80">See options →</a>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-slate-500">Aircraft</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">The right cabin for the mission</h3>
            <p className="mt-2 text-slate-600">From short regional hops to intercontinental journeys, select by range, capacity, and comfort.</p>
            <a href="/aircraft" className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:opacity-80">Explore categories →</a>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-slate-500">Service</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Concierge that anticipates</h3>
            <p className="mt-2 text-slate-600">We build each itinerary around you—ground transfers, catering preferences, and timing handled quietly.</p>
            <a href="/experience" className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:opacity-80">How it works →</a>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Experience"
            title="A calm, linear way to fly"
            text="Reserve, confirm, and depart with minimal steps. We keep the process quiet and efficient."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Request', text: 'Share dates, passengers, and preferences. We’ll respond with options that fit the mission.' },
              { title: 'Confirm', text: 'Approve an itinerary with clear terms and transparent positioning, if any.' },
              { title: 'Depart', text: 'Arrive to a prepared cabin and a crew aligned to your needs and privacy.' },
            ].map((i) => (
              <Card key={i.title}>
                <h4 className="text-lg font-semibold text-slate-900">{i.title}</h4>
                <p className="mt-2 text-slate-600">{i.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
