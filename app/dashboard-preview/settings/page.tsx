"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"

export default function SettingsPreviewPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-bricolage">Settings</h1>
          <p className="text-gray-600 mt-2 font-satoshi">
            Manage your account preferences, notifications, and system configurations.
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Settings</h3>
            <nav className="space-y-2">
              {[
                { name: "Profile", active: true },
                { name: "Notifications", active: false },
                { name: "Security", active: false },
                { name: "Integrations", active: false },
                { name: "Billing", active: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-3 py-2 rounded-lg font-satoshi ${
                    item.active ? "bg-[#4C8B9D] text-white" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Profile Settings */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 font-bricolage">Profile Settings</h3>

            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4 font-satoshi">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">First Name</label>
                    <input
                      type="text"
                      defaultValue="María"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">Last Name</label>
                    <input
                      type="text"
                      defaultValue="González"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">Email</label>
                    <input
                      type="email"
                      defaultValue="maria.gonzalez@maersk.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">Role</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi">
                      <option>Compliance Officer</option>
                      <option>Sustainability Manager</option>
                      <option>Fleet Operator</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4 font-satoshi">Company Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">Company</label>
                    <input
                      type="text"
                      defaultValue="Maersk Shipping"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-satoshi">Department</label>
                    <input
                      type="text"
                      defaultValue="Environmental Compliance"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4C8B9D] focus:border-transparent font-satoshi"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4 font-satoshi">Preferences</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 font-satoshi">Email Notifications</div>
                      <div className="text-sm text-gray-600 font-satoshi">
                        Receive email updates about compliance deadlines
                      </div>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#4C8B9D]">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 font-satoshi">Dashboard Alerts</div>
                      <div className="text-sm text-gray-600 font-satoshi">
                        Show alerts on dashboard for urgent items
                      </div>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#4C8B9D]">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-4">
                <button className="bg-[#4C8B9D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3A6B7A] transition-colors font-satoshi">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
