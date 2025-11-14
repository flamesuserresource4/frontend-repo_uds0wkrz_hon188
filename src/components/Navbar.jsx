import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const isDark = !dark
    setDark(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur dark:bg-neutral-900/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-[#A86523] via-[#E9A319] to-[#FAD59A] shadow-sm" />
          <span className="font-bold tracking-tight text-neutral-900 dark:text-white">
            Sarwan Nandh
            <span className="ml-2 text-xs px-2 py-1 rounded-md border border-[#FAD59A]/40 text-[#A86523] bg-[#FCEFCB]/60 dark:bg-[#A86523]/20 dark:text-[#FAD59A]">Student Entrepreneur</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-[#A86523] to-[#E9A319] text-white text-sm px-3 py-2 shadow hover:opacity-90 transition"
          >
            Let’s Talk
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur dark:bg-neutral-900/80 dark:border-white/10">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-left px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
              >
                {item.label}
              </button>
            ))}
            <a href="#contact" className="col-span-2 mt-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#A86523] to-[#E9A319] text-white text-sm px-3 py-2 shadow">Let’s Talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
