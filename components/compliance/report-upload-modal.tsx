"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  FileText,
  AlertTriangle,
  CheckCircle,
  Send,
  PlusCircle,
  Ship,
  Fuel,
  Activity,
  BarChart3,
  Trash2,
} from "lucide-react"

interface ValidationIssue {
  type: "error" | "warning"
  field: string
  message: string
}

interface UploadedFile {
  name: string
  size: string
  type: string
  validationIssues: ValidationIssue[]
  previewData: any[]
}

interface FuelEntry {
  id: string
  type: string
  quantity: string
  co2Factor: string
  co2Emissions: string
}

interface ReportUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReportUploadModal({ open, onOpenChange }: ReportUploadModalProps) {
  const [activeTab, setActiveTab] = useState("upload")
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Form data state
  const [vesselData, setVesselData] = useState({
    vesselName: "",
    imoNumber: "",
    reportPeriodStart: "",
    reportPeriodEnd: "",
  })

  const [fuelEntries, setFuelEntries] = useState<FuelEntry[]>([
    { id: "1", type: "", quantity: "", co2Factor: "", co2Emissions: "" },
  ])

  const [navigationData, setNavigationData] = useState({
    totalDistance: "",
    hoursAtSea: "",
    hoursInPort: "",
    cargoCarried: "",
  })

  const [performanceData, setPerformanceData] = useState({
    voyageCount: "",
    averageSpeed: "",
    co2PerMile: "",
    notes: "",
  })

  // Fuel types with their CO2 emission factors (kg CO2/tonne fuel)
  const fuelTypes = [
    { value: "HFO", label: "Heavy Fuel Oil (HFO)", factor: 3114 },
    { value: "MGO", label: "Marine Gas Oil (MGO)", factor: 3206 },
    { value: "LNG", label: "Liquefied Natural Gas (LNG)", factor: 2750 },
    { value: "LSFO", label: "Low Sulphur Fuel Oil (LSFO)", factor: 3151 },
    { value: "MDO", label: "Marine Diesel Oil (MDO)", factor: 3206 },
    { value: "METHANOL", label: "Methanol", factor: 1375 },
  ]

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      simulateFileUpload(files[0])
    }
  }, [])

  const simulateFileUpload = (file: File) => {
    setTimeout(() => {
      setUploadedFile({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
        validationIssues: [
          {
            type: "warning",
            field: "Fuel Consumption",
            message: "HFO consumption appears unusually high for vessel size",
          },
          {
            type: "error",
            field: "IMO Number",
            message: "IMO number format invalid - should be 7 digits",
          },
        ],
        previewData: [
          { vessel: "MV Atlantic Pioneer", imo: "1234567", fuel: "245.6 MT HFO", distance: "1,234 NM" },
          { vessel: "MV Atlantic Pioneer", imo: "1234567", fuel: "198.2 MT MGO", distance: "987 NM" },
        ],
      })
    }, 1500)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      simulateFileUpload(files[0])
    }
  }

  const addFuelEntry = () => {
    const newEntry: FuelEntry = {
      id: Date.now().toString(),
      type: "",
      quantity: "",
      co2Factor: "",
      co2Emissions: "",
    }
    setFuelEntries([...fuelEntries, newEntry])
  }

  const removeFuelEntry = (id: string) => {
    if (fuelEntries.length > 1) {
      setFuelEntries(fuelEntries.filter((entry) => entry.id !== id))
    }
  }

  const updateFuelEntry = (id: string, field: keyof FuelEntry, value: string) => {
    setFuelEntries(
      fuelEntries.map((entry) => {
        if (entry.id === id) {
          const updated = { ...entry, [field]: value }

          // Auto-calculate CO2 emissions when fuel type or quantity changes
          if (field === "type" || field === "quantity") {
            const fuelType = fuelTypes.find((f) => f.value === (field === "type" ? value : updated.type))
            if (fuelType && updated.quantity) {
              updated.co2Factor = fuelType.factor.toString()
              updated.co2Emissions = ((Number.parseFloat(updated.quantity) * fuelType.factor) / 1000).toFixed(2)
            }
          }

          return updated
        }
        return entry
      }),
    )
  }

  const validateForm = () => {
    const errors: string[] = []

    if (!vesselData.vesselName) errors.push("Vessel name is required")
    if (!vesselData.imoNumber) errors.push("IMO number is required")
    if (!vesselData.reportPeriodStart) errors.push("Report period start date is required")
    if (!vesselData.reportPeriodEnd) errors.push("Report period end date is required")

    fuelEntries.forEach((entry, index) => {
      if (!entry.type) errors.push(`Fuel type is required for entry ${index + 1}`)
      if (!entry.quantity) errors.push(`Fuel quantity is required for entry ${index + 1}`)
    })

    if (!navigationData.totalDistance) errors.push("Total distance is required")
    if (!navigationData.cargoCarried) errors.push("Cargo carried is required")

    return errors
  }

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()

    if (errors.length > 0) {
      alert("Please fix the following errors:\n" + errors.join("\n"))
      return
    }

    setShowConfirmation(true)
  }

  const handleFinalSubmit = () => {
    console.log("Submitting compliance data:", {
      vesselData,
      fuelEntries,
      navigationData,
      performanceData,
    })
    setShowConfirmation(false)
    onOpenChange(false)
    // Reset form
    setVesselData({ vesselName: "", imoNumber: "", reportPeriodStart: "", reportPeriodEnd: "" })
    setFuelEntries([{ id: "1", type: "", quantity: "", co2Factor: "", co2Emissions: "" }])
    setNavigationData({ totalDistance: "", hoursAtSea: "", hoursInPort: "", cargoCarried: "" })
    setPerformanceData({ voyageCount: "", averageSpeed: "", co2PerMile: "", notes: "" })
  }

  const calculateTotalCO2 = () => {
    return fuelEntries
      .reduce((total, entry) => {
        return total + (Number.parseFloat(entry.co2Emissions) || 0)
      }, 0)
      .toFixed(2)
  }

  if (showConfirmation) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle
              className="text-2xl font-bold text-[#0F1114] flex items-center gap-2"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              <CheckCircle className="w-6 h-6 text-[#059669]" />
              Confirm Compliance Data Submission
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="bg-[#F8FAFC] rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-[#0F1114]" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
                Report Summary
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-[#4A4A4A]">Vessel:</span>
                  <p className="text-[#0F1114]">{vesselData.vesselName}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#4A4A4A]">IMO:</span>
                  <p className="text-[#0F1114]">{vesselData.imoNumber}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#4A4A4A]">Period:</span>
                  <p className="text-[#0F1114]">
                    {vesselData.reportPeriodStart} to {vesselData.reportPeriodEnd}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-[#4A4A4A]">Total CO₂:</span>
                  <p className="text-[#0F1114] font-bold">{calculateTotalCO2()} tonnes</p>
                </div>
                <div>
                  <span className="font-semibold text-[#4A4A4A]">Distance:</span>
                  <p className="text-[#0F1114]">{navigationData.totalDistance} NM</p>
                </div>
                <div>
                  <span className="font-semibold text-[#4A4A4A]">Cargo:</span>
                  <p className="text-[#0F1114]">{navigationData.cargoCarried} tonnes</p>
                </div>
              </div>

              <div>
                <span className="font-semibold text-[#4A4A4A]">Fuel Types:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {fuelEntries.map(
                    (entry, index) =>
                      entry.type && (
                        <Badge key={index} className="bg-[#E8F4F8] text-[#4A90A4] border-0">
                          {entry.type}: {entry.quantity}t
                        </Badge>
                      ),
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
              <Button
                variant="outline"
                className="border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F1114] rounded-xl px-6 font-semibold"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                onClick={() => setShowConfirmation(false)}
              >
                Back to Edit
              </Button>
              <Button
                className="bg-[#0F1114] hover:bg-[#1a1f23] text-white rounded-xl px-6 font-semibold transition-all duration-200"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                onClick={handleFinalSubmit}
              >
                <Send className="w-4 h-4 mr-2" />
                Confirm Submission to Authority
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className="text-2xl font-bold text-[#0F1114] flex items-center gap-2"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            <Upload className="w-6 h-6" />
            Upload Compliance Data
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="upload" className="text-base font-medium">
              Upload File
            </TabsTrigger>
            <TabsTrigger value="manual" className="text-base font-medium">
              Manual Entry
            </TabsTrigger>
          </TabsList>

          {/* File Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            {!uploadedFile ? (
              <div
                className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
                  isDragOver
                    ? "border-[#0F1114] bg-[#F8FAFC]"
                    : "border-[#D1D5DB] hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" />
                <h3
                  className="text-lg font-bold text-[#0F1114] mb-2"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Drop your compliance report files here
                </h3>
                <p className="text-[#6B7280] mb-4" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Supports XLS, CSV, and PDF files up to 10MB
                </p>
                <input
                  type="file"
                  accept=".xls,.xlsx,.csv,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button
                    className="bg-[#0F1114] hover:bg-[#1a1f23] text-white rounded-xl h-10 px-6 font-semibold transition-all duration-200"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                    asChild
                  >
                    <span className="cursor-pointer">
                      <FileText className="w-4 h-4 mr-2" />
                      Browse Files
                    </span>
                  </Button>
                </label>
              </div>
            ) : (
              <div className="space-y-6">
                {/* File validation and preview content remains the same */}
                <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <FileText className="w-5 h-5 text-[#475569]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1114]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        {uploadedFile.name}
                      </p>
                      <p className="text-sm text-[#64748B]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                        {uploadedFile.size} • Uploaded just now
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#475569] rounded-lg h-8 px-3 font-medium"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                    onClick={() => setUploadedFile(null)}
                  >
                    Remove
                  </Button>
                </div>

                {/* Validation Results */}
                <div className="space-y-4">
                  <h4
                    className="text-lg font-bold text-[#0F1114]"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Validation Results
                  </h4>
                  {uploadedFile.validationIssues.map((issue, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-4 rounded-xl ${
                        issue.type === "error"
                          ? "bg-[#FEF2F2] border border-[#FECACA]"
                          : "bg-[#FFFBEB] border border-[#FDE68A]"
                      }`}
                    >
                      <AlertTriangle
                        className={`w-5 h-5 mt-0.5 ${issue.type === "error" ? "text-[#DC2626]" : "text-[#D97706]"}`}
                      />
                      <div>
                        <p
                          className={`font-semibold ${issue.type === "error" ? "text-[#DC2626]" : "text-[#D97706]"}`}
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          {issue.field}
                        </p>
                        <p
                          className={`text-sm ${issue.type === "error" ? "text-[#991B1B]" : "text-[#92400E]"}`}
                          style={{ fontFamily: "Satoshi, sans-serif" }}
                        >
                          {issue.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span className="text-sm text-[#059669] font-medium" style={{ fontFamily: "Satoshi, sans-serif" }}>
                      Ready to submit (1 warning, 1 error to fix)
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F1114] rounded-xl px-4 font-semibold"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                      onClick={() => onOpenChange(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-[#0F1114] hover:bg-[#1a1f23] text-white rounded-xl px-4 font-semibold transition-all duration-200"
                      style={{ fontFamily: "Satoshi, sans-serif" }}
                      onClick={() => {
                        console.log("Submitting to authority...")
                        onOpenChange(false)
                      }}
                      disabled={uploadedFile.validationIssues.some((issue) => issue.type === "error")}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit to Authority
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Manual Entry Tab */}
          <TabsContent value="manual" className="space-y-6">
            <form onSubmit={handleManualSubmit} className="space-y-8">
              {/* Vessel and Period Data */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-lg font-bold text-[#0F1114] flex items-center gap-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    <Ship className="w-5 h-5" />
                    Vessel & Report Period
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vesselName" className="text-sm font-semibold text-[#4A4A4A]">
                        Vessel Name *
                      </Label>
                      <Input
                        id="vesselName"
                        placeholder="e.g. MV Atlantic Pioneer"
                        value={vesselData.vesselName}
                        onChange={(e) => setVesselData({ ...vesselData, vesselName: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="imoNumber" className="text-sm font-semibold text-[#4A4A4A]">
                        IMO Number *
                      </Label>
                      <Input
                        id="imoNumber"
                        placeholder="e.g. 1234567"
                        value={vesselData.imoNumber}
                        onChange={(e) => setVesselData({ ...vesselData, imoNumber: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reportPeriodStart" className="text-sm font-semibold text-[#4A4A4A]">
                        Report Period Start *
                      </Label>
                      <Input
                        id="reportPeriodStart"
                        type="date"
                        value={vesselData.reportPeriodStart}
                        onChange={(e) => setVesselData({ ...vesselData, reportPeriodStart: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reportPeriodEnd" className="text-sm font-semibold text-[#4A4A4A]">
                        Report Period End *
                      </Label>
                      <Input
                        id="reportPeriodEnd"
                        type="date"
                        value={vesselData.reportPeriodEnd}
                        onChange={(e) => setVesselData({ ...vesselData, reportPeriodEnd: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fuel Consumption and Emissions */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-lg font-bold text-[#0F1114] flex items-center gap-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    <Fuel className="w-5 h-5" />
                    Fuel Consumption & Emissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {fuelEntries.map((entry, index) => (
                    <div key={entry.id} className="p-4 bg-[#F8FAFC] rounded-xl space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-[#0F1114]">Fuel Entry {index + 1}</h4>
                        {fuelEntries.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => removeFuelEntry(entry.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-[#4A4A4A]">Fuel Type *</Label>
                          <select
                            className="w-full p-2 border rounded-lg"
                            value={entry.type}
                            onChange={(e) => updateFuelEntry(entry.id, "type", e.target.value)}
                            required
                          >
                            <option value="">Select fuel type</option>
                            {fuelTypes.map((fuel) => (
                              <option key={fuel.value} value={fuel.value}>
                                {fuel.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-[#4A4A4A]">Quantity (tonnes) *</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="e.g. 245.6"
                            value={entry.quantity}
                            onChange={(e) => updateFuelEntry(entry.id, "quantity", e.target.value)}
                            className="rounded-lg"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-[#4A4A4A]">CO₂ Factor (kg/tonne)</Label>
                          <Input
                            type="number"
                            value={entry.co2Factor}
                            onChange={(e) => updateFuelEntry(entry.id, "co2Factor", e.target.value)}
                            className="rounded-lg bg-gray-50"
                            readOnly
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-[#4A4A4A]">CO₂ Emissions (tonnes)</Label>
                          <Input
                            type="number"
                            step="0.01"
                            value={entry.co2Emissions}
                            onChange={(e) => updateFuelEntry(entry.id, "co2Emissions", e.target.value)}
                            className="rounded-lg bg-gray-50"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F1114] rounded-xl h-10 font-semibold"
                    onClick={addFuelEntry}
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Another Fuel Type
                  </Button>

                  {fuelEntries.some((entry) => entry.co2Emissions) && (
                    <div className="p-4 bg-[#E8F4F8] rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#4A90A4]">Total CO₂ Emissions:</span>
                        <span className="text-xl font-bold text-[#0F1114]">{calculateTotalCO2()} tonnes</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Navigation Activity */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-lg font-bold text-[#0F1114] flex items-center gap-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    <Activity className="w-5 h-5" />
                    Navigation Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="totalDistance" className="text-sm font-semibold text-[#4A4A4A]">
                        Total Distance (Nautical Miles) *
                      </Label>
                      <Input
                        id="totalDistance"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 12345"
                        value={navigationData.totalDistance}
                        onChange={(e) => setNavigationData({ ...navigationData, totalDistance: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargoCarried" className="text-sm font-semibold text-[#4A4A4A]">
                        Cargo Carried (tonnes) *
                      </Label>
                      <Input
                        id="cargoCarried"
                        type="number"
                        step="0.01"
                        placeholder="e.g. 8500"
                        value={navigationData.cargoCarried}
                        onChange={(e) => setNavigationData({ ...navigationData, cargoCarried: e.target.value })}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hoursAtSea" className="text-sm font-semibold text-[#4A4A4A]">
                        Hours at Sea
                      </Label>
                      <Input
                        id="hoursAtSea"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 2400"
                        value={navigationData.hoursAtSea}
                        onChange={(e) => setNavigationData({ ...navigationData, hoursAtSea: e.target.value })}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hoursInPort" className="text-sm font-semibold text-[#4A4A4A]">
                        Hours in Port
                      </Label>
                      <Input
                        id="hoursInPort"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 360"
                        value={navigationData.hoursInPort}
                        onChange={(e) => setNavigationData({ ...navigationData, hoursInPort: e.target.value })}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Indicators */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle
                    className="text-lg font-bold text-[#0F1114] flex items-center gap-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    <BarChart3 className="w-5 h-5" />
                    Performance Indicators (Optional)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voyageCount" className="text-sm font-semibold text-[#4A4A4A]">
                        Number of Voyages
                      </Label>
                      <Input
                        id="voyageCount"
                        type="number"
                        placeholder="e.g. 24"
                        value={performanceData.voyageCount}
                        onChange={(e) => setPerformanceData({ ...performanceData, voyageCount: e.target.value })}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="averageSpeed" className="text-sm font-semibold text-[#4A4A4A]">
                        Average Speed (knots)
                      </Label>
                      <Input
                        id="averageSpeed"
                        type="number"
                        step="0.1"
                        placeholder="e.g. 14.5"
                        value={performanceData.averageSpeed}
                        onChange={(e) => setPerformanceData({ ...performanceData, averageSpeed: e.target.value })}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="co2PerMile" className="text-sm font-semibold text-[#4A4A4A]">
                        CO₂ per Mile (kg/NM)
                      </Label>
                      <Input
                        id="co2PerMile"
                        type="number"
                        step="0.01"
                        placeholder="Auto-calculated"
                        value={
                          navigationData.totalDistance && calculateTotalCO2()
                            ? (
                                (Number.parseFloat(calculateTotalCO2()) * 1000) /
                                Number.parseFloat(navigationData.totalDistance)
                              ).toFixed(2)
                            : performanceData.co2PerMile
                        }
                        onChange={(e) => setPerformanceData({ ...performanceData, co2PerMile: e.target.value })}
                        className="rounded-lg bg-gray-50"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-semibold text-[#4A4A4A]">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information or comments about this reporting period..."
                      value={performanceData.notes}
                      onChange={(e) => setPerformanceData({ ...performanceData, notes: e.target.value })}
                      className="rounded-lg"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Actions */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-[#E2E8F0]">
                <Button
                  type="button"
                  variant="outline"
                  className="border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F1114] rounded-xl px-6 font-semibold"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#0F1114] hover:bg-[#1a1f23] text-white rounded-xl px-6 font-semibold transition-all duration-200"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Review & Submit
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
