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
        
        {/* Technologies Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Explore Technologies
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select tools and frameworks to assemble your custom stack
            </p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium text-center">
              Failed to load technologies. Please refresh the page.
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

export default App
