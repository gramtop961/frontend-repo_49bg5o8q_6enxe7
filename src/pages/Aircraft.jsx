import { useState } from 'react'
import { SectionHeading, Card } from '../components/Sections'

// Category taxonomy reflects common industry groupings
// VLJ < Light < Super Light < Midsize < Super Midsize < Heavy < Ultra‑Long‑Range
const categories = [
  {
    name: 'Very Light Jet (VLJ)',
    img: 'https://images.unsplash.com/photo-1541666602546-72b9bffbd328?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop',
    description: 'Efficient entry-level jets ideal for short regional hops and small airfields.',
    bullets: ['2–5 passengers', 'Range ~800–1,200 nm', 'Best for short sectors and lean budgets'],
    models: ['Embraer Phenom 100/100EV', 'Cessna Citation Mustang', 'Eclipse 500/550'],
  },
  {
    name: 'Light Jet',
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1504197639813-76941188ec1b?q=80&w=2000&auto=format&fit=crop',
    description: 'Fast, efficient point‑to‑point travel across regional distances.',
    bullets: ['4–7 passengers', 'Range ~1,000–1,800 nm', 'Quick turns and strong value'],
    models: ['Cessna Citation M2/CJ3+', 'Learjet 40/45', 'Hondajet HA‑420'],
  },
  {
    name: 'Super Light Jet',
    img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop',
    description: 'Bridges light and midsize—more cabin, range, and baggage without heavy costs.',
    bullets: ['6–8 passengers', 'Range ~1,800–2,200 nm', 'Great for multi‑leg days and longer regionals'],
    models: ['Embraer Phenom 300/E', 'Cessna Citation XLS/XLS+', 'Learjet 75'],
  },
  {
    name: 'Midsize Jet',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1516239322121-08dbd9f13fda?q=80&w=2000&auto=format&fit=crop',
    description: 'Stand‑up cabins, solid baggage, and coast‑to‑coast potential in optimal winds.',
    bullets: ['6–9 passengers', 'Range ~2,000–3,000 nm', 'Comfortable for business or family trips'],
    models: ['Hawker 800XP/900XP', 'Citation Sovereign+', 'Gulfstream G150/G200'],
  },
  {
    name: 'Super Midsize Jet',
    img: 'https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop',
    description: 'True coast‑to‑coast performance with quiet, spacious cabins.',
    bullets: ['8–10 passengers', 'Range ~3,000–3,800 nm', 'Excellent speed, runway performance, and comfort'],
    models: ['Bombardier Challenger 300/350', 'Cessna Citation Latitude/Longitude', 'Gulfstream G280'],
  },
  {
    name: 'Heavy Jet',
    img: 'https://images.unsplash.com/photo-1515281239448-2abe329fe5e1?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1489914099268-1dad649f76bf?q=80&w=2000&auto=format&fit=crop',
    description: 'Large‑cabin comfort and intercontinental reach—think Gulfstream G450 class.',
    bullets: ['10–14 passengers', 'Range ~3,500–5,500 nm', 'Separate living zones and premium amenities'],
    models: ['Gulfstream G350/G450', 'Bombardier Challenger 605/650', 'Dassault Falcon 2000LXS'],
  },
  {
    name: 'Ultra‑Long‑Range Jet',
    img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2000&auto=format&fit=crop',
    fallback: 'https://images.unsplash.com/photo-1516239322121-08dbd9f13fda?q=80&w=2000&auto=format&fit=crop',
    description: 'Flagship comfort and global capability—G650/Global/Falcon 8X class.',
    bullets: ['12–16 passengers', 'Range 6,000–7,500+ nm', 'Nonstop intercontinental missions'],
    models: ['Gulfstream G650/G650ER', 'Bombardier Global 6000/7500', 'Dassault Falcon 8X/10X'],
  },
]

function Models({ items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4"
      >
        {open ? 'Hide example aircraft' : 'View example aircraft'}
      </button>
      {open && (
        <ul className="mt-2 text-slate-700 space-y-1 list-disc list-inside">
          {items.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Aircraft() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Aircraft Access"
          title="Select by mission—VLJ to ultra‑long‑range"
          text="Categories are generalized and illustrative; actual sourcing is tailored per trip."/>
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
              <Models items={c.models} />
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
