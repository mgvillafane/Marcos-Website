import React, { useEffect, useState } from 'react'

const sections = ['about', 'projects', 'experience', 'education', 'awards', 'contact']

export default function Header(){
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
      let current = 'hero'
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= 200) current = id
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isVisible ? 'visible' : ''}`}>
      <nav className="nav container" aria-label="Main navigation" onKeyDown={event => {
        if (event.key === 'Escape') {
          setMenuOpen(false)
          event.currentTarget.querySelector('.menu-toggle').focus()
        }
      }}>
        <a className="logo-initials" href="#hero" aria-label="Back to top" onClick={() => setMenuOpen(false)}>MGV</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '\u00d7' : '\u2630'}</span>
        </button>
        <ul id="main-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {sections.map(id => (
            <li key={id}>
              <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} className={`${id === 'contact' ? 'cta ' : ''}${activeSection === id ? 'active' : ''}`} onClick={() => { setActiveSection(id); setMenuOpen(false) }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
