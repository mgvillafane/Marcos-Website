import React, { useEffect, useRef, useState } from 'react'

export default function CosmicLines(){
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const lines = []
    const lineCount = 8
    let time = 0

    class CosmicLine {
      constructor(index){
        this.index = index
        this.angle = (Math.PI * 2 * index) / lineCount
        this.speed = 0.3 + Math.random() * 0.2
        this.length = Math.min(canvas.width, canvas.height) * 1.2
        this.opacity = 0.4 + Math.random() * 0.3
      }

      draw(t){
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        
        const x1 = centerX + Math.cos(this.angle + t * this.speed) * 50
        const y1 = centerY + Math.sin(this.angle + t * this.speed) * 50
        
        const x2 = centerX + Math.cos(this.angle + t * this.speed) * this.length
        const y2 = centerY + Math.sin(this.angle + t * this.speed) * this.length

        ctx.strokeStyle = `rgba(74, 157, 111, ${this.opacity})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    for (let i = 0; i < lineCount; i++){
      lines.push(new CosmicLine(i))
    }

    const drawParticles = (t) => {
      const particleCount = 30
      for (let i = 0; i < particleCount; i++){
        const angle = (Math.PI * 2 * i) / particleCount
        const distance = 100 + Math.sin(t * 0.3 + i) * 50
        
        const x = canvas.width / 2 + Math.cos(angle) * distance
        const y = canvas.height / 2 + Math.sin(angle) * distance

        ctx.fillStyle = `rgba(95, 168, 143, ${0.4 + Math.sin(t * 0.2 + i) * 0.3})`
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawGridLines = (t) => {
      const gridSpacing = 80
      const offset = (t * 20) % gridSpacing

      ctx.strokeStyle = 'rgba(74, 157, 111, 0.08)'
      ctx.lineWidth = 0.5

      for (let x = -gridSpacing + offset; x < canvas.width + gridSpacing; x += gridSpacing){
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = -gridSpacing + offset; y < canvas.height + gridSpacing; y += gridSpacing){
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 20, 25, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      drawGridLines(time)
      lines.forEach(line => line.draw(time))
      drawParticles(time)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="cosmic-canvas"></canvas>
}
