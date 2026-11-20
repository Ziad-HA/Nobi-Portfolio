import { useEffect, useRef } from 'react'

export default function HeroScene() {
  const spotlight = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const node = spotlight.current
    if (!fine || !node) return undefined

    let raf = 0
    let x = 50
    let y = 35

    const apply = () => {
      raf = 0
      node.style.setProperty('--mx', `${x}%`)
      node.style.setProperty('--my', `${y}%`)
    }

    const handleMove = (e) => {
      x = (e.clientX / window.innerWidth) * 100
      y = (e.clientY / window.innerHeight) * 100
      if (!raf) raf = requestAnimationFrame(apply)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero-bg-container">
      {/* High-tech grid background with radial fade mask */}
      <div className="hero-grid-pattern" />

      {/* Ambient spotlight following the cursor (updated via CSS variables, no React re-render) */}
      <div
        ref={spotlight}
        className="hero-spotlight"
        style={{
          background:
            'radial-gradient(650px circle at var(--mx, 50%) var(--my, 35%), rgba(127, 176, 143, 0.12), transparent 60%)',
        }}
      />

      {/* Ambient glowing energy orbs in the background */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-glow-line" />
    </div>
  )
}
