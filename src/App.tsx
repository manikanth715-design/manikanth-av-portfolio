import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { DesignShowcase } from './components/DesignShowcase'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ValueProposition } from './components/ValueProposition'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <DesignShowcase />
        <Certifications />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
