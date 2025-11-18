import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/membership', label: 'Membership' },
  { to: '/aircraft', label: 'Aircraft Access' },
  { to: '/experience', label: 'Experience' },
  { to: '/accessibility', label: 'Mobility' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-900 to-slate-700" />
          <span className="font-semibold tracking-tight text-slate-900">Angelini Jets</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/membership"
            className="ml-4 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Join
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <details className="md:hidden">
      <summary className="list-none cursor-pointer p-2 -mr-2 rounded-md hover:bg-slate-100 transition-colors">
        <span className="sr-only">Open menu</span>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-slate-900" />
          <div className="w-6 h-0.5 bg-slate-900" />
          <div className="w-6 h-0.5 bg-slate-900" />
        </div>
      </summary>
      <div className="absolute top-16 inset-x-0 bg-white border-b border-slate-200 shadow-sm">
        <nav className="px-4 py-4 grid gap-3">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="px-2 py-2 rounded hover:bg-slate-50 text-slate-700">
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/membership" className="px-3 py-2 rounded-full text-center bg-slate-900 text-white">Join</NavLink>
        </nav>
      </div>
    </details>
  )
}
