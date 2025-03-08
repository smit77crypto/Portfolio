"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  // Check if we're on a touch device
  useEffect(() => {
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0
    }

    if (isTouchDevice()) {
      setHidden(true)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mix-blend-difference pointer-events-none z-50"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-purple-500/10 pointer-events-none z-40"
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          scale: clicked ? 0.5 : linkHovered ? 0.8 : 1,
          opacity: hidden ? 0 : linkHovered ? 0.5 : 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 1,
        }}
      />
    </>
  )
}

