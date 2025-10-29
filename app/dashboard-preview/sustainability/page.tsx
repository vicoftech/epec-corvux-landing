"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"

export default function SustainabilityPreviewPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-bricolage">Sustainability Metrics</h1>
            <p className="text-gray-600 mt-2 font-satoshi">
              Monitor environmental performance, track sustainability goals, and analyze green initiatives.
            </p>
          </div>
          <button className="bg-[#4C8B9D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3A6B7A] transition-colors font-satoshi">
            Set New Target
          </button>
        </div>

        {/* Sustainability Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 font-bricolage">Carbon Intensity</h3>
              <span className="text-green-600 text-sm font-medium font-satoshi">On Track</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2 font-bricolage">2.4 g/tonne·nm</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <div className="text-sm text-gray-600 font-satoshi">75% to 2030 target</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 font-bricolage">Fuel Efficiency</h3>
              <span className="text-yellow-600 text-sm font-medium font-satoshi">Needs Attention</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2 font-bricolage">12.8 MT/day</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
            </div>
            <div className="text-sm text-gray-600 font-satoshi">60% to efficiency target</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 font-bricolage">Alternative Fuels</h3>
              <span className="text-green-600 text-sm font-medium font-satoshi">Ahead</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2 font-bricolage">18%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <div className="text-sm text-gray-600 font-satoshi">90% to 2025 target</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emissions Trend */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Emissions Reduction Progress</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-satoshi">Emissions reduction chart will be displayed here</p>
            </div>
          </div>

          {/* Sustainability Score */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Sustainability Score</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-satoshi">Sustainability score visualization will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Green Initiatives */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 font-bricolage">Active Green Initiatives</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Wind-Assisted Propulsion",
                  progress: 85,
                  status: "Implementation",
                  impact: "15% fuel reduction",
                },
                { title: "Shore Power Connection", progress: 60, status: "Planning", impact: "Zero port emissions" },
                { title: "Biofuel Adoption", progress: 40, status: "Pilot", impact: "20% carbon reduction" },
              ].map((initiative, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 font-satoshi">{initiative.title}</h4>
                    <span className="text-sm text-gray-600 font-satoshi">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="bg-[#4C8B9D] h-2 rounded-full" style={{ width: `${initiative.progress}%` }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1 font-satoshi">Status: {initiative.status}</div>
                  <div className="text-sm text-green-600 font-satoshi">Impact: {initiative.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
