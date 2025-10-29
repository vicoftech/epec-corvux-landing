"use client"

import { Upload, X } from "lucide-react"

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UploadModal({ isOpen, onClose }: UploadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[#0F1114] font-bricolage">Upload Data</h3>
          <button
            onClick={onClose}
            className="text-[#4A4A4A] hover:text-[#0F1114] p-1 hover:bg-[#E1E6EC] rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-2 border-dashed border-[#C5B4E3] rounded-2xl p-8 text-center mb-4 hover:border-[#6BD9A9] transition-colors">
          <Upload className="h-12 w-12 text-[#3A506B] mx-auto mb-4" />
          <p className="text-[#0F1114] font-medium mb-2 font-satoshi">Drop files here or click to browse</p>
          <p className="text-[#4A4A4A] text-sm font-satoshi">Supports CSV, Excel, and XML files</p>
          <input type="file" className="hidden" multiple accept=".csv,.xlsx,.xml" />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-[#E1E6EC] text-[#0F1114] rounded-2xl hover:bg-[#E1E6EC]/50 transition-colors font-satoshi"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-2 bg-[#0F1114] text-white rounded-2xl hover:bg-[#0F1114]/90 transition-colors font-satoshi">
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}
