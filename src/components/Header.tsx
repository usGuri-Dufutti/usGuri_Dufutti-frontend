import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <div className="relative">
              <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-sans">BloomWatch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Equipe
            </button>
            <button
              onClick={() => navigate("/map")}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/30"
            >
              Explorar Mapa
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("equipe")}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-left py-2"
              >
                Equipe
              </button>
              <button
                onClick={() => {
                  navigate("/map")
                  setIsMobileMenuOpen(false)
                }}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg text-center active:scale-95"
              >
                Explorar Mapa
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}