import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-gray-900">About Me</motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-6 text-gray-700 leading-relaxed">
          I am a B.Tech CSE (AI & ML) student from India with a strong entrepreneurial drive. I enjoy turning cutting-edge research into
          usable products. I’ve led student ventures, shipped web apps, and built ML-powered features across NLP, vision, and recommender systems.
        </motion.p>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenCV', 'FastAPI', 'MongoDB', 'React', 'Tailwind CSS', 'Docker', 'Git'
  ]
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-gray-900">Skills</motion.h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <motion.div key={s} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'AI Resume Screener',
      desc: 'Ranks resumes using transformer embeddings and domain heuristics. Dashboard with shortlisting and feedback loops.',
      tags: ['NLP', 'FastAPI', 'React'],
      link: '#'
    },
    {
      title: 'Vision-based Quality Control',
      desc: 'Deployed a lightweight CNN on edge device for visual anomaly detection in manufacturing.',
      tags: ['Computer Vision', 'Edge', 'OpenCV'],
      link: '#'
    },
    {
      title: 'Chat-based Learning Assistant',
      desc: 'RAG pipeline with vector search for course material Q&A. Tuned prompts and evaluators.',
      tags: ['RAG', 'LangChain', 'MongoDB'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group block rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="aspect-video rounded-xl bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 mb-4" />
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Achievements() {
  const items = [
    { title: 'National-Level Hackathon Finalist', desc: 'Built a real-time analytics tool for education.' },
    { title: 'Campus Startup Lead', desc: 'Led a student venture to first 1,000 users.' },
    { title: 'Research Paper (AI/ML)', desc: 'Co-authored on model compression and deployment.' },
  ]
  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-gray-900">Achievements</motion.h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map(i => (
            <motion.div key={i.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-xl border bg-white p-5 shadow-sm">
              <p className="font-semibold text-gray-900">{i.title}</p>
              <p className="mt-1 text-gray-700">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-bold text-gray-900">Contact</motion.h2>
        <p className="mt-6 text-gray-700">Open to collaborations, internships, and startup conversations. Reach out and let’s build something impactful.</p>

        <form className="mt-8 grid gap-4 max-w-xl">
          <input className="w-full rounded-md border px-4 py-3" placeholder="Your Name" />
          <input className="w-full rounded-md border px-4 py-3" placeholder="Email" type="email" />
          <textarea className="w-full rounded-md border px-4 py-3" placeholder="Message" rows={5} />
          <button type="button" className="rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}
