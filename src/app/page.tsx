import { AnimatedBackground } from "@/components/ui/AnimatedBackground"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/sections/Hero"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  )
}
