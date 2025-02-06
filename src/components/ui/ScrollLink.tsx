'use client'

import { motion } from "framer-motion"
import { useScrollTo } from "@/hooks/useScrollTo"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  isActive?: boolean
}

export function ScrollLink({ href, children, className = "", isActive = false }: ScrollLinkProps) {
  const scrollTo = useScrollTo()

  return (
    <motion.button
      onClick={() => scrollTo(href.replace('#', ''))}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${className}
        relative
        ${isActive ? 'text-primary' : ''}
      `}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute -inset-2 bg-primary/5 rounded-lg -z-10"
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
} 