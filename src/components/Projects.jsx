import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const emptyProjects = [3, 4]

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="kicker">04 — SELECTED WORK</p>
        <h2>Selected projects.</h2>
        <p className="hint">
          A collection of projects I've worked on.
          More projects coming soon.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-card featured-project"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.12, duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <a
              className="project-media"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website`}
            >
              <img
                src={project.image}
                alt={project.alt}
                onError={(e) => {
                  console.error(`${project.title} preview image failed to load`)
                  e.currentTarget.style.display = 'none'
                }}
              />

              <div className="project-image-overlay">
                <span>{project.number} / FEATURED PROJECT</span>
                <span>EXPLORE PROJECT ↗</span>
              </div>

              <div className="project-scan" />
            </a>

            <div className="project-body">
              <div className="project-top">
                <span>{project.category}</span>
                <span>{project.number} / 04</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LIVE DEMO <span>↗</span>
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SOURCE CODE <span>↗</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}

        {emptyProjects.map((number, index) => (
          <motion.article
            key={number}
            className="project-card empty-project"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: (projects.length + index) * 0.12,
              duration: 0.7,
            }}
          >
            <div className="project-media empty-project-media">
              <div className="empty-project-content">
                <span>0{number} / UPCOMING PROJECT</span>
                <strong>COMING SOON</strong>
                <span className="empty-project-plus">+</span>
              </div>
            </div>

            <div className="project-body">
              <div className="project-top">
                <span>PROJECT IN DEVELOPMENT</span>
                <span>0{number} / 04</span>
              </div>

              <h3>Something new.</h3>
              <p>
                A new project is currently in development.
                Stay tuned for updates.
              </p>

              <div className="project-links">
                <span>COMING SOON ↗</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
