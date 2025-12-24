"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"
import EditableText from "../editable-text"
import type { TimelineItem, EditingState } from "@/types/timeline"

interface TimelineStepProps {
  step: TimelineItem
  isActive: boolean
  editingItem: EditingState | null
  stepRef: React.RefObject<HTMLButtonElement | null>
  itemVariants: any
  onStepClick: (id: number) => void
  onStartEditing: (id: number, field: string) => void
  onSaveEdit: (id: number, field: string, value: string) => void
  onCancelEdit: () => void
}

export function TimelineStep({
  step,
  isActive,
  editingItem,
  stepRef,
  itemVariants,
  onStepClick,
  onStartEditing,
  onSaveEdit,
  onCancelEdit,
}: TimelineStepProps) {
  return (
    <motion.div className="flex flex-col items-center z-20 relative" variants={itemVariants}>
      {/* Date - Fixed spacing with min-width */}
      <div className="relative group min-w-[100px] text-center mb-4">
        {editingItem?.id === step.id && editingItem?.field === "date" ? (
          <EditableText
            value={step.date}
            onSave={(value) => onSaveEdit(step.id, "date", value)}
            onCancel={onCancelEdit}
            className="text-sm min-w-[100px] text-center"
          />
        ) : (
          <>
            <span className="text-gray-400 text-sm">{step.date}</span>
            <button
              onClick={() => onStartEditing(step.id, "date")}
              className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Edit date"
            >
              <Edit2 size={12} className="text-gray-500 hover:text-white" />
            </button>
          </>
        )}
      </div>

      {/* Circle button with enhanced animations */}
      <motion.button
        ref={stepRef}
        onClick={() => onStepClick(step.id)}
        className={cn(
          "w-8 h-8 rounded-full border-2 flex items-center justify-center relative",
          isActive ? "border-white text-black" : "border-white text-white hover:bg-white/10",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor: isActive ? "rgba(255, 255, 255, 1)" : "rgba(30, 30, 30, 1)",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.2,
          },
        }}
      >
        {step.id}
      </motion.button>

      {/* Title */}
      <div className="relative group mt-4 min-w-[100px] text-center">
        {editingItem?.id === step.id && editingItem?.field === "title" ? (
          <EditableText
            value={step.title}
            onSave={(value) => onSaveEdit(step.id, "title", value)}
            onCancel={onCancelEdit}
            className="font-medium min-w-[100px] text-center"
          />
        ) : (
          <>
            <motion.span
              className="text-white font-medium whitespace-nowrap"
              animate={{
                scale: isActive ? 1.05 : 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {step.title}
            </motion.span>
            <button
              onClick={() => onStartEditing(step.id, "title")}
              className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Edit title"
            >
              <Edit2 size={12} className="text-gray-500 hover:text-white" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  )
}
