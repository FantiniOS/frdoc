import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const PAGE_TITLE = "FRdoc — Endocrinologia é o corpo inteiro, todos os dias";
const PAGE_DESCRIPTION =
  "O FRdoc reúne a gestão da sua clínica e a rotina metabólica completa do paciente em uma única central — peso, medidas, sono, água, intestino, treinos, dieta TACO, glicemia e insulina.";
const OG_DESCRIPTION =
  "O FRdoc reúne a gestão da sua clínica e a rotina metabólica completa do paciente em uma única central — do consultório ao celular.";

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: PAGE_TITLE,
    template: "%s | FRdoc",
  },
  description: PAGE_DESCRIPTION,
  applicationName: "FRdoc",
  keywords: [
    "FRdoc",
    "ecossistema clínico endocrinologia",
    "central clínica endocrinologia",
    "acompanhamento metabólico de pacientes",
    "mapa de glicemia e insulina",
    "plano alimentar tabela TACO",
    "escala de Bristol sono hidratação",
    "prontuário endocrinologia LGPD",
  ],
  authors: [{ name: "FRdoc — Ecossistema Clínico", url: siteConfig.domain }],
  creator: "FRdoc",
  publisher: "FRdoc",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: "FRdoc",
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: OG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
