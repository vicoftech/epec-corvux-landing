import type { Metadata } from "next"
import LandingClient from "./lanfingClient"

// Page-specific metadata export for SEO
export const metadata: Metadata = {
  title: "EPℇC Corvux - #1 Maritime ESG Compliance Platform",
  description: "🚢 Transform your maritime compliance with EPℇC Corvux...",
  keywords: "maritime compliance, EU MRV, IMO DCS, ETS, FuelEU",
  openGraph: {
    title: "EPℇC Corvux - Leading Maritime ESG Compliance Platform",
    description: "Automate maritime environmental compliance...",
    url: "https://epec-corvux.com",
    images: [{ url: "/og-homepage.jpg", width: 1200, height: 630, alt: "EPℇC Corvux" }],
  },
}

// ✅ Mover viewport y themeColor fuera de metadata
export const viewport = { width: "device-width", initialScale: 1 }
export const themeColor = "#0F1114"

export default function Page() {
  // Server Component únicamente renderiza el Client Component
  return <LandingClient />
}
