import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#081714] py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-[#0f5d4f]/30 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-[360px] w-[360px] rounded-full bg-[#d6b35d]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-10 py-12 backdrop-blur-lg lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Qonfianza</p>
            <h3 className="text-3xl font-semibold leading-tight text-white">Tu correduría boutique de seguros</h3>
            <p className="text-base text-white/70">
              Protegemos tu patrimonio y el de tu empresa con rigor, cercanía y estrategia. Confía en un partner
              independiente con más de 16 años de experiencia.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/15"
          >
            Iniciar conversación
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid gap-12 text-sm text-white/70 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Image
              src="/logo-qonfianza.svg"
              alt="Qonfianza"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-sm leading-relaxed">
              Esmeralda Melero Soto, corredora de seguros colegiada. Registro DGSFP F3274. Oficina central en Madrid,
              operativa en toda España.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Navegación</h4>
            <ul className="mt-6 space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Contacto</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="mailto:esmeralda@qonfianza.com" className="transition-colors duration-300 hover:text-white">
                  esmeralda@qonfianza.com
                </a>
              </li>
              <li>
                <a href="tel:+34644654944" className="transition-colors duration-300 hover:text-white">
                  +34 644 654 944
                </a>
              </li>
              <li>Atención: Lun-Vie 09:00-18:00 · Sáb 10:00-14:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Qonfianza. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
