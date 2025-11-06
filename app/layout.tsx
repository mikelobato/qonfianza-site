import type React from "react"
import { Manrope, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-variable",
})

const cormorant = Cormorant_Garamond({
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
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>{children}</body>
    </html>
  )
}
