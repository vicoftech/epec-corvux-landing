"use client"

import Link from "next/link"
import { ArrowRight, FileText, TrendingUp, Shield, Globe, Fuel } from "lucide-react"
import Navbar from "@/components/navbar"

const regulations = [
  {
    name: "EU MRV",
    fullName: "EU Monitoring, Reporting and Verification",
    description: "Monitor and report CO2 emissions from ships calling at EU ports",
    icon: FileText,
    href: "/regulations/eu-mrv",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    name: "EU ETS",
    fullName: "EU Emissions Trading System",
    description: "Carbon pricing mechanism for maritime emissions",
    icon: TrendingUp,
    href: "/regulations/eu-ets",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    name: "IMO DCS",
    fullName: "IMO Data Collection System",
    description: "Global data collection system for fuel consumption",
    icon: Globe,
    href: "/regulations/imo-dcs",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    name: "THETIS-MRV",
    fullName: "THETIS MRV Platform",
    description: "EU's official platform for MRV compliance reporting",
    icon: Shield,
    href: "/regulations/thetis-mrv",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    name: "FuelEU Maritime",
    fullName: "FuelEU Maritime Regulation",
    description: "Promote the use of renewable and low-carbon fuels",
    icon: Fuel,
    href: "/regulations/fueleu-maritime",
    status: "Coming 2025",
    statusColor: "bg-blue-100 text-blue-800",
  },
]

export default function RegulationsPage() {
  return (
    <div className="min-h-screen bg-[#F2F5F7]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-bricolage text-[#0F1114]">
            Maritime Environmental Regulations
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-satoshi">
            Navigate the complex landscape of maritime compliance with our comprehensive regulation guides. Learn what
            each regulation requires and how EPℇC Corvux simplifies compliance.
          </p>
        </div>
      </section>

      {/* Regulations Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regulations.map((regulation) => {
            const IconComponent = regulation.icon
            return (
              <Link
                key={regulation.href}
                href={regulation.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-satoshi ${regulation.statusColor}`}>
                    {regulation.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 font-bricolage group-hover:text-blue-600 transition-colors text-[#0F1114]">
                  {regulation.name}
                </h3>
                <h4 className="text-sm text-gray-500 mb-3 font-medium font-satoshi">{regulation.fullName}</h4>
                <p className="text-gray-600 mb-4 font-satoshi">{regulation.description}</p>

                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors font-satoshi">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-bricolage text-[#0F1114]">Ready to simplify your compliance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-satoshi">
            Join our waitlist to get early access to EPℇC Corvux and see how we can help you navigate these regulations
            effortlessly.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-[#0F1114] text-white px-8 py-4 rounded-full hover:bg-gray-800 text-lg transition-all duration-300 group font-satoshi"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
