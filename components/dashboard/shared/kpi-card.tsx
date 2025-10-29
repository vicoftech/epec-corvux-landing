"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface KPICardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  description: string
}

export function KPICard({ title, value, change, changeType, icon: Icon, iconColor, description }: KPICardProps) {
  const getChangeIcon = () => {
    switch (changeType) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-[#32BB88]" />
      case "negative":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <Minus className="w-4 h-4 text-[#4A4A4A]" />
    }
  }

  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-[#32BB88]"
      case "negative":
        return "text-red-500"
      default:
        return "text-[#4A4A4A]"
    }
  }

  return (
    <Card className="bg-white border border-gray-200/50 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-gray-50`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-[#4A4A4A] font-medium">{title}</p>
          <p className="text-2xl font-bold text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            {value}
          </p>
          <div className="flex items-center space-x-1">
            {getChangeIcon()}
            <p className={`text-sm ${getChangeColor()}`}>{change}</p>
          </div>
          <p className="text-xs text-[#4A4A4A]">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
