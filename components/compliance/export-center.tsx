"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ReportType {
  title: string
  description: string
  count: number
  color: string
  bgColor: string
}

export function ExportCenter() {
  const [reports] = useState<ReportType[]>([
    {
      title: "EU MRV Reports",
      description: "Ready for THETIS-MRV",
      count: 12,
      color: "#8AFF8A",
      bgColor: "#F0FFF0",
    },
    {
      title: "IMO DCS Reports",
      description: "Ready for submission",
      count: 8,
      color: "#C8A2FF",
      bgColor: "#F8F0FF",
    },
    {
      title: "FuelEU Reports",
      description: "In preparation",
      count: 5,
      color: "#FFD580",
      bgColor: "#FFF8F0",
    },
  ])

  return (
    <Card className="bg-white rounded-3xl border-0 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <p className="text-lg font-bold text-[#1E1E1E]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Export Center
            </p>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-xs flex items-center text-[#1E1E1E]">
            View all
            <ChevronRight className="h-3 w-3 ml-1" />
          </Button>
        </div>

        {reports.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" />
            <p className="text-[#4A4A4A] text-lg font-medium" style={{ fontFamily: "Satoshi, sans-serif" }}>
              No reports ready for export
            </p>
            <p className="text-[#6B7280] text-sm mt-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
              Complete the verification process to export reports
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {reports.map((report, index) => (
              <div key={index} className="p-4 rounded-2xl flex flex-col" style={{ backgroundColor: report.bgColor }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-[#1E1E1E]">{report.title}</p>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${report.color}40` }}
                  >
                    <FileText className="w-4 h-4" style={{ color: report.color }} />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">{report.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-2xl font-bold" style={{ color: report.color }}>
                    {report.count}
                  </p>
                  <Button
                    className="rounded-full h-8 px-3 text-xs font-medium"
                    style={{ backgroundColor: report.color, color: "#1E1E1E" }}
                  >
                    Export
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
