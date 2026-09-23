import React, { useEffect, useState } from 'react'
import ChromaBG from './ChromaBG.jsx'

export default function Hero(){
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'Marcos Gómez Villafañe'

  // Typewriter effect
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(fullName)
      return
    }
    let index = 0
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">
      <ChromaBG />
      
      <div className="hero-content">
        <h1 className="hero-title">{displayedText}<span className="typewriter-cursor"></span></h1>
        <p className="hero-subtitle">Electrical Engineer and Computer Scientist</p>
        <a className="scroll-hint" href="#about">
          <span>Scroll down</span>
          <span className="scroll-arrow" aria-hidden="true">&#8595;</span>
        </a>
      </div>
    </section>
  )
}
