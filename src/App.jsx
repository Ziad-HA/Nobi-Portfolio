import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ScrollProgress from './components/ScrollProgress'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app">
      <div className="noise" />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
