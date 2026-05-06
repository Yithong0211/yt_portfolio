import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
  FaPython, FaDatabase, FaCloud, FaGithub,
  FaRobot, FaCode, FaAndroid,
} from 'react-icons/fa'
import {
  SiJavascript, SiTailwindcss, SiFirebase,
  SiCplusplus, SiKotlin, SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const toolCategories = [
  {
    label: 'Frontend',
    tools: [
      { name: 'HTML5',        Icon: FaHtml5,        color: '#E34F26' },
      { name: 'CSS3',         Icon: FaCss3Alt,      color: '#1572B6' },
      { name: 'JavaScript',   Icon: SiJavascript,   color: '#F7DF1E' },
      { name: 'React',        Icon: FaReact,        color: '#61DAFB' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend / DB',
    tools: [
      { name: 'Node.js',  Icon: FaNodeJs,    color: '#339933' },
      { name: 'SQLite',   Icon: FaDatabase,  color: '#003B57' },
      { name: 'Firebase', Icon: SiFirebase,  color: '#FFCA28' },
    ],
  },
  {
    label: 'Programming',
    tools: [
      { name: 'Python', Icon: FaPython,    color: '#3776AB' },
      { name: 'Java',   Icon: FaJava,      color: '#007396' },
      { name: 'C++',    Icon: SiCplusplus, color: '#00599C' },
      { name: 'Kotlin', Icon: SiKotlin,    color: '#7F52FF' },
    ],
  },
  {
    label: 'Cloud / Deploy',
    tools: [
      { name: 'Azure',  Icon: FaCloud,    color: '#0078D4' },
      { name: 'Vercel', Icon: SiVercel,   color: '#000000' },
    ],
  },
  {
    label: 'Tools & IDEs',
    tools: [
      { name: 'Android Studio', Icon: FaAndroid,  color: '#3DDC84' },
      { name: 'GitHub',         Icon: FaGithub,   color: '#181717' },
      { name: 'VS Code',        Icon: VscVscode,  color: '#007ACC' },
      { name: 'Cursor',         Icon: FaCode,     color: '#000000' },
      { name: 'Antigravity',    Icon: FaRobot,    color: '#6366F1' },
    ],
  },
]

const ToolCard = ({ name, Icon, color }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-default"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `0 8px 30px ${color}22` }}
      />
      <div className="relative">
        <Icon
          size={36}
          style={{ color: hovered ? color : '#94a3b8' }}
          className="transition-colors duration-300"
        />
      </div>
      <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
        {name}
      </span>
    </motion.div>
  )
}

export default function Tools() {
  return (
    <section id="tools" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-100">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tools I Use
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full mx-auto" />
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
            A curated set of technologies I work with to build modern applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {toolCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {cat.tools.map((tool, ti) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ti * 0.05 }}
                  >
                    <ToolCard {...tool} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
