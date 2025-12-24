"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"

interface AddStepButtonProps {
  itemVariants: any
  onAddStep: () => void
}

export function AddStepButton({ itemVariants, onAddStep }: AddStepButtonProps) {
  return (
    <motion.div className="flex flex-col items-center z-20 relative" variants={itemVariants}>
      {/* Date placeholder for consistent spacing */}
      <div className="min-w-[100px] text-center mb-4">
        <span className="text-gray-400 text-sm">Next</span>
      </div>

      <motion.button
        onClick={onAddStep}
        className="w-8 h-8 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center text-gray-500 hover:border-gray-300 hover:text-gray-300 transition-all"
        whileHover={{ scale: 1.1, borderColor: "#ffffff", color: "#ffffff" }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus size={16} />
      </motion.button>

      {/* Title placeholder for consistent spacing */}
      <div className="mt-4 min-w-[100px] text-center">
        <span className="text-gray-500 font-medium whitespace-nowrap">Add Step</span>
      </div>
    </motion.div>
  )
}
