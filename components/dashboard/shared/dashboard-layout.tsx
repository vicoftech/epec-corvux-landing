"use client"

import type React from "react"

import { useState } from "react"
import { DashboardSidebar } from "../sidebar"
import { DashboardTopbar } from "../topbar"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  user: {
    name: string
    role: string
  }
}

export function DashboardLayout({ children, title, user }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarHovered, setSidebarHovered] = useState(false)

  return (
    <div className="min-h-screen bg-[#0F1114]">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onHoverChange={setSidebarHovered} />

      {/* Main content */}
      <div className={`transition-all duration-300 ${sidebarHovered ? "lg:ml-80" : "lg:ml-20"}`}>
        {/* Topbar */}
        <DashboardTopbar title={title} user={user} onMenuClick={() => setSidebarOpen(true)} />

        {/* Page content */}
        <main className="p-6 bg-[#0F1114] min-h-screen">{children}</main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-[#0F1114]/80 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
