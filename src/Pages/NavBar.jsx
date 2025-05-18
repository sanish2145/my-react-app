import React, { useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">MyPortfolio</div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className={`inline-block px-1 border-b-2 ${
                  active === name.toLowerCase()
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent hover:border-gray-300'
                } transition-colors`}
              >
                {name}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  active === name.toLowerCase()
                    ? 'text-indigo-600 underline'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}