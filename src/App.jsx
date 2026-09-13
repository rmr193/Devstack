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
  const [selectedStack, setSelectedStack] = useState([])

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])

  const handleAddToStack = (tech) => {
    const isExist = selectedStack.find((item) => item.id === tech.id)
    if (isExist) {
      toast.warn(`${tech.name} is already in your stack!`)
      return
    }
    setSelectedStack([...selectedStack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const handleRemoveFromStack = (techId) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId))
    toast.info('Technology removed from your stack.')
  }

  const handleRemoveAll = () => {
    setSelectedStack([])
    toast.error('All technologies removed from your stack.')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={selectedStack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>

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
