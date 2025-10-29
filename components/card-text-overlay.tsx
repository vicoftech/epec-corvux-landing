interface CardTextOverlayProps {
  isMobile: boolean
}

export default function CardTextOverlay({ isMobile }: CardTextOverlayProps) {
  // Estilos específicos basados en si es móvil o no
  const titleStyles = {
    position: "absolute" as const,
    top: "16px",
    left: "16px",
    width: isMobile ? "180px" : "251px",
    color: "white",
    fontSize: isMobile ? "20px" : "32px",
    fontWeight: 600,
    fontFamily: '"Bricolage Grotesque", sans-serif',
    lineHeight: 1.2,
    zIndex: 20,
  }

  const textContainerStyles = {
    position: "absolute" as const,
    bottom: isMobile ? "8px" : "48px",
    right: isMobile ? "8px" : "24px",
    maxWidth: isMobile ? "200px" : "290px",
    zIndex: 20,
  }

  const headingStyles = {
    color: "white",
    fontSize: isMobile ? "10px" : "16px",
    fontWeight: 500,
    fontFamily: '"Bricolage Grotesque", sans-serif',
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "8px",
  }

  const paragraphStyles = {
    color: "white",
    fontSize: isMobile ? "12px" : "16px",
    fontFamily: '"Satoshi", sans-serif',
    lineHeight: 1.5,
  }

  return (
    <>
      <div style={titleStyles}>Why Choose EPℇC Corvux?</div>

      <div style={textContainerStyles}>
        <h4 style={headingStyles}>MARITIME ESG ADVANTAGES</h4>
        <p style={paragraphStyles}>
          <span style={{ fontWeight: 700 }}>EPℇC Corvux</span>
          <span>
            {" "}
            is built for modern shipping companies that need to simplify regulatory compliance and stay audit-ready
            year-round.
          </span>
        </p>
      </div>
    </>
  )
}
