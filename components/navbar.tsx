"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import RegulationsDropdown from "@/components/regulations-dropdown"
import DemoRequestForm from "./demo-request-form"

const regulations = [
  {
    name: "EU MRV",
    href: "/regulations/eu-mrv",
    description: "EU Monitoring, Reporting and Verification",
  },
  {
    name: "EU ETS",
    href: "/regulations/eu-ets",
    description: "EU Emissions Trading System",
  },
  {
    name: "IMO DCS",
    href: "/regulations/imo-dcs",
    description: "IMO Data Collection System",
  },
  {
    name: "THETIS-MRV",
    href: "/regulations/thetis-mrv",
    description: "THETIS MRV Platform",
  },
  {
    name: "FuelEU Maritime",
    href: "/regulations/fueleu-maritime",
    description: "FuelEU Maritime Regulation",
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    window.location.href = "mailto:hello@epec-corvux.com?subject=Contact%20from%20EPℇC%20Corvux%20Website"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(15,17,20,0.95)] backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-[rgba(15,17,20,0.85)] backdrop-blur-md border-b border-white/10"
      }`}
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-xl font-bold font-bricolage text-white transition-all duration-300 hover:scale-105 relative group"
          >
            EPℇC <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">Corvux</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#features"
              className="text-white/80 hover:text-white transition-all duration-300 relative group text-sm font-medium"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="text-white/80 hover:text-white transition-all duration-300">
              <RegulationsDropdown />
            </div>

            <Link
              href="#waitlist"
              className="text-white/80 hover:text-white transition-all duration-300 relative group text-sm font-medium"
            >
              Waitlist
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="#faq"
              className="text-white/80 hover:text-white transition-all duration-300 relative group text-sm font-medium"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <button
              onClick={handleContactClick}
              className="text-white/80 hover:text-white transition-all duration-300 relative group text-sm font-medium flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <DemoRequestForm />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[rgba(15,17,20,0.98)] backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#features"
                  className="text-white/80 hover:text-white transition-colors py-3 text-base font-medium border-b border-white/10 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>

                {/* Mobile Regulations Links */}
                <div className="py-3 border-b border-white/10">
                  <div className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wide">Regulations</div>
                  <div className="space-y-2 pl-4">
                    {regulations.map((regulation) => (
                      <Link
                        key={regulation.href}
                        href={regulation.href}
                        className="block text-white/80 hover:text-white transition-colors py-2 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {regulation.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="#waitlist"
                  className="text-white/80 hover:text-white transition-colors py-3 text-base font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Waitlist
                </Link>

                <Link
                  href="#faq"
                  className="text-white/80 hover:text-white transition-colors py-3 text-base font-medium border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>

                <button
                  onClick={() => {
                    handleContactClick()
                    setMobileMenuOpen(false)
                  }}
                  className="text-white/80 hover:text-white transition-colors py-3 text-base font-medium border-b border-white/10 flex items-center gap-2 text-left"
                >
                  <Mail className="w-4 h-4" />
                  Contact (hello@epec-corvux.com)
                </button>

                <div className="pt-4">
                  <DemoRequestForm />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
