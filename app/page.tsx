"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Zap, Microscope, Cpu, Atom } from "lucide-react"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function HomePage() {
  const [nameWritten, setNameWritten] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setNameWritten(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img src="/arpit.jpeg" alt="Arpit Singh" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-purple-500/50 blur-sm -z-10 animate-pulse"></div>
            </div>
          </div>

          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="relative inline-block">
                <span
                  className={`${nameWritten ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent`}
                >
                  Arpit Singh
                </span>
                {nameWritten && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full laser-glow animate-pulse"></div>
                )}
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto max-w-md laser-write"></div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Ph.D. Scholar & Prime Minister Research Fellow
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Specializing in laser processes, micro-3D printing, and advanced materials for semiconductor applications
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors">
              <Zap className="w-4 h-4 mr-2" />
              Laser Processing
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors">
              <Microscope className="w-4 h-4 mr-2" />
              Micro-3D Printing
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors">
              <Cpu className="w-4 h-4 mr-2" />
              MEMS Structures
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors">
              <Atom className="w-4 h-4 mr-2" />
              Nanogenerators
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="laser-glow hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/research">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
              >
                Explore My Research
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Publications</div>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Patents</div>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Awards</div>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Research</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
