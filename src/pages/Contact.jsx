import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=2400&auto=format&fit=crop"
            alt="Private terminal lounge"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 h-64 bg-gradient-to-b from-slate-900/70 to-white" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 text-white md:text-slate-900 pt-10">
            <h1 className="text-3xl font-semibold">Speak to Concierge</h1>
            <p className="mt-3 text-slate-200 md:text-slate-600">Share your route, dates, and preferences. We respond quickly and discreetly.</p>
            <div className="hidden md:block mt-6 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528763380143-65b3acb2ec07?q=80&w=1200&auto=format&fit=crop"
                alt="Cabin detail"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="mt-4 grid gap-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="grid gap-1">
                <label className="text-sm text-slate-700">Name</label>
                <input name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="grid gap-1 md:grid-cols-2 md:gap-4">
                <div className="grid gap-1">
                  <label className="text-sm text-slate-700">Company (optional)</label>
                  <input name="company" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div className="grid gap-1">
                  <label className="text-sm text-slate-700">Phone (optional)</label>
                  <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <button className="mt-2 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800">Send message</button>
              {status?.ok && <p className="text-green-700">Thank you—our team will be in touch.</p>}
              {status && !status.ok && <p className="text-red-700">Something went wrong. Please try again.</p>}
              <p className="text-xs text-slate-500">By submitting, you agree to our Privacy and Terms.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <InfoCard title="Response time" text="Most inquiries receive a response within one hour during operating windows." />
          <InfoCard title="Operating hours" text="24/7 trip support for members. New inquiries answered 7am–9pm local." />
          <InfoCard title="Discretion" text="Your details remain private. We operate with strict confidentiality." />
        </div>
      </div>
    </main>
  )
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  )
}
