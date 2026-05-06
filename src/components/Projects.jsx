import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

// Correcting image paths. Assume these assets are in your public folder.
const ecommerceImg = '/component/ecommerceimg.png'
const matchaImg = '/component/matchaimg.png'

// 1. Updated Project Data: Emoji references removed as they are redundant.
const projects = [
  {
    id: 1,
    tag: 'E-Commerce',
    title: 'MiniQlo E-Commerce Platform',
    description:
      'A full-featured modern online shopping experience built with React, featuring product catalog, cart management, multi-step checkout with payment integration, and order tracking.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    img: ecommerceImg,
    alt: 'MiniQlo E-Commerce Website Screenshot',
    accent: 'blue',
    gradFrom: 'from-blue-600',
    gradTo: 'to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    url: 'https://miniqlo.vercel.app',
    featured: true,
  },
  {
    id: 2,
    tag: 'Landing Page',
    title: 'Minimal Matcha — Scroll Animation',
    description:
      'A premium Japanese-inspired Matcha brand landing page with immersive GSAP scroll animations, elegant typography, and a minimal aesthetic inspired by high-end product design.',
    tech: ['React', 'GSAP', 'ScrollTrigger', 'CSS3'],
    img: matchaImg,
    alt: 'Matcha Landing Page Screenshot',
    accent: 'emerald',
    gradFrom: 'from-emerald-600',
    gradTo: 'to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    url: 'https://matcha-landing.vercel.app/',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-slate-50 to-white">
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
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full mx-auto" />
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
            Hand-crafted projects showcasing my passion for clean design and solid engineering.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
            >
              <div className="relative overflow-hidden bg-gray-100 aspect-video lg:aspect-auto min-h-64">
                <img
                  src={proj.img}
                  alt={proj.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none' }}
                />

                {/* 
                   Removed: The entire overlay content section including the emoji.
                */}
              </div>

              {/* Content Section (Remaining logic is unchanged) */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${proj.badgeBg} ${proj.badgeText}`}>
                    {proj.tag}
                  </span>
                  {proj.featured && (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {proj.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-50 border border-gray-200 text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={proj.url}
                  target="_blank" // Recommended for external links
                  rel="noopener noreferrer" // Recommended for external links
                  className={`inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${proj.gradFrom} ${proj.gradTo} shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group/btn`}
                >
                  View Project
                  <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}