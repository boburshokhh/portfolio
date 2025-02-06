'use client'

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 hero-gradient"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] bg-[position:center] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000000_70%,transparent_100%)]" />
    </div>
  )
} 