"use client"

import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="rounded-full border border-[#0f5d4f]/15 bg-white/80 p-2 shadow-sm transition-all duration-300 group-hover:-translate-y-[2px] group-hover:shadow-lg">
            <Image
              src="/logo-qonfianza.svg"
              alt="Qonfianza - Correduría de Seguros"
              width={160}
              height={44}
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#0f5d4f]/70 sm:inline">
            Correduría boutique
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#servicios", label: "Servicios" },
            { href: "#beneficios", label: "Beneficios" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/nav relative text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f24]/65 transition-all duration-300 hover:text-[#0f5d4f]"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full scale-x-0 transform bg-gradient-to-r from-transparent via-[#0f5d4f] to-transparent transition-transform duration-300 group-hover/nav:scale-x-100" />
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f5d4f] via-[#0b3b32] to-[#0f5d4f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-lg shadow-[#0f5d4f]/25 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
          >
            Contactar
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-full border border-[#0f5d4f]/25 bg-white/75 p-2 text-[#0b1f24] transition-all duration-300 hover:border-[#0f5d4f]/40 hover:text-[#0f5d4f]"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/50 bg-white/95 pb-10 pt-6 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#servicios", label: "Servicios" },
              { href: "#beneficios", label: "Beneficios" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f24]/70 shadow-sm ring-1 ring-[#0f5d4f]/10 transition-colors duration-300 hover:text-[#0f5d4f]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0f5d4f] via-[#0b3b32] to-[#0f5d4f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-[#0f5d4f]/25 transition-all duration-300 hover:shadow-xl"
            >
              Contactar
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
