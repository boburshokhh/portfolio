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
  const [codeLines, setCodeLines] = useState<Array<{ text: string; x: number; y: number; id: number }>>([])
  const [scrollOpacity, setScrollOpacity] = useState(0)

  // Обновляем прозрачность при скролле
  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(window.scrollY / 1000, 0.15)
      setScrollOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Генерируем статический фоновый код
  const backgroundCode = Array.from({ length: 30 }, (_, i) => ({
    text: codeSnippets[i % codeSnippets.length],
    left: Math.random() * 100,
    top: Math.random() * 100,
  }))

  // Генерируем новые строки кода при движении мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) { // Увеличили частоту появления
        const newLine = {
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: e.clientX,
          y: e.clientY,
          id: Date.now()
        }
        setCodeLines(prev => [...prev.slice(-15), newLine]) // Уменьшили количество строк
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
              left: `${code.left}%`,
              top: `${code.top}%`,
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
            x: line.x - 50, // Центрируем относительно курсора
            y: line.y - 10,
            opacity: 1,
            scale: 0.8
          }}
          animate={{ 
            opacity: 0,
            y: line.y - 150, // Увеличили дистанцию движения
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