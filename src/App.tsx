import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { DesignShowcase } from './components/DesignShowcase'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ImageBand } from './components/ImageBand'
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
        <ImageBand
          name="control"
          eyebrow="Command & control"
          title="Mission-critical visualisation, designed signal by signal."
          items={['Video walls', 'AV-over-IP', 'Signal distribution', 'Operator control']}
        />
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
