import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-emerald-600/30 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-[360px] w-[360px] rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 rounded-[2.6rem] border border-white/10 bg-white/5 px-10 py-12 backdrop-blur-lg lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">Qonfianza</p>
            <h3 className="text-3xl font-semibold leading-tight text-white">Tu correduría boutique de seguros</h3>
            <p className="text-base text-slate-200/80">
              Protegemos tu patrimonio y el de tu empresa con rigor, cercanía y estrategia. Confía en un partner
              independiente con más de 16 años de experiencia.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-emerald-200 hover:bg-emerald-500/20"
          >
            Iniciar conversación
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="mt-16 grid gap-12 text-sm text-slate-200/70 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Image
              src="/logo-qonfianza.svg"
              alt="Qonfianza"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="max-w-sm leading-relaxed">
              Esmeralda Melero Soto, corredora de seguros colegiada. Registro DGSFP F3274. Oficina en Viladecans
              (Barcelona), operativa en toda España.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400/70">
              <span>Cifrado y confidencialidad</span>
              <span className="h-px w-12 bg-white/20" />
              <span>Atención personalizada</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">Navegación</h4>
            <ul className="mt-6 space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#beneficios", label: "Beneficios" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors duration-300 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">Contacto</h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="mailto:info@qonfianza.com" className="transition-colors duration-300 hover:text-white">
                  info@qonfianza.com
                </a>
              </li>
              <li>
                <a href="tel:+34936090220" className="transition-colors duration-300 hover:text-white">
                  +34 936 090 220
                </a>
              </li>
              <li>Atención: Lun-Vie 09:00-18:00 · Sáb 10:00-14:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.3em] text-slate-400/70">
          © {new Date().getFullYear()} Qonfianza. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
