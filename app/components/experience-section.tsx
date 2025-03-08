"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceSectionProps {
  registerSection: (ref: HTMLElement | null) => void
}

export default function ExperienceSection({ registerSection }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  useEffect(() => {
    registerSection(sectionRef.current)
  }, [registerSection])

  const experiences = [
    {
      title: "PHP Developer Intern",
      company: "Svaapta IT Ally Solutions",
      location: "Ahmedabad",
      period: "Jan 2024 - Present",
      description:
        "Working on a project GetInPlay which is fully dynamic website in which online game slot booking is done which can be used by game zones and users. Working on languages and frameworks: HTML, CSS, JavaScript, PHP, MySQL, Laravel.",
    },
    {
      title: "Web Developer Intern",
      company: "Cognifyz Technologies",
      location: "Pune (Remote)",
      period: "June 2024 - July 2024",
      description:
        "Working as an intern with the organization assigned some of the tasks from basic to advance level of web development. Using the Bulma and Bootstrap to enhance the frontend experience and make the website more attractive and eye-catching. Working on languages and frameworks: HTML, CSS, JavaScript, ReactJS, NodeJS, Bootstrap, Figma, Bulma.",
    },
    {
      title: "Club Coordinator",
      company: "SDC, Ganpat University",
      location: "Ganpat University",
      period: "Nov 2020 - Feb 2022",
      description:
        "Organizing coding sessions in which the students were mentored by the industrial experts which can also give them a vision. Led a tech fest (TechnoFest4.0) at Ganpat University with the excellent result and appreciation form the honorable faculty members as well as dean.",
    },
  ]

  const education = [
    {
      degree: "B.E. in Information Technology",
      institution: "SVIT, Vasad",
      period: "Aug 2022 - Present",
      gpa: "CGPA: 7.97/10",
      courses:
        "Object Oriented Programming, Databases, Discrete Maths, Data Structures and Algorithms, Operating Systems, Computer Networks",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "B.S.Patel Polytechnic, Ganpat University",
      period: "Jul 2019 - Jun 2022",
      gpa: "CGPA: 8.36/10",
      courses:
        "Basics of programming language, Network Security, Cyber Security, Probability & Statistics, Problem solving skills, Web Development, Digital Fundamentals",
    },
  ]

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
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-purple-500"></span>
              </span>
              Work Experience
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative border-l border-purple-500/30 pl-6 ml-3"
            >
              {experiences.map((experience, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-10 relative">
                  <div className="absolute -left-[34px] w-6 h-6 rounded-full bg-background border-2 border-purple-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardHeader className="p-4 pb-2 relative z-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">{experience.title}</CardTitle>
                          <CardDescription>{experience.company}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 text-purple-500 border-purple-500/20 whitespace-nowrap"
                        >
                          {experience.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2 relative z-10">
                      <p className="text-muted-foreground">{experience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center"
            >
              <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-indigo-500"></span>
              </span>
              Education
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative border-l border-indigo-500/30 pl-6 ml-3"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-10 relative">
                  <div className="absolute -left-[34px] w-6 h-6 rounded-full bg-background border-2 border-indigo-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardHeader className="p-4 pb-2 relative z-10">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <CardDescription>{edu.institution}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 whitespace-nowrap"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2 relative z-10">
                      <p className="font-medium mb-1">{edu.gpa}</p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Relevant Coursework:</span> {edu.courses}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

