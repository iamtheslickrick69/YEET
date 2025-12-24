"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface EditableTextProps {
  value: string
  onSave: (value: string) => void
  onCancel: () => void
  multiline?: boolean
  className?: string
}

export default function EditableText({ value, onSave, onCancel, multiline = false, className }: EditableTextProps) {
  const [text, setText] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      if (!multiline) {
        const input = inputRef.current as HTMLInputElement
        input.setSelectionRange(value.length, value.length)
      }
    }
  }, [value, multiline])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSave(text)
    } else if (e.key === "Escape") {
      e.preventDefault()
      onCancel()
    }
  }

  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {multiline ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "bg-black border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-white resize-none text-sm md:text-base",
            className,
          )}
          rows={3}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "bg-black border border-gray-700 rounded px-2 py-1 text-white focus:outline-none focus:border-white text-sm md:text-base",
            className,
          )}
        />
      )}
      <div className="flex flex-col ml-2 gap-1">
        <motion.button
          onClick={() => onSave(text)}
          className="p-1 bg-black border border-gray-700 rounded hover:bg-gray-900 transition-colors"
          aria-label="Save"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(22, 22, 22, 1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Check size={14} className="text-green-500" />
        </motion.button>
        <motion.button
          onClick={onCancel}
          className="p-1 bg-black border border-gray-700 rounded hover:bg-gray-900 transition-colors"
          aria-label="Cancel"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(22, 22, 22, 1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={14} className="text-gray-400" />
        </motion.button>
      </div>
    </motion.div>
  )
}
