export default function GeometricOverlay() {
  return (
    <div
      style={{
        width: 438,
        maxWidth: 438,
        left: 20,
        top: 20,
        position: "absolute",
        opacity: 0.8,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingLeft: 9.66,
          paddingRight: 9.66,
          opacity: 0.6,
          mixBlendMode: "overlay",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          data-variant="6"
          style={{
            width: 419,
            height: 500,
            position: "relative",
            transform: "rotate(-180deg)",
            transformOrigin: "top left",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 419,
              height: 500,
              left: 0,
              top: 0,
              position: "absolute",
              background: "black",
            }}
          />
        </div>
      </div>
    </div>
  )
}
