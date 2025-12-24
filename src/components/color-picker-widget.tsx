"use client"

import { useState } from "react"
import { colorTemplates, type GradientColors } from "./gradient-background"

export const fontOptions = [
  { name: "Instrument Serif", value: "Instrument_Serif" },
  { name: "Playfair Display", value: "Playfair_Display" },
  { name: "Cormorant Garamond", value: "Cormorant_Garamond" },
  { name: "Libre Baskerville", value: "Libre_Baskerville" },
  { name: "DM Serif Display", value: "DM_Serif_Display" },
  { name: "Lora", value: "Lora" },
  { name: "Merriweather", value: "Merriweather" },
  { name: "Source Serif Pro", value: "Source_Serif_4" },
  { name: "Space Grotesk", value: "Space_Grotesk" },
  { name: "Inter", value: "Inter" },
  { name: "Orbitron", value: "Orbitron" },
  { name: "Rajdhani", value: "Rajdhani" },
  { name: "Exo 2", value: "Exo_2" },
  { name: "Audiowide", value: "Audiowide" },
  { name: "Michroma", value: "Michroma" },
  { name: "Oxanium", value: "Oxanium" },
  { name: "Electrolize", value: "Electrolize" },
  { name: "Share Tech", value: "Share_Tech" },
  { name: "Syncopate", value: "Syncopate" },
  { name: "Teko", value: "Teko" },
  { name: "Titillium Web", value: "Titillium_Web" },
  { name: "Saira", value: "Saira" },
  { name: "Chakra Petch", value: "Chakra_Petch" },
  { name: "Russo One", value: "Russo_One" },
  { name: "Quantico", value: "Quantico" },
  { name: "Aldrich", value: "Aldrich" },
  { name: "Iceland", value: "Iceland" },
  { name: "Nova Square", value: "Nova_Square" },
  { name: "Sarpanch", value: "Sarpanch" },
  { name: "Bungee", value: "Bungee" },
  { name: "Jura", value: "Jura" },
  { name: "Play", value: "Play" },
  { name: "Bruno Ace", value: "Bruno_Ace" },
  { name: "Gruppo", value: "Gruppo" },
  { name: "Megrim", value: "Megrim" },
  { name: "Poiret One", value: "Poiret_One" },
  { name: "Quicksand", value: "Quicksand" },
  { name: "Comfortaa", value: "Comfortaa" },
  { name: "Advent Pro", value: "Advent_Pro" },
  { name: "Kanit", value: "Kanit" },
]

interface ColorPickerWidgetProps {
  onColorChange: (colors: GradientColors) => void
  currentColors: GradientColors
  onFontChange: (font: string) => void
  currentFont: string
  onTextChange: (heading: string, subheading: string) => void
  headingText: string
  subheadingText: string
}

export function ColorPickerWidget({
  onColorChange,
  currentColors,
  onFontChange,
  currentFont,
  onTextChange,
  headingText,
  subheadingText,
}: ColorPickerWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"presets" | "custom" | "fonts" | "text">("presets")

  const handleCustomColorChange = (index: number, value: string) => {
    if (index === -1) {
      onColorChange({ ...currentColors, colorBack: value })
    } else {
      const newColors = [...currentColors.colors]
      newColors[index] = value
      onColorChange({ ...currentColors, colors: newColors })
    }
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
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
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl w-[360px] max-h-[75vh] overflow-hidden flex flex-col">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/5 rounded-lg mb-4">
            {(["presets", "custom", "fonts", "text"] as const).map((tab) => (
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

          {activeTab === "presets" && (
            <div className="grid grid-cols-2 gap-2 overflow-y-auto pr-1 max-h-[50vh]">
              {colorTemplates.map((template) => {
                const isActive =
                  currentColors.colors[0] === template.colors.colors[0] &&
                  currentColors.colors[1] === template.colors.colors[1] &&
                  currentColors.colors[2] === template.colors.colors[2]
                return (
                  <button
                    key={template.name}
                    onClick={() => onColorChange(template.colors)}
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

          {activeTab === "custom" && (
            <div className="space-y-4 overflow-y-auto pr-1">
              <div className="space-y-2">
                <label className="text-xs text-white/60 uppercase tracking-wider">Background</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={hslToHex(currentColors.colorBack)}
                    onChange={(e) => handleCustomColorChange(-1, hexToHsl(e.target.value))}
                    className="w-10 h-10 rounded-lg cursor-pointer border-2 border-white/20 bg-transparent"
                  />
                  <span className="text-white/80 text-xs font-mono">{currentColors.colorBack}</span>
                </div>
              </div>

              {currentColors.colors.map((color, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">Gradient Color {index + 1}</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={hslToHex(color)}
                      onChange={(e) => handleCustomColorChange(index, hexToHsl(e.target.value))}
                      className="w-10 h-10 rounded-lg cursor-pointer border-2 border-white/20 bg-transparent"
                    />
                    <span className="text-white/80 text-xs font-mono truncate">{color}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "fonts" && (
            <div className="space-y-1 overflow-y-auto pr-1 max-h-[50vh]">
              {fontOptions.map((font) => (
                <button
                  key={font.value}
                  onClick={() => onFontChange(font.value)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-white hover:bg-white/10 transition-all ${
                    currentFont === font.value ? "bg-white/20 ring-1 ring-white/40" : ""
                  }`}
                >
                  <span className="text-sm">{font.name}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === "text" && (
            <div className="space-y-4 overflow-y-auto pr-1">
              <div className="space-y-2">
                <label className="text-xs text-white/60 uppercase tracking-wider">Heading</label>
                <textarea
                  value={headingText}
                  onChange={(e) => onTextChange(e.target.value, subheadingText)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm resize-none focus:outline-none focus:ring-1 focus:ring-white/40"
                  rows={3}
                  placeholder="Enter heading text..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-white/60 uppercase tracking-wider">Subheading (Italic)</label>
                <textarea
                  value={subheadingText}
                  onChange={(e) => onTextChange(headingText, e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm resize-none focus:outline-none focus:ring-1 focus:ring-white/40"
                  rows={2}
                  placeholder="Enter subheading text..."
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function hslToHex(hsl: string): string {
  const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
  if (!match) return "#000000"

  const h = Number.parseInt(match[1]) / 360
  const s = Number.parseInt(match[2]) / 100
  const l = Number.parseInt(match[3]) / 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r, g, b
  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function hexToHsl(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
