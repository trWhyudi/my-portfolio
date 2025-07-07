"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Palette,
  Database,
  Lightbulb,
  Target,
  MessageSquare,
  Zap,
} from "lucide-react"

const technicalSkills = [
  { name: "JavaScript", level: 90, icon: Code2, color: "from-yellow-400 to-amber-500", category: "Language" },
  { name: "PHP", level: 90, icon: Code2, color: "from-blue-600 to-indigo-600", category: "Language" },
  { name: "Python", level: 75, icon: Code2, color: "from-yellow-500 to-orange-500", category: "Language" },
  { name: "React", level: 80, icon: Code2, color: "from-blue-500 to-cyan-500", category: "Frontend" },
  { name: "Laravel", level: 85, icon: Database, color: "from-red-500 to-red-400", category: "Backend" },
  { name: "Node.js", level: 85, icon: Database, color: "from-green-500 to-emerald-500", category: "Backend" },
  { name: "PostgreSQL", level: 82, icon: Database, color: "from-teal-500 to-cyan-500", category: "Database" },
]

const softSkills = [
  { name: "Problem Solving", icon: Lightbulb, description: "Creative solution finding and debugging", level: 95 },
  { name: "Project Management", icon: Target, description: "Agile methodology and delivery", level: 90 },
  { name: "Communication", icon: MessageSquare, description: "Clear technical communication", level: 88 },
  { name: "Adaptability", icon: Zap, description: "Quick learning and adaptation", level: 92 },
  { name: "Creativity", icon: Palette, description: "Innovative thinking and design", level: 87 },
]

const certifications = [
  "The Full Stack Web Development Bootcamp (Frontend & Backend)",
  "50 Days of DSA Python Data Structures Algorithms LEETCODE",
  "Belajar Front-End Web Developer Level Intermediate/Menengah",
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2">
            My Expertise
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Abilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills developed over years of experience
          </p>
        </motion.div>

        {/* Technical Skills */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                    <CardContent className="p-0 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white`}>
                          <skill.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {skill.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span className="font-medium">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Soft Skills */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Soft Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-slate-800">
                    <CardContent className="p-0 space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white group-hover:shadow-lg transition-shadow"
                      >
                        <skill.icon className="h-8 w-8" />
                      </motion.div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                        <div className="pt-2">
                          <Progress value={skill.level} className="h-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-0 flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="font-medium">{cert}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
