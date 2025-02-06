import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Portfolio } from "@/components/sections/Portfolio"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
