import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    const hero = document.querySelector('#top')
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive('')
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    if (hero) heroObserver.observe(hero)

    return () => {
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="nav-logo" href="#top">
        NOBI<span>'S</span> PORTFOLIO
      </a>

      <nav>
        {links.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'active' : undefined}
            aria-current={active === link.href ? 'true' : undefined}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  )
}
