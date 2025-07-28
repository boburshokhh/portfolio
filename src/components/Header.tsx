'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const menuItems = [
  { title: "HOME", href: "#home" },
  { title: "ABOUT", href: "#about" },
  { title: "PORTFOLIO", href: "#portfolio" },
  { title: "CONTACT", href: "#contact" }
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeGlitch, setActiveGlitch] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/20' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип */}
          <motion.div
            className="text-xl font-bold font-mono relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">&lt;</span>
            <motion.span
              className="relative inline-block"
              onHoverStart={() => {
                const glitchInterval = setInterval(() => {
                  setActiveGlitch(Math.random())
                }, 100)
                setTimeout(() => clearInterval(glitchInterval), 500)
              }}
            >
              BOBUR.DEV
              <motion.span
                className="absolute left-0 right-0 text-[#ff0000] mix-blend-screen"
                animate={{
                  opacity: activeGlitch ? 0.5 : 0,
                  x: activeGlitch ? [-2, 2] : 0,
                  y: activeGlitch ? [-2, 2] : 0,
                }}
                transition={{
                  duration: 0.1,
                  repeat: activeGlitch ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                BOBUR.DEV
              </motion.span>
              <motion.span
                className="absolute left-0 right-0 text-[#00ff00] mix-blend-screen"
                animate={{
                  opacity: activeGlitch ? 0.5 : 0,
                  x: activeGlitch ? [-2, 2] : 0,
                  y: activeGlitch ? [-2, 2] : 0,
                }}
                transition={{
                  duration: 0.1,
                  repeat: activeGlitch ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                BOBUR.DEV
              </motion.span>
            </motion.span>
            <span className="text-primary">/&gt;</span>
          </motion.div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 bg-primary/10 -z-10"
                  initial={false}
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                  }}
                />
                <motion.span
                  className="inline-block font-mono text-sm relative"
                  whileHover={{
                    color: "#00ff00",
                    textShadow: "0 0 8px rgba(0, 255, 0, 0.5)",
                  }}
                >
                  <span className="text-primary/50">{'>'}</span> {item.title}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Мобильное меню */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
            <div className="space-y-1.5">
              <motion.div className="w-5 h-0.5 bg-primary rounded" />
              <motion.div className="w-4 h-0.5 bg-primary rounded" />
              <motion.div className="w-5 h-0.5 bg-primary rounded" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Декоративная линия */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          scaleX: [0.5, 1.5, 0.5],
          opacity: [0.2, 0.5, 0.2],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </motion.header>
  )
} 