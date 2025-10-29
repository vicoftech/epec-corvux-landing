"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  Calendar,
  FileText,
  Ship,
  Upload,
  AlertTriangle,
  Users,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Fuel,
  Lightbulb,
  ExternalLink,
  Clock,
  Activity,
  Leaf,
} from "lucide-react"
import { useState, useEffect } from "react"

const quickTips = [
  "💡 Submit EU MRV reports 15 days before the deadline to allow time for verifier review.",
  "⚡ Set up automated fuel consumption alerts to catch data anomalies early.",
  "📊 Review your fleet's performance monthly to identify efficiency opportunities.",
  "🔄 Keep verifier contact information updated to avoid communication delays.",
  "📋 Use standardized voyage log templates to reduce data validation errors.",
]

export default function ComplianceOfficerDashboard() {
  const [currentTip, setCurrentTip] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % quickTips.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const user = {
    name: "María González",
    role: "Compliance Officer",
  }

  return (
    <div className="min-h-screen bg-[#0F1114]">
      <DashboardLayout title="" user={user}>
        {/* Top Greeting */}
        <div className="mb-6">
          <h1
            className="text-3xl font-semibold text-white mb-2"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Welcome back, María 👋
          </h1>
          <p className="text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
            Your maritime compliance command center — track reports, monitor fleet status, and manage upcoming actions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Left + Center Columns (3/4 width) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            {/* KPI Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* Estimated Savings */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-emerald-500 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-emerald-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div
                    className="text-2xl font-semibold text-white mb-1"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    $12,500
                  </div>
                  <div className="text-sm text-gray-300 mb-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Estimated Savings This Year
                  </div>
                  <div className="text-xs text-emerald-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    from avoided penalties
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Deadlines */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-amber-500 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-amber-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div
                    className="text-sm font-medium text-white mb-3"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Upcoming Deadlines
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        EU MRV Report
                      </span>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">Feb 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        IMO DCS Filing
                      </span>
                      <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">Mar 2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reports Submitted */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-purple-500 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <FileText className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3 text-emerald-400" />
                      <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">+2</span>
                    </div>
                  </div>
                  <div
                    className="text-2xl font-semibold text-white mb-1"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    8
                  </div>
                  <div className="text-sm text-gray-300" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Reports This Month
                  </div>
                </CardContent>
              </Card>

              {/* Fleet Compliance Rate */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-violet-500 transition-colors duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                      <Ship className="h-5 w-5 text-violet-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div
                    className="text-2xl font-semibold text-white mb-1"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    87%
                  </div>
                  <div className="text-sm text-gray-300 mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Fleet Compliance Rate
                  </div>
                  <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    22/25 vessels up to date
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Module Access Shortcuts - Flex grow to fill remaining space */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Emissions Reporting */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-purple-500 transition-colors duration-200 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-purple-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Emissions Reporting
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Generate compliance reports and track submission status across all regulatory frameworks
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        Reports This Month
                      </span>
                      <span
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        8 submitted
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 mt-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      ↑ 2 more than last month
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-purple-400 hover:bg-purple-500/10 mt-auto">
                    View All Reports →
                  </Button>
                </CardContent>
              </Card>

              {/* Verification Hub */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-violet-500 transition-colors duration-200 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-2xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-violet-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Verification Hub
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Monitor verifier progress in real-time and respond to verification requests instantly
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        Active Verifications
                      </span>
                      <span
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        5 in progress
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      2 completed, 3 pending review
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-violet-400 hover:bg-violet-500/10 mt-auto">
                    View Verification Status →
                  </Button>
                </CardContent>
              </Card>

              {/* Voyage & Fuel Logs */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-amber-500 transition-colors duration-200 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                      <Fuel className="h-6 w-6 text-amber-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Voyage & Fuel Logs
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Review and analyze uploaded journey logs and fuel consumption data with precision
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        Voyages This Month
                      </span>
                      <span
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        142 logged
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 mt-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      ↓ 8% fuel reduction vs last month
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-amber-400 hover:bg-amber-500/10 mt-auto">
                    View Voyage Logs →
                  </Button>
                </CardContent>
              </Card>

              {/* Sustainability Metrics */}
              <Card className="group bg-[#2A2D31] border border-[#2A2D31] rounded-3xl hover:border-emerald-500 transition-colors duration-200 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-emerald-400" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Sustainability Metrics
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                    Track environmental performance and carbon reduction initiatives across your fleet
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        CO₂ Reduction YTD
                      </span>
                      <span
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        12% achieved
                      </span>
                    </div>
                    <div className="text-xs text-emerald-400 mt-1" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      On track to exceed 15% annual target
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full text-emerald-400 hover:bg-emerald-500/10 mt-auto">
                    View Sustainability Dashboard →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Fixed height to match left column */}
          <div className="flex flex-col space-y-4 h-full">
            {/* Quick Actions */}
            <Card className="bg-[#2A2D31] border border-[#2A2D31] rounded-3xl">
              <CardContent className="p-5">
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 rounded-2xl h-10 font-medium"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-2xl h-10 font-medium"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    View Alerts
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-2xl h-10 font-medium"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Verifier Panel
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-2xl h-10 font-medium"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <CalendarCheck className="h-4 w-4 mr-2" />
                    Schedule Review
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-purple-500/20 border border-purple-500/30 rounded-3xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Quick Tips
                  </h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  {quickTips[currentTip]}
                </p>
                <div className="flex justify-center space-x-1">
                  {quickTips.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentTip ? "bg-purple-400" : "bg-purple-600/50"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Performance */}
            <Card className="bg-[#2A2D31] border border-[#2A2D31] rounded-3xl">
              <CardContent className="p-5">
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Your Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      Reports Processed
                    </span>
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      28 this month
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      Avg. Processing Time
                    </span>
                    <span
                      className="text-sm font-semibold text-emerald-400"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      2.4 days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      Compliance Score
                    </span>
                    <span
                      className="text-sm font-semibold text-violet-400"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                    >
                      87%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity - Flex grow to fill remaining space */}
            <Card className="bg-[#2A2D31] border border-[#2A2D31] rounded-3xl flex-1">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-xl flex items-center justify-center">
                      <Activity className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                    >
                      Recent Activity
                    </h3>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    View all
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                <div className="space-y-2 flex-1 overflow-y-auto">
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-2xl">
                    <div className="w-7 h-7 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        EU MRV Report submitted for MV Atlantic Pioneer
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3" />
                        <span style={{ fontFamily: "Satoshi, sans-serif" }}>2 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-2xl">
                    <div className="w-7 h-7 bg-amber-500 rounded-xl flex items-center justify-center">
                      <Upload className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        Fuel consumption data uploaded for MV Pacific Star
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3" />
                        <span style={{ fontFamily: "Satoshi, sans-serif" }}>5 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-violet-500/10 rounded-2xl">
                    <div className="w-7 h-7 bg-violet-500 rounded-xl flex items-center justify-center">
                      <Users className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        Verifier assigned to MV Ocean Explorer
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3" />
                        <span style={{ fontFamily: "Satoshi, sans-serif" }}>1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}
