"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Globe, CheckCircle, AlertCircle, FileText } from "lucide-react"
import Navbar from "@/components/navbar"

export default function IMODCSPage() {
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
            <span className="text-[#0F1114] font-medium">IMO DCS</span>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/regulations/eu-ets"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous: EU ETS
            </Link>
            <Link
              href="/regulations/thetis-mrv"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              Next: THETIS-MRV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-50 p-3 rounded-lg">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-[#0F1114]">IMO DCS</h1>
              <p className="text-xl text-gray-600 font-satoshi">Data Collection System</p>
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
                <p className="text-gray-700 leading-relaxed font-satoshi">
                  The IMO DCS is a global regulation under MARPOL Annex VI that mandates fuel consumption reporting for
                  ships ≥5,000 GT. It aims to support international efforts to reduce GHG emissions from ships.
                </p>
              </div>

              {/* Who must comply */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Who must comply?</h2>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        Ships ≥5,000 GT engaged in international voyages
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
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Submit a data collection plan (DCP)</h3>
                      <p className="text-gray-600 font-satoshi">Required before data collection begins</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Collect and report fuel consumption, distance travelled, and hours underway
                      </h3>
                      <p className="text-gray-600 font-satoshi">Comprehensive voyage and fuel data</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-purple-50 p-2 rounded-lg">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Submit an annual report to the flag state or its designated authority
                      </h3>
                      <p className="text-gray-600 font-satoshi">Annual submission requirement</p>
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
                        <strong className="text-[#0F1114]">Digitizes fuel logs and voyage tracking</strong> - Automated
                        data collection from multiple sources
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Ensures all data points required by DCP are covered</strong>{" "}
                        - Complete compliance coverage
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Prepares annual reports in IMO DCS format</strong> -
                        Standardized report generation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Flags missing or inconsistent records</strong> - Quality
                        assurance and data validation
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
                      <span className="font-medium text-[#0F1114] font-satoshi">Regulation:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">MARPOL Annex VI</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Applies to:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">Ships ≥5,000 GT</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Scope:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">International voyages</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Authority:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">Flag state</span>
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
                      href="/regulations/eu-ets"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-[#0F1114] font-satoshi">EU ETS</div>
                      <div className="text-sm text-gray-600 font-satoshi">Emissions Trading System</div>
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0F1114] text-white p-6 rounded-xl">
                  <h3 className="font-bold mb-2 font-bricolage text-white">Ready to streamline IMO DCS compliance?</h3>
                  <p className="text-gray-300 text-sm mb-4 font-satoshi">
                    Join our waitlist to get early access to automated DCS reporting and data collection.
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
