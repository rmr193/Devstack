import logoText from './assets/logo-text.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="flex justify-center mb-4">
          <img src={logoText} alt="DevStack Logo" className="h-10 object-contain" />
        </div>
        <h1 className="text-3xl font-extrabold mb-3 text-slate-800">
          Build with <span className="text-brand-gradient">DevStack</span>
        </h1>
        <p className="text-slate-600 mb-6 text-sm">
          Phase 2 Complete: Centralized gradient theme (Orange → Pink → Violet), fonts, and assets successfully initialized.
        </p>
        <button className="w-full py-3 px-6 rounded-full text-white font-semibold bg-brand-gradient shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
          Brand Theme Active
        </button>
      </div>
    </div>
  )
}

export default App
