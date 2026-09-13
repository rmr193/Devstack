import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoText from '../assets/logo-text.png'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-sm md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a href="#">
            <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${idx === 0 ? 'text-pink-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 cursor-pointer">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-brand-gradient shadow cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 font-medium py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button className="py-2 text-sm text-slate-700 rounded bg-slate-50">
              Sign In
            </button>
            <button className="py-2 text-sm font-semibold text-white rounded-full bg-brand-gradient">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
