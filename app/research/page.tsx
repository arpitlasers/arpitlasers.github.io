"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Microscope, Atom, Cpu, FlaskConical, Layers } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const researchAreas = [
  {
    icon: Zap,
    title: "Laser Processing",
    description:
      "Utilizing nanosecond to microsecond pulsed and continuous lasers for microfabrication and analyzing laser-material interaction for functional applications.",
    techniques: [
      "CO₂ Laser Processing",
      "Pulse Overlap Optimization",
      "Laser-Material Interaction",
      "Temporal Analysis",
    ],
    applications: ["Semiconductor Lithography", "Flexible Electronics", "Surface Modification"],
  },
  {
    icon: Microscope,
    title: "Laser Micro-3D Printing",
    description:
      "Novel laser μ-3D printing and decal transfer techniques for micron thickness printing of materials from aluminum alloys to ceramics like ZnO and SiC.",
    techniques: ["Laser Decal Transfer", "Additive Manufacturing", "Micron-level Precision", "Multi-material Printing"],
    applications: ["MEMS Structures", "Flexible Sensors", "Microelectronics"],
  },
  {
    icon: Atom,
    title: "Nanogenerators",
    description:
      "Fabricating piezo-tribo hybrid nanogenerators for energy harvesting and sensing applications in health monitoring of machines and humans.",
    techniques: ["Piezoelectric Materials", "Triboelectric Effects", "Energy Harvesting", "Hybrid Systems"],
    applications: ["Wearable Devices", "IoT Sensors", "Self-powered Systems"],
  },
  {
    icon: FlaskConical,
    title: "Thin Film Deposition",
    description:
      "Expertise in Flash deposition, E-beam deposition and DC/RF sputtering for multiple applications including shape memory alloys.",
    techniques: ["Flash Deposition", "E-beam Deposition", "DC/RF Sputtering", "Bi-morph Fabrication"],
    applications: ["Flexible Mirrors", "Energy Harvesting", "Smart Materials"],
  },
  {
    icon: Layers,
    title: "Material Characterization",
    description:
      "Extensive work with characterizing samples through SEM, XRD, four probe measurements, DSC, surface profilometry, and contact angle analysis.",
    techniques: ["SEM Analysis", "XRD Characterization", "TEM Imaging", "XPS Analysis"],
    applications: ["Quality Control", "Material Properties", "Surface Analysis"],
  },
  {
    icon: Cpu,
    title: "COMSOL Simulation",
    description:
      "Employing COMSOL Multiphysics simulation to analyze laser material interaction and its temporal and spatial effects on fabricated materials.",
    techniques: ["Multiphysics Modeling", "Heat Transfer Analysis", "Temporal Simulation", "Spatial Analysis"],
    applications: ["Process Optimization", "Predictive Modeling", "Parameter Analysis"],
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Research Areas
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              My research covers a broad spectrum of utilizing lasers for micro processing towards developing supporting
              technology for lithography in semiconductor facilities and flexible sensors fabrication.
            </p>
          </div>

          {/* Research Areas Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{area.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Techniques</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.techniques.map((technique, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {technique}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.applications.map((application, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {application}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Research Focus */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-4">Current Research Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My Ph.D. thesis explores diverse laser-based explorations and multiple processes by utilizing multiple
                  materials for efficient flexible electronics printing. It focuses on the synthesis and characterizing
                  flexible electronics materials using laser as energy source ranging from direct laser writing in the
                  form of synthesizing laser induced graphene and its utilization as flexible electrode to working with
                  indirect laser energy interaction for micron level printing using novel laser micro-3D printing
                  technology and laser decal transfer technology.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  The research outcomes have broader implications for advancing sustainable energy technologies and
                  addressing critical challenges in introducing technology catering to fabrication of sensors and its
                  functional utilization, driving progress toward a cleaner and more sustainable future especially when
                  the world is exploring semiconductors for functional applications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
