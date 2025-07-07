"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Filter, Calendar, Users } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Blog JelajahKata",
    description:
      "Blog JelajahKata is a personal blog platform designed to share articles, opinions, and engaging stories on a variety of topics. Built with Laravel and Bootstrap, this application supports article CRUD functionality, a category system, comments, and an admin dashboard for efficient content management.",
    image: "/projects/proyek1.png?height=300&width=400",
    category: "Full Stack",
    technologies: ["JavaScript", "PHP", "Laravel", "Bootstrap", "MySQL"],
    demoUrl: "https://github.com/trWhyudi/Blog-Website-JelajahKata",
    githubUrl: "https://github.com/trWhyudi/Blog-Website-JelajahKata",
    featured: true,
    year: "2025",
    team: "Solo Project",
    status: "Completed",
  },
  {
    id: 2,
    title: "BookTopia",
    description:
      "BookTopia is a book review website that allows users to browse, rate, and write reviews for the books they have read. Features include book search, ratings, comments, and book data management from the admin panel. It’s perfect for online reading communities.",
    image: "/projects/proyek2.png?height=300&width=400",
    category: "Full Stack",
    technologies: ["JavaScript", "PHP", "Laravel", "Bootstrap", "MySQL"],
    demoUrl: "https://github.com/trWhyudi/Book-Review-Laravel",
    githubUrl: "https://github.com/trWhyudi/Book-Review-Laravel",
    featured: true,
    year: "2025",
    team: "Solo Project",
    status: "Completed",
  },
]

const categories = ["All", "Full Stack", "Frontend", "UI/UX", "AI/ML", "Web App", "Mobile App"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2">
            My Work
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and design projects that solve
            real-world problems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Status Badge */}
                      <Badge
                        className={`absolute top-4 left-4 ${
                          project.status === "Completed"
                            ? "bg-green-500"
                            : project.status === "In Progress"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                        }`}
                      >
                        {project.status}
                      </Badge>

                      {/* Overlay Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20,
                        }}
                        className="absolute bottom-4 left-4 right-4 flex gap-2"
                      >
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 backdrop-blur-sm border-white/30"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <Badge variant="secondary">{project.category}</Badge>
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
            Other Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3" variant="secondary">
                        {project.category}
                      </Badge>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-0 backdrop-blur-sm">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-bold">Interested in Working Together?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting projects. Let's create something amazing
                together!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                asChild
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}
