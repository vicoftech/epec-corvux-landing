"use client"

import { Upload, ChevronDown } from "lucide-react"

interface DashboardHeaderProps {
  onUploadClick: () => void
}

export function DashboardHeader({ onUploadClick }: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F1114] font-bricolage mb-2">Welcome back, María 👋</h1>
        <p className="text-lg text-[#4A4A4A] font-satoshi">Here's your maritime compliance at a glance.</p>
      </div>

      {/* Filters and Upload Section */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        {/* Filters */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#0F1114] font-bricolage">Filters</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {/* Date Range Filter */}
            <div className="relative">
              <select className="appearance-none bg-white border border-[#E1E6EC] rounded-2xl px-4 py-2 pr-8 text-sm font-satoshi text-[#0F1114] focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent hover:border-[#C5B4E3] transition-colors shadow-sm hover:shadow-md">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#4A4A4A] pointer-events-none" />
            </div>

            {/* Fleet Filter */}
            <div className="relative">
              <select className="appearance-none bg-white border border-[#E1E6EC] rounded-2xl px-4 py-2 pr-8 text-sm font-satoshi text-[#0F1114] focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent hover:border-[#C5B4E3] transition-colors shadow-sm hover:shadow-md">
                <option>Maersk Shipping</option>
                <option>Atlantic Line</option>
                <option>Pacific Fleet</option>
                <option>All Fleets</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#4A4A4A] pointer-events-none" />
            </div>

            {/* Port Filter */}
            <div className="relative">
              <select className="appearance-none bg-white border border-[#E1E6EC] rounded-2xl px-4 py-2 pr-8 text-sm font-satoshi text-[#0F1114] focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent hover:border-[#C5B4E3] transition-colors shadow-sm hover:shadow-md">
                <option>Rotterdam</option>
                <option>Hamburg</option>
                <option>Santos</option>
                <option>All Ports</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#4A4A4A] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <button
          onClick={onUploadClick}
          className="flex items-center gap-2 px-6 py-3 bg-[#0F1114] text-white rounded-2xl hover:bg-[#0F1114]/90 transition-all duration-200 font-medium font-satoshi shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#059669]/20"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Data</span>
        </button>
      </div>
    </div>
  )
}
