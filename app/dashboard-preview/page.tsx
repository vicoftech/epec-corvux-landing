"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Ship, FileText, ArrowRight, Users } from "lucide-react"

const userRoles = [
  {
    id: "sustainability-officer",
    title: "Sustainability Officer",
    description: "Monitor emissions, track sustainability metrics, and manage environmental compliance reporting",
    icon: Shield,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    path: "/dashboard-preview/sustainability-officer",
    keyFeatures: ["Emissions Tracking", "Sustainability Metrics", "Environmental Reports"],
  },
  {
    id: "verifier",
    title: "External Verifier",
    description: "Review and verify compliance data, audit reports, and validate emission calculations",
    icon: CheckCircle,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    path: "/dashboard-preview/verifier",
    keyFeatures: ["Data Verification", "Audit Reports", "Compliance Validation"],
  },
  {
    id: "operator",
    title: "Vessel Operator",
    description: "Manage vessel operations, fuel consumption, and voyage data collection",
    icon: Ship,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    path: "/dashboard-preview/operator",
    keyFeatures: ["Voyage Logs", "Fuel Management", "Operational Data"],
  },
  {
    id: "compliance-officer",
    title: "Compliance Officer",
    description: "Oversee regulatory compliance, manage submissions, and coordinate reporting deadlines",
    icon: FileText,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    path: "/dashboard-preview/compliance-officer",
    keyFeatures: ["Regulatory Oversight", "Submission Management", "Deadline Tracking"],
  },
]

export default function DashboardPreview() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F2F5F7]" style={{ fontFamily: "Satoshi, sans-serif" }}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-[#32BB88] mr-3" />
            <h1 className="text-4xl font-bold text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              Dashboard Preview
            </h1>
          </div>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Select your role to preview the tailored dashboard experience for ESG maritime compliance
          </p>
        </div>

        {/* Role Selection Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {userRoles.map((role) => {
            const IconComponent = role.icon
            return (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
                  selectedRole === role.id ? role.color : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${role.color}`}>
                      <IconComponent className={`w-6 h-6 ${role.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold text-[#0F1114] mb-2"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        {role.title}
                      </h3>
                      <p className="text-[#4A4A4A] mb-4 leading-relaxed">{role.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-[#0F1114]">Key Features:</p>
                        <ul className="text-sm text-[#4A4A4A] space-y-1">
                          {role.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-[#32BB88] rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Button */}
        {selectedRole && (
          <div className="text-center">
            <Link href={userRoles.find((role) => role.id === selectedRole)?.path || ""}>
              <Button size="lg" className="bg-[#4461F2] hover:bg-[#3651E1] text-white px-8 py-3 text-lg font-medium">
                View {userRoles.find((role) => role.id === selectedRole)?.title} Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#4A4A4A]">
            Each dashboard is tailored to specific workflows and responsibilities within maritime ESG compliance
          </p>
        </div>
      </div>
    </div>
  )
}
