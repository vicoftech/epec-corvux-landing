"use client"

import { KPICard } from "@/components/dashboard/shared/kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ship, AlertTriangle, CheckCircle, Upload, FileText, Users, Calendar } from "lucide-react"

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl font-bold text-[#0F1114] mb-2"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Fleet Overview Dashboard
        </h1>
        <p className="text-[#4A4A4A] text-lg">Monitor your maritime compliance and fleet performance</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Active Vessels"
          value="12"
          change="+2 this month"
          changeType="positive"
          icon={Ship}
          iconColor="text-blue-600"
          description="Fleet operational status"
        />
        <KPICard
          title="Compliance Rate"
          value="94%"
          change="+3% improvement"
          changeType="positive"
          icon={CheckCircle}
          iconColor="text-[#32BB88]"
          description="Regulatory adherence"
        />
        <KPICard
          title="Pending Reports"
          value="7"
          change="3 due this week"
          changeType="neutral"
          icon={FileText}
          iconColor="text-orange-600"
          description="Awaiting submission"
        />
        <KPICard
          title="Team Members"
          value="15"
          change="2 new hires"
          changeType="positive"
          icon={Users}
          iconColor="text-purple-600"
          description="Active staff"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Fleet Status */}
        <Card className="lg:col-span-2 bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Fleet Status Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  vessel: "MV Atlantic Pioneer",
                  status: "At Sea",
                  compliance: "Compliant",
                  nextReport: "EU MRV - Jul 15",
                },
                {
                  vessel: "MV Pacific Explorer",
                  status: "In Port",
                  compliance: "Compliant",
                  nextReport: "IMO DCS - Aug 1",
                },
                {
                  vessel: "MV Nordic Voyager",
                  status: "At Sea",
                  compliance: "Action Required",
                  nextReport: "EU ETS - Jun 30",
                },
              ].map((vessel, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0F1114]">{vessel.vessel}</h4>
                    <p className="text-sm text-[#4A4A4A]">
                      {vessel.status} • {vessel.nextReport}
                    </p>
                  </div>
                  <Badge variant={vessel.compliance === "Compliant" ? "default" : "destructive"}>
                    {vessel.compliance}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-[#32BB88] hover:bg-[#2BA876] text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload Compliance Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Review
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white border border-gray-200/50">
        <CardHeader>
          <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "EU MRV report submitted",
                vessel: "MV Atlantic Pioneer",
                time: "2 hours ago",
                status: "success",
              },
              {
                action: "Fuel consumption data uploaded",
                vessel: "MV Pacific Explorer",
                time: "5 hours ago",
                status: "success",
              },
              {
                action: "Compliance review required",
                vessel: "MV Nordic Voyager",
                time: "1 day ago",
                status: "warning",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full ${activity.status === "success" ? "bg-[#32BB88]" : "bg-orange-500"}`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">{activity.action}</p>
                  <p className="text-xs text-[#4A4A4A]">
                    {activity.vessel} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
