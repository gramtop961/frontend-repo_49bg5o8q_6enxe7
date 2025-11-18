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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-600">Share a few details and our concierge will respond discreetly. This form saves to our database.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm text-slate-700">Name</label>
            <input name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-slate-700">Email</label>
            <input type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-slate-700">Company (optional)</label>
            <input name="company" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-slate-700">Phone (optional)</label>
            <input name="phone" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-slate-700">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <button className="mt-2 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800">Send</button>
          {status?.ok && <p className="text-green-600">Thank you—our team will be in touch.</p>}
          {status && !status.ok && <p className="text-red-600">Something went wrong. Please try again.</p>}
        </form>
        <div className="mt-10 text-sm text-slate-600">
          <p>Angelini Jets — Placeholder address</p>
          <p>Map placeholder</p>
        </div>
      </div>
    </main>
  )
}
