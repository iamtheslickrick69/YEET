"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonProps {
  direction: "prev" | "next"
  onClick: () => void
}

export function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  const positionClass =
    direction === "prev" ? "left-0 -translate-x-4 md:translate-x-0" : "right-0 translate-x-4 md:translate-x-0"

  return (
    <motion.button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Icon size={16} />
    </motion.button>
  )
}
