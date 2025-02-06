'use client'

import { motion } from "framer-motion"
import { Code2, Layout, Smartphone, Palette, Server, Gauge } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Frontend",
    description: "Создание современных и отзывчивых пользовательских интерфейсов с использованием React, Vue.js и Next.js",
    color: "#00B2FF",
    delay: 0.2,
  },
  {
    icon: Server,
    title: "Backend",
    description: "Разработка надежных серверных решений на Node.js с Express и базами данных PostgreSQL",
    color: "#00ff00",
    delay: 0.4,
  },
  {
    icon: Smartphone,
    title: "Адаптивность",
    description: "Оптимизация под все устройства с pixel-perfect версткой и отзывчивым дизайном",
    color: "#FF3D00",
    delay: 0.6,
  },
  {
    icon: Gauge,
    title: "Производительность",
    description: "Оптимизация скорости загрузки и производительности для лучшего пользовательского опыта",
    color: "#FFD600",
    delay: 0.8,
  },
  {
    icon: Code2,
    title: "Чистый код",
    description: "Написание поддерживаемого и масштабируемого кода с современными практиками",
    color: "#FF00FF",
    delay: 1.0,
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Создание интуитивных интерфейсов с современными трендами в дизайне",
    color: "#00E5FF",
    delay: 1.2,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Grid */}
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
            Мои услуги
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Полный спектр услуг по разработке современных веб-приложений
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-6 bg-background/40 backdrop-blur-sm border border-primary/10 rounded-lg overflow-hidden">
                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1, ease: 'linear' }}
                />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full bg-background/80 rounded-full border border-primary/20 flex items-center justify-center">
                    <service.icon 
                      className="w-6 h-6" 
                      style={{ color: service.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 font-mono group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>

                {/* Terminal Line */}
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <code className="text-xs text-primary/60 font-mono">
                    $ ./execute_{service.title.toLowerCase()}.sh
                  </code>
                </div>

                {/* Glowing Corner */}
                <div className="absolute -top-px -right-px w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent blur-sm" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 