"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Database, FileCode, Github, Globe, Server, Figma, Terminal } from "lucide-react"

interface SkillsProps {
  registerSection: (ref: HTMLElement | null) => void
}

export default function SkillsSection({ registerSection }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  useEffect(() => {
    registerSection(sectionRef.current)
  }, [registerSection])

  const skills = [
    { name: "HTML", icon: "html5", level: 95, color: "#E34F26" },
    { name: "CSS", icon: "css3", level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", level: 85, color: "#F7DF1E" },
    { name: "PHP", icon: "php", level: 90, color: "#777BB4" },
    { name: "MySQL", icon: "database", level: 85, color: "#4479A1" },
    { name: "WordPress", icon: "wordpress", level: 90, color: "#21759B" },
    { name: "React", icon: "react", level: 80, color: "#61DAFB" },
    { name: "Node.js", icon: "nodejs", level: 75, color: "#339933" },
    { name: "Laravel", icon: "laravel", level: 85, color: "#FF2D20" },
    { name: "Git", icon: "git", level: 85, color: "#F05032" },
    { name: "Figma", icon: "figma", level: 80, color: "#F24E1E" },
    { name: "Python", icon: "python", level: 70, color: "#3776AB" },
  ]

  const getIcon = (iconName: string, color: string) => {
    switch (iconName.toLowerCase()) {
      case "html5":
        return <FileCode className="h-10 w-10" style={{ color }} />
      case "css3":
        return <FileCode className="h-10 w-10" style={{ color }} />
      case "javascript":
        return <FileCode className="h-10 w-10" style={{ color }} />
      case "react":
        return <Code className="h-10 w-10" style={{ color }} />
      case "nodejs":
        return <Server className="h-10 w-10" style={{ color }} />
      case "php":
        return <Code className="h-10 w-10" style={{ color }} />
      case "database":
        return <Database className="h-10 w-10" style={{ color }} />
      case "wordpress":
        return <Globe className="h-10 w-10" style={{ color }} />
      case "laravel":
        return <Code className="h-10 w-10" style={{ color }} />
      case "git":
        return <Github className="h-10 w-10" style={{ color }} />
      case "figma":
        return <Figma className="h-10 w-10" style={{ color }} />
      case "python":
        return <Terminal className="h-10 w-10" style={{ color }} />
      default:
        return <Code className="h-10 w-10" style={{ color }} />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here are some of my key skills
            and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
                boxShadow: `0 10px 25px -5px ${skill.color}20`,
              }}
              className="group"
            >
              <Card className="flex flex-col items-center justify-center p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-transparent group-hover:to-[color:var(--color)] opacity-10 transition-all duration-500"
                  style={{ "--color": skill.color } as any}
                ></div>

                <div className="relative z-10 flex flex-col items-center">
                  {getIcon(skill.icon, skill.color)}
                  <h3 className="mt-4 font-medium">{skill.name}</h3>
                  <div className="w-full bg-muted h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

