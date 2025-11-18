import { SectionHeading, Card } from '../components/Sections'

const categories = [
  {
    name: 'Light Jet',
    img: 'https://images.unsplash.com/photo-1542336868-39d4f06f909d?q=80&w=2000&auto=format&fit=crop',
    description: 'Efficient regional travel for short to mid-range missions.',
    bullets: ['4–6 passengers', 'Typical range up to ~1,200–1,500 nm', 'Compact cabins with focused comfort'],
  },
  {
    name: 'Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1520435972711-6c8150ed81f2?q=80&w=2000&auto=format&fit=crop',
    description: 'Balanced range and cabin size for business and family itineraries.',
    bullets: ['6–8 passengers', 'Typical range ~1,500–2,200 nm', 'Quiet cabins with standing room in many models'],
  },
  {
    name: 'Super Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1593941707874-ef25b8b06112?q=80&w=2000&auto=format&fit=crop',
    description: 'Longer range with generous space and baggage capacity.',
    bullets: ['8–9 passengers', 'Typical range ~2,500–3,000 nm', 'Enhanced performance and comfort'],
  },
  {
    name: 'Large Cabin Jet',
    img: 'https://images.unsplash.com/photo-1541976076758-347942db197a?q=80&w=2000&auto=format&fit=crop',
    description: 'Intercontinental capability with expansive, quiet interiors.',
    bullets: ['10–14 passengers', 'Typical range 3,500+ nm', 'Separate living zones and premium amenities'],
  },
]

export default function Aircraft() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Aircraft Access"
          title="Select by mission—light to large cabin"
          text="Categories below are generalized and non-branded. Images are placeholders representing private aviation."/>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Card key={c.name}>
              <img src={c.img} alt={c.name} className="rounded-xl mb-4 h-40 w-full object-cover"/>
              <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
              <p className="mt-2 text-slate-600">{c.description}</p>
              <ul className="mt-3 text-slate-700 space-y-1 list-disc list-inside">
                {c.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
