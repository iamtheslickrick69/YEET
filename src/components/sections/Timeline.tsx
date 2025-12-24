"use client"

import { useState, useRef, useEffect, createRef, type RefObject } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { AnimatedBeam } from "./AnimatedBeam"

interface TimelineStep {
  id: number
  phase: string
  title: string
  content: string
  deliverables: string[]
}

const timelineData: TimelineStep[] = [
  {
    id: 1,
    phase: "Week 1",
    title: "Discovery & Scope",
    content: "Deep-dive into your existing systems, data flows, and business objectives. We define clear success metrics and scope boundaries.",
    deliverables: ["Technical assessment", "Integration map", "Success criteria"],
  },
  {
    id: 2,
    phase: "Week 2-3",
    title: "Architecture & Build",
    content: "Production-grade implementation with your stack. No throwaway prototypes. Everything we build is designed to scale.",
    deliverables: ["System architecture", "Core implementation", "API integrations"],
  },
  {
    id: 3,
    phase: "Week 4",
    title: "Testing & Handoff",
    content: "Rigorous testing against real data. Complete documentation and knowledge transfer to your team.",
    deliverables: ["Test coverage", "Documentation", "Team training"],
  },
  {
    id: 4,
    phase: "Ongoing",
    title: "Support & Iteration",
    content: "Post-launch support and performance monitoring. We iterate based on real usage data, not assumptions.",
    deliverables: ["Performance monitoring", "Bug fixes", "Feature iterations"],
  },
]

export function Timeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 4 })
  const [isLoaded, setIsLoaded] = useState(false)

  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")

  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<RefObject<HTMLButtonElement | null>[]>(
    timelineData.map(() => createRef<HTMLButtonElement>())
  )

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setVisibleRange({ start: 0, end: 2 })
    } else if (isTablet) {
      setVisibleRange({ start: 0, end: 3 })
    } else {
      setVisibleRange({ start: 0, end: 4 })
    }
  }, [isMobile, isTablet])

  const visibleSteps = timelineData.slice(visibleRange.start, visibleRange.end)
  const showPrev = visibleRange.start > 0
  const showNext = visibleRange.end < timelineData.length

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev" && showPrev) {
      setVisibleRange(prev => ({ start: prev.start - 1, end: prev.end - 1 }))
    } else if (direction === "next" && showNext) {
      setVisibleRange(prev => ({ start: prev.start + 1, end: prev.end + 1 }))
    }
  }

  const activeStepData = activeStep ? timelineData.find(s => s.id === activeStep) : null

  const canRenderBeam = visibleSteps.length > 1 &&
    stepRefs.current[visibleSteps[0].id - 1]?.current &&
    stepRefs.current[visibleSteps[visibleSteps.length - 1].id - 1]?.current

  return (
    <section id="process" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-white/40 mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mt-4">
            From kickoff to production in weeks, not months.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Animated Beam */}
          {canRenderBeam && (
            <AnimatedBeam
              className="z-0"
              containerRef={containerRef}
              fromRef={stepRefs.current[visibleSteps[0].id - 1]}
              toRef={stepRefs.current[visibleSteps[visibleSteps.length - 1].id - 1]}
              pathColor="#333"
              pathWidth={2}
              pathOpacity={0.3}
              gradientStartColor="#ffffff"
              gradientStopColor="#666666"
              duration={5}
            />
          )}

          <div className="relative z-10">
            {/* Navigation Buttons */}
            {showPrev && (
              <button
                onClick={() => navigate("prev")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {showNext && (
              <button
                onClick={() => navigate("next")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Steps */}
            <motion.div
              className="flex justify-between items-start px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {visibleSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center flex-1"
                >
                  {/* Phase Label */}
                  <span className="text-xs uppercase tracking-wider text-white/40 mb-3">
                    {step.phase}
                  </span>

                  {/* Circle Button */}
                  <motion.button
                    ref={stepRefs.current[step.id - 1]}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center font-medium text-sm transition-all",
                      activeStep === step.id
                        ? "border-white bg-white text-zinc-950"
                        : "border-white/30 bg-zinc-950 text-white hover:border-white/60"
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step.id}
                  </motion.button>

                  {/* Title */}
                  <motion.span
                    className={cn(
                      "mt-4 text-sm md:text-base font-medium text-center max-w-[120px] md:max-w-[150px]",
                      activeStep === step.id ? "text-white" : "text-white/70"
                    )}
                    animate={{ scale: activeStep === step.id ? 1.05 : 1 }}
                  >
                    {step.title}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <div className="mt-8 min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeStepData && (
              <motion.div
                key={`content-${activeStepData.id}`}
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 md:p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/40">
                      {activeStepData.phase}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
                      {activeStepData.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveStep(null)}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <ChevronUp size={24} />
                  </button>
                </div>

                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                  {activeStepData.content}
                </p>

                <div>
                  <span className="text-xs uppercase tracking-wider text-white/40 mb-3 block">
                    Deliverables
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStepData.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
