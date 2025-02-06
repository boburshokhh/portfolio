'use client'

import { motion } from "framer-motion"

export function GlowingCircle() {
  return (
    <div className="relative w-[500px] h-[500px]">
      {/* Основной круг с градиентом */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 blur-2xl"
      />
      
      {/* Внутренний светящийся круг */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 rounded-full bg-gradient-radial from-primary/40 via-primary/20 to-transparent"
      />
      
      {/* Анимированная пульсация */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-primary/10 blur-xl"
      />
    </div>
  )
} 