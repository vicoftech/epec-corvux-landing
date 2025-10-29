"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, AlertTriangle, CheckCircle, Send } from "lucide-react"
import { useState, useCallback } from "react"

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

export function ReportUpload() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)

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
    // Simulate file processing and validation
    setTimeout(() => {
      setUploadedFile({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
        validationIssues: [
          {
            type: "warning",
            field: "Fuel Consumption",
            message: "Some values appear unusually high for vessel size",
          },
          {
            type: "error",
            field: "Port Codes",
            message: "Invalid port code 'XXXX' found in row 23",
          },
        ],
        previewData: [
          { vessel: "MV Atlantic Pioneer", voyage: "V001", fuel: "245.6 MT", distance: "1,234 NM" },
          { vessel: "MV Atlantic Pioneer", voyage: "V002", fuel: "198.2 MT", distance: "987 NM" },
          { vessel: "MV Atlantic Pioneer", voyage: "V003", fuel: "312.1 MT", distance: "1,456 NM" },
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

  return (
    <Card className="bg-white rounded-2xl shadow-sm border-0">
      <CardHeader className="pb-6">
        <CardTitle
          className="text-2xl font-bold text-[#0F1114] flex items-center gap-2"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          <Upload className="w-6 h-6" />
          Report Upload & Validation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
              Drop your report files here
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
            {/* File Info */}
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
                  {issue.type === "error" ? (
                    <AlertTriangle className="w-5 h-5 text-[#DC2626] mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-[#D97706] mt-0.5" />
                  )}
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

            {/* Data Preview */}
            <div className="space-y-4">
              <h4
                className="text-lg font-bold text-[#0F1114]"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Data Preview
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E2E8F0]">
                      <th
                        className="text-left py-3 px-4 font-semibold text-[#475569]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Vessel
                      </th>
                      <th
                        className="text-left py-3 px-4 font-semibold text-[#475569]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Voyage
                      </th>
                      <th
                        className="text-left py-3 px-4 font-semibold text-[#475569]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Fuel Consumption
                      </th>
                      <th
                        className="text-left py-3 px-4 font-semibold text-[#475569]"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Distance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedFile.previewData.map((row, index) => (
                      <tr key={index} className="border-b border-[#F1F5F9]">
                        <td className="py-3 px-4 text-[#0F1114]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                          {row.vessel}
                        </td>
                        <td className="py-3 px-4 text-[#64748B]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                          {row.voyage}
                        </td>
                        <td className="py-3 px-4 text-[#64748B]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                          {row.fuel}
                        </td>
                        <td className="py-3 px-4 text-[#64748B]" style={{ fontFamily: "Satoshi, sans-serif" }}>
                          {row.distance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#059669]" />
                <span className="text-sm text-[#059669] font-medium" style={{ fontFamily: "Satoshi, sans-serif" }}>
                  Ready to submit (2 warnings, 1 error to fix)
                </span>
              </div>
              <Button
                className="bg-[#0F1114] hover:bg-[#1a1f23] text-white rounded-xl h-10 px-6 font-semibold transition-all duration-200"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                onClick={() => console.log("Submitting to verifier...")}
                disabled={uploadedFile.validationIssues.some((issue) => issue.type === "error")}
              >
                <Send className="w-4 h-4 mr-2" />
                Submit to Verifier
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
