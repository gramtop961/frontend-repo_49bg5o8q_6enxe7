import { useState } from 'react'

const faqs = [
  { q: 'How do memberships work?', a: 'Choose a tier aligned to your travel rhythm. We outline sample inclusions and tailor specifics during consultation.' },
  { q: 'Can I book for my team or family?', a: 'Yes. Corporate permissions allow multiple authorized bookers and consolidated reporting.' },
  { q: 'What aircraft do you use?', a: 'We source from vetted operators across broad categories—light to large cabin—based on mission fit. No brand affiliations are implied.' },
]

export default function FAQ() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h1>
        <p className="mt-3 text-slate-600">All content below is original and generalized for clarity.</p>
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
