"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface UserProfilesSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function UserProfilesSection({ parallaxY }: UserProfilesSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Cambiar la función scrollToRegulations para que apunte al id correcto
  const scrollToRegulations = () => {
    const regulationsSection = document.querySelector("#features")
    if (regulationsSection) {
      regulationsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="bg-[#0F1114] min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Header con ícono, número y título */}
      <div className="w-full px-4 lg:px-8 relative pt-8 md:pt-12 lg:pt-16">
        <div className="w-full border-t border-white/30 flex justify-between items-center pt-1">
          <svg width="16" height="17" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.1888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
              fill="white"
              fillOpacity="0.29"
            />
          </svg>

          <div className="opacity-60 text-white/30 text-sm font-normal">005</div>
          <div className="opacity-60 text-white/30 text-sm font-normal uppercase">USER PROFILES</div>
        </div>
      </div>

      {/* Contenido principal - Centrado verticalmente en el espacio restante */}
      <div className="flex-1 flex items-center justify-center py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[1536px] mx-auto">
            {/* Layout responsivo: vertical en móvil/tablet, horizontal en desktop */}
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-8 xl:gap-16">
              {/* Lado izquierdo - Texto descriptivo */}
              <motion.div className="w-full xl:w-[384px] xl:flex-shrink-0 relative" variants={fadeInUp}>
                {/* Badge */}
                <div className="inline-flex mb-6 xl:mb-8">
                  <div className="px-4 py-3 bg-[rgba(247,247,247,0.16)] rounded-[30px] flex items-center justify-center">
                    <span className="text-[#C1C1C7] text-sm font-satoshi italic font-normal">COMPLIANCE ROLES</span>
                  </div>
                </div>

                {/* Título */}
                <h2 className="text-white text-2xl md:text-3xl xl:text-[32px] font-bricolage font-normal leading-tight mb-6 xl:mb-8">
                  Who is EPℇC Corvux built for?
                </h2>

                {/* Descripción */}
                <p className="text-white text-base md:text-lg xl:text-[18px] font-satoshi font-normal leading-relaxed mb-8 xl:mb-12">
                  Corvux empowers every actor involved in maritime ESG compliance—from data collection to verification.
                </p>

                {/* Botón */}
                <button
                  onClick={scrollToRegulations}
                  className="inline-flex items-center gap-2 bg-white px-4 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-[#0F1114] text-base font-satoshi font-normal">See How They Use Corvux</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ArrowRight className="w-[18px] h-[15px] text-[#0F1114] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </button>
              </motion.div>

              {/* Lado derecho - Grid de cards */}
              <motion.div
                className="flex-1 xl:max-w-[1200px] flex justify-center"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-20 justify-items-center">
                  {/* Card 1: Compliance Officers */}
                  <motion.div className="w-[270px]" variants={fadeInUp} transition={{ delay: 0.3 }}>
                    <div
                      className="w-[270px] h-[360px] relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group cursor-pointer"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "28px",
                      }}
                    >
                      {/* Imagen */}
                      <div
                        className="absolute"
                        style={{
                          width: "254px",
                          height: "258px",
                          left: "8px",
                          top: "8px",
                        }}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Img_mask-group-RQ9R8pDwmCQrbkVe3tHhsxTVWImRUQ.svg"
                          alt="Compliance Officers"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      {/* Texto */}
                      <div
                        className="absolute px-2"
                        style={{
                          left: "8px",
                          right: "8px",
                          top: "274px",
                        }}
                      >
                        <h3 className="text-[#8D8D8D] text-sm font-satoshi font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                          Compliance officers
                        </h3>
                        <p className="text-white text-sm font-satoshi font-normal leading-relaxed">
                          Oversee regulatory deadlines and centralize reporting.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2: Technical Managers */}
                  <motion.div className="w-[270px]" variants={fadeInUp} transition={{ delay: 0.4 }}>
                    <div
                      className="w-[270px] h-[360px] relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group cursor-pointer"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "28px",
                      }}
                    >
                      {/* Imagen */}
                      <div
                        className="absolute"
                        style={{
                          width: "254px",
                          height: "258px",
                          left: "8px",
                          top: "8px",
                        }}
                      >
                        <img
                          src="/images/technical-managers-mask.svg"
                          alt="Technical Managers"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      {/* Texto */}
                      <div
                        className="absolute px-2"
                        style={{
                          left: "8px",
                          right: "8px",
                          top: "274px",
                        }}
                      >
                        <h3 className="text-[#8D8D8D] text-sm font-satoshi font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                          Technical Managers
                        </h3>
                        <p className="text-white text-sm font-satoshi font-normal leading-relaxed">
                          Ensure data accuracy and efficient emissions validation.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3: Sustainability Teams */}
                  <motion.div className="w-[270px]" variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <div
                      className="w-[270px] h-[360px] relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group cursor-pointer"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "28px",
                      }}
                    >
                      {/* Imagen */}
                      <div
                        className="absolute"
                        style={{
                          width: "254px",
                          height: "258px",
                          left: "8px",
                          top: "8px",
                        }}
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Img_mask-group%20%283%29-UGsP9CmKjCxwvV4I1TZu6TmbNMKRwL.svg"
                          alt="Sustainability Teams"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      {/* Texto */}
                      <div
                        className="absolute px-2"
                        style={{
                          left: "8px",
                          right: "8px",
                          top: "274px",
                        }}
                      >
                        <h3 className="text-[#8D8D8D] text-sm font-satoshi font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                          Sustainability Teams
                        </h3>
                        <p className="text-white text-sm font-satoshi font-normal leading-relaxed">
                          Track ESG metrics and translate them into action.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 4: Maritime Verifiers */}
                  <motion.div className="w-[270px]" variants={fadeInUp} transition={{ delay: 0.6 }}>
                    <div
                      className="w-[270px] h-[360px] relative overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group cursor-pointer"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        borderRadius: "28px",
                      }}
                    >
                      {/* Imagen */}
                      <div
                        className="absolute"
                        style={{
                          width: "254px",
                          height: "258px",
                          left: "8px",
                          top: "8px",
                        }}
                      >
                        <img
                          src="/images/maritime-verifiers.svg"
                          alt="Maritime Verifiers"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>

                      {/* Texto */}
                      <div
                        className="absolute px-2"
                        style={{
                          left: "8px",
                          right: "8px",
                          top: "274px",
                        }}
                      >
                        <h3 className="text-[#8D8D8D] text-sm font-satoshi font-medium mb-2 transition-colors duration-300 group-hover:text-white">
                          Maritime Verifiers
                        </h3>
                        <p className="text-white text-sm font-satoshi font-normal leading-relaxed">
                          Receive standardized, audit-ready documents.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
