import { SectionHeading, Card } from '../components/Sections'

export default function About() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="Angelini Jets" text="A franchise of Stratos Jet Charters, Inc. Built to deliver refined private aviation experiences with original, clear communication." />
        <div className="mt-8 grid gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
            <p className="mt-2 text-slate-600">To make private aviation feel calm and honest—clarity in pricing, precision in planning, and service that respects your time.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Philosophy</h3>
            <p className="mt-2 text-slate-600">We keep the experience minimal and intentional. Fewer steps, better communication, and a focus on essentials.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-slate-900">Safety Mindset</h3>
            <p className="mt-2 text-slate-600">Safety is foundational. We work with audited operators and crews who share our standards. Details are verified quietly in the background.</p>
          </Card>
        </div>
      </div>
    </main>
  )
}
