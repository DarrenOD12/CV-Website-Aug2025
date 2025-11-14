"use client"

import Navigation from "@/components/Navigation"
import ProfileHero from "@/components/ProfileHero"
import KeyAchievements from "@/components/KeyAchievements"
import Experience from "@/components/Experience"
import Education from "@/components/Education"

export default function Page() {
  return (
    <>
      <Navigation />
      <ProfileHero />
      <div id="key-achievements">
        <KeyAchievements />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="cv">
        <div className="min-h-screen bg-background py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-helixa">CV & LinkedIn</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* CV Preview */}
              <div className="flex flex-col items-center">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/assets/Darren_O_Donnell_CV_Nov_2025.pdf"
                    link.download = "Darren_O_Donnell_CV_Nov_2025.pdf"
                    link.click()
                  }}
                >
                  <img
                    src="/assets/CV_preview.png"
                    alt="CV Preview - Click to Download"
                    className="max-w-lg w-full shadow-lg rounded-lg border-2 border-border transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 text-primary-foreground px-4 py-2 rounded-md font-helixa">
                      Download CV
                    </div>
                  </div>
                </div>
                <p
                  className="text-lg text-muted-foreground mt-6 font-helixa text-center cursor-pointer hover:text-primary transition-colors duration-300"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/assets/Darren_O_Donnell_CV_Nov_2025.pdf"
                    link.download = "Darren_O_Donnell_CV_Nov_2025.pdf"
                    link.click()
                  }}
                >
                  Click to Download CV
                </p>
              </div>

              {/* LinkedIn Preview */}
              <div className="flex flex-col items-center">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => window.open("https://www.linkedin.com/in/darren-o-donnell/", "_blank")}
                >
                  <img
                    src="/assets/LinkedIn.png"
                    alt="LinkedIn Profile - Click to Visit"
                    className="max-w-lg w-full shadow-lg rounded-lg border-2 border-border transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 text-primary-foreground px-4 py-2 rounded-md font-helixa">
                      Visit LinkedIn
                    </div>
                  </div>
                </div>
                <p
                  className="text-lg text-muted-foreground mt-6 font-helixa text-center cursor-pointer hover:text-primary transition-colors duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/darren-o-donnell/", "_blank")}
                >
                  Click to Visit LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
