"use client"

import { useRef, useEffect } from "react"
import { useScroll, useTransform, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhyESGSection from "@/components/WhyESGSection"
import RegulatoryCoverageSection from "@/components/RegulatoryCoverageSection"
import TeamAdvantagesSection from "@/components/TeamAdvantagesSection"
import UserProfilesSection from "@/components/UserProfilesSection"
import WaitlistWithFAQSection from "@/components/WaitlistWithFAQSection"
import Footer from "@/components/Footer"
import InvestorCTA from "@/components/InvestorCTA"

export default function LandingClient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Error suppression for external libraries
  useEffect(() => {
    const originalError = console.error
    console.error = (...args) => {
      const message = args[0]?.toString() || ""
      const errorsToSuppress = [
        "MetaMask extension not found",
        "ChromeTransport",
        "connectChrome error",
        "Extension context invalidated",
        "Could not establish connection",
      ]
      if (!errorsToSuppress.some((error) => message.includes(error))) {
        originalError.apply(console, args)
      }
    }
    return () => {
      console.error = originalError
    }
  }, [])

  // SEO: Page view tracking
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        content_group1: "Landing Page",
        content_group2: "Maritime Compliance",
        content_group3: "Homepage",
      }

      if (typeof window.gtag === "function") {
        window.gtag("config", "GA_MEASUREMENT_ID", pageData)
      }

      console.log("Page view tracked:", pageData)
    }
  }, [])

  const springConfig = { stiffness: 120, damping: 40, restDelta: 0.001, mass: 1 }

  const heroParallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, 0]), springConfig)
  const section1Parallax = useSpring(useTransform(scrollYProgress, [0.1, 0.5], [0, -2]), springConfig)
  const section2Parallax = useSpring(useTransform(scrollYProgress, [0.2, 0.6], [0, -1]), springConfig)
  const section3Parallax = useSpring(useTransform(scrollYProgress, [0.3, 0.7], [0, -1]), springConfig)
  const section4Parallax = useSpring(useTransform(scrollYProgress, [0.4, 0.8], [0, 0]), springConfig)
  const section5Parallax = useSpring(useTransform(scrollYProgress, [0.5, 0.9], [0, 0]), springConfig)
  const footerParallax = useSpring(useTransform(scrollYProgress, [0.7, 1], [0, 0]), springConfig)

  return (
    <div ref={containerRef} className="min-h-screen relative bg-[#0F1114]">
      <nav role="navigation" aria-label="Main navigation">
        <Navbar />
      </nav>

      <main id="main-content" role="main" aria-label="EPℇC Corvux Maritime Compliance Platform">
        <header className="parallax-section" role="banner">
          <HeroSection parallaxY={heroParallax} />
        </header>

        <section className="parallax-section">
          <WhyESGSection parallaxY={section1Parallax} />
        </section>

        <section className="parallax-section">
          <RegulatoryCoverageSection parallaxY={section2Parallax} />
        </section>

        <section className="parallax-section">
          <TeamAdvantagesSection parallaxY={section3Parallax} /> as any
        </section>

        <section className="parallax-section">
          <UserProfilesSection parallaxY={section4Parallax} />
        </section>

        <section className="parallax-section">
          <WaitlistWithFAQSection parallaxY={section5Parallax} />
        </section>

        <section className="parallax-section">
          <InvestorCTA />
        </section>
      </main>

      <footer role="contentinfo" className="parallax-section">
        <Footer parallaxY={footerParallax} />
      </footer>
    </div>
  )
}

declare global {
    interface Window {
      gtag: (...args: any[]) => void
    }
  }