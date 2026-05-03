import React, { useEffect, useState } from 'react'

export default function Header(){
  const [activeSection, setActiveSection] = React.useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element){
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      // Mostrar navbar después de scrollear un poco
      setIsVisible(window.scrollY > 100)
      
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'awards', 'contact']
      for (const section of sections){
        const element = document.getElementById(section)
        if (element){
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200){
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${isVisible ? 'visible' : ''}`}>
      <nav className="nav container">
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a onClick={() => scrollToSection('awards')} className={activeSection === 'awards' ? 'active' : ''}>Awards</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={`cta ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

