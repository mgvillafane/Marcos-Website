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
      
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
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
        <button className="logo" onClick={() => scrollToSection('hero')}>[Tu nombre]</button>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>Sobre</a></li>
          <li><a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a></li>
          <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a></li>
          <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Habilidades</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={`cta ${activeSection === 'contact' ? 'active' : ''}`}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

