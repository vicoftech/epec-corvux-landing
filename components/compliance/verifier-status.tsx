"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ChevronRight } from "lucide-react"
import { useState } from "react"

interface Verifier {
  verifier: string
  status: string
  vessels: number
  lastUpdate: string
  progress: number
  color: string
}

export function VerifierStatus() {
  const [verifiers] = useState<Verifier[]>([
    {
      verifier: "Bureau Veritas",
      status: "In Progress",
      vessels: 8,
      lastUpdate: "2 hours ago",
      progress: 65,
      color: "#C8A2FF",
    },
    {
      verifier: "DNV GL",
      status: "Pending Review",
      vessels: 5,
      lastUpdate: "1 day ago",
      progress: 30,
      color: "#FFD580",
    },
    {
      verifier: "Lloyd's Register",
      status: "Completed",
      vessels: 12,
      lastUpdate: "3 days ago",
      progress: 100,
      color: "#8AFF8A",
    },
  ])

  return (
    <Card className="bg-white rounded-3xl border-0 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <p className="text-lg font-bold text-[#1E1E1E]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Verifier Status
            </p>
          </div>
          <Button variant="ghost" size="sm" className="h-8 text-xs flex items-center text-[#1E1E1E]">
            View all
            <ChevronRight className="h-3 w-3 ml-1" />
          </Button>
        </div>

        <div className="space-y-3">
          {verifiers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" />
              <p className="text-[#4A4A4A] text-lg font-medium" style={{ fontFamily: "Satoshi, sans-serif" }}>
                No verifiers assigned yet
              </p>
              <p className="text-[#6B7280] text-sm mt-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
                Assign verifiers to your vessels to track verification progress
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {verifiers.map((verifier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-2xl hover:bg-[#F5F5F5] transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-white">
                      <Users className="w-5 h-5 text-[#1E1E1E]" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#1E1E1E] mb-1">{verifier.verifier}</p>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-medium px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${verifier.color}20`, color: verifier.color }}
                        >
                          {verifier.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          {verifier.vessels} vessels • {verifier.lastUpdate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">{verifier.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#F0F0F0] rounded-full">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${verifier.progress}%`, backgroundColor: verifier.color }}
                      ></div>
                    </div>
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
