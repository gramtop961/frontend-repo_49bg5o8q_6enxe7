import { SectionHeading, Card } from '../components/Sections'

export default function Accessibility() {
  const items = [
    { title: 'Ramp Solutions', text: 'We coordinate ramp and lift options where available to ensure safe, efficient boarding for all mobility profiles.' },
    { title: 'Boarding Support', text: 'Trained teams manage boarding assistance discreetly, with emphasis on dignity and comfort.' },
    { title: 'Crew Preparedness', text: 'Crew briefed on specific needs ahead of arrival, including seating preferences, equipment handling, and timing.' },
    { title: 'Comfort Considerations', text: 'Cabin setups adjusted for ease of movement, with thoughtful stowage and lavatory access planning.' },
  ]

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Mobility Solutions" title="Accessibility without compromise" text="We prioritize mobility-friendly aviation across aircraft categories." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((s) => (
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
