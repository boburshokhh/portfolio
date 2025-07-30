'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const codeSnippets = [
  "const universe = new Universe();",
  "function createStar(mass, luminosity) {",
  "while (true) { explore(); }",
  "if (dreams > reality) {",
  "async function buildFuture() {",
  "class Innovation extends Technology {",
  "const infinity = possibilities.length;",
  "function solve(problem: Complex) {",
  "interface Future extends Present {",
  "type Success = Never | Give | Up;",
  "const life = new Adventure();",
  "export default function Dream() {",
]

export function BackgroundCode() {
  const [mounted, setMounted] = useState(false)
  const [codeLines, setCodeLines] = useState<Array<{ text: string; x: number; y: number; id: number }>>([])
  const [scrollOpacity, setScrollOpacity] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Обновляем прозрачность при скролле
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const opacity = Math.min(window.scrollY / 1000, 0.15)
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // Генерируем статический фоновый код с детерминированным начальным состоянием
  const [backgroundCode, setBackgroundCode] = useState<Array<{ text: string; left: number; top: number }>>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      text: codeSnippets[i % codeSnippets.length],
      left: Math.floor((i * 333) % 10000) / 100,
      top: Math.floor((i * 250) % 10000) / 100,
    }))
  })

  // Генерируем новые строки кода при движении мыши
  useEffect(() => {
    if (!mounted) return

    let lastTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime > 200) {
        lastTime = now
        const newLine = {
          text: codeSnippets[Math.floor((e.clientX + e.clientY) % codeSnippets.length)],
          x: e.clientX,
          y: e.clientY,
          id: now + (e.clientX + e.clientY)
        }
        setCodeLines(prev => [...prev.slice(-15), newLine])
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Статический фоновый код */}
      <div 
        className="absolute inset-0 font-mono text-primary/10 text-sm"
        style={{ opacity: scrollOpacity }}
      >
        {backgroundCode.map((code, i) => (
          <div
            key={i}
            className="absolute transform -rotate-12"
            style={{
              left: `${Math.floor(code.left)}%`,
              top: `${Math.floor(code.top)}%`,
            }}
          >
            {code.text}
          </div>
        ))}
      </div>

      {/* Анимированные строки кода при движении мыши */}
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-primary/20 text-sm whitespace-nowrap"
          initial={{ 
            x: line.x - 50,
            y: line.y - 10,
            opacity: 1,
            scale: 0.8
          }}
          animate={{ 
            opacity: 0,
            y: line.y - 150,
            scale: 1.2
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          {line.text}
        </motion.div>
      ))}

      {/* Дополнительный слой с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
    </div>
  )
} 