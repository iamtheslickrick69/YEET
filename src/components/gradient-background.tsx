"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export interface GradientColors {
  colors: string[]
  colorBack: string
}

export const colorTemplates: { name: string; colors: GradientColors }[] = [
  {
    name: "Ocean",
    colors: {
      colors: ["hsl(193, 85%, 66%)", "hsl(196, 100%, 83%)", "hsl(195, 100%, 50%)"],
      colorBack: "hsl(0, 0%, 0%)",
    },
  },
  {
    name: "Sunset",
    colors: { colors: ["hsl(20, 90%, 60%)", "hsl(45, 100%, 65%)", "hsl(350, 85%, 55%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Aurora",
    colors: { colors: ["hsl(280, 80%, 60%)", "hsl(160, 85%, 50%)", "hsl(200, 90%, 65%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Forest",
    colors: { colors: ["hsl(120, 60%, 40%)", "hsl(90, 70%, 55%)", "hsl(150, 50%, 35%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Neon",
    colors: {
      colors: ["hsl(320, 100%, 60%)", "hsl(180, 100%, 50%)", "hsl(60, 100%, 55%)"],
      colorBack: "hsl(0, 0%, 0%)",
    },
  },
  {
    name: "Lavender",
    colors: { colors: ["hsl(270, 70%, 70%)", "hsl(300, 60%, 75%)", "hsl(240, 65%, 65%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Fire",
    colors: { colors: ["hsl(0, 100%, 50%)", "hsl(30, 100%, 55%)", "hsl(15, 95%, 45%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Midnight",
    colors: { colors: ["hsl(230, 60%, 30%)", "hsl(260, 70%, 45%)", "hsl(200, 80%, 25%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Cotton Candy",
    colors: { colors: ["hsl(330, 80%, 75%)", "hsl(200, 80%, 80%)", "hsl(280, 70%, 80%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Emerald",
    colors: { colors: ["hsl(160, 90%, 45%)", "hsl(140, 80%, 55%)", "hsl(180, 70%, 40%)"], colorBack: "hsl(0, 0%, 0%)" },
  },
  {
    name: "Coral Reef",
    colors: {
      colors: ["hsl(16, 100%, 66%)", "hsl(340, 82%, 52%)", "hsl(36, 100%, 60%)"],
      colorBack: "hsl(220, 30%, 8%)",
    },
  },
  {
    name: "Arctic",
    colors: {
      colors: ["hsl(200, 60%, 85%)", "hsl(220, 70%, 75%)", "hsl(180, 50%, 90%)"],
      colorBack: "hsl(220, 40%, 15%)",
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
    name: "Desert",
    colors: { colors: ["hsl(30, 70%, 55%)", "hsl(45, 60%, 70%)", "hsl(20, 50%, 40%)"], colorBack: "hsl(35, 30%, 10%)" },
  },
  {
    name: "Grape",
    colors: {
      colors: ["hsl(280, 70%, 50%)", "hsl(320, 60%, 45%)", "hsl(260, 80%, 60%)"],
      colorBack: "hsl(280, 40%, 8%)",
    },
  },
  {
    name: "Mint",
    colors: {
      colors: ["hsl(165, 70%, 60%)", "hsl(140, 60%, 70%)", "hsl(180, 50%, 55%)"],
      colorBack: "hsl(170, 30%, 10%)",
    },
  },
  {
    name: "Rose Gold",
    colors: {
      colors: ["hsl(350, 60%, 70%)", "hsl(30, 50%, 75%)", "hsl(15, 70%, 65%)"],
      colorBack: "hsl(350, 20%, 10%)",
    },
  },
  {
    name: "Electric",
    colors: {
      colors: ["hsl(220, 100%, 60%)", "hsl(270, 100%, 65%)", "hsl(200, 100%, 50%)"],
      colorBack: "hsl(240, 50%, 5%)",
    },
  },
  {
    name: "Autumn",
    colors: { colors: ["hsl(25, 90%, 50%)", "hsl(45, 80%, 45%)", "hsl(10, 85%, 40%)"], colorBack: "hsl(30, 40%, 8%)" },
  },
  {
    name: "Twilight",
    colors: {
      colors: ["hsl(250, 50%, 40%)", "hsl(330, 60%, 50%)", "hsl(210, 70%, 30%)"],
      colorBack: "hsl(250, 40%, 5%)",
    },
  },
  {
    name: "Obsidian",
    colors: {
      colors: ["hsl(240, 20%, 20%)", "hsl(260, 30%, 35%)", "hsl(220, 25%, 15%)"],
      colorBack: "hsl(240, 15%, 5%)",
    },
  },
  {
    name: "Peach Blossom",
    colors: {
      colors: ["hsl(15, 80%, 75%)", "hsl(350, 70%, 80%)", "hsl(30, 75%, 70%)"],
      colorBack: "hsl(20, 30%, 10%)",
    },
  },
  {
    name: "Deep Sea",
    colors: {
      colors: ["hsl(200, 80%, 25%)", "hsl(190, 90%, 35%)", "hsl(210, 70%, 20%)"],
      colorBack: "hsl(210, 60%, 5%)",
    },
  },
  {
    name: "Bubblegum",
    colors: {
      colors: ["hsl(330, 90%, 70%)", "hsl(290, 80%, 75%)", "hsl(350, 85%, 65%)"],
      colorBack: "hsl(320, 40%, 10%)",
    },
  },
  {
    name: "Jade",
    colors: {
      colors: ["hsl(155, 60%, 40%)", "hsl(170, 50%, 50%)", "hsl(140, 55%, 35%)"],
      colorBack: "hsl(160, 40%, 8%)",
    },
  },
  {
    name: "Volcanic",
    colors: {
      colors: ["hsl(10, 100%, 40%)", "hsl(30, 90%, 35%)", "hsl(0, 80%, 30%)"],
      colorBack: "hsl(15, 50%, 5%)",
    },
  },
  {
    name: "Glacier",
    colors: {
      colors: ["hsl(195, 50%, 80%)", "hsl(210, 60%, 85%)", "hsl(185, 45%, 75%)"],
      colorBack: "hsl(200, 40%, 12%)",
    },
  },
  {
    name: "Amethyst",
    colors: {
      colors: ["hsl(275, 60%, 55%)", "hsl(290, 50%, 45%)", "hsl(260, 70%, 60%)"],
      colorBack: "hsl(270, 45%, 8%)",
    },
  },
  {
    name: "Golden Hour",
    colors: {
      colors: ["hsl(40, 100%, 55%)", "hsl(25, 95%, 50%)", "hsl(50, 90%, 60%)"],
      colorBack: "hsl(35, 50%, 8%)",
    },
  },
  {
    name: "Steel",
    colors: {
      colors: ["hsl(215, 20%, 50%)", "hsl(220, 25%, 60%)", "hsl(210, 15%, 40%)"],
      colorBack: "hsl(220, 20%, 10%)",
    },
  },
  {
    name: "Sakura",
    colors: {
      colors: ["hsl(340, 70%, 80%)", "hsl(350, 60%, 85%)", "hsl(330, 65%, 75%)"],
      colorBack: "hsl(340, 30%, 10%)",
    },
  },
  {
    name: "Matrix",
    colors: {
      colors: ["hsl(120, 100%, 40%)", "hsl(140, 90%, 35%)", "hsl(100, 80%, 45%)"],
      colorBack: "hsl(120, 50%, 3%)",
    },
  },
  {
    name: "Champagne",
    colors: {
      colors: ["hsl(45, 50%, 75%)", "hsl(35, 45%, 70%)", "hsl(55, 40%, 80%)"],
      colorBack: "hsl(45, 30%, 10%)",
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
    name: "Rust",
    colors: {
      colors: ["hsl(15, 70%, 40%)", "hsl(25, 65%, 35%)", "hsl(10, 60%, 30%)"],
      colorBack: "hsl(20, 40%, 8%)",
    },
  },
  {
    name: "Aquamarine",
    colors: {
      colors: ["hsl(175, 70%, 50%)", "hsl(185, 65%, 55%)", "hsl(165, 60%, 45%)"],
      colorBack: "hsl(180, 40%, 8%)",
    },
  },
  {
    name: "Dusk",
    colors: {
      colors: ["hsl(25, 50%, 50%)", "hsl(280, 40%, 45%)", "hsl(320, 45%, 40%)"],
      colorBack: "hsl(300, 30%, 8%)",
    },
  },
  {
    name: "Ivory",
    colors: {
      colors: ["hsl(45, 30%, 90%)", "hsl(40, 25%, 85%)", "hsl(50, 20%, 88%)"],
      colorBack: "hsl(45, 20%, 15%)",
    },
  },
  {
    name: "Tropical",
    colors: {
      colors: ["hsl(165, 80%, 45%)", "hsl(50, 90%, 55%)", "hsl(340, 85%, 55%)"],
      colorBack: "hsl(180, 40%, 8%)",
    },
  },
  {
    name: "Monochrome",
    colors: {
      colors: ["hsl(0, 0%, 70%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 85%)"],
      colorBack: "hsl(0, 0%, 5%)",
    },
  },
]

interface GradientBackgroundProps {
  activeColors?: GradientColors
}

export function GradientBackground({ activeColors }: GradientBackgroundProps) {
  const currentColors = activeColors || colorTemplates[0].colors

  return (
    <div className="w-full h-full">
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
  )
}
