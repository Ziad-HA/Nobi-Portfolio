import { motion } from 'motion/react'
import { projects } from '../data/projects'

const totalProjects = projects.length

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="kicker">04 — SELECTED WORK</p>
        <h2>Selected projects.</h2>
        <p className="hint">
          A collection of projects I've worked on.
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
                loading="lazy"
                decoding="async"
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
                <span>{project.number} / 0{totalProjects}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

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
                  {project.liveLabel ?? 'LIVE DEMO'} <span>↗</span>
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
      </div>
    </section>
  )
}
