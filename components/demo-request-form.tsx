"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Mail, Building, User, Briefcase, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DemoRequestForm() {
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

    // ✅ Mantener la estructura original del formulario
    const payload = {
      full_name: data.full_name || "",
      email: data.email || "",
      organization: data.organization || "", // ✅ Enviar como "organization"
      role_title: data.role_title || "",
      industry: data.industry || "",
      company_size: data.company_size || "",
      message: data.message || "",
    }

    console.log("Sending payload:", JSON.stringify(payload, null, 2)) // ✅ Mejor debug log

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        console.error("Response not OK. Status:", response.status, "StatusText:", response.statusText)
        let errorMessage = "Server responded with an error. Please try again."
        
        // Clone the response so we can try reading it different ways
        const responseClone = response.clone()
        
        try {
          const errorResult = await response.json()
          console.log("Error response JSON:", errorResult)
          errorMessage = errorResult.error || errorMessage
        } catch (jsonError) {
          console.error("Failed to parse JSON error:", jsonError)
          try {
            const textResponse = await responseClone.text() // Use the clone
            console.log("Error response as text:", textResponse)
            errorMessage = textResponse || errorMessage
          } catch (textError) {
            console.error("Failed to read text response:", textError)
            errorMessage = `Server error (${response.status}): ${response.statusText}`
          }
        }
        
        setStatus({ success: false, message: errorMessage })
        setError(errorMessage)
        console.error("Error submitting demo request from client:", errorMessage)
      } else {
        const result = await response.json()
        setStatus({ success: true, message: result.message || "Demo request submitted successfully!" })
        // Optionally close modal after a delay or clear form
        // setTimeout(() => setIsModalOpen(false), 3000);
      }
    } catch (err: any) {
      console.error("Error submitting demo request:", err)
      setStatus({ success: false, message: "Network error. Please check your connection and try again." })
      setError(err.message || "Network error.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
      >
        Request a Demo
      </Button>
      <DialogContent className="w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-center">Request a Demo</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Fill out the form below to schedule a personalized demo of our platform.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="full_name" className="flex items-center gap-1">
              <User className="h-4 w-4 text-gray-500" /> Full name <span className="text-red-500">*</span>
            </Label>
            <Input id="full_name" name="full_name" placeholder="Your full name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-gray-500" /> Email Address <span className="text-red-500">*</span>
            </Label>
            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="organization" className="flex items-center gap-1">
              <Building className="h-4 w-4 text-gray-500" /> Organization <span className="text-red-500">*</span>
            </Label>
            <Input id="organization" name="organization" placeholder="Your company or organization" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role_title" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-gray-500" /> Role/Title <span className="text-red-500">*</span>
            </Label>
            <Select name="role_title" required>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owner">Owner/CEO</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="industry" className="flex items-center gap-1">
              <Info className="h-4 w-4 text-gray-500" /> Industry
            </Label>
            <Select name="industry">
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maritime">Maritime</SelectItem>
                <SelectItem value="logistics">Logistics</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company_size" className="flex items-center gap-1">
              <Info className="h-4 w-4 text-gray-500" /> Company Size
            </Label>
            <Select name="company_size">
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="500+">500+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="flex items-center gap-1">
              <Info className="h-4 w-4 text-gray-500" /> Your Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your specific needs or questions..."
              className="min-h-[80px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Demo"
            )}
          </Button>
          {status && (
            <p
              className={cn("text-center text-sm", {
                "text-green-600": status.success,
                "text-red-600": !status.success,
              })}
            >
              {status.message}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
