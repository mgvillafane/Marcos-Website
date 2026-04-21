import React, { useEffect, useRef } from 'react'

export default function HeroBackground(){
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Crear blobs animados
    const createBlob = (delay) => {
      const blob = document.createElement('div')
      blob.className = 'hero-blob'
      blob.style.animationDelay = `${delay}s`
      container.appendChild(blob)
      return blob
    }

    // Agregar 3 blobs con diferentes posiciones y delays
    createBlob(0)
    createBlob(2)
    createBlob(4)

    return () => {
      container.querySelectorAll('.hero-blob').forEach(blob => blob.remove())
    }
  }, [])

  return <div className="hero-bg-container" ref={containerRef}></div>
}
