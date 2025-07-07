"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
} from "lucide-react"
import Script from 'next/script'
import Image from "next/image"


declare global {
  interface Window {
    emailjs: any;
  }
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "triwahyudi5321@gmail.com",
    href: "mailto:triwahyudi5321@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 858-1045-7292",
    href: "tel:+6285810457292",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bekasi, Indonesia",
    href: "https://www.google.com/maps?q=-6.2416,106.9924",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "GMT+7 (WIB)",
    href: "https://time.is/GMT+7",
    color: "from-purple-500 to-indigo-500",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/trWhyudi",
    color: "hover:text-gray-900",
  },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tri-wahyudi-834a92257", color: "hover:text-blue-600" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trwhyudii_/#", color: "hover:text-pink-500" },
]

export default function ContactPage() {
  <>
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="afterInteractive"
    />
  </>

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = "service_he6zcgr"
      const templateId = "template_isjjn9q"
      const publicKey = "YYTcE1N98YUqvZYWd"

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      if (typeof window !== 'undefined' && window.emailjs) {
        await window.emailjs.send(serviceId, templateId, templateParams)
      } else {
        throw new Error("EmailJS not loaded.")
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Failed to send message.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.emailjs) {
            window.emailjs.init("YYTcE1N98YUqvZYWd")
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 dark:from-slate-900 dark:via-orange-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <Badge variant="secondary" className="px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent pb-1">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your
              ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-xl">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Send Message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="border-0 bg-white/50 dark:bg-slate-700/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="border-0 bg-white/50 dark:bg-slate-700/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          required
                          className="border-0 bg-white/50 dark:bg-slate-700/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project..."
                          rows={6}
                          required
                          className="border-0 bg-white/50 dark:bg-slate-700/50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="p-6 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-xl font-bold">Contact Information</h3>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors group"
                      >
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-transform`}
                        >
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-6 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-xl font-bold">Follow Me</h3>

                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-slate-700/50 hover:shadow-md transition-all ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp QR Code */}
              <Card className="p-6 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardContent className="p-0 space-y-4 text-center">
                  <h3 className="text-xl font-bold">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white rounded-xl p-4 shadow-inner">
                      {/* QR Code placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <Image src="/images/qr-wa.png" alt="QR Code" width={100} height={100} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Scan for WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Quick chat via WhatsApp</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-green-500/10 border-green-500/20 hover:bg-green-500/20"
                        asChild
                      >
                        <a href="https://wa.me/6285810457292" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="p-6 border-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-700 dark:text-green-400">Available for Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Currently accepting new projects and collaborations</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Response within 24 hours</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="overflow-hidden border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 dark:from-orange-800 dark:via-red-800 dark:to-pink-800 flex items-center justify-center relative">
                  <div className="text-center space-y-2 z-10">
                    <Globe className="h-12 w-12 mx-auto text-orange-600" />
                    <p className="font-medium">Bekasi, Indonesia</p>
                    <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-6 left-12 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </>
  )
}
