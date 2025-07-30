'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

import portfoolio1 from "../../../public/images/2025-02-07_00-02-07.png"
import portfoolio2 from "../../../public/images/1.png"
// Тестовые данные для портфолио
const portfolioItems = [
  {
    id: 1,
    title: "Лендинг страница онлайн магазина",
    description: "Современный лендинг для онлайн магазина с анимациями и интерактивными элементами. Разработан с использованием Next.js и Framer Motion.",
    image: portfoolio1,
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    liveUrl: "https://e-commerce-hh-bobur.netlify.app/",
    githubUrl: "https://github.com/boburshokhh/e-commerce-hh",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Платформа расчета режима насосной станции",
    description: "Полнофункциональная платформа для рачсета режима насосное станции нефтепровода",
    image: portfoolio2,
    tags: ["Vue.js", "Pinia", "Vuetify", "NaiveUI","Vue Router"],
    liveUrl: "https://pump-chart-table-rsu.netlify.app/",
    githubUrl: "https://github.com/boburshokhh/pump",
    category: "Full Stack",
  },
  // Добавьте больше проектов по необходимости
]

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? portfolioItems.length - 1 
        : prevIndex + newDirection >= portfolioItems.length 
          ? 0 
          : prevIndex + newDirection
    ))
  }

  const currentItem = portfolioItems[currentIndex]

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary">&lt;</span>
            Portfolio
            <span className="text-primary">/&gt;</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm hover:bg-primary/10 transition-colors group"
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.05 },
              tap: { scale: 0.95 }
            }}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-primary relative z-10" />
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              variants={{
                hover: {
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 rounded-full border border-primary/20" />
            </motion.div>
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 backdrop-blur-sm hover:bg-primary/10 transition-colors group"
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: { scale: 1.05 },
              tap: { scale: 0.95 }
            }}
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-primary relative z-10" />
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              variants={{
                hover: {
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 rounded-full border border-primary/20" />
            </motion.div>
          </motion.button>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                style={{
                  top: `${Math.floor((i * 500) % 10000) / 100}%`,
                  left: `${Math.floor((i * 700) % 10000) / 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, (i % 3 - 1) * 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Portfolio Item Container - обновим для лучшей адаптивности */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4"
              >
                {/* Image Section - обновим для лучшей адаптивности */}
                <div className="relative h-[200px] sm:h-[250px] lg:h-full rounded-lg overflow-hidden group">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Content Section - обновим для лучшей адаптивности */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 font-mono text-primary"
                  >
                    {currentItem.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6"
                  >
                    {currentItem.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentItem.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-4">
                    <motion.a
                      href={currentItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors text-primary border border-primary/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={currentItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/60 hover:bg-background/80 transition-colors border border-primary/20"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {portfolioItems.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 