"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface AboutSectionProps {
  registerSection: (ref: HTMLElement | null) => void
}

export default function AboutSection({ registerSection }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  useEffect(() => {
    registerSection(sectionRef.current)
  }, [registerSection])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-lg"></div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Smit Barot"
                fill
                className="object-cover rounded-lg"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full backdrop-blur-md border border-indigo-500/20 z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full backdrop-blur-md border border-purple-500/20 z-10"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg p-0.5 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-70 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500"
            >
              Full Stack Web Developer
            </motion.h3>

            <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Web Developer based in Ahmedabad, Gujarat, specializing in creating visually
              stunning and highly functional websites. With expertise in PHP, MySQL, Laravel, ReactJS, and WordPress, I
              deliver exceptional digital experiences that combine aesthetics with performance.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
              Currently working as a PHP Developer Intern at Svaapta IT Ally Solutions, where I'm contributing to the
              GetInPlay project - a dynamic online game slot booking platform. I'm constantly learning and adapting to
              new technologies to stay at the forefront of web development.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 mb-8">
              <motion.div variants={itemVariants}>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Smit Barot</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">smitbarot20@gmail.com</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-medium">Phone:</p>
                <p className="text-muted-foreground">79901 53071</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Ahmedabad, Gujarat</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4">
              <Link href="https://github.com/smit77crypto" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-500"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/smitbarot" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10 border-indigo-500/50 hover:bg-indigo-500/10 hover:border-indigo-500"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:smitbarot20@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10 border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-500"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

