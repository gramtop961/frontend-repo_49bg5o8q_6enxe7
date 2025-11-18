import { SectionHeading, Card } from '../components/Sections'

const categories = [
  {
    name: 'Super-Light Jet',
    img: 'https://images.unsplash.com/photo-1548883354-7622d3f3cd48?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop',
    description: 'Speed and efficiency for short hops with modern cabins.',
    bullets: ['4–6 passengers', 'Range ~1,200–1,700 nm', 'Great value for regional trips'],
  },
  {
    name: 'Light Jet',
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1504197639813-76941188ec1b?q=80&w=2000&auto=format&fit=crop',
    description: 'Efficient regional travel for short to mid-range missions.',
    bullets: ['4–7 passengers', 'Range ~1,200–1,800 nm', 'Low operating cost and quick turnarounds'],
  },
  {
    name: 'Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop',
    description: 'Balanced range and standing-room cabins for business and family travel.',
    bullets: ['6–8 passengers', 'Range ~1,500–2,200 nm', 'Generous baggage in many models'],
  },
  {
    name: 'Super Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop',
    description: 'Longer range and performance with quiet, comfortable cabins.',
    bullets: ['8–9 passengers', 'Range ~2,500–3,200 nm', 'Great coast-to-coast capability'],
  },
  {
    name: 'Heavy Jet',
    img: 'https://images.unsplash.com/photo-1515281239448-2abe329fe5e1?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1489914099268-1dad649f76bf?q=80&w=2000&auto=format&fit=crop',
    description: 'Expansive cabins and intercontinental reach. Think Gulfstream G450 class.',
    bullets: ['10–14 passengers', 'Range 3,500+ nm', 'Separate living zones and premium amenities'],
  },
  {
    name: 'Long Range Jet',
    img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1516239322121-08dbd9f13fda?q=80&w=2000&auto=format&fit=crop',
    description: 'Global capability with flagship comfort—G650/Global class.',
    bullets: ['12–16 passengers', 'Range 6,000+ nm', 'Ultra-long routes and master-suite options in some'],
  },
]

export default function Aircraft() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Aircraft Access"
          title="Select by mission—from super‑light to long range"
          text="Categories below are generalized. Images are illustrative and non‑branded."/>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.name}>
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (target.dataset.fallbackApplied) return
                    target.dataset.fallbackApplied = 'true'
                    target.src = c.fallback
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/10" />
              </div>
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
