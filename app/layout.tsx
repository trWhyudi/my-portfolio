import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tri Wahyudi - Web Developer",
  description: "Modern portfolio website showcasing web development and design projects",
  keywords: ["portfolio", "web developer", "react", "next.js", "tailwind css", "typescript"],
  authors: [{ name: "Tri Wahyudi" }],
  creator: "Tri Wahyudi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
