"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section"
import SkillsSection from "./components/skills-section"
import ExperienceSection from "./components/experience-section"
import ContactSection from "./components/contact-section"
import AboutSection from "./components/about-section"
import Cursor from "./components/cursor"
import Loader from "./components/loader"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const sections = ["home", "about", "skills", "projects", "experience", "contact"]
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  // Register section refs
  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id]
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            <Cursor />

            {/* Progress bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 z-50"
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />

            {/* Navigation */}
            <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-background/60 border-b border-border/40">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                    Smit
                  </span>{" "}
                  Barot
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="hidden md:flex items-center space-x-6"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "relative px-2 py-1 transition-colors",
                        activeSection === item.id ? "text-primary" : "text-foreground/70 hover:text-foreground",
                      )}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                  <ThemeToggle />
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </Button>
                </motion.nav>

                {/* Mobile Navigation Toggle */}
                <div className="flex items-center space-x-4 md:hidden">
                  <ThemeToggle />
                  <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40"
                  >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "py-2 transition-colors text-left",
                            activeSection === item.id
                              ? "text-primary font-medium"
                              : "text-foreground/70 hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                      >
                        <Download className="mr-2 h-4 w-4" /> Resume
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* Main Content */}
            <main>
              <HeroSection registerSection={(ref) => registerSection("home", ref)} />
              <AboutSection registerSection={(ref) => registerSection("about", ref)} />
              <SkillsSection registerSection={(ref) => registerSection("skills", ref)} />
              <ProjectsSection registerSection={(ref) => registerSection("projects", ref)} />
              <ExperienceSection registerSection={(ref) => registerSection("experience", ref)} />
              <ContactSection registerSection={(ref) => registerSection("contact", ref)} />
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border/40 backdrop-blur-md bg-background/60">
              <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-muted-foreground">© {new Date().getFullYear()} Smit Barot. All rights reserved.</p>
                  <div className="flex items-center space-x-4">
                    <Link href="https://github.com/smit77crypto" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/smitbarot" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="mailto:smitbarot20@gmail.com">
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

