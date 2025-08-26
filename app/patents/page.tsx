"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Clock, CheckCircle, FileText, ExternalLink } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const patents = [
  {
    title: "A gesture-controlled SMA-actuated robotic gripper system and method thereof",
    inventors:
      "I.A.Palani, K.A.Vyvaswath, Arpit Kumar Singh, Anshu Sahu, Kaushal Gangwar, Soham Mondal, Tejal uplenchwar",
    status: "Granted",
    number: "568766",
    grantDate: "17/07/2025",
    description:
      "An innovative robotic gripper system utilizing shape memory alloy (SMA) actuators controlled through gesture recognition technology for precise manipulation tasks.",
    category: "Robotics & Automation",
    applications: ["Industrial Automation", "Medical Robotics", "Precision Manufacturing"],
  },
  {
    title: "A Method of printing pixelated silicon carbide segments",
    inventors: "Arpit Kumar Singh, Krishnpal singh Tomar, Gaurav, I A Palani, Suhas Joshi",
    status: "Submitted",
    number: "202521020228",
    submissionDate: "2025",
    description:
      "Novel method for precise printing of pixelated silicon carbide segments using advanced laser processing techniques for semiconductor applications.",
    category: "Manufacturing Technology",
    applications: ["Semiconductor Fabrication", "MEMS Devices", "High-Temperature Electronics"],
  },
  {
    title: "AN INTEGRATED INSOLE FOR HARVESTING ENERGY",
    inventors: "I.A.Palani, Anshu Sahu, Arpit Kumar Singh, Diksha Jaurker, Suhas S. Joshi, Shailesh M. Kolhe, A. Raju",
    status: "Filed",
    number: "202511020242",
    submissionDate: "2025",
    description:
      "Integrated insole system designed for energy harvesting from human locomotion using piezoelectric and triboelectric mechanisms.",
    category: "Energy Harvesting",
    applications: ["Wearable Electronics", "Self-powered Sensors", "Healthcare Monitoring"],
  },
  {
    title: "A MULTI-MODAL UNMANNED VEHICLE",
    inventors: "Soham Mondal, Tejal Ravindra, Arpit Kumar Singh, I.A.Palani",
    status: "Filed",
    number: "202521041971",
    submissionDate: "2025",
    description:
      "Multi-modal unmanned vehicle system capable of operating in various environments with adaptive control mechanisms.",
    category: "Autonomous Systems",
    applications: ["Defense Applications", "Search & Rescue", "Environmental Monitoring"],
  },
  {
    title: "Energy harvesting circuit for triboelectric and piezoelectric device",
    inventors:
      "I.A.Palani, Anshu Sahu, RajatKumar Vishwakarma, Arpit Kumar Singh, Diksha Jaurker, Suhas S. Joshi, Shailesh M. Kolhe, Ankati Raju",
    status: "Under Process",
    number: "In Progress",
    submissionDate: "2025",
    description:
      "Advanced energy harvesting circuit design optimized for both triboelectric and piezoelectric energy generation devices.",
    category: "Energy Systems",
    applications: ["IoT Devices", "Wireless Sensors", "Portable Electronics"],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Granted":
      return CheckCircle
    case "Submitted":
    case "Filed":
      return Clock
    case "Under Process":
      return FileText
    default:
      return Shield
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Granted":
      return "default"
    case "Submitted":
    case "Filed":
      return "secondary"
    case "Under Process":
      return "outline"
    default:
      return "secondary"
  }
}

export default function PatentsPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Patents & IP
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative technologies and methods developed through research in laser processing, robotics, and energy
              harvesting systems.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Total Patents</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">Granted</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Filed/Submitted</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <div className="text-muted-foreground">Latest Filing</div>
              </CardContent>
            </Card>
          </div>

          {/* Patents List */}
          <div className="space-y-8">
            {patents.map((patent, index) => {
              const StatusIcon = getStatusIcon(patent.status)
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <StatusIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant={getStatusColor(patent.status)} className="mb-2">
                            {patent.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground">Patent No: {patent.number}</div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {patent.grantDate ? `Granted: ${patent.grantDate}` : `Filed: ${patent.submissionDate}`}
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {patent.title}
                    </CardTitle>

                    <CardDescription className="text-base leading-relaxed mb-4">{patent.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Inventors</h4>
                        <p className="text-sm text-muted-foreground">{patent.inventors}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Category</h4>
                        <Badge variant="outline">{patent.category}</Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {patent.applications.map((application, appIndex) => (
                            <Badge key={appIndex} variant="secondary" className="text-xs">
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

          {/* Innovation Areas */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Innovation Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="pt-8">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Robotics & Automation</h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced robotic systems with smart materials and gesture control
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="pt-8">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Manufacturing Technology</h3>
                  <p className="text-muted-foreground text-sm">Novel laser processing methods for advanced materials</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="pt-8">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Energy Harvesting</h3>
                  <p className="text-muted-foreground text-sm">
                    Sustainable energy solutions for wearable and IoT devices
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center mt-16">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Technology Transfer & Licensing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in licensing these technologies or exploring collaboration opportunities? Contact me to
                discuss potential partnerships and technology transfer options.
              </p>
              <Button className="laser-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                Discuss Licensing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
