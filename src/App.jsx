import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Placeholder / Loading preview for Phase 4 */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium text-center">
              ⚠️ {error}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Loaded {technologies.length} Technologies
              </h2>
              <p className="text-slate-500 text-sm">
                Ready for Phase 5: Building the 3-column Technology Cards Grid & Category Chips!
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
