"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function EmissionsPage() {
  const handleUploadClick = () => {
    // Handle upload click
  }

  return (
    <div className="px-4 md:px-8 py-6">
      <DashboardHeader onUploadClick={handleUploadClick} />

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-6 font-bricolage">Emissions Reporting</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-600 mb-4 font-satoshi">
            This page will contain emissions reporting tools and visualizations for your fleet.
          </p>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 font-satoshi">Emissions data visualization will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
