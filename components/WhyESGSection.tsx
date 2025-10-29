"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"
import WhyChooseContainer from "@/components/why-choose-container"

interface WhyESGSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function WhyESGSection({ parallaxY }: WhyESGSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  // Scroll para el video scaling effect - más amplio para suavidad extrema
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start 120%", "end -50%"],
  })

  // Video scaling con spring para ultra fluidez
  const videoScaleRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85])
  const videoOpacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  // Aplicar spring para suavidad extrema
  const videoScale = useSpring(videoScaleRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const videoOpacity = useSpring(videoOpacityRaw, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
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

  return (
    <motion.section
      style={{ y: parallaxY }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="py-16 md:py-18 lg:py-32 relative overflow-hidden bg-[#0F1114] parallax-section"
      style={{
        y: parallaxY,
        marginTop: "-4px", // Elimina gap con hero
      }}
    >
      <div className="w-full px-4 lg:px-8 relative">
        <div className="w-full border-t border-white/30 flex justify-between items-center pt-1">
          <svg width="16" height="17" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
              fill="white"
              fillOpacity="0.29"
            />
          </svg>

          <div className="opacity-60 text-white/30 text-sm font-normal">002</div>
          <div className="opacity-60 text-white/30 text-sm font-normal uppercase">WHY ESG MARITIME COMPLIANCE?</div>
        </div>
      </div>

      {/* Layout responsivo: móvil = columna, tablet/desktop = fila */}
      <div className="container mx-auto px-4 mt-24 mb-24">
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* Video Container - Centrado en móvil, izquierda en desktop */}
          <div className="flex justify-center lg:justify-start lg:flex-shrink-0">
            <WhyChooseContainer />
          </div>

          {/* Text Grids - Abajo en móvil, derecha en desktop */}
          <div className="mt-12 lg:mt-0 lg:flex-1 lg:pl-12 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4 py-0 md:py-0 lg:py-0">
                <div className="border-t border-white/30 mb-4"></div>
                <h4 className="font-bricolage font-medium text-[#ffffffe8] text-xl sm:text-2xl lg:text-[32px] leading-tight">
                  Streamline Regulatory Complexity
                </h4>
                <p className="font-satoshi font-normal text-[#cfcfcf] text-base sm:text-lg leading-relaxed">
                  <span className="font-satoshi font-normal text-[#cfcfcf]">
                    Managing MRV, ETS and IMO DCS can be overwhelming.{" "}
                  </span>
                  <span className="font-satoshi font-bold">EPℇC Corvux</span>
                  <span className="font-satoshi font-normal text-[#cfcfcf]">
                    {" "}
                    structures everything so your team never misses a requirement.
                  </span>
                </p>
              </div>

              <div className="space-y-4 py-0 md:py-0 lg:py-0">
                <div className="border-t border-white/30 mb-4"></div>
                <h4 className="font-bricolage font-medium text-[#ffffffe8] text-xl sm:text-2xl lg:text-[32px] leading-tight">
                  Operate With Confidence
                  <br />
                  Experts
                </h4>
                <p className="font-satoshi font-normal text-[#cfcfcf] text-base sm:text-lg leading-relaxed">
                  Validated data, verifier-ready reports and full fleet monitoring ensure you stay on track and avoid
                  costly delays.
                </p>
              </div>

              <div className="space-y-4 py-2 md:py-4 lg:py-16 xl:py-32">
                <div className="border-t border-white/30 mb-4"></div>
                <h4 className="font-bricolage font-medium text-[#ffffffe8] text-xl sm:text-2xl lg:text-[32px] leading-tight">
                  Escape Spreadsheets Forever
                </h4>
                <p className="font-satoshi font-normal text-[#cfcfcf] text-base sm:text-lg leading-relaxed">
                  Say goodbye to manual processes and Excel chaos. Everything you need is in one place, in real time.
                </p>
              </div>

              <div className="space-y-4 py-2 md:py-4 lg:py-16 xl:py-32">
                <div className="border-t border-white/30 mb-4"></div>
                <h4 className="font-bricolage font-medium text-[#ffffffe8] text-xl sm:text-2xl lg:text-[28px] leading-tight">
                  Built for the Maritime World
                </h4>
                <p className="font-satoshi font-normal text-[#cfcfcf] text-base sm:text-lg leading-relaxed">
                  <span className="font-bold">EPℇC Corvux</span>
                  <span className="font-satoshi">
                    {" "}
                    is designed for sustainability officers, compliance teams and engineers working in maritime
                    operations.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texto deslizante */}
      <div className="mt-24 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <div className="text-[#0E4D92] text-8xl md:text-9xl lg:text-[180px] font-normal font-bricolage">
            Sustainable Maritime Operations - Full Control - No Spreadsheets.
          </div>
        </motion.div>
      </div>

      {/* Video con overlay y efecto de scaling */}
      <div className="mt-24 px-4 xl:px-[30px]" ref={videoRef}>
        <motion.div
          className="relative rounded-3xl overflow-hidden origin-center"
          style={{
            scale: videoScale,
            opacity: videoOpacity,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            className="w-full h-[824px] object-cover"
            poster="/placeholder.svg?height=824&width=1860&text=Cruise+Ship"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoLoaded(false)}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Cruise_Ship_Ship_1920x1080-wsdJ19SkgWmeRWUoqImJMFFi5Mdb1e.mp4"
              type="video/mp4"
            />
            <img
              src="/placeholder.svg?height=824&width=1860&text=Cruise+Ship"
              alt="Cruise Ship"
              crossOrigin="anonymous"
              className="w-full h-[824px] object-cover"
            />
          </video>

          {/* Contenedor principal para móvil - estructura con overlay en la parte inferior */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:hidden">
            {/* Overlay de texto en la parte inferior */}
            <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm p-4 rounded-xl mb-16">
              <h2 className="text-white text-2xl font-bold font-bricolage leading-tight mb-3">
                Transparency, Control and Confidence at Sea
              </h2>
              <p className="text-white text-sm">
                <span className="font-bold">EPℇC Corvux</span> gives maritime operators full visibility into their
                environmental compliance. From emissions monitoring to report submission, every step is traceable,
                auditable and secure.
              </p>
            </div>

            {/* Botón centrado en la parte inferior con separación del overlay */}
            <div className="flex justify-center mb-6">
              <button
                className="bg-white text-[#0F1114] px-5 py-3 rounded-xl font-medium flex items-center gap-2 text-sm hover:bg-gray-100 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  const waitlistSection = document.getElementById("waitlist")
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: "smooth" })
                  } else {
                    // Fallback si no encuentra el ID
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Request Early Access
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Diseño para tablet/desktop - mantiene la estructura original */}
          <div className="absolute bottom-0 left-0 p-12 max-w-2xl hidden md:block">
            <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-white text-5xl font-bold font-bricolage leading-tight mb-7">
                Transparency, Control and Confidence at Sea
              </h2>
              <p className="text-white text-lg">
                <span className="font-bold">EPℇC Corvux</span> gives maritime operators full visibility into their
                environmental compliance. From emissions monitoring to report submission, every step is traceable,
                auditable and secure.
              </p>
            </div>
          </div>

          {/* Botón para tablet/desktop */}
          <div className="absolute bottom-12 right-12 hidden md:block">
            <button
              className="bg-[#F3F4F6] text-[#0F1114] px-4 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-white transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                const waitlistSection = document.getElementById("waitlist")
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  // Fallback si no encuentra el ID
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Request Early Access
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
