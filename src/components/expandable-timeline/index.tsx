"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useTimeline } from "@/hooks/use-timeline"
import { useAnimationVariants } from "@/hooks/use-animation-variants"
import { AnimatedBeam } from "./animated-beam"
import { TimelineStep } from "./timeline/timeline-step"
import { AddStepButton } from "./timeline/add-step-button"
import { TimelineContent } from "./timeline/timeline-content"
import { NavigationButton } from "./timeline/navigation-button"
import { useEffect } from "react"

export default function ExpandableTimeline() {
  // Media queries for responsive design
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")

  // Business logic
  const {
    timelineData,
    visibleTimelineData,
    activeStep,
    editingItem,
    isLoaded,
    containerRef,
    stepRefs,
    showPrevButton,
    showNextButton,
    visibleRange,
    handleStepClick,
    startEditing,
    saveEdit,
    cancelEdit,
    navigateTimeline,
    addStep,
    setActiveStep,
  } = useTimeline(isMobile, isTablet)

  // Animation variants
  const { containerVariants, itemVariants, contentVariants, contentChildrenVariants } = useAnimationVariants()

  // Find active step data
  const activeStepData = activeStep ? timelineData.find((step) => step.id === activeStep) : null

  // Debug log to check refs
  useEffect(() => {
    if (isLoaded && visibleTimelineData.length > 1) {
      const timeout = setTimeout(() => {
        // Force a re-render to ensure the beam is displayed
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [isLoaded, visibleTimelineData])

  // Determine if we can render the beam
  const canRenderBeam =
    visibleTimelineData.length > 1 &&
    stepRefs.current.length > 0 &&
    stepRefs.current[visibleTimelineData[0].id - 1]?.current &&
    stepRefs.current[visibleTimelineData[visibleTimelineData.length - 1].id - 1]?.current

  return (
    <div className="w-full max-w-5xl">
      <div className="relative" ref={containerRef}>
        {/* Position the animated beam at the bottom layer */}
        {canRenderBeam && (
          <AnimatedBeam
            className="z-0"
            containerRef={containerRef}
            fromRef={stepRefs.current[visibleTimelineData[0].id - 1]}
            toRef={stepRefs.current[visibleTimelineData[visibleTimelineData.length - 1].id - 1]}
            pathColor="#333"
            pathWidth={2}
            pathOpacity={0.3}
            gradientStartColor="#ffffff"
            gradientStopColor="#888888"
            delay={0.2}
            duration={5}
            startYOffset={0}
            endYOffset={0}
            curvature={0}
          />
        )}

        {/* Navigation buttons and timeline content with higher z-index */}
        <div className="z-10 relative">
          {/* Navigation buttons */}
          {showPrevButton && <NavigationButton direction="prev" onClick={() => navigateTimeline("prev")} />}

          {showNextButton && <NavigationButton direction="next" onClick={() => navigateTimeline("next")} />}

          {/* Timeline steps */}
          <motion.div
            className="overflow-x-auto pb-6 hide-scrollbar px-8"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className={cn("flex min-w-max", isMobile ? "justify-center" : "")}>
              {visibleTimelineData.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Timeline step */}
                  <TimelineStep
                    step={step}
                    isActive={activeStep === step.id}
                    editingItem={editingItem}
                    stepRef={stepRefs.current[step.id - 1]}
                    itemVariants={itemVariants}
                    onStepClick={handleStepClick}
                    onStartEditing={startEditing}
                    onSaveEdit={saveEdit}
                    onCancelEdit={cancelEdit}
                  />

                  {/* Add spacing between steps */}
                  {index < visibleTimelineData.length - 1 && <div className={cn("mx-4 md:mx-8 lg:mx-12")}></div>}
                </div>
              ))}

              {/* Add button (only show if we're at the end) */}
              {visibleRange.end >= timelineData.length && (
                <div className="flex items-center">
                  {/* Add spacing before the add button */}
                  <div className={cn("mx-4 md:mx-8 lg:mx-12")}></div>
                  <AddStepButton itemVariants={itemVariants} onAddStep={addStep} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expanded content with enhanced animations */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeStepData && (
            <TimelineContent
              key={`content-${activeStepData.id}`}
              step={activeStepData}
              editingItem={editingItem}
              contentVariants={contentVariants}
              contentChildrenVariants={contentChildrenVariants}
              onClose={() => setActiveStep(null)}
              onStartEditing={startEditing}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
