
import { useRef } from 'react'
import { motion } from 'framer-motion'
import HeroScene from './HeroScene'

export default function Hero() {
  const pointer = useRef({ x: 0, y: 0 })

  const onMove = (e) => {
    const { innerWidth, innerHeight } = window

    pointer.current = {
      x: (e.clientX / innerWidth) * 2 - 1,
      y: (e.clientY / innerHeight) * 2 - 1,
    }
  }

  return (
    <section id="top" className="hero" onMouseMove={onMove}>
      <div className="hero-canvas">
        <HeroScene pointer={pointer} />
      </div>

      <div className="hero-vignette" />

      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Junior Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          NOBI<br />
          <span className="glitch">FRONTEND</span><br />
          WITH EDGE.
        </motion.h1>

        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          I create responsive websites and interactive web experiences,
          turning ideas into functional digital products.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a className="btn-primary" href="#work">
            See projects
          </a>

          <a className="btn-ghost" href="#contact">
            Contact me
          </a>
        </motion.div>
      </div>

      <div className="hero-meta">
        <span className="pulse">AVAILABLE FOR WORK</span>
      </div>
    </section>
  )
}
