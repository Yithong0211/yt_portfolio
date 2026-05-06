import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload, HiArrowRight } from 'react-icons/hi'
import profilePic from '../assets/porfolio pic.png'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="blob absolute -top-32 -left-32 w-96 h-96 bg-blue-100/60"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-100/60"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-100/40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Ooi Yi{' '}
            <span className="gradient-text">Thong</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-xl sm:text-2xl font-semibold text-gray-500"
          >
            Software Engineering Graduate
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Building clean digital experiences with code, curiosity and continuous growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary text-base group"
            >
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <a
              href="/component/Ooi Yi Thong_resume_latest.pdf"
              download
              className="btn-secondary text-base group"
            >
              <HiDownload size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Tech Stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {['React', 'Python', 'Java', 'Node.js', 'Kotlin', 'C++'].map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0 flex flex-col items-center gap-6 mt-6"        >
          <div className="relative">

            {/* Outer ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-200"
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ margin: '-12px' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-indigo-200"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              style={{ margin: '-20px' }}
            />

            {/* Profile Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-blue-200/50">
              <img
                src={profilePic}
                alt="Ooi Yi Thong - Software Engineering Graduate"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-gray-100 flex items-center gap-2"
            >
              <span className="text-xl">🎓</span>
              <div>
                <p className="text-xs font-bold text-gray-900">UTAR</p>
                <p className="text-xs text-gray-500">Class of 2026</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 border border-gray-100 flex items-center gap-2"
            >
              <span className="text-xl">💻</span>
              <div>
                <p className="text-xs font-bold text-gray-900">Full Stack</p>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
