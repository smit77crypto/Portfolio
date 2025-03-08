"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectsSectionProps {
  registerSection: (ref: HTMLElement | null) => void
}

export default function ProjectsSection({ registerSection }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    registerSection(sectionRef.current)
  }, [registerSection])

  const projects = [
    {
      id: 1,
      title: "GetInPlay",
      description:
        "A fully dynamic website for online game slot booking, used by game zones and users. Built with PHP, MySQL, and Laravel.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PHP", "MySQL", "Laravel", "JavaScript", "CSS"],
      year: "2024",
      link: "#",
      longDescription:
        "GetInPlay is a comprehensive online platform for game slot booking. The system allows game zones to list their available slots and users to book them in advance. Features include user authentication, slot management, booking history, and payment integration.",
    },
    {
      id: 2,
      title: "Globe Outsourcing LLP",
      description: "Responsive website for a firm specializing in legal proceedings and services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "Elementor", "CSS", "Responsive Design"],
      year: "2022",
      link: "#",
      longDescription:
        "Developed a responsive and optimized website for a firm specializing in legal proceedings and services. The website received positive feedback from the client. Additionally, working on its frequent updates monthly. Impressing the client led to several referrals, underscoring the quality and impact of my work.",
    },
    {
      id: 3,
      title: "Bhavani Travels",
      description: "Static website showcasing rental car services with regular updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      year: "2023",
      link: "#",
      longDescription:
        "Developed a static website which shows the client about the company and its services, the main service provided by the company was of rental car services. We are still connected for the regular updates of the website.",
    },
    {
      id: 4,
      title: "Tathy Holidays",
      description: "Responsive holiday package booking website with various holiday packages.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "PHP", "MySQL", "Responsive Design"],
      year: "2023",
      link: "#",
      longDescription:
        "Developed a responsive and optimized holiday package booking website, providing various holiday packages to clients. The client was impressed and referred me to their network, highlighting the quality and impact of my work. Additionally, I handle frequent monthly and seasonal updates for the site.",
    },
    {
      id: 5,
      title: "Akshtam Biotech",
      description: "Responsive website for agricultural products including seeds with regional language support.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "Elementor", "Multilingual", "E-commerce"],
      year: "2024",
      link: "#",
      longDescription:
        "Created a responsive and attractive website for a client offering agricultural products, including seeds. Overcame challenges with regional language typing and successfully completed the project, impressing the client with my work. The client is now discussing a couple of new projects with me, reflecting their satisfaction and trust for the work.",
    },
    {
      id: 6,
      title: "Fun N Care",
      description: "Responsive website for a frozen food distributor focusing on product showcasing and logistics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "WooCommerce", "Responsive Design"],
      year: "2024",
      link: "#",
      longDescription:
        "Developed a responsive website for Fun N Care, a frozen food distributor, focusing on product showcasing, logistics content, and mobile optimization. Ensured fast performance, smooth navigation, and ongoing site updates to support the company's expanding operations.",
    },
  ]

  const openProject = (id: number, index: number) => {
    setSelectedProject(id)
    setCurrentIndex(index)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setSelectedProject(projects[(currentIndex + 1) % projects.length].id)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setSelectedProject(projects[(currentIndex - 1 + projects.length) % projects.length].id)
  }

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
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                <CardHeader className="p-4 relative z-10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {project.year}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 pt-0 flex-grow relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex justify-between relative z-10">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openProject(project.id, index)}
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    View Details
                  </Button>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-primary/20 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit Project</span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={closeProject}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card/95 backdrop-blur-md border-border/50">
          <AnimatePresence mode="wait">
            {selectedProject !== null && (
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 rounded-full h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                    onClick={closeProject}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>

                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {projects[currentIndex].year}
                    </Badge>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                      onClick={prevProject}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                      onClick={nextProject}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{projects[currentIndex].title}</DialogTitle>
                    <DialogDescription>{projects[currentIndex].description}</DialogDescription>
                  </DialogHeader>

                  <div className="mt-6">
                    <p className="text-muted-foreground mb-6">{projects[currentIndex].longDescription}</p>

                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Link href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white">
                          Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  )
}

