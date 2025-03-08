"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Database, FileCode, Github, Globe, Layout, Server } from "lucide-react"

interface Skill {
  name: string
  icon: string
  level: number
}

interface SkillIconProps {
  skill: Skill
  index: number
}

export default function SkillIcon({ skill, index }: SkillIconProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "html5":
        return <FileCode className="h-10 w-10 text-[#E34F26]" />
      case "css3":
        return <FileCode className="h-10 w-10 text-[#1572B6]" />
      case "javascript":
        return <FileCode className="h-10 w-10 text-[#F7DF1E]" />
      case "react":
        return <Code className="h-10 w-10 text-[#61DAFB]" />
      case "nodejs":
        return <Server className="h-10 w-10 text-[#339933]" />
      case "php":
        return <Code className="h-10 w-10 text-[#777BB4]" />
      case "database":
        return <Database className="h-10 w-10 text-[#4479A1]" />
      case "wordpress":
        return <Globe className="h-10 w-10 text-[#21759B]" />
      case "bootstrap":
        return <Layout className="h-10 w-10 text-[#7952B3]" />
      case "git":
        return <Github className="h-10 w-10 text-[#F05032]" />
      default:
        return <Code className="h-10 w-10 text-primary" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="flex flex-col items-center justify-center p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
        {getIcon(skill.icon)}
        <h3 className="mt-4 font-medium">{skill.name}</h3>
        <div className="w-full bg-muted h-1.5 rounded-full mt-3 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
        <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
      </Card>
    </motion.div>
  )
}

