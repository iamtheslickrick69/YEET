"use client"

import { useState, useEffect, useCallback } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      setMatches(media.matches)
      media.addEventListener("change", handleChange)
      return () => media.removeEventListener("change", handleChange)
    }
    return undefined
  }, [query, handleChange])

  return matches
}
