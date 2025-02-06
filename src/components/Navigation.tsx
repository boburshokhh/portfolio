'use client'

import { motion } from "framer-motion"
import { Terminal, Menu, X } from "lucide-react"
import { useScrollTo } from "@/hooks/useScrollTo"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useState } from "react"

const navigationItems = [
  { href: '#home', label: '<Главная/>' },
  { href: '#about', label: '<Обо мне/>' },
  { href: '#services', label: '<Услуги/>' },
  { href: '#portfolio', label: '<Проекты/>' },
  { href: '#experience', label: '<Опыт/>' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const scrollTo = useScrollTo()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-primary group"
        >
          <div className="relative">
            <Terminal className="w-5 h-5 relative z-10" />
            <motion.div
              className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-lg font-bold font-mono relative">
            netronic
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary/40 group-hover:w-full transition-all duration-300"
            />
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <motion.li key={item.href}>
              <motion.button
                onClick={() => scrollTo(item.href.replace('#', ''))}
                className={`
                  px-4 py-2 rounded-lg relative font-mono text-sm
                  transition-colors group
                  ${activeSection === item.href.replace('#', '') 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-primary'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNavSection"
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10">
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary/40 group-hover:w-full transition-all duration-300"
                  />
                </span>
              </motion.button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary p-2 hover:bg-primary/10 rounded-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-primary/20"
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <motion.button
                  onClick={() => {
                    scrollTo(item.href.replace('#', ''))
                    setIsMenuOpen(false)
                  }}
                  className={`
                    w-full text-left px-4 py-2 rounded-lg relative font-mono
                    transition-colors
                    ${activeSection === item.href.replace('#', '') 
                      ? 'text-primary bg-primary/5' 
                      : 'text-gray-400 hover:text-primary hover:bg-primary/5'
                    }
                  `}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Animated Border Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
        animate={{
          scaleX: [0, 1, 0],
          x: ['-100%', '0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.header>
  )
} 