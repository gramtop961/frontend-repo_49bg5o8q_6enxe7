export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-900 to-slate-700" />
            <span className="font-semibold tracking-tight text-slate-900">Angelini Jets</span>
          </div>
          <p className="text-slate-600">Private aviation membership for discerning travelers. Original content and imagery placeholders used throughout.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-3">Company</p>
          <nav className="grid gap-2 text-slate-600">
            <a href="/about" className="hover:text-slate-900">About</a>
            <a href="/experience" className="hover:text-slate-900">Experience</a>
            <a href="/accessibility" className="hover:text-slate-900">Mobility</a>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-3">Membership</p>
          <nav className="grid gap-2 text-slate-600">
            <a href="/membership" className="hover:text-slate-900">Tiers</a>
            <a href="/aircraft" className="hover:text-slate-900">Aircraft Access</a>
            <a href="/faq" className="hover:text-slate-900">FAQs</a>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-3">Legal</p>
          <nav className="grid gap-2 text-slate-600">
            <a href="/privacy" className="hover:text-slate-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-900">Terms</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Angelini Jets • A franchise of Stratos Jet Charters, Inc.</div>
    </footer>
  )
}
