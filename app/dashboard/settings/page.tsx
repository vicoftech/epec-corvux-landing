"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function SettingsPage() {
  const handleUploadClick = () => {
    // Handle upload click
  }

  return (
    <div className="px-4 md:px-8 py-6">
      <DashboardHeader onUploadClick={handleUploadClick} />

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-6 font-bricolage">Settings</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-600 mb-4 font-satoshi">
            This page will contain account settings, preferences, and configuration options.
          </p>
          <div className="grid gap-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium mb-2 font-satoshi">Account Settings</h3>
              <p className="text-sm text-gray-500 font-satoshi">Manage your account details and preferences</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium mb-2 font-satoshi">Notification Preferences</h3>
              <p className="text-sm text-gray-500 font-satoshi">Configure how and when you receive notifications</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium mb-2 font-satoshi">API Access</h3>
              <p className="text-sm text-gray-500 font-satoshi">Manage API keys and integration settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
