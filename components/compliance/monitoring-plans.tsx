"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Ship, GitCompare, Eye, Upload } from "lucide-react"
import { useState } from "react"

interface MonitoringPlan {
  vessel: string
  regulation: string
  status: "Active" | "Draft" | "Submitted" | "Approved"
  lastModified: string
  version: string
  statusColor: string
  statusBg: string
  regColor: string
  regBg: string
}

export function MonitoringPlans() {
  const [plans] = useState<MonitoringPlan[]>([
    {
      vessel: "MV Atlantic Pioneer",
      regulation: "EU MRV",
      status: "Active",
      lastModified: "2 days ago",
      version: "v2.1",
      statusColor: "#65CC65",
      statusBg: "#F0FFF0",
      regColor: "#065F46",
      regBg: "#ECFDF5",
    },
    {
      vessel: "MV Pacific Explorer",
      regulation: "EU ETS",
      status: "Draft",
      lastModified: "1 week ago",
      version: "v1.0",
      statusColor: "#D97706",
      statusBg: "#FEF3C7",
      regColor: "#1E40AF",
      regBg: "#EFF6FF",
    },
    {
      vessel: "MV Nordic Star",
      regulation: "FuelEU Maritime",
      status: "Submitted",
      lastModified: "3 days ago",
      version: "v1.2",
      statusColor: "#9F7AE0",
      statusBg: "#F8F0FF",
      regColor: "#6B21A8",
      regBg: "#F5F3FF",
    },
    {
      vessel: "MV Baltic Trader",
      regulation: "IMO DCS",
      status: "Approved",
      lastModified: "1 month ago",
      version: "v3.0",
      statusColor: "#0369A1",
      statusBg: "#F0F9FF",
      regColor: "#0C4A6E",
      regBg: "#F0F9FF",
    },
  ])

  return (
    <Card className="bg-white rounded-3xl border-0 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <p className="text-lg font-bold text-[#1E1E1E]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Monitoring Plans
            </p>
          </div>
          <Button className="bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white rounded-full h-10 px-4 font-medium flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload New
          </Button>
        </div>

        <div className="space-y-3">
          {plans.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" />
              <p className="text-[#4A4A4A] text-lg font-medium" style={{ fontFamily: "Satoshi, sans-serif" }}>
                No monitoring plans uploaded yet
              </p>
              <p className="text-[#6B7280] text-sm mt-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                Start by uploading a new monitoring plan for your fleet
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-white">
                      <Ship className="w-5 h-5 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#1E1E1E] mb-1">{plan.vessel}</p>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-medium px-2 py-1 rounded-full"
                          style={{ backgroundColor: plan.regBg, color: plan.regColor }}
                        >
                          {plan.regulation}
                        </span>
                        <span
                          className="text-xs font-medium px-2 py-1 rounded-full"
                          style={{ backgroundColor: plan.statusBg, color: plan.statusColor }}
                        >
                          {plan.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {plan.lastModified} • {plan.version}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#E0E0E0] hover:border-[#1E1E1E] text-[#1E1E1E] rounded-full h-8 px-3 font-medium flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#E0E0E0] hover:border-[#1E1E1E] text-[#1E1E1E] rounded-full h-8 px-3 font-medium flex items-center gap-1"
                    >
                      <GitCompare className="w-3 h-3" />
                      Compare
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
