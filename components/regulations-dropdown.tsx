"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

export default function RegulationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setHoveredItem(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      <button className="text-white/80 hover:text-white transition-all duration-300 relative group flex items-center gap-1 text-sm font-medium">
        Regulations
        <ChevronDown className={`h-4 w-4 transition-all duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 w-96 bg-[rgba(15,17,20,0.98)] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <h3 className="font-bold text-white font-bricolage text-lg">Maritime Regulations</h3>
              <p className="text-sm text-white/60 mt-1">Comprehensive compliance solutions</p>
            </div>

            {/* Regulations List */}
            <div className="py-2">
              {regulations.map((regulation, index) => (
                <Link
                  key={regulation.href}
                  href={regulation.href}
                  className="block group"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className={`mx-2 my-1 px-4 py-4 rounded-xl transition-all duration-300 ${
                      hoveredItem === index ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Dot indicator */}
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-1.5 flex-shrink-0"></div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white group-hover:text-white font-bricolage text-base transition-colors duration-300">
                            {regulation.name}
                          </h4>
                          <ArrowRight
                            className={`h-4 w-4 text-white/40 transition-all duration-300 ${
                              hoveredItem === index ? "text-white translate-x-1" : ""
                            }`}
                          />
                        </div>
                        <p className="text-sm text-white/60 mt-1 leading-relaxed">{regulation.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-6 py-4">
              <Link
                href="/regulations"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 font-medium transition-colors duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <span>View all regulations</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
