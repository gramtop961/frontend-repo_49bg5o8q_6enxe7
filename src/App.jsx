import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Aircraft from './pages/Aircraft'
import Experience from './pages/Experience'
import Accessibility from './pages/Accessibility'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import { Privacy, Terms } from './pages/Legal'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
