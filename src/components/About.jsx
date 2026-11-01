
import { motion } from 'framer-motion'

const highlights = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive and interactive web experiences.',
  },
  {
    number: '02',
    title: 'React & Next.js',
    description: 'Creating modern interfaces with reusable components.',
  },
  {
    number: '03',
    title: 'Creative Thinking',
    description: 'Turning ideas into clean and functional digital products.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="kicker">02 — ABOUT</p>
        <h2>
          BUILT WITH
          <br />
          <span>INTENTION.</span>
        </h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-lead"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I enjoy exploring the intersection of design and development.
            My focus is on creating digital experiences that feel smooth,
            look distinctive, and work seamlessly across devices.
          </p>
        </motion.div>

        <div className="about-stats">
          {highlights.map((item, index) => (
            <motion.div
              className="about-item"
              key={item.number}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <span className="about-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="about-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
