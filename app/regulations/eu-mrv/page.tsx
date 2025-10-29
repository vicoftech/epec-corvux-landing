"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, FileText, CheckCircle, AlertCircle, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function EUMRVPage() {
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
            <span className="text-[#0F1114] font-medium">EU MRV</span>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/regulations"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Regulations
            </Link>
            <Link
              href="/regulations/eu-ets"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              Next: EU ETS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-[#0F1114]">EU MRV</h1>
              <p className="text-xl text-gray-600 font-satoshi">Monitoring, Reporting and Verification</p>
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
                  EU MRV is a European regulation (2015/757) that requires ships over 5,000 gross tonnage calling at EU
                  ports to monitor, report, and verify their annual CO₂ emissions. The goal is to collect reliable data
                  to support EU climate policy and transparency.
                </p>
              </div>

              {/* Who must comply */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Who must comply?</h2>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        All cargo and passenger ships ≥5,000 GT that call at EU ports, regardless of flag
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">Applies to voyages to/from/within the EU</span>
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
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Prepare a monitoring plan</h3>
                      <p className="text-gray-600 font-satoshi">Must be approved by a verifier</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Collect fuel consumption and voyage data
                      </h3>
                      <p className="text-gray-600 font-satoshi">Continuous monitoring throughout the year</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Submit annual emissions report</h3>
                      <p className="text-gray-600 font-satoshi">To the THETIS-MRV platform</p>
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
                        <strong className="text-[#0F1114]">
                          Guides users through monitoring plan setup and approval
                        </strong>{" "}
                        - Streamlined workflow for plan creation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Validates collected data automatically</strong> - Real-time
                        validation to prevent errors
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">
                          Generates MRV-compliant reports and submits to THETIS-MRV
                        </strong>{" "}
                        - Automated report generation and submission
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Tracks verifier feedback and submission status</strong> -
                        Complete visibility of the compliance process
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
                      <span className="text-gray-600 ml-2 font-satoshi">2015/757</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Applies to:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">Ships ≥5,000 GT</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Scope:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">EU ports</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Platform:</span>
                      <span className="text-gray-600 ml-2 font-satoshi">THETIS-MRV</span>
                    </div>
                  </div>
                </div>

                {/* Related Regulations */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-bold mb-4 font-bricolage text-[#0F1114]">Related Regulations</h3>
                  <div className="space-y-3">
                    <Link
                      href="/regulations/eu-ets"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-[#0F1114] font-satoshi">EU ETS</div>
                      <div className="text-sm text-gray-600 font-satoshi">Emissions Trading System</div>
                    </Link>
                    <Link
                      href="/regulations/thetis-mrv"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-[#0F1114] font-satoshi">THETIS-MRV</div>
                      <div className="text-sm text-gray-600 font-satoshi">EU Submission Platform</div>
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0F1114] text-white p-6 rounded-xl">
                  <h3 className="font-bold mb-2 font-bricolage text-white">Ready to simplify EU MRV compliance?</h3>
                  <p className="text-gray-300 text-sm mb-4 font-satoshi">
                    Join our waitlist to get early access to automated MRV reporting.
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
