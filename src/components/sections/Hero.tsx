'use client'

import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { GlowingCircle } from "../ui/GlowingCircle"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            HELLO
            <span className="block text-primary">I'M GLEB KOSTRUBOV</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg">
              CONTACT ME
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <GlowingCircle />
          </div>
          <motion.div 
            className="relative z-10 w-[357px] h-[286px] rounded-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 backdrop-blur-sm" />
            
            <div className="absolute top-2 right-2 bg-primary/20 px-2 py-1 rounded-md text-xs backdrop-blur-sm">
              357 × 286
            </div>
            <div className="absolute top-2 left-2 flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute left-[-20px] top-1/4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-primary/20"
            >
              UX
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute right-[-20px] top-1/3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-primary/20"
            >
              UI
            </motion.div>
            
            <div className="relative w-full h-full bg-background/50 backdrop-blur-md">
              <Image
                src="/avatar-placeholder.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 