
import { useEffect, useState } from 'react'

export default function HeroScene({ pointer }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 35 })

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="hero-bg-container">
      {/* High-tech grid background with radial fade mask */}
      <div className="hero-grid-pattern" />

      {/* Dynamic ambient spotlight following cursor */}
      <div
        className="hero-spotlight"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 90, 0, 0.12), transparent 60%)`,
        }}
      />

      {/* Ambient glowing energy orbs in the background */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-glow-line" />
    </div>
  )
}
