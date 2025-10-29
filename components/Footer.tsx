"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp, ArrowRight } from "lucide-react"

interface FooterProps {
  parallaxY?: any // Framer Motion MotionValue
}

export default function Footer({ parallaxY }: FooterProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="relative"
      id="contact"
      style={{
        y: parallaxY,
        marginTop: "-8px",
        backgroundColor: "#0F1114",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
        overflow: "hidden",
      }}
    >
      {/* Versión desktop */}
      <div
        className="hidden lg:block relative w-full px-8 py-8"
        style={{
          height: "492px",
          paddingBottom: "32px",
        }}
      >
        {/* Contenedor interno sin márgenes adicionales */}
        <div className="relative w-full h-full">
          {/* Logo EPℇC Corvux */}
          <div
            className="absolute text-white text-[32px] font-bricolage font-semibold"
            style={{ left: "0px", top: "0px" }}
          >
            EPℇC Corvux
          </div>

          {/* Descripción principal */}
          <div
            className="absolute text-white text-[24px] font-satoshi font-normal leading-relaxed"
            style={{
              width: "603px",
              left: "0px",
              top: "60px",
              lineHeight: "1.4",
            }}
          >
            Streamlining maritime environmental compliance through automated reporting, real-time monitoring, and
            seamless verifier collaboration.
          </div>

          {/* Descripción secundaria */}
          <div
            className="absolute text-[#C1C1C7] text-[12px] font-sora font-normal"
            style={{ left: "0px", top: "185px" }}
          >
            We'd love to hear from you. Whether it's feedback, partnerships, or questions — feel free to reach out.
          </div>

          {/* Botón Contact Us */}
          <button
            className="absolute bg-white shadow-sm rounded-xl flex items-center gap-2 hover:shadow-md transition-all duration-300 group"
            style={{
              left: "0px",
              top: "223px",
              height: "48px",
              paddingLeft: "14px",
              paddingRight: "14px",
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            <span className="text-[#0F1114] text-[16px] font-satoshi font-normal">Contact Us</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowRight className="w-[18px] h-[15px] text-[#0F1114] transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>

          {/* Columna Contact */}
          <div
            className="absolute text-white text-[16px] font-bricolage font-bold text-left"
            style={{ right: "320px", top: "60px", width: "160px" }}
          >
            Contact
          </div>
          <div
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal text-left"
            style={{ right: "320px", top: "124px", width: "160px" }}
          >
            Our Email
          </div>
          <Link
            href="mailto:hello@epec-corvux.com"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "320px", top: "147px", width: "160px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              hello@epec-corvux.com
            </span>
          </Link>

          {/* Columna Product */}
          <div
            className="absolute text-white text-[16px] font-bricolage font-bold text-left"
            style={{ right: "140px", top: "60px", width: "100px" }}
          >
            Product
          </div>
          <Link
            href="#features"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "140px", top: "124px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              How It Works
            </span>
          </Link>
          <Link
            href="#features"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "140px", top: "159px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              Features
            </span>
          </Link>
          <Link
            href="/(private)/regulations"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "140px", top: "194px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              Regulations
            </span>
          </Link>
          <Link
            href="#waitlist"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "140px", top: "229px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              Join Waitlist
            </span>
          </Link>
          <Link
            href="#faq"
            className="absolute text-[#C1C1C7] text-[14px] font-satoshi font-normal hover:text-white transition-colors duration-300 text-left"
            style={{ right: "140px", top: "264px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              FAQ
            </span>
          </Link>

          {/* Columna Follow us */}
          <div
            className="absolute text-white text-[16px] font-bricolage font-bold text-left"
            style={{ right: "20px", top: "60px", width: "100px" }}
          >
            Follow us
          </div>
          <Link
            href="#"
            className="absolute text-[#C1C1C7] hover:text-white transition-colors duration-300 text-left"
            style={{ right: "20px", top: "124px", width: "100px" }}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300">
              Linkedin
            </span>
          </Link>

          {/* Logo blanco en la posición exacta de Figma */}
          <div className="absolute" style={{ right: "0px", top: "287px", width: "50px", height: "50px" }}>
            <img
              src="/icons/corvux-green.svg"
              alt="EPℇC Corvux Logo"
              className="w-[50px] h-[50px]"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>

          {/* Línea divisoria y sección inferior */}
          <div
            className="absolute border-t-[3px] border-white/20"
            style={{
              width: "100%",
              left: "0px",
              top: "357px",
              height: "71px",
            }}
          >
            {/* Copyright y links */}
            <div className="absolute flex items-center gap-4" style={{ left: "0px", top: "36px" }}>
              <div className="text-white text-[14px] font-satoshi font-normal leading-none">
                © 2025 EPℇC Corvux. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#C1C1C7] text-[11px] font-sora font-normal opacity-70 leading-none">/</div>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-[12px] font-satoshi font-normal uppercase leading-none relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-[12px] font-satoshi font-normal uppercase leading-none relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
                  >
                    Terms and Conditions
                  </Link>
                </div>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="absolute flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group"
              style={{ right: "0px", top: "36px" }}
            >
              <span className="text-white/50 text-[12px] font-satoshi font-normal uppercase text-center leading-none">
                Back to the top
              </span>
              <div className="w-6 h-6 flex items-center justify-center">
                <ArrowUp className="w-4 h-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-1" />
              </div>
            </button>
          </div>
        </div>

        {/* Versión móvil y tablet */}
        <div className="lg:hidden px-8 py-8" style={{ paddingBottom: "32px" }}>
          <div className="space-y-8">
            {/* Logo móvil */}
            <h3 className="text-white text-2xl font-bricolage font-semibold">EPℇC Corvux</h3>

            {/* Descripción móvil */}
            <p className="text-white text-lg font-satoshi font-normal leading-relaxed">
              Streamlining maritime environmental compliance through automated reporting, real-time monitoring, and
              seamless verifier collaboration.
            </p>

            {/* Descripción secundaria */}
            <p className="text-[#C1C1C7] text-xs font-sora font-normal">
              We'd love to hear from you. Whether it's feedback, partnerships, or questions — feel free to reach out.
            </p>

            {/* Botón móvil */}
            <button className="inline-flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
              <span className="text-[#0F1114] text-base font-satoshi font-normal">Contact Us</span>
              <ArrowRight className="w-5 h-5 text-[#0F1114] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Links móvil - Grid de 3 columnas en tablet, apilado en móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              {/* Columna Product */}
              <div>
                <h4 className="text-white font-satoshi font-bold text-base mb-4">Product</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#features"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                    >
                      How It Works
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                    >
                      Features
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/(private)/regulations"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                    >
                      Regulations
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#waitlist"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                    >
                      Join Waitlist
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faq"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                    >
                      FAQ
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna Contact */}
              <div>
                <h4 className="text-white font-satoshi font-bold text-base mb-4">Contact</h4>
                <div className="text-[#C1C1C7] text-sm font-satoshi mb-1">Our Email</div>
                <Link
                  href="mailto:hello@epec-corvux.com"
                  className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                >
                  hello@epec-corvux.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Columna Follow us */}
              <div>
                <h4 className="text-white font-satoshi font-bold text-base mb-4">Follow us</h4>
                <Link
                  href="#"
                  className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-sm relative group inline-block"
                >
                  Linkedin
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-end">
              <img
                src="/icons/corvux-green.svg"
                alt="EPℇC Corvux Logo"
                className="w-10 h-10 sm:w-12 sm:h-12"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>

            {/* Línea divisoria */}
            <div className="border-t-[3px] border-white/20 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Copyright y links */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="text-white text-sm font-satoshi font-normal">
                    © 2025 EPℇC Corvux. All rights reserved.
                  </div>
                  <div className="hidden sm:flex items-center">
                    <div className="text-[#C1C1C7] text-[11px] font-sora font-normal opacity-70 mx-2">/</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
                    <Link
                      href="#"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-[12px] font-satoshi font-normal uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      href="#"
                      className="text-[#C1C1C7] hover:text-white transition-all duration-300 text-[12px] font-satoshi font-normal uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                </div>

                {/* Back to top */}
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group mt-4 sm:mt-0"
                >
                  <span className="text-white/50 text-[12px] font-satoshi font-normal uppercase text-center leading-none">
                    Back to the top
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ArrowUp className="w-4 h-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
