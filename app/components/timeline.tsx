"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItemExperience {
  title: string
  company: string
  location: string
  period: string
  description: string
}

interface TimelineItemEducation {
  degree: string
  institution: string
  period: string
  gpa: string
  courses: string
}

interface TimelineProps {
  items: TimelineItemExperience[] | TimelineItemEducation[]
  type: "experience" | "education"
}

export default function Timeline({ items, type }: TimelineProps) {
  return (
    <div className="relative border-l border-primary/30 pl-6 ml-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 relative"
        >
          <div className="absolute -left-[34px] w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
            <CardHeader className="p-4 pb-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <CardTitle className="text-lg">
                    {type === "experience"
                      ? (item as TimelineItemExperience).title
                      : (item as TimelineItemEducation).degree}
                  </CardTitle>
                  <CardDescription>
                    {type === "experience"
                      ? (item as TimelineItemExperience).company
                      : (item as TimelineItemEducation).institution}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
                  {type === "experience"
                    ? (item as TimelineItemExperience).period
                    : (item as TimelineItemEducation).period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              {type === "experience" ? (
                <p className="text-muted-foreground">{(item as TimelineItemExperience).description}</p>
              ) : (
                <>
                  <p className="font-medium mb-1">{(item as TimelineItemEducation).gpa}</p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Relevant Coursework:</span> {(item as TimelineItemEducation).courses}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

