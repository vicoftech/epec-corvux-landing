"use client"

import { Bell, Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardTopbarProps {
  title: string
  user: {
    name: string
    role: string
  }
  onMenuClick: () => void
}

export function DashboardTopbar({ title, user, onMenuClick }: DashboardTopbarProps) {
  return (
    <header className="bg-[#1A1D21]/95 backdrop-blur-sm border-b border-[#2A2D31] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden text-gray-400 hover:text-white hover:bg-[#2A2D31]"
          >
            <Menu className="h-5 w-5" />
          </Button>
          {title && <h1 className="text-xl font-semibold text-white">{title}</h1>}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-[#2A2D31]">
            <Search className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-[#2A2D31] relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>

          {/* User menu */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-white">{user.name}</div>
              <div className="text-xs text-gray-400">{user.role}</div>
            </div>
            <div className="w-8 h-8 bg-[#2A2D31] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
