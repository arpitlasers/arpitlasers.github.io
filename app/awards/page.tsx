"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Trophy, Star, Medal, Calendar, ExternalLink } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

const awards = [
  {
    title: "Prime Minister Research Fellowship Award",
    organization: "Government of India",
    year: "2023-2026",
    description: "Awarded with Prime Minister Research Fellowship Award for carrying out research in Cycle 11",
    id: "PMRF ID: 2103354",
    category: "National Fellowship",
    significance: "Prestigious national fellowship for outstanding research scholars",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "M.P. Young Scientist Award",
    organization: "Department of Science and Technology, M.P. Council of Science and Technology",
    year: "2024",
    description: "Awarded at 39th M.P. Young Scientist Congress for outstanding research contributions",
    date: "21st-23rd Feb 2024",
    category: "State Recognition",
    significance: "Recognition for innovative research in laser processing and energy harvesting",
    icon: Award,
    color: "text-blue-500",
  },
  {
    title: "Best Oral Presentation Award",
    organization: "AIMTDR 2023, IIT (BHU) Varanasi",
    year: "2023",
    description:
      "Best Oral presentation award for paper titled 'Unravelling the processing parameters for selective positioning of multi-materials using Laser decal Transfer based μ-3D printing'",
    date: "8th-10th December 2023",
    category: "Conference Award",
    significance: "Recognition for excellence in research presentation and communication",
    icon: Star,
    color: "text-green-500",
  },
  {
    title: "Institute Medal Nomination",
    organization: "Department of Mechanical Engineering, IIT Indore",
    year: "2022",
    description: "Nominated for Institute Medal for best M.Tech Thesis Project",
    category: "Academic Excellence",
    significance: "Recognition for outstanding academic performance and thesis work",
    icon: Medal,
    color: "text-purple-500",
  },
]

const achievements = [
  {
    title: "IInvenTiv-2024 Top 100 Technologies",
    organization: "IIT Hyderabad",
    description:
      "Displayed research technology 'Triboelectric based shoe sole for energy harvesting for powering microdevices for army personnel' among top 100 technologies across India",
    date: "19-20 Jan, 2024",
    category: "Innovation Showcase",
  },
  {
    title: "AVINYA:2023 Technology Demonstration",
    organization: "Military College of Engineering Mhow",
    description: "Demonstrated technology based on Human Machine Interface for Bomb disposal in Military applications",
    date: "Sept 26-27, 2023",
    category: "Defense Technology",
  },
  {
    title: "GATE Qualification",
    organization: "Graduate Aptitude Test in Engineering",
    description:
      "Qualified GATE from 2016 to 2020 with best percentile of 98.38 (AIR-2210) in 2020 in Mechanical Engineering",
    date: "2016-2020",
    category: "Academic Achievement",
  },
]

const examinations = [
  "Coal India Management Trainee Preliminary & Mains (2019-20)",
  "UPSC Engineering Services Preliminary (2018 and 2019)",
  "Railway Recruitment Board - Junior Engineer Preliminary and Mains (2019-20)",
  "Service Selection Commission Junior Engineer Preliminary & Mains (2017-18)",
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Recognition for excellence in research, innovation, and academic achievements in laser processing and
              energy harvesting technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Total Awards</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">National Fellowship</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Research Awards</div>
              </CardContent>
            </Card>
            <Card className="text-center border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-muted-foreground">Latest Award</div>
              </CardContent>
            </Card>
          </div>

          {/* Major Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Major Awards & Fellowships
            </h2>
            <div className="space-y-8">
              {awards.map((award, index) => {
                const IconComponent = award.icon
                return (
                  <Card
                    key={index}
                    className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className={`w-8 h-8 ${award.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                                {award.title}
                              </CardTitle>
                              <CardDescription className="text-base mb-2">
                                <span className="text-primary font-medium">{award.organization}</span> • {award.year}
                              </CardDescription>
                              {award.date && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                  <Calendar className="w-4 h-4" />
                                  {award.date}
                                </div>
                              )}
                            </div>
                            <Badge variant="outline">{award.category}</Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">{award.description}</p>
                          {award.id && <p className="text-sm text-muted-foreground mb-4">ID: {award.id}</p>}
                          <div className="p-4 rounded-lg bg-muted/50 border border-primary/10">
                            <p className="text-sm font-medium text-primary mb-1">Significance</p>
                            <p className="text-sm text-muted-foreground">{award.significance}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-primary" />
              Other Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm mb-2">
                      <span className="text-primary font-medium">{achievement.organization}</span>
                    </CardDescription>
                    {achievement.date && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="w-3 h-3" />
                        {achievement.date}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Competitive Examinations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Medal className="w-8 h-8 text-primary" />
              Competitive Examinations Qualified
            </h2>
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {examinations.map((exam, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{exam}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Recognition & Impact</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These awards and recognitions reflect my commitment to excellence in research and innovation. I continue
                to strive for impactful contributions to the scientific community.
              </p>
              <Button className="laser-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
