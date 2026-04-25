import React, { useEffect, useRef, useState } from 'react'
import ChromaBG from './ChromaBG.jsx'

export default function Hero(){
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'Marcos Gomez Villafañe'

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePos({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typewriter effect
  useEffect(() => {
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
    <section className="hero" ref={containerRef}>
      <ChromaBG style="Liquid" />
      
      <div className="hero-content">
        <h1 className="hero-title">{displayedText}<span className="typewriter-cursor"></span></h1>
        <p className="hero-subtitle">Electronics Engineer</p>
        <div className="scroll-hint">
          <span>Scroll down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}
