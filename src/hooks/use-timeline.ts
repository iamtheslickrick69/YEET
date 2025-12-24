"use client"

import type React from "react"

import { useState, useEffect, useRef, createRef } from "react"
import type { TimelineItem, EditingState, VisibleRange } from "@/types/timeline"

// Initial timeline data
const initialTimelineData: TimelineItem[] = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    content: "Initial team meeting to define project scope and allocate resources.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    content: "Completed wireframes and initial mockups for stakeholder review.",
    hasTable: true,
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    content: "Backend development and API integration according to technical specifications.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    content: "Performance optimization and final quality assurance before release.",
  },
]

export function useTimeline(isMobile: boolean, isTablet: boolean) {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>(initialTimelineData)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [editingItem, setEditingItem] = useState<EditingState | null>(null)
  const [visibleRange, setVisibleRange] = useState<VisibleRange>({ start: 0, end: 4 })

  // Create refs for the container and each timeline step
  const containerRef = useRef<HTMLDivElement>(null)

  // Initialize stepRefs with maximum possible number of refs
  // This ensures we have refs for all possible steps
  const stepRefs = useRef<Array<React.RefObject<HTMLButtonElement | null>>>(
    Array(10)
      .fill(null)
      .map(() => createRef<HTMLButtonElement>()),
  )

  // Update refs when timelineData changes
  useEffect(() => {
    // Make sure we have enough refs for all timeline items
    if (stepRefs.current.length < timelineData.length) {
      const additionalRefs = Array(timelineData.length - stepRefs.current.length)
        .fill(null)
        .map(() => createRef<HTMLButtonElement>())

      stepRefs.current = [...stepRefs.current, ...additionalRefs]
    }
  }, [timelineData])

  // Set loaded state after initial render for entrance animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Adjust visible range based on screen size
  useEffect(() => {
    if (isMobile) {
      setVisibleRange({ start: 0, end: 1 })
    } else if (isTablet) {
      setVisibleRange({ start: 0, end: 2 })
    } else {
      setVisibleRange({ start: 0, end: 4 })
    }
  }, [isMobile, isTablet])

  // Toggle active step
  const handleStepClick = (id: number) => {
    if (editingItem) return // Don't change active step while editing
    setActiveStep(activeStep === id ? null : id)
  }

  // Start editing an item
  const startEditing = (id: number, field: string) => {
    setEditingItem({ id, field })
  }

  // Save edited content
  const saveEdit = (id: number, field: string, value: string) => {
    setTimelineData((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
    setEditingItem(null)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingItem(null)
  }

  // Navigate timeline
  const navigateTimeline = (direction: "prev" | "next") => {
    if (direction === "prev" && visibleRange.start > 0) {
      setVisibleRange((prev) => ({
        start: prev.start - 1,
        end: prev.end - 1,
      }))
    } else if (direction === "next" && visibleRange.end < timelineData.length) {
      setVisibleRange((prev) => ({
        start: prev.start + 1,
        end: prev.end + 1,
      }))
    }
  }

  // Add new step
  const addStep = () => {
    const newId = Math.max(...timelineData.map((item) => item.id)) + 1
    const newStep = {
      id: newId,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      title: "New Step",
      content: "Click to edit this content.",
    }

    setTimelineData([...timelineData, newStep])

    // Adjust visible range to show the new step
    if (isMobile) {
      setVisibleRange({ start: timelineData.length, end: timelineData.length + 1 })
    } else if (isTablet && timelineData.length >= 2) {
      setVisibleRange({ start: timelineData.length - 1, end: timelineData.length + 1 })
    }

    setActiveStep(newId)
    // Start editing the title of the new step
    setTimeout(() => {
      startEditing(newId, "title")
    }, 300)
  }

  // Filter timeline data based on visible range
  const visibleTimelineData = timelineData.slice(visibleRange.start, visibleRange.end)

  // Determine if we should show navigation controls
  const showPrevButton = visibleRange.start > 0
  const showNextButton = visibleRange.end < timelineData.length

  return {
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
  }
}
