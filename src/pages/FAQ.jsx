import { useState } from 'react'

const faqs = [
  { q: 'Are you affiliated with Stratos Jets?', a: 'Angelini Jets operates as a franchise of Stratos Jet Charters, Inc. We adopt their high safety and service standards while maintaining our own brand voice and member experience.' },
  { q: 'How do memberships work?', a: 'Choose a tier aligned to your travel rhythm. We outline sample inclusions and tailor specifics during consultation.' },
  { q: 'Can I book for my team or family?', a: 'Yes. Corporate permissions allow multiple authorized bookers and consolidated reporting.' },
  { q: 'What aircraft do you use?', a: 'We source from vetted operators across categories—super‑light to long range—based on mission fit. No specific manufacturer endorsements are implied.' },
  { q: 'How are safety and compliance handled?', a: 'We work with audited operators and crews who meet rigorous third‑party standards. We verify air carrier credentials and crew currency on every trip.' },
  { q: 'What routes do you cover?', a: 'Domestic U.S., Canada, Caribbean, and international routes on request. Long‑range aircraft enable intercontinental itineraries.' },
  { q: 'How quickly can I depart?', a: 'Same‑day departures are often possible, subject to aircraft and crew availability, airport hours, and weather.' },
  { q: 'What is included in trip pricing?', a: 'Aircraft, crew, standard catering, fuel, landing/handling fees, and FET where applicable. De‑icing, hangar, special catering, and out‑of‑scope repositioning are quoted as needed.' },
]

export default function FAQ() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-3 text-slate-600">The following is original guidance influenced by our operational standards.</p>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item, idx) => (
            <Accordion key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </main>
  )
}

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between">
        <span className="text-slate-900 font-medium">{q}</span>
        <span className="text-slate-500">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-slate-600">{a}</p>}
    </div>
  )
}
