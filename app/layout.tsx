import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-variable",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading-variable",
})

export const metadata = {
  title: "Qonfianza - Correduría de Seguros",
  description:
    "Esmeralda Melero Soto, corredora de seguros con más de 16 años de experiencia. Seguros de hogar, vida, autos y más.",
  icons: {
    icon: "/favicon.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  )
}
