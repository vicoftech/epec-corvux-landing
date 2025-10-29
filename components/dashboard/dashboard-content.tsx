"use client"

import {
  BarChart3,
  Upload,
  LinkIcon,
  TrendingDown,
  ArrowUpRight,
  Activity,
  AlertTriangle,
  MoreHorizontal,
  Ship,
  FileText,
  CheckCircle,
  Clock,
  ExternalLink,
} from "lucide-react"
import { useState } from "react"

type DataState = "empty" | "loading" | "loaded"

interface DashboardContentProps {
  dataState: DataState
  onUploadClick: () => void
}

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 bg-[#2A2D31] rounded-lg w-3/4"></div>
    <div className="h-4 bg-[#2A2D31] rounded w-1/2"></div>
    <div className="h-32 bg-[#2A2D31] rounded-2xl"></div>
  </div>
)

const CircularProgress = ({ percentage, size = 140 }: { percentage: number; size?: number }) => {
  const radius = (size - 12) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#2A2D31" strokeWidth="12" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#059669"
          strokeWidth="12"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white font-bricolage">{percentage}</span>
        <span className="text-sm text-gray-400 font-medium font-satoshi">Score</span>
      </div>
    </div>
  )
}

export function DashboardContent({ dataState, onUploadClick }: DashboardContentProps) {
  const [selectedRegulation, setSelectedRegulation] = useState<"EU MRV" | "EU ETS" | "FuelEU">("EU MRV")

  const regulations = {
    "EU MRV": { color: "#1D9271", bgColor: "#D1FADF", textColor: "#067647" },
    "EU ETS": { color: "#4461F2", bgColor: "#EEF4FF", textColor: "#1D4ED8" },
    FuelEU: { color: "#9B51E0", bgColor: "#EDE9FE", textColor: "#7C3AED" },
  }

  const weeklyData = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 92 },
    { day: "Wed", value: 78 },
    { day: "Thu", value: 95 },
    { day: "Fri", value: 88 },
    { day: "Sat", value: 76 },
    { day: "Sun", value: 82 },
  ]

  if (dataState === "empty") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-32 h-32 bg-[#2A2D31] rounded-3xl flex items-center justify-center mb-8">
          <BarChart3 className="h-16 w-16 text-[#3A506B]" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3 font-bricolage">No compliance data yet</h2>
        <p className="text-gray-400 mb-10 max-w-md text-lg font-satoshi">
          Start by uploading your emissions report or linking a fleet to begin monitoring your maritime compliance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onUploadClick}
            className="bg-[#0F1114] text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl hover:bg-[#0F1114]/90 transition-all duration-200 font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl font-satoshi"
          >
            <Upload className="h-5 w-5" />
            Upload Data
          </button>
          <button className="border-2 border-[#2A2D31] text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl hover:bg-[#2A2D31]/50 transition-all duration-200 font-semibold flex items-center justify-center gap-3 font-satoshi">
            <LinkIcon className="h-5 w-5" />
            Connect Fleet
          </button>
        </div>
      </div>
    )
  }

  if (dataState === "loading") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
        <div className="space-y-8">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Main Stats */}
      <div className="lg:col-span-2 space-y-8">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Emissions Rate */}
          <div
            className="bg-[#2A2D31] rounded-2xl p-6 border border-[#2A2D31]/50 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            title="Total CO2 emissions per unit of transport work"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F3E8FF] rounded-2xl flex items-center justify-center border border-[#A855F7] shadow-sm group-hover:rotate-1 transition-transform duration-200">
                <Activity className="h-5 w-5 text-[#7E22CE]" />
              </div>
              <div className="flex items-center gap-1">
                <TrendingDown className="h-4 w-4 text-[#059669]" />
                <span className="text-xs font-bold text-[#059669] bg-[#ECFDF5] px-2 py-1 rounded-full font-satoshi border border-[#059669]/20">
                  -12%
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-bricolage">68.42</div>
            <div className="text-sm text-gray-400 font-medium font-satoshi">Emissions Rate (tCO₂)</div>
          </div>

          {/* Average Reporting Delay */}
          <div
            className="bg-[#2A2D31] rounded-2xl p-6 border border-[#2A2D31]/50 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            title="Average time delay in regulatory reporting submissions"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#EEF4FF] rounded-2xl flex items-center justify-center group-hover:rotate-1 transition-transform duration-200">
                <Clock className="h-5 w-5 text-[#1D4ED8]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-bricolage">
              2.4
              <span className="text-lg text-gray-400 ml-1 font-satoshi">days</span>
            </div>
            <div className="text-sm text-gray-400 font-medium font-satoshi">Average Reporting Delay</div>
          </div>

          {/* Next Submission Deadline */}
          <div
            className="bg-[#2A2D31] rounded-2xl p-6 border border-[#2A2D31]/50 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            title="Upcoming regulatory submission deadline"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FEF2F2] rounded-2xl flex items-center justify-center group-hover:rotate-1 transition-transform duration-200">
                <AlertTriangle className="h-5 w-5 text-[#DC2626]" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-bricolage">15/02/2025</div>
            <div className="text-sm text-gray-400 font-medium font-satoshi">Next Submission Deadline</div>
          </div>
        </div>

        {/* Maritime Performance Chart */}
        <div className="bg-[#2A2D31] rounded-2xl border border-[#2A2D31]/50 shadow-sm">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white font-bricolage">Maritime Performance</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#059669] font-semibold font-satoshi">+10%</span>
                  <ArrowUpRight className="h-4 w-4 text-[#059669]" />
                  <span className="text-sm text-gray-400 font-satoshi">vs last month</span>
                </div>
              </div>
              <CircularProgress percentage={87} size={120} />
            </div>

            {/* Regulation Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(regulations).map(([regulation, config]) => (
                <button
                  key={regulation}
                  onClick={() => setSelectedRegulation(regulation as keyof typeof regulations)}
                  className={`px-3 py-1 rounded-full text-sm font-medium font-satoshi border transition-all duration-200 ${
                    selectedRegulation === regulation
                      ? `bg-[${config.color}] text-white border-[${config.color}]`
                      : `bg-[${config.bgColor}] text-[${config.textColor}] border-[${config.textColor}]/20 hover:brightness-105`
                  }`}
                >
                  {regulation}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2A2D31]"></div>

          {/* Weekly Chart */}
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h4 className="font-semibold text-white font-satoshi">Weekly Analytics</h4>
              <div className="text-sm text-gray-400 font-satoshi">
                Showing data for <span className="font-medium text-white">{selectedRegulation}</span>
              </div>
            </div>

            <div className="flex items-end gap-2 md:gap-3 h-32 relative group">
              {weeklyData.map((item, index) => (
                <div key={item.day} className="flex-1 flex flex-col items-center gap-2 relative">
                  <div
                    className="w-full bg-[#2A2D31] rounded-t-lg relative overflow-hidden cursor-pointer"
                    style={{ height: "80px" }}
                    title={`${item.day}: ${item.value} tCO₂ under ${selectedRegulation}`}
                  >
                    <div
                      className={`absolute bottom-0 w-full rounded-t-lg transition-all duration-1000 hover:brightness-110`}
                      style={{
                        height: `${item.value}%`,
                        backgroundColor: index === 3 ? "#FF6363" : regulations[selectedRegulation].color,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium font-satoshi">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Fleet Info & Reports */}
      <div className="space-y-8">
        {/* Fleet Overview */}
        <div className="bg-[#2A2D31] rounded-2xl p-6 border border-[#2A2D31]/50 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white font-bricolage">Fleet Overview</h3>
            <MoreHorizontal className="h-5 w-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#3A506B] to-[#6BD9A9] rounded-2xl flex items-center justify-center">
              <Ship className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white font-satoshi">Maersk Shipping</div>
              <div className="text-sm text-gray-400 font-satoshi">Primary Fleet</div>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400 font-satoshi">Total Ships</span>
              <span className="font-medium text-white font-satoshi">24 vessels</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-satoshi">Active Routes</span>
              <span className="font-medium text-white font-satoshi">EU, Americas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-satoshi">Average Score</span>
              <span className="font-medium text-white font-satoshi">87% Compliance</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-[#D1FADF] text-[#067647] rounded-full text-xs font-medium font-satoshi border border-[#067647]/20">
              EU MRV
            </span>
            <span className="px-3 py-1 bg-[#E5EAF1] text-[#1D2939] rounded-full text-xs font-medium font-satoshi border border-[#1D2939]/20">
              IMO DCS
            </span>
          </div>
        </div>

        {/* Your Report */}
        <div className="bg-[#2A2D31] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2 font-bricolage text-white">Your Report</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-[#ECFDF5] text-[#059669] rounded-full text-xs font-medium font-satoshi border border-[#059669]/20">
                4 Instances
              </span>
            </div>

            <div className="flex gap-3">
              <button className="w-12 h-12 bg-[#334155] rounded-2xl flex items-center justify-center hover:bg-[#475569] transition-colors">
                <Upload className="h-5 w-5 text-white" />
              </button>
              <button className="w-12 h-12 bg-[#334155] rounded-2xl flex items-center justify-center hover:bg-[#475569] transition-colors">
                <ExternalLink className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <div className="absolute top-4 right-4 flex gap-1">
            <div className="w-2 h-2 bg-[#FF6363] rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#2A2D31] rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200 group cursor-pointer">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
              <FileText className="h-6 w-6 text-[#1D4ED8]" />
            </div>
            <div className="font-bold text-[#1D4ED8] font-bricolage text-lg">28</div>
            <div className="text-xs text-[#1D4ED8] font-satoshi">Reports</div>
          </div>
          <div className="bg-[#2A2D31] rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200 group cursor-pointer">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
              <AlertTriangle className="h-6 w-6 text-[#DC2626]" />
            </div>
            <div className="font-bold text-[#DC2626] font-bricolage text-lg">3</div>
            <div className="text-xs text-[#DC2626] font-satoshi">Alerts</div>
          </div>
          <div className="bg-[#2A2D31] rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200 group cursor-pointer">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
              <CheckCircle className="h-6 w-6 text-[#059669]" />
            </div>
            <div className="font-bold text-[#059669] font-bricolage text-lg">21</div>
            <div className="text-xs text-[#059669] font-satoshi">Compliant</div>
          </div>
        </div>
      </div>
    </div>
  )
}
