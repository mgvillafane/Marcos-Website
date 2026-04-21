import React, { useEffect, useRef } from 'react'

export default function WavesBackground(){
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let time = 0
    const waves = [
      { amplitude: 30, frequency: 0.02, speed: 0.02, offset: 0, color: 'rgba(74, 157, 111, 0.3)' },
      { amplitude: 25, frequency: 0.018, speed: 0.015, offset: Math.PI / 4, color: 'rgba(95, 168, 143, 0.25)' },
      { amplitude: 20, frequency: 0.015, speed: 0.01, offset: Math.PI / 2, color: 'rgba(74, 157, 111, 0.2)' }
    ]

    const drawWave = (wave, yOffset) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2 + yOffset)

      for (let x = 0; x < canvas.width; x += 5){
        const y = canvas.height / 2 + yOffset + Math.sin((x * wave.frequency) + time * wave.speed + wave.offset) * wave.amplitude
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fillStyle = wave.color
      ctx.fill()
    }

    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(15, 20, 25, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      waves.forEach((wave, idx) => {
        drawWave(wave, idx * 20 - 30)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="waves-canvas"></canvas>
}
