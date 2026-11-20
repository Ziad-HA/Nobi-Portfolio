
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools']

const skills = [
  { name: 'React', level: 'Library', category: 'Frontend' },
  { name: 'Next.js', level: 'Framework', category: 'Frontend' },
  { name: 'JavaScript', level: 'Programming', category: 'Frontend' },
  { name: 'HTML / CSS', level: 'Web Fundamentals', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Styling', category: 'Frontend' },
  { name: 'Responsive UI', level: 'Development', category: 'Frontend' },
  { name: 'Three.js', level: '3D Web', category: 'Frontend' },
  { name: 'Node.js', level: 'Runtime', category: 'Backend' },
  { name: 'Express', level: 'Framework', category: 'Backend' },
  { name: 'MongoDB', level: 'Database', category: 'Backend' },
  { name: 'Supabase', level: 'Backend as a Service', category: 'Backend' },
  { name: 'Figma', level: 'Design Tool', category: 'Design' },
  { name: 'UI / UX Design', level: 'Design', category: 'Design' },
  { name: 'Git / GitHub', level: 'Version Control', category: 'Tools' },
  { name: 'VS Code', level: 'Editor', category: 'Tools' },
  { name: 'Postman', level: 'API Testing', category: 'Tools' },
  { name: 'Vercel', level: 'Deployment', category: 'Tools' },
]

const services = [
  {
    number: '01',
    title: 'Web Development',
    copy: 'Developing modern web apps with React, Node.js, Express and MongoDB, with reusable components and clean code.',
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
  const [active, setActive] = useState('All')
  const visible =
    active === 'All' ? skills : skills.filter((skill) => skill.category === active)

  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <p className="kicker">03 — EXPERTISE</p>
        <h2>
          TOOLS &<br />
          <span>CAPABILITIES.</span>
        </h2>
      </div>

      <div className="skill-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((category) => {
          const count =
            category === 'All'
              ? skills.length
              : skills.filter((skill) => skill.category === category).length
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              className={active === category ? 'active' : undefined}
              onClick={() => setActive(category)}
            >
              {category}
              <span>{count}</span>
            </button>
          )
        })}
      </div>

      <motion.ul className="skill-grid" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((skill) => (
            <motion.li
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <span>{skill.name}</span>
              <em>{skill.level}</em>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="service-grid">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 180, damping: 20 }}
          >
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
