export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2000&auto=format&fit=crop" alt="Private jet runway" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-slate-900/60"/>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Private aviation, refined for the way you move</h1>
          <p className="mt-6 text-lg text-slate-200">Angelini Jets delivers seamless aircraft access, membership simplicity, and thoughtful service—built for individuals and teams who value time above all.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/membership" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors">Explore Membership</a>
            <a href="/aircraft" className="inline-flex items-center rounded-full bg-transparent border border-white/70 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">View Aircraft Access</a>
          </div>
        </div>
      </div>
    </section>
  )
}
