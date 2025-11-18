import { SectionHeading, Card } from '../components/Sections'

const tiers = [
  {
    name: 'Signature',
    summary: 'Flexible access for individual travelers',
    benefits: [
      'On-demand flights with preferred pricing',
      'Priority support and schedule monitoring',
      'Standard concierge services',
    ],
  },
  {
    name: 'Corporate',
    summary: 'Built for teams with recurring travel',
    benefits: [
      'Dedicated account management',
      'Multimember booking permissions',
      'Consolidated reporting and invoicing',
    ],
  },
  {
    name: 'Reserve',
    summary: 'Highest-priority access and personalization',
    benefits: [
      'First-call availability assurance',
      'Expanded catering and ground coordination',
      'Private terminal arrangements where available',
    ],
  },
]

export default function Membership() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="Three clear tiers, all original to Angelini Jets"
          text="Select the level of support and priority that matches your travel rhythm. Benefits below are representative and non-binding placeholders."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name}>
              <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-2 text-slate-600">{t.summary}</p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                {t.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">Request Details</a>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
