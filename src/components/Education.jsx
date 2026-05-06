import React from 'react'
import { motion } from 'framer-motion'
import { HiDocumentText, HiExternalLink } from 'react-icons/hi'

import degreePDF from '../assets/Degree Transcipt.pdf'
import foundationPDF from '../assets/Foundation Transcript.pdf'
import spmPDF from '../assets/SPM.pdf'

const eduCards = [
  {
    icon: '🏛️',
    level: 'Bachelor\'s Degree',
    institution: 'Universiti Tunku Abdul Rahman',
    degree: 'Bachelor of Computer Science (Honours)',
    year: '2022 – 2026',
    pdf: degreePDF,
    label: 'View Degree Transcript',
    accent: 'blue',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    btnBg: 'bg-blue-600 hover:bg-blue-700',
    highlight: 'Computer Science',
  },
  {
    icon: '🔬',
    level: 'Foundation',
    institution: 'Universiti Tunku Abdul Rahman',
    degree: 'Foundation in Science',
    year: '2021 – 2022',
    pdf: foundationPDF,
    label: 'View Foundation Transcript',
    accent: 'emerald',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700',
    highlight: 'Science',
  },
  {
    icon: '📚',
    level: 'Secondary School',
    institution: 'SPM (Sijil Pelajaran Malaysia)',
    degree: 'Malaysian Certificate of Education',
    year: '2020',
    pdf: spmPDF,
    label: 'View SPM Result',
    accent: 'purple',
    bg: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    btnBg: 'bg-purple-600 hover:bg-purple-700',
    highlight: 'National',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Education() {
  return (
    <section id="education" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Academic Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Education & Achievements
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full mx-auto" />
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
            A strong academic foundation built through dedication and continuous learning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {eduCards.map((card, i) => (
            <motion.div
              key={card.degree}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative rounded-3xl bg-gradient-to-br ${card.bg} border ${card.border} p-7 flex flex-col group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Decorative circle */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${card.badgeBg} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon + Level */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${card.badgeBg} flex items-center justify-center text-2xl shadow-sm`}>
                    {card.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText}`}>
                    {card.level}
                  </span>
                </div>

                {/* Institution */}
                <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                  {card.institution}
                </p>

                {/* Degree */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex-1">
                  {card.degree}
                </h3>

                {/* Year */}
                <p className="text-sm text-gray-500 mb-6 font-medium">{card.year}</p>

                {/* CTA Button */}
                <a
                  href={card.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-white text-sm font-semibold ${card.btnBg} transition-all duration-200 shadow-sm hover:shadow-md active:scale-95`}
                >
                  <HiDocumentText size={16} />
                  {card.label}
                  <HiExternalLink size={14} className="ml-auto" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          * PDF documents open in a new tab for viewing
        </motion.p>
      </div>
    </section>
  )
}
