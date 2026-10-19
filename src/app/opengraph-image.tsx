import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.brandName} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0A1128 0%, #111C3D 55%, #0D1530 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(56,189,248,0.15)",
              border: "1px solid rgba(56,189,248,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ✈️
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            {site.brandName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Book, Change or Cancel Flights – Just One Call Away
          </div>
          <div style={{ fontSize: 28, color: "#7DD3FC" }}>
            US-based travel experts · Available 24/7
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            background: "#FF7A1A",
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 800,
            padding: "20px 44px",
            borderRadius: 999,
          }}
        >
          📞 Call {site.phoneDisplay}
        </div>
      </div>
    ),
    { ...size },
  );
}
