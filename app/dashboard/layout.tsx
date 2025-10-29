"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardTopbar } from "@/components/dashboard/topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarHovered, setSidebarHovered] = useState(false)

  // Prevent MetaMask detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalError = console.error
      console.error = (...args) => {
        if (args[0]?.includes?.("MetaMask") || args[0]?.includes?.("ChromeTransport")) {
          return
        }
        originalError.apply(console, args)
      }
      return () => {
        console.error = originalError
      }
    }
  }, [])

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  const handleSidebarToggleCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="min-h-screen bg-[#0F1114]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      {/* Mobile overlay */}
      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={handleSidebarClose} />}

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleSidebarToggleCollapse}
        onHoverChange={setSidebarHovered}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          !sidebarHovered ? "lg:ml-20" : "lg:ml-80"
        }`}
      >
        {/* Top Bar */}
        <DashboardTopbar
          onMenuClick={handleSidebarToggle}
          user={{
            name: "María Santos",
            role: "Compliance Manager",
          }}
        />

        {/* Dashboard Content */}
        <div className="flex-1 p-4 md:p-8">{children}</div>

        {/* Footer */}
        <div className="mt-auto px-4 md:px-8 py-6 border-t border-[#2A2D31]/50 bg-[#1A1D21]/50 backdrop-blur-xl">
          <p className="text-sm text-gray-400 text-center">© 2025 EP&C Corvux</p>
        </div>
      </div>
    </div>
  )
}
