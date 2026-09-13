import logoText from '../assets/logo-text.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2 space-y-3">
            <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />
            <p className="text-sm text-slate-500 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 pt-1 text-xs font-medium">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Product</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-slate-900">Home</a>
              <a href="#technologies" className="hover:text-slate-900">Technologies</a>
              <a href="#projects" className="hover:text-slate-900">Projects</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Company</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
              <a href="#careers" className="hover:text-slate-900">Careers</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#privacy" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-900">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
