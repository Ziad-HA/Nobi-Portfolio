import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="kicker">05 — CONTACT</p>
        <h2>
          Let’s build
          <br />
          something.
        </h2>
        <p>
          Open for front-end work, Next.js sites, and freelance design. Reach me
          on Instagram or drop an email.
        </p>
        <div className="contact-row">
          <a className="btn-primary" href="mailto:zh.nobii@gmail.com">
            zh.nobii@gmail.com
          </a>
          <a
            className="btn-ghost"
            href="https://instagram.com/zi4dddd"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a className="btn-ghost" href="https://github.com/Ziad-HA/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn-ghost" href="https://www.linkedin.com/in/z-nobii/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
      <footer className="footer">
        <span>© 2026 NOBI STUDIO</span>
      </footer>
    </section>
  )
}
