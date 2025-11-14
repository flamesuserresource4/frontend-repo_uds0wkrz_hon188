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
          I’m <strong>Sarwan Nandh (Thondamalla Sarwan)</strong> — a student entrepreneur and BTech CSE (AIML) student at <strong>SRM University, KTR (2024–2028)</strong>. My entrepreneurial journey began at <strong>16</strong> after the launch of ChatGPT, which inspired me to build at the intersection of <strong>AI, automation, creativity, and lifestyle</strong>.
          <br /><br />
          I’m the <strong>Co-Founder of Sarwagyna Pvt Ltd</strong>, an AI-first multi-division company innovating across technology, fashion, media, and global trade. I’m passionate about building scalable systems, automation products, and real-world solutions.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/60 border-[#FAD59A]/40 dark:border-neutral-800 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Education</p>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">BTech CSE (AIML), SRM University, KTR (2024–2028)</p>
            <p className="text-neutral-600 dark:text-neutral-400">Chennai, India</p>
          </div>
          <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/60 border-[#FAD59A]/40 dark:border-neutral-800 p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Identity</p>
            <p className="mt-2 text-neutral-800 dark:text-neutral-200">Student Entrepreneur • Co-Founder • Builder</p>
            <p className="text-neutral-600 dark:text-neutral-400">Co-Founder at Sarwagyna Pvt Ltd · CreatorNex · Wolvra Clothin · AgentZ Store</p>
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
      desc: 'A multi-domain innovation company pioneering solutions across AI, media, fashion, and global trade.',
      badge: 'Flagship',
      bullets: [
        'AI & Automation (AgentZ Store)',
        'Creative Media (CreatorNex)',
        'Fashion & Apparel (Wolvra Clothin)',
        'Global Trade (Sarwagyna Exports)'
      ],
      values: 'Core Values: Innovation, Integrity, Collaboration, Impact.'
    },
    {
      name: 'AgentZ Store',
      desc: 'A no-code AI agent marketplace providing automation tools and workflows for WhatsApp, Telegram, Gmail, and ops.',
      badge: 'AI & Automation',
    },
    {
      name: 'CreatorNex',
      desc: 'A social + creative agency that blends AI with content strategy for brand growth.',
      badge: 'Media & Creative',
    },
    {
      name: 'Wolvra Clothin',
      desc: 'Youth-focused unisex brand across ethnic, fusion, and streetwear — Indian culture meets modern fashion.',
      badge: 'Fashion',
    },
    {
      name: 'Sarwagyna Exports',
      desc: 'Import–export services connecting Indian products to global markets with reliable trade ops.',
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
              {v.bullets && (
                <ul className="mt-3 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                  {v.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {v.values && (
                <p className="mt-3 text-xs text-[#A86523] dark:text-[#FAD59A] font-medium">{v.values}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    // Programming
    'C', 'C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript',
    // AI/ML
    'Agent Workflows', 'Automation Systems',
    // IoT & Embedded
    'Arduino', 'ESP8266/ESP12E', 'GSM Modules', 'RFID',
    // Web Dev
    'Tailwind', 'ReactJS', 'NextJS', 'MySQL',
    // Business
    'Branding', 'Content Strategy', 'Product Building', 'Startup Execution',
    // Other
    'Trading & Markets'
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
              <p className="mt-1 font-semibold text-neutral-900 dark:text:white">{t.title}</p>
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
          title: 'Lost & Found Notification System (Arduino + GSM)',
          desc: 'Detects lost items and sends instant SMS alerts using the SIM900A GSM module. Built for campus-level use.',
          tags: ['Arduino', 'SIM900A GSM', 'C/C++'],
        },
        {
          title: 'RFID Attendance System (ESP12E + Google Sheets)',
          desc: 'WiFi-enabled RFID system that authenticates users and logs attendance directly into Google Sheets in real-time.',
          tags: ['ESP-12E', 'MFRC522', 'Google Apps Script'],
        },
        {
          title: 'Arduino Ultrasonic Object Detection System',
          desc: 'Distance-based object detection for robotics and safety systems using HC-SR04 sensors.',
          tags: ['Arduino', 'HC-SR04'],
        },
        {
          title: 'Smart Dustbin (Arduino + GSM)',
          desc: 'IoT-driven waste level monitoring with GSM notifications when the bin is full.',
          tags: ['Arduino', 'GSM', 'Ultrasonic'],
        },
        {
          title: 'Smart Blind Stick (Arduino)',
          desc: 'Assistive device using ultrasonic sensing and vibration alerts for visually impaired users.',
          tags: ['Arduino', 'Ultrasonic', 'Vibration Motor'],
        },
      ],
    },
    {
      heading: 'Full-Stack & Websites',
      items: [
        { title: 'Sarwagyna Pvt Ltd Website', desc: 'Corporate website showcasing all divisions.', tags: ['HTML', 'CSS', 'JavaScript'] },
        { title: 'CreatorNex Website', desc: 'Branding + creative agency web presence.', tags: ['HTML', 'CSS'] },
        { title: 'Wolvra Clothin Website', desc: 'E-commerce-ready fashion brand front-end.', tags: ['HTML', 'CSS', 'Tailwind'] },
        { title: 'AgentZ Store Website', desc: 'AI automation marketplace landing page.', tags: ['HTML', 'CSS', 'Tailwind'] },
        { title: 'Personal Portfolio Website', desc: 'Modern gold-themed founder-style portfolio.', tags: ['HTML', 'CSS', 'Tailwind'] },
      ],
    },
    {
      heading: 'Software & AI Projects',
      items: [
        { title: 'AI Resume Builder for IEEE Scholars', desc: 'An AI-powered resume generator with role-tailored, ATS-friendly output.', tags: ['Python', 'Generative AI'] },
        { title: 'MED Connect – Online Medicine Donation System (Java)', desc: 'Java web app enabling medicine donations and redistribution to NGOs.', tags: ['Java', 'MySQL', 'JSP/Servlets'] },
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
    { title: 'Founded Sarwagyna Pvt Ltd as a student entrepreneur', desc: 'Built and led a multi-division company while pursuing BTech.' },
    { title: 'Built 10+ engineering and software projects', desc: 'Spanning IoT, full-stack web, and AI/automation.' },
    { title: 'Created end-to-end websites for 4 brands', desc: 'Shipped production-ready sites for Sarwagyna, CreatorNex, Wolvra Clothin, AgentZ.' },
    { title: 'AI Resume Builder for IEEE scholars', desc: 'Delivered a tailored resume automation tool for IEEE students.' },
    { title: 'Active trader and markets learner', desc: 'Continuous learning in stocks and mutual funds.' },
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

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-5">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Email</p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200"><a href="mailto:ADD_YOUR_EMAIL" className="underline underline-offset-2 decoration-[#FAD59A]/60 hover:text-neutral-900 dark:hover:text-white">Add your email here</a></p>
          </div>
          <div className="rounded-xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-5">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">LinkedIn</p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200"><a href="https://linkedin.com/in/sarwannandh" target="_blank" rel="noreferrer" className="underline underline-offset-2 decoration-[#FAD59A]/60">linkedin.com/in/sarwannandh</a></p>
          </div>
          <div className="rounded-xl border border-[#FAD59A]/40 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 p-5">
            <p className="text-sm font-semibold text-[#A86523] dark:text-[#FAD59A]">Location</p>
            <p className="mt-1 text-neutral-800 dark:text-neutral-200">Chennai / Andhra Pradesh, India</p>
          </div>
        </div>

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
