import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedBackground(){
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = []
    const particleCount = 15
    const connectionDistance = 150
    const mouseDistance = 100

    class Particle {
      constructor(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.3
        this.baseX = this.x
        this.baseY = this.y
      }

      update(mouseX, mouseY){
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseDistance){
          const angle = Math.atan2(dy, dx)
          this.vx = -Math.cos(angle) * 1.5
          this.vy = -Math.sin(angle) * 1.5
        } else {
          this.vx += (Math.random() - 0.5) * 0.1
          this.vy += (Math.random() - 0.5) * 0.1
          this.vx *= 0.99
          this.vy *= 0.99
        }

        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw(){
        ctx.fillStyle = `rgba(74, 157, 111, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++){
      particles.push(new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++){
        for (let j = i + 1; j < particles.length; j++){
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance){
            ctx.strokeStyle = `rgba(74, 157, 111, ${0.2 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 20, 25, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.update(mousePos.x, mousePos.y)
        p.draw()
      })

      drawConnections()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mousePos])

  const handleMouseMove = (e) => {
    if (canvasRef.current){
      const rect = canvasRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  const handleMouseLeave = () => {
    setMousePos({ x: -500, y: -500 })
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="animated-bg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    ></canvas>
  )
}

