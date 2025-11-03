"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const achievements = [
  {
    title: "Strategic Product Launches",
    description:
      "Spearheaded mission-critical payment programs with global impact, driving YOY growth through strategic migration product launches including UK Bacs, AU BECS and SEPA across global markets.",
    icon: "/assets/product.png",
  },
  {
    title: "Program Management and Team Building",
    description:
      "Led cross-functional program initiatives to scale the APAC Data Migration team in India, increasing operational capacity 10x through strategic leadership, mentorship excellence, and systematic resource optimization across global teams.",
    icon: "/assets/program.png",
  },
  {
    title: "Client Engagement & Solution Design",
    description:
      "Orchestrated enterprise-level migration and go-live initiatives through consultative client workshops, aligning complex technical solutions with diverse business requirements",
    icon: "/assets/client.png",
  },
  {
    title: "Knowledge Leadership & Documentation",
    description:
      "Established reputation as knowledge leader, developing comprehensive internal and external facing documentation that enhanced cross-functional performance and user success",
    icon: "/assets/knowledge.png",
  },
]

export default function KeyAchievements() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const animationRef = useRef<number | null>(null)
  const isAnimatingRef = useRef(false)

  // Generate full chart data from month 1 to 24, capacity from 5% to 56%
  const chartData = Array.from({ length: 24 }, (_, i) => ({
    month: i + 1,
    capacity: Math.round(5 + (56 - 5) * (i / 23)),
  }))

  useEffect(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
      isAnimatingRef.current = false
    }

    if (expandedCard === 1) {
      if (isAnimatingRef.current) {
        return
      }

      isAnimatingRef.current = true
      setAnimationProgress(0)
      const startTime = Date.now()
      const duration = 2000

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setAnimationProgress(progress)

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          isAnimatingRef.current = false
          animationRef.current = null
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    } else {
      setAnimationProgress(0)
      isAnimatingRef.current = false
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      isAnimatingRef.current = false
    }
  }, [expandedCard])

  const handleCardClick = (index: number) => {
    if (index === 0 || index === 1 || index === 2 || index === 3) {
      // Expand Strategic Product Launches (0), Program Management (1), Client Engagement (2), and Knowledge Leadership (3) cards
      setExpandedCard(expandedCard === index ? null : index)
    }
  }

  const closeExpanded = () => {
    setExpandedCard(null)
  }

  return (
    <div className="min-h-screen bg-background pt-16 pb-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-helixa">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-primary/50 bg-card ${
                expandedCard === index ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={achievement.icon || "/placeholder.svg"}
                      alt={achievement.title}
                      width={32}
                      height={32}
                      className="transition-transform duration-300 group-hover:scale-110 dark:filter dark:invert"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-helixa">
                    {achievement.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300 font-helixa">
                  {achievement.description}
                </CardDescription>

                {/* Preview Content */}
                <div className="mt-4 p-3 bg-muted/20 rounded-lg border border-border/50">
                  {/* Strategic Product Launches Preview */}
                  {index === 0 && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground font-helixa">
                        Payment Migration Documentation
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-xs p-2 bg-background/50 rounded border text-center font-helixa">
                          UK Bacs
                        </div>
                        <div className="text-xs p-2 bg-background/50 rounded border text-center font-helixa">
                          AU BECS
                        </div>
                        <div className="text-xs p-2 bg-background/50 rounded border text-center font-helixa">SEPA</div>
                        <div className="text-xs p-2 bg-background/50 rounded border text-center font-helixa">Cards</div>
                      </div>
                      <div className="text-xs text-muted-foreground text-center font-helixa">
                        Click to view documentation links
                      </div>
                    </div>
                  )}

                  {/* Program Management Preview */}
                  {index === 1 && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium text-foreground font-helixa">Capacity Growth</div>
                        <div className="text-lg font-bold text-primary font-helixa">5% to 56%</div>
                      </div>
                      <div
                        className="h-16 bg-white rounded relative overflow-hidden border"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="absolute inset-0 flex items-end justify-end p-2">
                          <div className="text-xs text-white font-semibold bg-purple-800 px-2 py-1 rounded font-helixa">
                            +1020%
                          </div>
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 100 40" style={{ backgroundColor: "white" }}>
                          <polyline fill="none" stroke="#6b21a8" strokeWidth="2" points="5,35 25,30 45,20 65,15 85,5" />
                        </svg>
                      </div>
                      <div className="text-xs text-muted-foreground text-center font-helixa">
                        24-month timeline • Team excellence awards
                      </div>
                    </div>
                  )}

                  {/* Client Engagement Preview */}
                  {index === 2 && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground font-helixa">Global Client Engagement</div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">5+</div>
                          <div className="text-muted-foreground">Payment Types</div>
                        </div>
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">100+</div>
                          <div className="text-muted-foreground">Workshops</div>
                        </div>
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">15+</div>
                          <div className="text-muted-foreground">Markets</div>
                        </div>
                      </div>
                      <div className="h-12 flex items-center justify-center bg-background/50 rounded border">
                        <img
                          src="/images/worldLow_highlighted_512x192_doubled-cropped.svg"
                          alt="World Map Preview"
                          className="h-8 opacity-60 dark:filter dark:invert"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground text-center font-helixa">
                        Enterprise migration workshops across global markets
                      </div>
                    </div>
                  )}

                  {/* Knowledge Leadership Preview */}
                  {index === 3 && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground font-helixa">Documentation Excellence</div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">Top 5%</div>
                          <div className="text-muted-foreground">Most Viewed Internal Docs</div>
                        </div>
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">60+</div>
                          <div className="text-muted-foreground">Docs Shipped This Year</div>
                        </div>
                        <div className="text-xs font-helixa">
                          <div className="text-lg font-bold text-primary">Top 0.5%</div>
                          <div className="text-muted-foreground">Stripe Employee Ranking</div>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
                      </div>
                      <div className="text-xs text-muted-foreground text-center font-helixa">
                        Internal knowledge leadership & documentation impact
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expanded Card Modal */}
      {expandedCard !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card shadow-2xl border-2 border-primary/20">
            <CardHeader className="pb-6 relative">
              <button
                onClick={closeExpanded}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={achievements[expandedCard].icon || "/placeholder.svg"}
                    alt={achievements[expandedCard].title}
                    width={48}
                    height={48}
                    className="dark:filter dark:invert"
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground font-helixa">
                  {achievements[expandedCard].title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <CardDescription className="text-lg text-foreground/90 leading-relaxed font-helixa">
                {achievements[expandedCard].description}
              </CardDescription>

              {/* Strategic Product Launches Links */}
              {expandedCard === 0 && (
                <div className="bg-card rounded-lg shadow-sm border p-4 md:p-6 space-y-6">
                  <h5 className="text-2xl font-bold text-foreground pb-4 font-helixa">
                    Payment Method Migration Documentation
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="https://docs.stripe.com/get-started/data-migrations/payment-method-imports?payment-methods=cards"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 hover:bg-muted/50"
                    >
                      <h6 className="font-semibold text-foreground mb-2 font-helixa">Cards Migration</h6>
                      <p className="text-sm text-muted-foreground font-helixa">
                        Import and migrate card payment methods
                      </p>
                    </a>
                    <a
                      href="https://docs.stripe.com/get-started/data-migrations/payment-method-imports?payment-methods=bacs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 hover:bg-muted/50"
                    >
                      <h6 className="font-semibold text-foreground mb-2 font-helixa">UK Bacs Migration</h6>
                      <p className="text-sm text-muted-foreground font-helixa">
                        Import and migrate UK Bacs payment methods
                      </p>
                    </a>
                    <a
                      href="https://docs.stripe.com/get-started/data-migrations/payment-method-imports?payment-methods=becs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 hover:bg-muted/50"
                    >
                      <h6 className="font-semibold text-foreground mb-2 font-helixa">AU BECS Migration</h6>
                      <p className="text-sm text-muted-foreground font-helixa">
                        Import and migrate Australian BECS payment methods
                      </p>
                    </a>
                    <a
                      href="https://docs.stripe.com/get-started/data-migrations/payment-method-imports?payment-methods=sepa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200 hover:bg-muted/50"
                    >
                      <h6 className="font-semibold text-foreground mb-2 font-helixa">SEPA Migration</h6>
                      <p className="text-sm text-muted-foreground font-helixa">
                        Import and migrate SEPA payment methods
                      </p>
                    </a>
                  </div>
                </div>
              )}

              {/* Client Engagement World Map */}
              {expandedCard === 2 && (
                <div className="bg-card rounded-lg shadow-sm border p-4 md:p-6 space-y-6">
                  <h5 className="text-2xl font-bold text-foreground pb-4 font-helixa">Global Client Engagement</h5>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">5+</div>
                      <div className="text-sm text-muted-foreground font-helixa">Payment Types Supported</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">
                        ACH, SEPA, Cards, AU Becs, UK Bacs
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">100+</div>
                      <div className="text-sm text-muted-foreground font-helixa">Large User Workshops</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">Enterprise client scoping</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">15+</div>
                      <div className="text-sm text-muted-foreground font-helixa">Global Markets</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">US, UK, EU, AU, CA</div>
                    </div>
                  </div>

                  {/* World Map - Separate Section */}
                  <div className="flex justify-center items-center py-4">
                    <div className="w-full max-w-2xl h-48">
                      <img
                        src="/images/worldLow_highlighted_512x192_doubled-cropped.svg"
                        alt="World Map showing global client engagement"
                        className="object-contain w-full h-full dark:filter dark:invert"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h6 className="font-semibold text-foreground font-helixa">Payment Schemes Expertise</h6>
                      <ul className="space-y-2 text-sm text-muted-foreground font-helixa">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          UK Bacs Direct Debit & Credit Transfer
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Australian BECS Direct Entry
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          SEPA Direct Debit & Credit Transfer
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          US ACH & International Cards
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h6 className="font-semibold text-foreground font-helixa">Client Success Initiatives</h6>
                      <ul className="space-y-2 text-sm text-muted-foreground font-helixa">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Enterprise migration workshops
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Technical solution alignment
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Go-live support & optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Cross-functional team coordination
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Timeline Chart Animation */}
              {expandedCard === 1 && (
                <div className="bg-card rounded-lg shadow-sm border p-4 md:p-6 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="leading-none text-3xl font-bold text-foreground pb-2 font-helixa">5% to 56%</h5>
                      <p className="text-base font-normal text-muted-foreground font-helixa">
                        Case Management Capacity Growth
                      </p>
                    </div>
                    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 bg-green-50 dark:bg-green-900/20 rounded">
                      +1020%
                      <svg
                        className="w-3 h-3 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13V1m0 0L1 5m4-4 4 4"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="h-80 w-full bg-white rounded border p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={chartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 40,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="opacity-30" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 12,
                            fill: "#6b7280",
                          }}
                          domain={[1, 24]}
                          type="number"
                          ticks={[1, 6, 12, 18, 24]}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{
                            fontSize: 12,
                            fill: "#6b7280",
                          }}
                          domain={[0, 60]}
                          tickFormatter={(value) => `${value}%`}
                          ticks={[0, 15, 30, 45, 60]}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            color: "#374151",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(value: number) => [`${value}%`, "Capacity"]}
                          labelFormatter={(label: number) => `Month ${label}`}
                        />
                        <Line
                          type="monotone"
                          dataKey="capacity"
                          stroke="#6b21a8"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{
                            r: 4,
                            stroke: "#6b21a8",
                            strokeWidth: 2,
                            fill: "white",
                          }}
                          strokeDasharray="1000"
                          strokeDashoffset={1000 - animationProgress * 1000}
                          style={{
                            transition: "none",
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 items-center border-t border-border pt-5">
                    <div className="flex justify-center items-center">
                      <div className="text-sm font-medium text-muted-foreground">24 Month Timeline</div>
                    </div>
                  </div>

                  {/* Team Excellence Recognition */}
                  <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                    <h6 className="text-xl font-semibold text-foreground font-helixa">Team Excellence Recognition</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-medium text-foreground font-helixa">
                            Regional Operational Excellence Awards
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-helixa ml-6">
                          Multiple team members recognized for outstanding operational performance and process
                          improvement initiatives across regional markets
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="font-medium text-foreground font-helixa">Mentor of the Quarter Award</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-helixa ml-6">
                          Received the Mentor of the Quarter Award for exceptional guidance and support in upskilling
                          the new Migration Support Team in the APAC region.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Knowledge Leadership Documentation */}
              {expandedCard === 3 && (
                <div className="bg-card rounded-lg shadow-sm border p-4 md:p-6 space-y-6">
                  <h5 className="text-2xl font-bold text-foreground pb-4 font-helixa">
                    Internal Documentation Excellence
                  </h5>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">Top 5%</div>
                      <div className="text-sm text-muted-foreground font-helixa">Most Viewed Internal Docs</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">
                        Across all Stripe documentation
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">60+</div>
                      <div className="text-sm text-muted-foreground font-helixa">Docs Shipped This Year</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">
                        Launched and edited internally
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2 font-helixa">Top 0.5%</div>
                      <div className="text-sm text-muted-foreground font-helixa">Stripe Employee Ranking</div>
                      <div className="text-xs text-muted-foreground mt-1 font-helixa">
                        Documentation contribution volume
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h6 className="font-semibold text-foreground font-helixa">Documentation Impact</h6>
                      <ul className="space-y-3 text-sm text-muted-foreground font-helixa">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Comprehensive migration guides ranking in top 5% of most viewed internal documentation
                            across Stripe
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Cross-functional performance enhancement through systematic knowledge sharing frameworks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Client success optimization through detailed technical documentation and best practices
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h6 className="font-semibold text-foreground font-helixa">Knowledge Leadership Metrics</h6>
                      <ul className="space-y-3 text-sm text-muted-foreground font-helixa">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>60+ documents shipped this year, placing in top 0.5% of Stripe employees</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Established reputation as go-to knowledge leader for payment migration expertise</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Documentation frameworks that enhanced cross-functional team performance and client outcomes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
