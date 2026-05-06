import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    icon: '🎓',
    title: '2026 Graduate',
    subtitle: 'Bachelor of Computer Science',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '🤝',
    title: 'Flexible Worker',
    subtitle: 'Solo & Team Collaboration',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '♾️',
    title: 'Infinite Learner',
    subtitle: 'Continuous Growth Mindset',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-100',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding bg-white">
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
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                I recently graduated from{' '}
                <span className="font-semibold text-gray-900">
                  Universiti Tunku Abdul Rahman (UTAR), Kampar Campus, Malaysia
                </span>{' '}
                with a Bachelor of Computer Science. While university projects differ from industry standards, I am committed to bridging that gap.
              </p>
              <p>
                I do not claim to know everything yet.{' '}
                <span className="font-semibold text-gray-900">
                  I take ownership of my work
                </span>{' '}
                and I am willing to learn whatever is necessary. With a solid foundation in programming and a strong sense of responsibility, I am looking for a company that values growth, patience, and hard work.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Self-Starter', 'Detail-Oriented', 'Fast Learner'].map(val => (
                <span
                  key={val}
                  className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-200">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
              <div className="relative z-10">
                <p className="text-blue-200 text-sm font-medium mb-2">University</p>
                <p className="text-2xl font-bold mb-1">UTAR, Kampar</p>
                <p className="text-blue-200 text-sm">Malaysia</p>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-blue-200 text-sm font-medium mb-2">Degree</p>
                  <p className="text-xl font-bold">Bachelor of Computer Science</p>
                  <p className="text-blue-200 text-sm mt-1">(Honours)</p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-blue-200 text-sm font-medium mb-3">Core Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Python', 'Java', 'Node.js', 'Firebase', 'C++'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.border} p-7 overflow-hidden group cursor-default`}
            >
              <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                  {stat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
