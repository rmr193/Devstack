import { useState, useEffect } from 'react'
import logoText from './assets/logo-text.png'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from public/technologies.json
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load technologies (Status: ${res.status})`)
        }
        return res.json()
      })
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Fetch error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        <div className="flex justify-center mb-4">
          <img src={logoText} alt="DevStack Logo" className="h-10 object-contain" />
        </div>
        <h1 className="text-3xl font-extrabold mb-2 text-slate-800">
          DevStack <span className="text-brand-gradient">Data Loading</span>
        </h1>
        <p className="text-slate-600 mb-6 text-sm">
          Phase 3 verification: JSON data loaded dynamically with useEffect.
        </p>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
            ⚠️ {error}
          </div>
        ) : (
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <p className="text-emerald-600 font-semibold mb-2">
              ✓ Successfully loaded {technologies.length} technologies from JSON!
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech.id}
                  className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-slate-200 text-slate-700 shadow-sm flex items-center gap-1.5"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                  {tech.name}
                </span>
              ))}
              <span className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-semibold">
                +{technologies.length - 6} more
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
