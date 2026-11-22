import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.brandName,
  keywords: [
    "FRdoc",
    "sistema para clínicas de endocrinologia",
    "sistema para nutrologia",
    "aplicativo próprio para clínica médica",
    "prontuário visual",
    "mapa de glicemia PDF",
    "dietas tabela TACO",
    "acompanhamento de pacientes",
    "saúde integrativa",
    "sigilo médico LGPD",
  ],
  authors: [{ name: `${siteConfig.brandName} — ${siteConfig.brandTagline}`, url: siteConfig.domain }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.shortDescription,
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
      </body>
    </html>
  );
}
