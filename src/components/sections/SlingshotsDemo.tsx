"use client"

import { GradientBackground, colorTemplates } from "@/components/gradient-background"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "600"], display: "swap" })

export function SlingshotsDemo() {
  const activeColors = colorTemplates[22].colors
  const headingText = "The age of AI is the rematch\nbetween David and Goliath."
  const subheadingText = "and we're crafting slingshots."

  return (
    <section id="slingshots" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-screen Gradient Background */}
      <div className="absolute inset-0">
        <GradientBackground activeColors={activeColors} />
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 1 }} />

      {/* Main Content - matching original slingshots page */}
      <div className="px-6 max-w-4xl relative" style={{ zIndex: 10 }}>
        <h1
          className={`${rajdhani.className} text-white text-center text-balance font-normal tracking-tight text-5xl md:text-6xl lg:text-7xl leading-tight whitespace-pre-line`}
        >
          {headingText}
        </h1>
        <p className={`${rajdhani.className} mt-6 text-white/90 text-center text-2xl md:text-3xl lg:text-4xl italic`}>
          {subheadingText}
        </p>
      </div>
    </section>
  )
}
