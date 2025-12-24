"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GrainGradient } from "@paper-design/shaders-react"

export interface GradientColors {
  colors: string[]
  colorBack: string
}

const colorTemplates: { name: string; colors: GradientColors }[] = [
  {
    name: "Ocean",
    colors: {
      colors: ["hsl(193, 85%, 66%)", "hsl(196, 100%, 83%)", "hsl(195, 100%, 50%)"],
      colorBack: "hsl(0, 0%, 0%)",
    },
  },
  {
    name: "Aurora",
    colors: {
      colors: ["hsl(280, 80%, 60%)", "hsl(160, 85%, 50%)", "hsl(200, 90%, 65%)"],
      colorBack: "hsl(0, 0%, 0%)",
    },
  },
  {
    name: "Midnight",
    colors: {
      colors: ["hsl(230, 60%, 30%)", "hsl(260, 70%, 45%)", "hsl(200, 80%, 25%)"],
      colorBack: "hsl(0, 0%, 0%)",
    },
  },
  {
    name: "Cyberpunk",
    colors: {
      colors: ["hsl(300, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(330, 100%, 60%)"],
      colorBack: "hsl(260, 50%, 5%)",
    },
  },
  {
    name: "Nebula",
    colors: {
      colors: ["hsl(280, 70%, 40%)", "hsl(320, 80%, 50%)", "hsl(240, 60%, 45%)"],
      colorBack: "hsl(270, 50%, 5%)",
    },
  },
  {
    name: "Electric",
    colors: {
      colors: ["hsl(220, 100%, 60%)", "hsl(270, 100%, 65%)", "hsl(200, 100%, 50%)"],
      colorBack: "hsl(240, 50%, 5%)",
    },
  },
]

const fontOptions = [
  { name: "Space Grotesk", value: "Space_Grotesk" },
  { name: "Inter", value: "Inter" },
  { name: "Instrument Serif", value: "Instrument_Serif" },
  { name: "Playfair Display", value: "Playfair_Display" },
  { name: "Orbitron", value: "Orbitron" },
  { name: "Syncopate", value: "Syncopate" },
]

export function InteractiveDemo() {
  const [currentColors, setCurrentColors] = useState<GradientColors>(colorTemplates[0].colors)
  const [currentFont, setCurrentFont] = useState("Space_Grotesk")
  const [headingText, setHeadingText] = useState("Your Brand,\nAmplified")
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"presets" | "fonts" | "text">("presets")

  return (
    <section id="demo" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack={currentColors.colorBack}
          softness={0.76}
          intensity={0.45}
          noise={0}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={currentColors.colors}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Interactive Proof</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
            We build interfaces that
            <span className="text-white/40"> feel alive.</span>
          </h2>
        </motion.div>
      </div>

      {/* Demo Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight whitespace-pre-line"
            style={{ fontFamily: currentFont.replace("_", " ") }}
          >
            {headingText}
          </h3>
          <p className="mt-8 text-lg md:text-xl text-white/50 max-w-xl mx-auto">
            Real-time customization. Production-ready components.
            This is what we ship.
          </p>
        </motion.div>
      </div>

      {/* Customization Widget */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all"
        >
          <span
            className="w-4 h-4 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${currentColors.colors[0]}, ${currentColors.colors[1]})`,
            }}
          />
          Customize
          <svg
            className={`w-4 h-4 transition-transform ${isWidgetOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isWidgetOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 p-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl w-[320px] max-h-[70vh] overflow-hidden flex flex-col"
          >
            {/* Tabs */}
            <div className="flex gap-1 p-1 bg-white/5 rounded-lg mb-4">
              {(["presets", "fonts", "text"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-all capitalize ${
                    activeTab === tab ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Presets Tab */}
            {activeTab === "presets" && (
              <div className="grid grid-cols-2 gap-2 overflow-y-auto pr-1 max-h-[50vh]">
                {colorTemplates.map((template) => {
                  const isActive = currentColors.colors[0] === template.colors.colors[0]
                  return (
                    <button
                      key={template.name}
                      onClick={() => setCurrentColors(template.colors)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm text-white hover:bg-white/10 transition-all ${
                        isActive ? "bg-white/20 ring-1 ring-white/40" : ""
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full shrink-0 ring-1 ring-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${template.colors.colors[0]}, ${template.colors.colors[1]}, ${template.colors.colors[2]})`,
                        }}
                      />
                      <span className="truncate text-xs">{template.name}</span>
                    </button>
                  )
                })}
              </div>
            )}

            {/* Fonts Tab */}
            {activeTab === "fonts" && (
              <div className="space-y-1 overflow-y-auto pr-1 max-h-[50vh]">
                {fontOptions.map((font) => (
                  <button
                    key={font.value}
                    onClick={() => setCurrentFont(font.value)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-white hover:bg-white/10 transition-all ${
                      currentFont === font.value ? "bg-white/20 ring-1 ring-white/40" : ""
                    }`}
                  >
                    <span className="text-sm" style={{ fontFamily: font.value.replace("_", " ") }}>
                      {font.name}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Text Tab */}
            {activeTab === "text" && (
              <div className="space-y-4 overflow-y-auto pr-1">
                <div className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">Heading</label>
                  <textarea
                    value={headingText}
                    onChange={(e) => setHeadingText(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm resize-none focus:outline-none focus:ring-1 focus:ring-white/40"
                    rows={3}
                    placeholder="Enter heading text..."
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
