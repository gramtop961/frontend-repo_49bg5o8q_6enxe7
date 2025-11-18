import { SectionHeading, Card } from '../components/Sections'

export default function Experience() {
  const steps = [
    { title: 'How Members Travel', text: 'Share your mission profile. We recommend an aircraft category and timing that fits the route, passengers, and preferences.' },
    { title: 'Booking', text: 'Approve a clear itinerary. We confirm aircraft, crew, and ground details, then keep you updated quietly.' },
    { title: 'Concierge', text: 'Catering, ground transfers, and special requests are coordinated in advance. Your preferences live on your profile.' },
    { title: 'Onboard', text: 'A calm cabin with thoughtful touches—privacy-first service, comfort-focused amenities, and punctual departures.' },
  ]

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="A linear, quiet way to fly" text="Minimal steps, maximum clarity. Subtle fade-ins only—no gimmicks." />
        <div className="mt-8 grid gap-6">
          {steps.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
