import { SectionHeading, Card } from '../components/Sections'

export default function Experience() {
  const pillars = [
    {
      title: 'Precision Planning',
      text: 'We design every mission around range, weather, airfield, and passenger profile—quietly handled in advance.'
    },
    {
      title: 'Concierge, End-to-End',
      text: 'Catering, ground transfers, and preferences are pre-arranged. Your profile informs every detail.'
    },
    {
      title: 'Cabin Calm',
      text: 'Noise-managed cabins, punctual departures, and thoughtful amenities create a refined onboard atmosphere.'
    },
    {
      title: 'Transparent Value',
      text: 'Clear terms, no hidden repositioning. You always know the aircraft category, crew standards, and timing.'
    }
  ]

  const steps = [
    { title: 'Share Mission', text: 'Tell us your dates, route, passengers, and preferences.' },
    { title: 'Receive Options', text: 'We propose aircraft categories and clear itineraries.' },
    { title: 'Confirm', text: 'Approve one option and we align aircraft, crew, and ground details.' },
    { title: 'Depart', text: 'Arrive to a prepared cabin. Enjoy a quiet, efficient journey.' },
  ]

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Service that stays out of the way" text="Subtle, linear, and reliable—no noise, just results." />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="How it works" title="Four steps from request to wheels up" />
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Card key={s.title}>
                <div className="text-sm font-semibold text-slate-500">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h4>
                <p className="mt-2 text-slate-600">{s.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
