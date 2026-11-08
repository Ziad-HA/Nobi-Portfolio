
import { motion } from 'framer-motion'
import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-canvas">
        <HeroScene />
      </div>

      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Junior Software Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
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
            transition={{ delay: 0.4 }}
          >
            I create responsive websites and interactive web experiences,
            turning ideas into functional digital products.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a className="btn-primary" href="#work">
              See projects
            </a>

            <a className="btn-ghost" href="#contact">
              Contact me
            </a>
          </motion.div>
        </div>

        {/* High-tech developer code card (Desktop & Tablet) */}
        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="terminal-title">developer.config.ts</div>
            <span className="terminal-badge">READY</span>
          </div>

          <div className="terminal-body">
            <pre>
              <code>
                <span className="syntax-keyword">const</span> <span className="syntax-def">developer</span> = &#123;{'\n'}
                {'  '}<span className="syntax-prop">name</span>: <span className="syntax-str">'Ziad Hesham'</span>,{'\n'}
                {'  '}<span className="syntax-prop">alias</span>: <span className="syntax-str">'NOBI'</span>,{'\n'}
                {'  '}<span className="syntax-prop">role</span>: <span className="syntax-str">'Frontend Developer'</span>,{'\n'}
                {'  '}<span className="syntax-prop">core</span>: [<span className="syntax-str">'React'</span>, <span className="syntax-str">'JavaScript'</span>, <span className="syntax-str">'Modern UI'</span>],{'\n'}
                {'  '}<span className="syntax-prop">mission</span>: <span className="syntax-str">'Building clean, high-performance web apps'</span>,{'\n'}
                {'  '}<span className="syntax-prop">openForWork</span>: <span className="syntax-bool">true</span>{'\n'}
                &#125;;
              </code>
            </pre>
          </div>

          <div className="terminal-footer">
            <span className="terminal-status-dot" />
            <span>Interactive & Responsive Experience</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-meta">
        <span className="pulse">AVAILABLE FOR WORK</span>
      </div>
    </section>
  )
}
