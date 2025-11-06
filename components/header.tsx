"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/90 shadow-[0_12px_40px_-28px_rgba(15,34,48,0.55)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo-qonfianza.svg"
            alt="Qonfianza - Correduría de Seguros"
            width={170}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-emerald-900/70 sm:inline">
            Correduría boutique
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors duration-200 hover:text-emerald-700"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-200 transition-transform duration-200 hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-white shadow-[0_12px_30px_-20px_rgba(12,116,93,0.9)] transition-colors hover:bg-emerald-800"
          >
            Contactar
          </a>
        </nav>

        <button
          className="md:hidden rounded-full border border-emerald-200/70 bg-white/90 p-2 text-slate-700 shadow-sm transition-colors hover:border-emerald-400 hover:text-emerald-700"
          aria-label="Abrir menú"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
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

      {open && (
        <div className="md:hidden">
          <nav className="mx-4 mb-5 rounded-3xl border border-emerald-100 bg-white/95 p-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-lg shadow-emerald-900/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-transparent px-4 py-3 text-center transition-colors hover:border-emerald-200 hover:text-emerald-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-white shadow-[0_14px_30px_-18px_rgba(12,116,93,0.9)] transition-colors hover:bg-emerald-800"
                onClick={() => setOpen(false)}
              >
                Contactar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
