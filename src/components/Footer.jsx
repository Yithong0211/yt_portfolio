import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">OY</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Ooi Yi Thong</p>
              <p className="text-gray-500 text-xs">Software Engineering Graduate</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm">
            {['Home', 'About', 'Education', 'Tools', 'Projects', 'Contact'].map(link => (
              <button
                key={link}
                onClick={() => {
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:text-white transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:ooiyithong@gmail.com"
              className="p-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
              aria-label="Email"
            >
              <HiMail size={20} />
            </a>
            <a
              href="https://github.com/ooiyithong"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ooi-yi-thong-a49a18347"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © {year} Ooi Yi Thong. Built with React &amp; Tailwind CSS.
          <span className="mx-2">·</span>
          Designed with ❤️ in Malaysia
        </div>
      </div>
    </footer>
  )
}
