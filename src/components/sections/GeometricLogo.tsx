"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function GeometricLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-10 sm:h-12 md:h-14 w-auto"
    >
      <Image
        src="/logo.png"
        alt="Haestus Logo"
        width={200}
        height={56}
        priority
        className="h-full w-auto object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </motion.div>
  )
}
