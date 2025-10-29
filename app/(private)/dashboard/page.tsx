"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardTopbar } from "@/components/dashboard/topbar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import { UploadModal } from "@/components/dashboard/upload-modal"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [dataState, setDataState] = useState<"empty" | "loading" | "loaded">("loaded")
  const [sidebarHovered, setSidebarHovered] = useState(false)

  const handleUploadClick = () => {
    setUploadModalOpen(true)
  }

  const handleUploadComplete = () => {
    setDataState("loading")
    setTimeout(() => {
      setDataState("loaded")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#F2F5F7]">
      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        onHoverChange={setSidebarHovered}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${!sidebarHovered ? "lg:ml-20" : "lg:ml-80"}`}>
        {/* Topbar */}
        <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Dashboard Header */}
        <div className="px-4 md:px-8 py-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F1114] mb-2 font-bricolage">
              Welcome back, María 👋
            </h1>
            <p className="text-lg text-[#4A4A4A] font-satoshi">{"Here's your maritime compliance at a glance."}</p>
          </div>

          {/* Dashboard Content */}
          <DashboardContent dataState={dataState} onUploadClick={handleUploadClick} />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-[#4A4A4A] font-satoshi">© 2025 EPℇC Corvux</footer>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  )
}
