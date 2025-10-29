"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Download, Mail, Building, User, Briefcase, DollarSign, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export default function InvestorCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setStatus(null)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const payload = {
      name: data.full_name || "",
      full_name: data.full_name || "",
      email: data.email || "",
      organization: data.organization || "",
      role_title: data.role_title || "",
      investment_focus: data.investment_focus || "",
      typical_ticket_size: data.typical_ticket_size || "",
      additional_information: data.additional_information || "",
    }

    try {
      const response = await fetch("/api/investor-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const responseText = await response.text()

      if (!response.ok) {
        let errorMessage = "Server responded with an error. Please try again."
        try {
          const errorResult = JSON.parse(responseText)
          errorMessage = errorResult.error || errorMessage
        } catch (jsonParseError) {
          errorMessage = responseText || errorMessage
        }
        setStatus({ success: false, message: errorMessage })
        setError(errorMessage)
        console.error("Error submitting investor request from client:", errorMessage)
      } else {
        const result = JSON.parse(responseText)
        setStatus({ success: true, message: result.message || "Request submitted successfully!" })
      }
    } catch (err: any) {
      console.error("Error submitting investor request:", err)
      setStatus({ success: false, message: "Network error. Please check your connection and try again." })
      setError(err.message || "Network error.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Contenedor centrado con max-width */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Título principal */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 md:h-10 md:w-10 mr-3 text-[#6EE7B7] flex-shrink-0"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m18 9-6 6-4-4-3 3" />
                  </svg>
                  Investor Information
                </span>
              </h2>
              
              {/* Descripción centrada */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Interested in <span className="text-white font-semibold">EP&C Corvux's</span> growth story? 
                Request our pitch deck and we'll reach out shortly.
              </p>
            </div>

            {/* Botón centrado */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50"
              >
                <Download className="mr-2 h-5 w-5" />
                Request Investor Materials
              </Button>
            </div>

            {/* Información adicional centrada */}
            <div className="pt-8 border-t border-gray-700/50">
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Join leading investors who are backing the future of maritime ESG compliance. 
                Our materials include detailed market analysis, growth projections, and competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal sin cambios en el contenido, solo mejoras de estilo */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-200">
          <DialogHeader className="mb-6 text-center">
            <DialogTitle className="text-2xl md:text-3xl font-bold">Request Investor Materials</DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Fill out the form below to receive our pitch deck and connect with our team.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="full_name" className="flex items-center gap-2 text-sm font-medium">
                <User className="h-4 w-4 text-gray-500" /> 
                Full name <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="full_name" 
                name="full_name" 
                placeholder="Your full name" 
                required 
                className="h-11"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4 text-gray-500" /> 
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@fund.com" 
                required 
                className="h-11"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="organization" className="flex items-center gap-2 text-sm font-medium">
                <Building className="h-4 w-4 text-gray-500" /> 
                Organization <span className="text-red-500">*</span>
              </Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Investment fund, family office, etc."
                required
                className="h-11"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="role_title" className="flex items-center gap-2 text-sm font-medium">
                <Briefcase className="h-4 w-4 text-gray-500" /> 
                Role/Title <span className="text-red-500">*</span>
              </Label>
              <Select name="role_title" required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select your role..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="associate">Associate</SelectItem>
                  <SelectItem value="principal">Principal</SelectItem>
                  <SelectItem value="partner">Partner</SelectItem>
                  <SelectItem value="founder">Founder</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="investment_focus" className="flex items-center gap-2 text-sm font-medium">
                <DollarSign className="h-4 w-4 text-gray-500" /> 
                Investment Focus
              </Label>
              <Select name="investment_focus">
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select investment focus..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="esg">ESG/Impact Investing</SelectItem>
                  <SelectItem value="maritime">Maritime/Logistics</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="typical_ticket_size" className="flex items-center gap-2 text-sm font-medium">
                <Info className="h-4 w-4 text-gray-500" /> 
                Typical Ticket Size
              </Label>
              <Select name="typical_ticket_size">
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select ticket size..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under_1m">{"< $1M"}</SelectItem>
                  <SelectItem value="1m_5m">{"$1M - $5M"}</SelectItem>
                  <SelectItem value="5m_20m">{"$5M - $20M"}</SelectItem>
                  <SelectItem value="20m_50m">{"$20M - $50M"}</SelectItem>
                  <SelectItem value="over_50m">{"> $50M"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="additional_information" className="flex items-center gap-2 text-sm font-medium">
                <Info className="h-4 w-4 text-gray-500" /> 
                Additional Information
              </Label>
              <Textarea
                id="additional_information"
                name="additional_information"
                placeholder="Tell us about your investment thesis or specific interests..."
                className="min-h-[100px] resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Request Materials
                </>
              )}
            </Button>
            
            {status && (
              <div className={cn(
                "text-center text-sm font-medium p-3 rounded-lg",
                {
                  "text-green-700 bg-green-50 border border-green-200": status.success,
                  "text-red-700 bg-red-50 border border-red-200": !status.success,
                }
              )}>
                {status.message}
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
