import React, { useEffect, useRef, useState } from 'react'
import PremiumBackground from './PremiumBackground.jsx'

export default function Hero(){
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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

  return (
    <section className="hero" ref={containerRef}>
      <PremiumBackground />
      
      <div className="hero-bg">
        <div 
          className="hero-light hero-light-1"
          style={{
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
          }}
        ></div>
        <div 
          className="hero-light hero-light-2"
          style={{
            transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`
          }}
        ></div>
        <div 
          className="hero-light hero-light-3"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -30}px)`
          }}
        ></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">[Tu nombre]</h1>
        <p className="hero-subtitle">[Tu rol/especialidad]</p>
        <div className="scroll-hint">
          <span>Desplázate para explorar</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}
