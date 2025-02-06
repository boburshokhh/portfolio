'use client'

import { motion } from "framer-motion"
import { SiVuedotjs, SiReact, SiPostgresql, SiNodedotjs, SiExpress, SiTypescript, SiTailwindcss, SiNextdotjs, SiGit, SiDocker } from "react-icons/si"

const technologies = [
  {
    icon: SiVuedotjs,
    name: "Vue.js",
    color: "#42b883",
    position: "top-[10%] right-[15%] sm:top-[15%] sm:right-[20%]",
    delay: 0.2,
    rotate: 15,
  },
  {
    icon: SiReact,
    name: "React",
    color: "#61dafb",
    position: "top-[40%] right-[0%] sm:top-[50%] sm:right-[5%]",
    delay: 0.4,
    rotate: -15,
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
    position: "bottom-[10%] right-[15%] sm:bottom-[15%] sm:right-[20%]",
    delay: 0.6,
    rotate: -25,
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
    position: "top-[10%] left-[15%] sm:top-[15%] sm:left-[20%]",
    delay: 0.8,
    rotate: -15,
  },
  {
    icon: SiExpress,
    name: "Express",
    color: "#ffffff",
    position: "bottom-[10%] left-[15%] sm:bottom-[15%] sm:left-[20%]",
    delay: 1,
    rotate: 25,
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
    position: "top-[25%] left-[0%] sm:left-[5%]",
    delay: 1.2,
    rotate: 20,
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
    position: "bottom-[25%] left-[0%] sm:left-[5%]",
    delay: 1.4,
    rotate: -20,
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#ffffff",
    position: "top-[25%] right-[0%] sm:right-[5%]",
    delay: 1.6,
    rotate: -20,
  },
  {
    icon: SiGit,
    name: "Git",
    color: "#F05032",
    position: "bottom-[25%] right-[0%] sm:right-[5%]",
    delay: 1.8,
    rotate: 20,
  },
  {
    icon: SiDocker,
    name: "Docker",
    color: "#2496ED",
    position: "bottom-[50%] left-[0%] sm:left-[5%]",
    delay: 2,
    rotate: 0,
  },
]

export function TechIcons() {
  return (
    <div className="absolute inset-0 -z-10">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0, rotate: tech.rotate * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: tech.rotate }}
          transition={{
            delay: tech.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className={`absolute ${tech.position}`}
        >
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 20px rgba(0, 178, 255, 0.5)" 
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -8, 0],
              rotate: [tech.rotate, tech.rotate + 5, tech.rotate - 5, tech.rotate],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            className="relative group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />

            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            />

            <div
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-background/80 backdrop-blur-sm 
                flex items-center justify-center border border-primary/20 hover:border-primary 
                transition-colors relative hover:bg-primary/10 
                group-hover:shadow-[0_0_20px_rgba(0,178,255,0.3)]"
            >
              <tech.icon
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300 
                  group-hover:scale-110 group-hover:rotate-12"
                style={{ color: tech.color }}
              />

              <motion.div
                className="absolute inset-0 border border-primary/20 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-background/90 
                backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm 
                text-primary whitespace-nowrap border border-primary/20 shadow-lg shadow-primary/20"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
} 