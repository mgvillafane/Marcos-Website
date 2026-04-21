import React, { useEffect, useRef, useState } from 'react'

export default function MeshBackground(){
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const gridX = 5
    const gridY = 5
    const nodeSpacingX = canvas.width / gridX
    const nodeSpacingY = canvas.height / gridY
    const nodes = []
    const originalNodes = []
    let time = 0

    // Crear nodos de la malla
    for (let y = 0; y <= gridY; y++){
      for (let x = 0; x <= gridX; x++){
        const px = x * nodeSpacingX
        const py = y * nodeSpacingY
        nodes.push({ x: px, y: py, vx: 0, vy: 0 })
        originalNodes.push({ x: px, y: py })
      }
    }

    const getNode = (x, y) => nodes[y * (gridX + 1) + x]
    const getOriginalNode = (x, y) => originalNodes[y * (gridX + 1) + x]

    const updateNodes = () => {
      time += 0.01

      for (let y = 0; y <= gridY; y++){
        for (let x = 0; x <= gridX; x++){
          const node = getNode(x, y)
          const original = getOriginalNode(x, y)

          // Movimiento ondulante
          const wave = Math.sin(x * 0.5 + time * 0.5) * Math.cos(y * 0.5 + time * 0.4) * 15

          // Distancia al mouse
          const dx = mousePos.x - original.x
          const dy = mousePos.y - original.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance){
            const force = (1 - distance / maxDistance) * 25
            node.vx += (dx / distance) * force * 0.1
            node.vy += (dy / distance) * force * 0.1
          }

          // Fricción y regreso a posición original
          node.vx *= 0.85
          node.vy *= 0.85
          node.x += node.vx
          node.y += node.vy

          const diff = 0.05
          node.x += (original.x + Math.sin(time * 0.3 + x * 0.3) * wave - node.x) * diff
          node.y += (original.y + Math.cos(time * 0.3 + y * 0.3) * (wave * 0.7) - node.y) * diff
        }
      }
    }

    const drawMesh = () => {
      // Dibujar líneas
      ctx.strokeStyle = 'rgba(74, 157, 111, 0.3)'
      ctx.lineWidth = 1

      // Líneas horizontales y verticales
      for (let y = 0; y <= gridY; y++){
        ctx.beginPath()
        for (let x = 0; x <= gridX; x++){
          const node = getNode(x, y)
          if (x === 0) ctx.moveTo(node.x, node.y)
          else ctx.lineTo(node.x, node.y)
        }
        ctx.stroke()
      }

      for (let x = 0; x <= gridX; x++){
        ctx.beginPath()
        for (let y = 0; y <= gridY; y++){
          const node = getNode(x, y)
          if (y === 0) ctx.moveTo(node.x, node.y)
          else ctx.lineTo(node.x, node.y)
        }
        ctx.stroke()
      }

      // Dibujar nodos
      ctx.fillStyle = 'rgba(95, 168, 143, 0.5)'
      for (let y = 0; y <= gridY; y++){
        for (let x = 0; x <= gridX; x++){
          const node = getNode(x, y)
          ctx.beginPath()
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 20, 25, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      updateNodes()
      drawMesh()

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
  }, [mousePos])

  return <canvas ref={canvasRef} className="mesh-canvas"></canvas>
}
