import { ImageResponse } from "next/og";

export const alt = "FRDOC — Tecnologia Clínica Registrada para Endocrinologia";
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
            <span style={{ fontSize: "30px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em" }}>
              FRdoc
            </span>
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
              fontSize: "13px",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#10B981" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#0EA5E9" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#6366F1" }} />
            <span style={{ marginLeft: "4px" }}>TECNOLOGIA REGISTRADA PARA ENDOCRINOLOGIA</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            O cuidado da sua clínica de endocrinologia, vivo entre uma consulta e outra.
          </div>
          <div style={{ fontSize: "23px", color: "#475569", lineHeight: 1.45 }}>
            Um painel clínico visual para o médico e um aplicativo com a marca da sua clínica para o paciente.
          </div>
        </div>

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
            <span style={{ color: "#059669" }}>GLICEMIA &amp; INSULINA</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ color: "#0284C7" }}>DIETAS TABELA TACO</span>
            <span style={{ color: "#CBD5E1" }}>·</span>
            <span style={{ color: "#6366F1" }}>SOMOS FRDOC</span>
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
