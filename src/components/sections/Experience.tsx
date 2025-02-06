'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Terminal } from "lucide-react"

const experiences = [
  {
    period: "2024 - Present",
    role: "Frontend Developer",
    company: "Freelance",
    description: "Разрабатываю современные веб-приложения с использованием React, Next.js и Vue.js",
    tasks: [
      "Реализовал адаптивные дизайны",
      "Оптимизировал производительность",
      "Интегрировал REST API",
    ]
  },
  {
    period: "2023 - 2024",
    role: "Web Developer",
    company: "RealSoft",
    description: "Разрабатываю полноценные веб-приложения и изучаю новые технологии",
    tasks: [
      "Создал портфолио проектов",
      "Освоил современные фреймворки",
      "Практиковал принципы чистого кода",
    ]
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-background/60 px-4 py-2 border-b border-primary/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-primary/60" />
                <span className="text-xs text-primary/60 font-mono">gleb@arch-portfolio</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="text-primary/60">[gleb@arch-portfolio</span> <span className="text-primary">~</span><span className="text-primary/60">]$</span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  cat experience.md
                </motion.span>
              </motion.div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.5 }}
                  className="mt-6"
                >
                  <TypewriterText 
                    text={`# ${exp.period} - ${exp.role} @ ${exp.company}`}
                    delay={1.5 + index * 0.5}
                    className="text-green-400 font-bold"
                  />
                  
                  <TypewriterText 
                    text={exp.description}
                    delay={2 + index * 0.5}
                    className="text-gray-400 mt-2"
                  />

                  <div className="ml-4 mt-2">
                    {exp.tasks.map((task, taskIndex) => (
                      <TypewriterText
                        key={taskIndex}
                        text={`> ${task}`}
                        delay={2.5 + index * 0.5 + taskIndex * 0.3}
                        className="text-primary/80"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Cursor Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 4 }}
                className="mt-4"
              >
                <span className="text-primary/60">[gleb@arch-portfolio</span> <span className="text-primary">~</span><span className="text-primary/60">]$</span>{" "}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary/50 ml-1"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Компонент для эффекта печатания текста
function TypewriterText({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  const letters = text.split("")
  
  return (
    <p className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.03,
            ease: "easeInOut"
          }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  )
} 