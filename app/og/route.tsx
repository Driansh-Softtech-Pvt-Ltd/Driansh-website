import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Default 1200x630 social share image used by every page's Open Graph tags.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1B4D 0%, #1E4EC4 60%, #1D9863 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Driansh Softtech</div>
        <div style={{ fontSize: 36, marginTop: 24, opacity: 0.9 }}>
          VoIP, Contact Center &amp; Custom Software Development
        </div>
        <div style={{ fontSize: 28, marginTop: 48, opacity: 0.75 }}>driansh.com</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
