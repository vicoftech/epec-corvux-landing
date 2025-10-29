"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"
import { KPICard } from "@/components/dashboard/shared/kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, TrendingDown, Target, FileText, AlertTriangle, CheckCircle, Upload, Calendar } from "lucide-react"

export default function SustainabilityOfficerDashboard() {
  return (
    <DashboardLayout
      title="Sustainability Dashboard"
      user={{
        name: "Dr. Elena Rodriguez",
        role: "Sustainability Officer",
      }}
    >
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Total CO₂ Emissions"
          value="2,847 tCO₂"
          change="-12.3% vs last quarter"
          changeType="positive"
          icon={Leaf}
          iconColor="text-[#32BB88]"
          description="Quarterly emissions tracking"
        />
        <KPICard
          title="Emission Intensity"
          value="3.2 gCO₂/t·nm"
          change="-8.7% improvement"
          changeType="positive"
          icon={TrendingDown}
          iconColor="text-blue-600"
          description="Per tonne-nautical mile"
        />
        <KPICard
          title="Sustainability Score"
          value="87/100"
          change="+5 points"
          changeType="positive"
          icon={Target}
          iconColor="text-purple-600"
          description="Overall ESG performance"
        />
        <KPICard
          title="Reports Due"
          value="3"
          change="Next: EU MRV (5 days)"
          changeType="neutral"
          icon={FileText}
          iconColor="text-orange-600"
          description="Upcoming submissions"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Emissions Overview */}
        <Card className="lg:col-span-2 bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Emissions Breakdown by Vessel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  vessel: "MV Atlantic Pioneer",
                  emissions: "847 tCO₂",
                  efficiency: "3.1 gCO₂/t·nm",
                  status: "compliant",
                },
                {
                  vessel: "MV Pacific Explorer",
                  emissions: "923 tCO₂",
                  efficiency: "3.4 gCO₂/t·nm",
                  status: "compliant",
                },
                {
                  vessel: "MV Nordic Voyager",
                  emissions: "1,077 tCO₂",
                  efficiency: "3.8 gCO₂/t·nm",
                  status: "attention",
                },
              ].map((vessel, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0F1114]">{vessel.vessel}</h4>
                    <p className="text-sm text-[#4A4A4A]">Efficiency: {vessel.efficiency}</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-semibold text-[#0F1114]">{vessel.emissions}</p>
                  </div>
                  <Badge variant={vessel.status === "compliant" ? "default" : "destructive"}>
                    {vessel.status === "compliant" ? "Compliant" : "Needs Review"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Action Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">EU MRV Report Due</p>
                  <p className="text-xs text-[#4A4A4A]">Submit by March 31st</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#32BB88] mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">Q1 Emissions Verified</p>
                  <p className="text-xs text-[#4A4A4A]">All data validated</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Upload className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">Upload Fuel Receipts</p>
                  <p className="text-xs text-[#4A4A4A]">3 vessels pending</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-[#32BB88] hover:bg-[#2BA876] text-white">View All Tasks</Button>
          </CardContent>
        </Card>
      </div>

      {/* Sustainability Metrics */}
      <Card className="bg-white border border-gray-200/50 mb-8">
        <CardHeader>
          <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            Sustainability Metrics Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-[#32BB88] mb-2">94%</div>
              <p className="text-sm text-[#4A4A4A]">Data Completeness</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-[#4461F2] mb-2">15%</div>
              <p className="text-sm text-[#4A4A4A]">Emission Reduction YoY</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">8/10</div>
              <p className="text-sm text-[#4A4A4A]">Vessels Meeting Targets</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <FileText className="w-6 h-6 text-[#4461F2]" />
          <span className="text-sm">Generate Report</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Upload className="w-6 h-6 text-[#32BB88]" />
          <span className="text-sm">Upload Data</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Target className="w-6 h-6 text-purple-600" />
          <span className="text-sm">Set Targets</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Calendar className="w-6 h-6 text-orange-600" />
          <span className="text-sm">Schedule Review</span>
        </Button>
      </div>
    </DashboardLayout>
  )
}
