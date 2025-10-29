"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"

export default function VoyageLogsPreviewPage() {
  const mockUser = { name: "user", role: "Admin" }
  return (
    <DashboardLayout title="Dashboard" user={mockUser}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-bricolage">Voyage & Fuel Logs</h1>
            <p className="text-gray-600 mt-2 font-satoshi">
              Monitor voyage data, fuel consumption, and operational metrics for your fleet.
            </p>
          </div>
          <button className="bg-[#4C8B9D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3A6B7A] transition-colors font-satoshi">
            Add New Log
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">1,247</div>
            <div className="text-sm text-gray-600 font-satoshi">Total Voyages</div>
            <div className="text-xs text-blue-600 mt-1 font-satoshi">This year</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">18,450</div>
            <div className="text-sm text-gray-600 font-satoshi">Fuel Consumed (MT)</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">-8% vs last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">2.4</div>
            <div className="text-sm text-gray-600 font-satoshi">Avg Efficiency (g/tonne·nm)</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">Improved</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">12</div>
            <div className="text-sm text-gray-600 font-satoshi">Active Voyages</div>
            <div className="text-xs text-gray-500 mt-1 font-satoshi">Currently at sea</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fuel Consumption Chart */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Fuel Consumption Trend</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-satoshi">Fuel consumption chart will be displayed here</p>
            </div>
          </div>

          {/* Efficiency Metrics */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Efficiency Metrics</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-satoshi">Efficiency metrics chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Recent Voyage Logs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 font-bricolage">Recent Voyage Logs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Vessel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Fuel Used
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Distance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    vessel: "Maersk Sealand",
                    route: "Rotterdam → Shanghai",
                    fuel: "245 MT",
                    distance: "11,200 nm",
                    status: "Completed",
                  },
                  {
                    vessel: "Emma Maersk",
                    route: "Hamburg → Los Angeles",
                    fuel: "312 MT",
                    distance: "8,900 nm",
                    status: "In Progress",
                  },
                  {
                    vessel: "Maersk Line",
                    route: "Singapore → Felixstowe",
                    fuel: "198 MT",
                    distance: "9,800 nm",
                    status: "Completed",
                  },
                ].map((log, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-satoshi">
                      {log.vessel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-satoshi">{log.route}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-satoshi">{log.fuel}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-satoshi">{log.distance}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium font-satoshi ${
                          log.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-[#4C8B9D] hover:text-[#3A6B7A] font-satoshi">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
