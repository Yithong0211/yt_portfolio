import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

// REMOVED: Static import is no longer needed for files in the public folder
// import resumePDF from '../assets/Ooi Yi Thong_resume_latest.pdf'

const contacts = [
  {
    label: 'Email',
    value: 'ooiyithong@gmail.com',
    href: 'mailto:ooiyithong@gmail.com',
    Icon: HiMail,
    color: '#EA4335',
    bg: 'from-red-50 to-orange-50',
    border: 'border-red-100',
    iconBg: 'bg-red-100',
    description: 'Drop me a message anytime',
  },
  {
    label: 'GitHub',
    value: 'github.com/Yithong0211',
    href: 'https://github.com/Yithong0211',
    Icon: FaGithub,
    color: '#181717',
    bg: 'from-gray-50 to-slate-50',
    border: 'border-gray-200',
    iconBg: 'bg-gray-100',
    description: 'Check out my code repositories',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ooi-yi-thong-545578383',
    href: 'https://www.linkedin.com/in/ooi-yi-thong-545578383/',
    Icon: FaLinkedin,
    color: '#0A66C2',
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
    description: 'Connect with me professionally',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  // UPDATED: Path pointing to the public folder
  const resumePDF = '/assets/Ooi Yi Thong_resume_latest.pdf'

  const copyEmail = () => {
    navigator.clipboard.writeText('ooiyithong@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Let's Connect
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full mx-auto" />
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
            I'm open to graduate opportunities, internships, and meaningful collaborations.
          </p>
        </motion.div>

        {/* Hero CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10 sm:p-14 text-center text-white overflow-hidden mb-12 shadow-2xl shadow-blue-200"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob absolute -top-20 -left-20 w-72 h-72 bg-white/5" />
            <div className="blob absolute -bottom-20 -right-20 w-72 h-72 bg-white/5" />
          </div>
          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-widest">Available Now</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to start my career
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto">
              Looking for a company that values growth, patience, and hard work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-lg"
              >
                <HiMail size={18} />
                {copied ? '✓ Copied!' : 'ooiyithong@gmail.com'}
              </button>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <HiDownload size={18} />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col items-center gap-4 p-7 rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} shadow-sm hover:shadow-xl transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}
              >
                <c.Icon size={26} style={{ color: c.color }} />
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-base">{c.label}</p>
                <p className="text-xs text-gray-500 mt-1">{c.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}