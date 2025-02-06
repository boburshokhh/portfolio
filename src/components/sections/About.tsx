'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import avatarImage   from "../../../public/images/photo_2025-02-06_22-51-09.jpg"
export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary">&lt;</span>
            Обо мне
            <span className="text-primary">/&gt;</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-[400px] mx-auto">
              {/* Decorative Circles */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Большой центральный круг */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Орбитальные круги */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute -left-2 -top-2 w-4 h-4 bg-primary/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute -right-2 -bottom-2 w-4 h-4 bg-primary/20 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>

                {/* Маленькие плавающие круги */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
                  animate={{
                    y: [-10, 10],
                    x: [-10, 10],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
                  animate={{
                    y: [10, -10],
                    x: [10, -10],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Пульсирующие круги */}
                <motion.div
                  className="absolute top-1/3 right-1/3 w-32 h-32 border border-primary/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-primary/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Дополнительные движущиеся круги */}
                <motion.div
                  className="absolute top-[15%] right-[20%] w-3 h-3 bg-primary/20 rounded-full blur-sm"
                  animate={{
                    y: [-20, 20],
                    x: [-10, 10],
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                />

                <motion.div
                  className="absolute bottom-[20%] left-[15%] w-2 h-2 bg-primary/30 rounded-full blur-sm"
                  animate={{
                    y: [10, -20, 10],
                    x: [-15, 15, -15],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.div
                  className="absolute top-[40%] right-[30%] w-1.5 h-1.5 bg-primary/40 rounded-full blur-sm"
                  animate={{
                    y: [-15, 15],
                    x: [10, -10],
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.div
                  className="absolute bottom-[35%] right-[25%] w-2 h-2 bg-primary/25 rounded-full blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    x: [-20, 0, -20],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />

                {/* Круги с круговым движением */}
                <motion.div
                  className="absolute top-[30%] left-[25%] w-2 h-2 bg-primary/30 rounded-full blur-sm"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  style={{
                    rotate: 0,
                    transformOrigin: "50px 50px",
                  }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                <motion.div
                  className="absolute bottom-[40%] right-[20%] w-1.5 h-1.5 bg-primary/35 rounded-full blur-sm"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  style={{
                    rotate: 0,
                    transformOrigin: "-30px -30px",
                  }}
                  transition={{
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Группа связанных кругов */}
                <motion.div
                  className="absolute top-[45%] left-[35%] flex gap-1"
                  animate={{
                    y: [-5, 5],
                    x: [-5, 5],
                    rotate: [0, 45, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-1 h-1 bg-primary/40 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-primary/40 rounded-full blur-sm"
                    animate={{
                      scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Соединительные линии */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                {/* Glowing Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "linear-gradient(45deg, rgba(0,178,255,0.3) 0%, transparent 100%)",
                  }}
                />

                {/* Image Placeholder (замените на свое изображение) */}
                <div className="relative w-full h-full bg-background/80 backdrop-blur-sm border border-primary/20">
                  <Image
                    src={avatarImage}
                    alt="Profile"
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  22 y.o
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-primary/20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Ташкент, Узбекистан
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="relative bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-background/60 px-4 py-2 border-b border-primary/20 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="ml-4 text-xs text-primary/60 font-mono">about.md</div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className="text-primary">$</span> <span className="text-green-400">cat</span> about.md
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mb-4"
                >
                  Привет всем! Так, вы уже знаете, что меня зовут Бобур. Немного обо мне: студент, 22 лет, нефтегазовый инженер. Я люблю творчество с детства. Я живу в Ташкенте, Узбекистан.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 mb-4"
                >
                  Все это элементарно - мне это нравится, профессия будущего, благодаря которой я могу обеспечить себя и осуществить свою мечту - путешествовать, в данный момент я специализируюсь в веб-дизайне, фронтенде и бэкенде, создании полноценных сайтов.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-400"
                >
                  <p className="mb-2">Почему вам стоит выбрать меня?</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Я подхожу к каждому заказу с большой ответственностью и любовью</li>
                    <li>Хочу сделать себе имя, исключить плагиат</li>
                    <li>Полностью изучаю проект, клиента и его целевую аудиторию</li>
                    <li>Работаю для качества, пытаясь сделать заказ уникальным</li>
                    <li>Учитываю все правки и пожелания</li>
                  </ul>
                </motion.div>

                {/* Cursor Animation */}
                <motion.div
                  className="w-2 h-4 bg-primary/50 mt-4"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 