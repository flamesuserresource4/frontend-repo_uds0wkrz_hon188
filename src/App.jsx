import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Achievements, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} • AI/ML Student Entrepreneur • India</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
