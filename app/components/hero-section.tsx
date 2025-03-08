"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import HeroCanvas from "./hero-canvas"

interface HeroSectionProps {
  registerSection: (ref: HTMLElement | null) => void
}

export default function HeroSection({ registerSection }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    registerSection(sectionRef.current)
  }, [registerSection])

  const scrollToNextSection = () => {
    const nextSection = sectionRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y: textY }}
            className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-md border border-primary/20"
          >
            Full Stack Web Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ y: textY }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"
          >
            Smit Barot
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ y: textY }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Crafting exceptional digital experiences with modern web technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ y: textY }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="px-8 border-purple-500/50 hover:bg-purple-500/10">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8 animate-bounce text-primary" />
      </motion.div>
    </motion.section>
  )
}

