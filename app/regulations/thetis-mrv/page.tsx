"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Shield, CheckCircle, AlertCircle, FileText } from "lucide-react"
import Navbar from "@/components/navbar"

export default function THETISMRVPage() {
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
            <span className="text-[#0F1114] font-medium">THETIS-MRV</span>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/regulations/imo-dcs"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous: IMO DCS
            </Link>
            <Link
              href="/regulations/fueleu-maritime"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F1114] transition-colors font-satoshi"
            >
              Next: FuelEU Maritime
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-50 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-bricolage text-[#0F1114]">THETIS-MRV</h1>
              <p className="text-xl text-gray-600 font-satoshi">EU Submission Platform</p>
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
                  THETIS-MRV is the European Commission's online platform used to manage MRV submissions. Companies
                  upload monitoring plans and annual emissions reports to be reviewed by accredited verifiers.
                </p>
              </div>

              {/* Who must use it */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Who must use it?</h2>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        All ship operators subject to EU MRV regulations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">Accredited verifiers who review submitted data</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main functionalities */}
              <div>
                <h2 className="text-2xl font-bold mb-4 font-bricolage text-[#0F1114]">Main functionalities</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Upload monitoring plans and emissions reports
                      </h3>
                      <p className="text-gray-600 font-satoshi">Central repository for all MRV documents</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">Review and assess compliance</h3>
                      <p className="text-gray-600 font-satoshi">Verifier assessment and approval process</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F1114] font-satoshi">
                        Generate Document of Compliance (DoC)
                      </h3>
                      <p className="text-gray-600 font-satoshi">Official compliance certification</p>
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
                        <strong className="text-[#0F1114]">Generates THETIS-compatible XML/CSV submission files</strong>{" "}
                        - Perfect format compatibility
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">Connects verifier roles with controlled access</strong> -
                        Streamlined verifier collaboration
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">
                          Monitors report status: draft, pending, approved, rejected
                        </strong>{" "}
                        - Real-time status tracking
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-satoshi">
                        <strong className="text-[#0F1114]">
                          Minimizes rejection rate by catching issues pre-submission
                        </strong>{" "}
                        - Quality assurance before upload
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
                      <span className="font-medium text-[#0F1114] font-satoshi">Platform:</span>
                      <span className="text-gray-600 font-satoshi ml-2">European Commission</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Purpose:</span>
                      <span className="text-gray-600 font-satoshi ml-2">MRV submissions</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Users:</span>
                      <span className="text-gray-600 font-satoshi ml-2">Operators & Verifiers</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#0F1114] font-satoshi">Output:</span>
                      <span className="text-gray-600 font-satoshi ml-2">Document of Compliance</span>
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
                  <h3 className="font-bold mb-2 font-bricolage text-white">
                    Ready to simplify THETIS-MRV submissions?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 font-satoshi">
                    Join our waitlist to get early access to automated THETIS-MRV integration.
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
