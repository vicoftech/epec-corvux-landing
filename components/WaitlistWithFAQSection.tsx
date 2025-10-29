"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface WaitlistWithFAQSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function WaitlistWithFAQSection({ parallaxY }: WaitlistWithFAQSectionProps) {
  const sectionRef = useRef(null)
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const faqs = [
    {
      id: 1,
      question: "What is EPℇC Corvux?",
      answer:
        "EPℇC Corvux is a comprehensive maritime ESG compliance platform that automates monitoring, reporting, and verification for environmental regulations.",
    },
    {
      id: 2,
      question: "Which regulations are supported?",
      answer:
        "EPℇC Corvux supports all major maritime environmental regulations including EU MRV, IMO DCS, EU ETS, and FuelEU Maritime.",
    },
    {
      id: 3,
      question: "Who is this for?",
      answer:
        "EPℇC Corvus is designed for shipping companies, fleet operators, maritime consultants, and compliance officers.",
    },
    {
      id: 4,
      question: "Do I need technical knowledge?",
      answer:
        "No technical expertise required. EPℇC Corvux is designed with an intuitive interface that compliance professionals can use immediately.",
    },
    {
      id: 5,
      question: "When will it be available?",
      answer: "We're currently in private beta with select partners. Join our waitlist to get early access.",
    },
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsEmailValid(e.target.value === "" || /\S+@\S+\.\S+/.test(e.target.value))
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailValid) {
      alert("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "faq-section" }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setSubmitSuccess(true)
      setEmail("")
      setTimeout(() => setSubmitSuccess(false), 5000) // Reset after 5 seconds
    } catch (error) {
      alert(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="waitlist"
      className="relative overflow-hidden py-8 md:py-12 lg:py-16 bg-[#F2F5F7]"
      style={{
        y: parallaxY,
        marginTop: "-4px", // Elimina gap con sección anterior
      }}
    >
      {/* Header con ícono, número y título */}
      <div className="w-full px-4 lg:px-8 relative">
        <div className="w-full border-t border-gray-400/30 flex justify-between items-center pt-1">
          <svg width="16" height="17" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
              fill="#6B7280"
              fillOpacity="0.5"
            />
          </svg>

          <div className="opacity-60 text-gray-600 text-sm font-normal">006</div>
          <div className="opacity-60 text-gray-600 text-sm font-normal uppercase">FAQ & UPDATES</div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left side - Title */}
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-8">
              <div className="inline-block mb-6">
                <div
                  style={{
                    width: "66px",
                    height: "44px",
                    padding: "20px",
                    background: "#EAEDEF",
                    borderRadius: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      color: "#4A4A4A",
                      fontSize: "14px",
                      fontFamily: "Satoshi",
                      fontStyle: "italic",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    FAQ
                  </div>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-bricolage text-[#0F1114] leading-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* Right side - FAQ List */}
            <motion.div variants={fadeInUp} className="w-full">
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    className="border-b border-black/8 last:border-b-0 overflow-hidden"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-14 md:h-16 lg:h-20 xl:h-[88px] relative">
                      <motion.button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full text-left h-full focus:outline-none hover:bg-gray-50/25 transition-colors duration-200 px-2"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="h-full flex justify-between items-center">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0"
                              >
                                <path
                                  d="M9.2066 0.0112645C7.72786 0.100426 6.17129 0.65384 4.93957 1.53008C3.13936 2.81216 1.65724 4.87209 0.763903 7.34093C0.442438 8.22639 0.192033 9.15182 0.0634471 9.93583C-0.021149 10.4462 -0.021149 11.8636 0.0634471 12.3893C0.381529 14.4093 1.40345 16.1802 3.12921 17.7051C3.63679 18.1571 4.43199 18.7628 4.75007 18.9411C4.77376 18.9534 4.65532 18.8151 4.48613 18.6306C3.20704 17.2409 2.36785 15.6083 2.02946 13.8405C1.91103 13.2225 1.88057 12.2509 1.96178 11.6514C2.00916 11.2886 2.20542 10.5323 2.33062 10.2125C2.4186 9.99117 2.64532 9.57303 2.84497 9.25943C3.0886 8.87204 3.44052 8.37704 3.45744 8.39242C3.4676 8.39856 3.43714 8.4785 3.38977 8.57074C3.11906 9.13338 2.80775 10.1418 2.70961 10.7813C2.47613 12.3217 2.79083 13.8989 3.62664 15.3624C4.62825 17.1087 6.36078 18.5291 8.39447 19.2701C9.5416 19.6851 10.4315 19.885 11.5245 19.9772C12.0829 20.0233 13.4466 19.9957 13.9778 19.928C15.2874 19.7651 16.4717 19.4269 17.629 18.8888L18.1704 18.6367L17.3244 18.6183C16.492 18.6029 16.4751 18.5998 16.025 18.4922C15.3923 18.3385 15.037 18.2155 14.4854 17.9634C12.983 17.2716 11.8494 16.2417 11.1354 14.9166C10.2827 13.3424 10.1473 11.4546 10.7632 9.77595C11.5888 7.51925 13.5447 5.9082 16.6917 4.89361C17.5816 4.6046 18.6035 4.34942 19.595 4.17109C19.8014 4.1342 19.9808 4.09731 19.9977 4.08808C20.0383 4.06349 19.5375 3.61153 19.1686 3.34097C18.1569 2.60309 16.5935 2.0466 14.9591 1.84983C14.0895 1.7453 14.2113 1.79141 13.7816 1.3948C13.5718 1.20111 13.2977 0.982814 13.1657 0.902876C12.1133 0.281823 10.55 -0.0686731 9.2066 0.0112645ZM11.8832 2.46781C12.4754 2.79986 12.2656 3.68225 11.5787 3.73451C11.1219 3.76833 10.7835 3.47933 10.7801 3.05504C10.7801 2.95666 10.8038 2.82753 10.8342 2.76296C11.0068 2.3848 11.4941 2.24644 11.8832 2.46781Z"
                                  fill="#4A4A4A"
                                />
                              </svg>
                            </motion.div>
                            <span className="text-sm md:text-base lg:text-lg xl:text-xl font-normal font-satoshi text-[#0F1114] leading-none truncate">
                              {faq.question}
                            </span>
                          </div>

                          <motion.div
                            className={`w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0`}
                            animate={{ rotate: openFAQ === faq.id ? 90 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="32"
                                width="32"
                                height="32"
                                rx="16"
                                transform="rotate(-90 0 32)"
                                fill="black"
                                fillOpacity="0.03"
                              />
                              <path
                                d="M19.2403 7.90708L27.3337 16.0004L19.2403 24.0938M4.66699 16.0004H27.107"
                                stroke="#0F1114"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.button>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openFAQ === faq.id ? "auto" : 0,
                        opacity: openFAQ === faq.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="pb-4 md:pb-6 pl-4 md:pl-6 lg:pl-8 xl:pl-10 pr-2 pt-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: openFAQ === faq.id ? 1 : 0, y: openFAQ === faq.id ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-sm md:text-base text-[#4A5568] font-satoshi leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Waitlist Form Section */}
      <div className="w-full flex justify-center px-4 mt-16 lg:mt-24">
        {/* Contenedor principal con dimensiones exactas de Figma */}
        <div className="relative w-[358px] h-[238.66px] md:w-[800px] md:h-[400px] lg:w-[1200px] lg:h-[600px] mx-auto">
          {/* Success message overlay */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
                <div className="text-green-500 text-4xl mb-2">✓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome aboard! 🎉</h3>
                <p className="text-gray-600">Check your email for confirmation.</p>
              </div>
            </motion.div>
          )}

          {/* Versión móvil con formas geométricas */}
          <div className="md:hidden">
            {/* Background con forma geométrica */}
            <svg
              width="358"
              height="238.66"
              viewBox="0 0 358 239"
              className="absolute inset-0"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="forestPatternMobile" patternUnits="userSpaceOnUse" width="358" height="239">
                  <image
                    href="/images/forest-aerial-waitlist.jpg"
                    x="0"
                    y="0"
                    width="358"
                    height="239"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              {/* Forma geométrica del background móvil */}
              <path d="M0 0H338L358 20V239H20L0 219V0Z" fill="url(#forestPatternMobile)" />
            </svg>

            {/* Formulario con forma geométrica */}
            <div className="absolute left-[16px] top-[25.66px] w-[326px] h-[197px]">
              <svg width="326" height="197" viewBox="0 0 326 197" className="absolute inset-0">
                <defs>
                  <linearGradient id="formGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="50%" stopColor="white" />
                    <stop offset="100%" stopColor="#CDD3DC" />
                  </linearGradient>
                </defs>
                {/* Forma geométrica del formulario móvil */}
                <path d="M0 0H306L326 20V197H20L0 177V0Z" fill="url(#formGradientMobile)" />
              </svg>

              {/* Contenido del formulario móvil */}
              <div className="absolute inset-0 flex flex-col justify-start items-start pt-[30px] pb-[20px] pl-[32px] pr-[16px] gap-[15px]">
                {/* Título */}
                <div className="w-[165px] text-[#0D0D0D] text-[21.56px] font-normal leading-[28px] font-bricolage">
                  Be Part of the Change
                </div>

                {/* Formulario */}
                <div className="absolute left-[27px] top-[98.34px] w-[277px] h-[62px] bg-[#F7F7F7] rounded-[12px] flex items-center px-[16px] py-[10px] gap-[40px]">
                  <div className="flex-1 h-[24px] relative overflow-hidden">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Your e-email..."
                      className="w-full h-full bg-transparent focus:outline-none border-none"
                      style={{
                        color: "rgba(0, 0, 0, 0.31)",
                        fontSize: "14.12px",
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                      }}
                      disabled={isSubmitting}
                    />
                  </div>
                  <motion.div
                    onClick={handleEmailSubmit}
                    className="h-[48px] px-[14px] py-[16px] bg-[#0F1114] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] rounded-[12px] flex justify-center items-center cursor-pointer hover:bg-gray-800 transition-all duration-300 group disabled:opacity-50"
                    whileHover={!isSubmitting ? { scale: 1.05, backgroundColor: "#1a1d21" } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    style={{ pointerEvents: isSubmitting ? "none" : "auto" }}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          duration: 1.5,
                          ease: "easeInOut",
                          repeatDelay: 1,
                        }}
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Versión tablet */}
          <div className="hidden md:block lg:hidden">
            {/* Background con forma geométrica */}
            <svg
              width="800"
              height="400"
              viewBox="0 0 800 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern id="forestPatternTablet" patternUnits="userSpaceOnUse" width="800" height="400">
                  <image
                    href="/images/forest-aerial-waitlist.jpg"
                    x="0"
                    y="0"
                    width="800"
                    height="400"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              {/* Forma geométrica del background tablet */}
              <path d="M0 0H747L800 53V400H53L0 347V0Z" fill="url(#forestPatternTablet)" />
            </svg>

            {/* Formulario con forma geométrica */}
            <div className="absolute left-[24px] top-[60px] w-[calc(100%-48px)] h-[calc(100%-80px)]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 752 320"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="formGradientTablet" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="50%" stopColor="white" />
                    <stop offset="100%" stopColor="#CDD3DC" />
                  </linearGradient>
                </defs>
                <path d="M0 0H699L752 53V320H53L0 267V0Z" fill="url(#formGradientTablet)" />
              </svg>

              {/* Contenido tablet */}
              <div className="absolute inset-0 flex flex-col justify-start items-start p-[32px_280px_32px_40px] gap-[12px]">
                {/* Contenido de texto */}
                <div className="w-full max-w-[400px] flex flex-col justify-start items-start gap-[10px]">
                  <div className="flex flex-col justify-center text-[#0D0D0D] font-bricolage font-semibold leading-none">
                    <span className="text-[32px]">Be Part of the Change</span>
                  </div>
                  {/* Descripción tablet */}
                  <div className="w-full">
                    <div
                      style={{
                        width: "100%",
                        color: "#4A4A4A",
                        fontSize: "16px",
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        lineHeight: "22px",
                        wordWrap: "break-word",
                      }}
                    >
                      EPℇC Corvux centralizes compliance across MRV, ETS, DCS, and FuelEU. Monitor emissions, validate
                      data, and submit reports to regulators all from a single streamlined workspace.
                    </div>
                  </div>
                </div>

                {/* Formulario tablet */}
                <div className="w-full max-w-[400px] mt-[8px]">
                  <div
                    style={{
                      width: "100%",
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 12,
                      paddingRight: 8,
                      background: "#F7F7F7",
                      overflow: "hidden",
                      borderRadius: 10,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 30,
                      display: "inline-flex",
                    }}
                  >
                    <div style={{ flex: "1 1 0", height: 20, position: "relative", overflow: "hidden" }}>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your e-email..."
                        className="w-full h-full bg-transparent focus:outline-none border-none"
                        style={{
                          color: "rgba(0, 0, 0, 0.31)",
                          fontSize: "12px",
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div
                      onClick={handleEmailSubmit}
                      style={{
                        height: 40,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 12,
                        paddingBottom: 12,
                        background: "#0F1114",
                        boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
                        overflow: "hidden",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8,
                        display: "flex",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                      className="hover:bg-gray-800 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20"
                    >
                      {isSubmitting ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                              flexDirection: "column",
                              color: "white",
                              fontSize: "12px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                            }}
                          >
                            Get Early Access
                          </div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Logo tablet */}
                <div className="absolute right-[20px] bottom-[20px]">
                  <img
                    src="/icons/corvux-green.svg"
                    alt="EPℇC Corvux Logo"
                    className="w-[50px] h-[50px]"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(29%) sepia(8%) saturate(1085%) hue-rotate(169deg) brightness(94%) contrast(87%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Versión desktop con formas geométricas */}
          <div className="hidden lg:block">
            {/* Background con forma geométrica */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 600"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern id="forestPattern" patternUnits="userSpaceOnUse" width="1200" height="600">
                  <image
                    href="/images/forest-aerial-waitlist.jpg"
                    x="0"
                    y="0"
                    width="1200"
                    height="600"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              {/* Forma geométrica del background */}
              <path d="M0 0H1120L1200 80V600H80L0 520V0Z" fill="url(#forestPattern)" />
            </svg>

            {/* Formulario con forma geométrica */}
            <div className="absolute left-[32px] top-[100px] w-[calc(100%-64px)] h-[calc(100%-132px)]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1136 465"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="formGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="50%" stopColor="white" />
                    <stop offset="100%" stopColor="#CDD3DC" />
                  </linearGradient>
                </defs>
                <path d="M0 0H1056L1136 80V465H80L0 385V0Z" fill="url(#formGradient)" />
              </svg>

              {/* Contenido */}
              <div
                className="absolute inset-0 flex flex-col justify-start items-start"
                style={{
                  padding: "44px 560px 78px 64px",
                  gap: "15px",
                }}
              >
                {/* Contenido de texto */}
                <div className="w-full max-w-[512px] flex flex-col justify-start items-start gap-[14px]">
                  <div className="flex flex-col justify-center text-[#0D0D0D] font-bricolage font-semibold leading-none">
                    <span className="text-[52px]">Be Part of the Change</span>
                  </div>
                  {/* Descripción - SOLO en desktop */}
                  <div className="w-full">
                    <div
                      style={{
                        width: "100%",
                        color: "#4A4A4A",
                        fontSize: 24,
                        fontFamily: "Satoshi",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      EPℇC Corvux centralizes compliance across MRV, ETS, DCS, and FuelEU. Monitor emissions, validate
                      data, and submit reports to regulators all from a single streamlined workspace.
                    </div>
                  </div>
                </div>

                {/* Formulario */}
                <div className="w-full">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 16,
                      paddingRight: 10,
                      background: "#F7F7F7",
                      overflow: "hidden",
                      borderRadius: 12,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 40,
                      display: "inline-flex",
                    }}
                  >
                    <div style={{ flex: "1 1 0", height: 24, position: "relative", overflow: "hidden" }}>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your e-email..."
                        className="w-full h-full bg-transparent focus:outline-none border-none"
                        style={{
                          color: "rgba(0, 0, 0, 0.31)",
                          fontSize: "14.12px",
                          fontFamily: "Satoshi",
                          fontWeight: "400",
                        }}
                        disabled={isSubmitting}
                      />
                    </div>
                    <motion.div
                      onClick={handleEmailSubmit}
                      style={{
                        height: 48,
                        paddingLeft: 14,
                        paddingRight: 14,
                        paddingTop: 16,
                        paddingBottom: 16,
                        background: "#0F1114",
                        boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
                        overflow: "hidden",
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 12,
                        display: "flex",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                      className="hover:bg-gray-800 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20"
                      whileHover={!isSubmitting ? { scale: 1.05, backgroundColor: "#1a1d21" } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    >
                      {isSubmitting ? (
                        <svg
                          className="animate-spin h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                              flexDirection: "column",
                              color: "white",
                              fontSize: "14.12px",
                              fontFamily: "Satoshi",
                              fontWeight: "400",
                            }}
                          >
                            Get Early Access
                          </div>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "mirror",
                              duration: 1.5,
                              ease: "easeInOut",
                              repeatDelay: 1,
                            }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Logo - SOLO en desktop */}
                <div
                  className="absolute"
                  style={{
                    right: "26px",
                    bottom: "26px",
                  }}
                >
                  <img
                    src="/icons/corvux-green.svg"
                    alt="EPℇC Corvux Logo"
                    className="w-[70px] h-[70px]"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(29%) sepia(8%) saturate(1085%) hue-rotate(169deg) brightness(94%) contrast(87%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
