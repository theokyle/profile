import { NavBar } from "./components/NavBar"
import { StarBackground } from "./components/StarBackground"
import ThemeToggle from "./components/ThemeToggle"
import { Hero } from "./components/Hero"
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* Footer */}
    </div>
  )
}

export default App
