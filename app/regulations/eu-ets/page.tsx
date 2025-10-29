"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle, AlertCircle, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function EUETSPage() {
  return (
    <div className="min-h-screen bg-[#F2F5F7]">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb & Navigation */}
      <div className="container mx-auto px-4 py-6 pt-24">
        <div className="flex items-center justify-between mb-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600 font-satoshi">
            <Link href="/regulations" className="hover:text-[#0F1114] transition-colors">
              Regulations
            </Link>
            <span>/</span>
            <span className="text-[#0F1114] font-medium">EU ETS</span>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/regulations/eu-mrv"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous: EU MRV
            </Link>
            <Link
              href="/regulations/imo-dcs"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              Next: IMO DCS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-[#0F1114]">EU ETS</h1>
              <p className="text-xl text-gray-600 font-satoshi">Emissions Trading System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What is it */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">What is it?</h2>
                <p className="text-gray-700 font-satoshi leading-relaxed">
                  The EU ETS is the European Union's cap-and-trade system. Since 2024, shipping companies must account
                  for CO₂ emissions from voyages to/from EU ports and purchase emission allowances.
                </p>
              </div>

              {/* Who must comply */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Who must comply?</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        All vessels ≥5,000 GT carrying cargo or passengers for commercial purposes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        Initially 50% of emissions for international voyages, 100% for intra-EU
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main obligations */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Main obligations</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Submit MRV-verified emissions data</h3>
                      <p className="text-gray-600 font-satoshi">Annual verified emissions reporting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Open and manage an EU Registry account
                      </h3>
                      <p className="text-gray-600 font-satoshi">Required for allowance transactions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Surrender allowances annually</h3>
                      <p className="text-gray-600 font-satoshi">Purchase and surrender emission allowances</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How EPℇC Corvux helps */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-bricolage text-[#0F1114]">How EPℇC Corvux helps</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Centralizes verified emissions data from MRV and DCS</strong>{" "}
                        - Single source of truth for emissions
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Estimates required allowances per vessel and period</strong>{" "}
                        - Accurate forecasting for budget planning
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">
                          Prepares ETS-compliant reports and reconciliation files
                        </strong>{" "}
                        - Automated report generation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Tracks surrender status and compliance gaps</strong> -
                        Real-time compliance monitoring
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Facts */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 font-bricolage text-[#0F1114]">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">System:</span>
                      <span className="text-gray-600 font-satoshi ml-2">Cap-and-trade</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Applies to:</span>
                      <span className="text-gray-600 font-satoshi ml-2">Ships ≥5,000 GT</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Coverage:</span>
                      <span className="text-gray-600 font-satoshi ml-2">50% international, 100% intra-EU</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Start date:</span>
                      <span className="text-gray-600 font-satoshi ml-2">2024</span>
                    </div>
                  </div>
                </div>

                {/* Related Regulations */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 font-bricolage text-[#0F1114]">Related Regulations</h3>
                  <div className="space-y-3">
                    <Link
                      href="/regulations/eu-mrv"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-[#0F1114] font-satoshi">EU MRV</div>
                      <div className="text-sm text-gray-600 font-satoshi">Monitoring, Reporting & Verification</div>
                    </Link>
                    <Link
                      href="/regulations/fueleu-maritime"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-[#0F1114] font-satoshi">FuelEU Maritime</div>
                      <div className="text-sm text-gray-600 font-satoshi">GHG Intensity Limits</div>
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0F1114] text-white p-6 rounded-xl">
                  <h3 className="font-bold mb-2 font-bricolage text-white">Ready to manage EU ETS compliance?</h3>
                  <p className="text-gray-300 text-sm mb-4 font-satoshi">
                    Join our waitlist to get early access to automated ETS reporting and allowance tracking.
                  </p>
                  <Link
                    href="/#waitlist"
                    className="inline-flex items-center gap-2 bg-white text-[#0F1114] px-4 py-3 rounded-full hover:bg-gray-100 transition-colors w-full justify-center font-satoshi"
                  >
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
