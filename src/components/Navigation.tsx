'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-md" />
      
      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between h-20">
          {/* Logo with glow effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link href="/" className="text-primary font-bold text-2xl relative group">
              <span className="relative z-10">netronic</span>
              <motion.div
                className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
          </motion.div>
          
          {/* Navigation Items */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item.href}
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors py-2 px-3 rounded-lg relative"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover background effect */}
                  {hoveredItem === item.href && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  {/* Active indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredItem === item.href ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.li>
            ))}
            
            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg border border-primary/30 backdrop-blur-sm transition-colors relative group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 group-hover:opacity-100 opacity-0 transition-opacity" />
              </Link>
            </motion.div>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
} 