"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import PlatformIntro from "@/components/platform-intro"
import ServiceFeatures from "@/components/service-features"
import Differentiation from "@/components/differentiation"
import Testimonials from "@/components/testimonials"
import JoinProcess from "@/components/join-process"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ClientPage() {
  // Add this useEffect to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PlatformIntro />
        <ServiceFeatures />
        <Differentiation />
        <Testimonials />
        <JoinProcess />
        <div className="bg-gray-50">
          <FAQ />
          <Footer />
        </div>
      </main>
    </div>
  )
}
