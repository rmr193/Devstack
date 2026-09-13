import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingSpinner from './components/LoadingSpinner'
import TechCard from './components/TechCard'
import YourStack from './components/YourStack'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedStack, setSelectedStack] = useState([])

  // Fetch JSON data dynamically
  useEffect(() => {
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

  // Add technology to stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id)

    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      })
      return
    }

    setSelectedStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2500,
    })
  }

  // Remove single technology from stack
  const handleRemoveFromStack = (techId) => {
    const removedItem = selectedStack.find((item) => item.id === techId)
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId))

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`, {
        position: 'top-right',
        autoClose: 2500,
      })
    }
  }

  // Clear all technologies from stack
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return

    setSelectedStack([])
    toast.error('All technologies removed from your stack.', {
      position: 'top-right',
      autoClose: 2500,
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Technologies & Your Stack Section */}
        <section
          id="technologies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-normal">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Loading, Error or Content */}
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="p-6 bg-red-50 text-red-600 rounded-2xl text-sm font-medium text-center border border-red-100">
              Failed to load technologies. Please refresh the page.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Technology Cards: 3-column layout (responsive: 1 col on mobile, 2 on tablet, 3 on desktop) */}
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      isAdded={selectedStack.some((item) => item.id === tech.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              </div>

              {/* Your Stack Sidebar */}
              <div className="lg:col-span-4 xl:col-span-3">
                <YourStack
                  selectedStack={selectedStack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
