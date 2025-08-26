"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Star } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const firstAuthorPublications = [
  {
    title:
      "Parametric investigation on laser interaction with polyimide for graphene synthesis towards flexible devices",
    journal: "Journal of Physics D: Applied Physics",
    year: "2022",
    impact: "3.5",
    volume: "56, no. 1",
    pages: "015305",
    doi: "10.1088/1361-6463/ac9d4a",
  },
  {
    title:
      "Unraveling spatial variations of graphenization of Kapton polyimide via CO₂ laser interaction: a comprehensive theoretical simulation and Raman spectroscopy mapping study",
    journal: "Applied Physics A",
    year: "2023",
    impact: "2.5",
    volume: "129, no. 11",
    pages: "799",
    doi: "10.1007/s00339-023-07064-4",
  },
  {
    title: "An Innovative Laser Decal transfer of ZnO Ceramic in LIG for advanced Hybrid Nanogenerator applications",
    journal: "Ceramics International",
    year: "2025",
    impact: "5.6",
    volume: "51, no. 4",
    pages: "4957-4970",
    doi: "10.1016/j.ceramint.2024.11.123",
  },
  {
    title:
      "Unraveling the Laser decal transfer-based printing of ZnO ceramic towards FEP-ZnO-based Piezo-Tribo hybrid nanogenerators",
    journal: "Nano Trends",
    year: "2025",
    impact: "N/A",
    volume: "2025",
    pages: "100079",
    doi: "10.1016/j.nantod.2025.100079",
  },
  {
    title:
      "Unraveling the Processing Parameters for Selective Positioning of Multi-materials Using Laser Decal Transfer",
    journal: "Journal of Materials Engineering and Performance",
    year: "2025",
    impact: "2.2",
    volume: "2025",
    pages: "1-9",
    doi: "10.1007/s11665-025-09876-5",
  },
]

const coAuthorPublications = [
  {
    title:
      "Laser-Induced Graphene-Embedded Electrospun PVDF-ZnO: A Synergistic Piezo-Tribo Nanogenerator for Efficient Energy Harvesting",
    journal: "Carbon",
    year: "2025",
    impact: "12.4",
    authors: "Chauhan, D., Singh, A.K., Tyagi, S., Palani, I.A., Ramakrishna, S., Srivastava, M.K.",
    pages: "120521",
  },
  {
    title:
      "Investigation of material ejection in laser decal transfer-based μ-3D printing of ZnO ceramics with microsecond pulsed CO₂ laser",
    journal: "The International Journal of Advanced Manufacturing Technology",
    year: "2024",
    impact: "2.9",
    authors: "Sahu, A., Singh, A., Singh, A., Singh, V., Palani, I.A.",
    pages: "1-12",
  },
  {
    title: "Influence of pre-strain on attributes of Ni-rich NiTi/Kapton polyimide bimorph for flexible mirrors",
    journal: "Sensors and Actuators A: Physical",
    year: "2022",
    impact: "4.9",
    authors: "Gangwar, K., Jayachandran, S., Sahu, A., Singh, A., Palani, I.A.",
    volume: "341",
    pages: "113607",
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Research contributions in laser processing, micro-3D printing, and nanogenerator technologies published in
              high-impact international journals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Total Publications</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">First Author</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">12.4</div>
                <div className="text-muted-foreground">Highest Impact Factor</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2022</div>
                <div className="text-muted-foreground">Publishing Since</div>
              </CardContent>
            </Card>
          </div>

          {/* First Author Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-primary" />
              First Author Publications
            </h2>
            <div className="space-y-6">
              {firstAuthorPublications.map((pub, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-2">
                          <span className="text-primary font-medium">{pub.journal}</span> • {pub.year}
                          {pub.volume && ` • ${pub.volume}`}
                          {pub.pages && ` • ${pub.pages}`}
                        </CardDescription>
                        {pub.doi && <p className="text-sm text-muted-foreground">DOI: {pub.doi}</p>}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="text-xs">
                          IF: {pub.impact}
                        </Badge>
                        <Badge variant="default" className="text-xs">
                          First Author
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Co-Author Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Co-Author Publications
            </h2>
            <div className="space-y-6">
              {coAuthorPublications.map((pub, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-2">
                          <span className="text-primary font-medium">{pub.journal}</span> • {pub.year}
                          {pub.volume && ` • ${pub.volume}`}
                          {pub.pages && ` • ${pub.pages}`}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">Authors: {pub.authors}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="text-xs">
                          IF: {pub.impact}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Co-Author
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Research Collaboration</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in collaborating on laser processing research or discussing my publications? I'm always open
                to academic discussions and potential research partnerships.
              </p>
              <Button className="laser-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact for Collaboration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
