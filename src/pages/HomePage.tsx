import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { TeamSection } from "../components/TeamSection"

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </div>
  );
}

export default HomePage;