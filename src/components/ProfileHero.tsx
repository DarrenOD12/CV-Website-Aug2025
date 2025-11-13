"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProfileHero() {
  const [showTaglines, setShowTaglines] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTaglines(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#key-achievements")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative">
      <div className="flex items-center space-x-12">
        {/* Name Section */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-6xl font-bold font-helixa uppercase mb-2"
            style={{ fontFamily: "Helixa Light, sans-serif" }}
          >
            <span
              className="font-callestany text-darrenGray dark:text-foreground"
              style={{ fontFamily: "Callestany, sans-serif" }}
            >
              D
            </span>
            <span className="text-darrenGray dark:text-foreground">arren</span>
          </h1>
          <h1 className="text-6xl font-bold font-helixa uppercase" style={{ fontFamily: "Helixa Light, sans-serif" }}>
            <span
              className="font-callestany text-odonnellGray dark:text-foreground"
              style={{ fontFamily: "Callestany, sans-serif" }}
            >
              <span style={{ fontSize: "0.8em" }}>O' </span>
              <span style={{ marginLeft: "-0.3em" }}>D</span>
            </span>
            <span className="text-odonnellGray dark:text-foreground">onnell</span>
          </h1>
        </div>

        {/* Vertical Line */}
        <div className="w-px bg-muted-foreground vertical-line-grow h-0"></div>

        {/* Taglines Section */}
        <div className="space-y-6 text-2xl text-muted-foreground dark:text-gray-200 font-helixa">
          <p className={`${showTaglines ? "fadeInUp-animation" : "opacity-0"}`}>
            Originally from <span className="font-callestany text-3xl">Ireland</span>
          </p>

          <p className={`${showTaglines ? "fadeInUp-animation" : "opacity-0"}`}>
            Currently in <span className="font-callestany text-3xl">Sydney</span>
          </p>

          <p className={`${showTaglines ? "fadeInUp-animation" : "opacity-0"}`}>
            Working at <span className="font-callestany text-stripe text-3xl">Stripe</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-8">
        <Button
          variant="ghost"
          size="lg"
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-helixa"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Button>
      </div>
    </div>
  )
}
