import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            B.Tech CSE (AI & ML) Student
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Entrepreneur from India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-gray-700 text-lg leading-relaxed"
          >
            I build AI-powered products that blend research with real-world impact. Passionate about ML systems,
            scalable web apps, and startup execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800 transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow border hover:bg-gray-50 transition">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
          <div className="relative backdrop-blur-sm rounded-2xl border border-white/40 bg-white/30 p-6 shadow-xl">
            <div className="text-sm text-gray-700">
              <p className="font-semibold">What I do</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>AI/ML research and model deployment</li>
                <li>Full-stack web development</li>
                <li>Entrepreneurship & product strategy</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
