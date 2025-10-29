"use client"

import { useState, useEffect } from "react"
import type { JSX } from "react/jsx-runtime"

export default function WhyChooseContainer(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Dimensiones exactas según especificaciones
  const containerDimensions = {
    width: isMobile ? 360 : 478,
    height: isMobile ? 430 : 540,
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        {/* Contenedor principal con dimensiones exactas */}
        <div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: `${containerDimensions.width}px`,
            height: `${containerDimensions.height}px`,
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "70px",
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "70px",
          }}
        >
          {/* Video con la URL proporcionada */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=540&width=478&text=Business+Meeting"
            crossOrigin="anonymous"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1472726_People_Business_1920x1080-b0smbC69pdlCAXd7mWBp9Z1uZjR9iw.mp4"
              type="video/mp4"
            />
            <img
              src="/placeholder.svg?height=540&width=478&text=Business+Meeting"
              alt="Business professionals in a meeting"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Overlay con blur para el texto */}
          <div className="absolute inset-0">
            {/* Título superior - centrado horizontalmente */}
            <div
              className="absolute"
              style={{
                top: isMobile ? "20px" : "24px",
                left: isMobile ? "20px" : "30px", // Margen izquierdo
                right: isMobile ? "20px" : "30px", // Margen derecho igual
                // Removí el width fijo para que se centre automáticamente
              }}
            >
              <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm p-3 rounded-lg text-center">
                <h2
                  className="text-white font-bricolage font-semibold leading-tight"
                  style={{
                    fontSize: isMobile ? "24px" : "36px",
                  }}
                >
                  Why Choose <br />
                  EPℇC Corvux?
                </h2>
              </div>
            </div>

            {/* Texto inferior - centrado horizontalmente */}
            <div
              className="absolute"
              style={{
                bottom: isMobile ? "20px" : "24px",
                left: isMobile ? "20px" : "30px", // Margen izquierdo
                right: isMobile ? "20px" : "30px", // Margen derecho igual
              }}
            >
              <div
                className="rounded-lg"
                style={{
                  background: "rgba(15,17,20,0.6)",
                  backdropFilter: "blur(8px)",
                  padding: isMobile ? "16px" : "20px",
                }}
              >
                <h4
                  className="text-white font-bricolage font-medium uppercase tracking-wide mb-2"
                  style={{ fontSize: isMobile ? "14px" : "16px" }}
                >
                  MARITIME ESG ADVANTAGES
                </h4>
                <p className="text-white font-satoshi leading-relaxed" style={{ fontSize: isMobile ? "12px" : "14px" }}>
                  <span className="font-bold">EPℇC Corvux</span>
                  <span>
                    {" "}
                    is built for modern shipping companies that need to simplify regulatory compliance and stay
                    audit-ready year-round.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
