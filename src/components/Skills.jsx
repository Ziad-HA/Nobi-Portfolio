
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 'Frontend' },
  { name: 'Next.js', level: 'Framework' },
  { name: 'JavaScript', level: 'Programming' },
  { name: 'HTML / CSS', level: 'Web Fundamentals' },
  { name: 'Responsive UI', level: 'Development' },
  { name: 'Figma', level: 'Design' },
  { name: 'Git / GitHub', level: 'Version Control' },
  { name: 'Three.js', level: '3D Web' },
]

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    copy: 'Developing modern web interfaces with React, reusable components, and clean code.',
  },
  {
    number: '02',
    title: 'Website Development',
    copy: 'Building responsive websites with smooth navigation and consistent layouts.',
  },
  {
    number: '03',
    title: 'UI Implementation',
    copy: 'Turning design concepts into polished, interactive, and user-friendly interfaces.',
  },
  {
    number: '04',
    title: 'Interactive Experiences',
    copy: 'Adding motion, transitions, and 3D elements to make websites more engaging.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <p className="kicker">03 — EXPERTISE</p>
        <h2>
          TOOLS &<br />
          <span>CAPABILITIES.</span>
        </h2>
      </div>

      <ul className="skill-grid">
        {skills.map((skill, i) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <span>{skill.name}</span>
            <em>{skill.level}</em>
          </motion.li>
        ))}
      </ul>

      <div className="service-grid">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <span className="service-arrow">↗</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
