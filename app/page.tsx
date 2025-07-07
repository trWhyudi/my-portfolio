"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [displayText, setDisplayText] = useState("")
  const fullName = "Tri Wahyudi"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </motion.div>

              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Web Developer
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              I am a web developer with hands-on experience in designing and building visually appealing, responsive, and user-friendly websites. I specialize in front-end and back-end development using technologies such as HTML, CSS, JavaScript, and frameworks like React and Laravel, as well as server-side tools like Node.js and PHP.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                <a href="/cv/CV_Tri Wahyudi.pdf" download>Download CV</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-full animate-spin-slow opacity-75 blur-xl"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 rounded-full animate-pulse"></div>

              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Tri Wahyudi Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              About Me
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Turning Ideas Into Digital Reality</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started with a passion for building websites that are both functional and visually appealing, I’ve grown into a web developer experienced in both front-end and back-end technologies. From working with HTML, CSS, JavaScript, React, Laravel, Node.js, and PHP, I enjoy turning ideas into responsive, user-friendly digital experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Great design is not just how it looks, but how it works." I believe in creating solutions that are not
                only visually appealing but also intuitive and accessible to everyone.
              </p>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/20"
          >
            <blockquote className="text-xl lg:text-2xl font-medium italic text-center">
              "Code is poetry written in logic, design is emotion expressed in pixels."
            </blockquote>
            <p className="text-muted-foreground mt-4">— My Personal Motto</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
