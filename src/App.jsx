import Footer from "./components/Footer"
import TechStack from "./components/TechStack"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
function App() {
  return (
    <div className="reef-shell">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
