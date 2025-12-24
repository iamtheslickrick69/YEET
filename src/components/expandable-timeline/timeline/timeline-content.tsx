"use client"

import { motion } from "framer-motion"
import { ChevronUp, Edit2 } from "lucide-react"
import DraggableTable from "../draggable-table"
import EditableText from "../editable-text"
import type { TimelineItem, EditingState } from "@/types/timeline"

interface TimelineContentProps {
  step: TimelineItem
  editingItem: EditingState | null
  contentVariants: any
  contentChildrenVariants: any
  onClose: () => void
  onStartEditing: (id: number, field: string) => void
  onSaveEdit: (id: number, field: string, value: string) => void
  onCancelEdit: () => void
}

export function TimelineContent({
  step,
  editingItem,
  contentVariants,
  contentChildrenVariants,
  onClose,
  onStartEditing,
  onSaveEdit,
  onCancelEdit,
}: TimelineContentProps) {
  return (
    <motion.div
      key={`content-${step.id}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={contentVariants}
      className="mt-6"
      layout
    >
      <motion.div className="bg-black border border-gray-800 rounded-lg p-4 md:p-5 shadow-lg overflow-hidden" layout>
        <motion.div className="flex justify-between items-center mb-4" variants={contentChildrenVariants}>
          <h3 className="text-lg md:text-xl font-medium text-white">{step.title}</h3>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronUp size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="space-y-4 text-gray-300" variants={contentChildrenVariants}>
          {/* Content */}
          <motion.div
            className="bg-black border border-gray-800 p-3 md:p-4 rounded-md relative group"
            variants={contentChildrenVariants}
            layout
          >
            {editingItem?.id === step.id && editingItem?.field === "content" ? (
              <EditableText
                value={step.content}
                onSave={(value) => onSaveEdit(step.id, "content", value)}
                onCancel={onCancelEdit}
                multiline
                className="min-h-[60px] w-full text-sm md:text-base"
              />
            ) : (
              <>
                <p className="text-sm md:text-base">{step.content}</p>
                <button
                  onClick={() => onStartEditing(step.id, "content")}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Edit content"
                >
                  <Edit2 size={16} className="text-gray-500 hover:text-white" />
                </button>
              </>
            )}
          </motion.div>

          {/* Table if available */}
          {step.hasTable && (
            <motion.div className="mt-4 overflow-x-auto" variants={contentChildrenVariants} layout>
              <DraggableTable />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
