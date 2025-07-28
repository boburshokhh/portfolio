'use client'

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:example@mail.com", label: "Email" },
]

// Добавим типы для цитат
type Quote = {
  text: string;
  author: string;
}

// Добавим хук для получения цитаты
function useRandomQuote() {
  const [quote, setQuote] = useState<Quote>({
    text: "Код - это поэзия, написанная логикой",
    author: "Неизвестный программист"
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const quotes = [
      {
        text: "Программирование - это искусство создавать невозможное",
        author: "Цифровой философ"
      },
      {
        text: "В мире кода каждая строка имеет значение",
        author: "Мудрый разработчик"
      },
      {
        text: "Баги - это не ошибки, а неожиданные возможности",
        author: "Оптимист-программист"
      },
      {
        text: "Чистый код сегодня - спокойный сон завтра",
        author: "Опытный разработчик"
      },
      {
        text: "Каждая строка кода - это шаг к совершенству",
        author: "Цифровой архитектор"
      }
    ];

    // Имитация API запроса
    setIsLoading(true);
    const randomIndex = Math.floor((Date.now() % quotes.length));
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { quote, isLoading };
}

export function Footer() {
  const { quote, isLoading } = useRandomQuote();
  
  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              top: `${(i * 6.67) % 100}%`,
              left: `${(i * 8.33) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 3 - 1) * 15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
              x: ['-100%', '0%', '100%'],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary font-mono relative group"
            >
              <div className="absolute -inset-2 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Terminal className="w-5 h-5 relative" />
              <span className="text-xl font-bold relative">
                netronic
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/40"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              <span className="text-primary/60">$</span> echo &ldquo;Creating digital experiences with code&rdquo;
            </p>
          </div>

          {/* Quote Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Цифровая мудрость
            </h3>
            <div className="bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg p-4 relative overflow-hidden group">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Quote content */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {isLoading ? (
                    <div className="space-y-2">
                      <motion.div
                        className="h-4 bg-primary/10 rounded"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="h-4 bg-primary/10 rounded w-2/3"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-400 italic mb-2">
                        <span className="text-primary/60">&gt;</span> {quote.text}
                      </p>
                      <p className="text-sm text-primary/60 font-mono">
                        ~ {quote.author}
                      </p>
                    </>
                  )}
                </motion.div>

                {/* Terminal decoration */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px w-full bg-primary/20"
                  animate={{
                    scaleX: [0, 1],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
                
                {/* Cursor */}
                <motion.div
                  className="absolute bottom-0 left-0 w-2 h-4 bg-primary/50"
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-primary font-mono">Соединяйтесь со мной</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-background/80 border border-primary/20 flex items-center justify-center group hover:bg-primary/10 transition-all relative"
                >
                  <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -inset-2 bg-primary/10 rounded-[20px] blur-lg opacity-0 group-hover:opacity-70 transition-opacity" />
                  <social.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-all relative z-10" />
                  {/* Hover tooltip with improved style */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: -5 }}
                    className="absolute -top-8 px-3 py-1 bg-background/90 border border-primary/20 rounded-full text-xs font-mono backdrop-blur-sm"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Terminal Section */}
          <div className="space-y-4">
            <div className="bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden group">
              {/* Terminal Header with improved style */}
              <div className="bg-background/60 px-4 py-2 border-b border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 group-hover:bg-red-500/80 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 group-hover:bg-yellow-500/80 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 group-hover:bg-green-500/80 transition-colors" />
                </div>
                <span className="text-xs text-primary/60 font-mono">contact.sh</span>
              </div>
              
              {/* Terminal Content with Matrix effect */}
              <div className="p-4 font-mono text-sm relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,178,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,178,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="relative">
                  <TypewriterText text="$ contact me" delay={0} />
                  <TypewriterText text="boburboy200216@mail.ru" delay={1} className="text-primary" />
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-primary/50 inline-block ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Separator */}
        <div className="relative h-px w-full my-8">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            <span className="text-primary/60">©</span> {new Date().getFullYear()} me_bobur. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm font-mono"
          >
            <span className="text-primary/60">&lt;/&gt;</span> with 💙 by Bobur
          </motion.p>
        </div>
      </div>
    </footer>
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