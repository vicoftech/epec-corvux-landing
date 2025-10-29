"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"

export default function EmissionsPreviewPage() {
  const mockUser = { name: "user", role: "Admin" }
  return (
    <DashboardLayout title="Dashboard" user={mockUser}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-bricolage">Emissions Reporting</h1>
            <p className="text-gray-600 mt-2 font-satoshi">
              Track, analyze and report your fleet's emissions data across all regulatory frameworks.
            </p>
          </div>
          <button className="bg-[#4C8B9D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3A6B7A] transition-colors font-satoshi">
            Upload New Report
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">2,847</div>
            <div className="text-sm text-gray-600 font-satoshi">Total CO₂ Emissions (tCO₂)</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">-12% vs last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">25</div>
            <div className="text-sm text-gray-600 font-satoshi">Active Vessels</div>
            <div className="text-xs text-gray-500 mt-1 font-satoshi">All reporting</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">8</div>
            <div className="text-sm text-gray-600 font-satoshi">Reports This Month</div>
            <div className="text-xs text-blue-600 mt-1 font-satoshi">+2 vs last month</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">94%</div>
            <div className="text-sm text-gray-600 font-satoshi">Compliance Rate</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">Above target</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emissions Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Monthly Emissions Trend</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-satoshi">Emissions trend chart will be displayed here</p>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Recent Reports</h3>
            <div className="space-y-4">
              {[
                { vessel: "Maersk Sealand", date: "Dec 15, 2024", status: "Submitted" },
                { vessel: "Emma Maersk", date: "Dec 14, 2024", status: "Draft" },
                { vessel: "Maersk Line", date: "Dec 13, 2024", status: "Approved" },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 font-satoshi">{report.vessel}</div>
                    <div className="text-sm text-gray-600 font-satoshi">{report.date}</div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium font-satoshi ${
                      report.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : report.status === "Submitted"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fleet Emissions Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 font-bricolage">Fleet Emissions Overview</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Vessel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    CO₂ Emissions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-satoshi">
                    Last Report
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
                    emissions: "142.5 tCO₂",
                    lastReport: "Dec 15, 2024",
                    status: "Up to date",
                  },
                  { vessel: "Emma Maersk", emissions: "238.7 tCO₂", lastReport: "Dec 10, 2024", status: "Pending" },
                  { vessel: "Maersk Line", emissions: "195.3 tCO₂", lastReport: "Dec 12, 2024", status: "Up to date" },
                ].map((vessel, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 font-satoshi">
                      {vessel.vessel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-satoshi">
                      {vessel.emissions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-satoshi">
                      {vessel.lastReport}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium font-satoshi ${
                          vessel.status === "Up to date"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {vessel.status}
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
