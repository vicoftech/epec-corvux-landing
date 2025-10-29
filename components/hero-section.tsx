"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import DemoRequestForm from "./demo-request-form"

interface HeroSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function HeroSection({ parallaxY }: HeroSectionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["Your Advantage", "Your Edge", "Your Solution", "Your Future"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 2500) // Cambia cada 2.5 segundos

    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-section"
      style={{
        y: parallaxY,
        marginBottom: "-4px", // Elimina gap con sección siguiente
      }}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920&text=Ha+Long+Bay+Landscape"
          onError={(e) => {
            console.log("Video failed to load, falling back to poster image")
          }}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/463080_Drone_Landscape_Ha_Long_Bay_3840x2160%20%281%29%20%281%29-aIW6IjdlGf08FIO58gWKkhoemSVNJ0.mp4"
            type="video/mp4"
          />
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Ha+Long+Bay+Landscape"
            alt="Ha Long Bay landscape"
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay mejorado para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-48 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            {/* Headline principal */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-bricolage text-white mb-6"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Make Compliance{" "}
              <span className="text-[#F2F5F7] font-extrabold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-satoshi"
              style={{
                textShadow: "0 1px 2px rgba(0,0,0,0.8)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn maritime ESG obligations into operational clarity. Built for{" "}
              <span className="text-white font-medium">MRV, ETS, DCS, and FuelEU</span> — all in one place.
            </motion.p>

            {/* Festina lente más visible */}
            <motion.div
              className="mt-5 text-center text-white/80 text-sm font-sora tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              <span className="italic font-light">Festina lente</span>
              <span className="text-white/60 mx-3">–</span>
              <span className="font-normal">deliberate moves in a fast-changing world</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <DemoRequestForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
