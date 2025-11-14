import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Ventures, Skills, Journey, Projects, Achievements, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Skills />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t bg-white/60 dark:bg-neutral-900/60 backdrop-blur border-white/40 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} • Sarwan Nandh • Student Entrepreneur • India</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">GitHub</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
