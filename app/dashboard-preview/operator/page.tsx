"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"
import { KPICard } from "@/components/dashboard/shared/kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ship, Fuel, MapPin, Clock, TrendingUp, AlertTriangle, CheckCircle, Upload, Route } from "lucide-react"

export default function OperatorDashboard() {
  return (
    <DashboardLayout
      title="Fleet Operations Dashboard"
      user={{
        name: "Captain Sarah Chen",
        role: "Vessel Operator",
      }}
    >
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Active Vessels"
          value="12"
          change="2 in port, 10 at sea"
          changeType="neutral"
          icon={Ship}
          iconColor="text-blue-600"
          description="Fleet status overview"
        />
        <KPICard
          title="Fuel Efficiency"
          value="3.2 t/day"
          change="-8% vs target"
          changeType="positive"
          icon={Fuel}
          iconColor="text-[#32BB88]"
          description="Average consumption"
        />
        <KPICard
          title="On-Time Performance"
          value="94%"
          change="+2% this month"
          changeType="positive"
          icon={Clock}
          iconColor="text-purple-600"
          description="Schedule adherence"
        />
        <KPICard
          title="Pending Data Entries"
          value="8"
          change="3 overdue"
          changeType="negative"
          icon={Upload}
          iconColor="text-orange-600"
          description="Voyage logs & fuel data"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Fleet Status */}
        <Card className="lg:col-span-2 bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Fleet Status & Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  vessel: "MV Atlantic Pioneer",
                  status: "At Sea",
                  route: "Hamburg → Singapore",
                  eta: "Mar 15, 14:30",
                  fuel: "2.8 t/day",
                  efficiency: "Good",
                },
                {
                  vessel: "MV Pacific Explorer",
                  status: "Loading",
                  route: "Port of Rotterdam",
                  eta: "Departure: Mar 12",
                  fuel: "0.5 t/day",
                  efficiency: "Excellent",
                },
                {
                  vessel: "MV Nordic Voyager",
                  status: "At Sea",
                  route: "Shanghai → Los Angeles",
                  eta: "Mar 18, 09:15",
                  fuel: "3.6 t/day",
                  efficiency: "Attention",
                },
              ].map((vessel, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-[#0F1114]">{vessel.vessel}</h4>
                      <Badge variant={vessel.status === "At Sea" ? "default" : "secondary"}>{vessel.status}</Badge>
                    </div>
                    <p className="text-sm text-[#4A4A4A] mb-1">{vessel.route}</p>
                    <p className="text-xs text-[#4A4A4A]">{vessel.eta}</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="text-sm font-medium text-[#0F1114]">{vessel.fuel}</p>
                    <Badge
                      variant={
                        vessel.efficiency === "Excellent"
                          ? "default"
                          : vessel.efficiency === "Good"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {vessel.efficiency}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Operational Alerts */}
        <Card className="bg-white border border-gray-200/50">
          <CardHeader>
            <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Operational Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">High Fuel Consumption</p>
                  <p className="text-xs text-[#4A4A4A]">MV Nordic Voyager - 15% above target</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">Overdue Voyage Log</p>
                  <p className="text-xs text-[#4A4A4A]">3 vessels missing data entries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#32BB88] mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">Route Optimization</p>
                  <p className="text-xs text-[#4A4A4A]">Saved 2.3 tons fuel this week</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F1114]">Port Congestion Alert</p>
                  <p className="text-xs text-[#4A4A4A]">Singapore - 6hr delay expected</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-[#4461F2] hover:bg-[#3651E1] text-white">View All Alerts</Button>
          </CardContent>
        </Card>
      </div>

      {/* Fuel & Efficiency Tracking */}
      <Card className="bg-white border border-gray-200/50 mb-8">
        <CardHeader>
          <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            Fuel Consumption & Efficiency Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">847 t</div>
              <p className="text-sm text-[#4A4A4A]">Total Fuel This Month</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-[#32BB88] mb-2">-12%</div>
              <p className="text-sm text-[#4A4A4A]">Consumption vs Target</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">3.1</div>
              <p className="text-sm text-[#4A4A4A]">Avg. gCO₂/t·nm</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">$2.3M</div>
              <p className="text-sm text-[#4A4A4A]">Fuel Cost Savings YTD</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Entry Status */}
      <Card className="bg-white border border-gray-200/50 mb-8">
        <CardHeader>
          <CardTitle className="text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            Data Entry Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { vessel: "MV Atlantic Pioneer", voyage: "HAM-SIN-001", status: "complete", dueDate: "Completed" },
              { vessel: "MV Pacific Explorer", voyage: "RTM-NYC-045", status: "pending", dueDate: "Due: Mar 10" },
              { vessel: "MV Nordic Voyager", voyage: "SHA-LAX-023", status: "overdue", dueDate: "Overdue: 3 days" },
            ].map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-[#0F1114]">{entry.vessel}</p>
                  <p className="text-sm text-[#4A4A4A]">Voyage: {entry.voyage}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-[#4A4A4A]">{entry.dueDate}</span>
                  <Badge
                    variant={
                      entry.status === "complete" ? "default" : entry.status === "pending" ? "secondary" : "destructive"
                    }
                  >
                    {entry.status === "complete" ? "Complete" : entry.status === "pending" ? "Pending" : "Overdue"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Upload className="w-6 h-6 text-[#32BB88]" />
          <span className="text-sm">Upload Voyage Data</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Fuel className="w-6 h-6 text-blue-600" />
          <span className="text-sm">Record Fuel Consumption</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <Route className="w-6 h-6 text-purple-600" />
          <span className="text-sm">Plan Route</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
          <TrendingUp className="w-6 h-6 text-orange-600" />
          <span className="text-sm">View Analytics</span>
        </Button>
      </div>
    </DashboardLayout>
  )
}
