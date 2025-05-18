import React, { useState, useEffect } from 'react'
import Navbar from '../Pages/Navbar'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import Blog from '../Pages/Blog'
import Contact from ./Pages/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'projects', 'skills', 'blog', 'contact']
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Navbar active={activeSection} />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="min-h-screen flex items-center">
          <Home />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="skills" className="py-20 bg-gray-50">
          <Skills />
        </section>
        <section id="blog" className="py-20">
          <Blog />
        </section>
        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>
    </div>
  )
}