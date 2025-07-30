'use client'

import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { GlowingCircle } from "../ui/GlowingCircle"
import { TechIcons } from "../ui/TechIcons"
import { useState, useEffect } from "react"

const colors = {
  primary: 'rgb(0, 178, 255)',
}

// Добавим функцию для генерации бинарного кода
function generateBinaryString(length: number, seed: number) {
  return Array.from({ length }, (_, i) => ((seed + i) % 2) ? '1' : '0').join('')
}

export function Hero() {
  const [scrambledHello, setScrambledHello] = useState("ПРИВЕТ")
  const [scrambledName, setScrambledName] = useState("Я БОБУР ТУХТАМУРОДОВ")
  const originalHello = "ПРИВЕТ"
  const originalName = "Я БОБУР ТУХТАМУРОДОВ"
  
  // Эффект скремблинга текста
  const scrambleText = (text: string, seed: number) => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    return text
      .split('')
      .map((char, i) => char === ' ' ? ' ' : chars[Math.floor((seed + i) % chars.length)])
      .join('')
  }

  // Добавим состояние для бинарных строк с детерминированным начальным состоянием
  const [binaryLines, setBinaryLines] = useState<Array<{ text: string; x: number; y: number; id: number }>>(() => {
    // Создаем детерминированное начальное состояние
    return Array.from({ length: 10 }, (_, i) => ({
      text: generateBinaryString(15, i * 1000),
      x: Math.floor((i * 3330) % 10000) / 100, // Более точное вычисление
      y: Math.floor((i * 2500) % 10000) / 100, // Более точное вычисление
      id: i * 1000
    }))
  })

  // Генерируем новые бинарные строки
  useEffect(() => {
    let counter = 0
    const interval = setInterval(() => {
      const seed = counter + Date.now()
      const newLine = {
        text: generateBinaryString(Math.floor((seed % 20) + 10), seed),
        x: Math.floor((seed * 333) % 10000) / 100, // Более точное вычисление
        y: Math.floor((seed * 250) % 10000) / 100, // Более точное вычисление
        id: seed
      }
      setBinaryLines(prev => [...prev.slice(-50), newLine]) // Храним последние 50 строк
      counter++
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let counter = 0
    const maxIterations = 10
    
    const animate = () => {
      interval = setInterval(() => {
        if (counter < maxIterations) {
          setScrambledHello(prev => 
            prev.split('').map((char, i) => 
              originalHello[i] === char ? char : scrambleText('X', counter + i)).join('')
          )
          setScrambledName(prev => 
            prev.split('').map((char, i) => 
              originalName[i] === char ? char : scrambleText('X', counter + i)).join('')
          )
          counter++
        } else {
          setScrambledHello(originalHello)
          setScrambledName(originalName)
          clearInterval(interval)
        }
      }, 50)
    }

    animate()
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-xl mx-auto lg:mx-0"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative group font-mono"
          >
            {/* Terminal-like background */}
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-background/80 border border-primary/20 rounded-lg -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                borderColor: "rgba(0, 178, 255, 0.5)",
                boxShadow: "0 0 20px rgba(0, 178, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Cursor effect */}
                <motion.span
              className="absolute top-0 left-0 w-2 h-[80%] bg-primary/50"
              animate={{
                opacity: [1, 0],
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Scrambled text effect */}
            <motion.div className="relative">
                <motion.span
                className="block mb-2 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-primary/50">{'>'}</span> {scrambledHello}
              </motion.span>
                  <motion.span
                className="block text-primary font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-primary/50">{'>'}</span> {scrambledName}
                </motion.span>
            </motion.div>
          </motion.h1>
          
          <motion.div
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 relative group font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              color: "#00ff00",
              textShadow: "0 0 8px rgba(0, 255, 0, 0.5)",
            }}
          >
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-background/80 border border-primary/20 rounded-lg -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                borderColor: "rgba(0, 255, 0, 0.3)",
                boxShadow: "0 0 20px rgba(0, 255, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-primary/50">{'>'}</span> Я занимаюсь веб-дизайном, фронтендом и бэкендом уже более года. 
            Нужно ли вам дизайн сайта, верстка или возможно полноценный сайт? Тогда свяжитесь со мной.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-2 bg-[#00ff00]/10 rounded-lg blur-xl -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.1,
                background: "radial-gradient(circle, rgba(0,255,0,0.2) 0%, rgba(0,255,0,0) 70%)"
              }}
              transition={{ duration: 0.3 }}
            />
            <Button size="lg" className="font-mono">
              {'>'} СВЯЗАТЬСЯ СО МНОЙ
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-[500px] mx-auto"
        >
          <div className="absolute inset-0 flex items-center justify-center scale-90 sm:scale-100">
            <GlowingCircle />
          </div>
          
          <TechIcons />
          
          <motion.div 
            className="relative z-10 w-[280px] sm:w-[357px] aspect-square rounded-full overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Внутренняя подсветка */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent"
              animate={{
                opacity: [0.5, 0.8],
                scale: [0.8, 1.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            {/* Анимированная круговая граница */}
            <motion.div
              className="absolute inset-[3px] rounded-full border-2 border-transparent"
              style={{
                background: `conic-gradient(from 0deg, transparent, ${colors.primary}, transparent)`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Внутренний контейнер для фото */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-background/50 backdrop-blur-sm">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Бинарный код на фоне */}
                <div className="absolute inset-0 overflow-hidden">
                  {binaryLines.map((line) => (
                    <motion.div
                      key={line.id}
                      className="absolute font-mono text-xs sm:text-sm whitespace-nowrap"
                      style={{
                  left: `${Math.floor(line.x)}%`,
                  top: `${Math.floor(line.y)}%`,
                      }}
                      initial={{ 
                        opacity: 0,
                        scale: 0.8 
                      }}
                      animate={{ 
                        opacity: [0, 0.15, 0],
                        scale: 1,
                        color: ['#00B2FF', '#80D9FF']
                      }}
                      transition={{
                        duration: 3,
                        ease: "linear"
                      }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </div>

                {/* Цифровой циферблат */}
                <div className="relative w-full h-full">
                  {/* Круговые линии */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`circle-${i}`}
                      className="absolute inset-0"
                      style={{
                        border: `${1 + i}px solid ${colors.primary}`,
                        opacity: 0.1 + i * 0.1,
                        borderRadius: '50%',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}

                  {/* Цифровые элементы */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`digit-${i}`}
                      className="absolute w-8 h-8 flex items-center justify-center"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 12 - Math.PI / 2)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 12 - Math.PI / 2)}%`,
                      }}
                    >
                      <motion.div
                        className="text-primary text-sm font-mono"
                        animate={{
                          opacity: [0.3, 1],
                          textShadow: [
                            '0 0 5px rgba(0,178,255,0.3)',
                            '0 0 10px rgba(0,178,255,0.8)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.2,
                        }}
                      >
                        {i === 0 ? '12' : i}
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Вращающиеся линии */}
                  {[...Array(60)].map((_, i) => (
                    <motion.div
                      key={`line-${i}`}
                      className="absolute left-1/2 top-1/2 w-0.5 h-[46%] origin-bottom"
                      style={{
                        transform: `rotate(${i * 6}deg)`,
                        background: `linear-gradient(to top, ${colors.primary}${i % 5 === 0 ? '40' : '20'}, transparent)`,
                      }}
                    />
                  ))}

                  {/* Центральные стрелки */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-0.5 h-[45%] bg-gradient-to-t from-primary via-primary to-transparent" />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3600,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-1 h-[35%] bg-gradient-to-t from-primary via-primary to-transparent" />
                  </motion.div>

                  {/* Центральная точка */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-primary"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(0,178,255,0.5)',
                        '0 0 20px rgba(0,178,255,0.8)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
                
                {/* Дополнительный слой с градиентом для лучшей читаемости */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/50" />
                
                {/* Сетка поверх всего */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
            </div>

            {/* Светящиеся точки по кругу */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary"
                style={{
                  left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  opacity: [0.2, 1],
                  scale: [0.8, 1.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 