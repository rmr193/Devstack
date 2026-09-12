import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoText from '../assets/logo-text.png'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Mobile: Hamburger Left */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Name (Desktop: Left, Mobile: Center) */}
          <div className="flex items-center gap-3 md:justify-start justify-center">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src={logoText}
                alt="Dev Stack"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:inline-block">
                Dev<span className="text-brand-gradient">Stack</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gradient hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Sign In & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-brand-gradient hover:shadow-md hover:shadow-pink-500/20 active:scale-98 transition-all cursor-pointer shadow-xs"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer/Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              className="w-full text-center py-2.5 text-sm font-medium text-slate-700 rounded-lg bg-slate-50"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full text-center py-2.5 text-sm font-semibold text-white rounded-full bg-brand-gradient shadow-xs"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
