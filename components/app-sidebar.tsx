"use client"

import type * as React from "react"
import { BarChart3, Building2, Leaf, Users, TrendingUp, FileText, Settings, ChevronRight, Ship } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// ESG Modules data
const esgModules = [
  {
    title: "Maritime Compliance",
    url: "/dashboard-preview/compliance-officer", // Cambiar de "/dashboard" a "/dashboard-preview/compliance-officer"
    icon: Ship,
    isActive: true,
    shortTitle: "Maritime",
  },
  {
    title: "Carbon Management",
    url: "#",
    icon: Leaf,
    isActive: false,
    comingSoon: true,
    shortTitle: "Carbon",
  },
  {
    title: "Supply Chain ESG",
    url: "#",
    icon: Building2,
    isActive: false,
    comingSoon: true,
    shortTitle: "Supply Chain",
  },
  {
    title: "Social Impact",
    url: "#",
    icon: Users,
    isActive: false,
    comingSoon: true,
    shortTitle: "Social",
  },
  {
    title: "ESG Reporting",
    url: "#",
    icon: FileText,
    isActive: false,
    comingSoon: true,
    shortTitle: "Reporting",
  },
  {
    title: "Performance Analytics",
    url: "#",
    icon: TrendingUp,
    isActive: false,
    comingSoon: true,
    shortTitle: "Analytics",
  },
]

const quickActions = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#252528] text-white">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-sm md:text-base">EPℇC Corvux</span>
            <span className="truncate text-xs text-muted-foreground hidden md:block">ESG Platform</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs lg:text-sm">ESG Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {esgModules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={`${item.comingSoon ? "opacity-60" : ""} h-10 lg:h-8`}
                  >
                    <a href={item.url} className={item.comingSoon ? "pointer-events-none" : ""}>
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate text-xs md:text-sm font-medium">{item.title}</span>
                      {item.comingSoon && (
                        <span className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded-full hidden md:block">
                          Soon
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs lg:text-sm">Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 lg:h-8">
                    <a href={item.url}>
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate text-sm lg:text-xs xl:text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 lg:h-10">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                <span className="text-sm font-medium">JD</span>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                <span className="truncate font-semibold text-xs md:text-sm">John Doe</span>
                <span className="truncate text-xs text-muted-foreground hidden md:block">Admin</span>
              </div>
              <ChevronRight className="ml-auto h-4 w-4 flex-shrink-0" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
