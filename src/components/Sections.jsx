import { motion } from 'framer-motion'

const sectionTitle = (text) => (
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white"
  >
    {text}
  </motion.h2>
)

export function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-transparent to-white dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('About')}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl"
        >
          I’m a student entrepreneur building companies at the intersection of AI, creativity, and lifestyle. My journey started at age 16, inspired by the launch of ChatGPT. Today, I build startups that combine scalable automation, design, and innovation.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/60 border-[#FAD59A]/40 dark:border-neutral-800 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Education</p>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">BTech CSE (AIML), SRM University, KTR (2024–2028)</p>
            <p className="text-neutral-600 dark:text-neutral-400">India</p>
          </div>
          <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/60 border-[#FAD59A]/40 dark:border-neutral-800 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Identity</p>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">Student Entrepreneur • Founder • Builder</p>
            <p className="text-neutral-600 dark:text-neutral-400">Co-Founder at Sarwagyna Pvt Ltd · Founder at CreatorNex · Founder at Wolvra Clothin</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Ventures() {
  const ventures = [
    {
      name: 'Sarwagyna Pvt Ltd',
      desc: 'A multi-domain innovation company building AI agents, automation marketplaces, media, fashion, and global trade solutions.',
      badge: 'Flagship',
    },
    {
      name: 'AgentZ Store',
      desc: 'No-code automation + AI agent marketplace for businesses.',
      badge: 'AI & Automation',
    },
    {
      name: 'CreatorNex',
      desc: 'Social media + creative agency powered by AI.',
      badge: 'Media & Creative',
    },
    {
      name: 'Wolvra Clothin',
      desc: 'Youth-focused fashion brand (ethnic, fusion, streetwear).',
      badge: 'Fashion',
    },
    {
      name: 'Sarwagyna Exports',
      desc: 'Import/export solutions connecting India to global markets.',
      badge: 'Global Trade',
    },
  ]

  return (
    <section id="ventures" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Startups & Ventures')}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{v.name}</h3>
                <span className="text-xs px-2 py-1 rounded-md bg-[#FCEFCB] text-[#A86523] border border-[#FAD59A]/50 dark:bg-[#A86523]/20 dark:text-[#FAD59A]">{v.badge}</span>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    'Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'OpenCV', 'FastAPI', 'MongoDB', 'React', 'Tailwind CSS', 'Framer Motion', 'Git', 'Product Design', 'Brand Strategy'
  ]
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white to-[#FCEFCB]/40 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Skills')}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <motion.div key={s} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-lg border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-200 shadow-sm">
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Journey() {
  const timeline = [
    { year: '2022', title: 'First steps', text: 'Discovered the power of generative AI and started building small automations.' },
    { year: '2023', title: 'Launched early ventures', text: 'Set foundations for CreatorNex and Wolvra Clothin while experimenting with AI tooling.' },
    { year: '2024', title: 'B.Tech begins', text: 'Joined SRM University (AIML). Started Sarwagyna Pvt Ltd and AgentZ Store.' },
    { year: '2025', title: 'Building in public', text: 'Scaling ventures with a focus on AI agents, media, and youth lifestyle.' },
  ]

  return (
    <section id="journey" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Student Life + Entrepreneurship Journey')}
        <div className="mt-10 relative border-l border-[#FAD59A]/50 dark:border-neutral-800 pl-6">
          {timeline.map((t) => (
            <motion.div key={t.year} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative py-5">
              <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full bg-gradient-to-r from-[#A86523] to-[#E9A319] border border-white dark:border-neutral-900" />
              <p className="text-xs uppercase tracking-wider text-[#A86523] dark:text-[#FAD59A] font-semibold">{t.year}</p>
              <p className="mt-1 font-semibold text-neutral-900 dark:text-white">{t.title}</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const sections = [
    {
      heading: 'Hardware & IoT',
      items: [
        {
          title: 'Lost & Found Management & Notification System (Arduino + GSM)',
          desc: 'Identifies lost objects and sends instant notifications using GSM technology for campus use.',
          tags: ['Arduino', 'SIM900A GSM', 'C/C++'],
        },
        {
          title: 'RFID Attendance System (ESP12E + Google Sheets Automation)',
          desc: 'Cloud-connected attendance with RFID auth and real-time logging to Google Sheets.',
          tags: ['ESP-12E', 'MFRC522', 'Apps Script', 'WiFi IoT', 'C/C++'],
        },
        {
          title: 'Arduino Object Detection System (Ultrasonic Sensor)',
          desc: 'Distance sensing with HC-SR04 for safety zones and automation.',
          tags: ['Arduino', 'HC-SR04', 'Embedded C'],
        },
        {
          title: 'Smart Dustbin (Arduino + GSM Notification)',
          desc: 'Ultrasonic fill-level detection with GSM SMS alerts when bin is full.',
          tags: ['Arduino', 'GSM Module', 'Ultrasonic'],
        },
        {
          title: 'Smart Blind Stick (Arduino Assistive Device)',
          desc: 'Ultrasonic object detection with vibration alerts for visually impaired users.',
          tags: ['Arduino', 'Ultrasonic', 'Buzzer/Vibrator'],
        },
      ],
    },
    {
      heading: 'Full-Stack & Websites',
      items: [
        { title: 'Sarwagyna Pvt Ltd – Corporate Website', desc: 'Official multi-division website covering AI, media, fashion, and export.', tags: ['HTML', 'CSS', 'JavaScript', 'React (optional)', 'UI/UX'] },
        { title: 'CreatorNex LLC – Social Media Agency Website', desc: 'Clean, professional site for services, portfolio, and brand identity.', tags: ['HTML', 'CSS', 'Creative Design'] },
        { title: 'Wolvra Clothin – Fashion Brand Website', desc: 'Online presence for youth-focused fashion brand.', tags: ['HTML', 'CSS', 'Tailwind', 'Branding'] },
        { title: 'AgentZ Store – AI Agent Marketplace Website', desc: 'Early-stage UI + landing for no-code automation marketplace.', tags: ['HTML', 'CSS', 'Tailwind', 'Product UI/UX'] },
        { title: 'Personal Portfolio Website', desc: 'Founder-style theme with premium gold palette.', tags: ['HTML', 'CSS', 'Tailwind'] },
      ],
    },
    {
      heading: 'Software & AI Projects',
      items: [
        { title: 'AI Resume Builder for IEEE Scholars', desc: 'Generative AI-powered resume builder with role-specific tailoring and PDF export.', tags: ['Python', 'GenAI', 'Automation', 'HTML/CSS'] },
        { title: 'MED Connect – Online Medicine Donation & Redistribution (Java)', desc: 'Platform connecting donors with NGOs to reduce medicine waste.', tags: ['Java', 'JDBC/MySQL', 'HTML/CSS', 'JSP/Servlets'] },
      ],
    },
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Projects')}

        <div className="mt-10 space-y-12">
          {sections.map((sec) => (
            <div key={sec.heading}>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#A86523] dark:text-[#FAD59A]">{sec.heading}</h3>
              <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.items.map((p) => (
                  <motion.div key={p.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group rounded-2xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-5 shadow-sm hover:shadow-md transition">
                    <div className="aspect-video rounded-xl bg-gradient-to-tr from-[#FAD59A] via-[#E9A319] to-[#A86523] opacity-80 group-hover:opacity-100 transition mb-4" />
                    <h4 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h4>
                    <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
                    {p.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs bg-[#FCEFCB] text-[#A86523] px-2 py-1 rounded-md border border-[#FAD59A]/50 dark:bg-[#A86523]/20 dark:text-[#FAD59A]">{t}</span>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
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
    <section id="achievements" className="relative py-20 bg-gradient-to-b from-[#FCEFCB]/30 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Achievements')}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map(i => (
            <motion.div key={i.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-5 shadow-sm">
              <p className="font-semibold text-neutral-900 dark:text-white">{i.title}</p>
              <p className="mt-1 text-neutral-700 dark:text-neutral-300">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Interests() {
  return (
    <section id="interests" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Other Skills & Interests')}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Trading & Financial Markets</p>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">Actively invested in stocks and mutual funds; focus on market analysis, long-term and swing strategies. Highlights analytical mindset and risk management.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        {sectionTitle('Contact')}
        <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-2xl">Open to collaborations, internships, and startup conversations. Reach out and let’s build something impactful.</p>

        <form className="mt-8 grid gap-4 max-w-xl">
          <input className="w-full rounded-md border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500" placeholder="Your Name" />
          <input className="w-full rounded-md border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500" placeholder="Email" type="email" />
          <textarea className="w-full rounded-md border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 px-4 py-3 text-neutral-800 dark:text-neutral-100 placeholder-neutral-500" placeholder="Message" rows={5} />
          <button type="button" className="rounded-md bg-gradient-to-r from-[#A86523] to-[#E9A319] text-white px-5 py-3 text-sm font-medium shadow hover:opacity-90 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}
