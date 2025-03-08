"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  year: string
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
      >
        <Card className="overflow-hidden h-full flex flex-col group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {project.year}
              </Badge>
            </div>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
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
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
              View Details
            </Button>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visit Project</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {project.year}
              </Badge>
            </div>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogHeader>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-md">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-end">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button>
                  Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

