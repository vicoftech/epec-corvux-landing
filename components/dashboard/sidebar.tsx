"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Ship, Settings, Leaf, Recycle, Battery, TreePine, DollarSign, Brain, Users, LogOut, X } from "lucide-react"
import { useEffect, useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  collapsed?: boolean
  onToggleCollapse?: () => void
  onHoverChange?: (hovered: boolean) => void
}

export function DashboardSidebar({ isOpen, onClose, onHoverChange }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHoverChange?.(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHoverChange?.(false)
  }

  const maritimeSubsections = [
    { name: "Dashboard", path: "/dashboard-preview/compliance-officer" },
    { name: "Emissions Reporting", path: "/dashboard-preview/emissions" },
    { name: "Voyage & Fuel Logs", path: "/dashboard-preview/voyage-logs" },
    { name: "Verification Hub", path: "/dashboard-preview/verification" },
    { name: "Sustainability Metrics", path: "/dashboard-preview/sustainability" },
  ]

  const isCurrentPathDashboard =
    pathname === "/dashboard-preview/compliance-officer" || pathname === "/dashboard-preview"

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-[#1A1D21] border-r border-[#2A2D31] z-50 flex flex-col transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isHovered ? "lg:w-80" : "lg:w-20"} w-80`}
      style={{ overflow: isTransitioning ? "hidden" : "auto" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="flex-shrink-0" style={{ height: "120px" }}>
        <div className={`h-full ${isHovered ? "p-6" : "lg:p-3"} transition-all duration-300 ease-in-out`}>
          {/* Layout expandido */}
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-100" : "lg:opacity-0 lg:invisible lg:absolute"
            }`}
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M46.033 0.0563256C38.6393 0.502132 30.8564 3.2692 24.6978 7.6504C15.6968 14.0608 8.28619 24.3604 3.81952 36.7046C2.21219 41.132 0.960166 45.7591 0.317235 49.6791C-0.105745 52.231 -0.105745 59.3178 0.317235 61.9465C1.90764 72.0463 7.01725 80.9009 15.6461 88.5257C18.1839 90.7855 22.16 93.8139 23.7504 94.7055C23.8688 94.767 23.2766 94.0753 22.4307 93.1529C16.0352 86.2045 11.8392 78.0416 10.1473 69.2024C9.55513 66.1125 9.40286 61.2547 9.80892 58.2571C10.0458 56.4431 11.0271 52.6614 11.6531 51.0627C12.093 49.9558 13.2266 47.8652 14.2248 46.2972C15.443 44.3602 17.2026 41.8852 17.2872 41.9621C17.338 41.9928 17.1857 42.3925 16.9488 42.8537C15.5953 45.6669 14.0387 50.7091 13.5481 53.9066C12.3806 61.6083 13.9541 69.4944 18.1332 76.8118C23.1413 85.5434 31.8039 92.6456 41.9724 96.3504C47.708 98.4257 52.1577 99.4249 57.6227 99.8861C60.4143 100.117 67.2328 99.9783 69.8891 99.6401C76.4368 98.8254 82.3586 97.1344 88.1449 94.4442L90.852 93.1836L86.6222 93.0914C82.4601 93.0145 82.3755 92.9992 80.1252 92.4611C76.9613 91.6925 75.1848 91.0776 72.427 89.817C64.9148 86.3582 59.2469 81.2084 55.6769 74.5828C51.4133 66.712 50.7365 57.2732 53.8158 48.8798C57.9441 37.5963 67.7234 29.541 83.4583 24.468C87.9081 23.023 93.0177 21.7471 97.975 20.8555C99.0071 20.671 99.9038 20.4865 99.9884 20.4404C100.191 20.3174 97.6874 18.0577 95.8432 16.7049C90.7843 13.0154 82.9677 10.233 74.7957 9.24915C70.4474 8.72648 71.0565 8.95707 68.9078 6.974C67.8588 6.00553 66.4883 4.91407 65.8285 4.51438C60.5666 1.40912 52.7499 -0.343362 46.033 0.0563256ZM59.4161 12.339C62.377 13.9993 61.328 18.4112 57.8934 18.6726C55.6093 18.8417 53.9173 17.3966 53.9004 15.2752C53.9004 14.7833 54.0189 14.1376 54.1711 13.8148C55.034 11.924 57.4704 11.2322 59.4161 12.339Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-bricolage">EPℇC Corvux</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2A2D31] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-satoshi">MS</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white font-satoshi">Maersk Shipping</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-[#2A2D31] rounded-lg ml-4"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Layout colapsado */}
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              isHovered
                ? "lg:opacity-0 lg:invisible lg:absolute"
                : "lg:opacity-100 lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full"
            }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="w-8 h-8 flex-shrink-0" title="EPℇC Corvux">
                <svg width="32" height="32" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.033 0.0563256C38.6393 0.502132 30.8564 3.2692 24.6978 7.6504C15.6968 14.0608 8.28619 24.3604 3.81952 36.7046C2.21219 41.132 0.960166 45.7591 0.317235 49.6791C-0.105745 52.231 -0.105745 59.3178 0.317235 61.9465C1.90764 72.0463 7.01725 80.9009 15.6461 88.5257C18.1839 90.7855 22.16 93.8139 23.7504 94.7055C23.8688 94.767 23.2766 94.0753 22.4307 93.1529C16.0352 86.2045 11.8392 78.0416 10.1473 69.2024C9.55513 66.1125 9.40286 61.2547 9.80892 58.2571C10.0458 56.4431 11.0271 52.6614 11.6531 51.0627C12.093 49.9558 13.2266 47.8652 14.2248 46.2972C15.443 44.3602 17.2026 41.8852 17.2872 41.9621C17.338 41.9928 17.1857 42.3925 16.9488 42.8537C15.5953 45.6669 14.0387 50.7091 13.5481 53.9066C12.3806 61.6083 13.9541 69.4944 18.1332 76.8118C23.1413 85.5434 31.8039 92.6456 41.9724 96.3504C47.708 98.4257 52.1577 99.4249 57.6227 99.8861C60.4143 100.117 67.2328 99.9783 69.8891 99.6401C76.4368 98.8254 82.3586 97.1344 88.1449 94.4442L90.852 93.1836L86.6222 93.0914C82.4601 93.0145 82.3755 92.9992 80.1252 92.4611C76.9613 91.6925 75.1848 91.0776 72.427 89.817C64.9148 86.3582 59.2469 81.2084 55.6769 74.5828C51.4133 66.712 50.7365 57.2732 53.8158 48.8798C57.9441 37.5963 67.7234 29.541 83.4583 24.468C87.9081 23.023 93.0177 21.7471 97.975 20.8555C99.0071 20.671 99.9038 20.4865 99.9884 20.4404C100.191 20.3174 97.6874 18.0577 95.8432 16.7049C90.7843 13.0154 82.9677 10.233 74.7957 9.24915C70.4474 8.72648 71.0565 8.95707 68.9078 6.974C67.8588 6.00553 66.4883 4.91407 65.8285 4.51438C60.5666 1.40912 52.7499 -0.343362 46.033 0.0563256ZM59.4161 12.339C62.377 13.9993 61.328 18.4112 57.8934 18.6726C55.6093 18.8417 53.9173 17.3966 53.9004 15.2752C53.9004 14.7833 54.0189 14.1376 54.1711 13.8148C55.034 11.924 57.4704 11.2322 59.4161 12.339Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div
                className="w-8 h-8 bg-[#2A2D31] rounded-lg flex items-center justify-center flex-shrink-0"
                title="Maersk Shipping"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-satoshi">MS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden flex items-start justify-between h-full">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M46.033 0.0563256C38.6393 0.502132 30.8564 3.2692 24.6978 7.6504C15.6968 14.0608 8.28619 24.3604 3.81952 36.7046C2.21219 41.132 0.960166 45.7591 0.317235 49.6791C-0.105745 52.231 -0.105745 59.3178 0.317235 61.9465C1.90764 72.0463 7.01725 80.9009 15.6461 88.5257C18.1839 90.7855 22.16 93.8139 23.7504 94.7055C23.8688 94.767 23.2766 94.0753 22.4307 93.1529C16.0352 86.2045 11.8392 78.0416 10.1473 69.2024C9.55513 66.1125 9.40286 61.2547 9.80892 58.2571C10.0458 56.4431 11.0271 52.6614 11.6531 51.0627C12.093 49.9558 13.2266 47.8652 14.2248 46.2972C15.443 44.3602 17.2026 41.8852 17.2872 41.9621C17.338 41.9928 17.1857 42.3925 16.9488 42.8537C15.5953 45.6669 14.0387 50.7091 13.5481 53.9066C12.3806 61.6083 13.9541 69.4944 18.1332 76.8118C23.1413 85.5434 31.8039 92.6456 41.9724 96.3504C47.708 98.4257 52.1577 99.4249 57.6227 99.8861C60.4143 100.117 67.2328 99.9783 69.8891 99.6401C76.4368 98.8254 82.3586 97.1344 88.1449 94.4442L90.852 93.1836L86.6222 93.0914C82.4601 93.0145 82.3755 92.9992 80.1252 92.4611C76.9613 91.6925 75.1848 91.0776 72.427 89.817C64.9148 86.3582 59.2469 81.2084 55.6769 74.5828C51.4133 66.712 50.7365 57.2732 53.8158 48.8798C57.9441 37.5963 67.7234 29.541 83.4583 24.468C87.9081 23.023 93.0177 21.7471 97.975 20.8555C99.0071 20.671 99.9038 20.4865 99.9884 20.4404C100.191 20.3174 97.6874 18.0577 95.8432 16.7049C90.7843 13.0154 82.9677 10.233 74.7957 9.24915C70.4474 8.72648 71.0565 8.95707 68.9078 6.974C67.8588 6.00553 66.4883 4.91407 65.8285 4.51438C60.5666 1.40912 52.7499 -0.343362 46.033 0.0563256ZM59.4161 12.339C62.377 13.9993 61.328 18.4112 57.8934 18.6726C55.6093 18.8417 53.9173 17.3966 53.9004 15.2752C53.9004 14.7833 54.0189 14.1376 54.1711 13.8148C55.034 11.924 57.4704 11.2322 59.4161 12.339Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-bricolage">EPℇC Corvux</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#2A2D31] rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-satoshi">MS</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white font-satoshi">Maersk Shipping</div>
                </div>
              </div>
            </div>

            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-[#2A2D31] rounded-lg ml-4">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={`${isHovered ? "px-4" : "lg:px-2"} flex-shrink-0`}>
        <div className="h-px bg-[#2A2D31]"></div>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 ${isHovered ? "px-4" : "lg:px-2"} overflow-y-auto pt-2`}>
        <div className="space-y-1">
          <div
            className={`flex items-center ${isHovered ? "gap-3 px-4" : "lg:justify-center lg:px-2"} py-2 text-white bg-blue-500/20 border border-blue-500/30 rounded-xl font-medium group`}
            title={!isHovered ? "Maritime Compliance" : ""}
          >
            <div className="w-8 h-8 bg-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Ship className="h-4 w-4 text-blue-400" />
            </div>
            {isHovered && <span className="text-sm font-bold font-satoshi">Maritime Compliance</span>}
          </div>

          {isHovered && (
            <div className="ml-4 space-y-0.5">
              {maritimeSubsections.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (isCurrentPathDashboard && item.path === "/dashboard-preview/compliance-officer")
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-blue-500/20 border border-blue-500/30 font-medium"
                        : "text-gray-400 hover:text-white hover:bg-[#2A2D31]"
                    }`}
                  >
                    <span className={`text-sm ${isActive ? "font-bold" : ""} font-satoshi`}>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="py-1">
          <div className="h-px bg-[#2A2D31]"></div>
        </div>

        <div className="space-y-0.5">
          {isHovered && (
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-satoshi">
                Coming Soon
              </span>
            </div>
          )}

          {[
            { icon: Leaf, name: "Aviation Compliance" },
            { icon: Recycle, name: "Road Freight" },
            { icon: Battery, name: "Rail & Inland Waterways" },
            { icon: TreePine, name: "Energy Facilities" },
            { icon: DollarSign, name: "Waste & Circularity" },
            { icon: Brain, name: "Green Finance Tracking" },
            { icon: Users, name: "Supply Chain ESG" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${isHovered ? "gap-3 px-4" : "lg:justify-center lg:px-2"} py-2 text-gray-500 rounded-xl cursor-not-allowed opacity-60`}
              title={!isHovered ? item.name : ""}
            >
              <div className="w-8 h-8 bg-[#2A2D31] rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="h-4 w-4 text-gray-500" />
              </div>
              {isHovered && <span className="text-sm font-satoshi">{item.name}</span>}
            </div>
          ))}
        </div>

        <div className="py-1">
          <div className="h-px bg-[#2A2D31]"></div>
        </div>

        <div className="space-y-1">
          {isHovered && (
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-satoshi">
                Utilities
              </span>
            </div>
          )}

          <Link
            href="/dashboard-preview/settings"
            className={`flex items-center ${isHovered ? "gap-3 px-4" : "lg:justify-center lg:px-2"} py-2 rounded-xl transition-all duration-200 ${
              pathname === "/dashboard-preview/settings"
                ? "text-white bg-blue-500/20 border border-blue-500/30 font-medium"
                : "text-gray-400 hover:text-white hover:bg-[#2A2D31]"
            }`}
            title={!isHovered ? "Settings" : ""}
          >
            <div className="w-8 h-8 bg-[#2A2D31] rounded-xl flex items-center justify-center flex-shrink-0">
              <Settings className="h-4 w-4" />
            </div>
            {isHovered && <span className="text-sm font-satoshi">Settings</span>}
          </Link>
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className={`${isHovered ? "p-4" : "lg:p-2"} space-y-3 border-t border-[#2A2D31] flex-shrink-0`}>
        <button
          className={`w-full flex items-center ${isHovered ? "gap-3 px-4" : "lg:justify-center lg:px-2"} py-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 font-medium font-satoshi`}
          title={!isHovered ? "Log Out" : ""}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {isHovered && <span className="text-sm">Log Out</span>}
        </button>
      </div>
    </div>
  )
}
