import type React from "react"

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-100 border-b border-yellow-200 p-4 text-center">
        <p className="text-yellow-800 font-medium">🚧 Development Mode - Private Pages (Not visible in production)</p>
      </div>
      {children}
    </div>
  )
}
