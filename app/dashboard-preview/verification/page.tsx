"use client"

import { DashboardLayout } from "@/components/dashboard/shared/dashboard-layout"

export default function VerificationPreviewPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-bricolage">Verification Hub</h1>
            <p className="text-gray-600 mt-2 font-satoshi">
              Manage verifier relationships, track verification status, and coordinate compliance reviews.
            </p>
          </div>
          <button className="bg-[#4C8B9D] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3A6B7A] transition-colors font-satoshi">
            Request Verification
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">3</div>
            <div className="text-sm text-gray-600 font-satoshi">Active Verifiers</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">All certified</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">12</div>
            <div className="text-sm text-gray-600 font-satoshi">Pending Reviews</div>
            <div className="text-xs text-yellow-600 mt-1 font-satoshi">Awaiting response</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">87%</div>
            <div className="text-sm text-gray-600 font-satoshi">Verification Rate</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">Above target</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 font-bricolage">5.2</div>
            <div className="text-sm text-gray-600 font-satoshi">Avg Review Days</div>
            <div className="text-xs text-green-600 mt-1 font-satoshi">Faster than usual</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Verifier Status Panel */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Verifier Status</h3>
            <div className="space-y-4">
              {[
                { name: "DNV Maritime", status: "Active", reports: 8, nextReview: "Jan 15, 2025" },
                { name: "Lloyd's Register", status: "Active", reports: 5, nextReview: "Jan 20, 2025" },
                { name: "Bureau Veritas", status: "Pending", reports: 3, nextReview: "Dec 28, 2024" },
              ].map((verifier, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 font-satoshi">{verifier.name}</div>
                    <div className="text-sm text-gray-600 font-satoshi">
                      {verifier.reports} reports • Next: {verifier.nextReview}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium font-satoshi ${
                      verifier.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {verifier.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Verifications */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Recent Verifications</h3>
            <div className="space-y-4">
              {[
                { vessel: "Maersk Sealand", verifier: "DNV Maritime", date: "Dec 15, 2024", status: "Verified" },
                { vessel: "Emma Maersk", verifier: "Lloyd's Register", date: "Dec 12, 2024", status: "In Review" },
                { vessel: "Maersk Line", verifier: "Bureau Veritas", date: "Dec 10, 2024", status: "Verified" },
              ].map((verification, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 font-satoshi">{verification.vessel}</div>
                    <div className="text-sm text-gray-600 font-satoshi">
                      {verification.verifier} • {verification.date}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium font-satoshi ${
                      verification.status === "Verified" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {verification.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Center */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 font-bricolage">Export Center</h3>
          <p className="text-gray-600 mb-6 font-satoshi">
            Generate and download compliance reports for regulatory submissions and internal reviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="font-medium text-gray-900 font-satoshi">EU MRV Report</div>
              <div className="text-sm text-gray-600 mt-1 font-satoshi">Annual emissions report for EU MRV</div>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="font-medium text-gray-900 font-satoshi">IMO DCS Report</div>
              <div className="text-sm text-gray-600 mt-1 font-satoshi">Data collection system report</div>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="font-medium text-gray-900 font-satoshi">Custom Export</div>
              <div className="text-sm text-gray-600 mt-1 font-satoshi">Create custom compliance report</div>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
