import { ImageResponse } from "next/og";

export const alt = "FRdoc — Ecossistema Clínico Dedicado e White-Label";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F8FAFC",
          padding: "56px 72px 60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Filete superior multicolorido */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #10B981 0%, #0EA5E9 50%, #6366F1 100%)",
          }}
        />

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <defs>
                  <linearGradient id="ogPulse" x1="2" y1="14" x2="24" y2="14" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                <path
                  d="M2.5 14H8L10.5 7.5L13.5 19L16.5 11L18.5 14H23.5"
                  stroke="url(#ogPulse)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "30px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em" }}>
                FRdoc
              </span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#0EA5E9" }}>
                2.0
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "9999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #CBD5E1",
              fontSize: "14px",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "0.06em",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#10B981" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#0EA5E9" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#6366F1" }} />
            <span style={{ marginLeft: "4px" }}>SINGLE-TENANT · WHITE-LABEL</span>
          </div>
        </div>

        {/* Center headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            Ecossistema clínico próprio, telemetria viva e instância 100% dedicada.
          </div>
          <div style={{ fontSize: "23px", color: "#475569", lineHeight: 1.45 }}>
            Painel Web e App Mobile com a marca da sua clínica para Endocrinologia, Nutrologia e Saúde Integrativa — com servidor e banco exclusivos.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          <div style={{ display: "flex", gap: "20px", fontSize: "15px", fontWeight: 700 }}>
            <span style={{ color: "#059669" }}>TELEMETRIA 70–140 mg/dL</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ color: "#0284C7" }}>SINCRONIA WEB ↔ APP</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ color: "#6366F1" }}>TABELA TACO 1:N</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ color: "#F59E0B" }}>LGPD &amp; CFM</span>
          </div>
          <div style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A" }}>
            frdoc.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
