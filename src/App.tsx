import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { TeamSection } from "./components/TeamSection"

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </main>
  )
}

export default App