import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-[#FCEFCB] dark:from-neutral-950 dark:to-neutral-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-[#FCEFCB]/90 dark:from-neutral-950/70 dark:via-neutral-950/60 dark:to-neutral-900/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-sm uppercase tracking-widest text-[#A86523] dark:text-[#FAD59A] font-semibold">
            Student Entrepreneur • India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            Sarwan Nandh
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#A86523] via-[#E9A319] to-[#FAD59A]">
              B.Tech CSE (AIML), SRM University, KTR
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed max-w-2xl"
          >
            I’m a student entrepreneur building companies at the intersection of AI, creativity, and lifestyle. My journey started at age 16, inspired by the launch of ChatGPT. Today, I build startups that combine scalable automation, design, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#ventures" className="pointer-events-auto inline-flex items-center rounded-md bg-gradient-to-r from-[#A86523] to-[#E9A319] text-white px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">
              Explore Ventures
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-md bg-white/90 text-neutral-900 px-5 py-3 text-sm font-medium shadow border border-[#FAD59A]/50 hover:bg-white transition dark:bg-neutral-900 dark:text-white dark:border-neutral-700">
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative lg:col-span-5"
        >
          <div className="pointer-events-none absolute -inset-12 bg-gradient-to-tr from-[#A86523]/15 via-[#E9A319]/15 to-[#FAD59A]/15 blur-3xl rounded-full" />
          <div className="relative backdrop-blur-sm rounded-2xl border border-white/40 bg-white/30 dark:bg-neutral-800/30 dark:border-white/10 p-6 shadow-xl">
            <div className="text-sm text-neutral-800 dark:text-neutral-200">
              <p className="font-semibold">Focus Areas</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>AI agents and automation marketplaces</li>
                <li>Creative tooling and media systems</li>
                <li>Design, branding, and lifestyle products</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
