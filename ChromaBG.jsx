import React, { useEffect, useRef } from 'react'

export default function ChromaBG(){
  const elementRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const projectId = 'lHlDvoJDIXCxxXVqTNOC'

    // Load Unicorn Studio script
    const loadUnicornStudio = () => {
      if (window.UnicornStudio) {
        initializeScene()
        return
      }

      const script = document.createElement('script')
      script.src = 'https://cdn.unicorn.studio/v1.2.3/unicornStudio.umd.js'
      script.onload = initializeScene
      script.onerror = () => console.error('Failed to load Unicorn Studio')
      document.head.appendChild(script)
    }

    const initializeScene = () => {
      if (elementRef.current) {
        elementRef.current.setAttribute('data-us-project', projectId)
        elementRef.current.setAttribute('data-us-dpi', '1')
        elementRef.current.setAttribute('data-us-scale', '1')
        elementRef.current.setAttribute('data-us-fps', '60')

        if (window.UnicornStudio) {
          window.UnicornStudio.destroy?.()
          window.UnicornStudio.init?.().catch(err => console.error('Unicorn Studio error:', err))
        }
      }
    }

    loadUnicornStudio()

    return () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy?.()
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}
