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
          background: "linear-gradient(135deg, #0A1128 0%, #16244C 100%)",
          fontFamily: "sans-serif",
          fontSize: 108,
        }}
      >
        ✈️
      </div>
    ),
    { ...size },
  );
}
