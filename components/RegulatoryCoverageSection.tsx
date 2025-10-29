"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface RegulatoryCoverageSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function RegulatoryCoverageSection({ parallaxY }: RegulatoryCoverageSectionProps) {
  const [expandedRegulation, setExpandedRegulation] = useState<number | null>(null)
  const imageRef = useRef(null)
  
  // Scroll para el image scaling effect
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 120%", "end -50%"]
  })
  
  // Image scaling con spring para ultra fluidez (igual que el video)
  const imageScaleRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85])
  const imageOpacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  
  // Aplicar spring para suavidad extrema
  const imageScale = useSpring(imageScaleRaw, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  })
  const imageOpacity = useSpring(imageOpacityRaw, { 
    stiffness: 120, 
    damping: 25, 
    restDelta: 0.001 
  })

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const regulations = [
    {
      id: 1,
      number: "01",
      title: "MRV & THETIS",
      subtitle: "Track and report emissions to the EU with confidence.",
      description:
        "EPℇC Corvux ensures your Monitoring Plans and Emission Reports meet EU MRV standards. Data is automatically structured for submission via the official THETIS-MRV platform.",
    },
    {
      id: 2,
      number: "02",
      title: "EU ETS",
      subtitle: "Manage carbon allowances across your entire fleet.",
      description:
        "Calculate emissions, track carbon tonnage, and prepare reports for the European Emissions Trading System (EU ETS), all from a unified dashboard.",
    },
    {
      id: 3,
      number: "03",
      title: "IMO DCS",
      subtitle: "Comply with IMO's global fuel consumption reporting.",
      description:
        "Automatically collect and structure your annual fuel consumption data in accordance with the IMO Data Collection System (DCS) under MARPOL.",
    },
    {
      id: 4,
      number: "04",
      title: "FuelEU Maritime",
      subtitle: "Prepare for the latest EU maritime sustainability rules.",
      description:
        "Corvux helps you meet FuelEU requirements by centralizing data on fuel mix, emissions intensity, and compliance trajectories across voyages.",
    },
    {
      id: 5,
      number: "05",
      title: "Expand Beyond Maritime",
      subtitle: "Leverage the EnSuRe architecture to adapt ESG compliance workflows to other industries when needed.",
      description:
        "Use Cases: Leverage the EnSuRe architecture to adapt ESG compliance workflows to other industries when needed.",
    },
  ]

  const handleRegulationClick = (id: number) => {
    setExpandedRegulation(expandedRegulation === id ? null : id)
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="bg-[#0F1114] py-16 md:py-18 lg:py-32 relative overflow-hidden parallax-section"
      id="features"
      style={{
        y: parallaxY,
        marginTop: '-8px' // Margin negativo más agresivo
      }}
    >
      {/* Header con ícono, número y título */}
      <div className="w-full px-4 lg:px-8 relative">
        <div className="w-full border-t border-white/30 flex justify-between items-center pt-1">
          <svg width="16" height="17" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C25.0391 7.42691 26.4698 7.06965 27.8578 6.82C28.1468 6.76835 28.3979 6.7167 28.4216 6.70379C28.4784 6.66935 27.7773 6.03661 27.2609 5.65783C25.8444 4.62479 23.6557 3.84571 21.3676 3.57023C20.1501 3.42388 20.3206 3.48845 19.719 2.93319C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
              fill="white"
              fillOpacity="0.29"
            />
          </svg>

          <div className="opacity-60 text-white/30 text-sm font-normal">003</div>
          <div className="opacity-60 text-white/30 text-sm font-normal uppercase">REGULATORY COVERAGE</div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Layout responsivo */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Texto - Izquierda en desktop, arriba en móvil */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-6">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{
                  color: "#B3D3E2",
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: "700",
                }}
              >
                Built for Every Maritime Regulation — Powered by EnSuRe
              </h2>

              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed"
                style={{
                  color: "#C1C1C7",
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                }}
              >
                EPℇC Corvux unifies compliance across MRV, ETS, DCS, and FuelEU. Track emissions, validate data, and
                file regulator-ready reports — all from one integrated, future-ready platform
              </p>
            </div>

            {/* Imagen - Derecha en desktop, abajo en móvil */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end" ref={imageRef}>
              <motion.div
                style={{ 
                  scale: imageScale,
                  opacity: imageOpacity
                }}
                className="origin-center"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-people-working-with-ipad-high-angle.jpg-QmS5ER0CtCmCvfA84MwT2s2TWR5Lwz.jpeg"
                  alt="Business professionals reviewing maritime compliance dashboard"
                  className="w-full max-w-[500px] lg:max-w-[633px] h-auto rounded-3xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Lista de regulaciones interactiva */}
          <div className="mt-16 lg:mt-24 space-y-0">
            {regulations.map((regulation, index) => (
              <div key={regulation.id} className="w-full">
                {/* Elemento principal */}
                <div
                  className={`${
                    expandedRegulation === regulation.id ? "bg-white/3 rounded-[29px] pb-[30px]" : ""
                  } transition-all duration-300`}
                >
                  <div
                    className={`relative w-full h-[78px] group hover:bg-white/5 transition-colors duration-300 rounded-lg cursor-pointer ${
                      expandedRegulation === regulation.id ? "bg-white/3" : ""
                    }`}
                    onClick={() => handleRegulationClick(regulation.id)}
                  >
                    <div className="flex justify-between items-center px-5 py-[19px]">
                      <div className="flex items-center gap-20">
                        <div className="w-[30px]">
                          <div
                            style={{
                              color: "rgba(255, 255, 255, 0.38)",
                              fontSize: "23.06px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                              lineHeight: "32px",
                            }}
                          >
                            {regulation.number}
                          </div>
                        </div>
                        <div>
                          <div
                            style={{
                              color: "white",
                              fontSize: "24px",
                              fontFamily: "Satoshi",
                              fontWeight: "500",
                            }}
                          >
                            {regulation.title}
                          </div>
                        </div>
                      </div>

                      {/* Flecha que cambia según el estado */}
                      <div className="w-10 h-10 relative">
                        {expandedRegulation === regulation.id ? (
                          // Flecha hacia abajo cuando está expandido
                          <svg
                            width="41"
                            height="41"
                            viewBox="0 0 41 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.7324 25.0301L20.6157 35.1468L10.499 25.0301M20.6157 6.81348V34.8635"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          // Flecha hacia la derecha cuando está cerrado
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.0497 9.88288L34.1663 19.9995L24.0497 30.1162M5.83301 19.9995H33.883"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandido */}
                  {expandedRegulation === regulation.id && (
                    <motion.div
                      className="w-full relative"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="relative w-full min-h-[171px] rounded-[29px]">
                        {/* Gradiente superior - muy cerca del título */}
                        <motion.div
                          className="w-full h-[1px] absolute top-0 left-0"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.30) 26%, rgba(255, 255, 255, 0.30) 78%, rgba(255, 255, 255, 0) 100%)",
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />

                        {/* Layout responsivo para texto y logo */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8 pt-12 md:pt-14 lg:pt-16 px-4 md:px-8 lg:px-[132px] pb-8 md:pb-12 lg:pb-16">
                          {/* Texto descriptivo */}
                          <motion.div
                            className="flex-1 lg:max-w-[868px] space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <p
                              className="text-base md:text-lg lg:text-[21.83px] font-satoshi font-medium leading-relaxed lg:leading-[26px]"
                              style={{ color: "rgba(255, 255, 255, 0.8)" }}
                            >
                              {regulation.subtitle}
                            </p>
                            <p
                              className="text-base md:text-lg lg:text-[21.83px] font-satoshi font-normal leading-relaxed lg:leading-[26px]"
                              style={{ color: "rgba(255, 255, 255, 0.56)" }}
                            >
                              {regulation.description}
                            </p>
                          </motion.div>

                          {/* Logo - Centrado en móvil, derecha en desktop */}
                          <motion.div
                            className="flex justify-center lg:justify-end lg:flex-shrink-0 lg:absolute lg:right-10 lg:top-16"
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <svg
                              width="29"
                              height="29"
                              viewBox="0 0 29 29"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 md:w-7 md:h-7 lg:w-[29px] lg:h-[29px]"
                            >
                              <path
                                d="M13.314 0.996241C11.2438 1.12107 9.06461 1.89585 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6377 3.31498 22.3521 2.84125 19.8771C3.10024 19.492 3.05761 18.1318 3.1713 17.2924C3.23763 16.7845 3.51239 15.7257 3.68768 15.278C3.81085 14.9681 4.12825 14.3827 4.40776 13.9437C4.74885 13.4013 5.24154 12.7083 5.26523 12.7299C5.27944 12.7385 5.2368 12.8504 5.17048 12.9795C4.79149 13.7672 4.35565 15.179 4.21826 16.0743C3.89138 18.2308 4.33196 20.4389 5.5021 22.4878C6.90436 24.9326 9.3299 26.9212 12.1771 27.9586C13.783 28.5397 15.029 28.8194 16.5591 28.9486C17.3408 29.0131 19.25 28.9744 19.9938 28.8797C21.8271 28.6516 23.4852 28.1781 25.1054 27.4248L25.8634 27.0719L24.679 27.0461C23.5136 27.0245 23.4899 27.0202 22.8599 26.8696C21.974 26.6544 21.4766 26.4822 20.7044 26.1292C18.601 25.1608 17.0139 23.7188 16.0143 21.8636C14.8205 19.6598 14.631 17.017 15.4932 14.6668C16.6492 11.5074 19.3874 9.25195 23.7931 7.83152C25.0391 7.42691 26.4698 7.06965 27.8578 6.82C28.1468 6.76835 28.3979 6.7167 28.4216 6.70379C28.4784 6.66935 27.7773 6.03661 27.2609 5.65783C25.8444 4.62479 23.6557 3.84571 21.3676 3.57023C20.1501 3.42388 20.3206 3.48845 19.719 2.93319C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM17.0613 4.4354C17.8904 4.90027 17.5966 6.13561 16.6349 6.20879C15.9954 6.25614 15.5217 5.85153 15.5169 5.25753C15.5169 5.11979 15.5501 4.93901 15.5927 4.84862C15.8343 4.31919 16.5165 4.12549 17.0613 4.4354Z"
                                fill="white"
                                fillOpacity="0.29"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                {index < regulations.length - 1 && <div className="border-t border-white/10 my-[1.25px]"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
