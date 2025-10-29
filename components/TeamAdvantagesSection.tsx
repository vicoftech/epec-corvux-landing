"use client"

import { motion } from "framer-motion"

interface TeamAdvantagesSectionProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function TeamAdvantagesSection({ parallaxY }: TeamAdvantagesSectionProps) {

  

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-[#F2F5F7] py-16 md:py-18 lg:py-20"
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

          <div className="opacity-60 text-gray-600 text-sm font-normal">004</div>
          <div className="opacity-60 text-gray-600 text-sm font-normal uppercase">TEAM ADVANTAGES</div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Título y descripción */}
          <div className="mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bricolage text-[#0F1114] mb-6 leading-tight">
              Why Maritime Teams Choose Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#4A4A4A] font-satoshi max-w-4xl leading-relaxed">
              EPℇC Corvux centralizes compliance across MRV, ETS, DCS, and FuelEU. Monitor emissions, validate data, and
              submit reports to regulators all from a single streamlined workspace.
            </p>
          </div>

          {/* Grid de cards responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ gap: "24px 32px" }}>
            {/* Card 1: Verified Compliance - Vertical izquierda */}
            <motion.div
              className="lg:col-span-4 lg:row-span-3 relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[400px] lg:h-[1050px] rounded-3xl overflow-hidden">
                {/* Video background */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  crossOrigin="anonymous"
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/placeholder.svg?height=1050&width=500&text=Verified+Compliance"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_Presentation_Business_720x1280-jp3aLzEKLvlJFl7uj5UXq5VTip3Fx2.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="/placeholder.svg?height=1050&width=500&text=Verified+Compliance"
                    alt="Verified Compliance"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </video>

                {/* Overlay con blur */}
                <div className="absolute inset-0 bg-[rgba(15,17,20,0.4)] backdrop-blur-[1px]" />

                {/* Contenido del texto */}
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:pb-2 lg:group-hover:pb-3">
                    <div className="p-3 lg:p-4">
                      <div className="flex items-center gap-3 mb-1.5">
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
                            fill="white"
                          />
                        </svg>
                        <h3 className="text-white text-xl lg:text-2xl font-normal font-bricolage leading-tight">
                          Verified Compliance
                        </h3>
                      </div>
                    </div>
                    {/* Subtítulo que aparece en hover */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 px-3 lg:px-4">
                      <p className="text-white/80 text-sm lg:text-base font-satoshi pb-2 lg:pb-3">
                        Auditor-ready reports with traceability across every emission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards horizontales - Columna derecha con gap específico */}
            <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-[18px]">
              {/* Card 2: Built for Maritime Workflows */}
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px] lg:h-[338px] rounded-3xl overflow-hidden">
                  {/* Video background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/placeholder.svg?height=338&width=1018&text=Maritime+Workflows"
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1164867_Man_Business_1280x720-HgAyrImFDSD9Q3zkp79fO8C7gqdgkD.mp4"
                      type="video/mp4"
                    />
                    <img
                      src="/placeholder.svg?height=338&width=1018&text=Maritime+Workflows"
                      alt="Built for Maritime Workflows"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </video>

                  {/* Overlay con blur */}
                  <div className="absolute inset-0 bg-[rgba(15,17,20,0.4)] backdrop-blur-[1px]" />

                  {/* Contenido del texto */}
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                    <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:pb-2 lg:group-hover:pb-3">
                      <div className="p-3 lg:p-4">
                        <div className="flex items-center gap-3 mb-1.5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
                              fill="white"
                            />
                          </svg>
                          <h3 className="text-white text-xl lg:text-2xl font-normal font-bricolage leading-tight">
                            Built for Maritime Workflows
                          </h3>
                        </div>
                      </div>
                      {/* Subtítulo que aparece en hover */}
                      <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 px-3 lg:px-4">
                        <p className="text-white/80 text-sm lg:text-base font-satoshi pb-2 lg:pb-3">
                          Designed for sustainability officers and onboard data managers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: No More Excel Chaos */}
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px] lg:h-[338px] rounded-3xl overflow-hidden">
                  {/* Video background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/placeholder.svg?height=338&width=1018&text=No+Excel+Chaos"
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5114452_Workteam_Working_Team_1280x720-pV6k9oq1SCo5lWrx4xMbb4C7sBRUIB.mp4"
                      type="video/mp4"
                    />
                    <img
                      src="/placeholder.svg?height=338&width=1018&text=No+Excel+Chaos"
                      alt="No More Excel Chaos"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </video>

                  {/* Overlay con blur */}
                  <div className="absolute inset-0 bg-[rgba(15,17,20,0.4)] backdrop-blur-[1px]" />

                  {/* Contenido del texto */}
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                    <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:pb-2 lg:group-hover:pb-3">
                      <div className="p-3 lg:p-4">
                        <div className="flex items-center gap-3 mb-1.5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
                              fill="white"
                            />
                          </svg>
                          <h3 className="text-white text-xl lg:text-2xl font-normal font-bricolage leading-tight">
                            No More Excel Chaos
                          </h3>
                        </div>
                      </div>
                      {/* Subtítulo que aparece en hover */}
                      <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 px-3 lg:px-4">
                        <p className="text-white/80 text-sm lg:text-base font-satoshi pb-2 lg:pb-3">
                          Automated data pipelines from start to submission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Easy Implementation */}
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px] lg:h-[338px] rounded-3xl overflow-hidden">
                  {/* Video background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/placeholder.svg?height=338&width=1018&text=Easy+Implementation"
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1103486_1080p_Search_1280x720-uBsvY2pONOzuugDN3jCqeV2L8HQgb0.mp4"
                      type="video/mp4"
                    />
                    <img
                      src="/placeholder.svg?height=338&width=1018&text=Easy+Implementation"
                      alt="Easy Implementation"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </video>

                  {/* Overlay con blur */}
                  <div className="absolute inset-0 bg-[rgba(15,17,20,0.4)] backdrop-blur-[1px]" />

                  {/* Contenido del texto */}
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                    <div className="bg-[rgba(15,17,20,0.6)] backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:pb-2 lg:group-hover:pb-3">
                      <div className="p-3 lg:p-4">
                        <div className="flex items-center gap-3 mb-1.5">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8892 0.515772C10.819 0.640598 8.6398 1.41538 6.9154 2.64211C4.39511 4.43702 2.32013 7.32092 1.06946 10.7773C0.619413 12.0169 0.268847 13.3126 0.0888259 14.4102C-0.0296086 15.1247 -0.0296086 17.109 0.0888259 17.845C0.53414 20.673 1.96483 23.1523 4.3809 25.2872C5.0915 25.9199 6.20479 26.7679 6.6501 27.0175C6.68326 27.0348 6.51746 26.8411 6.28059 26.5828C4.48985 24.6373 3.31498 22.3517 2.84125 19.8767C2.67544 19.0115 2.6328 17.6513 2.7465 16.812C2.81282 16.3041 3.08759 15.2452 3.26287 14.7975C3.38604 14.4876 3.70345 13.9022 3.98295 13.4632C4.32405 12.9209 4.81673 12.2279 4.84042 12.2494C4.85463 12.258 4.812 12.3699 4.74567 12.499C4.36668 13.2867 3.93084 14.6985 3.79346 15.5938C3.46658 17.7503 3.90716 19.9584 5.07729 22.0073C6.47956 24.4522 8.9051 26.4408 11.7523 27.4781C13.3582 28.0592 14.6042 28.339 16.1343 28.4681C16.916 28.5327 18.8252 28.4939 19.5689 28.3992C21.4023 28.1711 23.0604 27.6976 24.6806 26.9444L25.4386 26.5914L24.2542 26.5656C23.0888 26.5441 23.0651 26.5398 22.4351 26.3891C21.5492 26.1739 21.0517 26.0017 20.2796 25.6488C18.1762 24.6803 16.5891 23.2383 15.5895 21.3832C14.3957 19.1794 14.2062 16.5365 15.0684 14.1863C16.2244 11.027 18.9626 8.77148 23.3683 7.35105C24.6143 6.94645 26.0449 6.58919 27.433 6.33953C27.722 6.28788 27.9731 6.23623 27.9967 6.22332C28.0536 6.18888 27.3525 5.55615 26.8361 5.17736C25.4196 4.14433 23.2309 3.36524 20.9428 3.08976C19.7253 2.94342 19.8958 3.00798 19.2942 2.45272C19.4253 2.66202 19.0415 2.35641 18.8568 2.2445C17.3835 1.37502 15.1948 0.884328 13.314 0.996241ZM16.6365 3.95493C17.4655 4.4198 17.1718 5.65515 16.2101 5.72832C15.5706 5.77567 15.0969 5.37106 15.0921 4.77706C15.0921 4.63932 15.1253 4.45854 15.1679 4.36815C15.4095 3.83872 16.0917 3.64502 16.6365 3.95493Z"
                              fill="white"
                            />
                          </svg>
                          <h3 className="text-white text-xl lg:text-2xl font-normal font-bricolage leading-tight">
                            Easy Implementation
                          </h3>
                        </div>
                      </div>
                      {/* Subtítulo que aparece en hover */}
                      <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 px-3 lg:px-4">
                        <p className="text-white/80 text-sm lg:text-base font-satoshi pb-2 lg:pb-3">
                          Cloud-based, flexible onboarding in just a few steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
