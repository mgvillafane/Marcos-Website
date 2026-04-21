import React, { useEffect, useRef, useState } from 'react'

export default function PremiumBackground(){
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = []
    const particleCount = 100
    let time = 0

    class Particle {
      constructor(){
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.5 ? 'rgba(74, 157, 111' : 'rgba(95, 168, 143'
      }

      update(mouseX, mouseY){
        this.x += this.vx
        this.y += this.vy

        // Repulsión del mouse
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repelDistance = 120

        if (distance < repelDistance){
          const angle = Math.atan2(dy, dx)
          const force = (1 - distance / repelDistance) * 1.5
          this.vx += Math.cos(angle) * force
          this.vy += Math.sin(angle) * force
        }

        // Fricción
        this.vx *= 0.96
        this.vy *= 0.96

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw(){
        ctx.fillStyle = `${this.color}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++){
      particles.push(new Particle())
    }

    const drawGradientOrbs = (t) => {
      const orbs = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 180, color1: 'rgba(74, 157, 111, 0.15)', color2: 'rgba(95, 168, 143, 0.08)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 200, color1: 'rgba(95, 168, 143, 0.12)', color2: 'rgba(74, 157, 111, 0.06)' },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, size: 150, color1: 'rgba(74, 157, 111, 0.1)', color2: 'rgba(95, 168, 143, 0.05)' }
      ]

      orbs.forEach((orb, i) => {
        const gradient = ctx.createRadialGradient(
          orb.x + Math.sin(t * 0.1 + i) * 50,
          orb.y + Math.cos(t * 0.1 + i) * 50,
          0,
          orb.x,
          orb.y,
          orb.size
        )
        gradient.addColorStop(0, orb.color1)
        gradient.addColorStop(1, orb.color2)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 20, 25, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.005

      drawGradientOrbs(time)

      particles.forEach(p => {
        p.update(mousePos.x, mousePos.y)
        p.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="premium-canvas"></canvas>
}
