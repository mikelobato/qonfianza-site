import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f4f8f7] to-[#eef1f4] pb-28 pt-32 lg:pb-40 lg:pt-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#0f5d4f]/12 blur-3xl" />
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d6b35d]/10 blur-3xl" />
        <div className="absolute -bottom-36 -left-24 h-[520px] w-[520px] rounded-full bg-[#0b3b32]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/15 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/75 shadow-sm">
                Correduría boutique
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b35d]/40 bg-[#d6b35d]/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#0b1f24]/80">
                Registro DGSFP F3274
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-2xl text-[3.2rem] leading-[1.05] text-[#0b1f24] sm:text-[3.6rem] lg:text-[4rem]">
                Seguros de <span className="text-[#0f5d4f]">Qonfianza</span> con sello boutique y visión estratégica
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#2f494f]">
                Soy <strong className="text-[#0b1f24]">Esmeralda Melero Soto</strong>, corredora independiente con más de
                16 años asesorando patrimonios personales y corporativos. Diseñamos soluciones aseguradoras a medida para
                quienes exigen acompañamiento cercano, análisis experto y absoluta discreción.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0f5d4f] via-[#0b3b32] to-[#0f5d4f] px-9 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-[#0f5d4f]/25 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl"
              >
                Solicitar propuesta
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#0f5d4f]/30 bg-white/80 px-9 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5d4f] shadow-sm transition-all duration-300 hover:border-[#0f5d4f]/45 hover:shadow-md"
              >
                Portfolio de servicios
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  value: "16+ años",
                  label: "Experiencia diseñando programas aseguradores de alto valor",
                },
                {
                  value: "Metodología 360°",
                  label: "Auditoría integral, negociación con aseguradoras y gestión delegada",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-3xl border border-[#0f5d4f]/12 bg-white/85 p-6 shadow-sm shadow-[#0f5d4f]/5 backdrop-blur"
                >
                  <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#0f5d4f]">{item.value}</p>
                  <p className="mt-2 text-sm text-[#2f494f]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#0f5d4f]/40 to-transparent" />
              <p className="text-sm uppercase tracking-[0.35em] text-[#0f5d4f]/70">Tranquilidad garantizada</p>
            </div>
          </div>

          <div className="relative pb-14">
            <div className="relative mx-auto max-w-[520px] rounded-[2.6rem] border border-white/70 bg-white/55 p-5 shadow-[0_30px_80px_-40px_rgba(15,61,79,0.55)] backdrop-blur">
              <div className="absolute -left-6 top-14 rounded-full border border-[#0f5d4f]/15 bg-white/80 px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/70 shadow-sm">
                Asesoría personal
              </div>
              <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0f5d4f]/6">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f5d4f]/15 via-transparent to-transparent" />
                <Image
                  src="/esmeralda-melero.avif"
                  alt="Esmeralda Melero Soto - Corredora de Seguros"
                  width={600}
                  height={760}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-12 left-8 right-8 origin-bottom rounded-3xl border border-[#0f5d4f]/12 bg-white/95 p-5 shadow-xl shadow-[#0f5d4f]/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#0f5d4f]/60">Registro</p>
                    <p className="text-2xl font-semibold text-[#0f5d4f]">DGSFP · F3274</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f5d4f]/60">
                      Firma responsable
                    </p>
                    <p className="text-sm font-medium text-[#2f494f]">Esmeralda Melero Soto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
