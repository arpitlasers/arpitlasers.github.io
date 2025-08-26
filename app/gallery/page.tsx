"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, ImageIcon, FileText, Zap, Microscope, Award } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

interface GalleryItem {
  id: string
  type: "image" | "video" | "document"
  title: string
  description: string
  category: string
  url: string
  thumbnail?: string
  date: string
  tags: string[]
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    title: "Laser Induced Graphene Synthesis",
    description:
      "High-resolution SEM image showing the microstructure of laser-induced graphene on polyimide substrate",
    category: "Research",
    url: "/sem-microscopy-image-of-laser-induced-graphene-mic.png",
    thumbnail: "/sem-microscopy-image-of-laser-induced-graphene-mic.png",
    date: "2024-01-15",
    tags: ["SEM", "Graphene", "Laser Processing", "Microstructure"],
  },
  {
    id: "2",
    type: "video",
    title: "Laser Micro-3D Printing Process",
    description: "Time-lapse video demonstrating the laser decal transfer process for ceramic printing",
    category: "Process",
    url: "/laser-3d-printing-process-demonstration.png",
    thumbnail: "/laser-3d-printing-process-demonstration.png",
    date: "2024-02-20",
    tags: ["3D Printing", "Laser", "Ceramics", "Manufacturing"],
  },
  {
    id: "3",
    type: "image",
    title: "ZnO Nanogenerator Device",
    description: "Fabricated piezo-tribo hybrid nanogenerator showing the ZnO ceramic integration",
    category: "Device",
    url: "/zno-nanogenerator-device-with-ceramic-components.png",
    thumbnail: "/zno-nanogenerator-device-with-ceramic-components.png",
    date: "2024-03-10",
    tags: ["Nanogenerator", "ZnO", "Energy Harvesting", "Device"],
  },
  {
    id: "4",
    type: "image",
    title: "Laboratory Setup",
    description: "Advanced laser processing setup at IIT Indore Mechatronics Lab",
    category: "Lab",
    url: "/advanced-laser-processing-laboratory-equipment-set.png",
    thumbnail: "/advanced-laser-processing-laboratory-equipment-set.png",
    date: "2024-04-05",
    tags: ["Laboratory", "Equipment", "Laser Setup", "Research"],
  },
  {
    id: "5",
    type: "video",
    title: "Conference Presentation",
    description: "Oral presentation at WCMNM 2024 on laser micro-3D printing applications",
    category: "Presentation",
    url: "/academic-conference-presentation-on-laser-research.png",
    thumbnail: "/academic-conference-presentation-on-laser-research.png",
    date: "2024-09-18",
    tags: ["Conference", "Presentation", "WCMNM", "Research"],
  },
  {
    id: "6",
    type: "image",
    title: "Award Ceremony",
    description: "Receiving the M.P. Young Scientist Award at the 39th M.P. Young Scientist Congress",
    category: "Achievement",
    url: "/scientist-receiving-award-at-academic-ceremony.png",
    thumbnail: "/scientist-receiving-award-at-academic-ceremony.png",
    date: "2024-02-22",
    tags: ["Award", "Recognition", "Young Scientist", "Achievement"],
  },
]

const categories = ["All", "Research", "Process", "Device", "Lab", "Presentation", "Achievement"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const getIcon = (type: string) => {
    switch (type) {
      case "image":
        return ImageIcon
      case "video":
        return Play
      case "document":
        return FileText
      default:
        return ImageIcon
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Research":
        return Microscope
      case "Achievement":
        return Award
      default:
        return Zap
    }
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Research Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Visual documentation of my research journey, laboratory work, achievements, and scientific discoveries in
              laser processing and micro-3D printing.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all ${
                  selectedCategory === category ? "laser-glow" : "hover:bg-primary/20 hover:border-primary/40"
                }`}
              >
                {category !== "All" && (
                  <>{React.createElement(getCategoryIcon(category), { className: "w-4 h-4 mr-2" })}</>
                )}
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const IconComponent = getIcon(item.type)
              return (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group cursor-pointer overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.thumbnail || item.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {item.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{item.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{item.category}</span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-4">{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        {item.type === "video" ? (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <div className="text-center">
                              <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                              <p className="text-muted-foreground">Video content would be displayed here</p>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.url || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div>
                          <span className="text-sm text-muted-foreground">Category: </span>
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Date: </span>
                          <span className="text-sm">{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">Try selecting a different category to view more content.</p>
            </div>
          )}

          {/* Add Content CTA */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center mt-16">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Add Your Research Content</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                This gallery system is designed to be easily expandable. Simply add new items to the galleryItems array
                with images, videos, or documents to showcase your latest research work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Images
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  <Play className="w-4 h-4 mr-2" />
                  Videos
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  <FileText className="w-4 h-4 mr-2" />
                  Documents
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
