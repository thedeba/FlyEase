import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0F1C 0%, #111A2C 55%, #17223A 100%)",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(226,201,164,0.28)",
            borderRadius: 40,
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 92,
              fontWeight: 600,
              lineHeight: 1,
              color: "#F1E2CC",
              letterSpacing: "-0.04em",
            }}
          >
            F
          </div>
          <div
            style={{
              display: "flex",
              width: 54,
              height: 5,
              marginTop: 14,
              borderRadius: 999,
              background: "#F5821F",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
