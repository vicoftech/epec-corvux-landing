"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  CheckCircle,
  Timer,
  AlertTriangle,
  MessageSquare,
  Building2,
  Download,
  Users,
  TrendingUp,
  ArrowRight,
  X,
} from "lucide-react"
import { useState } from "react"

export default function VerifierDashboard() {
  const [showInsights, setShowInsights] = useState(true)

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <DashboardLayout
        title=""
        subtitle=""
        user={{
          name: "Ignacio Martínez",
          role: "Maritime Verifier",
        }}
      >
        {/* Header Section */}
        <div className="mb-12">
          <h1
            className="text-4xl font-bold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Welcome back, Ignacio 👋
          </h1>
          <div className="text-lg leading-relaxed" style={{ fontFamily: "Satoshi, sans-serif" }}>
            <p className="text-[#6B6B6B]">
              Here's what needs your attention — review reports, leave comments, and validate emissions data faster.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top KPIs - Colorful like the reference image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pending Reviews - Orange/Red accent for urgency */}
              <Card className="bg-gradient-to-br from-[#FF6B6B] to-[#E55555] text-white rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <Badge className="bg-white/20 text-white border-0 text-xs font-semibold">Due this week</Badge>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                      9
                    </p>
                    <p className="text-sm font-medium text-white/90 mb-2">Pending Reviews</p>
                    <p className="text-xs text-white/80">Reports awaiting verification</p>
                  </div>
                </CardContent>
              </Card>

              {/* Reviewed Reports - Green for success */}
              <Card className="bg-gradient-to-br from-[#4ECDC4] to-[#44B3AC] text-white rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <Badge className="bg-white/20 text-white border-0 text-xs font-semibold">This month</Badge>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                      22
                    </p>
                    <p className="text-sm font-medium text-white/90 mb-2">Reviewed Reports</p>
                    <p className="text-xs text-white/80">Completed verifications</p>
                  </div>
                </CardContent>
              </Card>

              {/* Average Review Time - Purple accent */}
              <Card className="bg-gradient-to-br from-[#A8E6CF] to-[#88D8A3] text-[#1A1A1A] rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-[#1A1A1A]/10 backdrop-blur-sm">
                      <Timer className="h-5 w-5 text-[#1A1A1A]" />
                    </div>
                    <Badge className="bg-[#1A1A1A]/10 text-[#1A1A1A] border-0 text-xs font-semibold">All fleets</Badge>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                      3.4
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A]/80 mb-2">Average Review Time</p>
                    <p className="text-xs text-[#1A1A1A]/70">Days per report</p>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Discrepancies - Yellow/Orange for warnings */}
              <Card className="bg-gradient-to-br from-[#FFD93D] to-[#F4C430] text-[#1A1A1A] rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-[#1A1A1A]/10 backdrop-blur-sm">
                      <AlertTriangle className="h-5 w-5 text-[#1A1A1A]" />
                    </div>
                    <Badge className="bg-[#1A1A1A]/10 text-[#1A1A1A] border-0 text-xs font-semibold">Flagged</Badge>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                      4
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A]/80 mb-2">Compliance Discrepancies</p>
                    <p className="text-xs text-[#1A1A1A]/70">Alerts for inconsistencies</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Helpful Insights Banner */}
            {showInsights && (
              <Card className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-3xl border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-bold mb-2"
                          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                        >
                          💡 Helpful Insight
                        </h3>
                        <p className="text-white/90 text-sm mb-3">
                          You're reviewing 15% faster than last month! Consider prioritizing EU MRV reports due this
                          week to maintain your efficiency streak.
                        </p>
                        <Button
                          variant="outline"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-2xl px-4 py-2 text-sm font-medium"
                        >
                          View EU MRV Reports
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/70 hover:text-white h-8 w-8 p-0"
                      onClick={() => setShowInsights(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Verification Panel */}
            <Card className="bg-white rounded-3xl border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-[#F8F8F8]">
                      <Building2 className="h-6 w-6 text-[#6B6B6B]" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-[#1A1A1A]"
                      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                    >
                      Verification Panel
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-[#F8F8F8] text-[#1A1A1A] border-[#E8E8E8] rounded-2xl px-4 py-2 font-medium"
                  >
                    View All Companies
                  </Button>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      company: "Maersk Shipping",
                      regulation: "EU MRV",
                      progress: 75,
                      lastComment: "Missing voyage summary",
                      dueDate: "Jul 15",
                      comments: 2,
                      status: "in-progress",
                      color: "from-[#FF6B6B] to-[#E55555]",
                    },
                    {
                      company: "MSC Mediterranean",
                      regulation: "EU ETS",
                      progress: 90,
                      lastComment: "Data validation complete",
                      dueDate: "Jul 22",
                      comments: 1,
                      status: "almost-done",
                      color: "from-[#4ECDC4] to-[#44B3AC]",
                    },
                    {
                      company: "CMA CGM Group",
                      regulation: "FuelEU Maritime",
                      progress: 45,
                      lastComment: "Fuel consumption data needs review",
                      dueDate: "Aug 03",
                      comments: 3,
                      status: "needs-attention",
                      color: "from-[#FFD93D] to-[#F4C430]",
                    },
                    {
                      company: "COSCO Shipping",
                      regulation: "IMO DCS",
                      progress: 100,
                      lastComment: "Approved and ready for submission",
                      dueDate: "Completed",
                      comments: 0,
                      status: "completed",
                      color: "from-[#A8E6CF] to-[#88D8A3]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border border-[#F0F0F0] rounded-3xl overflow-hidden">
                      <div className="p-6 bg-[#FAFAFA]">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-white shadow-sm border border-[#F0F0F0]">
                              <Building2 className="w-5 h-5 text-[#6B6B6B]" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{item.company}</h4>
                              <div className="flex items-center gap-3">
                                <Badge className="bg-[#F0F0F0] text-[#6B6B6B] border-0 font-medium text-xs">
                                  {item.regulation}
                                </Badge>
                                <span className="text-xs text-[#6B6B6B] font-medium">Due: {item.dueDate}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white rounded-2xl px-4 py-2 font-medium transition-all duration-200">
                            Review
                          </Button>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-[#1A1A1A]">{item.progress}% reviewed</span>
                            <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                              <MessageSquare className="w-3 h-3" />
                              <span>Comments: {item.comments}</span>
                            </div>
                          </div>
                          <div className="w-full bg-[#F0F0F0] rounded-full h-3">
                            <div
                              className="h-3 rounded-full transition-all duration-500"
                              style={{
                                width: `${item.progress}%`,
                                background: `linear-gradient(135deg, ${item.color.split(" ")[0].replace("from-[", "").replace("]", "")}, ${item.color.split(" ")[1].replace("to-[", "").replace("]", "")})`,
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Last Comment */}
                        <div className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-[#F0F0F0]">
                          <MessageSquare className="w-4 h-4 text-[#6B6B6B] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-[#1A1A1A] font-medium">Last comment:</p>
                            <p className="text-sm text-[#6B6B6B]">"{item.lastComment}"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white rounded-3xl border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-2xl font-bold text-[#1A1A1A]"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Recent Activity
                  </h3>
                  <Button variant="ghost" className="text-[#6B6B6B] hover:text-[#1A1A1A] font-medium">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      action: "María Santos uploaded a new version for MV Atlantic Pioneer",
                      time: "2 hours ago",
                      type: "upload",
                      color: "bg-[#4ECDC4]",
                    },
                    {
                      action: "You approved ETS data for MV Nordic Star",
                      time: "1 day ago",
                      type: "approval",
                      color: "bg-[#A8E6CF]",
                    },
                    {
                      action: "Comment added to FuelEU report draft",
                      time: "2 days ago",
                      type: "comment",
                      color: "bg-[#FFD93D]",
                    },
                    {
                      action: "New verification request from COSCO Shipping",
                      time: "3 days ago",
                      type: "request",
                      color: "bg-[#667eea]",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-[#F8F8F8] rounded-2xl">
                      <div className={`w-2 h-2 rounded-full mt-2 ${activity.color}`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#1A1A1A]">{activity.action}</p>
                        <p className="text-xs text-[#6B6B6B] mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="bg-white rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6">
                <h3
                  className="text-xl font-bold mb-6 text-[#1A1A1A]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  📅 Upcoming Deadlines
                </h3>
                <div className="space-y-4">
                  {[
                    { regulation: "EU MRV", date: "Jul 15", days: "5 days", urgent: true },
                    { regulation: "FuelEU", date: "Aug 03", days: "24 days", urgent: false },
                    { regulation: "IMO DCS", date: "Aug 15", days: "36 days", urgent: false },
                  ].map((deadline, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-2xl transition-all duration-200 ${
                        deadline.urgent
                          ? "bg-gradient-to-br from-[#FFF4E6] to-[#FEF0E0] border border-[#FFD93D]/20"
                          : "bg-[#F8F8F8]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={`font-semibold text-xs border-0 ${
                            deadline.urgent ? "bg-[#FFD93D] text-[#1A1A1A]" : "bg-[#E8E8E8] text-[#6B6B6B]"
                          }`}
                        >
                          {deadline.regulation}
                        </Badge>
                        <span className="text-xs text-[#6B6B6B] font-medium">{deadline.date}</span>
                      </div>
                      <p className="text-xs text-[#6B6B6B]">{deadline.days} remaining</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions - Dark card for contrast */}
            <Card className="bg-[#1A1A1A] text-white rounded-3xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                  ⚙️ Quick Actions
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-2xl h-12 justify-start text-left font-medium transition-all duration-200">
                    <Users className="w-5 h-5 mr-3" />
                    View Assigned Companies
                  </Button>

                  <Button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-2xl h-12 justify-start text-left font-medium transition-all duration-200">
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Add Comment to Report
                  </Button>

                  <Button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-2xl h-12 justify-start text-left font-medium transition-all duration-200">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Mark Report as Verified
                  </Button>

                  <Button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-2xl h-12 justify-start text-left font-medium transition-all duration-200">
                    <Download className="w-5 h-5 mr-3" />
                    Export Reviewed Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-3xl border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                  📊 Your Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/90">Reviews completed</span>
                    <span className="text-lg font-bold">22</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/90">Average rating</span>
                    <span className="text-lg font-bold">4.8/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/90">On-time delivery</span>
                    <span className="text-lg font-bold">95%</span>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-sm text-white/90">15% faster than last month</span>
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
